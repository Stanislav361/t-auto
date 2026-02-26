"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Power } from "lucide-react"
import { Logo } from "@/components/logo"

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [needsInteraction, setNeedsInteraction] = useState(false)
  const [isStarting, setIsStarting] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio instance
    audioRef.current = new Audio('/sounds/bmw-zvuk-motora-s-turbinami-v8.mp3')
    audioRef.current.volume = 0.9

    // Try autoplay immediately
    const playPromise = audioRef.current.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started!
          setIsStarting(true)
          startTimer()
        })
        .catch((error) => {
          // Autoplay was prevented. Show start button.
          console.log("Autoplay prevented:", error)
          setNeedsInteraction(true)
        })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const startTimer = () => {
    setTimeout(() => {
      onComplete()
    }, 3500) // Match sound length
  }

  const handleStart = () => {
    if (audioRef.current) {
      setNeedsInteraction(false)
      setIsStarting(true)
      audioRef.current.play()
        .then(() => {
          startTimer()
        })
        .catch(e => console.error("Play failed:", e))
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]">
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        
        {/* Start Button Overlay - Only if autoplay failed */}
        {needsInteraction && !isStarting && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <motion.button
              onClick={handleStart}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center"
            >
              <div className="relative w-24 h-24 rounded-full bg-zinc-900 border-4 border-yellow-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)] group-hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] transition-shadow duration-300">
                <Power className="w-10 h-10 text-yellow-500 group-hover:text-yellow-400" />
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border border-yellow-500/30 animate-ping" />
              </div>
              <span className="mt-4 text-yellow-500 font-bold tracking-widest text-sm uppercase">
                Запустить двигатель
              </span>
            </motion.button>
          </div>
        )}

        {/* Animated Rings - Yellow Theme */}
        <motion.div
          className="absolute h-96 w-96 rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-[0_0_60px_rgba(250,204,21,0.6)]"
          animate={isStarting ? { 
            scale: [1, 1.05, 1], 
            opacity: [1, 0.9, 1],
            boxShadow: [
              "0 0 60px rgba(250,204,21,0.6)",
              "0 0 80px rgba(250,204,21,0.8)",
              "0 0 60px rgba(250,204,21,0.6)"
            ],
            borderColor: ["#facc15", "#fef08a", "#facc15"]
          } : { 
            scale: 1, 
            opacity: 0.8 
          }}
          transition={isStarting ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : {}}
        >
             <div className="flex flex-col items-center justify-center w-full h-full p-8">
                 <div className="text-6xl font-black text-white tracking-tighter mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  T-AUTO
                 </div>

                 {/* Loading Bar */}
                 {isStarting && (
                   <div className="w-48 h-1.5 bg-zinc-800 rounded-full relative overflow-visible mt-6 shadow-inner border border-white/5">
                     {/* Progress Line */}
                     <motion.div
                        className="h-full bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.8)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "linear" }}
                     />
                     
                     {/* Moving Car */}
                     <motion.div
                       className="absolute top-1/2 -translate-y-1/2 z-20 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
                       initial={{ left: "0%" }}
                       animate={{ left: "100%", y: ["-50%", "-52%", "-50%"] }}
                       transition={{ 
                         left: { duration: 3.5, ease: "linear" },
                         y: { duration: 0.2, repeat: Infinity }
                       }}
                       style={{ x: "-50%" }} // Center the car on the tip of the line
                     >
                       <Logo showText={false} className="w-10 h-10" />
                     </motion.div>
                   </div>
                 )}
             </div>
        </motion.div>
        
        <motion.div
          className="absolute h-80 w-80 rounded-full border-2 border-yellow-300/50"
          animate={isStarting ? { 
            rotate: [0, 180, 360],
            opacity: [0.5, 0.7, 0.5],
            borderColor: ["rgba(253, 224, 71, 0.5)", "rgba(253, 224, 71, 0.8)", "rgba(253, 224, 71, 0.5)"]
          } : { 
            rotate: 0,
            opacity: 0.3
          }}
          transition={isStarting ? { duration: 8, repeat: Infinity, ease: "linear" } : {}}
        />
      </div>
    </div>
  )
}
