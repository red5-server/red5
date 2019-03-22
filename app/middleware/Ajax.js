const { Client } = require('@red5/server')

/**
 * @param {Client} client
 */
module.exports.requireAjax = function (client) {
  if (client.ajax) return true
}