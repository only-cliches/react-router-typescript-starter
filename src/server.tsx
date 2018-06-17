import * as express from 'express';
import * as errorHandler from 'errorhandler';
import * as http from 'http';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import MainPage from './pages/MainPage';
import { RouteMap } from './app/routes';

const app = express();

app.set('port', process.env.PORT || 3000);

const env = process.env.NODE_ENV || 'development';

if ('development' === env) {
    console.log('Running in development mode');
    app.use(errorHandler());
}

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
            <RouteMap/>
        </StaticRouter>
    );

    res.send(`<!DOCTYPE html>\r\n${ReactDOMServer.renderToString(
        <MainPage content={content} />
    )}`);
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
