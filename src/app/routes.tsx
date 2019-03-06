
import * as React from 'react';
import { Route, Switch } from 'react-router';

import HomeView from './views/HomeView';
// import AboutView from './views/AboutView';
import NotFoundView from './views/NotFoundView';
import { Suspense } from "./components/AsyncRoute";

const AboutAsync = 
/// #if build === 'node'
    require("./views/AboutView").default;
/// #else
    React.lazy(() => import("./views/AboutView"));
/// #endif


export const RouteMap = () => (
    <Suspense fallback="Loading" >
        <Switch>
            <Route path="/" exact component={HomeView}/>
            <Route path="/about" ><AboutAsync /></Route>
            <Route component={NotFoundView} />
        </Switch>
    </Suspense>
);
