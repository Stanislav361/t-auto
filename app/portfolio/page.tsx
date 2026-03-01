"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Car, 
  Shield, 
  Film,
  Droplets,
  Volume2,
  X
} from "lucide-react"
import { useState } from "react"

import Image from "next/image"

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("Все")

  const portfolioItems = [
    {
      id: 1,
      category: "Детейлинг",
      title: "Керамическое покрытие",
      description: "Полная обработка кузова керамическим покрытием",
      tags: ["Керамика", "Полировка", "Защита"],
      icon: <Sparkles className="h-8 w-8" />,
      image: "/images/1414.jpg" 
    },
    {
      id: 2,
      category: "Кузов/Покраска",
      title: "Покраска бампера",
      description: "Восстановление и покраска переднего бампера",
      tags: ["Покраска", "Кузовной ремонт"],
      icon: <Car className="h-8 w-8" />,
      image: "/images/1515.jpg"
    },
    {
      id: 3,
      category: "Стекла",
      title: "Бронирование лобового стекла",
      description: "Установка защитной пленки на лобовое стекло",
      tags: ["Бронирование", "Защита"],
      icon: <Shield className="h-8 w-8" />,
      image: "/images/20220316-DSC04759.jpg"
    },
    {
      id: 4,
      category: "Детейлинг",
      title: "Антидождь на весь кузов",
      description: "Обработка всех стекол автомобиля",
      tags: ["Антидождь", "Стекла"],
      icon: <Droplets className="h-8 w-8" />,
      image: "/images/i.jpg"
    },
    {
      id: 5,
      category: "Кузов/Покраска",
      title: "Ремонт крыла после ДТП",
      description: "Восстановление геометрии и покраска",
      tags: ["Ремонт", "Покраска"],
      icon: <Car className="h-8 w-8" />,
      image: "/images/photo_2026-02-19_12-14-46.jpg"
    },
    {
      id: 6,
      category: "Детейлинг",
      title: "Оклейка пленкой капота",
      description: "Защитная пленка на капот автомобиля",
      tags: ["Оклейка", "Защита"],
      icon: <Film className="h-8 w-8" />,
      image: "/images/photo_2026-02-19_12-14-53.jpg"
    },
    {
      id: 8,
      category: "Стекла",
      title: "Тонирование стекол",
      description: "Профессиональное тонирование всех стекол",
      tags: ["Тонирование"],
      icon: <Film className="h-8 w-8" />,
      image: "/images/40.jpg"
    },
  ]

  const categories = ["Все", "Детейлинг", "Кузов/Покраска", "Стекла", "Доп. услуги"]

  const filteredItems = activeCategory === "Все" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/777.jpg"
              alt="Background"
              fill
              className="object-cover opacity-70"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-zinc-900/50 to-background/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,204,0,0.05),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
                Наши работы
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Примеры выполненных работ по детейлингу, кузовным работам и дополнительным услугам
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            {/* База данных обновляется */}
            <div className="py-24 text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-yellow-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                База данных обновляется
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Мы обновляем портфолио наших работ. Скоро здесь появятся новые примеры выполненных проектов.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <Card className="bg-zinc-900 border-white/10 p-12 inline-block max-w-3xl w-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Хотите увидеть больше работ?
                </h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Свяжитесь с нами, и мы покажем примеры работ по интересующей вас услуге
                </p>
                <a
                  href="tel:+79160005454"
                  className="inline-flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  <span>Связаться с нами</span>
                </a>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Button
              size="icon"
              variant="ghost"
              className="absolute -top-12 right-0 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </Button>
            <Image
              src={selectedImage}
              alt="Full screen view"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}


