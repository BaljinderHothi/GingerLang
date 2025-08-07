# GingerLang: Core Syntax & Semantics

## Feature Summary

- **Function defining**: ``def name(params) { … }``
- **Lambda defining**: ``[](param1, param2) { … }``
- **Conditional statements**: ``if (cond) { … } else { … }``
- **Blocks & statement separation**: braces ``{ }`` + **newlines** (no ``;``)
- **Function calls**: Scheme-style S-expressions ``(fnName arg1 arg2)``
- **Comments**: double-double-quotes ``"" this is a comment ""``
- **Variables & recursion**: mutable via ``=``, pure recursion only (no loops)
- **Built-ins**:  
  - **Types**: numbers (ints & floats), booleans (`true`/`false`)  
  - **Arithmetic**: ``+  -  *  /  %``  
  - **Comparison**: ``==  !=  <  >  <=  >=``  

---

## Detailed Notes

### Recursion  
Pure recursion only—no `while` or `for` loops. Tail-call optimization may be added later.

---

## Syntax Examples

### 1. Function Definition  
```cpp
def add(x, y) {
    print(x)
    return x + y
}
```

### 2. Lambda Expressions
```cpp
[](x, y) { return x * y }
```

### 3. Conditionals (statement only)
```cpp
if (n == 0) {
    return 1
} else {
    return n * factorial(n - 1)
}
```

### 4. Function Call (S-expression)
```scm
result = (add 3 4)
(print result)
```

### Side Note
- Leaving comments is done in `` "" Comment here ""``

### Example Code
```cpp
"" Compute the nth Fibonacci number recursively ""
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
print((fib 0))   "" prints 0 ""
print((fib 1))   "" prints 1 ""
print((fib 5))   "" prints 5 ""
print((fib 10))  "" prints 55 ""
```










