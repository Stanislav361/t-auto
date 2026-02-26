import { NextResponse } from "next/server"
import { getTeam } from "@/lib/data-loader"

export async function GET() {
  const team = getTeam()
  return NextResponse.json(team)
}


