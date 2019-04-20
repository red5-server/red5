const { getConfig } = require('@red5/server')

/** @type {import('@red5/storage').StorageSettings} */
let storage = getConfig('storage')

/** @type {import('@red5/session').SessionSettings} */
module.exports = {
  // The type of storage to store the session data.
  // Note: Currently, only file storage is supported.
  store: 'file',

  // The location where the "file" session data will be stored.
  // This is only used when the `store` value is set to "file".
  disk: storage.disks.session.root,

  // The cookie data that will be used to reference the session.
  // This is used in the the session middleware when the session gets started.
  cookie: {
    path: '/',
    // Expire the cookie in approximately 30 days
    expires: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000))
  }
}