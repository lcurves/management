import {promisifyAll} from 'bluebird';
import  {Collection, MongoClient} from 'mongodb';

promisifyAll(Collection.prototype);
promisifyAll(MongoClient);

interface DatabaseConfig {
    uri: string;
}

function Database (dbConfig: DatabaseConfig) {
    return MongoClient.connectAsync(dbConfig.uri);
}

export default Database;
