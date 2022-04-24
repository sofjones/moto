const express = require('express');
const http = require('http');
const morgan = require('morgan');


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.static(__dirname+ '/public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
    //console.log(req.headers); //remove as morgan will log
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
}); //request, response and next use extra middleware. next is an optional param


const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
});