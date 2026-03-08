const fs = require('fs');
const path = require('path');

const src = 'photo_2026-02-19_12-17-20.jpg';
const destDir = path.join('public', 'images');
const dest = path.join(destDir, 'hero-bg.jpg');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFile(src, dest, (err) => {
  if (err) throw err;
  console.log('File copied successfully');
});



