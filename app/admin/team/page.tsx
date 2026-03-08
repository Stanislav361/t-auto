"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  position: string
  description: string
}

export default function AdminTeam() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<TeamMember>({
    id: 0,
    name: "",
    position: "",
    description: ""
  })
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
      return
    }
    fetchMembers()
  }, [router])

  const fetchMembers = async () => {
    const res = await fetch("/api/admin/team")
    const data = await res.json()
    setMembers(data)
  }

  const handleEdit = (member: TeamMember) => {
    setEditingId(member.id)
    setFormData(member)
    setIsAdding(false)
  }

  const handleAdd = () => {
    setIsAdding(true)
    setEditingId(null)
    setFormData({
      id: 0,
      name: "",
      position: "",
      description: ""
    })
  }

  const handleSave = async () => {
    try {
      if (isAdding) {
        await fetch("/api/admin/team", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      } else {
        await fetch("/api/admin/team", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
      }
      setIsAdding(false)
      setEditingId(null)
      fetchMembers()
    } catch (error) {
      console.error("Error saving member:", error)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Удалить этого сотрудника?")) return
    try {
      await fetch(`/api/admin/team?id=${id}`, { method: "DELETE" })
      fetchMembers()
    } catch (error) {
      console.error("Error deleting member:", error)
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
            <h1 className="text-4xl font-bold text-white">Управление командой</h1>
          </div>
          <Button
            onClick={handleAdd}
            className="bg-yellow-500 text-black hover:bg-yellow-400"
          >
            <Plus className="h-4 w-4 mr-2" />
            Добавить сотрудника
          </Button>
        </div>

        {isAdding && (
          <Card className="bg-zinc-900 border-white/10 p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Новый сотрудник</h2>
            <div className="space-y-4">
              <Input
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <Input
                placeholder="Должность"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="bg-black border-white/10 text-white"
              />
              <Textarea
                placeholder="Описание"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
          {members.map((member) => (
            <Card key={member.id} className="bg-zinc-900 border-white/10 p-6">
              {editingId === member.id ? (
                <div className="space-y-4">
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Input
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="bg-black border-white/10 text-white"
                  />
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-yellow-500 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-400 mb-4">{member.description}</p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(member)}
                      variant="outline"
                      className="border-white/10 text-white flex-1"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Редактировать
                    </Button>
                    <Button
                      onClick={() => handleDelete(member.id)}
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


