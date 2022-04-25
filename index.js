const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/switches', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();

});

app.get('/switches', (req, res, next) => {
    res.end('Will send all switches to you!');
});

app.post('/switches', (req, res, next) => {
    res.end('Will add the switch: ' + req.body.switchId)
});

app.put('/switches', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

app.delete('/switches', (req, res, next) => {
    res.destroy('Delete errything');
});

app.get('/switches/:switchId', (req, res, next) => {
    res.end('Will send details of switch: ' + req.params.switchId);
});

app.post('/switches/:switchId', (req, res, next) => {
    req.statusCode = 403;
    res.end('POST not supported on specific switch')
});

app.put('/switches/:switchId', (req, res, next) => {
    res.end('Will update params on switch' + req.params.switchId);
});

app.delete('/switches:switchId', (req, res, next) => {
    res.destroy('Delete switch with id' + req.params.switchId);
});
app.use(express.static(__dirname+ '/public'));

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