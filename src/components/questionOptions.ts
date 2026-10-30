import type { IWuIcons } from '@npm-questionpro/wick-ui-lib'
import type { PictogramName } from './QuestionPictogram'

export type QuestionSet = 'livepolls' | 'ux' | 'surveys' | 'journey'

export type QuestionLayout = 'grid' | 'list'

export interface PreviewComment {
  author: string
  initials: string
  time: string
  text: string
  replies?: string
}

export interface QuestionOption {
  label: string
  icon: IWuIcons
  pictogram?: PictogramName
  description: string
  comments: PreviewComment[]
}

export const livePollsQuestionTypes: QuestionOption[] = [
  {
    label: 'Multiple choice',
    icon: 'wm-ballot',
    pictogram: 'multiple-choice',
    description: 'Ask a question with predefined answer options and collect responses.',
    comments: [
      {
        author: 'Maria Chen',
        initials: 'MC',
        time: '5 minutes ago',
        text: 'I would go with the annual plan — it covers everything my team needs.',
        replies: '2 replies',
      },
      {
        author: 'Alex Rivera',
        initials: 'AR',
        time: '2 minutes ago',
        text: 'Monthly is easier for me while I am still comparing options.',
      },
    ],
  },
  {
    label: 'This or that',
    icon: 'wm-swipe',
    pictogram: 'this-or-that',
    description: 'Present two options and let participants pick their favorite.',
    comments: [
      {
        author: 'Priya Shah',
        initials: 'PS',
        time: '3 minutes ago',
        text: 'Coffee in the morning, tea in the afternoon. Easy choice.',
        replies: '1 replies',
      },
      {
        author: 'Jordan Lee',
        initials: 'JL',
        time: '1 minute ago',
        text: 'I would pick the window seat every time.',
      },
    ],
  },
  {
    label: 'Word cloud',
    icon: 'wm-foggy',
    pictogram: 'word-cloud',
    description: 'Let participants share words that form a live visual cloud.',
    comments: [
      {
        author: 'Emma Wilson',
        initials: 'EW',
        time: '8 minutes ago',
        text: 'For me the first words that come to mind are fast, friendly and reliable.',
        replies: '3 replies',
      },
      {
        author: 'Noah Kim',
        initials: 'NK',
        time: '4 minutes ago',
        text: 'Simple, clear and worth every penny.',
      },
    ],
  },
  {
    label: 'Livefeed',
    icon: 'wm-tooltip-2',
    pictogram: 'livefeed',
    description: 'Show responses in real time as participants submit them.',
    comments: [
      {
        author: 'Sofia Martinez',
        initials: 'SM',
        time: 'Just now',
        text: 'This is exactly the feature our events were missing.',
        replies: '1 replies',
      },
      {
        author: 'Liam Brown',
        initials: 'LB',
        time: 'Just now',
        text: 'Seeing answers appear live makes the session feel much more engaging.',
      },
    ],
  },
  {
    label: 'Heatmap',
    icon: 'wm-key-visualizer',
    pictogram: 'heatmap',
    description: 'Visualize where participants focus with click and attention heatmaps.',
    comments: [
      {
        author: 'Ava Thompson',
        initials: 'AT',
        time: '6 minutes ago',
        text: 'The pricing section is where I looked first, then the feature list.',
        replies: '2 replies',
      },
      {
        author: 'Ethan Davis',
        initials: 'ED',
        time: '3 minutes ago',
        text: 'I almost missed the call to action because it blends into the background.',
      },
    ],
  },
  {
    label: 'Ranking',
    icon: 'wm-leaderboard',
    pictogram: 'ranking',
    description: 'Ask participants to order items by preference or priority.',
    comments: [
      {
        author: 'Isabella Garcia',
        initials: 'IG',
        time: '7 minutes ago',
        text: 'I would put onboarding first, then reporting, then integrations.',
        replies: '1 replies',
      },
      {
        author: 'Mason Clark',
        initials: 'MC',
        time: '2 minutes ago',
        text: 'For my team, integrations matter more than onboarding.',
      },
    ],
  },
  {
    label: 'Rating',
    icon: 'wm-stars-2',
    pictogram: 'rating',
    description: 'Collect quick feedback with a star or numeric rating scale.',
    comments: [
      {
        author: 'Mia Anderson',
        initials: 'MA',
        time: '4 minutes ago',
        text: 'I would give the experience four out of five stars.',
        replies: '2 replies',
      },
      {
        author: 'Lucas Moore',
        initials: 'LM',
        time: '1 minute ago',
        text: 'Five stars from me — it was quick and painless.',
      },
    ],
  },
]

export const uxQuestionTypes: QuestionOption[] = [
  {
    label: 'Conversation',
    icon: 'wm-forum',
    pictogram: 'conversation',
    description: 'Capture rich, open-ended insights through guided conversations.',
    comments: [
      {
        author: 'Nathan Lopez',
        initials: 'NL',
        time: '2 hours ago',
        text: 'I work a remote job and live on the road. I like to snowboard and mountain bike in my free time."',
        replies: '1 replies',
      },
      {
        author: 'Doc Hudson',
        initials: 'DH',
        time: '1 hour ago',
        text: 'I usually try to get lots of exercise after I work, by either going to the gym or riding my bike!',
      },
    ],
  },
  {
    label: 'Fill in the blank',
    icon: 'wm-border-color',
    pictogram: 'fill-in-the-blank',
    description: 'Invite participants to complete sentences in their own words.',
    comments: [
      {
        author: 'Harper Young',
        initials: 'HY',
        time: '12 minutes ago',
        text: 'The best part of my day is the quiet cup of coffee before everyone wakes up.',
        replies: '1 replies',
      },
      {
        author: 'Benjamin Hall',
        initials: 'BH',
        time: '6 minutes ago',
        text: 'My ideal weekend starts with a long walk and ends with a good book.',
      },
    ],
  },
  {
    label: 'Idea mark',
    icon: 'wm-image-search',
    pictogram: 'idea-mark',
    description: 'Let participants highlight and annotate ideas on images or designs.',
    comments: [
      {
        author: 'Amelia King',
        initials: 'AK',
        time: '9 minutes ago',
        text: 'I marked the navigation area — it took me a second to find the search.',
        replies: '2 replies',
      },
      {
        author: 'Henry Wright',
        initials: 'HW',
        time: '5 minutes ago',
        text: 'The card spacing feels tight, but the hierarchy is clear.',
      },
    ],
  },
  {
    label: 'Survey',
    icon: 'wm-ballot',
    pictogram: 'survey',
    description: 'Run structured surveys to gather targeted insights at scale.',
    comments: [
      {
        author: 'Evelyn Scott',
        initials: 'ES',
        time: '15 minutes ago',
        text: 'The questions were clear and I finished the whole survey in five minutes.',
        replies: '1 replies',
      },
      {
        author: 'Daniel Green',
        initials: 'DG',
        time: '7 minutes ago',
        text: 'I would have liked a few more options in the last question.',
      },
    ],
  },
  {
    label: 'Video',
    icon: 'wm-video-camera-front',
    pictogram: 'video',
    description: 'Collect video responses for richer, face-to-face feedback.',
    comments: [
      {
        author: 'Abigail Adams',
        initials: 'AA',
        time: '11 minutes ago',
        text: 'Recording my answer was much easier than typing a long response.',
        replies: '1 replies',
      },
      {
        author: 'Michael Baker',
        initials: 'MB',
        time: '4 minutes ago',
        text: 'I liked that I could re-record before submitting.',
      },
    ],
  },
  {
    label: 'Voting',
    icon: 'wm-thumbs-up-down',
    pictogram: 'voting',
    description: 'Let participants vote on options and see consensus emerge.',
    comments: [
      {
        author: 'Ella Nelson',
        initials: 'EN',
        time: '8 minutes ago',
        text: 'I voted for the blue concept — it feels the most trustworthy.',
        replies: '3 replies',
      },
      {
        author: 'James Carter',
        initials: 'JC',
        time: '2 minutes ago',
        text: 'The green option stands out more, but blue is easier to read.',
      },
    ],
  },
  {
    label: 'Photo journal',
    icon: 'wm-art-track',
    pictogram: 'photo-journal',
    description: 'Ask participants to document experiences through photos and notes.',
    comments: [
      {
        author: 'Scarlett Mitchell',
        initials: 'SM',
        time: '20 minutes ago',
        text: 'I added a photo of my workspace and a note about the lighting.',
        replies: '1 replies',
      },
      {
        author: 'William Perez',
        initials: 'WP',
        time: '10 minutes ago',
        text: 'Taking a photo was faster than describing the setup in text.',
      },
    ],
  },
]

export interface JourneyQuestionGroup {
  label: string
  items: QuestionOption[]
}

function journeyOption(
  label: string,
  icon: IWuIcons,
  description: string,
  comments: [string, string],
): QuestionOption {
  return {
    label,
    icon,
    description,
    comments: [
      {
        author: 'Maria Chen',
        initials: 'MC',
        time: '5 minutes ago',
        text: comments[0],
      },
      {
        author: 'Alex Rivera',
        initials: 'AR',
        time: '2 minutes ago',
        text: comments[1],
      },
    ],
  }
}

export const journeyAnalysisGroup: JourneyQuestionGroup = {
  label: 'Analysis',
  items: [
    journeyOption(
      'Sentiment',
      'wm-sentiment-satisfied',
      'Capture how customers feel at each stage of the journey.',
      [
        'Sentiment dips during the wait, then recovers after the experience.',
        'The loyalty stage looks very different across personas.',
      ],
    ),
    journeyOption(
      'Touchpoints',
      'wm-location-on',
      'Mark where customers interact with the experience.',
      [
        'The website and social media touchpoints drive most first visits.',
        'Printed menus still matter more than we expected.',
      ],
    ),
    journeyOption(
      'Interactions',
      'wm-touch-long',
      'Record the actions customers take at a touchpoint.',
      [
        'Ordering and waiting are clearly separate moments for us.',
        'The app interaction is quick, but finding the entrance is not.',
      ],
    ),
    journeyOption(
      'Pros',
      'wm-thumb-up',
      'Highlight what is working well in the current journey.',
      [
        'The welcome was warm and the staff explained the options clearly.',
        'Ordering was faster than I expected.',
      ],
    ),
    journeyOption(
      'Cons',
      'wm-thumb-down',
      'Note friction points and moments that need improvement.',
      [
        'The wait after ordering felt longer than it needed to.',
        'It was not obvious where to collect the order.',
      ],
    ),
    journeyOption(
      'Insights',
      'wm-analytics',
      'Capture observations and themes that explain the journey.',
      [
        'People notice the atmosphere before they notice the menu.',
        'The first visit is mostly about orientation, not purchase.',
      ],
    ),
    journeyOption(
      'Metrics',
      'wm-donut-small',
      'Attach measurable signals to a stage or touchpoint.',
      [
        'Time to first order would be a useful metric for this journey.',
        'We should track return visits after the first experience.',
      ],
    ),
  ],
}

export const journeyPlanningGroup: JourneyQuestionGroup = {
  label: 'Planning and outcomes',
  items: [
    journeyOption(
      'Actions',
      'wm-electric-bolt',
      'Define the actions the team will take next.',
      [
        'We should clarify the pickup flow before the next test.',
        'Assign an owner for the entrance signage update.',
      ],
    ),
    journeyOption(
      'Opportunities',
      'wm-rocket-launch',
      'Identify opportunities to improve the experience.',
      [
        'A clearer welcome could reduce uncertainty at the entrance.',
        'There is room to make waiting more comfortable.',
      ],
    ),
    journeyOption(
      'Solutions',
      'wm-lightbulb-2',
      'Describe potential solutions for the identified gaps.',
      [
        'Add a visible pickup counter and a short wait-time estimate.',
        'Use a digital menu to speed up ordering.',
      ],
    ),
    journeyOption(
      'Tests',
      'wm-experiment',
      'Plan experiments to validate the proposed changes.',
      [
        'Test the new signage with a small group of first-time visitors.',
        'Compare wait times before and after the menu update.',
      ],
    ),
  ],
}

export const journeyContentGroup: JourneyQuestionGroup = {
  label: 'Content and structure',
  items: [
    journeyOption(
      'Divider',
      'wm-insert-page-break',
      'Separate lanes or group related journey content.',
      [
        'The divider keeps the sentiment and touchpoint lanes readable.',
        'A little separation makes the map easier to present.',
      ],
    ),
    journeyOption(
      'Text',
      'wm-text-ad',
      'Add a text block to explain or annotate the journey.',
      [
        'A short note about the first visit helps set the context.',
        'Keep the annotation focused on one idea.',
      ],
    ),
    journeyOption(
      'List',
      'wm-format-list-bulleted',
      'Add a bulleted list of items or observations.',
      [
        'A list of entry points makes the stage easier to scan.',
        'Group related observations together.',
      ],
    ),
    journeyOption(
      'Links',
      'wm-link-2',
      'Attach a link to supporting material or research.',
      [
        'Link the interview notes to the relevant stage.',
        'The research repository has the full transcript.',
      ],
    ),
    journeyOption(
      'Image',
      'wm-image',
      'Add an image to illustrate a stage, step, or touchpoint.',
      [
        'A photo of the entrance makes the first visit much clearer.',
        'Images work best when they are tied to a specific touchpoint.',
      ],
    ),
    journeyOption(
      'Video',
      'wm-live-tv',
      'Embed a video to show the experience in context.',
      [
        'A short clip of the ordering flow would help the team align.',
        'Keep the video focused on one moment.',
      ],
    ),
    journeyOption(
      'Media',
      'wm-attach-file',
      'Attach a file or media asset to the journey.',
      [
        'The floor plan helps explain the seating touchpoint.',
        'Attach the latest menu PDF for reference.',
      ],
    ),
  ],
}

export const journeyQuestionGroups = [
  journeyAnalysisGroup,
  journeyPlanningGroup,
  journeyContentGroup,
]

export const journeyQuestionTypes: QuestionOption[] = journeyQuestionGroups.flatMap(
  (group) => group.items,
)

export interface SurveyQuestionGroup {
  label: string
  items: QuestionOption[]
}

export const defaultSurveyIconColor = '#1b3380'

export const wickUiQualitativePalette = [
  '#4c5b94',
  '#5b7aae',
  '#409eb5',
  '#40b59e',
  '#60c790',
  '#9ad69a',
  '#b3bd56',
  '#dd8f40',
  '#ce6550',
  '#ae4c3d',
  '#8f3328',
  '#985d75',
  '#b181a8',
  '#c5a0c2',
  '#dac2e0',
  '#e3d9e8',
] as const

export const surveyGroupIconColors: Record<string, string> = {
  'Multiple choice': '#1b3380',
  'Graphical rating': wickUiQualitativePalette[4],
  Text: wickUiQualitativePalette[2],
  Image: wickUiQualitativePalette[8],
}

export function surveyIconColorFor(groupLabel: string, grouped: boolean): string {
  if (!grouped) return defaultSurveyIconColor
  return surveyGroupIconColors[groupLabel] ?? defaultSurveyIconColor
}

const surveyBaseGroups: [SurveyQuestionGroup[], SurveyQuestionGroup[]] = [
  [
    {
      label: 'Multiple choice',
      items: [
        {
          label: 'Select one',
          icon: 'wm-check-circle',
          description: 'Ask a single-choice question with predefined answer options.',
          comments: [
            {
              author: 'Maria Chen',
              initials: 'MC',
              time: '4 minutes ago',
              text: 'The choices were clear and I only needed one pick.',
              replies: '1 replies',
            },
            {
              author: 'Alex Rivera',
              initials: 'AR',
              time: '1 minute ago',
              text: 'I would have liked a none-of-the-above option.',
            },
          ],
        },
        {
          label: 'Select many',
          icon: 'wm-check-box',
          description: 'Let respondents choose every answer that applies to them.',
          comments: [
            {
              author: 'Priya Shah',
              initials: 'PS',
              time: '6 minutes ago',
              text: 'I selected three options because they all applied to me.',
              replies: '2 replies',
            },
            {
              author: 'Jordan Lee',
              initials: 'JL',
              time: '2 minutes ago',
              text: 'Checkboxes made it easy to compare and pick a few.',
            },
          ],
        },
        {
          label: 'Dropdown',
          icon: 'wm-arrow-drop-down-circle',
          description: 'Keep long option lists compact inside a dropdown menu.',
          comments: [
            {
              author: 'Emma Wilson',
              initials: 'EW',
              time: '7 minutes ago',
              text: 'The dropdown kept the page tidy with so many choices.',
              replies: '1 replies',
            },
            {
              author: 'Noah Kim',
              initials: 'NK',
              time: '3 minutes ago',
              text: 'I had to scroll a bit, but finding my answer was quick.',
            },
          ],
        },
      ],
    },
    {
      label: 'Graphical rating',
      items: [
        {
          label: 'Star rating',
          icon: 'wm-hotel-class',
          description: 'Collect a quick rating with a familiar star scale.',
          comments: [
            {
              author: 'Sofia Martinez',
              initials: 'SM',
              time: '5 minutes ago',
              text: 'Five stars — the experience was effortless.',
              replies: '1 replies',
            },
            {
              author: 'Liam Brown',
              initials: 'LB',
              time: '2 minutes ago',
              text: 'I would give it four stars, only because it took a moment to load.',
            },
          ],
        },
        {
          label: 'Smiley',
          icon: 'wm-mood',
          description: 'Measure sentiment with a friendly smiley scale.',
          comments: [
            {
              author: 'Ava Thompson',
              initials: 'AT',
              time: '8 minutes ago',
              text: 'The smileys made the question feel light and quick.',
              replies: '2 replies',
            },
            {
              author: 'Ethan Davis',
              initials: 'ED',
              time: '4 minutes ago',
              text: 'I picked the happy face without having to think twice.',
            },
          ],
        },
        {
          label: 'Thumbs up/down',
          icon: 'wm-thumbs-up-down',
          description: 'Get instant positive or negative feedback.',
          comments: [
            {
              author: 'Isabella Garcia',
              initials: 'IG',
              time: '3 minutes ago',
              text: 'Thumbs up from me — simple and direct.',
              replies: '1 replies',
            },
            {
              author: 'Mason Clark',
              initials: 'MC',
              time: '1 minute ago',
              text: 'I wanted a middle option, but the choice was clear.',
            },
          ],
        },
        {
          label: 'Push to social',
          icon: 'wm-map-pin-review',
          description: 'Invite respondents to share their answer on social.',
          comments: [
            {
              author: 'Mia Anderson',
              initials: 'MA',
              time: '9 minutes ago',
              text: 'Sharing was one tap and the preview looked great.',
              replies: '1 replies',
            },
            {
              author: 'Lucas Moore',
              initials: 'LM',
              time: '5 minutes ago',
              text: 'I skipped sharing, but I liked that it was optional.',
            },
          ],
        },
        {
          label: 'Text slider',
          icon: 'wm-format-letter-spacing-2',
          description: 'Let respondents drag to pick a point on a labeled scale.',
          comments: [
            {
              author: 'Harper Young',
              initials: 'HY',
              time: '6 minutes ago',
              text: 'Dragging the slider felt smooth and precise.',
              replies: '2 replies',
            },
            {
              author: 'Benjamin Hall',
              initials: 'BH',
              time: '2 minutes ago',
              text: 'The labels at each end made the scale easy to understand.',
            },
          ],
        },
        {
          label: 'Number slider',
          icon: 'wm-arrow-range',
          description: 'Capture a numeric value with an adjustable slider.',
          comments: [
            {
              author: 'Amelia King',
              initials: 'AK',
              time: '11 minutes ago',
              text: 'I slid to eight — the number updated instantly.',
              replies: '1 replies',
            },
            {
              author: 'Henry Wright',
              initials: 'HW',
              time: '3 minutes ago',
              text: 'A numeric input beside the slider would help with exact answers.',
            },
          ],
        },
      ],
    },
  ],
  [
    {
      label: 'Text',
      items: [
        {
          label: 'Comment box',
          icon: 'wm-tooltip-2',
          description: 'Collect open-ended feedback in a multi-line text box.',
          comments: [
            {
              author: 'Evelyn Scott',
              initials: 'ES',
              time: '7 minutes ago',
              text: 'The box was roomy enough for a thoughtful answer.',
              replies: '2 replies',
            },
            {
              author: 'Daniel Green',
              initials: 'DG',
              time: '4 minutes ago',
              text: 'I appreciated the character counter as I typed.',
            },
          ],
        },
        {
          label: 'Single row text',
          icon: 'wm-rate-review',
          description: 'Capture a short answer in a single line.',
          comments: [
            {
              author: 'Abigail Adams',
              initials: 'AA',
              time: '2 minutes ago',
              text: 'One line was perfect for my short response.',
              replies: '1 replies',
            },
            {
              author: 'Michael Baker',
              initials: 'MB',
              time: 'Just now',
              text: 'The field was easy to scan and fill in.',
            },
          ],
        },
        {
          label: 'Email address',
          icon: 'wm-alternate-email',
          description: 'Ask for an email with built-in format validation.',
          comments: [
            {
              author: 'Ella Nelson',
              initials: 'EN',
              time: '5 minutes ago',
              text: 'The field caught my typo before I submitted.',
              replies: '1 replies',
            },
            {
              author: 'James Carter',
              initials: 'JC',
              time: '1 minute ago',
              text: 'Validation feedback appeared right where I needed it.',
            },
          ],
        },
        {
          label: 'Contact information',
          icon: 'wm-newsmode',
          description: 'Collect name, phone and other contact details.',
          comments: [
            {
              author: 'Scarlett Mitchell',
              initials: 'SM',
              time: '8 minutes ago',
              text: 'Grouping the details made the form feel short.',
              replies: '2 replies',
            },
            {
              author: 'William Perez',
              initials: 'WP',
              time: '3 minutes ago',
              text: 'I liked that only the essentials were required.',
            },
          ],
        },
      ],
    },
    {
      label: 'Image',
      items: [
        {
          label: 'Select one',
          icon: 'wm-image',
          description: 'Ask respondents to choose one image from a set.',
          comments: [
            {
              author: 'Nathan Lopez',
              initials: 'NL',
              time: '6 minutes ago',
              text: 'The images were large enough to compare easily.',
              replies: '1 replies',
            },
            {
              author: 'Doc Hudson',
              initials: 'DH',
              time: '2 minutes ago',
              text: 'I picked the second option — it matched my taste best.',
            },
          ],
        },
        {
          label: 'Select many',
          icon: 'wm-gallery-thumbnail',
          description: 'Let respondents pick multiple images from a set.',
          comments: [
            {
              author: 'Charlotte Reed',
              initials: 'CR',
              time: '10 minutes ago',
              text: 'Selecting several images was quick and intuitive.',
              replies: '2 replies',
            },
            {
              author: 'Samuel Price',
              initials: 'SP',
              time: '4 minutes ago',
              text: 'The selected state was obvious at a glance.',
            },
          ],
        },
        {
          label: 'Image rating',
          icon: 'wm-stack-star',
          description: 'Rate a set of images with stars.',
          comments: [
            {
              author: 'Grace Turner',
              initials: 'GT',
              time: '9 minutes ago',
              text: 'Rating each image only took a few seconds.',
              replies: '1 replies',
            },
            {
              author: 'Oliver Brooks',
              initials: 'OB',
              time: '5 minutes ago',
              text: 'The stars made my preference clear without typing.',
            },
          ],
        },
      ],
    },
  ],
]

export interface SurveyQuestionSection {
  label: string
  columns: [SurveyQuestionGroup[], SurveyQuestionGroup[]]
}

const [multipleChoiceGroup, graphicalRatingGroup] = surveyBaseGroups[0]
const [textGroup, imageGroup] = surveyBaseGroups[1]

const orderingGroup: SurveyQuestionGroup = {
  label: 'Ordering',
  items: [
    {
      label: 'Rank order',
      icon: 'wm-low-priority',
      description: 'Ask respondents to arrange a list of items from most to least preferred.',
      comments: [
        {
          author: 'Maria Chen',
          initials: 'MC',
          time: '4 minutes ago',
          text: 'I put price first, then features, then support.',
          replies: '1 replies',
        },
        {
          author: 'Alex Rivera',
          initials: 'AR',
          time: '2 minutes ago',
          text: 'Dragging the items into order was quick and clear.',
        },
      ],
    },
    {
      label: 'Constant sum',
      icon: 'wm-functions',
      description: 'Let respondents distribute a fixed number of points across options.',
      comments: [
        {
          author: 'Priya Shah',
          initials: 'PS',
          time: '5 minutes ago',
          text: 'I split my 100 points between the three features I use most.',
          replies: '1 replies',
        },
        {
          author: 'Jordan Lee',
          initials: 'JL',
          time: '1 minute ago',
          text: 'The running total made it easy to stay within the budget.',
        },
      ],
    },
    {
      label: 'Drag and drop',
      icon: 'wm-drag-click',
      description: 'Move items between lists to capture grouping or prioritization.',
      comments: [
        {
          author: 'Emma Wilson',
          initials: 'EW',
          time: '6 minutes ago',
          text: 'Dragging cards into the right column felt natural.',
          replies: '2 replies',
        },
        {
          author: 'Noah Kim',
          initials: 'NK',
          time: '3 minutes ago',
          text: 'I liked that I could undo a drop with a single click.',
        },
      ],
    },
  ],
}

const staticContentGroup: SurveyQuestionGroup = {
  label: 'Static content',
  items: [
    {
      label: 'Presentation text',
      icon: 'wm-slideshow',
      description: 'Add formatted narrative content between questions.',
      comments: [
        {
          author: 'Sofia Martinez',
          initials: 'SM',
          time: '7 minutes ago',
          text: 'The intro text gave the survey a clear purpose.',
          replies: '1 replies',
        },
        {
          author: 'Liam Brown',
          initials: 'LB',
          time: '2 minutes ago',
          text: 'I read the whole page before starting the questions.',
        },
      ],
    },
    {
      label: 'Section heading',
      icon: 'wm-title',
      description: 'Break long surveys into clearly labeled sections.',
      comments: [
        {
          author: 'Ava Thompson',
          initials: 'AT',
          time: '8 minutes ago',
          text: 'The section heading told me what to expect next.',
          replies: '1 replies',
        },
        {
          author: 'Ethan Davis',
          initials: 'ED',
          time: '4 minutes ago',
          text: 'Short headings made the survey feel less overwhelming.',
        },
      ],
    },
    {
      label: 'Section subheading',
      icon: 'wm-subtitles',
      description: 'Add a secondary line of context beneath a section heading.',
      comments: [
        {
          author: 'Isabella Garcia',
          initials: 'IG',
          time: '3 minutes ago',
          text: 'The subheading explained why the section mattered.',
          replies: '1 replies',
        },
        {
          author: 'Mason Clark',
          initials: 'MC',
          time: '1 minute ago',
          text: 'It was a helpful nudge without adding clutter.',
        },
      ],
    },
  ],
}

const basicMatrixGroup: SurveyQuestionGroup = {
  label: 'Basic matrix',
  items: [
    {
      label: 'Multi-point scales',
      icon: 'wm-grid-view',
      description: 'Collect ratings for several rows on a shared scale.',
      comments: [
        {
          author: 'Mia Anderson',
          initials: 'MA',
          time: '6 minutes ago',
          text: 'Rating each row on the same scale was easy to compare.',
          replies: '1 replies',
        },
        {
          author: 'Lucas Moore',
          initials: 'LM',
          time: '2 minutes ago',
          text: 'The grid stayed readable even with five rows.',
        },
      ],
    },
    {
      label: 'Multi-select',
      icon: 'wm-check-box-outline-blank',
      description: 'Let respondents tick multiple items in a matrix.',
      comments: [
        {
          author: 'Harper Young',
          initials: 'HY',
          time: '9 minutes ago',
          text: 'I checked every row that applied to my team.',
          replies: '1 replies',
        },
        {
          author: 'Benjamin Hall',
          initials: 'BH',
          time: '3 minutes ago',
          text: 'The selected cells were easy to spot at a glance.',
        },
      ],
    },
    {
      label: 'Spreadsheet',
      icon: 'wm-backup-table',
      description: 'Capture structured rows and columns of data in one question.',
      comments: [
        {
          author: 'Amelia King',
          initials: 'AK',
          time: '10 minutes ago',
          text: 'Entering figures row by row matched how I track my budget.',
          replies: '2 replies',
        },
        {
          author: 'Henry Wright',
          initials: 'HW',
          time: '5 minutes ago',
          text: 'The column headers made the spreadsheet self-explanatory.',
        },
      ],
    },
  ],
}

const miscGroup: SurveyQuestionGroup = {
  label: 'Misc',
  items: [
    {
      label: 'Date / Time',
      icon: 'wm-calendar-clock',
      description: 'Collect a date and time with a combined picker.',
      comments: [
        {
          author: 'Evelyn Scott',
          initials: 'ES',
          time: '4 minutes ago',
          text: 'Picking a date and time in one step saved me a click.',
          replies: '1 replies',
        },
        {
          author: 'Daniel Green',
          initials: 'DG',
          time: '2 minutes ago',
          text: 'The time zone label removed any confusion.',
        },
      ],
    },
    {
      label: 'Captcha',
      icon: 'wm-security',
      description: 'Protect forms from automated submissions with a challenge.',
      comments: [
        {
          author: 'Abigail Adams',
          initials: 'AA',
          time: '7 minutes ago',
          text: 'The challenge was quick and did not get in the way.',
          replies: '1 replies',
        },
        {
          author: 'Michael Baker',
          initials: 'MB',
          time: '3 minutes ago',
          text: 'I appreciated that it was accessible and easy to complete.',
        },
      ],
    },
    {
      label: 'Calendar',
      icon: 'wm-calendar-month',
      description: 'Ask respondents to pick a date from a calendar.',
      comments: [
        {
          author: 'Ella Nelson',
          initials: 'EN',
          time: '5 minutes ago',
          text: 'The month view made scheduling straightforward.',
          replies: '1 replies',
        },
        {
          author: 'James Carter',
          initials: 'JC',
          time: '1 minute ago',
          text: 'I could jump straight to next week without scrolling.',
        },
      ],
    },
    {
      label: 'Maps',
      icon: 'wm-map',
      description: 'Let respondents drop a pin or select a location on a map.',
      comments: [
        {
          author: 'Scarlett Mitchell',
          initials: 'SM',
          time: '8 minutes ago',
          text: 'Zooming into my neighborhood was smooth.',
          replies: '2 replies',
        },
        {
          author: 'William Perez',
          initials: 'WP',
          time: '4 minutes ago',
          text: 'The pin landed exactly where I tapped.',
        },
      ],
    },
    {
      label: 'Timer',
      icon: 'wm-hourglass-bottom',
      description: 'Limit how long respondents can spend on a question.',
      comments: [
        {
          author: 'Nathan Lopez',
          initials: 'NL',
          time: '6 minutes ago',
          text: 'The countdown kept the exercise focused.',
          replies: '1 replies',
        },
        {
          author: 'Doc Hudson',
          initials: 'DH',
          time: '2 minutes ago',
          text: 'I could see the remaining time without feeling rushed.',
        },
      ],
    },
  ],
}

const customerSatisfactionGroup: SurveyQuestionGroup = {
  label: 'Customer satisfaction',
  items: [
    {
      label: 'Net promoter score',
      icon: 'wm-speed',
      description: 'Measure loyalty with the classic 0–10 recommendation scale.',
      comments: [
        {
          author: 'Charlotte Reed',
          initials: 'CR',
          time: '5 minutes ago',
          text: 'I would recommend the product to a colleague — easy nine.',
          replies: '1 replies',
        },
        {
          author: 'Samuel Price',
          initials: 'SP',
          time: '2 minutes ago',
          text: 'The scale labels made it obvious what each number meant.',
        },
      ],
    },
  ],
}

const healthcareGroup: SurveyQuestionGroup = {
  label: 'Healthcare',
  items: [
    {
      label: 'Homunculus question',
      icon: 'wm-accessibility-new',
      description: 'Let respondents mark symptoms or areas on a body diagram.',
      comments: [
        {
          author: 'Grace Turner',
          initials: 'GT',
          time: '7 minutes ago',
          text: 'Tapping the diagram was faster than describing the area.',
          replies: '1 replies',
        },
        {
          author: 'Oliver Brooks',
          initials: 'OB',
          time: '3 minutes ago',
          text: 'The body outline was clear and easy to use.',
        },
      ],
    },
    {
      label: 'Verified signature',
      icon: 'wm-verified-user',
      description: 'Capture a verified signature for consent or authorization.',
      comments: [
        {
          author: 'Maria Chen',
          initials: 'MC',
          time: '4 minutes ago',
          text: 'Signing with my finger felt natural.',
          replies: '1 replies',
        },
        {
          author: 'Alex Rivera',
          initials: 'AR',
          time: '1 minute ago',
          text: 'The confirmation step reassured me that it was recorded.',
        },
      ],
    },
  ],
}

const dataReferenceGroup: SurveyQuestionGroup = {
  label: 'Data reference',
  items: [
    {
      label: 'Reference data',
      icon: 'wm-dataset',
      description: 'Pre-fill questions with data from an existing reference table.',
      comments: [
        {
          author: 'Priya Shah',
          initials: 'PS',
          time: '6 minutes ago',
          text: 'My company details appeared without me typing them.',
          replies: '1 replies',
        },
        {
          author: 'Jordan Lee',
          initials: 'JL',
          time: '2 minutes ago',
          text: 'The values matched our internal records exactly.',
        },
      ],
    },
    {
      label: 'Lookup table',
      icon: 'wm-table-view',
      description: 'Map an answer to related values using a lookup table.',
      comments: [
        {
          author: 'Emma Wilson',
          initials: 'EW',
          time: '8 minutes ago',
          text: 'Selecting my region filled in the right currency.',
          replies: '1 replies',
        },
        {
          author: 'Noah Kim',
          initials: 'NK',
          time: '3 minutes ago',
          text: 'The dependent fields updated instantly.',
        },
      ],
    },
    {
      label: 'Multi-tier lookup table',
      icon: 'wm-account-tree',
      description: 'Resolve values across several levels of related data.',
      comments: [
        {
          author: 'Sofia Martinez',
          initials: 'SM',
          time: '9 minutes ago',
          text: 'Choosing a country then a city narrowed the options correctly.',
          replies: '2 replies',
        },
        {
          author: 'Liam Brown',
          initials: 'LB',
          time: '4 minutes ago',
          text: 'The cascading lists saved a lot of manual entry.',
        },
      ],
    },
    {
      label: 'Store locator',
      icon: 'wm-location-on',
      description: 'Help respondents find the nearest location on a map.',
      comments: [
        {
          author: 'Ava Thompson',
          initials: 'AT',
          time: '5 minutes ago',
          text: 'The closest store appeared as soon as I shared my postcode.',
          replies: '1 replies',
        },
        {
          author: 'Ethan Davis',
          initials: 'ED',
          time: '2 minutes ago',
          text: 'The distance and opening hours were both useful.',
        },
      ],
    },
  ],
}

const mobileGroup: SurveyQuestionGroup = {
  label: 'Mobile',
  items: [
    {
      label: 'Stopwatch',
      icon: 'wm-timer',
      description: 'Time an activity with a start and stop control.',
      comments: [
        {
          author: 'Isabella Garcia',
          initials: 'IG',
          time: '4 minutes ago',
          text: 'Starting and stopping the timer was one tap.',
          replies: '1 replies',
        },
        {
          author: 'Mason Clark',
          initials: 'MC',
          time: '1 minute ago',
          text: 'The elapsed time stayed visible while I worked.',
        },
      ],
    },
    {
      label: 'Barcode',
      icon: 'wm-barcode-scanner',
      description: 'Scan a barcode with the respondent’s device camera.',
      comments: [
        {
          author: 'Mia Anderson',
          initials: 'MA',
          time: '6 minutes ago',
          text: 'The scanner picked up the code immediately.',
          replies: '1 replies',
        },
        {
          author: 'Lucas Moore',
          initials: 'LM',
          time: '3 minutes ago',
          text: 'I did not have to type the long number manually.',
        },
      ],
    },
    {
      label: 'QR code reader',
      icon: 'wm-qr-code',
      description: 'Scan a QR code to capture a product or reference.',
      comments: [
        {
          author: 'Harper Young',
          initials: 'HY',
          time: '7 minutes ago',
          text: 'Pointing my camera at the code just worked.',
          replies: '2 replies',
        },
        {
          author: 'Benjamin Hall',
          initials: 'BH',
          time: '3 minutes ago',
          text: 'The confirmation showed the right product before I submitted.',
        },
      ],
    },
  ],
}

const uploadGroup: SurveyQuestionGroup = {
  label: 'Upload',
  items: [
    {
      label: 'Upload / Attach file',
      icon: 'wm-arrow-upload-progress',
      description: 'Let respondents attach documents, images or other files.',
      comments: [
        {
          author: 'Amelia King',
          initials: 'AK',
          time: '8 minutes ago',
          text: 'Uploading a photo from my phone was straightforward.',
          replies: '1 replies',
        },
        {
          author: 'Henry Wright',
          initials: 'HW',
          time: '4 minutes ago',
          text: 'The progress bar told me the file had gone through.',
        },
      ],
    },
    {
      label: 'Signature',
      icon: 'wm-signature',
      description: 'Collect a handwritten signature for forms and agreements.',
      comments: [
        {
          author: 'Evelyn Scott',
          initials: 'ES',
          time: '5 minutes ago',
          text: 'Drawing my signature on screen felt natural.',
          replies: '1 replies',
        },
        {
          author: 'Daniel Green',
          initials: 'DG',
          time: '2 minutes ago',
          text: 'The clear button let me start over without reloading.',
        },
      ],
    },
  ],
}

const logicGroup: SurveyQuestionGroup = {
  label: 'Logic',
  items: [
    {
      label: 'Custom logic engine',
      icon: 'wm-graph-8',
      description: 'Branch, skip or personalize the survey with custom rules.',
      comments: [
        {
          author: 'Abigail Adams',
          initials: 'AA',
          time: '6 minutes ago',
          text: 'The follow-up questions matched the answer I gave.',
          replies: '1 replies',
        },
        {
          author: 'Michael Baker',
          initials: 'MB',
          time: '3 minutes ago',
          text: 'Nothing irrelevant was shown, which kept it short.',
        },
      ],
    },
  ],
}

const integrationsGroup: SurveyQuestionGroup = {
  label: 'Integrations',
  items: [
    {
      label: 'Platform connect',
      icon: 'wm-join-inner',
      description: 'Send responses to a connected platform automatically.',
      comments: [
        {
          author: 'Ella Nelson',
          initials: 'EN',
          time: '7 minutes ago',
          text: 'My answer appeared in our CRM right away.',
          replies: '1 replies',
        },
        {
          author: 'James Carter',
          initials: 'JC',
          time: '2 minutes ago',
          text: 'I did not have to copy anything into another tool.',
        },
      ],
    },
    {
      label: 'Community recruitment',
      icon: 'wm-crowdsource',
      description: 'Invite participants from a managed community panel.',
      comments: [
        {
          author: 'Scarlett Mitchell',
          initials: 'SM',
          time: '9 minutes ago',
          text: 'The invite explained the time commitment clearly.',
          replies: '1 replies',
        },
        {
          author: 'William Perez',
          initials: 'WP',
          time: '5 minutes ago',
          text: 'Joining the study took less than a minute.',
        },
      ],
    },
  ],
}

const moderatedGroup: SurveyQuestionGroup = {
  label: 'Moderated',
  items: [
    {
      label: 'Chat',
      icon: 'wm-forum',
      description: 'Run a moderated conversation with an AI or researcher.',
      comments: [
        {
          author: 'Nathan Lopez',
          initials: 'NL',
          time: '5 minutes ago',
          text: 'The chat felt like a natural back-and-forth.',
          replies: '2 replies',
        },
        {
          author: 'Doc Hudson',
          initials: 'DH',
          time: '1 minute ago',
          text: 'I could ask for clarification without leaving the page.',
        },
      ],
    },
    {
      label: 'VideoAI',
      icon: 'wm-video-camera-front',
      description: 'Collect video responses with AI-assisted follow-ups.',
      comments: [
        {
          author: 'Charlotte Reed',
          initials: 'CR',
          time: '8 minutes ago',
          text: 'Recording a short video was easier than writing paragraphs.',
          replies: '1 replies',
        },
        {
          author: 'Samuel Price',
          initials: 'SP',
          time: '4 minutes ago',
          text: 'The AI prompt helped me expand on my first answer.',
        },
      ],
    },
  ],
}

const pricingAnalysisGroup: SurveyQuestionGroup = {
  label: 'Pricing analysis',
  items: [
    {
      label: 'Van Westendorp',
      icon: 'wm-sell',
      description: 'Find an acceptable price range with four price questions.',
      comments: [
        {
          author: 'Grace Turner',
          initials: 'GT',
          time: '6 minutes ago',
          text: 'The four questions made me think about value from different angles.',
          replies: '1 replies',
        },
        {
          author: 'Oliver Brooks',
          initials: 'OB',
          time: '2 minutes ago',
          text: 'I liked that there was no single right answer.',
        },
      ],
    },
    {
      label: 'Gabor Granger',
      icon: 'wm-price-check',
      description: 'Test purchase intent across a series of price points.',
      comments: [
        {
          author: 'Maria Chen',
          initials: 'MC',
          time: '7 minutes ago',
          text: 'The price ladder was easy to follow.',
          replies: '1 replies',
        },
        {
          author: 'Alex Rivera',
          initials: 'AR',
          time: '3 minutes ago',
          text: 'I could tell exactly where my willingness to pay dropped.',
        },
      ],
    },
  ],
}

const imageMultimediaGroup: SurveyQuestionGroup = {
  label: 'Image / Multimedia',
  items: [
    {
      label: 'TubePulse',
      icon: 'wm-smart-display',
      description: 'Gather reactions to a video at specific moments.',
      comments: [
        {
          author: 'Priya Shah',
          initials: 'PS',
          time: '9 minutes ago',
          text: 'Reacting while the clip played felt immediate.',
          replies: '1 replies',
        },
        {
          author: 'Jordan Lee',
          initials: 'JL',
          time: '4 minutes ago',
          text: 'The timeline showed exactly where my reaction landed.',
        },
      ],
    },
    {
      label: 'Heatmap',
      icon: 'wm-key-visualizer',
      description: 'Visualize where respondents click or focus on an image.',
      comments: [
        {
          author: 'Emma Wilson',
          initials: 'EW',
          time: '5 minutes ago',
          text: 'The heatmap made the popular areas obvious.',
          replies: '2 replies',
        },
        {
          author: 'Noah Kim',
          initials: 'NK',
          time: '2 minutes ago',
          text: 'I could see that most attention went to the headline.',
        },
      ],
    },
    {
      label: 'HotSpot',
      icon: 'wm-touch-app',
      description: 'Ask respondents to identify areas of interest on an image.',
      comments: [
        {
          author: 'Sofia Martinez',
          initials: 'SM',
          time: '6 minutes ago',
          text: 'Placing a hotspot on the product was intuitive.',
          replies: '1 replies',
        },
        {
          author: 'Liam Brown',
          initials: 'LB',
          time: '3 minutes ago',
          text: 'The numbered markers made it easy to add several spots.',
        },
      ],
    },
    {
      label: 'Text highlighter',
      icon: 'wm-format-ink-highlighter',
      description: 'Let respondents highlight parts of a passage or image.',
      comments: [
        {
          author: 'Ava Thompson',
          initials: 'AT',
          time: '8 minutes ago',
          text: 'Highlighting the key sentence was quick.',
          replies: '1 replies',
        },
        {
          author: 'Ethan Davis',
          initials: 'ED',
          time: '4 minutes ago',
          text: 'The selected text stayed visible in the summary.',
        },
      ],
    },
  ],
}

const cardSortingGroup: SurveyQuestionGroup = {
  label: 'Ordering',
  items: [
    {
      label: 'Card sorting',
      icon: 'wm-cards',
      description: 'Ask respondents to group cards into categories that make sense to them.',
      comments: [
        {
          author: 'Isabella Garcia',
          initials: 'IG',
          time: '7 minutes ago',
          text: 'Sorting the cards into my own groups felt natural.',
          replies: '1 replies',
        },
        {
          author: 'Mason Clark',
          initials: 'MC',
          time: '2 minutes ago',
          text: 'I liked being able to rename a category.',
        },
      ],
    },
  ],
}

const choiceModelsGroup: SurveyQuestionGroup = {
  label: 'Choice models',
  items: [
    {
      label: 'Conjoint',
      icon: 'wm-insights',
      description: 'Understand trade-offs by varying product attributes.',
      comments: [
        {
          author: 'Mia Anderson',
          initials: 'MA',
          time: '8 minutes ago',
          text: 'Comparing the bundles forced me to weigh features against price.',
          replies: '1 replies',
        },
        {
          author: 'Lucas Moore',
          initials: 'LM',
          time: '3 minutes ago',
          text: 'The choices felt realistic rather than hypothetical.',
        },
      ],
    },
    {
      label: 'Max-diff',
      icon: 'wm-compare-arrows',
      description: 'Identify the most and least preferred items in a set.',
      comments: [
        {
          author: 'Harper Young',
          initials: 'HY',
          time: '5 minutes ago',
          text: 'Picking the best and worst was faster than ranking everything.',
          replies: '1 replies',
        },
        {
          author: 'Benjamin Hall',
          initials: 'BH',
          time: '2 minutes ago',
          text: 'The sets were small enough to compare carefully.',
        },
      ],
    },
  ],
}

const advancedMatrixGroup: SurveyQuestionGroup = {
  label: 'Advanced matrix',
  items: [
    {
      label: 'Flex matrix',
      icon: 'wm-grid-on',
      description: 'Build a matrix with flexible rows, columns and input types.',
      comments: [
        {
          author: 'Amelia King',
          initials: 'AK',
          time: '6 minutes ago',
          text: 'The mixed input types fit the question perfectly.',
          replies: '1 replies',
        },
        {
          author: 'Henry Wright',
          initials: 'HW',
          time: '3 minutes ago',
          text: 'I could answer each row in the format that suited it.',
        },
      ],
    },
    {
      label: 'Side-by-side matrix',
      icon: 'wm-view-column',
      description: 'Compare two items across several attributes at once.',
      comments: [
        {
          author: 'Evelyn Scott',
          initials: 'ES',
          time: '7 minutes ago',
          text: 'Seeing the two options side by side made the trade-offs clear.',
          replies: '1 replies',
        },
        {
          author: 'Daniel Green',
          initials: 'DG',
          time: '2 minutes ago',
          text: 'The column alignment helped me compare quickly.',
        },
      ],
    },
  ],
}

export const surveyQuestionSections: SurveyQuestionSection[] = [
  {
    label: 'Basic',
    columns: [
      [
        multipleChoiceGroup,
        graphicalRatingGroup,
        orderingGroup,
        staticContentGroup,
      ],
      [textGroup, imageGroup, basicMatrixGroup, miscGroup],
    ],
  },
  {
    label: 'Advanced',
    columns: [
      [
        customerSatisfactionGroup,
        healthcareGroup,
        dataReferenceGroup,
        mobileGroup,
        uploadGroup,
        logicGroup,
        integrationsGroup,
      ],
      [
        moderatedGroup,
        pricingAnalysisGroup,
        imageMultimediaGroup,
        cardSortingGroup,
        choiceModelsGroup,
        advancedMatrixGroup,
      ],
    ],
  },
]

const surveyGroupLabels = Array.from(
  new Set(
    surveyQuestionSections.flatMap((section) =>
      section.columns.flatMap((groups) => groups.map((group) => group.label)),
    ),
  ),
)

export const surveyFilterOptions = [
  { value: 'all', label: 'Filter by' },
  ...surveyGroupLabels.map((label) => ({ value: label, label })),
]
