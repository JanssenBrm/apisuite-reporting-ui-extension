import { call, put, select, takeLatest } from 'redux-saga/effects'

import { GET_JOBS, GetJobs, setJobs } from 'redux/actions'
import { getUserReportingJobs } from 'services/Reporting'

export function* getJobsSaga(action: GetJobs) {
  try {
    const jobs = yield getUserReportingJobs()

    console.log('response', jobs)
    yield put(setJobs(jobs))
  } catch (error) {
    console.error('Could not fetch user reporting jobs')
  }
}

function* reportingRootSaga() {
  yield takeLatest(GET_JOBS, getJobsSaga)
}

export default reportingRootSaga
