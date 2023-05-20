import http from "http";
import generatePercentage from "./features.js";

console.log(generatePercentage());



const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`<h1>Love is ${generatePercentage()} <h1>`);
    }
    else if (req.url === "/about") {
        res.end("<h1>About page</h1>");
    }
    else if (req.url === "/contact") {
        res.end("<h1>Contact PAge</h1>");
    }
    else {
        res.end("<h1>PAGE NOT FOUND</h1>");
    }

});


server.listen(5000, () => {
    console.log("server is working");

});