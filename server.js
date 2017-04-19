
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
    certificate: "certificate.pem",
    pre: function(appServer) { 
    	var Go = require('gonode').Go;
		var options = {
		    path		: 'test.go',
		    initAtOnce	: true,	
		}
		var go = new Go(options, function(err) {
		    if (err) throw err;
			go.execute({commandText: 'GetToken'}, function(result, response) {
			    if(result.ok) {
			        console.log('Bearer Token: ' + response.responseText);
			    }
			});
		    go.close();
		});
    },
} );

server.start();
