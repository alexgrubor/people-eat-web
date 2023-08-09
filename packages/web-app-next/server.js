import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const [hostname, port] = ['localhost', 3000];

const app = next({
    dev: process.env.NODE_ENV === 'development',
    dir: './packages/web-app-next',
    hostname,
    port,
});

const handle = app.getRequestHandler();

app.prepare().then(() =>
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
            res.statusCode = 500;
            res.end('internal server error');
        }
    })
        .once('error', (err) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => console.log(`> Ready on http://${hostname}:${port}`)),
);
