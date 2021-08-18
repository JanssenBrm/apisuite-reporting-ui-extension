import { Action } from 'redux'

export const SET_JOBS = 'reporting/set-jobs'
export const GET_JOBS = 'reporting/set-jobs'

// ACTION INTERFACES
export interface SetJobs extends Action {
  type: typeof SET_JOBS
  jobs: any[]
}

export interface GetJobs extends Action {
  type: typeof GET_JOBS
}

export type ReportingActions = SetJobs | GetJobs

// ACTION BUILDERS
export function setJobs(jobs: any[]): SetJobs {
  return { type: SET_JOBS, jobs }
}

export function getJobs(): GetJobs {
  return { type: GET_JOBS }
}
