import { connect } from 'react-redux'
import { getJobs } from 'redux/actions'
import ReportingUser from './ReportingUser'
import { Action, Dispatch } from 'redux'

export const mapStateToProps = ({ reporting }) => ({
  jobs: reporting.jobs,
})

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getJobs: () => dispatch(getJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportingUser)
