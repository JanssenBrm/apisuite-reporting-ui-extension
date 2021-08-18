import React, { useEffect } from 'react'
import useStyles from '../../styles'
import { useTheme, useTranslation } from '@apisuite/fe-base'
import { ReportServiceProps } from 'pages/ReportingService/types'

const ReportingService: React.FC<ReportServiceProps> = (
  props: ReportServiceProps
) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { typography } = useTheme()

  console.log('typography - services', typography)

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
      <h1>{t('service.title')}</h1>
      <p>Overview services</p>
    </main>
  )
}

export default ReportingService
