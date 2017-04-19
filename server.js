
(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: true,
    httpsPort: 443,
    privateKey: "private-key.pem",
    certificate: "certificate.pem"
} );

server.start();
