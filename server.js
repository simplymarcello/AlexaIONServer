'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: true,
    port: 80
} );

server.start();