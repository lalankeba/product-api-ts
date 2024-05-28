import express from 'express';
import { homeRoute } from './routes/home-route';

const app = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.use('/', homeRoute);

app.listen(port, () => {
    console.info(`app is listening port: ${port}`);
});