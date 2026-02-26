const fs = require('fs');
const path = require('path');

const envContent = `TELEGRAM_BOT_TOKEN=8536927149:AAGXfNO9LDONL3xKByyJgJPxq5JSqtciozA
TELEGRAM_CHAT_ID=8365894616
`;

const envPath = path.join(__dirname, '.env.local');

try {
  fs.writeFileSync(envPath, envContent, 'utf8');
  console.log('✅ Файл .env.local успешно создан!');
  console.log('📍 Путь:', envPath);
  console.log('📝 Содержимое:');
  console.log(envContent);
} catch (error) {
  console.error('❌ Ошибка при создании файла:', error);
}


