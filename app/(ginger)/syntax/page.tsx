export default function SyntaxPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 supports-[backdrop-filter]:bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-6 md:p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-none">
        <article>
          <header className="mb-6">
            <h1 className="text-3xl font-semibold tracking-tight">GingerLang: Core Syntax &amp; Semantics</h1>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2">
              A concise overview of GingerLang&apos;s core features, recursion model, and syntax examples.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Feature Summary</h2>
            <ul className="list-disc pl-5 space-y-1 text-neutral-800 dark:text-neutral-200">
              <li><strong>Function defining</strong>: <code>def name(params) {'{ … }'}</code></li>
              <li><strong>Lambda defining</strong>: <code>[](param1, param2) {'{ … }'}</code></li>
              <li><strong>Conditional statements</strong>: <code>if (cond) {'{ … }'} else {'{ … }'}</code></li>
              <li><strong>Blocks &amp; statement separation</strong>: braces <code>{'{ }'}</code> + <strong>newlines</strong> (no <code>;</code>)</li>
              <li><strong>Function calls</strong>: Scheme-style S-expressions <code>(fnName arg1 arg2)</code></li>
              <li><strong>Comments</strong>: double-double-quotes <code>{'"" this is a comment ""'}</code></li>
              <li><strong>Variables &amp; recursion</strong>: mutable via <code>=</code>, pure recursion only (no loops)</li>
              <li>
                <strong>Built-ins</strong>:
                <ul className="list-disc pl-5 mt-1">
                  <li><strong>Types</strong>: numbers (ints &amp; floats), booleans (<code>true</code>/<code>false</code>)</li>
                  <li><strong>Arithmetic</strong>: <code>+ - * / %</code></li>
                  <li><strong>Comparison</strong>: <code>{'== != < > <= >='}</code></li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">Detailed Notes</h2>
            <h3 className="mt-3 text-lg font-medium">Recursion and Tail-Call Optimization</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-neutral-800 dark:text-neutral-200">
              <li>All iteration is via recursion; there are <strong>no</strong> <code>while</code> or <code>for</code> loops.</li>
              <li><strong>Tail-call optimization</strong> ensures that calls in tail position do not consume additional stack space.</li>
            </ul>
          </section>

          <section className="mb-2">
            <h2 className="text-xl font-semibold">Syntax Examples</h2>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium">1. Function Definition</h3>
                <pre className="mt-2 bg-white/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 overflow-x-auto text-sm">
                  <code>{'def add(x, y) {\n  print(x)\n  return x + y\n}'}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium">2. Lambda Expressions</h3>
                <pre className="mt-2 bg-white/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 overflow-x-auto text-sm">
                  <code>{'[](x, y) { return x * y }'}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium">3. Conditionals (statement only)</h3>
                <pre className="mt-2 bg-white/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 overflow-x-auto text-sm">
                  <code>{'if (n == 0) {\n  return 1\n} else {\n  return n * factorial(n - 1)\n}'}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium">4. Function Call (S-expression)</h3>
                <pre className="mt-2 bg-white/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 overflow-x-auto text-sm">
                  <code>{'result = (add 3 4)\n(print result)'}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium">Side Note</h3>
                <p className="text-neutral-800 dark:text-neutral-200">
                  Leaving comments is done in <code>{'""Comment here""'}</code>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Example Code</h3>
                <pre className="mt-2 bg-white/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 overflow-x-auto text-sm">
                  <code>
                    {
                      '"" Compute the nth Fibonacci number recursively ""\n' +
                      'def fib(n) {\n' +
                      '  if (n == 0) {\n' +
                      '    return 0\n' +
                      '  } else {\n' +
                      '    if (n == 1) {\n' +
                      '      return 1\n' +
                      '    } else {\n' +
                      '      return (fib (n - 1)) + (fib (n - 2))\n' +
                      '    }\n' +
                      '  }\n' +
                      '}\n' +
                      '\n' +
                      '"" Example usage: ""\n' +
                      'print((fib 0))   "" prints 0 ""\n' +
                      'print((fib 1))   "" prints 1 ""\n' +
                      'print((fib 5))   "" prints 5 ""\n' +
                      'print((fib 10))  "" prints 55 ""\n'
                    }
                  </code>
                </pre>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
