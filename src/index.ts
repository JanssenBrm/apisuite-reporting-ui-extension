import "./translations";
import * as hooks from "./hooks";
import config from "./helpers/config";
import { name, version } from "../package.json";

export const init = ({ config: conf }) => {
  config.set(conf);
};

export { hooks };

const extension = { name, version, hooks, init };

export default extension;
