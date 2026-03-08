import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataPath = path.join(process.cwd(), "lib", "data", "services.json")

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
    const newService = await request.json()
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
    
    const maxId = Math.max(...data.map((item: any) => item.id), 0)
    newService.id = maxId + 1
    
    data.push(newService)
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
    
    return NextResponse.json(newService)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedService = await request.json()
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
    
    const index = data.findIndex((item: any) => item.id === updatedService.id)
    if (index === -1) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }
    
    data[index] = updatedService
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
    
    return NextResponse.json(updatedService)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 })
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
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 })
  }
}


