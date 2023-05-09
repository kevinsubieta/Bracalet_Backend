import express from 'express';
import * as dotenv from 'dotenv';
import indexRoutes from './service/index.routes';
const bodyParser = require('body-parser')
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(indexRoutes);



export default app;
