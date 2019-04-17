'use strict'

class AppBootHook {
  constructor (app) {
    this.app = app
  }

  configWillLoad () {

  }

  async didLoad () {
    // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
  }

  async willReady () {
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
    if (this.app.config.env === 'local' || this.app.config.env === 'unittest') {
      await this.app.model.sync()
    }
  }

  async didReady () {
    // require('./config/seed')(this.app)
  }

  async serverDidReady () {

  }
}

module.exports = AppBootHook
