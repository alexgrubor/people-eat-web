import { Maybe } from './Maybe';

export interface CookieSettings {
    sessionCookie?: Maybe<boolean>;
    googleAnalytics?: Maybe<boolean>;
}
