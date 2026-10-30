import { useState } from 'react'
import { WuIcon } from '@npm-questionpro/wick-ui-lib'
import Switch from './Switch'

interface LivePollBuilderProps {
  onAddQuestion: () => void
}

export default function LivePollBuilder({ onAddQuestion }: LivePollBuilderProps) {
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [multipleSelection, setMultipleSelection] = useState(false)

  return (
    <div className="flex w-full max-w-[928px] flex-col font-['Fira_Sans'] text-[#545e6b]">
      <header className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-[16px]">
          <h2 className="text-[24px] font-medium leading-[32px]">Untitled LivePoll</h2>
          <div className="flex items-center gap-[16px]">
            <div className="flex h-[32px] overflow-hidden rounded-[4px]">
              <button
                type="button"
                className="bg-[#1b87e6] px-[20px] text-[14px] leading-[16px] text-white transition-colors hover:bg-[#1677cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
              >
                Start
              </button>
              <button
                type="button"
                aria-label="Start options"
                title="Start options"
                className="flex w-[28px] items-center justify-center border-l border-white/30 bg-[#1b87e6] text-white transition-colors hover:bg-[#1677cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
              >
                <WuIcon icon="wm-keyboard-arrow-down" style={{ fontSize: 18 }} />
              </button>
            </div>
            <button
              type="button"
              className="text-[14px] leading-[16px] text-[#1b87e6] transition-colors hover:text-[#1677cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              Preview
            </button>
          </div>
        </div>

        <div className="mt-[20px] flex items-center gap-[24px] border-b border-[#dfe3e8]">
          <button
            type="button"
            aria-current="page"
            className="-mb-px border-b-2 border-[#1b87e6] pb-[10px] text-[14px] font-medium leading-[16px] text-[#1b87e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
          >
            Questions
          </button>
          <div className="flex items-center gap-[8px] pb-[10px]">
            <button
              type="button"
              className="text-[14px] leading-[16px] text-[#7b8794] transition-colors hover:text-[#545e6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              Profile questions
            </button>
            <span className="rounded-[2px] bg-[#fdf3d0] px-[6px] py-[2px] text-[10px] font-medium leading-[12px] text-[#a37b1f]">
              Beta
            </span>
          </div>
        </div>
      </header>

      <section className="mt-[12px] rounded-[4px] border border-[#dfe3e8] px-[16px] py-[12px]">
        <p className="text-[12px] leading-[16px] text-[#9b9b9b]">1 question</p>
        <p className="mt-[4px] text-[14px] leading-[20px] text-[#7b8794]">
          Engage your audience with polls and competitive quizzes
        </p>
      </section>

      <div className="relative mt-[32px]">
        <section className="rounded-[6px] border border-[#1b87e6] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
          <div className="flex flex-wrap items-center gap-[8px] px-[16px] pt-[13px]">
            <span className="flex size-[24px] shrink-0 items-center justify-center rounded-[2px] bg-[#1b87e6] text-[12px] font-medium leading-none text-white">
              1
            </span>
            <WuIcon icon="wm-grid-view" style={{ fontSize: 16, color: '#545e6b' }} />
            <span className="text-[14px] leading-[20px]">Option selection</span>
            <div className="ml-auto flex items-center gap-[12px]">
              <button
                type="button"
                className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#1b87e6] transition-colors hover:text-[#1677cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
              >
                <WuIcon icon="wm-slideshow" style={{ fontSize: 16 }} />
                Speaker notes
              </button>
              <button
                type="button"
                aria-label="Copy question"
                title="Copy question"
                className="flex size-[20px] items-center justify-center rounded-[2px] text-[#9b9b9b] transition-colors hover:bg-[rgba(27,51,128,0.06)] hover:text-[#545e6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
              >
                <WuIcon icon="wm-content-copy" style={{ fontSize: 16 }} />
              </button>
            </div>
          </div>

          <div className="flex items-start justify-between gap-[16px] px-[36px] pt-[14px]">
            <span className="text-[20px] leading-[28px] text-[#9b9b9b]">Question</span>
            <button
              type="button"
              aria-label="Add image"
              title="Add image"
              className="mt-[6px] flex size-[20px] items-center justify-center rounded-[2px] text-[#9b9b9b] transition-colors hover:bg-[rgba(27,51,128,0.06)] hover:text-[#545e6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              <WuIcon icon="wm-image" style={{ fontSize: 16 }} />
            </button>
          </div>

          <div className="flex flex-col items-start gap-[16px] px-[52px] pt-[14px]">
            <span className="text-[14px] leading-[20px]">Option 1</span>
            <span className="text-[14px] leading-[20px]">Option 2</span>
            <button
              type="button"
              aria-label="Add option"
              title="Add option"
              className="mt-[2px] flex size-[24px] items-center justify-center rounded-[2px] border border-[#c9ced4] text-[#9b9b9b] transition-colors hover:border-[#1b87e6] hover:text-[#1b87e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              <WuIcon icon="wm-add" style={{ fontSize: 16 }} />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-[16px] px-[16px] pb-[22px] pt-[24px]">
            <div className="flex items-center gap-[8px]">
              <span className="text-[12px] leading-[16px]">Set correct answer</span>
              <Switch
                checked={correctAnswer}
                label="Set correct answer"
                activeColor="#1b87e6"
                onChange={setCorrectAnswer}
              />
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[12px] leading-[16px]">Multiple selection</span>
              <Switch
                checked={multipleSelection}
                label="Multiple selection"
                activeColor="#1b87e6"
                onChange={setMultipleSelection}
              />
            </div>
          </div>
        </section>

        <button
          type="button"
          aria-label="Add question above"
          title="Add question"
          onClick={onAddQuestion}
          className="absolute left-1/2 top-0 z-10 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1b87e6] text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#1677cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b87e6] focus-visible:ring-offset-1"
        >
          <WuIcon icon="wm-add" style={{ fontSize: 12 }} />
        </button>
        <button
          type="button"
          aria-label="Add question below"
          title="Add question"
          onClick={onAddQuestion}
          className="absolute bottom-0 left-1/2 z-10 flex size-[16px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[#1b87e6] text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#1677cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b87e6] focus-visible:ring-offset-1"
        >
          <WuIcon icon="wm-add" style={{ fontSize: 12 }} />
        </button>
      </div>
    </div>
  )
}
