import { Repositories } from '@people-eat/web-domain';
import { createAboutUsRepository } from './aboutUs/createAboutUsRepository';
import { createHomeRepository } from './home/createHomeRepository';
import { createImprintRepository } from './imprint/createImprintRepository';
import { createUserSignUpRepository } from './userSignUp/createUserSignUpRepository';
import { createUserProfileRepository } from './userProfile/createUserProfileRepository';
import { createTermsAndConditionsRepository } from './termsAndConditions/createTermsAndConditionsRepository';
import { createSignInRepository } from './signIn/createSignInRepository';
import { createPublicMenusRepository } from './publicMenus/createPublicMenusRepository';
import { createPublicMenuRepository } from './publicMenu/createPublicMenuRepository';
import { createPublicCooksRepository } from './publicCooks/createPublicCooksRepository';
import { createPublicCookRepository } from './publicCook/createPublicCookRepository';
import { createPrivacyPolicyRepository } from './privacyPolicy/createPrivacyPolicyRepository';
import { createHowToBecomeACookRepository } from './howToBecomeACook/createHowToBecomeACookRepository';
import { createGlobalBookingRequestRepository } from './globalBookingRequest/createGlobalBookingRequestRepository';
import { createCookSignUpRepository } from './cookSignUp/createCookSignUpRepository';
import { createCookProfileRepository } from './cookProfile/createCookProfileRepository';

export function createRepositories(): Repositories {
    return {
        aboutUs: createAboutUsRepository(),
        cookProfile: createCookProfileRepository(),
        cookSignUp: createCookSignUpRepository(),
        globalBookingRequest: createGlobalBookingRequestRepository(),
        home: createHomeRepository(),
        howToBecomeACook: createHowToBecomeACookRepository(),
        imprint: createImprintRepository(),
        privacyPolicy: createPrivacyPolicyRepository(),
        publicCook: createPublicCookRepository(),
        publicCooks: createPublicCooksRepository(),
        publicMenu: createPublicMenuRepository(),
        publicMenus: createPublicMenusRepository(),
        signIn: createSignInRepository(),
        termsAndConditions: createTermsAndConditionsRepository(),
        userProfile: createUserProfileRepository(),
        userSignUp: createUserSignUpRepository(),
    };
}
