"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О компании" },
    { href: "/portfolio", label: "Наши работы" },
    { href: "/contacts", label: "Контакты" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-yellow-500 transition-colors uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone & Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="https://t.me/+79160005454" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors group"
                title="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.24 15.51 15.99C15.37 16.73 15.1 16.98 14.84 17C14.27 17.05 13.84 16.62 13.29 16.26C12.43 15.69 11.94 15.34 11.11 14.79C10.15 14.16 10.77 13.81 11.32 13.24C11.46 13.09 13.93 10.84 13.98 10.64C13.98 10.61 13.99 10.5 13.98 10.42C13.97 10.34 13.89 10.31 13.8 10.33C13.67 10.36 11.66 11.69 10.69 12.28C10.69 12.28 10.69 12.28 10.69 12.28C9.8 12.55 8.84 12.53 8.1 12.3C7.2 12.02 6.13 11.72 6.06 11.46C6.02 11.33 6.2 10.99 6.86 10.72C9.96 9.29 12.02 8.4 13.05 8.01C15.5 7.08 16.01 6.92 16.34 6.92C16.41 6.92 16.55 6.94 16.63 7.01C16.7 7.07 16.72 7.17 16.73 7.24C16.73 7.29 16.74 7.56 16.64 8.8Z" fill="black"/>
                </svg>
              </a>
              <a 
                href="https://max.ru/u/f9LHodD0cOJ4zTv4Al45w-dROEV1XkduS0b1B4q1CL8kiBd_9H6i7MtsLok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors group"
                title="Приложение MAX"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" fill="black"/>
                  <text x="12" y="16" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">M</text>
                </svg>
              </a>
            </div>

            <a
              href="tel:+79160005454"
              className="hidden md:flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors font-bold"
            >
              <Phone className="h-4 w-4" />
              <span>+7 (916) 000-54-54</span>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-yellow-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-yellow-500/20 py-4 bg-black">
            <nav className="flex flex-col space-y-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-yellow-500 transition-colors py-2 block border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 py-2 pl-2">
                <a href="https://t.me/+79160005454" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.24 15.51 15.99C15.37 16.73 15.1 16.98 14.84 17C14.27 17.05 13.84 16.62 13.29 16.26C12.43 15.69 11.94 15.34 11.11 14.79C10.15 14.16 10.77 13.81 11.32 13.24C11.46 13.09 13.93 10.84 13.98 10.64C13.98 10.61 13.99 10.5 13.98 10.42C13.97 10.34 13.89 10.31 13.8 10.33C13.67 10.36 11.66 11.69 10.69 12.28C10.69 12.28 10.69 12.28 10.69 12.28C9.8 12.55 8.84 12.53 8.1 12.3C7.2 12.02 6.13 11.72 6.06 11.46C6.02 11.33 6.2 10.99 6.86 10.72C9.96 9.29 12.02 8.4 13.05 8.01C15.5 7.08 16.01 6.92 16.34 6.92C16.41 6.92 16.55 6.94 16.63 7.01C16.7 7.07 16.72 7.17 16.73 7.24C16.73 7.29 16.74 7.56 16.64 8.8Z" fill="black"/>
                  </svg>
                </a>
                <a href="https://max.ru/u/f9LHodD0cOJ4zTv4Al45w-dROEV1XkduS0b1B4q1CL8kiBd_9H6i7MtsLok" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="black"/>
                    <text x="12" y="16" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">M</text>
                  </svg>
                </a>
              </div>
              <a
                href="tel:+79160005454"
                className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors py-2 font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>+7 (916) 000-54-54</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

