import {query, getProfileById} from './profiles.logic';
import PromiseAppRespond from "../../helpers/promise-app-respond";
import {Profile} from './profiles.consts';

export function getList(req, res, next: Function) {
    const respond = new PromiseAppRespond(req, res, next);
    return query(req.query)
        .then(respond.onSuccess)
        .catch(respond.onFail)
        .done(respond.next);
}

export function getItem(req, res, next: Function) {
    const respond = new PromiseAppRespond(req, res, next);
    respond.onSuccess(req.profile);
}

export function getById(req, res, next: Function, id: string) {
    return getProfileById(id)
        .then((profile :Profile) => {
            if (profile) {
                req.profile = profile;
                return next();
            } else {
                return Promise.reject(next(new Error('Profile not exists')));
            }
        }).catch(next);
}
