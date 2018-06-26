import { CookieConsentConfig } from '../types/cookie-consent.types';
export declare class CookieconsentService {
    private cookieConsentConfig;
    private $window;
    private static initialized;
    constructor(cookieConsentConfig: any, $window: any);
    init(config?: CookieConsentConfig): void;
}
