"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Plus, Edit, Trash2, Save, X, Star } from "lucide-react"

interface Review {
  id: number
  name: string
  rating: number
  text: string
}

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<Review>({
    id: 0,
    name: "",
    rating: 5,
    text: ""
  })
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
      return
    }
    fetchReviews()
  }, [router])

  const fetchReviews = async () => {
    const res = await fetch("/api/admin/reviews")
    const data = await res.json()
    setReviews(data)
  }

  const handleEdit = (review: Review) => {
    setEditingId(review.id)
    setFormData(review)
    setIsAdding(false)
  }

  const handleAdd = () => {
    setIsAdding(true)
    setEditingId(null)
    setFormData({
      id: 0,
      name: "",
      rating: 5,
      text: ""
    })
  }

  const handleSave = async () => {
    try {
      if (isAdding) {
        await fetch("/api/admin/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      } else {
        await fetch("/api/admin/reviews", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      }
      setIsAdding(false)
      setEditingId(null)
      fetchReviews()
    } catch (error) {
      console.error("Error saving review:", error)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Удалить этот отзыв?")) return
    try {
      await fetch(`/api/admin/reviews?id=${id}`, { method: "DELETE" })
      fetchReviews()
    } catch (error) {
      console.error("Error deleting review:", error)
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
            <h1 className="text-4xl font-bold text-white">Управление отзывами</h1>
          </div>
          <Button
            onClick={handleAdd}
            className="bg-yellow-500 text-black hover:bg-yellow-400"
          >
            <Plus className="h-4 w-4 mr-2" />
            Добавить отзыв
          </Button>
        </div>

        {isAdding && (
          <Card className="bg-zinc-900 border-white/10 p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Новый отзыв</h2>
            <div className="space-y-4">
              <Input
                placeholder="Имя клиента"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Рейтинг (1-5)
                </label>
                <Input
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="bg-black border-white/10 text-white"
                />
              </div>
              <Textarea
                placeholder="Текст отзыва"
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
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
          {reviews.map((review) => (
            <Card key={review.id} className="bg-zinc-900 border-white/10 p-6">
              {editingId === review.id ? (
                <div className="space-y-4">
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Input
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Textarea
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
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
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{review.name}</h3>
                  <p className="text-gray-400 mb-4 italic">"{review.text}"</p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(review)}
                      variant="outline"
                      className="border-white/10 text-white flex-1"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Редактировать
                    </Button>
                    <Button
                      onClick={() => handleDelete(review.id)}
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


