import { Maybe } from '../common';
import { CookRank } from '../common/CookRank';
import { Language } from '../common/Language';
import { Location } from '../common/Location';

export interface CookProfile {
    cookId: string;
    isLocked: boolean;
    isVisible: boolean;
    biography: string;
    maximumParticipants?: Maybe<number>;
    maximumPrice?: Maybe<number>;
    maximumTravelDistance?: Maybe<number>;
    minimumParticipants?: Maybe<number>;
    minimumPrice?: Maybe<number>;
    rank: CookRank;
    travelExpenses: number;
    ratingAverage: number;
    ratingCount: number;
    user: {
        firstName: string;
        lastName: string;
        profilePictureUrl?: Maybe<string>;
        addresses: {
            addressId: string;
            title: string;
            country: string;
            city: string;
            postCode: string;
            street: string;
            houseNumber: string;
            createdAt: Date;
            location: Location;
        }[];
    };
    languages: Language[];
    location: Location;
}
