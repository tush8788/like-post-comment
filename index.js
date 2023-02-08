const express = require('express');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:false}));

app.use('/',require('./routes/index.js'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    
    console.log(`server is up on port ${port}`);
})