'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: true,
    httpsPort: 443,
    privateKey: "private-key.pem",
    certificate: "certificate.pem"
} );

server.start();
