const fs = require('fs');
const path = require('path');

// Указываем точное имя файла, которое мы видим в списке файлов
const src = 'photo_2026-02-19_12-17-20.jpg';
const destDir = 'public/images';
const dest = 'public/images/hero-bg.jpg';

console.log(`Current directory: ${process.cwd()}`);

if (!fs.existsSync(destDir)){
    console.log(`Creating directory: ${destDir}`);
    fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(src)) {
    console.log(`Source file found: ${src}`);
    fs.copyFile(src, dest, (err) => {
        if (err) {
            console.error('Error copying file:', err);
            process.exit(1);
        }
        console.log(`File copied from ${src} to ${dest}`);
    });
} else {
    console.error(`Source file NOT found: ${src}`);
    // Попробуем найти любой jpg
    const files = fs.readdirSync('.');
    const jpg = files.find(f => f.startsWith('photo_') && f.endsWith('.jpg'));
    if (jpg) {
        console.log(`Found another jpg: ${jpg}, copying it...`);
        fs.copyFile(jpg, dest, (err) => {
            if (err) throw err;
            console.log(`Copied ${jpg} to ${dest}`);
        });
    } else {
        console.error('No jpg files found in current directory');
    }
}



