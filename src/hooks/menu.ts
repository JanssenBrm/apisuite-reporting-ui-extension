import { Menus, MenuEntry, HookMenu } from 'apisuite-extension-ui-types'
import {BASE_URI} from "helpers/constants";

type MenuConfig = {
  [menu: string]: MenuEntry[]
}

const menuConfig: MenuConfig = {
  [Menus.HeaderAuthenticatedDashboard]: [
    {
      label: 'Reporting',
      route: BASE_URI,
      title: 'Reporting',
    },
  ]
}

const hookMenu: HookMenu = (menu) => {
  return menuConfig[menu] || null
}

export default hookMenu
