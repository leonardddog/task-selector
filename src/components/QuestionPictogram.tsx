import type { ReactNode } from 'react'

export type PictogramName =
  | 'multiple-choice'
  | 'this-or-that'
  | 'word-cloud'
  | 'livefeed'
  | 'heatmap'
  | 'ranking'
  | 'rating'
  | 'conversation'
  | 'fill-in-the-blank'
  | 'idea-mark'
  | 'survey'
  | 'video'
  | 'voting'
  | 'photo-journal'

const blue = {
  paper: '#FFFFFF',
  pale: '#EBF8FF',
  light: '#D7EFFF',
  sky: '#C2DEFF',
  mist: '#AAD0FF',
  soft: '#94C1F3',
  mid: '#7DB2E7',
  accent: '#5194CF',
  strong: '#3B85C3',
  deep: '#256CAC',
  dark: '#184994',
  navy: '#1C337F',
} as const

const stroke = {
  stroke: blue.navy,
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

interface TiltedCardProps {
  x: number
  y: number
  w: number
  h: number
  rotate?: number
  fill?: string
  back?: boolean
  children?: ReactNode
}

function TiltedCard({
  x,
  y,
  w,
  h,
  rotate = -6,
  fill = blue.paper,
  back = false,
  children,
}: TiltedCardProps) {
  return (
    <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`}>
      {back && (
        <rect x={x + 3.5} y={y + 3} width={w} height={h} rx={3} fill={blue.light} />
      )}
      <rect x={x} y={y} width={w} height={h} rx={3} fill={fill} {...stroke} />
      {children}
    </g>
  )
}

function Star({ cx, cy, size = 4.8, fill }: { cx: number; cy: number; size?: number; fill: string }) {
  return (
    <path
      transform={`translate(${cx} ${cy}) scale(${size / 5})`}
      d="M0-5.1 1.18-1.62 4.85-1.55 1.9.62 2.94 4.05 0 2.05-2.94 4.05-1.9.62-4.85-1.55-1.18-1.62Z"
      fill={fill}
      {...stroke}
      strokeWidth={1.35}
    />
  )
}

function Check({ x, y, color = blue.paper, width = 1.6 }: { x: number; y: number; color?: string; width?: number }) {
  return (
    <path
      d={`M${x} ${y} l1.7 1.8 3.4-4`}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function Pin({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path
        d={`M${x} ${y} c-5 0-8 3.4-8 7.6 0 5.4 8 13.4 8 13.4s8-8 8-13.4c0-4.2-3-7.6-8-7.6Z`}
        fill={blue.dark}
        {...stroke}
      />
      <circle cx={x} cy={y + 7.4} r={2.6} fill={blue.paper} />
    </g>
  )
}

const scenes: Record<PictogramName, ReactNode> = {
  'multiple-choice': (
    <>
      <g transform="rotate(12 28 25)">
        <rect x={11} y={11} width={27} height={29} rx={3} fill={blue.pale} {...stroke} />
      </g>
      <g transform="rotate(-14 27 24)">
        <rect x={20} y={7} width={27} height={30} rx={3} fill={blue.sky} {...stroke} />
      </g>
      <TiltedCard x={16} y={9} w={28} h={31} rotate={-4}>
        <rect x={20} y={14} width={19} height={5} rx={1.2} fill={blue.dark} />
        <Check x={22} y={17} />
        <rect x={20} y={22} width={15} height={3} rx={1} fill={blue.mist} />
        <rect x={20} y={27} width={18} height={3} rx={1} fill={blue.accent} />
        <rect x={20} y={32} width={13} height={3} rx={1} fill={blue.mist} />
      </TiltedCard>
    </>
  ),
  'this-or-that': (
    <>
      <TiltedCard x={8} y={9} w={24} h={30} rotate={-10} fill={blue.sky}>
        <rect x={12} y={15} width={13} height={3.5} rx={1.2} fill={blue.paper} />
        <rect x={12} y={21} width={16} height={3} rx={1} fill={blue.strong} />
        <rect x={12} y={27} width={9} height={3} rx={1} fill={blue.mid} />
      </TiltedCard>
      <TiltedCard x={31} y={8} w={24} h={30} rotate={9} fill={blue.dark}>
        <path
          d="M38 22.5l5 5 8.5-10"
          fill="none"
          stroke={blue.paper}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </TiltedCard>
      <path
        d="M30 41.5h7"
        stroke={blue.accent}
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="1 3"
      />
    </>
  ),
  'word-cloud': (
    <TiltedCard x={12} y={8} w={40} h={32} rotate={-5}>
      <rect x={17} y={13} width={12} height={4} rx={1.2} fill={blue.dark} />
      <rect x={31} y={13} width={8} height={4} rx={1} fill={blue.accent} />
      <rect x={41} y={13} width={6} height={4} rx={1} fill={blue.mist} />
      <rect x={17} y={20} width={7} height={3.5} rx={1} fill={blue.mist} />
      <rect x={26} y={20} width={15} height={4.5} rx={1.2} fill={blue.deep} />
      <rect x={43} y={20} width={5} height={3.5} rx={1} fill={blue.strong} />
      <rect x={18} y={27} width={9} height={3.5} rx={1} fill={blue.strong} />
      <rect x={29} y={27} width={6} height={3.5} rx={1} fill={blue.dark} />
      <rect x={37} y={27} width={10} height={3.5} rx={1} fill={blue.light} />
      <rect x={20} y={33} width={14} height={3.5} rx={1} fill={blue.accent} />
      <rect x={36} y={33} width={7} height={3.5} rx={1} fill={blue.soft} />
    </TiltedCard>
  ),
  livefeed: (
    <>
      <g>
        <rect x={8} y={9} width={36} height={21} rx={6} fill={blue.paper} {...stroke} />
        <path d="M16 29.5v6l6.5-5" fill={blue.paper} {...stroke} />
        <rect x={14} y={14.5} width={20} height={3.5} rx={1} fill={blue.mist} />
        <rect x={14} y={20.5} width={14} height={3.5} rx={1} fill={blue.accent} />
        <circle cx={40.5} cy={13.5} r={4} fill={blue.strong} />
        <circle cx={40.5} cy={13.5} r={1.5} fill={blue.paper} />
      </g>
      <g>
        <rect x={32} y={26} width={24} height={13} rx={5} fill={blue.dark} {...stroke} />
        <path d="M48 38.5l1.5 5 5.5-4.5" fill={blue.dark} {...stroke} />
        <rect x={37} y={30} width={12} height={2.5} rx={1} fill={blue.paper} />
        <rect x={37} y={34.5} width={8} height={2.5} rx={1} fill={blue.mid} />
      </g>
    </>
  ),
  heatmap: (
    <TiltedCard x={11} y={8} w={42} h={32} rotate={-4}>
      <ellipse cx={32} cy={24} rx={17} ry={12} fill={blue.pale} />
      <ellipse cx={32.5} cy={24} rx={12} ry={9} fill={blue.sky} />
      <ellipse cx={33} cy={24} rx={7.5} ry={6} fill={blue.accent} />
      <ellipse cx={33.5} cy={24} rx={3.4} ry={3.4} fill={blue.deep} />
      <circle cx={33.5} cy={24} r={1.1} fill={blue.paper} />
    </TiltedCard>
  ),
  ranking: (
    <>
      <rect x={12} y={30} width={12} height={11} rx={1.8} fill={blue.dark} {...stroke} />
      <rect x={26} y={22} width={12} height={19} rx={1.8} fill={blue.accent} {...stroke} />
      <rect x={40} y={14} width={12} height={27} rx={1.8} fill={blue.soft} {...stroke} />
      <circle cx={18} cy={35.5} r={1.5} fill={blue.paper} />
      <circle cx={30} cy={35.5} r={1.5} fill={blue.paper} />
      <circle cx={34} cy={35.5} r={1.5} fill={blue.paper} />
      <circle cx={46} cy={18} r={1.5} fill={blue.paper} />
      <circle cx={46} cy={23} r={1.5} fill={blue.paper} />
      <circle cx={46} cy={28} r={1.5} fill={blue.paper} />
    </>
  ),
  rating: (
    <TiltedCard x={10} y={9} w={44} h={30} rotate={-5}>
      <Star cx={16} cy={24} fill={blue.dark} />
      <Star cx={24} cy={24} fill={blue.deep} />
      <Star cx={32} cy={24} fill={blue.accent} />
      <Star cx={40} cy={24} fill={blue.paper} />
      <Star cx={48} cy={24} fill={blue.paper} />
    </TiltedCard>
  ),
  conversation: (
    <>
      <g>
        <rect x={8} y={8} width={37} height={20} rx={6} fill={blue.paper} {...stroke} />
        <path d="M16 27.5v6l6.5-5" fill={blue.paper} {...stroke} />
        <rect x={14} y={13} width={22} height={3.5} rx={1} fill={blue.mist} />
        <rect x={14} y={19} width={15} height={3.5} rx={1} fill={blue.accent} />
        <circle cx={40} cy={17.5} r={2} fill={blue.strong} />
      </g>
      <g>
        <rect x={30} y={26} width={26} height={14} rx={5} fill={blue.dark} {...stroke} />
        <path d="M36 39.5l-1 5 5.5-4.5" fill={blue.dark} {...stroke} />
        <circle cx={37.5} cy={33} r={1.6} fill={blue.paper} />
        <circle cx={43} cy={33} r={1.6} fill={blue.paper} />
        <circle cx={48.5} cy={33} r={1.6} fill={blue.paper} />
      </g>
    </>
  ),
  'fill-in-the-blank': (
    <TiltedCard x={12} y={8} w={40} h={32} rotate={-4}>
      <rect x={17} y={14} width={23} height={3.5} rx={1} fill={blue.mist} />
      <rect x={17} y={21} width={8} height={3.5} rx={1} fill={blue.accent} />
      <path
        d="M28 27h17"
        stroke={blue.navy}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <rect x={35.5} y={20.5} width={2} height={6.5} rx={1} fill={blue.dark} />
      <rect x={17} y={32} width={16} height={3.5} rx={1} fill={blue.light} />
      <rect x={36} y={32} width={6} height={3.5} rx={1} fill={blue.light} />
    </TiltedCard>
  ),
  'idea-mark': (
    <>
      <TiltedCard x={10} y={10} w={34} h={28} rotate={-6}>
        <rect x={13} y={13} width={28} height={22} rx={2} fill={blue.sky} />
        <circle cx={36} cy={19} r={3} fill={blue.paper} />
        <path d="M13 35l9-12 6 8 5-6 8 10Z" fill={blue.accent} />
      </TiltedCard>
      <Pin x={46} y={5} />
      <path
        d="M17 6.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"
        fill={blue.strong}
      />
    </>
  ),
  survey: (
    <TiltedCard x={13} y={7} w={32} h={34} rotate={-5}>
      <rect x={26} y={4.5} width={12} height={6} rx={2} fill={blue.soft} {...stroke} />
      <rect x={29.5} y={6.3} width={5} height={1.6} rx={0.8} fill={blue.paper} />
      <rect x={18} y={15} width={5} height={5} rx={1} fill={blue.dark} {...stroke} />
      <path
        d="M19.2 17.6l1.1 1.2 2-2.5"
        fill="none"
        stroke={blue.paper}
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={26} y={16} width={14} height={3} rx={1} fill={blue.mist} />
      <rect x={18} y={23} width={5} height={5} rx={1} fill={blue.paper} {...stroke} />
      <rect x={26} y={24} width={11} height={3} rx={1} fill={blue.mist} />
      <rect x={18} y={31} width={5} height={5} rx={1} fill={blue.paper} {...stroke} />
      <rect x={26} y={32} width={13} height={3} rx={1} fill={blue.accent} />
    </TiltedCard>
  ),
  video: (
    <>
      <TiltedCard x={11} y={10} w={38} h={27} rotate={-5}>
        <rect x={14} y={13} width={32} height={21} rx={2} fill={blue.sky} />
        <path d="M28 18.5l8.5 5-8.5 5Z" fill={blue.dark} />
        <rect x={14} y={31.4} width={32} height={2} fill={blue.accent} />
        <rect x={14} y={31.4} width={13} height={2} fill={blue.dark} />
      </TiltedCard>
      <circle cx={45} cy={8.5} r={3.2} fill={blue.deep} />
      <circle cx={45} cy={8.5} r={1.2} fill={blue.paper} />
    </>
  ),
  voting: (
    <>
      <TiltedCard x={9} y={8} w={31} h={32} rotate={-6}>
        <circle cx={17} cy={16} r={3} fill={blue.dark} />
        <path
          d="M15.7 16.2l1 1 1.9-2.1"
          fill="none"
          stroke={blue.paper}
          strokeWidth={1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x={23} y={14.5} width={12} height={3} rx={1} fill={blue.mist} />
        <circle cx={17} cy={24} r={3} fill={blue.paper} {...stroke} strokeWidth={1.2} />
        <rect x={23} y={22.5} width={10} height={3} rx={1} fill={blue.mist} />
        <circle cx={17} cy={32} r={3} fill={blue.paper} {...stroke} strokeWidth={1.2} />
        <rect x={23} y={30.5} width={13} height={3} rx={1} fill={blue.accent} />
      </TiltedCard>
      <g transform="rotate(9 45 15)">
        <circle cx={45} cy={15} r={7} fill={blue.soft} {...stroke} />
        <path
          d="M41.5 15l2.5 2.5 5-5.5"
          fill="none"
          stroke={blue.paper}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  ),
  'photo-journal': (
    <>
      <g transform="rotate(-8 27 25)">
        <rect x={10} y={10} width={24} height={30} rx={2} fill={blue.light} {...stroke} />
        <rect x={14} y={15} width={12} height={2.5} rx={1} fill={blue.accent} />
        <rect x={14} y={20} width={16} height={2.5} rx={1} fill={blue.soft} />
        <rect x={14} y={25} width={10} height={2.5} rx={1} fill={blue.soft} />
      </g>
      <g transform="rotate(5 40 24)">
        <rect x={25} y={6} width={28} height={34} rx={2} fill={blue.paper} {...stroke} />
        <rect x={29} y={10} width={20} height={20} rx={1} fill={blue.sky} />
        <circle cx={44} cy={16} r={2.5} fill={blue.paper} />
        <path d="M29 30l6-8 4 5 4-4 6 7Z" fill={blue.accent} />
        <rect x={31} y={34} width={12} height={2.5} rx={1} fill={blue.soft} />
      </g>
    </>
  ),
}

interface QuestionPictogramProps {
  name: PictogramName
  className?: string
}

export default function QuestionPictogram({ name, className }: QuestionPictogramProps) {
  return (
    <svg
      viewBox="0 0 64 48"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {scenes[name]}
    </svg>
  )
}
