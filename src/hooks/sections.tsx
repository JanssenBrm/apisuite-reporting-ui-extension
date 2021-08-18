import { HookSections } from '@apisuite/extension-ui-types'
import React from 'react'

type SectionsConfig = {
  [section: string]: React.FC
}

const sections: SectionsConfig = {}

const hookSections: HookSections = (section, props) => {
  const Component = sections[section]
  if (Component) {
    return <Component {...props} />
  }
  return null
}

export default hookSections
