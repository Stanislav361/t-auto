"use client"

import Link from "next/link"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-yellow-500/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* О компании */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Профессиональная команда специалистов, занимающаяся обслуживанием электромобилей, гибридов и традиционных ДВС автомобилей.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Наши работы
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#autoservice" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Автосервис
                </Link>
              </li>
              <li>
                <Link href="/services#carwash" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Автомоечный комплекс
                </Link>
              </li>
              <li>
                <Link href="/services#atelier" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Автоателье
                </Link>
              </li>
              <li>
                <Link href="/services#glass" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  Стекла
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span>Москва. Ул. Удальцова 56</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+79160005454" className="hover:text-yellow-500 transition-colors font-bold">
                  +7 (916) 000-54-54
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span>Ежедневно: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} T-AUTO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

