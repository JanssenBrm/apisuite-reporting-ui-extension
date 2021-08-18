import React, { useEffect, useState } from 'react'

import { Typography, useTheme, useTranslation } from '@apisuite/fe-base'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { selectJobs } from 'redux/selectors'
import { JobListProps } from './types'

const JobList: React.FC<JobListProps> = (props) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette } = useTheme()
  const jobs = useSelector(selectJobs)

  const t = (str: string) => {
    return trans.t(`extensions.reporting.${str}`)
  }

  return (
    <div>
      <Typography variant="h2">{t('jobs.title')}</Typography>
      {jobs.length}
    </div>
  )
}

export default JobList
