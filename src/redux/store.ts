import reportingReducer from './reducer'
import reportingRootSaga from './sagas'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const injectStuffIntoStore = (coreStoreProps: any): void => {
  coreStoreProps.injectReducer('reporting', reportingReducer)
  coreStoreProps.injectSaga('reporting', reportingRootSaga)
}
