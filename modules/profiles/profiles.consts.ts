import {ObjectID} from 'mongodb';

export const PROFILES_URI = '/profiles';
export const PROFILE_KEY = 'profileId';

export const PROFILE_ITEM_URI = PROFILES_URI + '/:' + PROFILE_KEY;

export interface Profile {
    _id: ObjectID | undefined
}
