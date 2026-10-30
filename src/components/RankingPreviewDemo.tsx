import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const ROW_HEIGHT = 48
const ROW_GAP = 8
const ROW_OFFSET = ROW_HEIGHT + ROW_GAP

const RANK_SLOTS = [
  { width: 88, color: '#1B3380' },
  { width: 72, color: '#1B87E6' },
  { width: 56, color: '#54A5EC' },
  { width: 40, color: '#BFD6F9' },
]

const ORDER_ONE = [3, 0, 1, 2]
const ORDER_TWO = [1, 3, 0, 2]
const ORDER_THREE = [2, 1, 3, 0]

export default function RankingPreviewDemo() {
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const setInitial = () => {
      barRefs.current.forEach((el, index) => {
        if (!el) return
        gsap.set(el, {
          y: index * ROW_OFFSET,
          width: `${RANK_SLOTS[index].width}%`,
          backgroundColor: RANK_SLOTS[index].color,
          zIndex: 10 - index,
        })
      })
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInitial()
      return
    }

    const tl = gsap.timeline({ repeat: -1 })

    tl.call(setInitial)
    tl.to({}, { duration: 0.5 })

    const applyOrder = (order: number[], position: number) => {
      order.forEach((barIndex, slotIndex) => {
        const el = barRefs.current[barIndex]
        if (!el) return
        tl.to(
          el,
          {
            y: slotIndex * ROW_OFFSET,
            width: `${RANK_SLOTS[slotIndex].width}%`,
            backgroundColor: RANK_SLOTS[slotIndex].color,
            zIndex: 10 - slotIndex,
            duration: 0.7,
            ease: 'power2.inOut',
            overwrite: 'auto',
          },
          position,
        )
      })
    }

    applyOrder(ORDER_ONE, 0.5)
    applyOrder(ORDER_TWO, 1.5)
    applyOrder(ORDER_THREE, 2.5)

    tl.to({}, { duration: 2 }, 3.5)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="relative h-[216px] w-[360px] max-w-full">
      {RANK_SLOTS.map((slot, index) => (
        <div
          key={slot.color}
          ref={(el) => {
            barRefs.current[index] = el
          }}
          className="absolute left-0 top-0 h-[48px] rounded-[8px]"
          style={{
            width: `${slot.width}%`,
            backgroundColor: slot.color,
            transform: `translateY(${index * ROW_OFFSET}px)`,
          }}
        />
      ))}
    </div>
  )
}
