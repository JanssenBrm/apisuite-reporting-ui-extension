const menuConfig = {
  footer: {
    dashboard: [
      {
        label: "About Extensions",
        route: "/extensions/about",
        title: "About Extensions",
      },
    ],
  },
  headerAnonymous: [
    {
      label: "About Extensions",
      route: "/extensions/about",
      title: "About Extensions",
    },
  ],
  headerAuthenticated: {
    main: [
      {
        label: "Extension Authenticated",
        route: "/extensions/authenticated",
      },
    ],
    dashboard: [
      {
        label: "About Dashboard",
        route: "/about-dashboard",
        title: "About Dashboard",
      },
    ],
    profile: [
      {
        label: "About Profile",
        route: "/about-profile",
        title: "About Profile",
      },
    ],
  },
};

export default function hookMenu(menu: string, section?: string) {
  let menuEntry = menuConfig[menu];
  if (menuEntry && section) {
    menuEntry = menuEntry[section];
  }
  return menuEntry;
}
