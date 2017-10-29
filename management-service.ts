import CurveService from '@lcurves/curve-service';
import Db from 'mongodb';
import Database from './db';

let currentService: ManagementService;

class ManagementService extends CurveService {
    db: Db;

    constructor(config, callback: Function) {
        super(config);

        currentService = this;

        Database({uri: config.MONGO_DB_URI})
            .then((db: Db) => {
                console.log('db connected');
                this.db = db;

                callback(this);
            })
            .catch(err => {
                console.error(err);
                return Promise.reject(err);
            });
    }
}


export default ManagementService;
export const service = (): ManagementService => currentService;
