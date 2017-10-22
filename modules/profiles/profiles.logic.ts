import {ObjectID, Collection} from 'mongodb';
import { get } from "../../management-service";

const collection: Collection = get().db.collection('profiles');

export function query(query: Object) {
    return collection.find(query).toArray();
}

export function getProfileById<Profile>(id: string | ObjectID) {
    if(typeof id === 'string') {
        id = ObjectID(id);
    }
    return collection.getByIdAsync(id);
}

