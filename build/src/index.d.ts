import { Extension } from 'apisuite-extension-ui-types';
import { ExtensionConfig } from "./config";
import './translations';
declare class ReportingExtension extends Extension {
    static info: {
        name: string;
        version: string;
    };
    config: ExtensionConfig;
    hooks: import("apisuite-extension-ui-types").Hooks;
    constructor(config?: ExtensionConfig);
}
export default ReportingExtension;
