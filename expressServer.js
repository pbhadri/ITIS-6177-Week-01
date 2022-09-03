const express = require('express')
const app = express();
const port = 8080;

app.get('/Home', (req, res)=>{
    res.send('Hello World');
});

app.listen(port, ()=>{
    console.log('Node.js web server at port 8080 is running..');
})