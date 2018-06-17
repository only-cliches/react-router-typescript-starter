
import * as React from 'react';
// import { Helmet } from 'react-helmet';

export interface MainProps {
    content: string;
}

const env = process.env.NODE_ENV || 'development';

export default class MainPage extends React.Component<MainProps, any> {

    render() {
        // Add helmet to control title at the view level
        // const helmet = Helmet.rewind();

        return (
            <html lang="en-us">
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0" />
                    {/*
                    {helmet.meta.toComponent()}
                    {helmet.title.toComponent()}
                    {helmet.link.toComponent()}
                    */}
                    <title>Home</title>
                    {env === "development" ? <script src="http://localhost:35729/livereload.js?snipver=1"></script> : null}
                    <link href="/style.css" rel="stylesheet" />
                    <link href="/favicon.ico" />
                </head>
                <body>
                    <div id="body" dangerouslySetInnerHTML={{__html: this.props.content}}/>
                    <script src="/app.js"></script>
                </body>
            </html>
        );
    }
}
