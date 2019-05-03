const zipkin = require("appmetrics-zipkin");
const prometheus = require("appmetrics-prometheus").attach();
const dash = require("appmetrics-dash").attach();
const rest = require("rest");
const express = require( "express" );
const app = express();

// define a route handler for the default home page
app.get( "/", ( _req: any, res: any ) => {
    rest('http://localhost:9000/api')
        .then((response: any) => res.send(response.entity))
        .catch((err: any) => console.log('Error', err.stack));
} );

const port = process.env.PORT || 8080; // port to listen
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});