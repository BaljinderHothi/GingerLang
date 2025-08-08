import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Github, BookOpen, Code2, Play } from 'lucide-react'

const sample = `"" Compute the nth Fibonacci number recursively ""
def fib(n) {
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return (fib (n - 1)) + (fib (n - 2))
  }
}

result = (fib 10)
(print result)  "" 55 ""`

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: copy + CTAs */}
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="text-5xl md:text-6xl"
                  title="GingerLang"
                >
                  {"🫚"}
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  GingerLang
                </h1>
              </div>

              <p className="mt-4 max-w-prose text-neutral-700 dark:text-neutral-300 md:text-lg">
                A minimal, expressive programming language with S‑expression calls, recursion‑first semantics, and clean, newline‑separated blocks.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild className="bg-[#386641] hover:bg-[#2f5838] text-white">
                  <Link href="/compiler">
                    <Code2 className="mr-2 h-4 w-4" />
                    Try the Playground
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Link href="/syntax">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read the Syntax
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Link
                    href="https://github.com/BaljinderHothi/GingerLang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>

              <div className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">
                No install. Write code, run in the browser (compiler connection coming soon).
              </div>
            </div>

            {/* Right: clean preview card */}
            <div>
              <Card className="shadow-sm border-neutral-200 dark:border-neutral-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Playground Preview</CardTitle>
                  <CardDescription>Write GingerLang on the left. Output on the right.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                    <div className="px-3 py-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      </div>
                      <span className="ml-2 text-xs text-neutral-500">main.ginger</span>
                    </div>
                    <pre className="p-3 text-sm font-mono text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-900 overflow-auto min-h-[220px]">
                      <code>{sample}</code>
                    </pre>
                    <div className="p-3 border-t border-neutral-200 dark:border-neutral-800">
                      <Button size="sm" disabled className="bg-[#F97A00] text-white hover:bg-[#e06f00] disabled:opacity-70">
                        <Play className="mr-2 h-4 w-4" />
                        Run (TODO)
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 overflow-hidden">
                    <div className="px-3 py-2 border-b border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
                      Output
                    </div>
                    <pre className="p-3 text-sm text-neutral-800 dark:text-neutral-200 min-h-[220px]">
                      <code>55</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
