import React, { useEffect } from 'react'


import useStyles from '../../styles'
import { useTranslation, Typography, useTheme } from '@apisuite/fe-base'
import JobList from 'components/JobList'
import { ReportUserProps } from 'pages/ReportingUser/types'

const ReportingUser: React.FC<ReportUserProps> = (props: ReportUserProps) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { typography } = useTheme()

  console.log('typography - overview', typography);

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
      <Typography variant="h2">{t('user.title')}</Typography>
      <p>Overview user</p>
    </main>
  )
}

export default ReportingUser
