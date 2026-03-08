import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataPath = path.join(process.cwd(), "lib", "data", "portfolio.json")

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, "utf-8")
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newItem = await request.json()
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
    
    const maxId = Math.max(...data.map((item: any) => item.id), 0)
    newItem.id = maxId + 1
    
    data.push(newItem)
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
    
    return NextResponse.json(newItem)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create item" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedItem = await request.json()
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
    
    const index = data.findIndex((item: any) => item.id === updatedItem.id)
    if (index === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 })
    }
    
    data[index] = updatedItem
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
    
    return NextResponse.json(updatedItem)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update item" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get("id") || "0")
    
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
    const filtered = data.filter((item: any) => item.id !== id)
    
    fs.writeFileSync(dataPath, JSON.stringify(filtered, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete item" }, { status: 500 })
  }
}


