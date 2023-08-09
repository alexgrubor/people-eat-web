import { signedInUser } from '../common/signedInUser.mock';
import { CookProfileRepository } from '@people-eat/web-domain/cookProfile';

export function createCookProfileRepository(): CookProfileRepository {
    return {
        getPageData: () => ({
            signedInUser,
            currentSessionSettings: {},
            cookProfile: {
                cookId: '',
                isLocked: true,
                isVisible: true,
                biography: '',
                maximumParticipants: 0,
                maximumPrice: 0,
                maximumTravelDistance: 0,
                minimumParticipants: 0,
                minimumPrice: 0,
                rank: 'HOBBY',
                travelExpenses: 0,
                ratingAverage: 0,
                ratingCount: 0,
                user: {
                    firstName: '',
                    lastName: '',
                    profilePictureUrl: null,
                    addresses: [
                        {
                            addressId: '',
                            title: '',
                            country: '',
                            city: '',
                            postCode: '',
                            street: '',
                            houseNumber: '',
                            createdAt: new Date(),
                            location: { latitude: 0, longitude: 0 },
                        },
                    ],
                },
                languages: [],
                location: { latitude: 0, longitude: 0 },
            },
        }),
    };
}
