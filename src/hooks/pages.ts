import { HookPages, PageEntry } from "apisuite-extension-ui-types";

import About from "pages/About";
import Authenticated from "pages/Authenticated";

const pagesConfig: PageEntry[] = [
  {
    path: "/extensions/about",
    exact: true,
    component: About,
  },
  {
    auth: true,
    path: "/extensions/authenticated",
    exact: true,
    component: Authenticated,
  },
];

const hookPages: HookPages = () => {
  return pagesConfig;
};

export default hookPages;
