import { NextResponse } from "next/server"
import { getPortfolio } from "@/lib/data-loader"

export async function GET() {
  const portfolio = getPortfolio()
  return NextResponse.json(portfolio)
}


