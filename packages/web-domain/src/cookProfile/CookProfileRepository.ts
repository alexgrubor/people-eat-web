import { CookieSettings } from '../common/CookieSettings';
import { Maybe } from '../common/Maybe';
import { SignedInUser } from '../common/SignedInUser';
import { CookProfile } from './CookProfile';

export interface CookProfileRepository {
    getPageData: () => {
        signedInUser?: Maybe<SignedInUser>;
        currentSessionSettings: CookieSettings;
        cookProfile: CookProfile;
    };
}
