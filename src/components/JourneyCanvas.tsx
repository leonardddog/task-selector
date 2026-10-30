import type { ReactNode } from 'react'
import { WuIcon } from '@npm-questionpro/wick-ui-lib'
import type { IWuIcons } from '@npm-questionpro/wick-ui-lib'

interface JourneyCanvasProps {
  onAddQuestion: () => void
}

interface Persona {
  id: string
  label: string
  initials: string
  color: string
  from: string
  to: string
}

type SentimentLevel = 0 | 1 | 2 | 3 | 4

const STAGES = ['Discovery', 'First visit', 'Experience', 'Loyalty'] as const
const STEPS = ['Website/Social media', 'Entrance', 'Ordering', 'Waiting'] as const
const CHART_VIEW_WIDTH = 1120
const CHART_HEIGHT = 154
const CHART_TOP = 24
const CHART_STEP = 26

const PERSONAS: Persona[] = [
  {
    id: 'p1',
    label: 'Persona 1',
    initials: 'P1',
    color: '#b052a7',
    from: '#b052a7',
    to: '#d98bc9',
  },
  {
    id: 'p2',
    label: 'Persona 2',
    initials: 'P2',
    color: '#68a1c1',
    from: '#68a1c1',
    to: '#9fc4d9',
  },
  {
    id: 'p3',
    label: 'Persona 3',
    initials: 'P3',
    color: '#1dc9aa',
    from: '#1dc9aa',
    to: '#7ee0cb',
  },
]

const SENTIMENT_LINES: Record<'all' | 'p1' | 'p2' | 'p3', SentimentLevel[]> = {
  all: [2, 2, 0, 4],
  p1: [2, 1, 3, 4],
  p2: [2, 3, 0, 4],
  p3: [2, 4, 0, 0],
}

const TOUCHPOINTS: { icon: IWuIcons; label: string }[][] = [
  [
    { icon: 'wm-language', label: 'Website' },
    { icon: 'wm-share', label: 'Social media' },
    { icon: 'wm-search', label: 'Search engine' },
  ],
  [
    { icon: 'wm-door-sliding', label: 'Doorway' },
    { icon: 'wm-chair', label: 'Seating' },
  ],
  [
    { icon: 'wm-restaurant-menu', label: 'Printed menu' },
    { icon: 'wm-fastfood', label: 'Displayed food' },
  ],
  [],
]

function pointsFor(levels: SentimentLevel[]) {
  const stageWidth = CHART_VIEW_WIDTH / STAGES.length

  return levels
    .map((level, index) => `${(index + 0.5) * stageWidth},${CHART_TOP + level * CHART_STEP}`)
    .join(' ')
}

function PersonaToken({
  persona,
  size = 'md',
}: {
  persona: Persona
  size?: 'sm' | 'md'
}) {
  const compact = size === 'sm'

  return (
    <span
      className={`flex items-center justify-center rounded-[3px] border-2 bg-white ${
        compact ? 'size-[24px]' : 'size-[32px]'
      }`}
      style={{ borderColor: persona.color }}
      title={persona.label}
    >
      <span
        className={`flex items-center justify-center rounded-[1px] font-medium leading-none text-white ${
          compact ? 'size-[18px] text-[9px]' : 'size-[24px] text-[10px]'
        }`}
        style={{ background: `linear-gradient(135deg, ${persona.from}, ${persona.to})` }}
      >
        {persona.initials}
      </span>
    </span>
  )
}

function AllPersonaToken({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const compact = size === 'sm'

  return (
    <span
      className={`flex items-center justify-center rounded-[3px] border-2 border-dashed border-[#1b3380] bg-white text-[#1b3380] ${
        compact ? 'size-[24px]' : 'size-[32px]'
      }`}
    >
      <WuIcon icon="wm-group" style={{ fontSize: compact ? 16 : 20 }} />
    </span>
  )
}

function SentimentFace({ level }: { level: SentimentLevel }) {
  const mouth =
    level <= 1
      ? 'M -5 3 Q 0 8 5 3'
      : level === 2
        ? 'M -5 3 L 5 3'
        : 'M -5 6 Q 0 1 5 6'

  return (
    <>
      <circle cx={-5} cy={-4} r={1.5} fill="white" />
      <circle cx={5} cy={-4} r={1.5} fill="white" />
      <path
        d={mouth}
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </>
  )
}

function SentimentMarker({ level, color }: { level: SentimentLevel; color: string }) {
  return (
    <svg width={32} height={32} viewBox="-16 -16 32 32" aria-hidden="true">
      <circle r={16} fill={color} />
      <SentimentFace level={level} />
    </svg>
  )
}

function LaneHeader({
  icon,
  label,
  height,
  showChevron = true,
  collapsed = false,
  className = '',
  children,
}: {
  icon: IWuIcons
  label: string
  height?: number
  showChevron?: boolean
  collapsed?: boolean
  className?: string
  children?: ReactNode
}) {
  return (
    <div
      className={`journey-lane-header relative flex flex-col border-b border-r border-[rgba(0,0,0,0.1)] bg-[#f5f5f5] ${className}`}
      style={height ? { height } : undefined}
    >
      <div className="flex items-center px-[4px] py-[8px]">
        <span className="flex size-[24px] shrink-0 items-center justify-center text-[#545e6b]">
          <WuIcon icon={icon} style={{ fontSize: 12 }} />
        </span>
        <span className="flex-1 pt-[4px] text-[12px] font-medium leading-[16px] text-[#545e6b]">
          {label}
        </span>
        {showChevron && (
          <span className="flex size-[24px] shrink-0 items-center justify-center text-[#545e6b]">
            <WuIcon
              icon={collapsed ? 'wm-expand-more' : 'wm-expand-less'}
              style={{ fontSize: 12 }}
            />
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function LaneAddTrigger({
  position,
  label,
  onClick,
}: {
  position: 'top' | 'bottom'
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`absolute left-1/2 z-20 flex size-[24px] -translate-x-1/2 items-center justify-center rounded-full bg-[#1b3380] text-white shadow-sm transition-colors hover:bg-[#1b87e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3] focus-visible:ring-offset-1 ${
        position === 'top' ? 'top-0 -translate-y-1/2' : 'bottom-0 translate-y-1/2'
      }`}
    >
      <WuIcon icon="wm-add" style={{ fontSize: 14 }} />
    </button>
  )
}

function LaneCell({ tone, children }: { tone: 'stage' | 'step'; children: string }) {
  return (
    <div
      className={`flex min-h-[32px] items-center border-b border-r border-[rgba(0,0,0,0.1)] p-[4px] ${
        tone === 'stage' ? 'bg-[#d9dff2]' : 'bg-[#f0f2fa]'
      }`}
    >
      <span
        className={`flex-1 px-[4px] text-center text-[14px] leading-[20px] text-[#1b3380] xl:text-[16px] xl:leading-[24px] ${
          tone === 'stage' ? 'font-medium' : 'font-normal'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

function TouchpointCard({ icon, label }: { icon: IWuIcons; label: string }) {
  return (
    <div className="overflow-hidden rounded-[2px] bg-[#f5f7ff]">
      <div className="flex h-[32px] items-center bg-[rgba(0,0,0,0.05)] px-[4px]">
        <span className="flex size-[24px] items-center justify-center text-[#545e6b]">
          <WuIcon icon="wm-location-on" style={{ fontSize: 16 }} />
        </span>
      </div>
      <div className="flex h-[36px] items-center gap-[4px] p-[8px]">
        <span className="flex size-[20px] shrink-0 items-center justify-center text-[#545e6b]">
          <WuIcon icon={icon} style={{ fontSize: 16 }} />
        </span>
        <span className="truncate text-[13px] leading-[18px] text-[#545e6b] xl:text-[14px] xl:leading-[20px]">
          {label}
        </span>
      </div>
    </div>
  )
}

function PersonaTabs() {
  return (
    <div className="flex h-[48px] shrink-0 items-stretch overflow-x-auto border-t border-[rgba(0,0,0,0.1)] bg-[#eeeeee]">
      <button
        type="button"
        aria-label="All personas"
        aria-pressed="true"
        className="flex size-[48px] items-center justify-center bg-white"
      >
        <AllPersonaToken />
      </button>
      {PERSONAS.map((persona) => (
        <button
          key={persona.id}
          type="button"
          aria-label={persona.label}
          aria-pressed="false"
          className="flex size-[48px] items-center justify-center transition-colors hover:bg-[rgba(255,255,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4b71d3]"
        >
          <PersonaToken persona={persona} />
        </button>
      ))}
      <button
        type="button"
        aria-label="Add persona"
        className="flex size-[48px] items-center justify-center text-[#1b3380] transition-colors hover:bg-[rgba(255,255,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4b71d3]"
      >
        <span className="flex size-[32px] items-center justify-center rounded-[3px] border-2 border-[#1b3380] bg-white">
          <WuIcon icon="wm-person-add" style={{ fontSize: 16 }} />
        </span>
      </button>
    </div>
  )
}

export default function JourneyCanvas({ onAddQuestion }: JourneyCanvasProps) {
  const toolbar: { icon: IWuIcons; label: string }[] = [
    { icon: 'wm-undo', label: 'Undo' },
    { icon: 'wm-redo', label: 'Redo' },
    { icon: 'wm-tune', label: 'Journey options' },
  ]

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white font-['Fira_Sans'] text-[#545e6b]">
      <div className="flex h-[48px] shrink-0 items-center gap-[8px] p-[8px]">
        <h2 className="min-w-0 flex-1 truncate text-[20px] font-normal leading-[28px] text-[#545e6b] sm:text-[24px] sm:leading-[32px]">
          First time customer
        </h2>
        <div className="flex shrink-0 items-center gap-[8px]">
          {toolbar.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              title={item.label}
              className="flex size-[32px] items-center justify-center rounded-[2px] text-[#545e6b] transition-colors hover:bg-[rgba(27,51,128,0.06)] hover:text-[#1b3380] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              <WuIcon icon={item.icon} style={{ fontSize: 16 }} />
            </button>
          ))}
        </div>
      </div>

      <div className="journey-canvas-scroll min-h-0 flex-1 overflow-auto">
        <div className="journey-map flex min-h-full flex-col pb-[12px]">
          <div className="journey-grid">
            <div className="journey-lane-header min-h-[32px] border-b border-r border-[rgba(0,0,0,0.1)] bg-[#f5f5f5]" />
            {STAGES.map((stage) => (
              <LaneCell key={stage} tone="stage">
                {stage}
              </LaneCell>
            ))}

            <div className="journey-lane-header min-h-[32px] border-b border-r border-[rgba(0,0,0,0.1)] bg-[#f5f5f5]" />
            {STEPS.map((step) => (
              <LaneCell key={step} tone="step">
                {step}
              </LaneCell>
            ))}

            <LaneHeader icon="wm-sentiment-satisfied" label="Sentiment" height={154}>
              <div className="flex flex-col gap-[8px] px-[12px] py-[8px]">
                <AllPersonaToken size="sm" />
                <div className="flex flex-wrap gap-[6px]">
                  {PERSONAS.map((persona) => (
                    <PersonaToken key={persona.id} persona={persona} size="sm" />
                  ))}
                </div>
              </div>
            </LaneHeader>
            <div className="relative col-span-4 h-[154px] bg-[#f5f5f5]">
              <div className="absolute inset-0 grid grid-cols-4">
                {STAGES.map((stage) => (
                  <div
                    key={stage}
                    className="border-b border-r border-[rgba(0,0,0,0.1)]"
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0">
                {[0, 1, 2, 3, 4].map((line) => (
                  <div
                    key={line}
                    className="absolute left-0 right-0 h-px bg-[rgba(0,0,0,0.08)]"
                    style={{ top: CHART_TOP + line * CHART_STEP }}
                  />
                ))}
              </div>
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox={`0 0 ${CHART_VIEW_WIDTH} ${CHART_HEIGHT}`}
                preserveAspectRatio="none"
                role="img"
                aria-label="Sentiment by stage for each persona"
              >
                <polyline
                  points={pointsFor(SENTIMENT_LINES.all)}
                  fill="none"
                  stroke="#1b3380"
                  strokeWidth={2}
                  strokeDasharray="6 5"
                  vectorEffect="non-scaling-stroke"
                />
                {PERSONAS.map((persona) => (
                  <polyline
                    key={persona.id}
                    points={pointsFor(SENTIMENT_LINES[persona.id as 'p1' | 'p2' | 'p3'])}
                    fill="none"
                    stroke={persona.color}
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                {[...PERSONAS].reverse().map((persona) => {
                  const levels = SENTIMENT_LINES[persona.id as 'p1' | 'p2' | 'p3']
                  return levels.map((level, index) => (
                    <span
                      key={`${persona.id}-${index}`}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${(index + 0.5) * 25}%`,
                        top: CHART_TOP + level * CHART_STEP,
                      }}
                    >
                      <SentimentMarker level={level} color={persona.color} />
                    </span>
                  ))
                })}
              </div>
            </div>

            <LaneHeader
              icon="wm-horizontal-rule"
              label="Divider"
              height={40}
              showChevron={false}
            >
              <LaneAddTrigger
                position="top"
                label="Add journey item after Sentiment"
                onClick={onAddQuestion}
              />
            </LaneHeader>
            <div className="relative col-span-4 h-[40px] border-b border-r border-[rgba(0,0,0,0.1)] bg-white">
              <div className="absolute left-[8px] right-[8px] top-[18px] h-[4px] rounded-[1px] bg-[#e8e8e8]" />
            </div>
          </div>

          <div className="journey-grid min-h-[276px] flex-1">
            <LaneHeader icon="wm-location-on" label="Touchpoint" className="h-full min-h-[276px]">
              <LaneAddTrigger
                position="top"
                label="Add journey item after Divider"
                onClick={onAddQuestion}
              />
              <LaneAddTrigger
                position="bottom"
                label="Add journey item after Touchpoint"
                onClick={onAddQuestion}
              />
            </LaneHeader>
            {TOUCHPOINTS.map((items, index) => (
              <div
                key={STAGES[index]}
                className="flex h-full min-h-[276px] flex-col gap-[8px] border-b border-r border-[rgba(0,0,0,0.1)] bg-white p-[8px]"
              >
                {items.map((item) => (
                  <TouchpointCard key={item.label} icon={item.icon} label={item.label} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PersonaTabs />
    </div>
  )
}
