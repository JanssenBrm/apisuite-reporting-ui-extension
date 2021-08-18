import { connect } from 'react-redux'
import { getJobs } from 'redux/actions'
import { Action, Dispatch } from 'redux'
import ReportingService from 'pages/ReportingService/ReportingService'

export const mapStateToProps = ({ reporting }) => ({
  jobs: reporting.jobs,
})

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getJobs: () => dispatch(getJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportingService)
