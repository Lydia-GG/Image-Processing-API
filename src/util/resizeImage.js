const sharp = require('sharp');

const resizeImage = async (originalImage, width, height, resizedImage) => {
  const image = await sharp(originalImage)
    .resize(width, height)
    .toFile(resizedImage);
  return image;
};

module.exports = resizeImage;
