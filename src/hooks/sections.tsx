import React from 'react'
import { HookSections } from 'apisuite-extension-ui-types'

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
