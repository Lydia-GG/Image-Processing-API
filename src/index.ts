import express from 'express';
import imagesRoute from './routes/images';

const app = express();
const port = 5000;

app.use('/images', imagesRoute);

app.listen(port, () => console.log(`server is running on port ${port}`));
