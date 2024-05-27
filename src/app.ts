import express from 'express';

const app = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.get('/', (req, res) => {
    console.info('App is working');
    res.status(200).json({ message: 'App is working...' });
});

app.listen(port, () => {
    console.info(`app is listening port: ${port}`);
});