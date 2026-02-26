"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Award, 
  Zap, 
  Shield,
  CheckCircle2,
  Trophy,
  History
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const team = [
    {
      name: "Осмоловский Иван",
      position: "Руководитель сервиса",
      description: "Опытный специалист с многолетним опытом в области обслуживания автомобилей"
    },
    {
      name: "Купряков Михаил",
      position: "Технический директор",
      description: "Эксперт по программному обеспечению и дооснащению современных авто"
    },
    {
      name: "Филатов Юрий",
      position: "Старший мастер приемщик",
      description: "Профессионал с глубокими знаниями в области диагностики и ремонта"
    },
  ]

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Профессионализм",
      description: "Команда опытных специалистов с многолетним опытом работы"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Инновации",
      description: "Передовое оборудование и уникальное программное обеспечение"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Качество",
      description: "Строгий контроль качества на всех этапах работы"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Индивидуальный подход",
      description: "Решение задач каждого клиента с учетом его потребностей"
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 py-32 overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-background z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 bg-fixed"
            style={{ backgroundImage: "url('/images/OIG4.jpg')" }}
          />
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl">
              <Badge className="bg-yellow-500 text-black border-0 mb-6 px-4 py-1 text-sm font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)]">О нас</Badge>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 drop-shadow-xl">
                T-AUTO
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium max-w-2xl leading-relaxed drop-shadow-md">
                Профессиональная команда, объединившая лучших специалистов для обслуживания вашего автомобиля.
              </p>
            </div>
          </div>
        </section>

        {/* О компании - Main Info */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Кто мы такие
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    <span className="text-yellow-500 font-bold">T-AUTO</span> — это профессиональная команда специалистов, занимающаяся обслуживанием электромобилей, 
                    гибридов и традиционных ДВС автомобилей.
                  </p>
                  <p>
                    Мы используем передовое оборудование для работы с электромобилями и уникальное программное 
                    обеспечение с целью прошивки и дооснащения современных авто.
                  </p>
                  <p>
                    Наша цель — предоставить полный спектр услуг: от сложного ремонта электроники до детейлинга премиум-класса.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">12+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Лет опыта</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">5000+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Клиентов</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Card className="bg-zinc-900 border-white/10 p-10 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    Наши достижения
                  </h3>
                  <ul className="space-y-5">
                    {[
                      "Официальные партнеры ведущих брендов",
                      "Собственная лаборатория диагностики",
                      "Сертифицированные специалисты",
                      "Гарантия на все виды работ"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-300 text-lg">
                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
                {/* Decorative background element */}
                <div className="absolute top-6 right-6 w-full h-full bg-yellow-500/5 rounded-xl -z-0 transform translate-x-6 translate-y-6" />
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="relative py-20 px-4 bg-zinc-900 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/1010.jpg"
              alt="Background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-zinc-900/70" />
          </div>
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-black border-white/10 p-8 text-center hover:border-yellow-500/30 transition-colors group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <div className="text-white group-hover:text-yellow-500 transition-colors">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Наша команда
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="bg-zinc-900 border-white/10 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-zinc-800 to-black mx-auto mb-8 flex items-center justify-center border-2 border-yellow-500/20">
                    <Users className="h-16 w-16 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-yellow-500 font-medium mb-4 text-sm uppercase tracking-wide">{member.position}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                Готовы доверить нам свой автомобиль?
              </h2>
              <p className="text-gray-400 mb-10 relative z-10 max-w-2xl mx-auto text-lg">
                Запишитесь на диагностику или консультацию прямо сейчас. Мы гарантируем профессиональный подход и качество.
              </p>
              <div className="relative z-10">
                <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-10 h-14 text-lg">
                  <a href="tel:+79160005454">Связаться с нами</a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


