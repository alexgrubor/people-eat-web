import { createGermanHomePageTranslations } from './locales/de/createGermanHomePageTranslations';
import { createEnglishHomePageTranslations } from './locales/en/createEnglishHomePageTranslations';
import { createEnglishSignInPageTranslations } from './locales/en/createEnglishSignInPageTranslations';
import { createGermanSignInPageTranslations } from './locales/de/createGermanSignInPageTranslations';
import { createEnglishUserSignUpPageTranslations } from './locales/en/createEnglishUserSignUpPageTranslations';
import { createGermanUserSignUpPageTranslations } from './locales/de/createGermanUserSignUpPageTranslations';
import { createEnglishCookSignUpPageTranslations } from './locales/en/createEnglishCookSignUpPageTranslations';
import { createGermanCookSignUpPageTranslations } from './locales/de/createGermanCookSignUpPageTranslations';
import { createEnglishUserProfilePageTranslations } from './locales/en/createEnglishUserProfilePageTranslations';
import { createGermanUserProfilePageTranslations } from './locales/de/createGermanUserProfilePageTranslations';
import { createEnglishCookProfilePageTranslations } from './locales/en/createEnglishCookProfilePageTranslations';
import { createGermanCookProfilePageTranslations } from './locales/de/createGermanCookProfilePageTranslations';
import { CookProfilePageTranslations } from './translations/CookProfilePageTranslations';
import { CookSignUpPageTranslations } from './translations/CookSignUpPageTranslations';
import { HomePageTranslations } from './translations/HomePageTranslations';
import { SignInPageTranslations } from './translations/SignInPageTranslations';
import { UserProfilePageTranslations } from './translations/UserProfilePageTranslations';
import { UserSignUpPageTranslations } from './translations/UserSignUpPageTranslations';
import { GlobalBookingRequestPageTranslations } from './translations/GlobalBookingRequestPageTranslations';
import { HowToBecomeAChefPageTranslations } from './translations/HowToBecomeAChefPageTranslations';
import { ImprintPageTranslations } from './translations/ImprintPageTranslations';
import { AboutUsPageTranslations } from './translations/AboutUsPageTranslations';
import { createEnglishAboutUsPageTranslations } from './locales/en/createEnglishAboutUsPageTranslations';
import { createGermanAboutUsPageTranslations } from './locales/de/createGermanAboutUsPageTranslations';
import { createEnglishImprintPageTranslations } from './locales/en/createEnglishImprintPageTranslations';
import { createGermanImprintPageTranslations } from './locales/de/createGermanImprintPageTranslations';
import { createEnglishHowToBecomeAChefPage } from './locales/en/createEnglishHowToBecomeAChefPage';
import { createGermanHowToBecomeAChefPage } from './locales/de/createGermanHowToBecomeAChefPage';
import { createEnglishGlobalBookingRequestPageTranslations } from './locales/en/createEnglishGlobalBookingRequestPageTranslations';
import { createGermanGlobalBookingRequestPageTranslations } from './locales/de/createGermanGlobalBookingRequestPageTranslations';

export type SupportedLanguage = 'GERMAN' | 'ENGLISH';

const homePageTranslations: Record<SupportedLanguage, HomePageTranslations> = {
    ENGLISH: createEnglishHomePageTranslations(),
    GERMAN: createGermanHomePageTranslations(),
};

const signInPageTranslations: Record<SupportedLanguage, SignInPageTranslations> = {
    ENGLISH: createEnglishSignInPageTranslations(),
    GERMAN: createGermanSignInPageTranslations(),
};

const userSignUpPageTranslations: Record<SupportedLanguage, UserSignUpPageTranslations> = {
    ENGLISH: createEnglishUserSignUpPageTranslations(),
    GERMAN: createGermanUserSignUpPageTranslations(),
};

const cookSignUpPageTranslations: Record<SupportedLanguage, CookSignUpPageTranslations> = {
    ENGLISH: createEnglishCookSignUpPageTranslations(),
    GERMAN: createGermanCookSignUpPageTranslations(),
};

const userProfilePageTranslations: Record<SupportedLanguage, UserProfilePageTranslations> = {
    ENGLISH: createEnglishUserProfilePageTranslations(),
    GERMAN: createGermanUserProfilePageTranslations(),
};

const cookProfilePageTranslations: Record<SupportedLanguage, CookProfilePageTranslations> = {
    ENGLISH: createEnglishCookProfilePageTranslations(),
    GERMAN: createGermanCookProfilePageTranslations(),
};

const aboutUsPageTranslations: Record<SupportedLanguage, AboutUsPageTranslations> = {
    ENGLISH: createEnglishAboutUsPageTranslations(),
    GERMAN: createGermanAboutUsPageTranslations(),
};

const imprintPageTranslations: Record<SupportedLanguage, ImprintPageTranslations> = {
    ENGLISH: createEnglishImprintPageTranslations(),
    GERMAN: createGermanImprintPageTranslations(),
};

const howToBecomeAChefPageTranslations: Record<SupportedLanguage, HowToBecomeAChefPageTranslations> = {
    ENGLISH: createEnglishHowToBecomeAChefPage(),
    GERMAN: createGermanHowToBecomeAChefPage(),
};

const globalBookingRequestPageTranslations: Record<SupportedLanguage, GlobalBookingRequestPageTranslations> = {
    ENGLISH: createEnglishGlobalBookingRequestPageTranslations(),
    GERMAN: createGermanGlobalBookingRequestPageTranslations(),
};

export interface Translations {
    getHomeTranslations: (language: SupportedLanguage) => HomePageTranslations;
    getSignInTranslations: (language: SupportedLanguage) => SignInPageTranslations;
    getUserSignUpTranslations: (language: SupportedLanguage) => UserSignUpPageTranslations;
    getCookSignUpTranslations: (language: SupportedLanguage) => CookSignUpPageTranslations;
    getUserProfileTranslations: (language: SupportedLanguage) => UserProfilePageTranslations;
    getCookProfileTranslations: (language: SupportedLanguage) => CookProfilePageTranslations;
    getAboutUsPageTranslations: (language: SupportedLanguage) => AboutUsPageTranslations;
    getImprintPageTranslations: (language: SupportedLanguage) => ImprintPageTranslations;
    getHowToBecomeAChefPageTranslations: (language: SupportedLanguage) => HowToBecomeAChefPageTranslations;
    getGlobalBookingRequestPageTranslations: (language: SupportedLanguage) => GlobalBookingRequestPageTranslations;
}

export function createTranslations(): Translations {
    return {
        getHomeTranslations: (language: SupportedLanguage) => homePageTranslations[language],
        getSignInTranslations: (language: SupportedLanguage) => signInPageTranslations[language],
        getUserSignUpTranslations: (language: SupportedLanguage) => userSignUpPageTranslations[language],
        getCookSignUpTranslations: (language: SupportedLanguage) => cookSignUpPageTranslations[language],
        getUserProfileTranslations: (language: SupportedLanguage) => userProfilePageTranslations[language],
        getCookProfileTranslations: (language: SupportedLanguage) => cookProfilePageTranslations[language],
        getAboutUsPageTranslations: (language: SupportedLanguage) => aboutUsPageTranslations[language],
        getImprintPageTranslations: (language: SupportedLanguage) => imprintPageTranslations[language],
        getHowToBecomeAChefPageTranslations: (language: SupportedLanguage) => howToBecomeAChefPageTranslations[language],
        getGlobalBookingRequestPageTranslations: (language: SupportedLanguage) => globalBookingRequestPageTranslations[language],
    };
}
