import { useState } from 'react'
import AddQuestionOverlay from './components/AddQuestionOverlay'
import {
  WuAppHeader,
  WuAppHeaderSearch,
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

  return (
    <div className="flex min-h-screen flex-col">
      <WuAppHeader
        productName="QuestionPro UX"
        categories={categories}
        user={user}
        onLogout={() => console.log('logout')}
      >

      </WuAppHeader>

      <WuSidebar
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
        <div className="flex flex-1 items-center justify-center p-6">
          <WuButton onClick={() => setOverlayOpen(true)}>Hello World</WuButton>
        </div>
        <AddQuestionOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
        <WuFooter>
          <span>QuestionPro · Task selector © {new Date().getFullYear()}</span>
        </WuFooter>
      </WuSidebar>
    </div>
  )
}
