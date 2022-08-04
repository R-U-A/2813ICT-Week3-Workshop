var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality
app.use(cookieParser())
app.use(express.static(__dirname + '/www'));

app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

let server = http.listen(3000, function () {
let host = server.address().address;
let port = server.address().port;
console.log("My First Nodejs Server!");
console.log("Server listening on: "+ host + "port: " + port);
});

var loginRouter = require('./routes/login-route');
var accountRouter = require('./routes/account-route');
app.use('/', loginRouter);
app.use('/', accountRouter);
