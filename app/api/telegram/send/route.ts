import { NextRequest, NextResponse } from "next/server"
import { getTelegramConfig } from "@/lib/telegram-config"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json()

    // Валидация
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      )
    }

    // Получаем конфигурацию (из переменных окружения или файла)
    const { botToken, chatId } = getTelegramConfig()
    
    // Отладочная информация
    console.log("=== Telegram Bot Debug ===")
    console.log("BOT_TOKEN exists:", !!botToken)
    console.log("BOT_TOKEN length:", botToken?.length || 0)
    console.log("CHAT_ID exists:", !!chatId)
    console.log("CHAT_ID value:", chatId || "не установлен")
    console.log("Process.env TELEGRAM vars:", Object.keys(process.env).filter(k => k.includes("TELEGRAM")))
    console.log("========================")

    // Отладочная информация
    console.log("=== Telegram Bot Debug ===")
    console.log("BOT_TOKEN exists:", !!botToken)
    console.log("BOT_TOKEN length:", botToken?.length || 0)
    console.log("CHAT_ID exists:", !!chatId)
    console.log("CHAT_ID value:", chatId || "не установлен")
    console.log("========================")

    if (!botToken || !chatId) {
      console.error("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не установлены")
      console.error("BOT_TOKEN:", botToken ? "установлен" : "НЕ установлен")
      console.error("CHAT_ID:", chatId ? "установлен" : "НЕ установлен")
      console.error("Проверьте файл .env.local в папке:", process.cwd())
      return NextResponse.json(
        { error: "Telegram бот не настроен. Проверьте файл .env.local в папке проекта и перезапустите сервер." },
        { status: 500 }
      )
    }

    // Форматирование сообщения
    const text = `🆕 *Новая заявка с сайта*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
${message ? `💬 *Сообщение:*\n${message}` : ''}

⏰ *Время:* ${new Date().toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}`

    // Отправка в Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Ошибка Telegram API:", data)
      return NextResponse.json(
        { error: "Ошибка при отправке сообщения в Telegram" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: "Заявка отправлена" })
  } catch (error) {
    console.error("Ошибка при обработке заявки:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}

