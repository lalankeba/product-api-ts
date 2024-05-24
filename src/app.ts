import express from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
    console.info('App is working');
    res.status(200).json({ message: 'App is working...' });
});

app.listen(port, () => {
    console.info(`app is listening port: ${port}`);
});