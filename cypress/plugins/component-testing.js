// This is a custom plugin for Cypress component testing
// It helps prevent Cypress from trying to load from a URL

module.exports = (on, config) => {
  // Add a custom task to handle component testing
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
    table(message) {
      console.table(message);
      return null;
    },
  });

  // Return the config
  return config;
}; 