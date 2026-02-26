const fs = require('fs');
const path = require('path');

// Абсолютные пути не сработают так просто, используем относительные от текущей рабочей директории процесса
// Предполагаем, что process.cwd() это корень проекта 111 (или где мы находимся)

const srcFile = 'photo_2026-02-19_12-17-20.jpg';
const destDir = path.join('public', 'images');
const destFile = path.join(destDir, 'photo_2026-02-19_12-17-20.jpg');

console.log('CWD:', process.cwd());

if (!fs.existsSync(destDir)) {
    console.log('Creating directory:', destDir);
    fs.mkdirSync(destDir, { recursive: true });
}

// Ищем файл в текущей директории
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
    // Попробуем поискать в родительских или соседних, но скорее всего мы просто не там
    // Выведем список файлов
    console.log('Files in CWD:', fs.readdirSync('.'));
}



