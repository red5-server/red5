const path = require('path')

module.exports = {
  apps: [
    {
      name: 'Red5',
      instances: 'max',
      exec_mode: "cluster",
      script: path.join(__dirname, 'index.js'),
      watch: path.join(__dirname, '../', '**/*.js')
    }
  ]
}