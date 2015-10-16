/// <reference path="client/app/scripts/isomorph.ts" />

var require : any;
//module meanformApp {
//    export class IsomorphicTs {
//        constructor() {
//            console.log("This is really isomorphic!");
//        }
//    }
//}


module meanformApp {
    export class Main {
        constructor() {


            var express = require("express"),
                app = express();

            require('./client/app/scripts/isomorph');



            app.get("/", function(req, res) {
                //res.sendfile(__dirname + '/client/views/index.html');

                var its = new meanformApp.IsomorphicTs();
                
                res.send('AAA');
            });

            app.listen(3000, function() {
                console.log("I'm listening...");
            });
        }
    }
}

new meanformApp.Main();