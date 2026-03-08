const fs = require('fs');
const path = require('path');

const dir = path.join('public', 'images');
const oldName = path.join(dir, 'golf-car.jpg.jpg');
const newName = path.join(dir, 'golf-car.jpg');

if (fs.existsSync(oldName)) {
    fs.rename(oldName, newName, (err) => {
        if (err) console.error('Rename failed:', err);
        else console.log('Rename success!');
    });
} else {
    console.log('File not found:', oldName);
    // Проверим, может он уже переименован или лежит под другим именем
    const files = fs.readdirSync(dir);
    console.log('Files in directory:', files);
}



