'use strict';

const LocalStrategy = require('passport-local').Strategy;
const Util = require('./libs/util');
const config = require('./config/index');

module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    app.passport.doVerify(req, user, done);
  }));

  app.passport.verify(async (ctx, user) => {
    const u = await ctx.service.user.findOne({ username: user.username, password: user.password });
    if (u) {
      const token = await Util.signToken(u._id);
      const json = { token, expiresIn: config.expiresIn };
      return json;
    }
    return false;
  });

  // app.passport.serializeUser(async (ctx, user) => {
  //   console.log('11111', user);
  // });

  // app.passport.deserializeUser(async (ctx, user) => {
  //   console.log('22222', user);
  // });
};
