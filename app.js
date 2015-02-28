var koa = require('koa');
var app = koa();
var port = process.env.PORT || 3000;
var logger = require('koa-logger');
var bodyparser = require('koa-parser');
var views = require('co-views');
var render = views(__dirname + '/public');
var flash = require('koa-flash');
var session = require('koa-session');

app.keys = ['Test koa session'];
app.use(session(app));
app.use(flash());
app.use(bodyparser());
app.use(logger());

var router = require('koa-route');

app.listen(port);
console.log('Listening on port' + port);
