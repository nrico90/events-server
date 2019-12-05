const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventRouter = require("./event/router");
const db = require("./db");
const Event = require("./event/model");

const app = express();
const port = 4000;
const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(eventRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
