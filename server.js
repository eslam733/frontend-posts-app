//Install express server
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/frontend-posts-app'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/frontend-posts-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
const dir = __dirname + "/dist";
    const files = fs.readdirSync(dir)

    for (file of files) {
      console.log(file)
    }
