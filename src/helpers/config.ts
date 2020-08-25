import baseConfig, { ExtensionConfig } from 'config'

let values = {
  ...baseConfig,
}

interface Config {
  (): ExtensionConfig
  set: (conf: Record<string, unknown>) => void
}

const config: Config = () => values

config.set = (conf: Record<string, unknown>) => {
  values = {
    ...values,
    ...conf,
  }
}

export default config
