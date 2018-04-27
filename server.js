var fallback = require('express-history-api-fallback')
var express = require('express')
const fileUpload = require('express-fileupload');
var app = express()
var root = __dirname + '/public'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))
app.listen(process.env.PORT||3000);


