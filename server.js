'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: true,
    httpsPort: 443,
    privateKey: 'privatekey.pem',
    certificate: 'server.crt',
    port: 80
} );

server.start();