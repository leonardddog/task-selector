import { useState } from 'react'
import { WuIcon } from '@npm-questionpro/wick-ui-lib'
import type { IWuIcons } from '@npm-questionpro/wick-ui-lib'
import Switch from './Switch'

interface ToolbarButtonProps {
  icon: IWuIcons
  label: string
}

function ToolbarButton({ icon, label }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="flex size-[20px] shrink-0 items-center justify-center rounded-[2px] text-[#545e6b] transition-colors hover:bg-[rgba(27,51,128,0.06)] hover:text-[#1b3380] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
    >
      <WuIcon icon={icon} style={{ fontSize: 16 }} />
    </button>
  )
}

const formattingTools: ToolbarButtonProps[] = [
  { icon: 'wm-format-bold', label: 'Bold' },
  { icon: 'wm-format-italic', label: 'Italic' },
  { icon: 'wm-format-underlined', label: 'Underline' },
  { icon: 'wm-format-list-bulleted', label: 'Bulleted list' },
  { icon: 'wm-format-list-numbered', label: 'Numbered list' },
  { icon: 'wm-link', label: 'Insert link' },
]

const attachmentTools: ToolbarButtonProps[] = [
  { icon: 'wm-image', label: 'Insert image' },
  { icon: 'wm-attach-file', label: 'Attach file' },
]

interface UxTaskCardProps {
  onNewTask: () => void
}

export default function UxTaskCard({ onNewTask }: UxTaskCardProps) {
  const [descriptionRequired, setDescriptionRequired] = useState(true)
  const [requireAttachment, setRequireAttachment] = useState(false)
  const [commentsEnabled, setCommentsEnabled] = useState(true)

  return (
    <div className="flex w-full max-w-[848px] flex-col gap-[10px] font-['Fira_Sans'] text-[#545e6b]">
      <section className="overflow-hidden rounded-[4px] border border-[#dfe3e8] bg-white">
        <div className="h-[8px] w-full bg-[#1b87e6]" />
        <div className="px-[16px] pb-[20px] pt-[14px]">
          <div className="flex items-center justify-end gap-[6px]">
            <span className="text-[12px] leading-[16px] text-[#545e6b]">
              Starts - 09/30/2025 04:53 PM
            </span>
            <button
              type="button"
              aria-label="Task settings"
              title="Task settings"
              className="flex size-[16px] shrink-0 items-center justify-center rounded-[2px] text-[#1b87e6] transition-colors hover:bg-[rgba(27,135,230,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              <WuIcon icon="wm-settings" style={{ fontSize: 16 }} />
            </button>
          </div>
          <h2 className="mt-[24px] text-[24px] font-semibold leading-[32px] text-[#545e6b]">
            Quest 1
          </h2>
          <button
            type="button"
            className="mt-[16px] w-fit text-left text-[14px] leading-[20px] text-[#7b8794] transition-colors hover:text-[#1b87e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
          >
            Add description
          </button>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[4px] border border-[#1b87e6] bg-white">
        <span className="absolute left-0 top-0 z-10 flex h-[29px] w-[33px] items-center justify-center bg-[#1b87e6] text-[14px] font-medium leading-none text-white">
          1
        </span>
        <div className="flex h-[40px] items-center gap-[8px] border-b border-[#e6e9ed] pl-[45px] pr-[12px]">
          <WuIcon icon="wm-chat" style={{ fontSize: 18, color: '#545e6b' }} />
          <span className="truncate text-[14px] leading-[20px]">Conversation 01</span>
          <div className="ml-auto flex items-center gap-[4px]">
            <button
              type="button"
              aria-label="Collapse conversation"
              title="Collapse"
              className="flex size-[24px] items-center justify-center rounded-[2px] text-[#545e6b] transition-colors hover:bg-[rgba(27,51,128,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              <WuIcon icon="wm-keyboard-arrow-up" style={{ fontSize: 18 }} />
            </button>
            <button
              type="button"
              aria-label="Conversation options"
              title="More options"
              className="flex size-[24px] items-center justify-center rounded-[2px] text-[#545e6b] transition-colors hover:bg-[rgba(27,51,128,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
            >
              <WuIcon icon="wm-more-vert" style={{ fontSize: 18 }} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] px-[16px] py-[12px]">
          <div className="flex flex-wrap items-center gap-[8px]">
            <span className="text-[13px] leading-[16px]">Description</span>
            <Switch
              checked={descriptionRequired}
              label="Require description"
              activeColor="#2e9e6b"
              onChange={setDescriptionRequired}
            />
            <span className="ml-[6px] text-[13px] leading-[16px]">Require attachment</span>
            <Switch
              checked={requireAttachment}
              label="Require attachment"
              activeColor="#2e9e6b"
              onChange={setRequireAttachment}
            />
          </div>

          <span className="text-[12px] leading-[16px]">Description</span>

          <div className="overflow-hidden rounded-[2px] border border-[#dfe3e8]">
            <div className="flex h-[33px] items-center justify-between gap-[8px] bg-white px-[12px]">
              <div className="flex items-center gap-[10px]">
                {formattingTools.map((tool) => (
                  <ToolbarButton key={tool.label} {...tool} />
                ))}
              </div>
              <div className="flex items-center gap-[10px]">
                {attachmentTools.map((tool) => (
                  <ToolbarButton key={tool.label} {...tool} />
                ))}
              </div>
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              role="textbox"
              aria-label="Description"
              aria-multiline="true"
              className="h-[132px] overflow-y-auto bg-[#f5f5f5] px-[12px] py-[8px] text-[14px] leading-[20px] outline-none"
            />
          </div>

          <div className="flex items-center gap-[8px]">
            <span className="text-[13px] leading-[16px]">Comments</span>
            <Switch
              checked={commentsEnabled}
              label="Enable comments"
              activeColor="#1b87e6"
              onChange={setCommentsEnabled}
            />
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={onNewTask}
        className="flex h-[28px] w-full items-center justify-center gap-[4px] rounded-[4px] border border-[#c2d1f4] bg-white text-[14px] leading-[16px] text-[#1b87e6] transition-colors hover:bg-[#f4f8ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
      >
        <WuIcon icon="wm-add" style={{ fontSize: 16 }} />
        New task
      </button>
    </div>
  )
}
