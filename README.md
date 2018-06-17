# React Router TypeScript Starter

Get React Router, Typescript, Server Side Rendering and Live Reloading in the time it takes you to type `git clone`.

### Dependencies Current As Of 6-17-2018
- Typescript 2.9.2
- React 16.4.1
- React Router 4.1.1
- Webpack 4.12.0

## Usage
1. Git clone this repo.
```
git clone https://github.com/ClickSimply/react-router-typescript-starter.git
```

2. npm install
```
cd react-router-typescript-starter
npm i
```

3. Profit
To run in development mode with live reload:
```
npm run serve
```

To do a production build and deploy:
```
npm run build
node www/server.js
```

## Good Stuff To Know
- Static files are served from the `www/public` folder.  Put static resources there.
- SASS files cannot be included/required into typescript, use `@import` statements in the main `style.scss` file instead.
- Live reload tracks changes to the server, scripts and styles.  Whiz-bang.

## License
MIT

## Contributing
What?