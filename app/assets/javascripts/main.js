var myGlobalRequire = (function () {
    var require = {
    			baseUrl: "/assets/javascripts",
    		    paths: {
    		        jquery: "lib/jquery/jquery-1.9.0.min",
    		        ace: "http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace",
    		        underscore: "lib/underscore/underscore-1.4.4",
    		        backbone: "lib/backbone/backbone-0.9.10"
    		    },
    		    shim: {
    		        "jquery": {
    		            exports: "jQuery"
    		        },
    		        "ace": {
    		            deps: ["jquery"],
    		            exports: "ace"
    		        },
    		        "underscore": {
    		            exports: "_"
    		        },
    		        "backbone": {
    		            deps: ["jquery", "underscore"],
    		            exports: "Backbone"
    		        }
    		   }
    		};
    return require;
}());