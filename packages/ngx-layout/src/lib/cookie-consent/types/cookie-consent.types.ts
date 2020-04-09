export interface CookieConsentContent {
  message?: string;
  dismiss?: string;
  link?: string;
  href?: string;
}

export interface CookieConsentCookie {
  name: string;
  path: string;
  domain: string;
  expiryDays: number;
}

export interface CookieConsentConfig {
  content?: CookieConsentContent;
  cookie?: CookieConsentCookie;
  autoInit?: boolean;
  elements?: {
    messagelink?: string;
    dismiss?: string;
  };
  window?: string;
  container?: HTMLElement;
}
