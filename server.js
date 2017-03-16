const express = require('express'),
    PORT = process.env.PORT || 3000;

//Create Application
let app = express();

app.use(function(req, res, next){
    "use strict";
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Express server is up on port: ${PORT}`));