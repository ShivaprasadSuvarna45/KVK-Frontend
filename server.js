var fallback = require('express-history-api-fallback')
var express = require('express')
const fileUpload = require('express-fileupload');
var app = express()
var root = __dirname + '/public'
// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
    // debugger;
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
   
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.file;
      var name=req.files.file.name;
      var fullUrl = 'http://' + req.get('host');
      //var api_address = 'http://139.59.86.178:81/'
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(path.join('./public/images/')+name, function(err) {
      if (err)
        return res.status(500).send(err);
      //res.send({'redirect_url': api_address+'visual?url='+fullUrl+'/images/'+name});
    });
});


app.use(express.static(root))
app.use(fallback('index.html', { root: root }))
app.listen(process.env.PORT||3000);


