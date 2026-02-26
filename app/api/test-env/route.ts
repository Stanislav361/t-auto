import { NextResponse } from "next/server"
import { getTelegramConfig } from "@/lib/telegram-config"
import fs from "fs"
import path from "path"

export async function GET() {
  const { botToken, chatId } = getTelegramConfig()
  
  // Проверяем существование файлов
  const envLocalPath = path.join(process.cwd(), ".env.local")
  const envPath = path.join(process.cwd(), ".env")
  const envLocalExists = fs.existsSync(envLocalPath)
  const envExists = fs.existsSync(envPath)
  
  let envFileContent = ""
  if (envLocalExists) {
    envFileContent = fs.readFileSync(envLocalPath, "utf-8")
  } else if (envExists) {
    envFileContent = fs.readFileSync(envPath, "utf-8")
  }
  
  return NextResponse.json({
    botToken: botToken ? "установлен" : "НЕ установлен",
    chatId: chatId ? "установлен" : "НЕ установлен",
    botTokenValue: botToken ? botToken.substring(0, 10) + "..." : "нет",
    chatIdValue: chatId || "нет",
    processEnvKeys: Object.keys(process.env).filter(key => key.includes("TELEGRAM")),
    envLocalExists,
    envExists,
    envFileSize: envFileContent.length,
    currentDir: process.cwd(),
    envFilePreview: envFileContent.substring(0, 200)
  })
}

