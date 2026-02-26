import {
  Sparkles,
  Car,
  Wrench,
  Shield,
  Zap,
  Award,
  Users,
  Droplets,
  Film,
  Volume2
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Car,
  Wrench,
  Shield,
  Zap,
  Award,
  Users,
  Droplets,
  Film,
  Volume2
}

export function getIcon(iconName: string, className: string = "h-8 w-8") {
  const IconComponent = iconMap[iconName] || Sparkles
  return <IconComponent className={className} />
}


