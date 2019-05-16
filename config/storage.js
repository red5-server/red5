const { storagePath, applicationPath, resourcePath, env } = require('@red5/server')

module.exports = {
  default: env('STORAGE_DRIVER', 'local'),
  cloud: env('STORAGE_CLOUD', 's3'),

  disks: {
    local: {
      driver: 'file',
      root: storagePath('app')
    },
    public: {
      driver: 'file',
      root: applicationPath('public')
    },
    resources: {
      driver: 'file',
      root: resourcePath()
    }
  }
}