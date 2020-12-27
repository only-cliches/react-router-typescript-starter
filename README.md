# React Router Universal TypeScript Starter

Get React Router, Typescript, Server Side Rendering and Live Reloading in the time it takes you to type `git clone`.

🔥 Supports React.Suspense and Async Routes with SSR 🔥
- Works with express and helmet.
- Live reload works for server side and client side code separately.
- Skips server side rendering in development mode.
- Includes SASS support with livereload for stylesheets.
- Kicks out sourcemaps to make debugging easier.
- Uses new streams for React SSR responses.

Hot Module Reloading isn't really feasible if you're developing a universal javascript application and you want livereload on the server and client.  If you need/want HMR and you're developing a **purely client side app** I highly recommend [Parcel](https://github.com/adhrinae/ts-react-parcel).

### Dependencies Current As Of 12-26-2020
- Express 4.17.1
- Typescript 4.1.3
- React 17.0.1
- React Router 5.2.0
- Webpack 5.11.0

## Usage
### 1. Git clone this repo.
```
git clone https://github.com/ClickSimply/react-router-typescript-starter.git
```

### 2. npm install
```
cd react-router-typescript-starter
npm i
```

### 3. Profit
To run in development mode with live reload:
```
npm run serve
```

And visit [localhost:3000](http://localhost:3000) in your browser.

To do a production build and deploy:
```
npm run build
node www/server.js
```

## React.Suspense with SSR
```ts
import * as React from "react";
// use custom Suspense component that resolves to passthrough component in NodeJS and React.Suspense component in browser.
import { Suspense } from "./components/AsyncRoute";

// use standard require for node, use React.lazy for browser
// webpack loader does the conditional rendering for us
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
```

## Good Stuff To Know
- Static files are served from the `www/public` folder.  Put static resources there.
- Live reload tracks changes to the server scripts, client scripts and styles.  Whiz-bang.

## License
MIT