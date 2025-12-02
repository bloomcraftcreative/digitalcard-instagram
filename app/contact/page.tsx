"use client"

import { ArrowLeft, Home, MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactActions = [
    {
      id: "instagram",
      label: "Instagram DM",
      icon: MessageCircle,
      href: "https://ig.me/u/_lyrify_1",
      color: "amber",
      subtitle: "Best for quick questions & collabs.",
    },
    {
      id: "email",
      label: "Send Official Email",
      icon: Mail,
      href: "#", 
      color: "amber",
      subtitle: "For business proposals & detailed requests.",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Chat",
      icon: Phone,
      href: "#",
      color: "amber",
      subtitle: "For urgent client communication.",
    },
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
          {/* Premium card container - Reduced overall vertical space */}
          <div
            className="bg-linear-to-br from-zinc-900 to-slate-950 rounded-3xl border border-zinc-800/50 shadow-2xl backdrop-blur-sm p-6 flex flex-col space-y-6" // Reduced padding from p-8 to p-6 and space-y-8 to space-y-6
            style={{
              animation: "slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
          >
            {/* Title, Subtitle, and Instructions */}
            <div className="text-center animate-fade-in space-y-1 pt-2"> {/* Reduced vertical padding at the top */}
              <h1 className="text-2xl font-extrabold text-white tracking-tight">Let's Connect 🤝</h1> {/* Smaller title font */}
              <p className="text-xs text-amber-500 font-medium uppercase tracking-widest">
                Collaboration & Inquiry
              </p>
              <p className="text-xs text-zinc-400 pt-2 px-2">
                Choose the best way to reach out to Lyrify.
              </p>
            </div>
            
            <hr className="border-zinc-800" />

            {/* Direct Contact Buttons (Primary Content) */}
            <div className="flex flex-col gap-3"> {/* Reduced gap */}
              <h2 className="text-sm font-bold text-zinc-300 uppercase tracking-wider text-center">Quick Action Links</h2>
              {contactActions.map((action, idx) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.id}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3 rounded-xl bg-zinc-800/70 border border-zinc-700/50 text-white transition-all duration-300 hover:border-amber-500/60 hover:bg-zinc-700/60 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                    style={{
                      animation: `slideUp 0.5s ease-out ${idx * 0.1 + 0.3}s backwards`,
                    }}
                  >
                    <div className="flex items-center gap-3"> {/* Reduced gap */}
                        <div className="p-2 rounded-full bg-amber-600/20">
                            <Icon size={18} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" /> {/* Smaller icon size */}
                        </div>
                        <div>
                            <p className="font-semibold text-sm">{action.label}</p>
                            <p className="text-xs text-zinc-400">{action.subtitle}</p>
                        </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="w-full flex gap-3 pt-3"> {/* Reduced padding top */}
              <Link
                href="/about" 
                className="flex-1 px-4 py-2 rounded-full border border-zinc-700/50 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                style={{
                  animation: "slideUp 0.5s ease-out 0.7s backwards",
                }}
              >
                <ArrowLeft size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <span>About</span>
              </Link>
              <Link
                href="/"
                className="flex-1 px-4 py-2 rounded-full border border-zinc-700/50 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                style={{
                  animation: "slideUp 0.5s ease-out 0.8s backwards",
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