import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { WuIcon } from '@npm-questionpro/wick-ui-lib'
import QuestionPictogram from './QuestionPictogram'
import QuestionPreview from './QuestionPreview'
import SurveyQuestionPicker from './SurveyQuestionPicker'
import {
  journeyAnalysisGroup,
  journeyContentGroup,
  journeyPlanningGroup,
  journeyQuestionTypes,
  livePollsQuestionTypes,
  uxQuestionTypes,
  type JourneyQuestionGroup,
  type QuestionLayout,
  type QuestionOption,
  type QuestionSet,
} from './questionOptions'

interface AddQuestionOverlayProps {
  open: boolean
  onClose: () => void
  variant?: 'default' | 'floating'
  optionSet?: QuestionSet
  questionLayout?: QuestionLayout
  labSettingsOpen?: boolean
  groupedSurveyIcons?: boolean
  showPictograms?: boolean
}

function JourneyOptionGroup({
  group,
  onSelect,
  onPreview,
  onPreviewEnd,
}: {
  group: JourneyQuestionGroup
  onSelect: () => void
  onPreview: (option: QuestionOption) => void
  onPreviewEnd: () => void
}) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="text-[14px] font-medium leading-[24px] text-[#545e6b]">{group.label}</h3>
      <div className="flex flex-col gap-[8px]">
        {group.items.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={onSelect}
            onMouseEnter={() => onPreview(option)}
            onMouseLeave={onPreviewEnd}
            onFocus={() => onPreview(option)}
            onBlur={onPreviewEnd}
            className="flex h-[32px] w-full items-center gap-[16px] rounded-[6px] px-[4px] py-[8px] text-left text-[14px] leading-[16px] text-[#1b3380] transition-colors hover:bg-[#e7eefd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
          >
            <span className="flex size-[20px] shrink-0 items-center justify-center">
              <WuIcon icon={option.icon} style={{ color: '#1b3380', fontSize: 20 }} />
            </span>
            <span className="truncate">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function AddQuestionOverlay({
  open,
  onClose,
  variant = 'default',
  optionSet = 'livepolls',
  questionLayout = 'grid',
  labSettingsOpen = false,
  groupedSurveyIcons = false,
  showPictograms = true,
}: AddQuestionOverlayProps) {
  const questionTypes =
    optionSet === 'ux'
      ? uxQuestionTypes
      : optionSet === 'journey'
        ? journeyQuestionTypes
        : livePollsQuestionTypes

  const drawerWidthClass =
    optionSet === 'surveys'
      ? 'add-question-drawer add-question-drawer--survey'
      : optionSet === 'journey'
        ? 'add-question-drawer add-question-drawer--journey'
        : 'add-question-drawer'

  const [visible, setVisible] = useState(open)
  const [hoveredOption, setHoveredOption] = useState<QuestionOption | null>(null)
  const [shownOption, setShownOption] = useState<QuestionOption | null>(null)
  const [previewTick, setPreviewTick] = useState(0)
  const [previewLayout, setPreviewLayout] = useState<{ left: number; right: number } | null>(
    null,
  )
  const overlayRef = useRef<HTMLDivElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
  const previewPanelRef = useRef<HTMLDivElement>(null)
  const previewTweenRef = useRef<gsap.core.Tween | null>(null)
  const hasShownRef = useRef(false)

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const updatePreviewLayout = useCallback(() => {
    const drawer = drawerRef.current
    if (!drawer) return
    const panelWidth = labSettingsOpen
      ? (document.getElementById('labSettingsPanel')?.offsetWidth ?? 0)
      : 0
    setPreviewLayout({
      left: drawer.getBoundingClientRect().right,
      right: panelWidth,
    })
  }, [labSettingsOpen])

  const showPreview = (option: QuestionOption) => {
    previewTweenRef.current?.kill()
    setHoveredOption(option)
    setShownOption(option)
    setPreviewTick((tick) => tick + 1)
    updatePreviewLayout()
  }

  const hidePreview = () => {
    setHoveredOption(null)
    const el = previewPanelRef.current
    if (!el || prefersReducedMotion()) {
      previewTweenRef.current?.kill()
      hasShownRef.current = false
      setShownOption(null)
      setPreviewLayout(null)
      return
    }
    previewTweenRef.current?.kill()
    previewTweenRef.current = gsap.to(el, {
      opacity: 0,
      scale: 0.985,
      y: 4,
      duration: 0.12,
      ease: 'power1.in',
      overwrite: 'auto',
      onComplete: () => {
        hasShownRef.current = false
        setShownOption(null)
        setPreviewLayout(null)
      },
    })
  }

  // GSAP preview entrance — soft rise and scale (no filter: it would break backdrop-filter)
  useLayoutEffect(() => {
    if (!shownOption) {
      hasShownRef.current = false
      return
    }
    const el = previewPanelRef.current
    if (!el) return
    previewTweenRef.current?.kill()
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, scale: 1, y: 0 })
      hasShownRef.current = true
      return
    }
    const isSwap = hasShownRef.current
    hasShownRef.current = true
    previewTweenRef.current = gsap.fromTo(
      el,
      isSwap
        ? { opacity: 0.4, scale: 0.985 }
        : { opacity: 0, scale: 0.965, y: 8 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: isSwap ? 0.135 : 0.195,
        ease: 'power2.out',
        overwrite: 'auto',
      },
    )
    return () => {
      previewTweenRef.current?.kill()
    }
  }, [shownOption, previewTick])

  useEffect(
    () => () => {
      previewTweenRef.current?.kill()
    },
    [],
  )

  // Mount on open
  useEffect(() => {
    if (open) setVisible(true)
  }, [open])

  useEffect(() => {
    if (!open) {
      previewTweenRef.current?.kill()
      hasShownRef.current = false
      setHoveredOption(null)
      setShownOption(null)
      setPreviewLayout(null)
    }
  }, [open])

  useEffect(() => {
    if (!hoveredOption) return
    updatePreviewLayout()
    window.addEventListener('resize', updatePreviewLayout)
    return () => window.removeEventListener('resize', updatePreviewLayout)
  }, [hoveredOption, variant, updatePreviewLayout])

  // ESC to close (only while open, exit animation runs after open flips false)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Scroll lock while mounted (covers exit fade)
  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  // GSAP fade + slide — ultra-subtle 0.2s power1.out
  useEffect(() => {
    if (!visible) return
    const backdrop = overlayRef.current
    const drawer = drawerRef.current
    if (!backdrop) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(backdrop, { opacity: open ? 1 : 0 })
      if (drawer) gsap.set(drawer, { opacity: open ? 1 : 0, x: 0 })
      if (!open) setVisible(false)
      return
    }
    if (open) {
      const bTween = gsap.fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: 'power1.out', overwrite: 'auto' },
      )
      const dTween = drawer
        ? gsap.fromTo(
          drawer,
          { x: -24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.2, ease: 'power1.out', overwrite: 'auto' },
        )
        : undefined
      return () => {
        bTween.kill()
        dTween?.kill()
      }
    }
    const tl = gsap.timeline({
      defaults: { duration: 0.2, ease: 'power1.out', overwrite: 'auto' },
      onComplete: () => setVisible(false),
    })
    tl.to(backdrop, { opacity: 0 }, 0)
    if (drawer) tl.to(drawer, { x: -24, opacity: 0 }, 0)
    return () => {
      tl.kill()
    }
  }, [visible, open])

  if (!visible) return null

  return (
    <div
      ref={overlayRef}
      style={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.70)] backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Overlay"
      data-node-id="114:5237"
      data-name="Dark Background Overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <aside
        ref={drawerRef}
        style={{ opacity: 0 }}
        data-node-id="114:8652"
        data-name="Frame 427319940"
        aria-label="Drawer"
        className={`${drawerWidthClass} flex flex-col overflow-clip bg-white font-['Fira_Sans'] ${variant === 'floating'
          ? 'absolute left-2 top-2 bottom-2 rounded-[16px] border border-[#eef3fb] [corner-top-left-shape:squircle] [corner-top-right-shape:squircle] [corner-bottom-left-shape:squircle] [corner-bottom-right-shape:squircle]'
          : 'h-full rounded-tr-[8px] rounded-br-[8px]'
          }`}
      >
        <div
          data-node-id="95:3675"
          className="flex h-[41px] w-full shrink-0 items-center justify-between border-b border-[#eef3fb] bg-[#eef3fb] px-[16px] py-[8px]"
        >
          <span
            data-node-id="95:3676"
            className="text-[16px] font-medium leading-[24px] text-[#1b3380]"
          >
            {optionSet === 'journey' ? 'Add journey item' : 'Add question'}
          </span>
          <button
            data-node-id="95:3677"
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex size-[24px] shrink-0 items-center justify-center rounded-[4px] text-[#545e6b] transition-colors hover:bg-[rgba(27,51,128,0.06)]"
          >
            <WuIcon icon="wm-close" style={{ fontSize: 18 }} />
          </button>
        </div>
        {optionSet === 'surveys' ? (
          <SurveyQuestionPicker
            onSelect={onClose}
            onPreview={showPreview}
            onPreviewEnd={hidePreview}
            groupedIconColors={groupedSurveyIcons}
          />
        ) : optionSet === 'journey' ? (
          <div className="grid min-h-0 flex-1 grid-cols-2 items-start gap-[16px] overflow-y-auto p-[16px]">
            <div className="flex min-w-0 flex-col gap-[16px]">
              <JourneyOptionGroup
                group={journeyAnalysisGroup}
                onSelect={onClose}
                onPreview={showPreview}
                onPreviewEnd={hidePreview}
              />
              <div className="h-px w-full bg-[rgba(27,51,128,0.08)]" />
              <JourneyOptionGroup
                group={journeyPlanningGroup}
                onSelect={onClose}
                onPreview={showPreview}
                onPreviewEnd={hidePreview}
              />
            </div>
            <div className="flex min-w-0 flex-col gap-[16px]">
              <JourneyOptionGroup
                group={journeyContentGroup}
                onSelect={onClose}
                onPreview={showPreview}
                onPreviewEnd={hidePreview}
              />
            </div>
          </div>
        ) : (
          <div
            data-node-id="95:3678"
            className={
              questionLayout === 'list'
                ? 'add-question-grid flex min-h-0 flex-1 flex-col content-start gap-[16px] overflow-y-auto p-[16px]'
                : 'add-question-grid grid min-h-0 flex-1 grid-cols-2 content-start gap-[16px] overflow-y-auto p-[16px]'
            }
          >
            {questionTypes.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={onClose}
                onMouseEnter={() => showPreview(option)}
                onMouseLeave={hidePreview}
                onFocus={() => showPreview(option)}
                onBlur={hidePreview}
                className={
                  questionLayout === 'list'
                    ? 'add-question-card group flex h-[40px] w-full shrink-0 items-center gap-[16px] rounded-[4px] p-[8px] text-left text-[16px] leading-[24px] text-[#1b3380] transition-[background-color,border-color,border-radius,color,opacity] duration-150 hover:bg-[#e7eefd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]'
                    : 'add-question-card group flex h-[84px] flex-col items-center justify-center gap-[8px] rounded-[6px] border border-[#c2d1f4] bg-white p-[8px] text-[#545e6b] transition-[background-color,border-color,border-radius,color,opacity] duration-150 hover:rounded-[8px] hover:border-transparent hover:bg-[#e7eefd] hover:text-[#1b3380] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]'
                }
              >
                {questionLayout === 'list' ? (
                  <>
                    <span className="flex size-[20px] shrink-0 items-center justify-center">
                      <WuIcon icon={option.icon} style={{ color: '#1b3380', fontSize: 20 }} />
                    </span>
                    <span className="truncate">{option.label}</span>
                  </>
                ) : (
                  <>
                    <span className="flex h-[36px] w-[48px] shrink-0 items-center justify-center">
                      {showPictograms && option.pictogram ? (
                        <QuestionPictogram
                          name={option.pictogram}
                          className="h-[36px] w-[48px]"
                        />
                      ) : (
                        <WuIcon icon={option.icon} style={{ color: '#1b3380', fontSize: 20 }} />
                      )}
                    </span>
                    <span className="text-[14px] leading-[16px] group-hover:font-medium">
                      {option.label}
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        )}
      </aside>
      {shownOption &&
        previewLayout &&
        createPortal(
          <div
            className="pointer-events-none fixed bottom-0 top-0 z-[60] hidden items-center justify-center xl:flex min-[2560px]:justify-start min-[2560px]:pl-[20vw]"
            style={{ left: previewLayout.left, right: previewLayout.right }}
          >
            <QuestionPreview
              ref={previewPanelRef}
              option={shownOption}
              voteDemo={optionSet === 'ux' && shownOption.label === 'Voting'}
              rankDemo={optionSet === 'livepolls' && shownOption.label === 'Ranking'}
            />
          </div>,
          document.body,
        )}
    </div>
  )
}
