const express = require('express');
const fs = require('fs');
const sharp = require('sharp');

const app = express();
const port = 5000;

app.get('/images', async (req, res) => {
  const fileName = req.query.filename;
  const imageWidth = parseInt(req.query.width);
  const imageHeight = parseInt(req.query.height);

  const originalImage = `images/full/${fileName}.jpg`;
  const resizeImage = `images/full/${fileName}-${imageWidth}-${imageHeight}.jpg`;

  const existImage = fs.readdirSync(`images/full`).find((image) => {
    {
      if (
        image.split('.').includes(`${fileName}-${imageWidth}-${imageHeight}`)
      ) {
        return image;
      }
    }
  });
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
    await sharp(originalImage)
      .resize(imageWidth, imageHeight)
      .toFile(resizeImage);
    const image = fs.readFileSync(
      `images/full/${fileName}-${imageWidth}-${imageHeight}.jpg`
    );
    console.log('image resized');
    res.status(200).contentType('jpeg').send(image);
  }
});

app.listen(port, () => console.log(`server is running on port ${port}`));
