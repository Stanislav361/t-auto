"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Простая аутентификация (в продакшене использовать более безопасный метод)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminAuth", "true")
      router.push("/admin")
    } else {
      setError("Неверный логин или пароль")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md p-8 bg-zinc-900 border-white/10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Shield className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Админ-панель</h1>
          <p className="text-gray-400">Войдите для управления контентом</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Логин
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-black border-white/10 text-white"
              placeholder="Введите логин"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Пароль
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border-white/10 text-white"
              placeholder="Введите пароль"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold h-12"
          >
            Войти
          </Button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>По умолчанию: admin / admin123</p>
        </div>
      </Card>
    </div>
  )
}


