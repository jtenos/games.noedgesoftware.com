/* global URI, swal, jQuery */

(function() {
    var queryNow = parseInt(URI.parseQuery(URI.parse(document.location.href).query)._, 10);
    if (isNaN(queryNow) || Math.abs(queryNow - Date.now()) > 60000) {
        document.location.href = "index.html?_=" + Date.now();
    }
})();

var app = window.app = {};

app.actions = {
    onePlayerGame: function() {
        app.showLevels(function(err, result) {
            if (err) {
                swal(err);
                return;
            }
            app.beginGame(result); 
        });
    }
};

app.showLevels = function(callback) {
    var template = jQuery("#levels-template").html();
};

app.beginGame = function(config) {
    
};
