'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: true,
<<<<<<< HEAD
    port: 443
=======
    httpsPort: 443,
    privateKey: 'privatekey.pem',
    certificate: 'server.crt',
    port: 80
>>>>>>> aff18864b3372244b3463157587ead6f46aa9802
} );

server.start();
