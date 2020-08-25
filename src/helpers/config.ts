import baseConfig, { ExtensionConfig } from "config";

let values = {
  ...baseConfig,
};

interface Config {
  (): ExtensionConfig;
  set: (conf: any) => void;
}

const config: Config = () => values;

config.set = (conf: {}) => {
  values = {
    ...values,
    ...conf,
  };
};

export default config;
