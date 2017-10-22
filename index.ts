import ManagementService from './management-service';
import config from './config';
import modules from './modules';

console.log('config', config);


new ManagementService(config, function onReady() {
    modules.forEach(module => module());

    console.log('Management service is running');
});
