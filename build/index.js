'use strict';

var i18next = require('i18next');
var React = require('react');
var reactI18next = require('react-i18next');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var i18next__default = /*#__PURE__*/_interopDefaultLegacy(i18next);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * The different (sub)menus that the APISuite provides.
 */
var Menus;
(function (Menus) {
    // Header Anonymous
    Menus["HeaderAnonymousMain"] = "HEADER_ANONYMOUS_MAIN";
    // Header Authenticated
    Menus["HeaderAuthenticatedMain"] = "HEADER_AUTHENTICATED_MAIN";
    Menus["HeaderAuthenticatedDashboard"] = "HEADER_AUTHENTICATED_DASHBOARD";
    Menus["HeaderAuthenticatedProfile"] = "HEADER_AUTHENTICATED_PROFILE";
    // Footer
    Menus["FooterProducts"] = "FOOTER_PRODUCTS";
    Menus["FooterProfile"] = "FOOTER_PROFILE";
    Menus["FooterDocumentation"] = "FOOTER_DOCUMENTATION";
    Menus["FooterTeam"] = "FOOTER_TEAM";
    Menus["FooterDashboard"] = "FOOTER_DASHBOARD";
    Menus["FooterLegal"] = "FOOTER_LEGAL";
    Menus["FooterSupport"] = "FOOTER_SUPPORT";
    Menus["FooterStatus"] = "FOOTER_STATUS";
})(Menus || (Menus = {}));
/**
 * A `Section` is an area/section/place anywhere in the portal.
 *
 * These are the different sections that the APISuite portal provides for
 * extensions to inject arbitrary React components.
 */
var Sections;
(function (Sections) {
    Sections["HomepagePrecontent"] = "HOMEPAGE_PRECONTENT";
})(Sections || (Sections = {}));
/**
 * All extensions must inherit from this base `Extension` class. It encapsulates
 * and provides all the functionality that the APISuite Portal needs to interact
 * with any extension.
 *
 * Example usage:
 *
 * ```typescript
 * import { Extension } from "apisuite-extension-ui-types";
 * import hooks from "./hooks";
 * import configHelper from "./helpers/config";
 * import { name, version } from "../package.json";
 *
 * class MyExtension extends Extension {
 *   static info = {
 *     name,
 *     version,
 *   };
 *
 *   hooks = hooks;
 *
 *   constructor(config?: {}) {
 *     super(config);
 *     configHelper.set(config);
 *   }
 * }
 *
 * export default MyExtension;
 * ```
 */
var Extension = /** @class */ (function () {
    function Extension(config) {
        this.config = config || {};
        this.hooks = {
            menu: function () { return null; },
            pages: function () { return null; },
            sections: function () { return null; }
        };
    }
    Object.defineProperty(Extension.prototype, "name", {
        /**
         * The name of the extension
         */
        get: function () {
            return this.constructor.info.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extension.prototype, "version", {
        /**
         * The version of the extension
         */
        get: function () {
            return this.constructor.info.version;
        },
        enumerable: false,
        configurable: true
    });
    return Extension;
}());

var name = "@vito/apisuite-reporting-ui-extension";
var version = "1.0.2";

var EXT_NAME = name;
var BASE_URI = '/reporting';

var homepage = {
	extensionSection: {
		title: "Extension Component",
		paragraph: "This section was injected by an extension",
		configValue: "Configuration value: {{ value }}"
	}
};
var enUS = {
	homepage: homepage
};

var homepage$1 = {
	extensionSection: {
		title: "Componente de Extensão",
		paragraph: "Esta secção foi injectada por uma extensão",
		configValue: "Valor de configuração: {{ value }}"
	}
};
var ptPT = {
	homepage: homepage$1
};

i18next__default['default'].addResourceBundle('en', EXT_NAME, enUS);
i18next__default['default'].addResourceBundle('pt', EXT_NAME, ptPT);

var _a;
var menuConfig = (_a = {},
    _a[Menus.HeaderAuthenticatedDashboard] = [
        {
            label: 'Reporting',
            route: BASE_URI,
            title: 'Reporting',
        },
    ],
    _a);
var hookMenu = function (menu) {
    return menuConfig[menu] || null;
};

var About = function () { return (React__default['default'].createElement("div", { style: {
        minHeight: '100%',
        backgroundColor: 'burlywood',
        padding: '300px 16px 0 16px',
    } },
    React__default['default'].createElement("h1", null, "About Extensions"),
    React__default['default'].createElement("p", null, "This page was dynamically added by an extensions."))); };

var pagesConfig = [
    {
        auth: true,
        path: '/reporting',
        exact: true,
        component: About,
    },
    {
        auth: true,
        path: '/reporting/services',
        exact: true,
        component: About,
    },
];
var hookPages = function () {
    return pagesConfig;
};

var baseConfig = {
    someKey: 'Base Value',
};

var values = __assign({}, baseConfig);
var config = function () { return values; };
config.set = function (conf) {
    values = __assign(__assign({}, values), conf);
};

var AdditionalInfo = function () {
    var t = reactI18next.useTranslation(EXT_NAME)[0];
    return (React__default['default'].createElement("div", { style: { border: '1px solid #ccc', color: 'white' } },
        React__default['default'].createElement("h1", null, t('homepage.extensionSection.title')),
        React__default['default'].createElement("p", null, t('homepage.extensionSection.paragraph')),
        React__default['default'].createElement("p", null, t('homepage.extensionSection.configValue', {
            value: config().someKey,
        }))));
};

var _a$1;
var sections = (_a$1 = {},
    _a$1[Sections.HomepagePrecontent] = AdditionalInfo,
    _a$1);
var hookSections = function (section, props) {
    var Component = sections[section];
    if (Component) {
        return React__default['default'].createElement(Component, __assign({}, props));
    }
    return null;
};

var hooks = {
    menu: hookMenu,
    pages: hookPages,
    sections: hookSections,
};

var ReportingExtension = /** @class */ (function (_super) {
    __extends(ReportingExtension, _super);
    function ReportingExtension(config$1) {
        var _this = _super.call(this, config$1) || this;
        _this.hooks = hooks;
        config.set(config$1);
        return _this;
    }
    ReportingExtension.info = {
        name: name,
        version: version,
    };
    return ReportingExtension;
}(Extension));

module.exports = ReportingExtension;
//# sourceMappingURL=index.js.map
