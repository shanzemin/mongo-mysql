'use strict'

const path = require('path')

class AppBootHook {
  constructor (app) {
    this.app = app
  }

  configWillLoad () {

  }

  async didLoad () {
    const dir = path.join(this.app.config.baseDir, 'app/mongo');
    const pro = this.app.mongoose.Model;
    this.app.loader.loadToApp(dir, 'mongo', {
      inject: this.app,
      caseStyle: 'upper',
      filter(model) {
        return typeof model === 'function' && model.prototype instanceof pro;
      },
    });
  }

  async willReady () {
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
    if (Object.keys(this.app.model).length > 0 && (this.app.config.env === 'local' || this.app.config.env === 'unittest')) {
      // await this.app.model.sync()
    }
  }

  async didReady () {
    // require('./config/seed')(this.app)
  }

  async serverDidReady () {

  }
}

module.exports = AppBootHook
