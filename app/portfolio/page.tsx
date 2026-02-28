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
      image: "/images/photo_2026-02-19_12-14-58.jpg"
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
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              {categories.map((category) => (
                <Badge
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer px-6 py-3 text-sm transition-all ${
                    activeCategory === category
                      ? "bg-yellow-500 text-black border-yellow-500 font-bold"
                      : "bg-zinc-900 text-white border-white/10 hover:bg-yellow-500/20 hover:text-yellow-500 hover:border-yellow-500/30"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Portfolio Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-zinc-900 border-white/10 overflow-hidden hover:border-yellow-500/50 transition-all group hover:-translate-y-1 duration-300"
                >
                  {/* Image Placeholder */}
                  <div 
                    className="relative h-64 bg-zinc-800 cursor-pointer overflow-hidden group"
                    onClick={() => item.image && setSelectedImage(item.image)}
                  >
                    {item.image ? (
                      <div className="absolute inset-0">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        
                        {/* Логотип T-AUTO ТЕХЦЕНТР на всех изображениях с рамкой */}
                        <div className="absolute bottom-3 right-3 z-10">
                          <div className="bg-black/80 backdrop-blur-sm border-2 border-yellow-500/50 rounded-lg px-3 py-2 flex items-center gap-2">
                            <svg 
                              width="28" 
                              height="28" 
                              viewBox="0 0 100 60" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-yellow-500 flex-shrink-0"
                            >
                              <path 
                                d="M5 45H95L90 35H75L65 20H35L20 35H10L5 45Z" 
                                stroke="currentColor" 
                                strokeWidth="3" 
                                strokeLinejoin="round"
                                fill="none"
                              />
                              <circle cx="25" cy="45" r="6" stroke="currentColor" strokeWidth="3" />
                              <circle cx="75" cy="45" r="6" stroke="currentColor" strokeWidth="3" />
                              <path 
                                d="M10 25H30" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                className="opacity-50"
                              />
                              <path 
                                d="M5 30H20" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                className="opacity-50"
                              />
                            </svg>
                            <div className="flex flex-col leading-none">
                              <span className="font-black text-base tracking-tighter text-white uppercase italic transform -skew-x-12">
                                T<span className="text-yellow-500">-</span>AUTO
                              </span>
                              <span className="text-[7px] font-bold text-gray-300 tracking-[0.15em] uppercase">
                                ТЕХЦЕНТР
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                        <div className="text-gray-600 group-hover:text-yellow-500 transition-colors transform group-hover:scale-110 duration-500">
                          {item.icon}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 mb-4">
                      {item.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-white/10 text-gray-500 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
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


