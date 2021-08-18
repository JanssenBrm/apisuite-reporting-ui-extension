import React from 'react'

import { Typography, useTheme, useTranslation } from '@apisuite/fe-base'
import useStyles from './styles'
import { JobListProps } from './types'

const JobList: React.FC<JobListProps> = (props: JobListProps) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette } = useTheme()

  const t = (str: string) => {
    return trans.t(`extensions.reporting.${str}`)
  }

  return (
    <div>
      <Typography variant="h2">{t('jobs.title')}</Typography>
      {props.jobs.length}
    </div>
  )
}

export default JobList
