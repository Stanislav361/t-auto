"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Settings, 
  Briefcase, 
  Users, 
  Star,
  Sparkles,
  LogOut,
  Shield
} from "lucide-react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return null
  }

  const menuItems = [
    {
      title: "Услуги",
      description: "Управление услугами компании",
      icon: <Briefcase className="h-8 w-8" />,
      href: "/admin/services",
      color: "bg-blue-500/20 text-blue-500"
    },
    {
      title: "Портфолио",
      description: "Управление работами и проектами",
      icon: <Sparkles className="h-8 w-8" />,
      href: "/admin/portfolio",
      color: "bg-purple-500/20 text-purple-500"
    },
    {
      title: "Команда",
      description: "Управление информацией о сотрудниках",
      icon: <Users className="h-8 w-8" />,
      href: "/admin/team",
      color: "bg-green-500/20 text-green-500"
    },
    {
      title: "Отзывы",
      description: "Управление отзывами клиентов",
      icon: <Star className="h-8 w-8" />,
      href: "/admin/reviews",
      color: "bg-yellow-500/20 text-yellow-500"
    },
  ]

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Shield className="h-10 w-10 text-yellow-500" />
              Админ-панель
            </h1>
            <p className="text-gray-400">Управление контентом сайта</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-white/10 text-white hover:bg-white/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Выйти
          </Button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="bg-zinc-900 border-white/10 p-6 hover:border-yellow-500/50 transition-all hover:-translate-y-1 duration-300 cursor-pointer h-full">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900 border-white/10 p-6">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-gray-400">Услуг</div>
          </Card>
          <Card className="bg-zinc-900 border-white/10 p-6">
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-gray-400">Работ в портфолио</div>
          </Card>
          <Card className="bg-zinc-900 border-white/10 p-6">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-gray-400">Сотрудников</div>
          </Card>
        </div>
      </div>
    </div>
  )
}


