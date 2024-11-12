const path = require('path');

module.exports = {
  config: path.resolve('config', 'config.cjs'), // If using config.cjs, or 'config.js' if you have config.js
  'models-path': path.resolve('models'),
  'migrations-path': path.resolve('migrations'),
};
