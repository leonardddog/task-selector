import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { WuIcon } from '@npm-questionpro/wick-ui-lib'

const TRACK_COLOR = '#f2f3f5'
const ACTIVE_TRACK_COLOR = '#e7eefd'
const INACTIVE_ICON_OPACITY = 0.45

export default function VotingPreviewDemo() {
  const trackARef = useRef<HTMLDivElement>(null)
  const trackBRef = useRef<HTMLDivElement>(null)
  const fillARef = useRef<HTMLDivElement>(null)
  const fillBRef = useRef<HTMLDivElement>(null)
  const iconARef = useRef<HTMLSpanElement>(null)
  const iconBRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const trackA = trackARef.current
    const trackB = trackBRef.current
    const fillA = fillARef.current
    const fillB = fillBRef.current
    const iconA = iconARef.current
    const iconB = iconBRef.current
    if (!trackA || !trackB || !fillA || !fillB || !iconA || !iconB) return

    const setInitial = () => {
      gsap.set([trackA, trackB], { backgroundColor: TRACK_COLOR })
      gsap.set(fillA, { height: '38%' })
      gsap.set(fillB, { height: '26%' })
      gsap.set([iconA, iconB], { opacity: INACTIVE_ICON_OPACITY, scale: 1 })
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInitial()
      return
    }

    const tl = gsap.timeline({ repeat: -1 })

    setInitial()
    tl.set([trackA, trackB], { backgroundColor: TRACK_COLOR })
    tl.set(fillA, { height: '38%' })
    tl.set(fillB, { height: '26%' })
    tl.set([iconA, iconB], { opacity: INACTIVE_ICON_OPACITY, scale: 1 })

    tl.to({}, { duration: 1 })

    tl.to(trackA, { backgroundColor: ACTIVE_TRACK_COLOR, duration: 0.25 }, 1)
    tl.to(fillA, { height: '68%', duration: 0.6, ease: 'power2.out' }, 1)
    tl.to(iconA, { opacity: 1, scale: 1.1, duration: 0.3 }, 1)

    tl.to(trackA, { backgroundColor: TRACK_COLOR, duration: 0.25 }, 2)
    tl.to(fillA, { height: '38%', duration: 0.4, ease: 'power2.inOut' }, 2)
    tl.to(iconA, { opacity: INACTIVE_ICON_OPACITY, scale: 1, duration: 0.25 }, 2)
    tl.to(trackB, { backgroundColor: ACTIVE_TRACK_COLOR, duration: 0.25 }, 2)
    tl.to(fillB, { height: '58%', duration: 0.6, ease: 'power2.out' }, 2)
    tl.to(iconB, { opacity: 1, scale: 1.1, duration: 0.3 }, 2)

    tl.to(trackB, { backgroundColor: TRACK_COLOR, duration: 0.25 }, 3)
    tl.to(fillB, { height: '26%', duration: 0.4, ease: 'power2.inOut' }, 3)
    tl.to(iconB, { opacity: INACTIVE_ICON_OPACITY, scale: 1, duration: 0.25 }, 3)
    tl.to(trackA, { backgroundColor: ACTIVE_TRACK_COLOR, duration: 0.25 }, 3)
    tl.to(fillA, { height: '80%', duration: 0.6, ease: 'power2.out' }, 3)
    tl.to(iconA, { opacity: 1, scale: 1.1, duration: 0.3 }, 3)

    tl.to({}, { duration: 2 }, 4)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="flex items-end justify-center gap-[32px]">
      <div className="flex flex-col items-center gap-[10px]">
        <span
          ref={iconARef}
          className="flex size-[24px] items-center justify-center opacity-50"
        >
          <WuIcon icon="wm-thumb-up" style={{ color: '#1b3380', fontSize: 24 }} />
        </span>
        <div
          ref={trackARef}
          className="relative h-[160px] w-[64px] overflow-hidden rounded-[10px] bg-[#f2f3f5]"
        >
          <div
            ref={fillARef}
            className="absolute inset-x-0 bottom-0 rounded-[10px] bg-[#1b87e6]"
            style={{ height: '38%' }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[10px]">
        <span
          ref={iconBRef}
          className="flex size-[24px] items-center justify-center opacity-50"
        >
          <WuIcon icon="wm-thumb-down" style={{ color: '#1b3380', fontSize: 24 }} />
        </span>
        <div
          ref={trackBRef}
          className="relative h-[160px] w-[64px] overflow-hidden rounded-[10px] bg-[#f2f3f5]"
        >
          <div
            ref={fillBRef}
            className="absolute inset-x-0 bottom-0 rounded-[10px] bg-[#d9c2e9]"
            style={{ height: '26%' }}
          />
        </div>
      </div>
    </div>
  )
}
