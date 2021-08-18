import {
  Extension,
  ExtensionParams,
  protocolVersion,
} from '@apisuite/extension-ui-types/v1'
import { ReportingExtensionConfig } from './config'
import './translations'
import hooks from './hooks'
import configHelper from './helpers/config'
import coreHelper from './helpers/core'
import { name, version } from '../package.json'
import { injectStuffIntoStore } from 'redux/store'

type ReportingExtensionParams = ExtensionParams & {
  config?: ReportingExtensionConfig
}

class ReportingExtension extends Extension {
  static info = {
    name,
    version,
    protocolVersion,
  }

  public config: ReportingExtensionConfig

  hooks = hooks

  constructor({ core, config }: ReportingExtensionParams) {
    super({ core, config })

    console.log("CORE", core);
    configHelper.set(config)
    coreHelper.set(core)

    injectStuffIntoStore(core.store)
  }
}

export default ReportingExtension
