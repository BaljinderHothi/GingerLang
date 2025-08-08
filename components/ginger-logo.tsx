"use client"

import { cn } from "@/lib/utils"

type Props = {
  size?: number
  className?: string
  showWordmark?: boolean
}

export default function GingerLogo({
  size = 220,
  className,
  showWordmark = true,
}: Props) {
  return (
    <div className={cn("flex items-start gap-6", className)} aria-label="GingerLang logo">
      <div
        className="inline-flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span
          className="animated-emoji select-none"
          style={{
            fontSize: size,
            lineHeight: 1,
            display: "inline-block",
          }}
        >
          {"🫚"}
        </span>
      </div>
      {showWordmark && (
        <div className="leading-none pt-6">
          <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            GingerLang
          </div>
          <div className="mt-2 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
            Minimal • Expressive • Recursive
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes bob {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6%) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animated-emoji {
          animation: bob 2.4s ease-in-out infinite;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.12));
        }
      `}</style>
    </div>
  )
}
