import express from 'express';
import * as dotenv from 'dotenv';
import indexRoutes from './service/index.routes';
dotenv.config();
const app = express();
app.use(express.json());


app.use(indexRoutes);


export default app;
