import { ExtensionConfig } from 'config';
interface Config {
    (): ExtensionConfig;
    set: (conf: Record<string, unknown>) => void;
}
declare const config: Config;
export default config;
