import { SignedInUser } from '@people-eat/web-domain/common/SignedInUser';
import { userId } from './userId.mock';

export const signedInUser: SignedInUser = {
    userId,
    firstName: 'Max',
    isCook: true,
    isAdmin: false,
};
