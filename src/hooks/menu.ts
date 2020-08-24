import { Menus, MenuEntry, HookMenu } from "apisuite-extension-ui-types";

type MenuConfig = {
  [menu: string]: MenuEntry[];
};

const menuConfig: MenuConfig = {
  [Menus.FooterDashboard]: [
    {
      label: "About Extensions",
      route: "/extensions/about",
      title: "About Extensions",
    },
  ],
  [Menus.HeaderAnonymousMain]: [
    {
      label: "About Extensions",
      route: "/extensions/about",
      title: "About Extensions",
    },
  ],
  [Menus.HeaderAuthenticatedMain]: [
    {
      label: "Extension Authenticated",
      route: "/extensions/authenticated",
      title: "Extension Authenticated",
    },
  ],
  [Menus.HeaderAuthenticatedDashboard]: [
    {
      label: "About Dashboard",
      route: "/about-dashboard",
      title: "About Dashboard",
    },
  ],
  [Menus.HeaderAuthenticatedProfile]: [
    {
      label: "About Profile",
      route: "/about-profile",
      title: "About Profile",
    },
  ],
};

const hookMenu: HookMenu = (menu) => {
  return menuConfig[menu] || null;
};

export default hookMenu;
