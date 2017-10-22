
const {config} = require('./environments/' + (process.env.NODE_ENV || 'development'));

export default config;
