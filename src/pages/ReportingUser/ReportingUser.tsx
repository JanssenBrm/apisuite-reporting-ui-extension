import React from 'react'

import { Typography, useTranslation } from '@apisuite/fe-base'

const ReportingUser: React.FC = () => {
  const trans = useTranslation()
  const t = (str: string) => {
    return trans.t(`extensions.reporting.${str}`)
  }
  return (
    <main className={`page-container`}>
      <div>{t('user.title')}</div>
      <p>This page was dynamically added by an extensions.</p>
    </main>
  )
}

export default ReportingUser
