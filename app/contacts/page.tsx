"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  User,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [submitMessage, setSubmitMessage] = useState("")
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
                Контакты
              </h1>
              <p className="text-xl text-gray-300">
                Мы всегда на связи и готовы ответить на любые ваши вопросы
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-black text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Map - Left Side */}
            <div className="relative h-[400px] lg:h-auto w-full">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.493548%2C55.676789&z=17&pt=37.493548,55.676789,pm2rdm" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>

            {/* Content - Right Side */}
            <div className="flex flex-col justify-center p-10 lg:p-20 bg-black">
              <h2 className="text-4xl font-bold text-yellow-500 mb-12">Контакты</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">По всем вопросам:</h3>
                  <p className="text-xl text-white">Тел.: <a href="tel:+79160005454" className="hover:text-yellow-500 transition-colors">+7 (916) 000-54-54</a></p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Адрес:</h3>
                  <p className="text-lg text-white leading-relaxed">
                    г. Москва, ул. Удальцова д. 56
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Режим работы:</h3>
                  <p className="text-lg text-white">
                    Пн-Пт с 09:00 до 21:00, Сб-Вс с 10:00 до 21:00
                  </p>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a 
                  href="https://t.me/+79160005454" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.24 15.51 15.99C15.37 16.73 15.1 16.98 14.84 17C14.27 17.05 13.84 16.62 13.29 16.26C12.43 15.69 11.94 15.34 11.11 14.79C10.15 14.16 10.77 13.81 11.32 13.24C11.46 13.09 13.93 10.84 13.98 10.64C13.98 10.61 13.99 10.5 13.98 10.42C13.97 10.34 13.89 10.31 13.8 10.33C13.67 10.36 11.66 11.69 10.69 12.28C10.69 12.28 10.69 12.28 10.69 12.28C9.8 12.55 8.84 12.53 8.1 12.3C7.2 12.02 6.13 11.72 6.06 11.46C6.02 11.33 6.2 10.99 6.86 10.72C9.96 9.29 12.02 8.4 13.05 8.01C15.5 7.08 16.01 6.92 16.34 6.92C16.41 6.92 16.55 6.94 16.63 7.01C16.7 7.07 16.72 7.17 16.73 7.24C16.73 7.29 16.74 7.56 16.64 8.8Z" fill="black"/>
                  </svg>
                </a>
                <a 
                  href="https://max.ru/chat/+79160005454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  title="Приложение MAX"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="black"/>
                    <text x="12" y="16" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">M</text>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-black border-white/10 p-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Оставить заявку
              </h2>
                <p className="text-gray-400 mb-8">
                  Заполните форму, и мы свяжемся с вами в течение 15 минут для консультации
                </p>
              
              <form 
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault()
                  setIsSubmitting(true)
                  setSubmitStatus(null)
                  setSubmitMessage("")

                  try {
                    const response = await fetch("/api/telegram/send", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(formData),
                    })

                    const data = await response.json()

                    if (response.ok) {
                      setSubmitStatus("success")
                      setSubmitMessage("Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.")
                      setFormData({ name: "", phone: "", message: "" })
                    } else {
                      setSubmitStatus("error")
                      setSubmitMessage(data.error || "Произошла ошибка при отправке заявки")
                    }
                  } catch (error) {
                    setSubmitStatus("error")
                    setSubmitMessage("Произошла ошибка при отправке заявки. Попробуйте позже.")
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-gray-600"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-gray-600"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none placeholder:text-gray-600"
                    placeholder="Опишите, какая услуга вас интересует"
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-500/20 border border-green-500/50 text-green-400"
                        : "bg-red-500/20 border border-red-500/50 text-red-400"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <p>{submitMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold py-7 text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
