import type { QuestionSet } from './questionOptions'

const QUESTION_SET_OPTIONS: { value: QuestionSet; label: string }[] = [
  { value: 'livepolls', label: 'LivePolls' },
  { value: 'ux', label: 'UX' },
  { value: 'surveys', label: 'Surveys' },
  { value: 'journey', label: 'Journey management' },
]

interface LabSettingsPanelProps {
  open: boolean
  onClose: () => void
  floatingDrawer: boolean
  onFloatingDrawerChange: (value: boolean) => void
  questionSet: QuestionSet
  onQuestionSetChange: (value: QuestionSet) => void
}

export default function LabSettingsPanel({
  open,
  onClose,
  floatingDrawer,
  onFloatingDrawerChange,
  questionSet,
  onQuestionSetChange,
}: LabSettingsPanelProps) {
  return (
    <aside
      id="labSettingsPanel"
      className={`lab-settings-panel${open ? ' is-open' : ''}`}
      aria-hidden={!open}
      aria-label="Lab settings"
    >
      <div className="lab-settings-panel__header">
        <h2 className="lab-settings-panel__title">Lab settings</h2>
        <div className="lab-settings-panel__header-actions">
          <button
            type="button"
            className="lab-settings-panel__icon-btn"
            aria-label="Close lab settings"
            title="Close"
            onClick={onClose}
          >
            <span className="wm-close" aria-hidden="true" style={{ fontSize: 18 }} />
          </button>
        </div>
      </div>

      <div className="lab-settings-panel__controls">
        <div className="lab-settings-panel__control-row">
          <span className="lab-settings-panel__control-label">Enabled: 1/1</span>
          <input
            type="checkbox"
            className="lab-settings-toggle"
            aria-label="Toggle all lab settings"
          />
        </div>
        <div className="lab-settings-panel__control-row">
          <span className="lab-settings-panel__control-label">Groups: Collapsed</span>
          <input type="checkbox" className="lab-settings-toggle" aria-label="Toggle groups" />
        </div>
        <div className="lab-settings-panel__control-row">
          <span className="lab-settings-panel__control-label">Floating drawer</span>
          <input
            type="checkbox"
            className="lab-settings-toggle"
            aria-label="Toggle floating drawer"
            checked={floatingDrawer}
            onChange={(e) => onFloatingDrawerChange(e.target.checked)}
          />
        </div>
        <div
          className="lab-settings-radio-group"
          role="radiogroup"
          aria-labelledby="lab-options-label"
        >
          <span id="lab-options-label" className="lab-settings-panel__control-label mb-[6px]">
            Options
          </span>
          {QUESTION_SET_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`lab-settings-radio${questionSet === option.value ? ' is-active' : ''}`}
            >
              <input
                type="radio"
                name="question-set"
                value={option.value}
                checked={questionSet === option.value}
                onChange={() => onQuestionSetChange(option.value)}
                className="lab-settings-radio__input"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {/* Layout control hidden - list layout is default */}
        {/* Pictograms control hidden */}
        {/* Grouped survey icons toggle hidden */}
      </div>

      <div className="lab-settings-panel__body">
        <div className="lab-settings-panel__section">
          <h3 className="lab-settings-panel__section-title">Customize project</h3>
          <div className="lab-settings-list">
            <div className="lab-settings-item">
              <span>No more features available</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
