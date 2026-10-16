import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface AddQuestionOverlayProps {
  open: boolean
  onClose: () => void
}

export default function AddQuestionOverlay({ open, onClose }: AddQuestionOverlayProps) {
  const [visible, setVisible] = useState(open)
  const overlayRef = useRef<HTMLDivElement>(null)
  const drawerRef = useRef<HTMLElement>(null)

  // Mount on open
  useEffect(() => {
    if (open) setVisible(true)
  }, [open])

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
      className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.75)] backdrop-blur-[4px]"
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
        className="flex h-full w-[320px] max-w-[85vw] flex-col overflow-clip bg-white rounded-tr-[8px] rounded-br-[16px] [corner-top-right-shape:squircle] [corner-bottom-right-shape:squircle]"
      >
        <div
          data-node-id="114:8653"
          className="flex h-[41px] w-full shrink-0 items-center justify-between border-b border-[#eef3fb] bg-[#eef3fb] px-[16px] py-[8px]"
        />
      </aside>
    </div>
  )
}
