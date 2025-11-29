"use client"
import { ArrowLeft, Home, Instagram, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ReelCardProps {
  reel: {
    id: number
    icon: string
    title: string
    reelUrl: string
    thumbnailUrl: string
    stats: { views: string }
  }
}

const ReelCard = ({ reel }: ReelCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardWidth = "w-[130px]"
  const cardHeight = "h-[220px]"
  const titleColor = "text-slate-300"

  return (
    <div className="shrink-0 animate-slide-up-item" style={{ animationDelay: `${reel.id * 0.1}s` }}>
      <Link
        href={reel.reelUrl}
        target="_blank"
        key={reel.id}
        className={`relative block transition-all duration-300 transform ${cardWidth}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`
            ${cardWidth} ${cardHeight} rounded-xl overflow-hidden
            bg-zinc-800/80
            border border-zinc-700 shadow-xl
            group cursor-pointer relative flex flex-col items-center justify-center
            transition-all duration-300
          `}
          style={{
            transform: isHovered ? "scale(1.03)" : "scale(1)",
            boxShadow: isHovered
              ? "0 0 15px rgba(251, 191, 36, 0.4), inset 0 0 8px rgba(251, 191, 36, 0.2)"
              : "0 0 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Image
            fill
            src={reel.thumbnailUrl || "/placeholder.svg"}
            alt={reel.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.7 : 1 }}
            loading="lazy"
          />
          <div
            className={`
              absolute inset-0 bg-black/80 rounded-xl
              flex flex-col items-center justify-center p-4 space-y-3
              transition-opacity duration-300 z-20
              ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <div className="flex items-center space-x-2 text-white">
              <Eye size={16} className="text-sky-400" />
              <span className="text-sm font-semibold">{reel.stats.views}</span>
            </div>
            <div className="flex items-center space-x-2 text-white border border-fuchsia-400/50 rounded-full py-1 px-3">
              <Instagram size={14} className="text-fuchsia-400" />
              <span className="text-xs font-semibold">View Reel</span>
            </div>
          </div>
          <Instagram
            size={24}
            className={`absolute top-2 right-2 text-white/70 z-10 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
          />
        </div>
        <p className={`text-xs ${titleColor} text-center mt-2 font-medium truncate px-1`}>{reel.title}</p>
      </Link>
    </div>
  )
}

export default function ReelsPage() {
  const reels = [
    {
      id: 1,
      icon: "🎬",
      title: "Run to me confess your love...",
      reelUrl: "https://www.instagram.com/reel/DRm01h1ApgL/",
      thumbnailUrl:
        "https://scontent.cdninstagram.com/v/t51.82787-15/587277506_17852283948591643_6172044392340023844_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzc3NTkzNzcxNDQ3MDQyNjYzNTE3ODUyMjgzOTMzNTkxNjQz.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=YHRwKwAy4YoQ7kNvwEix3Cd&_nc_oc=AdnVjraBVq7u7MqtYrBkA7bfC1adPhgeXK2k1qjH-DCxIjaJhYJfBoBgWm_7QnObA2E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=_ccO_JI5I8zd0nff14Nz8g&oh=00_Afhl9pQyNIUnEHQzAYgaTTMlBD1hf-3l96NpeLfVNnTjBw&oe=6930745C",
      stats: { views: "3K+ Views" },
    },
    {
      id: 2,
      icon: "💃",
      title: "11:11✨",
      reelUrl: "https://www.instagram.com/reel/DRjYMlCEQaV/",
      thumbnailUrl:
        "https://scontent.cdninstagram.com/v/t51.82787-15/587269229_17852097645591643_5543012458022218720_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzc3NDk2NzMzMDE3OTcxMjY2MTE3ODUyMDk3NjQyNTkxNjQz.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=ypIf76ZhEV0Q7kNvwG1qo68&_nc_oc=AdnQyrr-DTPFAk9zJbLbv_YK1tUk6YUjDZO7k-h6VNyhc7L0eG4-iSIiQTaDZK5oLUM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=_ccO_JI5I8zd0nff14Nz8g&oh=00_AfjF-U1cZRxLaXxq7rx6YHMNEV6bwhZcBagQbvNg6PNI4g&oe=693060A6",
      stats: { views: "16.5K+ Views" },
    },
    {
      id: 3,
      icon: "🎤",
      title: "11:11✨",
      reelUrl: "https://www.instagram.com/reel/DRl8ZV_AqQa/",
      thumbnailUrl:
        "https://scontent.cdninstagram.com/v/t51.82787-15/587794886_17852229306591643_2763781465475290538_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=Mzc3NTY4OTQ4NzAwMzMyOTU2MjE3ODUyMjI5MzAzNTkxNjQz.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=y0ImEnDn8bAQ7kNvwFzWpMQ&_nc_oc=AdluN8S-ySIBEp7uleBGQfifXfk_XPXhEQdWH_KzFGXC_p1ukXZOrp1_5BRM_RvUvEg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=_ccO_JI5I8zd0nff14Nz8g&oh=00_AfjaLzcomt-yp-84oQnFPf310-hmXF_nX0M9G4q5T96Ghg&oe=69305FC7",
      stats: { views: "4K+ Views" },
    },
    {
      id: 4,
      icon: "🎹",
      title: "11:11✨",
      reelUrl: "https://www.instagram.com/reel/DRjpXETgi76/",
      thumbnailUrl:
        "https://scontent.cdninstagram.com/v/t51.82787-15/587311850_17852111295591643_7556781948327301246_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=Mzc3NTA0MjgxNzc0Mzc5MzkxNDE3ODUyMTExMjkyNTkxNjQz.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=c47ntrqbbq8Q7kNvwH1-EiA&_nc_oc=Adk90lRpA8ZC_UHikX1WlEBGhzgholS6PPWo3ZD19DTbT3D_Cl3WTa36d4INytewM90&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=_ccO_JI5I8zd0nff14Nz8g&oh=00_AfgRdDoag6f0WT4V0YYFOhiOEL8LSMZq2zWM8Q8cOdkgBA&oe=69306DBA",
      stats: { views: "3K+ Views" },
    },
  ]

  return (
    <div className="fixed inset-0 bg-linear-to-br from-zinc-950 via-slate-900 to-zinc-950 flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/3 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 w-full max-w-xs px-4">
        <div
          className="
            bg-linear-to-br from-zinc-900 to-slate-950 rounded-3xl
            border border-zinc-800/50 shadow-2xl backdrop-blur-sm
            w-full flex flex-col
          "
          style={{
            height: "90vh",
            maxHeight: "1920px",
            animation: "slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            aspectRatio: "1080 / 1920",
          }}
        >
          {/* Header Section */}
          <div className="text-center pt-6 pb-2 animate-fade-in">
            <h1 className="text-3xl font-semibold text-white tracking-tight">My Best Reels</h1>
          </div>

          {/* Subtitle */}
          <p
            className="text-center text-sm text-slate-400 mb-3 px-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Click to view my top-performing Reels on Instagram.
          </p>

          <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 scrollbar-hide">
            <div
              className="
                w-full flex justify-center items-start py-2
                gap-4 flex-wrap
              "
              style={{ animation: "slideUp 0.5s ease-out 0.2s backwards" }}
            >
              {reels.map((reel) => (
                <ReelCard key={reel.id} reel={reel} />
              ))}
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="w-full flex gap-3 pt-4 pb-6 px-4 shrink-0">
            <Link
              href="/"
              className="
                flex-1 px-4 py-2 rounded-full
                border border-zinc-700 text-slate-300 text-sm font-medium
                flex items-center justify-center gap-2 bg-zinc-800
                hover:bg-zinc-700 transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-900/30 active:scale-95 group
              "
              style={{ animation: "slideUp 0.5s ease-out 0.5s backwards" }}
            >
              <ArrowLeft size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Back</span>
            </Link>
            <Link
              href="/"
              className="
                flex-1 px-4 py-2 rounded-full
                border border-amber-500/50 text-amber-300 text-sm font-medium
                flex items-center justify-center gap-2 bg-amber-500/10
                hover:bg-amber-500/20 transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-900/30 active:scale-95 group
              "
              style={{ animation: "slideUp 0.5s ease-out 0.6s backwards" }}
            >
              <Home size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpItem {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-item { animation: slideUpItem 0.4s ease-out backwards; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out 0.2s backwards; }
        .animation-delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  )
}
