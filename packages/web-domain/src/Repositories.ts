import { AboutUsRepository } from './aboutUs';
import { CookProfileRepository } from './cookProfile';
import { CookSignUpRepository } from './cookSignUp';
import { GlobalBookingRequestRepository } from './globalBookingRequest';
import { HomeRepository } from './home';
import { HowToBecomeACookRepository } from './howToBecomeACook';
import { ImprintRepository } from './imprint';
import { PrivacyPolicyRepository } from './privacyPolicy';
import { PublicCookRepository } from './publicCook';
import { PublicCooksRepository } from './publicCooks';
import { PublicMenuRepository } from './publicMenu';
import { PublicMenusRepository } from './publicMenus';
import { SignInRepository } from './signIn';
import { TermsAndConditionsRepository } from './termsAndConditions';
import { UserProfileRepository } from './userProfile';
import { UserSignUpRepository } from './userSignUp';

export interface Repositories {
    aboutUs: AboutUsRepository;
    cookProfile: CookProfileRepository;
    cookSignUp: CookSignUpRepository;
    globalBookingRequest: GlobalBookingRequestRepository;
    home: HomeRepository;
    howToBecomeACook: HowToBecomeACookRepository;
    imprint: ImprintRepository;
    privacyPolicy: PrivacyPolicyRepository;
    publicCook: PublicCookRepository;
    publicCooks: PublicCooksRepository;
    publicMenu: PublicMenuRepository;
    publicMenus: PublicMenusRepository;
    signIn: SignInRepository;
    termsAndConditions: TermsAndConditionsRepository;
    userProfile: UserProfileRepository;
    userSignUp: UserSignUpRepository;
}
