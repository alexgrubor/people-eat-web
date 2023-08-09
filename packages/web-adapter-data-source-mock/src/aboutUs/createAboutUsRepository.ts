import { AboutUsRepository } from '@people-eat/web-domain/aboutUs';
import { signedInUser } from '../common/signedInUser.mock';

export function createAboutUsRepository(): AboutUsRepository {
    return {
        getPageData: () => ({
            signedInUser,
            currentSessionSettings: {},
        }),
    };
}
