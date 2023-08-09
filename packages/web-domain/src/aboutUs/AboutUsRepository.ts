import { Maybe } from '../common/Maybe';
import { SignedInUser } from '../common/SignedInUser';

export interface AboutUsRepository {
    getPageData: () => {
        signedInUser?: Maybe<SignedInUser>;
        currentSessionSettings: {
            sessionCookie?: Maybe<boolean>;
            googleAnalytics?: Maybe<boolean>;
        };
    };
}
