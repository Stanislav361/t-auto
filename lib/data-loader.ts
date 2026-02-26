import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "lib", "data")

export function getServices() {
  try {
    const filePath = path.join(dataDir, "services.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error loading services:", error)
    return []
  }
}

export function getPortfolio() {
  try {
    const filePath = path.join(dataDir, "portfolio.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error loading portfolio:", error)
    return []
  }
}

export function getTeam() {
  try {
    const filePath = path.join(dataDir, "team.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error loading team:", error)
    return []
  }
}

export function getReviews() {
  try {
    const filePath = path.join(dataDir, "reviews.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error loading reviews:", error)
    return []
  }
}


