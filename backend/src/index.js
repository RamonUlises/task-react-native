import express from 'express';
import router from './routes/routes';
import cors from 'cors';
import morgan from 'morgan';

import swaggerDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from './swaggerOptions';

const specs = swaggerDoc(options)

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(router)

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(3000, ()=>{
    console.log('Server is running on port http://localhost:3000');
});