
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RouteMap } from './app/routes';

ReactDOM.hydrate(
    <BrowserRouter>
        <RouteMap />
    </BrowserRouter>,
    document.getElementById('body'));
