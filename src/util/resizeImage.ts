import sharp from 'sharp';
import ResizeImage from '../interfaces/ResizeImage.interface';

const resizeImage = async ({
  originalImage,
  imageWidth,
  imageHeight,
  resizedImage,
}: ResizeImage): Promise<object | unknown> => {
  try {
    const outputImage = await sharp(originalImage)
      .resize(imageWidth, imageHeight)
      .toFile(resizedImage);

    return outputImage;
  } catch (error) {
    return error;
  }
};

export default resizeImage;
