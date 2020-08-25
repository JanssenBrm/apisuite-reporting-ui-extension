import React from 'react'
import { useTranslation } from 'react-i18next'
import config from 'helpers/config'
import { EXT_NAME } from 'helpers/constants'

const AdditionalInfo: React.FC = () => {
  const [t] = useTranslation(EXT_NAME)

  return (
    <div style={{ border: '1px solid #ccc', color: 'white' }}>
      <h1>{t('homepage.extensionSection.title')}</h1>
      <p>{t('homepage.extensionSection.paragraph')}</p>
      <p>
        {t('homepage.extensionSection.configValue', {
          value: config().someKey,
        })}
      </p>
    </div>
  )
}

export default AdditionalInfo
