var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const { createProxyMiddleware } = require('http-proxy-middleware');
const request = require('request');
var data = [{area: 'militari'}];

module.exports = function(app) 
{
    app.use
    const testLala = createProxyMiddleware({ target: 'https://www.imobiliare.ro/vanzare-apartamente/bucuresti/militari', changeOrigin: false });
    console.log(testLala);
    // app.use(morgan('dev'));
    // app.use('/:area', createProxyMiddleware({ target: 'https://www.imobiliare.ro/vanzare-apartamente/bucuresti/militari', changeOrigin: false }));
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     next();
    // });

    // app.get('/militari', (req, res) => {
    //     request(
    //       { url: 'https://www.imobiliare.ro/vanzare-apartamente/bucuresti/militari' },
    //       (error, response, body) => {
    //         if (error || response.statusCode !== 200) {
    //           return res.status(500).json({ type: 'error', message: err.message });
    //         }
      
    //         // res.json(JSON.parse(body));
    //       }
    //     )
    // });

    app.get('/', (req, res) => {
        res.render('home', {areas: data});
    });

    app.post('/', urlencodedParser, (req, res) => {
        // res.render('home');
        data.push(req.body);
        res.json(data);
    });

    app.get('/:area', (req, res) => {
        // res.send('You requested info about ' + req.params.area);
        // 
        console.log("..................................");
        res.render('area', {area: req.params.area});
    });

    app.post('/:area', (req, res) => {
        // res.send('You requested info about ' + req.params.area);
        // 
        console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
        res.render('area', {area: req.params.area});
    });
}