// Type definitions for helmet
// Project: https://github.com/helmetjs/helmet
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module 'helmet' {
    import express = require('express');

    interface IHelmetConfiguration {
        contentSecurityPolicy? : boolean | IHelmetContentSecurityPolicyConfiguration,
        dnsPrefetchControl?: boolean | IHelmetDnsPrefetchControlConfiguration,
        frameguard?: boolean | IHelmetFrameguardConfiguration,
        hidePoweredBy?: boolean | IHelmetHidePoweredByConfiguration,
        hpkp?: boolean | IHelmetHpkpConfiguration,
        hsts?: boolean | IHelmetHstsConfiguration,
        ieNoOpen?: boolean,
        noCache?: boolean,
        noSniff?: boolean,
        xssFilter?: boolean | IHelmetXssFilterConfiguration
    }

    interface IHelmetContentSecurityPolicyDirectiveFunction {
      (req: express.Request, res: express.Response): string;
    }
    type HelmetCspDirectiveValue = string | IHelmetContentSecurityPolicyDirectiveFunction;

    interface IHelmetContentSecurityPolicyDirectives {
        baseUri? : HelmetCspDirectiveValue[],
        childSrc? : HelmetCspDirectiveValue[],
        connectSrc? : HelmetCspDirectiveValue[],
        defaultSrc? : HelmetCspDirectiveValue[],
        fontSrc? : HelmetCspDirectiveValue[],
        formAction? : HelmetCspDirectiveValue[],
        frameAncestors? : HelmetCspDirectiveValue[],
        frameSrc? : HelmetCspDirectiveValue[],
        imgSrc? : HelmetCspDirectiveValue[],
        mediaSrc? : HelmetCspDirectiveValue[],
        objectSrc? : HelmetCspDirectiveValue[],
        pluginTypes? : HelmetCspDirectiveValue[],
        reportUri?: string,
        sandbox? : HelmetCspDirectiveValue[],
        scriptSrc? : HelmetCspDirectiveValue[],
        styleSrc? : HelmetCspDirectiveValue[]
    }

    interface IHelmetContentSecurityPolicyConfiguration {
        reportOnly? : boolean;
        setAllHeaders? : boolean;
        disableAndroid? : boolean;
        browserSniff?: boolean;
        directives? : IHelmetContentSecurityPolicyDirectives
    }

    interface IHelmetDnsPrefetchControlConfiguration {
        allow? : boolean;
    }

    interface IHelmetFrameguardConfiguration {
        action? : string,
        domain? : string
    }

    interface IHelmetHidePoweredByConfiguration {
        setTo? : string
    }

    interface IHelmetSetIfFunction {
      (req: express.Request, res: express.Response): boolean;
    }

    interface IHelmetHpkpConfiguration {
        maxAge : number;
        sha256s : string[];
        includeSubdomains? : boolean;
        reportUri? : string;
        reportOnly? : boolean;
        setIf?: IHelmetSetIfFunction
    }

    interface IHelmetHstsConfiguration {
        maxAge: number;
        includeSubdomains? : boolean;
        preload? : boolean;
        setIf? : IHelmetSetIfFunction,
        force? : boolean;
    }

    interface IHelmetXssFilterConfiguration {
        setOnOldIE? : boolean;
    }

    /**
     * @summary Interface for helmet class.
     * @interface
     */
    interface Helmet {
        /**
         * @summary Constructor.
         * @return {RequestHandler} The Request handler.
         */
        (options ?: IHelmetConfiguration): express.RequestHandler;

        /**
         * @summary Set policy around third-party content via headers
         * @param {IHelmetContentSecurityPolicyConfiguration} options The options
         * @return {RequestHandler} The Request handler
         */
        contentSecurityPolicy(options ?: IHelmetContentSecurityPolicyConfiguration): express.RequestHandler;

        /**
         * @summary Stop browsers from doing DNS prefetching.
         * @param {IHelmetDnsPrefetchControlConfiguration} options The options
         * @return {RequestHandler} The Request handler
         */
        dnsPrefetchControl(options ?: IHelmetDnsPrefetchControlConfiguration): express.RequestHandler;

        /**
         * @summary Prevent clickjacking.
         * @param {IHelmetFrameguardConfiguration} options The options
         * @return {RequestHandler} The Request handler
         */
        frameguard(options ?: IHelmetFrameguardConfiguration): express.RequestHandler;

        /**
         * @summary Hide "X-Powered-By" header.
         * @param {IHelmetHidePoweredByConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        hidePoweredBy(options ?: IHelmetHidePoweredByConfiguration): express.RequestHandler;

        /**
         * @summary Adds the "Public-Key-Pins" header.
         * @param {IHelmetHpkpConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        hpkp(options ?: IHelmetHpkpConfiguration): express.RequestHandler;

        /**
         * @summary Adds the "Strict-Transport-Security" header.
         * @param {IHelmetHstsConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        hsts(options ?: IHelmetHstsConfiguration): express.RequestHandler;

        /**
         * @summary Add the "X-Download-Options" header.
         * @return {RequestHandler} The Request handler.
         */
        ieNoOpen(): express.RequestHandler;

        /**
         * @summary Add the "Cache-Control" and "Pragma" headers to stop caching.
         * @return {RequestHandler} The Request handler.
         */
        noCache(options ?: Object): express.RequestHandler;

        /**
         * @summary Adds the "X-Content-Type-Options" header.
         * @return {RequestHandler} The Request handler.
         */
        noSniff(): express.RequestHandler;

        /**
         * @summary Mitigate cross-site scripting attacks with the "X-XSS-Protection" header.
         * @param {IHelmetXssFilterConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        xssFilter(options ?: IHelmetXssFilterConfiguration): express.RequestHandler;
    }

    var helmet: Helmet;
    export = helmet;
}
