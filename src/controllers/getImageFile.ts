import fs from 'fs';
import { Response, Request } from 'express';
import checkExistImage from '../util/checkExistImage';
import resizeImage from '../util/resizeImage';

const getImageFile = async (
  req: Request,
  res: Response
): Promise<unknown | object> => {
  const fileName = req.query.filename as string;
  const imageWidth = parseInt(req.query.width as string) as number;
  const imageHeight = parseInt(req.query.height as string) as number;
  const originalImage = `images/full/${fileName}.jpg`;
  const resizedImage = `images/full/${fileName}-${imageWidth}-${imageHeight}.jpg`;

  const existImage = checkExistImage({ fileName, imageWidth, imageHeight });

  try {
    if (existImage) {
      return res
        .status(200)
        .contentType('jpeg')
        .send(fs.readFileSync(`images/full/${existImage}`));
    } else if (fileName && !imageHeight && !imageWidth) {
      res.status(200).contentType('jpeg').send(fs.readFileSync(originalImage));
    } else if (imageWidth && !imageHeight) {
      res.status(400).send('please provide image height!');
    } else if (imageHeight && !imageWidth) {
      res.status(400).send('please provide image width!');
    } else if (imageHeight < 0 || imageWidth < 0) {
      res.status(400).send('please provide positive integer');
    } else if (fileName && imageHeight && imageWidth) {
      await resizeImage({
        originalImage,
        imageWidth,
        imageHeight,
        resizedImage,
      });
      const image = fs.readFileSync(resizedImage);

      res.status(200).contentType('jpeg').send(image);
    }
  } catch (error) {
    return error;
  }
};

export default getImageFile;
