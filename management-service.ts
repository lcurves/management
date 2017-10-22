import CurveService from '@lcurves/curve-service';
import Db from 'mongodb';
import Database from './db';

let service: ManagementService;

class ManagementService extends CurveService {
    db: Db;

    constructor(config, callback: Function) {
        super(config);
        Database({uri: config.MONGO_DB_URI})
            .then((db: Db) => {
                this.db = db;

                callback(this);
                service = this;
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export default ManagementService;

export function get() {
    return service;
}
