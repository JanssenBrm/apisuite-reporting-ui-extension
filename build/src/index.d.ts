import { Extension, ExtensionParams } from '@apisuite/extension-ui-types/v1';
import { ReportingExtensionConfig } from './config';
import './translations';
declare type ReportingExtensionParams = ExtensionParams & {
    config?: ReportingExtensionConfig;
};
declare class ReportingExtension extends Extension {
    static info: {
        name: string;
        version: string;
        protocolVersion: string;
    };
    config: ReportingExtensionConfig;
    hooks: import("@apisuite/extension-ui-types").Hooks;
    constructor({ core, config }: ReportingExtensionParams);
}
export default ReportingExtension;
