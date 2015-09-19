///<reference path="./typings/node/node.d.ts"/>
var http = require("http");
var fs = require("fs");
var abc = require("./lib/mod");
var lib = require("./lib/lib1/file");
lib.libFn();
console.log("All Files Required");
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        abc.a1();
        fs.readFile('./index.html', function (er, data) {
            if (er) {
                res.end(er.toString());
                return;
            }
            res.end(data.toString());
        });
    }
    else if (req.url == "jquery.js") {
        fs.readFile('./jquery/jquery.js', function (er, data) {
            res.end(data.toString());
        });
    }
    else if (req.url == "/home") {
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>HOME</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else if (req.url == "/contact") {
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Contact</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else {
        res.write("<h1>Webpage Not Available</h1>");
        res.end();
    }
});
server.listen(3000);
