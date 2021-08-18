import update from 'immutability-helper'
import { ReportingStore } from './types'
import { ReportingActions, SET_JOBS, SetJobs } from './actions'

/** Initial state */
const initialState: ReportingStore = {
  jobs: [],
}

export default function reportingReducer(
  state = initialState,
  action: ReportingActions
): ReportingStore {
  switch (action.type) {
    case SET_JOBS: {
      return update(state, {
        jobs: { $set: (action as SetJobs).jobs },
      })
    }

    default:
      return state
  }
}
