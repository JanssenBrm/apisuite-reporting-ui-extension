import { Extension } from "apisuite-extension-ui-types";
import "./translations";
import hooks from "./hooks";
import configHelper from "./helpers/config";
import { name, version } from "../package.json";

type ExampleExtensionConfig = {
  someKey?: string;
};

class ExampleExtension extends Extension {
  static info = {
    name,
    version,
  };

  public config: ExampleExtensionConfig;

  hooks = hooks;

  constructor(config?: ExampleExtensionConfig) {
    super(config);
    configHelper.set(config);
  }
}

export default ExampleExtension;
