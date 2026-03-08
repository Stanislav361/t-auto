import fs from "fs"
import path from "path"

// Функция для чтения переменных напрямую из файла
function loadEnvFromFile(): { botToken?: string; chatId?: string } {
  try {
    const envPath = path.join(process.cwd(), ".env.local")
    const envPathAlt = path.join(process.cwd(), ".env")
    
    let envContent = ""
    
    // Пробуем прочитать .env.local
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, "utf-8")
    } 
    // Если не нашли, пробуем .env
    else if (fs.existsSync(envPathAlt)) {
      envContent = fs.readFileSync(envPathAlt, "utf-8")
    }
    
    if (!envContent) {
      return {}
    }
    
    // Парсим файл
    const lines = envContent.split("\n")
    const config: { botToken?: string; chatId?: string } = {}
    
    for (const line of lines) {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith("#")) {
        const [key, ...valueParts] = trimmed.split("=")
        if (key && valueParts.length > 0) {
          const value = valueParts.join("=").trim()
          if (key === "TELEGRAM_BOT_TOKEN") {
            config.botToken = value
          } else if (key === "TELEGRAM_CHAT_ID") {
            config.chatId = value
          }
        }
      }
    }
    
    return config
  } catch (error) {
    console.error("Ошибка при чтении .env файла:", error)
    return {}
  }
}

// Получаем конфигурацию
export function getTelegramConfig() {
  // Сначала пробуем переменные окружения Next.js
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  
  // Если не нашли, читаем из файла напрямую
  if (!botToken || !chatId) {
    const fileConfig = loadEnvFromFile()
    return {
      botToken: botToken || fileConfig.botToken,
      chatId: chatId || fileConfig.chatId,
    }
  }
  
  return { botToken, chatId }
}


