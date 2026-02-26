"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { 
  Droplets,
  CircleDot,
  Settings,
  Gauge,
  Disc,
  Snowflake,
  Compass,
  Cog,
  Car,
  Wrench,
  ChevronDown,
  ChevronRight,
  Phone
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

export default function AutoservicePage() {
  const [openCategory, setOpenCategory] = useState<number | null>(null)

  const services: ServiceCategory[] = [
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
      description: "Диагностика и ремонт подвески, замена амортизаторов, пружин, сайлентблоков",
      items: [
        { name: "Диагностика ходовой части", price: "от 1 690 ₽" },
        { name: "ScanFIT-DS7 - комплексная диагностика ходовой части", price: "от 3 590 ₽" },
        { name: "Замена амортизаторов передней подвески (за 1 ось) (легковой автомобиль)", price: "от 7 580 ₽" },
        { name: "Замена амортизаторов передней подвески (за 1 ось) (кроссовер, минивэн)", price: "от 7 980 ₽" },
        { name: "Замена амортизаторов передней подвески (за 1 ось) (внедорожник, микроавтобус)", price: "от 9 380 ₽" },
        { name: "Замена амортизаторов передней подвески (за 1 ось) (мелкокоммерческий транспорт)", price: "от 10 980 ₽" },
        { name: "Замена пружины/рессоры подвески (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замена амортизатора передней подвески сложной конструкции (за 1 ось)", price: "от 9 980 ₽" },
        { name: "Замены опоры стойки/амортизатора (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замены опоры стойки/амортизатора (сложная конструкция) (за 1 ось)", price: "от 11 580 ₽" },
        { name: "Замена пыльника/отбойника амортизатора (за 1 ось)", price: "от 7 580 ₽" },
        { name: "Замена пыльника/отбойника амортизатора (сложная конструкция) (за 1 ось)", price: "от 11 580 ₽" },
        { name: "Замена подшипника левой ступицы передней оси (легковой автомобиль)", price: "от 3 890 ₽" },
        { name: "Замена подшипника правой ступицы передней оси", price: "от 3 890 ₽" },
        { name: "Замена подшипника левой ступицы передней оси (кроссовер, минивэн)", price: "от 3 990 ₽" },
        { name: "Замена ШРУСа приводного вала оси", price: "от 4 190 ₽" },
        { name: "Замена пыльника ШРУСа приводного вала оси", price: "от 4 090 ₽" },
        { name: "Замена пыльника внутреннего ШРУСа", price: "от 4 090 ₽" },
        { name: "Технический осмотр транспортного средства", price: "от 1 238 ₽" },
        { name: "Замена амортизаторов задней подвески (за 1 ось) (легковой автомобиль)", price: "от 7 580 ₽" },
        { name: "Замена амортизаторов задней подвески (за 1 ось) (кроссовер, минивэн)", price: "от 7 980 ₽" },
        { name: "Замена амортизаторов задней подвески (за 1 ось) (внедорожник, микроавтобус)", price: "от 9 380 ₽" },
        { name: "Замена амортизаторов задней подвески (за 1 ось) (мелкокоммерческий транспорт)", price: "от 10 980 ₽" },
        { name: "Замена подшипника левой ступицы задней оси (легковой автомобиль)", price: "от 3 890 ₽" },
        { name: "Замена подшипников ступицы задней оси (оба)", price: "от 7 780 ₽" },
        { name: "Замена подшипника левой ступицы задней оси (внедорожник, микроавтобус)", price: "от 4 190 ₽" },
      ]
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Двигатель",
      description: "Диагностика, ремонт и обслуживание двигателя",
      items: [
        { name: "MotorFIT - диагностика ДВС и электронных систем", price: "от 3 890 ₽" },
        { name: "MotorFIT + - расширенная диагностика ДВС и электронных систем", price: "от 4 990 ₽" },
        { name: "DieselFIT - диагностика дизельного двигателя и электронных систем", price: "от 3 590 ₽" },
        { name: "Прочистка дроссельной заслонки - ДВС до 2.4 л (включительно)", price: "от 3 790 ₽" },
        { name: "Прочистка дроссельной заслонки - ДВС свыше 2.4 л (включительно)", price: "от 4 290 ₽" },
        { name: "Аппаратная прочистка форсунок - ДВС до 2.4 л (включительно)", price: "от 3 990 ₽" },
        { name: "Аппаратная прочистка форсунок - ДВС свыше 2.4 л (включительно)", price: "от 4 490 ₽" },
        { name: "Замена масла и масляного фильтра двигателя", price: "от 2 390 ₽" },
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
        { name: "Замена тормозных дисковых колодок (передняя ось)", price: "от 2 990 ₽" },
        { name: "Замена тормозных дисковых колодок (задняя ось)", price: "от 2 990 ₽" },
        { name: "Замена задних тормозных барабанных колодок", price: "от 3 690 ₽" },
        { name: "Замена тормозных дисков задней оси (легковой автомобиль, кроссовер, минивэн)", price: "от 3 590 ₽" },
        { name: "Замена тормозных дисков задней оси (внедорожник, мелкокоммерческий транспорт)", price: "от 3 990 ₽" },
        { name: "Замена заднего левого тормозного суппорта", price: "от 2 790 ₽" },
        { name: "Замена заднего левого тормозного шланга", price: "от 2 690 ₽" },
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
        { name: "Замена пыльника ШРУСа", price: "от 2 000 ₽" },
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

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-background" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: "url('/images/photo_2026-02-19_11-59-34.jpg')" }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 mb-6 px-4 py-1 text-sm">Автосервис</Badge>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
                Автосервис
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Полный спектр услуг по ремонту и обслуживанию автомобилей. Профессиональная диагностика, качественные запчасти и гарантия на все виды работ.
              </p>
            </div>
          </div>
        </section>

        {/* Services Accordion */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Цены на услуги автосервиса
            </h2>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`bg-zinc-900 border-white/10 overflow-hidden transition-all duration-300 ${openCategory === index ? 'border-yellow-500/50 shadow-[0_0_20px_rgba(250,204,21,0.1)]' : 'hover:border-white/20'}`}
                >
                  {/* Category Header - Clickable */}
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full p-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${openCategory === index ? 'bg-yellow-500 text-black' : 'bg-yellow-500/20 text-yellow-500 group-hover:bg-yellow-500/30'}`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold transition-colors ${openCategory === index ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'}`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 hidden sm:block">{service.description}</p>
                      </div>
                    </div>
                    
                    <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openCategory === index ? 'rotate-180 text-yellow-500' : ''}`} />
                  </button>
                  
                  {/* Expanded Content - Services List with Prices */}
                  {openCategory === index && (
                    <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="border-t border-white/10 pt-4">
                        {/* Table Header */}
                        <div className="flex items-center justify-between px-4 py-2 mb-2">
                          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Услуга</span>
                          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Цена</span>
                        </div>
                        
                        {/* Service Items */}
                        <div className="space-y-1">
                          {service.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="flex items-center gap-3">
                                <ChevronRight className="h-4 w-4 text-yellow-500/50 group-hover/item:text-yellow-500 transition-colors flex-shrink-0" />
                                <span className="text-white group-hover/item:text-yellow-500 transition-colors">{item.name}</span>
                              </div>
                              <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 font-bold ml-4 flex-shrink-0">
                                {item.price}
                              </Badge>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA Button */}
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 border-yellow-500/30 p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,204,0,0.1),transparent_70%)]" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <Wrench className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Нужна диагностика?
                </h2>
                <p className="text-gray-300 mb-10 text-lg">
                  Запишитесь на бесплатную диагностику вашего автомобиля. Мы выявим все неисправности и предложим оптимальное решение.
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
