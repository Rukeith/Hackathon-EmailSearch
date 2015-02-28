var koa = require('koa');
var app = koa();
var port = process.env.PORT || 3000;
var logger = require('koa-logger');
var bodyparser = require('koa-bodyparser');
var views = require('co-views');
var render = views(__dirname + '/public', {ext: 'jade'});
var flash = require('koa-flash');
var session = require('koa-session');
var router = require('koa-route');
var serve = require('koa-static');

app.use(serve(__dirname + '/public'));
app.keys = ['Test koa session'];
app.use(session(app));
app.use(flash());
app.use(bodyparser());
app.use(logger());

app.use(router.get('/', function *(){
    this.body = yield render('index');
}));

app.listen(port);
console.log('Listening on port' + port);
