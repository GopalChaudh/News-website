const http = require('http');
const { readFileSync } = require('fs')

const Home_page = readFileSync('./files/pages/home.html');
const Error_page = readFileSync('./files/pages/err.html');
const News_page = readFileSync('./files/pages/news.html');
const Main_Css = readFileSync('./files/style/main.css');
const News_Css = readFileSync('./files/style/news.css');
const News_Js = readFileSync('./files/script/news.js');
const LOGO = readFileSync('./files/images/logo.webp');
const PORT = 5500;

const server = http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(Home_page);
            break;
        case '/main.css':
            res.writeHead(200, { 'content-type': 'text/css' })
            res.write(Main_Css)
            break;
        case '/news.css':
            res.writeHead(200, { 'content-type': 'text/css' })
            res.write(News_Css)
            break;
        case '/news.js':
            res.writeHead(200, { 'content-type': 'text/css' })
            res.write(News_Js)
            break;
        case '/logo.webp':
            res.writeHead(200, { 'content-type': 'image' })
            res.write(LOGO)
            break;
        case '/home':
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(Home_page);
            break;
        case '/news':
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(News_page);
            break;
        default:
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(Error_page);
            break;
    }
    res.end();
})


server.listen(PORT, () => {
    console.log(`server is listning at:http://localhost:${PORT}/`)
})


