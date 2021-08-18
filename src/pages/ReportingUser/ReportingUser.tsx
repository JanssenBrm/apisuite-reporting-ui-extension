import React, { useEffect } from 'react'

import { Typography, useTheme } from '@material-ui/core'
import useStyles from './styles'
import { useTranslation } from '@apisuite/fe-base'
import JobList from 'components/JobList'
import { ReportUserProps } from 'pages/ReportingUser/types'

const ReportingUser: React.FC<ReportUserProps> = (props: ReportUserProps) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette } = useTheme()

  useEffect(() => {
    if (props.jobs.length === 0) {
      props.getJobs()
    }
  }, [])

  const t = (str: string) => {
    return trans.t(`extensions.reporting.${str}`)
  }

  return (
    <main className={`page-container ${classes.pageContentContainer}`}>
      <Typography variant="h1">{t('user.title')}</Typography>
      <p>This page was dynamically added by an extensions.</p>
      <JobList jobs={props.jobs} />
    </main>
  )
}

export default ReportingUser
