import express from 'express';
import { requestLogger } from './middleware/request-logger';
import { homeRoute } from './routes/home-route';
import { errorHandler } from './middleware/error-handler';
import AppError from './errors/app-error';

const app = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.use(requestLogger);
app.use(express.json());

app.use('/', homeRoute);

// Catch-all route handler for non-existent routes
app.use((req, res, next) => {
    const err = new AppError('Not Found');
    err.statusCode = 404;
    next(err);
});

app.use(errorHandler);

app.listen(port, () => {
    console.info(`app is listening port: ${port}`);
});