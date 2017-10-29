import ManagementService from './management-service';
import config from './config';

new ManagementService(config, function onReady() {
    require('./modules').modules.forEach(module => module());

    console.log('Management service is running');
});
