require("dotenv").config();
const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const morgan = require("morgan");

if (process.env.NODE_ENV === "production") {
    const path = require("path");
    const serveStatic = require('serve-static');
    app.use(serveStatic(__dirname + '/client/build'));
    app.use(morgan('tiny'));

    // app.use(express.static(path.join(__dirname, '../client/build')));
    // app.use(express.static(path.resolve(__dirname, "./client/build")));
} else {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./router");
const { urlencoded } = require("express");
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`Server running and listening on port ${port}...`);
});