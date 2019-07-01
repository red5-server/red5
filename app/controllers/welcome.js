module.exports = class {
  /** @param {import('@red5/server').Client} client */
  async main(client) {
    return client.response.render('welcome.mix')
  }
}