import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, BookOpen, Code2 } from 'lucide-react'
import { cn } from "@/lib/utils"
import PrimaryNav from "@/components/primary-nav"

export default function GingerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-stone-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span
              aria-hidden="true"
              className="text-3xl md:text-4xl transition-transform group-hover:rotate-6"
              title="GingerLang"
            >
              {"🫚"}
            </span>
            <span className="font-semibold text-lg tracking-tight">
              GingerLang
            </span>
          </Link>

          <nav className="ml-auto">
            <PrimaryNav orientation="horizontal" />
          </nav>
        </div>
      </header>

      <main className={cn("flex-1")}>{children}</main>

      <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-600 dark:text-neutral-300 flex flex-col sm:flex-row items-center gap-3">
          <p className="order-2 sm:order-1">
            © {new Date().getFullYear()} GingerLang. All rights reserved.
          </p>
          <div className="order-1 sm:order-2 sm:ml-auto flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Link
                href="https://github.com/BaljinderHothi/GingerLang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Link href="/syntax">
                <BookOpen className="mr-2 h-4 w-4" />
                Syntax
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Link href="/compiler">
                <Code2 className="mr-2 h-4 w-4" />
                Compiler
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
