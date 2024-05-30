import {Request, Response, NextFunction} from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Error occurred');
    console.error(err.stack);

    const statusCode = err.statusCode || 500;

    const response = {
        message: err.message || 'Internal Server Error',
    };
    
    res.status(statusCode).json(response);
}

export { errorHandler };