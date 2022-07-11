import fs from 'fs';

const checkExistImage = (fileName, imageWidth, imageHeight) => {
  const existImage = fs.readdirSync(`./images/full`).find((image) => {
    return image
      .split('.')
      .includes(`${fileName}-${imageWidth}-${imageHeight}`);
  });
  return existImage;
};

export default checkExistImage;
