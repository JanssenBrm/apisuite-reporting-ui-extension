import { ReportingExtensionConfig } from 'config';
interface Config {
    (): ReportingExtensionConfig;
    set: (conf: Record<string, unknown>) => void;
}
declare const config: Config;
export default config;
