import {ObjectID, Collection} from 'mongodb';
import { service } from "../../management-service";

const collection: Collection = service().db.collection('profiles');

export function query(query: Object) {
    return collection.find(query).toArray();
}

export function getProfileById<Profile>(id: string | ObjectID) {
    if(typeof id === 'string') {
        id = ObjectID(id);
    }
    return collection.getByIdAsync(id);
}

