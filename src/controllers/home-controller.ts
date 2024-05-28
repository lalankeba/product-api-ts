import { Request, Response } from 'express';

const init = (req: Request, res: Response) => {
    const message: string = `Product ts service is up and running...`;
    console.log(message);
    res.status(200).json({ message: message });
}

export { init };