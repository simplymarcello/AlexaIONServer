'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: true,
    httpsPort: 443,
    port: 80,
    privateKey: 'privatekey.pem',
    certificate: 'server.crt',

} );

server.start();
