const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const viewPath = path.join(__dirname, "./views/");
const assetPath = path.join(__dirname, "./assets/");
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/index');
const db = require('./config/mongoose');

// Static and express-ejs-layouts config.
app.set('view engine', 'ejs');
app.set('views', viewPath);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static(assetPath));
app.use(express.urlencoded({extended: false}));
app.use(expressLayouts);

// entrance of all routes 'index.js'
app.use('/', router);

// Initiating  our server
app.listen(port, (err) => {
    if(err){
        console.log("Error in running server");
        return;
    }
    console.log(`Server running on port: ${port}`);
})
