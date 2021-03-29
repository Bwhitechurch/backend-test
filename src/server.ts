import express from 'express';

const server = express();
const hostname = '127.0.0.1';
const port = 3000;

server.get('/', (request: express.Request, response: express.Response) => {
    response.send('Hello, world!');
});

server.listen(port, hostname, () => {
    return console.log(`server is listening on ${port}`);
}).on('error', (error) => {
    return console.error(error);
});
