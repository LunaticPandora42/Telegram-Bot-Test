'use strict';

const Telegram = require('telegram-node-bot'),
  tg = new Telegram.Telegram('637180970:AAE7x7NC6La63TSco-Q7rUr2UNadwrtsj_Q',{
  workers:1
});

const PingController = require('./controllers/ping.js')
, OtherwiseController = require('./controllers/otherwise.js');

tg.router.when(new Telegram.TextCommand('/ping','pingCommand'), new PingController())
  .otherwise(new OtherwiseController());
