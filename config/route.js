const { appPath, applicationPath } = require('@red5/server')

exports = {
  controllers: appPath('controllers'),
  middleware: appPath('middleware'),
  routes: applicationPath('routes')
}