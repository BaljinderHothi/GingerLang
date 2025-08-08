"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Play, LinkIcon } from 'lucide-react'

const DEFAULT_CODE = `"" Compute the nth Fibonacci number recursively ""
def fib(n) {
  if (n == 0) {
    return 0
  } else {
    if (n == 1) {
      return 1
    } else {
      return (fib (n - 1)) + (fib (n - 2))
    }
  }
}

"" Example usage: ""
print((fib 10))  "" prints 55 ""
`

export default function CompilerPage() {
  const [code, setCode] = React.useState<string>(DEFAULT_CODE)
  const [output, setOutput] = React.useState<string>("")
  const [isRunning, setIsRunning] = React.useState<boolean>(false)

  async function handleRun() {
    // TODO: Wire this up to the real GingerLang compiler backend.
    setIsRunning(true)
    try {
      await new Promise((r) => setTimeout(r, 400))
      setOutput(
        "TODO: This will execute your program once the compiler service is connected.\n\nExpected (demo): 55"
      )
    } finally {
      setIsRunning(false)
    }
  }

  function handleCopy() {
    navigator.clipboard?.writeText(code)
  }

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">GingerLang Compiler</h1>
          <Badge variant="secondary" className="text-amber-700 bg-amber-100">
            Preview • TODO
          </Badge>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Playground</CardTitle>
            <CardDescription>
              Write GingerLang code on the left. Output will appear on the right after we connect the compiler service.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
                <Button size="sm" onClick={handleRun} disabled={isRunning} className="bg-[#386641] hover:bg-[#2f5838] text-white">
                  <Play className="mr-2 h-4 w-4" />
                  {isRunning ? "Running..." : "Run (TODO)"}
                </Button>
              </div>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="min-h-[360px] font-mono text-sm"
                aria-label="GingerLang source code"
              />
              <p className="text-xs text-neutral-500">
                Note: This is a front-end only preview. The run button will connect to your compiler service later.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">Output</span>
              </div>
              <pre className="min-h-[360px] rounded-md border bg-zinc-50 p-3 text-sm overflow-auto">
                <code>{output || "• Output will appear here."}</code>
              </pre>
              <div className="text-xs text-neutral-500">
                When ready, replace handleRun with a call to your backend endpoint or server action.
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-sm text-neutral-600">
          <p className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            Integration TODO: POST code to your compiler API and stream back results.
          </p>
        </div>
      </div>
    </section>
  )
}
