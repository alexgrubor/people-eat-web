import { CookieSettings } from '../common/CookieSettings';
import { Maybe } from '../common/Maybe';
import { SignedInUser } from '../common/SignedInUser';

export interface UserProfileRepository {
    getPageData: () => {
        signedInUser?: Maybe<SignedInUser>;
        currentSessionSettings: CookieSettings;
    };
}
