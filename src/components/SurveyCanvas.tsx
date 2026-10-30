interface SurveyCanvasProps {
  onAddQuestion?: () => void
}

export default function SurveyCanvas({ onAddQuestion }: SurveyCanvasProps) {
  const categories = [
    'Number of dogs in the office',
    'Temperature in the garden',
    'Amount of spices',
    'Lunch timing',
  ]
  const scaleHeaders = [
    'Category 1',
    'Dissatisfied',
    'Neither satisfied nor dissatisfied',
    'Extremely Satisfied',
  ]

  return (
    <div className="flex min-h-0 flex-1 justify-center overflow-y-auto p-6">
      <div className="relative flex w-[880px] max-w-full flex-col rounded-[8px] bg-[#f5f5f5] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]">
        {/* top bar */}
        <div className="flex h-12 items-center gap-4 rounded-t-[8px] bg-[#f5f5f5] px-4">
          <div className="flex size-8 items-center justify-center rounded bg-[#e7eefd]" />
          <span className="text-sm font-medium text-[#545e6b]">Block 1</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-[#545e6b]">1 Question</span>
            <span className="text-[#545e6b]">▾</span>
            <button type="button" className="flex size-8 items-center justify-center rounded text-[#545e6b] hover:bg-[#e7eefd]" aria-label="More">⋯</button>
          </div>
        </div>

        {/* primary button */}
        <div className="flex justify-center py-4">
          <button type="button" className="rounded bg-[#1b87e6] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#1570c4]">
            Primary Button
          </button>
        </div>

        {/* editor card */}
        <div className="mx-4 mb-4 flex-1 rounded-[8px] bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-[#1b3380]">Multi-point scales</h3>
            <div className="flex gap-4 text-sm text-[#545e6b]">
              <span>Validation</span>
              <span>Logic</span>
              <span>Settings</span>
              <button type="button" className="flex size-8 items-center justify-center rounded hover:bg-[#e7eefd]">⋯</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 text-xs font-medium text-[#545e6b]">
            {scaleHeaders.map((h) => (
              <div key={h}>{h}</div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {categories.map((c) => (
              <div key={c} className="flex items-center justify-between rounded border border-[#e7eefd] px-3 py-2 text-sm text-[#1b3380]">
                <span>{c}</span>
                <div className="flex gap-2 text-xs text-[#545e6b]">
                  <span>○</span>
                  <span>○</span>
                  <span>○</span>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="mt-4 flex items-center gap-2 text-sm text-[#1b87e6] hover:underline">
            <span>+</span> Add option
          </button>
        </div>

        {/* footer */}
        <div className="flex h-12 items-center gap-4 rounded-b-[8px] bg-[#f5f5f5] px-4">
          <div className="flex size-8 items-center justify-center rounded bg-[#e7eefd]" />
          <span className="text-sm font-medium text-[#545e6b]">Block 1</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-[#545e6b]">1 Question</span>
            <span className="text-[#545e6b]">▾</span>
            <button type="button" className="flex size-6 items-center justify-center rounded text-[#545e6b] hover:bg-[#e7eefd]" aria-label="More">⋯</button>
          </div>
        </div>

        {/* add question button */}
        <div className="flex justify-center py-4">
          <button
            type="button"
            onClick={onAddQuestion}
            className="rounded bg-[#1b87e6] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#1570c4]"
          >
            + Add Logic
          </button>
        </div>
      </div>
    </div>
  )
}
