import { HomeRepository } from '@people-eat/web-domain/home';
import { signedInUser } from '../common/signedInUser.mock';

export function createPublicMenusRepository(): HomeRepository {
    return {
        getPageData: () => ({
            signedInUser,
            currentSessionSettings: {},
        }),
    };
}
