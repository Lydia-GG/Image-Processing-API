import sharp from 'sharp';
import ResizeImage from '../interfaces/ResizeImage.interface';

// const resizeImage = async (originalImage, width, height, resizedImage) => {
//   const image = await sharp(originalImage)
//     .resize(width, height)
//     .toFile(resizedImage);
//   return image;
// };

interface ResizeImage {
  originalImage: string;
  width: number;
  height: number;
  resizedImage: string;
}

const resizeImage = async (image: ResizeImage) => {
  const resizedImage = await sharp(image.originalImage)
    .resize(image.width, image.height)
    .toFile(image.resizedImage);
  console.log(typeof resizedImage);
  return resizedImage;
};

export default resizeImage;
