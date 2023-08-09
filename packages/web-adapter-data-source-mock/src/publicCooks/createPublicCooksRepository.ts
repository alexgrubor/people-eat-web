import { HomeRepository } from '@people-eat/web-domain/home';
import { signedInUser } from '../common/signedInUser.mock';

export function createPublicCooksRepository(): HomeRepository {
    return {
        getPageData: () => ({
            signedInUser,
            currentSessionSettings: {},
        }),
    };
}
