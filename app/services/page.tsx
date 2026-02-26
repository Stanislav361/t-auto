"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { 
  Sparkles, 
  Car, 
  Shield, 
  Wrench,
  Droplets,
  ShieldCheck,
  Eye,
  Film,
  Palette,
  Settings,
  Zap,
  Volume2,
  Plus,
  Check,
  CircleDot,
  Gauge,
  Disc,
  Snowflake,
  Compass,
  Cog,
  Phone,
  ChevronDown,
  ChevronRight,
  Clock,
  Scissors,
  GlassWater
} from "lucide-react"

interface ServiceItem {
  name: string
  price: string
}

interface ServiceCategory {
  icon: React.ReactNode
  title: string
  description: string
  items: ServiceItem[]
}

type TabType = 'autoservice' | 'carwash' | 'atelier' | 'glass' | 'coming'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('autoservice')
  const [openCategory, setOpenCategory] = useState<number | null>(null)

  // ===== 1) АВТОСЕРВИС =====
  const autoservices: ServiceCategory[] = [
    {
      icon: <Droplets className="h-7 w-7" />,
      title: "Жидкости и фильтры",
      description: "Замена масла, антифриза, тормозной жидкости, фильтров",
      items: [
        { name: "Замена масла и масляного фильтра двигателя", price: "от 2 390 ₽" },
        { name: "Замена воздушного фильтра", price: "от 1 190 ₽" },
        { name: "Замена салонного фильтра", price: "от 1 190 ₽" },
        { name: "Замена тормозной жидкости", price: "от 2 690 ₽" },
        { name: "Аппаратная замена охлаждающей жидкости", price: "от 2 690 ₽" },
        { name: "Аппаратная замена охлаждающей жидкости с промывкой системы", price: "от 3 590 ₽" },
        { name: "Аппаратная замена жидкости ГУР", price: "от 2 590 ₽" },
        { name: "Аппаратная замена масла в АКПП без снятия поддона", price: "от 4 790 ₽" },
        { name: "Аппаратная замена масла в АКПП со снятием поддона", price: "от 5 790 ₽" },
        { name: "Замена масла в МКПП", price: "от 2 490 ₽" },
        { name: "Замена масла в переднем редукторе", price: "от 2 590 ₽" },
        { name: "Замена масла в заднем редукторе", price: "от 2 590 ₽" },
        { name: "Замена масла раздаточной коробки", price: "от 2 590 ₽" },
        { name: "Аппаратная замена жидкости вариатора (без снятия поддона)", price: "от 4 790 ₽" },
        { name: "Аппаратная замена масла в Вариаторе со снятия поддона", price: "от 5 790 ₽" },
        { name: "Смазка шлицевых соединений и крестовин карданного вала", price: "от 2 350 ₽" },
      ]
    },
    {
      icon: <CircleDot className="h-7 w-7" />,
      title: "Ходовая часть",
      description: "Диагностика и ремонт подвески, замена амортизаторов, пружин",
      items: [
        { name: "Диагностика ходовой части", price: "от 1 690 ₽" },
        { name: "ScanFIT-DS7 - комплексная диагностика ходовой части", price: "от 3 590 ₽" },
        { name: "Замена амортизаторов передней подвески (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замена пружины/рессоры подвески (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замены опоры стойки/амортизатора (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замена пыльника/отбойника амортизатора (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замена подшипника ступицы передней оси", price: "от 3 890 ₽" },
        { name: "Замена ШРУСа приводного вала оси", price: "от 4 190 ₽" },
        { name: "Замена пыльника ШРУСа приводного вала оси", price: "от 4 090 ₽" },
        { name: "Технический осмотр транспортного средства", price: "от 1 238 ₽" },
        { name: "Замена амортизаторов задней подвески (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замена подшипника ступицы задней оси", price: "от 3 890 ₽" },
      ]
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Двигатель",
      description: "Диагностика, ремонт и обслуживание двигателя",
      items: [
        { name: "MotorFIT - диагностика ДВС и электронных систем", price: "от 3 890 ₽" },
        { name: "MotorFIT + - расширенная диагностика ДВС", price: "от 4 990 ₽" },
        { name: "DieselFIT - диагностика дизельного двигателя", price: "от 3 590 ₽" },
        { name: "Прочистка дроссельной заслонки - ДВС до 2.4 л", price: "от 3 790 ₽" },
        { name: "Прочистка дроссельной заслонки - ДВС свыше 2.4 л", price: "от 4 290 ₽" },
        { name: "Аппаратная прочистка форсунок - ДВС до 2.4 л", price: "от 3 990 ₽" },
        { name: "Аппаратная прочистка форсунок - ДВС свыше 2.4 л", price: "от 4 490 ₽" },
      ]
    },
    {
      icon: <Gauge className="h-7 w-7" />,
      title: "Рулевое управление",
      description: "Ремонт и обслуживание рулевой системы",
      items: [
        { name: "Диагностика рулевого управления", price: "от 1 000 ₽" },
        { name: "Замена рулевого наконечника", price: "от 1 500 ₽" },
        { name: "Замена рулевой тяги", price: "от 2 000 ₽" },
        { name: "Замена рулевой рейки", price: "от 8 000 ₽" },
        { name: "Ремонт рулевой рейки", price: "от 6 000 ₽" },
        { name: "Замена жидкости ГУР", price: "от 1 500 ₽" },
        { name: "Замена насоса ГУР", price: "от 4 000 ₽" },
      ]
    },
    {
      icon: <Disc className="h-7 w-7" />,
      title: "Тормозная система",
      description: "Замена тормозных колодок, дисков, суппортов",
      items: [
        { name: "Диагностика тормозной системы", price: "от 1 790 ₽" },
        { name: "Замена тормозной жидкости", price: "от 2 690 ₽" },
        { name: "Замена тормозных колодок (передняя ось)", price: "от 2 990 ₽" },
        { name: "Замена тормозных колодок (задняя ось)", price: "от 2 990 ₽" },
        { name: "Замена задних тормозных барабанных колодок", price: "от 3 690 ₽" },
        { name: "Замена тормозных дисков задней оси", price: "от 3 590 ₽" },
        { name: "Замена тормозного суппорта", price: "от 2 790 ₽" },
        { name: "Проточка тормозных дисков", price: "от 4 190 ₽" },
      ]
    },
    {
      icon: <Snowflake className="h-7 w-7" />,
      title: "Система кондиционирования",
      description: "Заправка, диагностика и ремонт кондиционера",
      items: [
        { name: "Диагностика системы кондиционирования", price: "от 1 000 ₽" },
        { name: "Заправка кондиционера", price: "от 3 000 ₽" },
        { name: "Замена компрессора кондиционера", price: "от 5 000 ₽" },
        { name: "Замена радиатора кондиционера", price: "от 4 000 ₽" },
        { name: "Чистка испарителя кондиционера", price: "от 2 500 ₽" },
        { name: "Замена фильтра-осушителя", price: "от 2 000 ₽" },
      ]
    },
    {
      icon: <Compass className="h-7 w-7" />,
      title: "Углы установки колес",
      description: "Развал-схождение на современном 3D-стенде",
      items: [
        { name: "Развал-схождение (передняя ось)", price: "от 2 500 ₽" },
        { name: "Развал-схождение (задняя ось)", price: "от 2 500 ₽" },
        { name: "Полный развал-схождение (обе оси)", price: "от 4 000 ₽" },
        { name: "3D-диагностика углов установки колес", price: "от 1 500 ₽" },
      ]
    },
    {
      icon: <Cog className="h-7 w-7" />,
      title: "Трансмиссия",
      description: "Ремонт и обслуживание КПП, сцепления, приводов",
      items: [
        { name: "Диагностика трансмиссии", price: "от 1 500 ₽" },
        { name: "Замена масла в МКПП", price: "от 2 000 ₽" },
        { name: "Замена масла в АКПП (частичная)", price: "от 3 500 ₽" },
        { name: "Замена масла в АКПП (полная)", price: "от 6 000 ₽" },
        { name: "Замена сцепления", price: "от 8 000 ₽" },
        { name: "Замена ШРУСа", price: "от 3 000 ₽" },
        { name: "Замена карданного вала", price: "от 5 000 ₽" },
      ]
    },
    {
      icon: <Car className="h-7 w-7" />,
      title: "Кузовной ремонт",
      description: "Покраска, рихтовка, восстановление кузова",
      items: [
        { name: "Покраска одного элемента", price: "от 8 000 ₽" },
        { name: "Локальная покраска", price: "от 5 000 ₽" },
        { name: "Рихтовка кузовного элемента", price: "от 3 000 ₽" },
        { name: "Удаление вмятин без покраски (PDR)", price: "от 3 000 ₽" },
        { name: "Полировка кузова", price: "от 5 000 ₽" },
        { name: "Антикоррозийная обработка", price: "от 8 000 ₽" },
        { name: "Восстановление геометрии кузова", price: "от 15 000 ₽" },
      ]
    },
  ]

  // ===== 2) АВТОМОЕЧНЫЙ КОМПЛЕКС =====
  const carwashServices = [
    { name: "Комплексная мойка кузова", price: "От 1 500 ₽", icon: <Droplets className="h-5 w-5" /> },
    { name: "Мойка двигателя", price: "От 3 000 ₽", icon: <Settings className="h-5 w-5" /> },
    { name: "Химчистка салона", price: "От 8 000 ₽", icon: <Sparkles className="h-5 w-5" /> },
    { name: "Полировка кузова", price: "От 5 000 ₽", icon: <ShieldCheck className="h-5 w-5" /> },
    { name: "Керамика кузова", price: "От 20 000 ₽", icon: <Shield className="h-5 w-5" /> },
    { name: "Антидождь", price: "От 8 000 ₽", icon: <GlassWater className="h-5 w-5" /> },
    { name: "Чернение резины", price: "От 500 ₽", icon: <CircleDot className="h-5 w-5" /> },
    { name: "Уборка салона", price: "От 2 000 ₽", icon: <Car className="h-5 w-5" /> },
  ]

  // ===== 3) АВТОАТЕЛЬЕ =====
  const atelierServices = [
    // Перетяжка
    { name: "Перетяжка салона", price: "От 60 000 ₽", icon: <Scissors className="h-5 w-5" /> },
    { name: "Перетяжка руля", price: "От 8 000 ₽", icon: <Compass className="h-5 w-5" /> },
    { name: "Перетяжка сидений", price: "От 25 000 ₽", icon: <Car className="h-5 w-5" /> },
    { name: "Перетяжка торпедо", price: "От 35 000 ₽", icon: <Settings className="h-5 w-5" /> },
    { name: "Перетяжка подлокотника", price: "От 5 000 ₽", icon: <Wrench className="h-5 w-5" /> },
    { name: "Перетяжка дверей", price: "От 20 000 ₽", icon: <Film className="h-5 w-5" /> },
    { name: "Перетяжка детского автокресла", price: "От 10 000 ₽", icon: <ShieldCheck className="h-5 w-5" /> },
    { name: "Перетяжка ручки КПП", price: "От 3 000 ₽", icon: <Cog className="h-5 w-5" /> },
    // Ремонт
    { name: "Ремонт сидений", price: "От 5 000 ₽", icon: <Wrench className="h-5 w-5" /> },
    { name: "Ремонт обогрева сидений", price: "От 5 000 ₽", icon: <Zap className="h-5 w-5" /> },
    // Покраска салона
    { name: "Покраска салона", price: "От 15 000 ₽", icon: <Palette className="h-5 w-5" /> },
    { name: "Покраска сидений", price: "От 8 000 ₽", icon: <Palette className="h-5 w-5" /> },
  ]

  // ===== 4) СТЕКЛА =====
  const glassServices = [
    // Замена автостекол
    { name: "Замена лобового стекла", price: "От 5 490 ₽", icon: <Shield className="h-5 w-5" /> },
    { name: "Замена заднего стекла", price: "От 5 490 ₽", icon: <Shield className="h-5 w-5" /> },
    { name: "Замена бокового стекла", price: "От 5 880 ₽", icon: <Shield className="h-5 w-5" /> },
    // Ремонт автостекол
    { name: "Ремонт сколов лобового стекла", price: "От 2 500 ₽", icon: <Wrench className="h-5 w-5" /> },
    { name: "Ремонт трещин лобового стекла", price: "От 3 500 ₽", icon: <Wrench className="h-5 w-5" /> },
    // Бронирование
    { name: "Бронирование лобового стекла", price: "От 40 000 ₽", icon: <ShieldCheck className="h-5 w-5" /> },
    { name: "Бронирование передней оптики", price: "От 12 000 ₽", icon: <Eye className="h-5 w-5" /> },
    // Тонирование
    { name: "Тонирование стекол", price: "Цена уточняется", icon: <Film className="h-5 w-5" /> },
    // Доп. услуги
    { name: "Нанесение Антидождь", price: "От 8 000 ₽", icon: <Droplets className="h-5 w-5" /> },
    { name: "Калибровка камеры ADAS", price: "Цена уточняется", icon: <Settings className="h-5 w-5" /> },
    { name: "Оклейка стекол пленкой", price: "От 15 000 ₽", icon: <Film className="h-5 w-5" /> },
  ]

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  const tabs = [
    { id: 'autoservice' as TabType, label: 'Автосервис', icon: <Wrench className="mr-2 h-5 w-5" /> },
    { id: 'carwash' as TabType, label: 'Автомоечный комплекс', icon: <Droplets className="mr-2 h-5 w-5" /> },
    { id: 'atelier' as TabType, label: 'Автоателье', icon: <Scissors className="mr-2 h-5 w-5" /> },
    { id: 'glass' as TabType, label: 'Стекла', icon: <Shield className="mr-2 h-5 w-5" /> },
    { id: 'coming' as TabType, label: 'Скоро открытие', icon: <Clock className="mr-2 h-5 w-5" /> },
  ]

  const SimpleServiceCard = ({ name, price, icon }: { name: string; price: string; icon: React.ReactNode }) => (
    <Card className="bg-zinc-900 border-white/10 p-6 hover:border-yellow-500/50 hover:bg-black transition-all group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="text-gray-400 group-hover:text-yellow-500 transition-colors">
          {icon}
        </div>
        <Badge className="bg-white/5 text-white border-white/10 group-hover:bg-yellow-500/20 group-hover:text-yellow-500 group-hover:border-yellow-500/20 transition-all">
          {price}
        </Badge>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">{name}</h3>
      <div className="flex items-center gap-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
        <Check className="h-4 w-4" />
        <span>Доступно для записи</span>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 py-12 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-background" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 bg-fixed"
            style={{ backgroundImage: "url('/images/photo_2026-02-19_11-58-11.jpg')" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,204,0,0.05),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-8">
                Наши услуги
              </h1>
              <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-6 sm:mb-10">
                Полный спектр услуг по обслуживанию, ремонту и защите вашего автомобиля. 5 направлений — одна команда.
              </p>

              {/* Tabs Switcher — 5 направлений */}
              <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setOpenCategory(null) }}
                    className={`text-xs lg:text-sm px-3 lg:px-5 py-4 lg:py-5 rounded-xl transition-all whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-yellow-500 text-black hover:bg-yellow-400 font-bold'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">

          {/* ===== 1) АВТОСЕРВИС ===== */}
          {activeTab === 'autoservice' && (
            <section className="py-16 px-4">
              <div className="container mx-auto max-w-5xl">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                    <Wrench className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Автосервис</h2>
                    <p className="text-gray-400 mt-1 text-lg">Полное техническое обслуживание и ремонт</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {autoservices.map((service, index) => (
                    <Card
                      key={index}
                      className={`bg-zinc-900 border-white/10 overflow-hidden transition-all duration-300 ${openCategory === index ? 'border-yellow-500/50 shadow-[0_0_20px_rgba(250,204,21,0.1)]' : 'hover:border-white/20'}`}
                    >
                      <button
                        onClick={() => toggleCategory(index)}
                        className="w-full p-4 sm:p-6 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${openCategory === index ? 'bg-yellow-500 text-black' : 'bg-yellow-500/20 text-yellow-500 group-hover:bg-yellow-500/30'}`}>
                            {service.icon}
                          </div>
                          <div className="min-w-0">
                            <h3 className={`text-base sm:text-xl font-bold transition-colors truncate ${openCategory === index ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'}`}>
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 hidden sm:block">{service.description}</p>
                          </div>
                        </div>
                        <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openCategory === index ? 'rotate-180 text-yellow-500' : ''}`} />
                      </button>
                      
                      {openCategory === index && (
                        <div className="px-3 sm:px-6 pb-4 sm:pb-6 animate-in slide-in-from-top-2 duration-300">
                          <div className="border-t border-white/10 pt-4">
                            <div className="hidden sm:flex items-center justify-between px-4 py-2 mb-2">
                              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Услуга</span>
                              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Цена</span>
                            </div>
                            <div className="space-y-1">
                              {service.items.map((item, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between px-2 sm:px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                    <ChevronRight className="h-4 w-4 text-yellow-500/50 group-hover/item:text-yellow-500 transition-colors flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-white group-hover/item:text-yellow-500 transition-colors">{item.name}</span>
                                  </div>
                                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 font-bold ml-6 sm:ml-4 mt-1 sm:mt-0 flex-shrink-0 w-fit text-xs sm:text-sm">
                                    {item.price}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                              <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold flex-1">
                                <Link href="/contacts">Записаться на ремонт</Link>
                              </Button>
                              <Button asChild variant="outline" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 flex-1">
                                <a href="tel:+79160005454">
                                  <Phone className="h-4 w-4 mr-2" />
                                  Позвонить
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ===== 2) АВТОМОЕЧНЫЙ КОМПЛЕКС ===== */}
          {activeTab === 'carwash' && (
            <section className="py-16 px-4">
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <Droplets className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Автомоечный комплекс</h2>
                      <p className="text-gray-400 mt-2 text-lg">Комплексная мойка, химчистка и уход за автомобилем</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="lg" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 w-fit">
                    <Link href="/contacts">Записаться</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {carwashServices.map((service, index) => (
                    <SimpleServiceCard key={index} {...service} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ===== 3) АВТОАТЕЛЬЕ ===== */}
          {activeTab === 'atelier' && (
            <section className="py-16 px-4">
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <Scissors className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Автоателье</h2>
                      <p className="text-gray-400 mt-2 text-lg">Перетяжка салона, ремонт сидений, покраска элементов интерьера</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="lg" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 w-fit">
                    <Link href="/contacts">Записаться</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {atelierServices.map((service, index) => (
                    <SimpleServiceCard key={index} {...service} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ===== 4) СТЕКЛА ===== */}
          {activeTab === 'glass' && (
            <section className="py-16 px-4">
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Стекла</h2>
                      <p className="text-gray-400 mt-2 text-lg">Замена, ремонт, бронирование и тонирование автостекол</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="lg" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 w-fit">
                    <Link href="/contacts">Записаться</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {glassServices.map((service, index) => (
                    <SimpleServiceCard key={index} {...service} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ===== 5) СКОРО ОТКРЫТИЕ ===== */}
          {activeTab === 'coming' && (
            <section className="py-24 px-4">
              <div className="container mx-auto max-w-3xl text-center">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Clock className="h-12 w-12 text-yellow-500" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Скоро открытие
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  Мы готовим для вас новое направление. Следите за обновлениями — скоро здесь появится что-то интересное!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-8 py-6 text-lg">
                    <a href="tel:+79160005454">
                      <Phone className="h-5 w-5 mr-2" />
                      Узнать подробнее
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 px-8 py-6 text-lg">
                    <Link href="/contacts">Оставить заявку</Link>
                  </Button>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 border-yellow-500/30 p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,204,0,0.1),transparent_70%)]" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Не нашли нужную услугу?
                </h2>
                <p className="text-gray-300 mb-10 text-lg">
                  Свяжитесь с нами для индивидуальной консультации. Мы готовы решить любую задачу, связанную с вашим автомобилем.
                </p>
                <a
                  href="tel:+79160005454"
                  className="inline-flex items-center gap-3 bg-yellow-500 text-black px-10 py-5 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 text-lg"
                >
                  <span>Позвонить +7 (916) 000-54-54</span>
                </a>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
