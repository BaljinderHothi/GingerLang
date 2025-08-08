import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, BookOpen, Code2 } from 'lucide-react'
import { cn } from "@/lib/utils"

type Props = {
  orientation?: "horizontal" | "vertical"
  className?: string
}

export default function PrimaryNav({ orientation = "horizontal", className }: Props) {
  const isRow = orientation === "horizontal"
  return (
    <div
      className={cn(
        "flex",
        isRow ? "flex-row items-center gap-2" : "flex-col items-stretch gap-2",
        className
      )}
    >
      <Button
        asChild
        className="bg-[#F97A00] text-white hover:bg-[#e06f00] dark:bg-[#F97A0f] dark:hover:bg-[#F97A00] dark:text-white"
      >
        <Link href="/compiler">
          <Code2 className="mr-2 h-4 w-4" />
          Compiler
        </Link>
      </Button>

      <Button
        asChild
        className="bg-[#386641] text-white hover:bg-[#2f5838]"
      >
        <Link href="/syntax">
          <BookOpen className="mr-2 h-4 w-4" />
          Syntax
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
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
  )
}
