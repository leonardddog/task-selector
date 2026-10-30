import { useEffect, useState } from 'react'
import AddQuestionOverlay from './components/AddQuestionOverlay'
import LabSettingsPanel from './components/LabSettingsPanel'
import JourneyCanvas from './components/JourneyCanvas'
import SurveyCanvas from './components/SurveyCanvas'
import LivePollBuilder from './components/LivePollBuilder'
import UxTaskCard from './components/UxTaskCard'
import type { QuestionLayout, QuestionSet } from './components/questionOptions'
import {
  DEFAULT_QUESTION_SET,
  DEFAULT_QUESTION_SET_PATH,
  pathForQuestionSet,
  questionSetFromPath,
} from './routes'
import {
  WuAppHeader,
  WuButton,
  WuFooter,
  WuIcon,
  WuSidebar,
  WuSidebarContent,
  WuSidebarFooter,
  WuSidebarGroup,
  WuSidebarItem,
  WuSidebarMenu,
} from '@npm-questionpro/wick-ui-lib'
import type {
  IWuAppHeaderAccount,
  IWuAppHeaderMenuItem,
} from '@npm-questionpro/wick-ui-lib'

const categories: IWuAppHeaderMenuItem[] = [
  {
    name: 'Surveys',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="%231b87e6"/></svg>',
    desc: 'Create and manage surveys',
    active: true,
    order: 1,
    products: [
      {
        name: 'Task Selector',
        link: '#',
        icon: 'e308',
        active: true,
        order: 1,
      },
      {
        name: 'LivePolls',
        link: '#',
        icon: 'e311',
        order: 2,
      },
    ],
  },
  {
    name: 'Analytics',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="%2354A5EC"/></svg>',
    desc: 'Analyze responses',
    order: 2,
    products: [
      {
        name: 'Dashboards',
        link: '#',
        order: 1,
      },
    ],
  },
]

const user: IWuAppHeaderAccount = {
  profile: {
    title: 'Jane Doe',
    subtitle: 'jane.doe@example.com',
    companyName: 'Acme Inc.',
    initials: 'JD',
    url: '#',
  },
  settings: [
    {
      title: 'My Account',
      url: '#',
      canDisplay: true,
      displayIcon: false,
    },
  ],
}

export default function App() {
  const [activeItem, setActiveItem] = useState('tasks')
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [labSettingsOpen, setLabSettingsOpen] = useState(() => {
    try {
      return localStorage.getItem('lab-settings-open') === '1'
    } catch {
      return false
    }
  })
  const [floatingDrawer, setFloatingDrawer] = useState(() => {
    try {
      return localStorage.getItem('lab-floating-drawer') === '1'
    } catch {
      return false
    }
  })
  const [questionSet, setQuestionSet] = useState<QuestionSet>(
    () => questionSetFromPath(window.location.pathname) ?? DEFAULT_QUESTION_SET,
  )
  const [questionLayout, _setQuestionLayout] = useState<QuestionLayout>(() => {
    try {
      return localStorage.getItem('lab-question-layout-v2') === 'grid' ? 'grid' : 'list'
    } catch {
      return 'list'
    }
  })
  const [groupedSurveyIcons, _setGroupedSurveyIcons] = useState(() => {
    try {
      return localStorage.getItem('lab-grouped-survey-icons') === '1'
    } catch {
      return false
    }
  })
  const [showPictograms, _setShowPictograms] = useState(() => {
    try {
      return localStorage.getItem('lab-pictograms') !== '0'
    } catch {
      return true
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('lab-settings-open', labSettingsOpen ? '1' : '0')
    } catch {
      // ignore storage errors
    }
    document.body.classList.toggle('lab-settings-panel-open', labSettingsOpen)
    return () => document.body.classList.remove('lab-settings-panel-open')
  }, [labSettingsOpen])

  useEffect(() => {
    try {
      localStorage.setItem('lab-floating-drawer', floatingDrawer ? '1' : '0')
    } catch {
      // ignore storage errors
    }
  }, [floatingDrawer])

  useEffect(() => {
    const syncFromLocation = () => {
      const nextQuestionSet = questionSetFromPath(window.location.pathname)
      if (!nextQuestionSet) {
        window.history.replaceState(
          { questionSet: DEFAULT_QUESTION_SET },
          '',
          DEFAULT_QUESTION_SET_PATH,
        )
        setQuestionSet(DEFAULT_QUESTION_SET)
        return
      }
      setQuestionSet(nextQuestionSet)
    }

    syncFromLocation()
    window.addEventListener('popstate', syncFromLocation)
    return () => window.removeEventListener('popstate', syncFromLocation)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('lab-question-layout-v2', questionLayout)
    } catch {
      // ignore storage errors
    }
  }, [questionLayout])

  useEffect(() => {
    try {
      localStorage.setItem('lab-grouped-survey-icons', groupedSurveyIcons ? '1' : '0')
    } catch {
      // ignore storage errors
    }
  }, [groupedSurveyIcons])

  useEffect(() => {
    try {
      localStorage.setItem('lab-pictograms', showPictograms ? '1' : '0')
    } catch {
      // ignore storage errors
    }
  }, [showPictograms])

  useEffect(() => {
    if (!labSettingsOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLabSettingsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [labSettingsOpen])

  const handleQuestionSetChange = (nextQuestionSet: QuestionSet) => {
    setQuestionSet(nextQuestionSet)
    const nextPath = pathForQuestionSet(nextQuestionSet)
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ questionSet: nextQuestionSet }, '', nextPath)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <WuAppHeader
        productName={`${questionSet === "surveys" ? "Surveys" : questionSet === "livepolls" ? "LivePolls" : questionSet === "journey" ? "Journey Management" : " QuestionPro UX"}`}
        categories={categories}
        user={user}
        onLogout={() => console.log('logout')}
      >

      </WuAppHeader>

      <WuSidebar
        defaultOpen={false}
        Sidebar={
          <>
            <WuSidebarContent>
              <WuSidebarGroup label="Workspace">
                <WuSidebarMenu>
                  <WuSidebarItem
                    Icon={<WuIcon icon="wc-home" />}
                    isActive={activeItem === 'home'}
                    onClick={() => setActiveItem('home')}
                  >
                    Home
                  </WuSidebarItem>
                  <WuSidebarItem
                    Icon={<WuIcon icon="wc-my-surveys" />}
                    isActive={activeItem === 'tasks'}
                    onClick={() => setActiveItem('tasks')}
                  >
                    Tasks
                  </WuSidebarItem>
                  <WuSidebarItem
                    Icon={<WuIcon icon="wc-analytics" />}
                    isActive={activeItem === 'reports'}
                    onClick={() => setActiveItem('reports')}
                  >
                    Reports
                  </WuSidebarItem>
                </WuSidebarMenu>
              </WuSidebarGroup>
            </WuSidebarContent>
            <WuSidebarFooter>
              <div className="px-4 py-2 text-xs">v0.0.0</div>
            </WuSidebarFooter>
          </>
        }
      >
        {questionSet === 'journey' ? (
          <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
            <JourneyCanvas onAddQuestion={() => setOverlayOpen(true)} />
          </div>
        ) : questionSet === 'surveys' ? (
          <SurveyCanvas onAddQuestion={() => setOverlayOpen(true)} />
        ) : (
          <div className="flex min-h-0 flex-1 justify-center overflow-y-auto p-6">
            {questionSet === 'ux' ? (
              <UxTaskCard onNewTask={() => setOverlayOpen(true)} />
            ) : (
              <LivePollBuilder onAddQuestion={() => setOverlayOpen(true)} />
            )}
          </div>
        )}
        <AddQuestionOverlay
          open={overlayOpen}
          onClose={() => setOverlayOpen(false)}
          variant={floatingDrawer ? 'floating' : 'default'}
          optionSet={questionSet}
          questionLayout={questionLayout}
          labSettingsOpen={labSettingsOpen}
          groupedSurveyIcons={groupedSurveyIcons}
        />
        <WuFooter>
          <div className="flex w-full items-center justify-between gap-2">
            <span>QuestionPro · Select item © {new Date().getFullYear()}</span>
            <WuButton
              iconOnly
              size="sm"
              variant="secondary"
              aria-label="Lab settings"
              title="Lab settings"
              aria-expanded={labSettingsOpen}
              aria-controls="labSettingsPanel"
              onClick={() => setLabSettingsOpen((open) => !open)}
              Icon={<WuIcon icon="wm-experiment" style={{ color: '#545E6B' }} />}
            />
          </div>
        </WuFooter>
      </WuSidebar>
      <LabSettingsPanel
        open={labSettingsOpen}
        onClose={() => setLabSettingsOpen(false)}
        floatingDrawer={floatingDrawer}
        onFloatingDrawerChange={setFloatingDrawer}
        questionSet={questionSet}
        onQuestionSetChange={handleQuestionSetChange}
      // questionLayout={questionLayout}
      // onQuestionLayoutChange={setQuestionLayout}
      // groupedSurveyIcons={groupedSurveyIcons}
      // onGroupedSurveyIconsChange={setGroupedSurveyIcons}
      />
    </div>
  )
}
