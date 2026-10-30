import type { QuestionSet } from './components/questionOptions'

export const DEFAULT_QUESTION_SET: QuestionSet = 'ux'
export const DEFAULT_QUESTION_SET_PATH = '/ux'

export const QUESTION_SET_PATHS: Record<QuestionSet, string> = {
  ux: '/ux',
  livepolls: '/livepolls',
  surveys: '/surveys',
  journey: '/journey-management',
}

const PATH_QUESTION_SETS: Record<string, QuestionSet> = {
  '/': DEFAULT_QUESTION_SET,
  [QUESTION_SET_PATHS.ux]: 'ux',
  [QUESTION_SET_PATHS.livepolls]: 'livepolls',
  [QUESTION_SET_PATHS.surveys]: 'surveys',
  [QUESTION_SET_PATHS.journey]: 'journey',
}

function normalizePath(pathname: string): string {
  if (pathname === '/') return '/'
  return pathname.replace(/\/+$/, '').toLowerCase() || '/'
}

export function questionSetFromPath(pathname: string): QuestionSet | null {
  return PATH_QUESTION_SETS[normalizePath(pathname)] ?? null
}

export function pathForQuestionSet(questionSet: QuestionSet): string {
  return QUESTION_SET_PATHS[questionSet]
}
