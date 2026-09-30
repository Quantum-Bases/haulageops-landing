const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createFavicon() {
  const inputPath = path.join(process.cwd(), 'public', 'HaulageOps_Icon_Black.png');
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Recolor to Brand Orange #E8652B (RGB: 232, 101, 43)
  const orangeData = Buffer.from(data);
  for (let i = 0; i < orangeData.length; i += 4) {
    orangeData[i] = 232;     // R
    orangeData[i + 1] = 101; // G
    orangeData[i + 2] = 43;  // B
    // Alpha channel unchanged
  }

  // Create high-res orange base PNG with transparency
  const orangeBase = await sharp(orangeData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  }).png().toBuffer();

  await fs.promises.writeFile(path.join(process.cwd(), 'public', 'HaulageOps_Icon_Orange.png'), orangeBase);

  // Square padded icon (512x512) for Next.js app icon
  const icon512 = await sharp(orangeBase)
    .resize(440, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 36,
      bottom: 36,
      left: 36,
      right: 36,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  await fs.promises.writeFile(path.join(process.cwd(), 'public', 'icon.png'), icon512);

  // 32x32, 16x16, 48x48
  const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  const icon48 = await sharp(icon512).resize(48, 48).png().toBuffer();

  await fs.promises.writeFile(path.join(process.cwd(), 'public', 'favicon-32x32.png'), icon32);
  await fs.promises.writeFile(path.join(process.cwd(), 'public', 'favicon-16x16.png'), icon16);
  await fs.promises.writeFile(path.join(process.cwd(), 'public', 'favicon-48x48.png'), icon48);

  // Apple touch icon (180x180): Clean #18181B dark background with centered orange emblem
  const appleTouch = await sharp(orangeBase)
    .resize(130, 130, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 25,
      bottom: 25,
      left: 25,
      right: 25,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .flatten({ background: { r: 24, g: 24, b: 27 } }) // #18181B dark charcoal
    .png()
    .toBuffer();

  await fs.promises.writeFile(path.join(process.cwd(), 'public', 'apple-touch-icon.png'), appleTouch);

  // Generate valid binary ICO file with 16x16, 32x32, 48x48
  function createIco(images) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved
    header.writeUInt16LE(1, 2); // Type 1 = ICO
    header.writeUInt16LE(images.length, 4); // Count

    let offset = 6 + images.length * 16;
    const dirEntries = [];
    const imageBuffers = [];

    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // Colors
      entry.writeUInt8(0, 3); // Reserved
      entry.writeUInt16LE(1, 4); // Planes
      entry.writeUInt16LE(32, 6); // Bits per pixel
      entry.writeUInt32LE(img.buffer.length, 8); // Size
      entry.writeUInt32LE(offset, 12); // Offset

      dirEntries.push(entry);
      imageBuffers.push(img.buffer);
      offset += img.buffer.length;
    }

    return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 },
  ]);

  await fs.promises.writeFile(path.join(process.cwd(), 'public', 'favicon.ico'), icoBuffer);

  console.log('Successfully regenerated all favicon assets with seamless transparency & flattening!');
}

createFavicon().catch(console.error);
