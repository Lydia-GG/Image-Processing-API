import fs from 'fs';
import resizeImage from '../util/resizeImage';

describe('test image resizing', () => {
  it('resize the image', async () => {
    const imagePath = '../../images?filename=santamonica&width=100&height=100';
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    const originalImage = `../../images/full/santamonica.jpg`;
    const resizedImage = `images/full/santamonica-100-100.jpg`;
    const outputImage = await resizeImage({
      originalImage,
      imageWidth: 100,
      imageHeight: 100,
      resizedImage,
    });
    expect(outputImage).toBeTruthy();
  });
});
