import type { Ref } from 'react'
import { WuIcon } from '@npm-questionpro/wick-ui-lib'
import RankingPreviewDemo from './RankingPreviewDemo'
import VotingPreviewDemo from './VotingPreviewDemo'
import type { QuestionOption } from './questionOptions'

interface QuestionPreviewProps {
  option: QuestionOption
  ref?: Ref<HTMLDivElement>
  voteDemo?: boolean
  rankDemo?: boolean
}

export default function QuestionPreview({
  option,
  ref,
  voteDemo = false,
  rankDemo = false,
}: QuestionPreviewProps) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="question-preview pointer-events-none flex flex-col gap-[16px] overflow-clip rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[rgba(0,0,0,0.8)] font-['Fira_Sans'] shadow-[0px_16px_48px_0px_rgba(0,0,0,0.35)] backdrop-blur-[4px]"
    >
      <div className="flex shrink-0 flex-col gap-[16px] px-[16px] pt-[16px]">
        <div className="flex items-center gap-[4px]">
          <span className="flex size-[32px] shrink-0 items-center justify-center">
            <WuIcon icon={option.icon} style={{ color: '#fff', fontSize: 20 }} />
          </span>
          <span className="text-[20px] font-medium leading-[32px] text-white">{option.label}</span>
        </div>
        <p className="text-[16px] font-normal leading-[24px] text-white/75">{option.description}</p>
      </div>

      <div className="mx-[12px] mb-[12px] flex min-h-0 flex-1 flex-col items-center justify-center overflow-clip rounded-[6px] bg-white">
        {voteDemo ? (
          <VotingPreviewDemo />
        ) : rankDemo ? (
          <RankingPreviewDemo />
        ) : (
          <div className="flex w-[432px] max-w-full flex-col gap-[16px]">
            {option.comments.map((comment, index) => (
              <div
                key={`${comment.author}-${index}`}
                className={`flex w-full gap-[16px] ${index > 0 ? 'pl-[48px]' : ''}`}
              >
                <span className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-[#e8e8e8] text-[14px] leading-[16px] text-[#9b9b9b]">
                  {comment.initials}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px] text-[14px] leading-[20px]">
                    <span className="font-medium text-[#545e6b]">{comment.author}</span>
                    <span className="text-[#9b9b9b]">{comment.time}</span>
                  </div>
                  <p className="text-[14px] leading-[20px] text-[#545e6b]">{comment.text}</p>
                  <div className="flex items-center gap-[8px]">
                    <span className="flex min-h-[32px] items-center gap-[4px] rounded-[4px] px-[8px] py-[8px] text-[14px] leading-[16px] text-[#1b87e6]">
                      Reply
                      <WuIcon icon="wm-reply" style={{ fontSize: 18 }} />
                    </span>
                    {comment.replies && (
                      <span className="flex min-h-[32px] items-center gap-[4px] rounded-[4px] px-[8px] py-[8px] text-[14px] leading-[16px] text-[#1b87e6]">
                        {comment.replies}
                        <WuIcon icon="wm-keyboard-arrow-up" style={{ fontSize: 18 }} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
