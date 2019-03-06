import * as express from 'express';
import * as errorHandler from 'errorhandler';
import * as http from 'http';
import * as path from 'path';
import * as fs from "fs";
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

const assets = fs.readFileSync(path.join(__dirname, "webpack-assets.json"), {encoding: "utf-8"});


const app = express();

app.set('port', process.env.PORT || 3000);

const env = process.env.NODE_ENV || 'development';

if ('development' === env) {
    console.log('Running in development mode');
    app.use(errorHandler());
}

app.use(express.static(path.join(__dirname, 'public')));

import MainPage from "./pages/MainPage";
const appJS = JSON.parse(assets).app.js;
/// #if env !== 'development'
// SSR when in production mode
import  { RouteMap } from "./app/routes";

app.use((req, res, next) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
            <RouteMap/>
        </StaticRouter>
    );
    res.write("<!DOCTYPE html>");
    const stream = ReactDOMServer.renderToStaticNodeStream(<MainPage content={content} scriptSrc={appJS} />);
    stream.pipe(res);
});
/// #else
// SPA with no SSR in development mode
app.use((req, res, next) => {
    res.send(`<!DOCTYPE html>${ReactDOMServer.renderToString(
        <MainPage content={""}  scriptSrc={""} />
    )}`);
});
/// #endif



http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
