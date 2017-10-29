import  {Collection, MongoClient} from 'mongodb';

interface DatabaseConfig {
    uri: string;
}

function Database (dbConfig: DatabaseConfig) {
    return MongoClient.connect(dbConfig.uri);
}

export default Database;
