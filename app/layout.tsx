import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
:root {
  /* Brand palette (light) */
  --brand-forest: #386641;
  --brand-orange: #F97A00;
  --brand-warm:   #FED16A;
  --brand-pale:   #FFF4A4;

  /* Base (light) */
  --bg: #fafaf9;
  --fg: #0a0a0a;
  --muted: #6b7280;
  --card: #ffffffcc;
}

/* Dark tokens */
.dark {
  --bg: #0a0a0a;
  --fg: #f5f5f5;
  --muted: #a3a3a3;
  --card: #0b0b0bcc;
}

/* Font setup and better rendering */
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Clean, tasteful background with subtle radial lights */
body {
  background:
    radial-gradient(1200px 600px at 10% -10%, var(--brand-pale) 0%, transparent 60%),
    radial-gradient(1000px 500px at 110% -20%, var(--brand-warm) 0%, transparent 60%),
    linear-gradient(180deg, var(--bg), var(--bg));
  color: var(--fg);
}

.dark body {
  background:
    radial-gradient(1100px 540px at 10% -10%, #0f172a 0%, transparent 60%),
    radial-gradient(900px 480px at 110% -20%, #111827 0%, transparent 60%),
    linear-gradient(180deg, var(--bg), var(--bg));
}

/* Nice selection + focus defaults */
::selection { background: color-mix(in oklab, var(--brand-orange) 30%, transparent); }
a { text-underline-offset: 3px; text-decoration-thickness: 1px; }
:focus-visible { outline: 2px solid color-mix(in oklab, var(--brand-orange) 60%, white); outline-offset: 2px; }
        `}</style>
      </head>
      <body className="min-h-dvh antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="app-root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
