"use client"

import { ArrowLeft, Home, Music, Palette, Lightbulb, Zap, MessageSquare } from "lucide-react"
import Link from "next/link"

// Define a richer set of content points with icons for visual appeal
const approachFeatures = [
  { 
    title: "Emotional Resonance",
    description: "I am a lyric curator inspired by profound emotions and thematic resonance, ensuring deep audience connection.",
    icon: Lightbulb
  },
  {
    title: "Meticulous Selection",
    description: "I meticulously select the most impactful and relatable lines from a diverse range of music.",
    icon: Music
  },
  {
    title: "Visual Storytelling",
    description: "Creator of stunning Reels that harmoniously blend feelings with cinematic visuals for maximum impact.",
    icon: Palette
  },
  {
    title: "Narrative Crafting",
    description: "Passionate about conveying narrative and emotion through the powerful medium of sound and imagery.",
    icon: Zap
  },
  {
    title: "Melody Moments",
    description: "Specializing in 'turning moments into melodies' by capturing transient feelings in permanent sonic and visual art.",
    icon: Home 
  },
  // Adding a few extra points here to demonstrate the scrolling functionality clearly
  {
    title: "Platform Optimization",
    description: "Expert in tailoring content delivery for platform algorithms (e.g., TikTok, Instagram Reels) to maximize reach.",
    icon: Zap 
  },
  {
    title: "Trend Synthesis",
    description: "Constantly synthesizing emerging music and visual trends to keep content fresh and relevant.",
    icon: Lightbulb
  },
]

// Define key skills for a professional touch
const keySkills = [
  { icon: Palette, label: "Visual Storytelling" },
  { icon: Lightbulb, label: "Creative Direction" },
  { icon: MessageSquare, label: "Audience Engagement" },
]

export default function AboutPage() {
  return (
    // Outer container
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-slate-900 to-zinc-950 flex items-center justify-center px-4 py-16 overflow-hidden relative">
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 w-full">
        {/* Card width: max-w-sm restored */}
        <div className="mx-auto max-w-sm space-y-6"> 
          
          {/* Main Content Card Container */}
          <div
            className="bg-linear-to-br from-zinc-900/95 to-slate-950/95 rounded-3xl border border-zinc-800/50 shadow-2xl backdrop-blur-md p-8 animate-slide-in-right" 
            style={{
              animation: "slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
          >
            <div className="flex flex-col items-center gap-7"> 
              
              {/* Profile Header and Image */}
              <div className="flex flex-col items-center gap-3 animate-fade-in">
                <div className="group cursor-pointer relative">
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500/20 to-orange-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-zinc-700/50 bg-zinc-800 shadow-xl group-hover:shadow-amber-500/40 transition-shadow duration-500">
                    <img
                      src="/professional-woman-business-portrait.jpg"
                      alt="Lyrify Artist"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title and Subtitle */}
                <div className="text-center space-y-0">
                  <h1 className="text-2xl font-bold text-white tracking-tight">More About Me</h1> 
                  <p className="text-xs text-zinc-400">Lyrify - Lyrics Creator & Reel Curator</p>
                </div>
              </div>

                
              
              {/* The Lyrify Approach - Enhanced Visual Layout AND SCROLLABLE */}
              <div className="w-full space-y-3 pt-3 border-t border-zinc-800">
                <h2 className="text-md font-bold text-zinc-200 uppercase tracking-wider text-center">The Lyrify Approach ✨</h2>
                
                {/* Scrollable Container Added Here */}
                <div className="space-y-3 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar"> 
                    {approachFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/50 hover:border-amber-500/30"
                        style={{
                          animation: `slideUp 0.5s ease-out ${idx * 0.1 + 0.5}s backwards`,
                        }}
                      >
                        <div className="flex items-center gap-3 mb-1">
                            <feature.icon size={16} className="text-amber-500 shrink-0" />
                            <p className="text-sm font-semibold text-white">{feature.title}</p>
                        </div>
                        <p className="text-xs text-zinc-400 ml-6">{feature.description}</p> 
                      </div>
                    ))}
                </div>
              </div>

              {/* Key Skills Section - Professional Badges */}
              <div className="w-full space-y-3 pt-3 border-t border-zinc-800">
                <h2 className="text-md font-bold text-zinc-200 uppercase tracking-wider text-center">Core Competencies 🛠️</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                  {keySkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-amber-600/20 text-amber-300 border border-amber-600/50 shadow-md shadow-amber-500/10 transition-transform duration-300 hover:scale-105"
                      style={{
                        animation: `slideUp 0.5s ease-out ${idx * 0.1 + 1.2}s backwards`,
                      }}
                    >
                      <skill.icon size={12} />
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Buttons - Kept simple and original */}
              <div className="w-full flex gap-3 pt-4 border-t border-zinc-800/0"> 
                <Link
                  href="/"
                  className="flex-1 px-6 py-2.5 rounded-full border border-zinc-700/50 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                  style={{
                    animation: "slideUp 0.5s ease-out 1.5s backwards",
                  }}
                >
                  <ArrowLeft size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Back</span>
                </Link>
                <Link
                  href="/"
                  className="flex-1 px-6 py-2.5 rounded-full border border-zinc-700/50 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                  style={{
                    animation: "slideUp 0.5s ease-out 1.6s backwards",
                  }}
                >
                  <Home size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations and Custom Scrollbar Styling */}
      <style>{`
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

        /* Custom Scrollbar for dark theme */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937; /* zinc-800 */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563; /* slate-600 */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #fbbf24; /* amber-400 */
        }

      `}</style>
    </div>
  )
}