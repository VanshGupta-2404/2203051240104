const Log = require('../utils/remoteLogger'); // use this instead of axios directly

module.exports = async (req, res, next) => {
  const { method, url, body } = req;
  const timestamp = new Date().toISOString();

  const message = `[${timestamp}] METHOD: ${method} | URL: ${url}`;
  await Log('backend', 'info', 'router', message);

  next();
};
