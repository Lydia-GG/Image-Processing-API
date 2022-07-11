import fs from 'fs';
import Image from '../interfaces/Image.interface';

const checkExistImage = ({
  fileName,
  imageWidth,
  imageHeight,
}: Image): unknown | string => {
  const existImage = fs.readdirSync(`./images/full`).find((image: string) => {
    return image
      .split('.')
      .includes(`${fileName}-${imageWidth}-${imageHeight}`);
  });
  return existImage;
};

export default checkExistImage;
