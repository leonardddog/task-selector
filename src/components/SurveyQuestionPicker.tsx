import { useMemo, useState } from 'react'
import { WuIcon } from '@npm-questionpro/wick-ui-lib'
import {
  surveyFilterOptions,
  surveyIconColorFor,
  surveyQuestionSections,
  type QuestionOption,
  type SurveyQuestionGroup,
} from './questionOptions'

interface SurveyQuestionPickerProps {
  onSelect: () => void
  onPreview: (option: QuestionOption) => void
  onPreviewEnd: () => void
  groupedIconColors?: boolean
}

type SurveyTab = 'all' | 'library'

interface SurveyGroupProps {
  group: SurveyQuestionGroup
  groupedIconColors: boolean
  onSelect: () => void
  onPreview: (option: QuestionOption) => void
  onPreviewEnd: () => void
}

function SurveyGroup({
  group,
  groupedIconColors,
  onSelect,
  onPreview,
  onPreviewEnd,
}: SurveyGroupProps) {
  const iconColor = surveyIconColorFor(group.label, groupedIconColors)
  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="text-[14px] font-medium leading-[24px] text-[#9b9b9b]">{group.label}</h3>
      <div className="flex flex-col gap-[8px]">
        {group.items.map((item) => (
          <button
            key={`${group.label}-${item.label}`}
            type="button"
            onClick={onSelect}
            onMouseEnter={() => onPreview(item)}
            onMouseLeave={onPreviewEnd}
            onFocus={() => onPreview(item)}
            onBlur={onPreviewEnd}
            className="survey-question-item flex h-[40px] w-full items-center gap-[8px] rounded-[6px] border border-transparent pl-[8px] pr-[4px] text-left text-[14px] leading-[16px] text-[#545e6b] transition-[background-color,border-radius,color,opacity] duration-150 hover:rounded-[8px] hover:bg-[#e7eefd] hover:font-medium hover:text-[#1b3380] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3]"
          >
            <span className="flex size-[20px] shrink-0 items-center justify-center">
              <WuIcon icon={item.icon} style={{ color: iconColor, fontSize: 20 }} />
            </span>
            <span className="truncate">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="h-px w-full bg-[rgba(27,51,128,0.08)]" />
    </div>
  )
}

export default function SurveyQuestionPicker({
  onSelect,
  onPreview,
  onPreviewEnd,
  groupedIconColors = false,
}: SurveyQuestionPickerProps) {
  const [tab, setTab] = useState<SurveyTab>('all')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const sections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return surveyQuestionSections.map((section) => ({
      label: section.label,
      columns: section.columns.map((groups) =>
        groups
          .filter((group) => filter === 'all' || group.label === filter)
          .map((group) => ({
            ...group,
            items: group.items.filter(
              (item) =>
                !normalizedQuery || item.label.toLowerCase().includes(normalizedQuery),
            ),
          }))
          .filter((group) => group.items.length > 0),
      ),
    }))
  }, [filter, query])

  const hasResults = sections.some((section) =>
    section.columns.some((groups) => groups.length > 0),
  )

  const changeTab = (next: SurveyTab) => {
    onPreviewEnd()
    setTab(next)
  }

  const changeQuery = (value: string) => {
    onPreviewEnd()
    setQuery(value)
  }

  const changeFilter = (value: string) => {
    onPreviewEnd()
    setFilter(value)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-[32px] pt-[16px]">
      <div className="flex shrink-0 flex-col gap-[32px] px-[16px]">
        <div
          role="tablist"
          aria-label="Question collections"
          className="flex items-stretch border-b border-[#d8d8d8]"
        >
          <button
            type="button"
            role="tab"
            id="survey-tab-all"
            aria-selected={tab === 'all'}
            aria-controls="survey-panel"
            onClick={() => changeTab('all')}
            className={`flex h-[32px] items-center justify-center rounded-[2px] px-[8px] text-[12px] leading-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3] ${
              tab === 'all'
                ? '-mb-px border-b-2 border-[#1b87e6] text-[#1b87e6]'
                : 'text-[#545e6b] hover:bg-[rgba(27,51,128,0.04)]'
            }`}
          >
            All questions
          </button>
          <button
            type="button"
            role="tab"
            id="survey-tab-library"
            aria-selected={tab === 'library'}
            aria-controls="survey-panel"
            onClick={() => changeTab('library')}
            className={`flex h-[32px] items-center justify-center rounded-[2px] px-[8px] text-[12px] leading-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3] ${
              tab === 'library'
                ? '-mb-px border-b-2 border-[#1b87e6] text-[#1b87e6]'
                : 'text-[#545e6b] hover:bg-[rgba(27,51,128,0.04)]'
            }`}
          >
            My library
          </button>
        </div>

        {tab === 'all' && (
          <div className="flex items-center justify-between gap-[8px]">
            <label className="flex h-[32px] min-w-0 flex-1 max-w-[240px] items-center gap-[8px] rounded-t-[3px] border-b border-[#d8d8d8] bg-[#f5f5f5] px-[8px] transition-colors focus-within:border-[#1b87e6]">
              <span className="flex size-[18px] shrink-0 items-center justify-center text-[#9b9b9b]">
                <WuIcon icon="wm-search" style={{ fontSize: 18 }} />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => changeQuery(e.target.value)}
                placeholder="Search question"
                aria-label="Search question"
                className="min-w-0 flex-1 bg-transparent text-[12px] leading-[16px] text-[#545e6b] outline-none placeholder:text-[#9b9b9b]"
              />
            </label>

            <div className="relative flex h-[32px] w-[150px] shrink-0 items-center rounded-[2px] border border-[#d8d8d8] bg-white transition-colors focus-within:border-[#1b87e6]">
              <span className="pointer-events-none absolute left-[8px] flex size-[18px] items-center justify-center text-[#545e6b]">
                <WuIcon icon="wm-filter-alt" style={{ fontSize: 18 }} />
              </span>
              <select
                value={filter}
                onChange={(e) => changeFilter(e.target.value)}
                aria-label="Filter by question category"
                className="h-full w-full appearance-none truncate bg-transparent pl-[34px] pr-[30px] text-[12px] leading-[16px] text-[#545e6b] outline-none"
              >
                {surveyFilterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-[8px] flex size-[16px] items-center justify-center text-[#545e6b]">
                <WuIcon icon="wm-keyboard-arrow-down" style={{ fontSize: 18 }} />
              </span>
            </div>
          </div>
        )}
      </div>

      <div
        id="survey-panel"
        role="tabpanel"
        aria-labelledby={tab === 'all' ? 'survey-tab-all' : 'survey-tab-library'}
        className="flex min-h-0 flex-1 flex-col"
      >
        {tab === 'library' ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-[8px] px-[24px] pb-[48px] text-center">
            <span className="flex size-[32px] items-center justify-center text-[#c2c7cf]">
              <WuIcon icon="wm-ballot" style={{ fontSize: 32 }} />
            </span>
            <p className="text-[14px] font-medium leading-[20px] text-[#545e6b]">
              No saved questions yet
            </p>
            <p className="text-[12px] leading-[16px] text-[#9b9b9b]">
              Questions you save from All questions will appear here.
            </p>
          </div>
        ) : (
          <div className="survey-question-scroll min-h-0 flex-1 overflow-y-auto p-[16px]">
            {hasResults ? (
              <div className="flex flex-col gap-[16px]">
                {sections.map((section) => {
                  const sectionHasResults = section.columns.some(
                    (groups) => groups.length > 0,
                  )
                  if (!sectionHasResults) return null
                  return (
                    <section key={section.label} className="flex flex-col gap-[16px]">
                      <div className="shrink-0">
                        <span className="inline-flex h-[24px] items-center rounded-[4px] bg-[#f5f5f5] px-[6px] text-[12px] leading-[16px] text-[#545e6b]">
                          {section.label}
                        </span>
                      </div>
                      <div className="survey-question-grid grid grid-cols-2 items-start gap-[16px]">
                        {section.columns.map((groups, index) => (
                          <div
                            key={`${section.label}-${index}`}
                            className="flex flex-col gap-[16px]"
                          >
                            {groups.map((group) => (
                              <SurveyGroup
                                key={group.label}
                                group={group}
                                groupedIconColors={groupedIconColors}
                                onSelect={onSelect}
                                onPreview={onPreview}
                                onPreviewEnd={onPreviewEnd}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </section>
                  )
                })}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-[8px] pb-[32px] text-center">
                <p className="text-[14px] font-medium leading-[20px] text-[#545e6b]">
                  No questions found
                </p>
                <p className="text-[12px] leading-[16px] text-[#9b9b9b]">
                  Try a different search or category.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
