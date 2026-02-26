"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  href: string
  image: string
  icon: string
}

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<Service>({
    id: 0,
    title: "",
    description: "",
    href: "",
    image: "",
    icon: ""
  })
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
      return
    }
    fetchServices()
  }, [router])

  const fetchServices = async () => {
    const res = await fetch("/api/admin/services")
    const data = await res.json()
    setServices(data)
  }

  const handleEdit = (service: Service) => {
    setEditingId(service.id)
    setFormData(service)
    setIsAdding(false)
  }

  const handleAdd = () => {
    setIsAdding(true)
    setEditingId(null)
    setFormData({
      id: 0,
      title: "",
      description: "",
      href: "",
      image: "",
      icon: ""
    })
  }

  const handleSave = async () => {
    try {
      if (isAdding) {
        await fetch("/api/admin/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      } else {
        await fetch("/api/admin/services", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      }
      setIsAdding(false)
      setEditingId(null)
      fetchServices()
    } catch (error) {
      console.error("Error saving service:", error)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Удалить эту услугу?")) return
    try {
      await fetch(`/api/admin/services?id=${id}`, { method: "DELETE" })
      fetchServices()
    } catch (error) {
      console.error("Error deleting service:", error)
    }
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="outline" className="border-white/10 text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">Управление услугами</h1>
          </div>
          <Button
            onClick={handleAdd}
            className="bg-yellow-500 text-black hover:bg-yellow-400"
          >
            <Plus className="h-4 w-4 mr-2" />
            Добавить услугу
          </Button>
        </div>

        {isAdding && (
          <Card className="bg-zinc-900 border-white/10 p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Новая услуга</h2>
            <div className="space-y-4">
              <Input
                placeholder="Название"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <Textarea
                placeholder="Описание"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <Input
                placeholder="Ссылка (например: /services#detailing)"
                value={formData.href}
                onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <Input
                placeholder="Путь к изображению (например: /images/2.jpg)"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <Input
                placeholder="Иконка (например: Sparkles, Car, Shield)"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <div className="flex gap-2">
                <Button onClick={handleSave} className="bg-yellow-500 text-black">
                  <Save className="h-4 w-4 mr-2" />
                  Сохранить
                </Button>
                <Button onClick={handleCancel} variant="outline" className="border-white/10 text-white">
                  <X className="h-4 w-4 mr-2" />
                  Отмена
                </Button>
              </div>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="bg-zinc-900 border-white/10 p-6">
              {editingId === service.id ? (
                <div className="space-y-4">
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Input
                    value={formData.href}
                    onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Input
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="bg-yellow-500 text-black">
                      <Save className="h-4 w-4 mr-2" />
                      Сохранить
                    </Button>
                    <Button onClick={handleCancel} variant="outline" className="border-white/10 text-white">
                      <X className="h-4 w-4 mr-2" />
                      Отмена
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <div>Ссылка: {service.href}</div>
                    <div>Изображение: {service.image}</div>
                    <div>Иконка: {service.icon}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(service)}
                      variant="outline"
                      className="border-white/10 text-white flex-1"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Редактировать
                    </Button>
                    <Button
                      onClick={() => handleDelete(service.id)}
                      variant="outline"
                      className="border-red-500/50 text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


