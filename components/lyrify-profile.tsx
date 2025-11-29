"use client"

import { Music, Share2, MessageCircle, Mail, Instagram, Facebook, ExternalLink, Clipboard, Check } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { hr } from "date-fns/locale"

export default function LyrifyProfile() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false) // State for copy clipboard success

  // Define the URL to be shared (replace with your actual profile URL)
  const PROFILE_URL = "https://digitalcard.instagram.vercel.app/" // Example URL
  const SHARE_TITLE = "Check out Lyrify's Digital Profile!"

  /**
   * Handles sharing the profile URL using the Web Share API or falling back to clipboard.
   */
  const handleShare = async () => {
    // 1. Try Native Web Share API (Best for Mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: SHARE_TITLE,
          url: PROFILE_URL,
        })
      } catch (error) {
        // User may have cancelled or error occurred
        console.error('Error sharing:', error);
      }
    } 
    // 2. Fallback to Copy to Clipboard (For Desktop/Non-supporting browsers)
    else {
      try {
        await navigator.clipboard.writeText(PROFILE_URL)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000) // Reset success icon after 2 seconds
      } catch (err) {
        console.error('Could not copy text: ', err)
      }
    }
  }

  const buttons = [
    {
      id: "about",
      label: "More About Me",
      icon: Music,
      href: "/about",
    },
    {
      id: "reels",
      label: "My Best Reels",
      icon: Share2,
      href: "/reels",
    },
    {
      id: "collab",
      label: "Collab / DM Me",
      icon: MessageCircle,
      href: "https://www.instagram.com/direct/t/17842601622591643/",
    },
    {
      id: "contact",
      label: "Contact Me",
      icon: Mail,
      href: "/contact",
    },
  ]

  const socials = [
    { id: "instagram", icon: <Instagram />, label: "Instagram" , href: "https://www.instagram.com/_lyrify_1/" },
    { id: "facebook", icon: <Facebook />, label: "Facebook", href:"#" },
    { id: "email", icon: <Mail/>, label: "Email", href:"#" },
    // Changed share to use a button element instead of just a static icon
    { 
      id: "share", 
      icon: isCopied ? <Check className="text-emerald-400" /> : <ExternalLink />, // Dynamically change icon
      label: isCopied ? "Link Copied!" : "Share Profile", 
      action: handleShare,
      href: "#" 
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
          {/* Premium card container */}
          <div className="bg-linear-to-br from-zinc-900 to-slate-950 rounded-3xl border border-zinc-800/50 shadow-2xl backdrop-blur-sm p-8">
            {/* Profile Container */}
            <div className="flex flex-col items-center gap-6">
              {/* Profile Image */}
              <div className="group cursor-pointer relative">
                <div className="absolute inset-0 bg-linear-to-r from-amber-500/20 to-orange-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-3 border-zinc-700/50 bg-zinc-800 shadow-xl group-hover:shadow-amber-500/20 transition-shadow duration-500">
                  <Image
                    width={112}
                    height={112}  
                    src="/logo.png"
                    alt="Lyrify Artist"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    // Placeholder dimensions/styling for the image for correct rendering
                    style={{ position: 'absolute', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Header Section */}
              <div className="text-center space-y-2 animate-fade-in">
                <h1 className="text-4xl font-bold text-white tracking-tight">lyrify</h1>
                <p className="text-sm font-semibold text-zinc-300">Lyrics Creator & Reel Curator</p>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                  Turning songs into feelings — one line at a time. Curating reels inspired by emotions & sound.
                </p>
              </div>

              <div className="w-full space-y-2 pt-2">
                {buttons.map((btn, idx) => {
                  const Icon = btn.icon
                  return (
                    <Link href={btn.href} key={btn.id} passHref >
                      <button
                        onMouseEnter={() => setHoveredButton(btn.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="w-full px-5 py-2.5 rounded-xl border border-zinc-700/50 text-white text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 group"
                        style={{
                          animation: `slideUp 0.5s ease-out ${idx * 0.08}s backwards`,
                        }}
                      >
                        <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:tracking-wide transition-all duration-300">{btn.label}</span>
                      </button>
                    </Link>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2 justify-center flex-wrap">
                {socials.map((social) => {
                  const isShareButton = social.id === 'share';

                  if (isShareButton) {
                    return (
                      <button
                        key={social.id}
                        onClick={handleShare}
                        onMouseEnter={() => setHoveredSocial(social.id)}
                        onMouseLeave={() => setHoveredSocial(null)}
                        className="w-10 h-10 rounded-full border border-zinc-700/50 flex items-center justify-center text-white text-xs transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/15 hover:scale-110 active:scale-95"
                        title={social.label}
                        
                      >
                        <span className={`text-base font-semibold ${isCopied ? 'scale-110' : ''} transition-transform duration-300`}>
                          {social.icon}
                        </span>
                      </button>
                    );
                  }
                  
                 
                  return (
                    <button
                      key={social.id}
                      onMouseEnter={() => setHoveredSocial(social.id)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className="w-10 h-10 rounded-full border border-zinc-700/50 flex items-center justify-center text-white text-xs transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/15 hover:scale-110 active:scale-95"
                      title={social.label}
                      onClick={()=> window.open(social.href,"_self")}
                    >
                      <span className="text-base font-semibold">{social.icon}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-zinc-500 tracking-widest uppercase pt-1">Tap to connect</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
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