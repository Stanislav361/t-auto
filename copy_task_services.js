const fs = require('fs');
const path = require('path');

const srcFile = 'photo_2026-02-19_11-58-11.jpg';
const destDir = path.join('public', 'images');
const destFile = path.join(destDir, 'photo_2026-02-19_11-58-11.jpg');

console.log('CWD:', process.cwd());

if (!fs.existsSync(destDir)) {
    console.log('Creating directory:', destDir);
    fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcFile)) {
    console.log('Found source file:', srcFile);
    fs.copyFile(srcFile, destFile, (err) => {
        if (err) {
            console.error('Error copying:', err);
        } else {
            console.log('Successfully copied to:', destFile);
        }
    });
} else {
    console.error('Source file not found in CWD:', srcFile);
    console.log('Files in CWD:', fs.readdirSync('.'));
}
