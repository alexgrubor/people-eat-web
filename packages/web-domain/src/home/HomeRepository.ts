import { CookieSettings } from '../common/CookieSettings';
import { Maybe } from '../common/Maybe';
import { SignedInUser } from '../common/SignedInUser';

export interface HomeRepository {
    getPageData: () => {
        signedInUser?: Maybe<SignedInUser>;
        currentSessionSettings: CookieSettings;
    };
}
