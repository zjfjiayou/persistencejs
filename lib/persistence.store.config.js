exports.init = function(persistence, config) {
  var persistenceStore;
  persistenceStore = require('./persistence.store.websql');

  if (config.username) config.user = config.username;
  if (config.hostname) config.host = config.hostname;
  persistenceStore.config(persistence,
                          config.host,
                          config.port,
                          config.database,
                          config.user,
                          config.password);
  return persistenceStore;
};
