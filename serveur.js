const http = require('http')

const server = http.createServer((req, res) => {
    res.write("Hello world");
    console.log(colors.rainbow('OMG Rainbows!'));
    res.end();
});
// Ce serveur http écoute sur le port 3000.
server.listen(3000);
