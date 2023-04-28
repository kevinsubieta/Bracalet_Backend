import express from 'express';
import * as dotenv from 'dotenv';
import indexRoutes from './service/index.routes';
const bodyParser = require('body-parser')
const cors = require('cors')
dotenv.config();

const app = express();



app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(indexRoutes);



export default app;
