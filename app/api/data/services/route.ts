import { NextResponse } from "next/server"
import { getServices } from "@/lib/data-loader"

export async function GET() {
  const services = getServices()
  return NextResponse.json(services)
}


