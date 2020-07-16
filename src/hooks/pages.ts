import About from "pages/About";
import Authenticated from "pages/Authenticated";

const pagesConfig = [
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

export default function hookPages() {
  return pagesConfig;
}
