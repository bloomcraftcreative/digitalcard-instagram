"use client"

import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const lyrics = [
    { id: 1, icon: "🎵", title: "Midnight Dreams" },
    { id: 2, icon: "💫", title: "Stardust" },
    { id: 3, icon: "🌙", title: "Lunar Vibes" },
    { id: 4, icon: "🎸", title: "Echo" },
    { id: 5, icon: "✨", title: "Golden Hour" },
    { id: 6, icon: "🌊", title: "Ocean Deep" },
    { id: 7, icon: "🔥", title: "Blaze" },
    { id: 8, icon: "💎", title: "Crystalline" },
    { id: 9, icon: "🌸", title: "Blossom" },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-slate-900 to-zinc-950 flex items-center justify-center px-4 py-4 overflow-hidden relative">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/3 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-sm">
          {/* Premium card container */}
          <div
            className="bg-linear-to-br from-zinc-900 to-slate-950 rounded-3xl border border-zinc-800/50 shadow-2xl backdrop-blur-sm p-6 h-screen max-h-[1920px] flex flex-col"
            style={{
              animation: "slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              aspectRatio: "1080 / 1920",
            }}
          >
            {/* Title and Subtitle Section */}
            <div className="text-center pt-8 pb-4 animate-fade-in">
              <h1 className="text-3xl font-bold text-white tracking-tight">Lyrics Gallery</h1>
              
              {/* === ADDED EXPLANATORY SUBTITLE === */}
              <p className="text-sm text-slate-400 mt-2" style={{ animationDelay: "0.1s" }}>
                Explore my curated lines, organized by mood and theme.
              </p>
              {/* ================================== */}
              
            </div>

            {/* 3x3 Grid */}
            <div className="flex-1 overflow-hidden flex items-center justify-center pt-4"> {/* Added pt-4 for better spacing */}
              <div className="grid grid-cols-3 gap-3 w-full">
                {lyrics.map((lyric, idx) => (
                  <div
                    key={lyric.id}
                    className="aspect-square bg-linear-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700/30 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 hover:scale-105 active:scale-95 group"
                    style={{
                      animation: `slideUp 0.4s ease-out ${idx * 0.05 + 0.1}s backwards`,
                    }}
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{lyric.icon}</div>
                    <p className="text-xs text-zinc-300 text-center font-medium px-2 leading-tight">{lyric.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="w-full flex gap-3 pt-6 pb-8">
              <Link
                href="/"
                className="flex-1 px-6 py-2.5 rounded-full border border-zinc-700/50 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                style={{
                  animation: "slideUp 0.5s ease-out 0.5s backwards",
                }}
              >
                <ArrowLeft size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Back</span>
              </Link>
              <Link
                href="/"
                className="flex-1 px-6 py-2.5 rounded-full border border-zinc-700/50 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                style={{
                  animation: "slideUp 0.5s ease-out 0.6s backwards",
                }}
              >
                <Home size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* ... (rest of your CSS animations) ... */
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out 0.2s backwards;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  )
}