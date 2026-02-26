"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from "lucide-react"

interface PortfolioItem {
  id: number
  category: string
  title: string
  description: string
  tags: string[]
  image: string
  icon: string
}

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<PortfolioItem>({
    id: 0,
    category: "",
    title: "",
    description: "",
    tags: [],
    image: "",
    icon: ""
  })
  const [tagsInput, setTagsInput] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
      return
    }
    fetchItems()
  }, [router])

  const fetchItems = async () => {
    const res = await fetch("/api/admin/portfolio")
    const data = await res.json()
    setItems(data)
  }

  const handleEdit = (item: PortfolioItem) => {
    setEditingId(item.id)
    setFormData(item)
    setTagsInput(item.tags.join(", "))
    setIsAdding(false)
  }

  const handleAdd = () => {
    setIsAdding(true)
    setEditingId(null)
    setFormData({
      id: 0,
      category: "",
      title: "",
      description: "",
      tags: [],
      image: "",
      icon: ""
    })
    setTagsInput("")
  }

  const handleSave = async () => {
    const tags = tagsInput.split(",").map(tag => tag.trim()).filter(tag => tag)
    const dataToSave = { ...formData, tags }
    
    try {
      if (isAdding) {
        await fetch("/api/admin/portfolio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSave)
        })
      } else {
        await fetch("/api/admin/portfolio", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSave)
        })
      }
      setIsAdding(false)
      setEditingId(null)
      fetchItems()
    } catch (error) {
      console.error("Error saving item:", error)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Удалить эту работу?")) return
    try {
      await fetch(`/api/admin/portfolio?id=${id}`, { method: "DELETE" })
      fetchItems()
    } catch (error) {
      console.error("Error deleting item:", error)
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
            <h1 className="text-4xl font-bold text-white">Управление портфолио</h1>
          </div>
          <Button
            onClick={handleAdd}
            className="bg-yellow-500 text-black hover:bg-yellow-400"
          >
            <Plus className="h-4 w-4 mr-2" />
            Добавить работу
          </Button>
        </div>

        {isAdding && (
          <Card className="bg-zinc-900 border-white/10 p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Новая работа</h2>
            <div className="space-y-4">
              <Input
                placeholder="Категория"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
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
                placeholder="Теги (через запятую)"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="bg-black border-white/10 text-white"
              />
              <Input
                placeholder="Путь к изображению"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <Input
                placeholder="Иконка"
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
          {items.map((item) => (
            <Card key={item.id} className="bg-zinc-900 border-white/10 p-6">
              {editingId === item.id ? (
                <div className="space-y-4">
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
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
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
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
                  <div className="text-yellow-500 text-sm mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <div>Изображение: {item.image}</div>
                    <div>Иконка: {item.icon}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(item)}
                      variant="outline"
                      className="border-white/10 text-white flex-1"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Редактировать
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
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


