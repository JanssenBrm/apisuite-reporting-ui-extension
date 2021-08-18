import ReportingUser from 'pages/ReportingUser'
import ReportingService from 'pages/ReportingService'
import {HookPages, PageEntry} from "@apisuite/extension-ui-types";

const pagesConfig: PageEntry[] = [
  {
    auth: true,
    path: '/reporting',
    exact: true,
    component: ReportingUser,
  },
  {
    auth: true,
    path: '/reporting/services',
    exact: true,
    component: ReportingService,
  },
]

const hookPages: HookPages = () => {
  return pagesConfig
}

export default hookPages
