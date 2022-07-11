import express from 'express';
import getImageFile from '../controllers/getImageFile';

const route = express.Router();

route.get('/', getImageFile);

export default route;
