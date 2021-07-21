require("dotenv").config();
const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

const path = require("path");
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./router");
const { urlencoded } = require("express");
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`Server running and listening on port ${port}...`);
});