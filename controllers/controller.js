var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const request = require('request');
var HTMLParser = require('node-html-parser');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// var proxy = require('express-http-proxy');
// const request = require('request');
var data = [{area: 'militari'}];


module.exports = function(app) {
    // app.use(morgan('dev'));
    // app.use('/militari', createProxyMiddleware('/militari',{ target: 'https://www.imobiliare.ro/vanzare-apartamente/bucuresti', changeOrigin: true }));
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     next();
    // });

    // app.use('/militari', proxy('https://www.imobiliare.ro/vanzare-apartamente/bucuresti/militari'));

    app.get('/', (req, res) => {
        res.render('home', {areas: data});
    });

    app.post('/', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });

    app.get('/:area', (req, res) => {

        request
        (
            { 
                // url: 'https://joke-api-strict-cors.appspot.com/jokes/random'
                url: 'https://www.imobiliare.ro/vanzare-apartamente/bucuresti/' + req.params.area
            },
            (error, response, body) => {
                var root = HTMLParser.parse(response.body);
                console.log(root.querySelector('.icon-portal-metrou'));

            }
        )

        console.log("..................................");
        res.render('area', {area: req.params.area});
    });

    app.post('/:area', (req, res) => {
        // res.send('You requested info about ' + req.params.area);
        
        res.render('area', {area: req.params.area});
    });
}