import { ImprintRepository } from '@people-eat/web-domain/imprint';
import { signedInUser } from '../common/signedInUser.mock';

export function createImprintRepository(): ImprintRepository {
    return {
        getPageData: () => ({
            signedInUser,
            currentSessionSettings: {},
        }),
    };
}
