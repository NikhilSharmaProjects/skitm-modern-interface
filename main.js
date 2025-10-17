import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputFolder = "./public/logos";      // Folder containing your original images
const outputFolder = "./public/LogosL"; // Output folder

if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);

const compressImages = async () => {
  const files = fs.readdirSync(inputFolder);

  for (const file of files) {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file);

    try {
      // Resize or compress based on quality
      await sharp(inputPath)
        .jpeg({ quality: 70 }) // adjust 70 → 60 or 80 depending on results
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      console.log(
        `${file} → ${(stats.size / 1024).toFixed(1)} KB`
      );
    } catch (err) {
      console.error(`Failed to compress ${file}:`, err);
    }
  }
  console.log("✅ All images compressed!");
};

compressImages();
