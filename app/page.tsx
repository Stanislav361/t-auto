"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Car, 
  Wrench, 
  Shield, 
  Zap, 
  Award, 
  Users, 
  Star,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  Scissors
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [reviews, setReviews] = useState<Array<{id: number; name: string; rating: number; text: string}>>([])

  useEffect(() => {
    fetch('/api/data/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showSplash])

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Автосервис",
      description: "Техническое обслуживание, ремонт и диагностика автомобиля",
      href: "/services#autoservice",
      image: "/images/5.jpg"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Автомоечный комплекс",
      description: "Комплексная мойка, химчистка, полировка, защита кузова",
      href: "/services#carwash",
      image: "/images/2.jpg"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Автоателье",
      description: "Перетяжка салона, ремонт сидений, покраска элементов интерьера",
      href: "/services#atelier",
      image: "/images/1313.jpg"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Стекла",
      description: "Бронирование лобового стекла и оптики, тонирование",
      href: "/services#glass",
      image: "/images/4.jpg"
    },
  ]

  const advantages = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Профессионализм",
      description: "Команда опытных специалистов с многолетним опытом"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Современное оборудование",
      description: "Передовое оборудование для работы с электромобилями и гибридами"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Гарантия качества",
      description: "Выполнение всех видов работ с гарантией результата"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Индивидуальный подход",
      description: "Уникальное программное обеспечение и индивидуальные решения"
    },
  ]


  return (
    <div className="min-h-screen flex flex-col bg-background animate-in fade-in duration-1000">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div 
          className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: "url('/images/photo_2026-02-19_11-58-43.jpg')" }}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Big Logo as background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
             <span className="text-[20vw] font-black text-white/10 animate-pulse drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">T-AUTO</span>
          </div>
          
          {/* Yellow accent glows */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,204,0,0.15),transparent_60%)]" />
          
          {/* Content overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-5xl mx-auto">
            
            {/* Main heading */}
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 text-gray-200">
              Профессиональный <span className="text-yellow-500 drop-shadow-[0_0_20px_rgba(255,204,0,0.6)]">детейлинг</span> и сервис
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Профессиональная команда специалистов, занимающаяся обслуживанием электромобилей, 
              гибридов и традиционных ДВС автомобилей.
            </p>
            
            {/* Badge */}
            <Badge className="bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 text-xs sm:text-sm px-4 sm:px-6 py-2 mb-8 md:mb-10">
              РАБОТАЕМ С ЭЛЕКТРОМОБИЛЯМИ И ГИБРИДАМИ
            </Badge>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
              <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-8 sm:px-10 text-base sm:text-lg h-12 sm:h-14">
                <Link href="/services">Наши услуги</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold px-8 sm:px-10 text-base sm:text-lg h-12 sm:h-14">
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Golf Cart Transfer Section - NEW */}
        <section className="py-12 md:py-20 px-4 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,204,0,0.1),transparent_60%)]" />
          
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/golf-car.jpg.jpg'), url('/images/golf-car.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-yellow-500 text-black border-0 mb-2 font-bold px-3 py-1">
                    PREMIUM SERVICE
                  </Badge>
                  <p className="text-white/80 text-sm">Комфорт с первых минут</p>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                  <span className="text-yellow-500">Трансфер</span> для клиентов
                </h2>
                <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Заберем и отвезем вас до нашего сервиса с любой точки ЖК &laquo;Олимпийская деревня&raquo; на нашем стильном гольф-каре
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Стильно и удобно</h4>
                      <p className="text-gray-400">Поездка с комфортом на премиальном транспорте</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Экономия времени</h4>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-white/10 text-white hover:bg-yellow-500 hover:text-black font-bold px-8 h-14 border border-white/20 hover:border-yellow-500 transition-all">
                  <Link href="/contacts">Записаться на сервис</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* УТП (Уникальные торговые предложения) */}
        <section className="relative py-20 px-4 bg-zinc-900/50 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/999.jpg"
              alt="Background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-zinc-900/70" />
          </div>
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Почему выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="bg-black border-white/10 p-8 hover:border-yellow-500/50 transition-all hover:-translate-y-1 duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/20 text-yellow-500 mb-6 mx-auto">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{advantage.title}</h3>
                  <p className="text-gray-400 text-center leading-relaxed">{advantage.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Блоки услуг */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Наши услуги
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="block group h-[200px] sm:h-[300px] md:h-[400px] w-full relative overflow-hidden rounded-xl sm:rounded-2xl">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-end">
                    <div className="transform translate-y-0 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-yellow-500 mb-2 sm:mb-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                <Link href="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Преимущества / Features */}
        <section className="py-20 px-4 bg-zinc-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Наши преимущества
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="mt-1 p-2 rounded-full bg-yellow-500/20 text-yellow-500 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">Передовое оборудование</h3>
                      <p className="text-gray-400 leading-relaxed">Уникальное программное обеспечение для прошивки и дооснащения современных авто</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="mt-1 p-2 rounded-full bg-yellow-500/20 text-yellow-500 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">Широкий спектр услуг</h3>
                      <p className="text-gray-400 leading-relaxed">Детейлинг, кузовные работы, ПО, диагностика и многое другое</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="mt-1 p-2 rounded-full bg-yellow-500/20 text-yellow-500 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">Опытная команда</h3>
                      <p className="text-gray-400 leading-relaxed">Профессиональные мастера с многолетним опытом работы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="mt-1 p-2 rounded-full bg-yellow-500/20 text-yellow-500 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">Гарантия качества</h3>
                      <p className="text-gray-400 leading-relaxed">Все работы выполняются с гарантией и строгим контролем качества</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-8 py-6 text-lg">
                    <Link href="/about">Подробнее о нас</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black group">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/888.jpg"
                    alt="T-AUTO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Контакты (краткая версия) */}
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
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-20 bg-black">
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-8 sm:mb-12">Контакты</h2>
              
              <div className="space-y-6 sm:space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">По всем вопросам:</h3>
                  <p className="text-xl text-white">Тел.: <a href="tel:+79160005454" className="hover:text-yellow-500 transition-colors">+7 (916) 000-54-54</a></p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Адрес:</h3>
                  <p className="text-lg text-white leading-relaxed">
                    г. Москва, ул. Удальцова д. 54
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
                  href="https://wa.me/79160005454" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382C17.312 14.302 16.526 13.914 16.378 13.866C16.23 13.818 16.122 13.794 16.014 13.954C15.906 14.114 15.598 14.482 15.506 14.594C15.414 14.706 15.322 14.722 15.162 14.642C15.002 14.562 14.486 14.392 13.874 13.848C13.392 13.418 13.066 12.888 12.974 12.728C12.882 12.568 12.964 12.484 13.044 12.404C13.116 12.332 13.204 12.218 13.284 12.122C13.364 12.026 13.392 11.942 13.446 11.834C13.5 11.726 13.472 11.63 13.432 11.55C13.392 11.47 13.084 10.702 12.956 10.39C12.832 10.086 12.708 10.128 12.624 10.128C12.544 10.128 12.452 10.126 12.36 10.126C12.268 10.126 12.118 10.16 11.992 10.296C11.866 10.432 11.512 10.764 11.512 11.44C11.512 12.116 12.004 12.77 12.072 12.862C12.14 12.954 13.036 14.336 14.408 14.928C15.324 15.322 15.682 15.32 16.066 15.286C16.494 15.248 17.312 14.812 17.482 14.332C17.652 13.852 17.652 13.442 17.602 13.362C17.552 13.282 17.472 13.234 17.312 13.154V14.382ZM12.004 2C6.48 2 2 6.48 2 12C2 13.764 2.458 15.428 3.272 16.892L2 21.536L6.75 20.29C8.162 21.06 9.774 21.492 11.998 21.492H12.004C17.52 21.492 22 17.012 22 12C22 6.48 17.52 2 12.004 2Z" fill="black"/>
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
      </main>

      <Footer />
    </div>
  )
}

