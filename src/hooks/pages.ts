import { HookPages, PageEntry } from 'apisuite-extension-ui-types'

import About from 'pages/About'

const pagesConfig: PageEntry[] = [
  {
    auth: true,
    path: '/reporting',
    exact: true,
    component: About,
  },
  {
    auth: true,
    path: '/reporting/services',
    exact: true,
    component: About,
  },
]

const hookPages: HookPages = () => {
  return pagesConfig
}

export default hookPages
