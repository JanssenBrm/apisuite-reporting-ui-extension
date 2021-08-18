import { BASE_API_URI } from 'helpers/constants'

// USER REPORTING

/**
 * Get a list of all user reporting jobs
 */
export const getUserReportingJobs = (): Promise<any[]> =>
  callUserReportApi('json').then((response: Response) => response.json())

/**
 * Call the backend API to fetch the user report for a specified format
 * @param format - Format of the results
 */
const callUserReportApi = (format: string): Promise<Response> =>
  fetch(`${BASE_API_URI}/reports/user?format=${format}`)
