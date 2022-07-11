import fs from 'fs';
import checkExistImage from '../util/checkExistImage';

import resizeImage from '../util/resizeImage';

const getImageFile = async (req, res) => {
  const fileName = req.query.filename;
  const imageWidth = parseInt(req.query.width);
  const imageHeight = parseInt(req.query.height);
  const originalImage = `images/full/${fileName}.jpg`;
  const resizedImage = `images/full/${fileName}-${imageWidth}-${imageHeight}.jpg`;

  const existImage = checkExistImage(fileName, imageWidth, imageHeight);
  console.log(existImage);
  if (existImage) {
    console.log('image is exist');
    return res
      .status(200)
      .contentType('jpeg')
      .send(fs.readFileSync(`images/full/${existImage}`));
  }
  if (fileName && !imageHeight && !imageWidth) {
    res.status(200).contentType('jpeg').send(fs.readFileSync(originalImage));
  }
  if (imageWidth && !imageHeight) {
    res.status(400).send('please provide image height!');
  }
  if (imageHeight && !imageWidth) {
    res.status(400).send('please provide image width!');
  }
  if (imageHeight <= 0 || imageWidth <= 0) {
    res.status(400).send('please provide positive integer');
  }
  if (fileName && imageHeight && imageWidth) {
    await resizeImage(originalImage, imageWidth, imageHeight, resizedImage);
    const image = fs.readFileSync(resizedImage);
    console.log('image resized');
    res.status(200).contentType('jpeg').send(image);
  }
};

export default getImageFile;
