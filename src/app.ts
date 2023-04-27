import express from 'express';
import * as dotenv from 'dotenv';
import indexRoutes from './service/index.routes';
const bodyParser = require('body-parser')
dotenv.config();

const app = express();
const cors = require('cors')

app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())
app.use(indexRoutes);



export default app;
