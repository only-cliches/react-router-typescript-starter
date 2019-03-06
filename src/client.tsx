
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RouteMap } from './app/routes';

const devFlag = document.getElementById("livereload");

const Mount = devFlag ? ReactDOM.render : ReactDOM.hydrate;
Mount(
    <BrowserRouter>
        <RouteMap />
    </BrowserRouter>,
    document.getElementById('app')
);
