import json
import re

# Comprehensive mapping for all 121 pseudocode cards
# Each entry provides (front, codeSnippet, codeLanguage)
PSEUDOCODE_MAP = {
    # --- Group 1: card-acc-76 to card-acc-100 (25 cards) ---
    "card-acc-76": (
        "What does the following loop do for a string `word`?",
        "String word\nfor (Integer l = 0 to 0)\n    Print word[l]\nend for",
        "pseudocode"
    ),
    "card-acc-77": (
        "What will be printed after executing the following pseudocode?",
        "Integer x, y, z\nSet x = 10, y = 16, z = 3\nif (x > y)\n    x = y\nelse\n    y = x\nend if\nif (z > y)\n    z = y\nelse\n    y = z\nend if\nPrint (x + y + z)",
        "pseudocode"
    ),
    "card-acc-78": (
        "What will be printed after executing the following pseudocode?",
        "Integer x, y, z\nSet x = 8, y = 6, z = 4\nif (x > y)\n    x = y\nelse\n    y = x\nend if\nif (z > y)\n    z = y\nelse\n    y = z\nend if\nPrint (x + y + z)",
        "pseudocode"
    ),
    "card-acc-79": (
        "What is returned by the function call `funn(9, 7)`?",
        "function funn(Integer x = 9, Integer y = 7)\n    Integer z\n    Set z = 2\n    y = y % z\n    x = x % z\n    return x + y\nend function",
        "pseudocode"
    ),
    "card-acc-80": (
        "What will be printed by the following conditional block?",
        "Integer p, q, r, sum\nSet p = 3, q = 8, r = 1, sum = 12\nif (p != 0 AND sum == 11 AND q == 4 AND r != 0)\n    Print \"Success\"\nelse\n    Print \"Fail\"\nend if",
        "pseudocode"
    ),
    "card-acc-81": (
        "What does the recursive function call `solve(11, 12)` return?",
        "function solve(Integer a, Integer b)\n    if (a < 3 AND b < 4)\n        return solve(a + 1, b + 1)\n    else\n        return a + b\nend if\nend function",
        "pseudocode"
    ),
    "card-acc-82": (
        "What will be printed after executing the bitwise shift and addition?",
        "Integer num = 0, value = 1\nnum = num >> 1\nnum = num + value\nPrint num",
        "pseudocode"
    ),
    "card-acc-83": (
        "What will be the final value of `x` printed after the loop?",
        "Integer x\nfor (x = 1 to 11)\n    x = x + 2\nend for\nPrint x",
        "pseudocode"
    ),
    "card-acc-84": (
        "What will be printed after executing the array and pointer updates?",
        "Integer m, j\nInteger a[3] = {0, 1, 0}\nSet m = 1, j = 1\na[0] = a[0] + a[1]\na[1] = a[1] + a[2]\na[2] = a[2] + a[0]\nif (a[0])\n    a[j] = 5\nend if\nm = m + a[j]\nPrint m",
        "pseudocode"
    ),
    "card-acc-85": (
        "What is the complete printed sequence when `fun(150)` is executed?",
        "function fun(Integer k)\n    if (k > 155)\n        return\n    end if\n    Print k\n    fun(k + 2)\n    Print k\nend function\n\nfun(150)",
        "pseudocode"
    ),
    "card-acc-86": (
        "What are the resulting values stored in array `c`?",
        "Integer a[5] = {5, 9, 7, 3, 1}\nInteger b[5] = {2, 4, 6, 8, 10}\nInteger c[5]\nfor (Integer k = 0 to 4)\n    c[k] = a[k] - b[k]\nend for\nPrint c",
        "pseudocode"
    ),
    "card-acc-87": (
        "How many times will 'A' be printed by the nested loops?",
        "Integer a, b\nfor (a = 0 to 4)\n    for (b = 0 to 2)\n        if (a > b)\n            Print \"A\"\n        end if\n    end for\nend for",
        "pseudocode"
    ),
    "card-acc-88": (
        "What will be the printed values of `q` and `r`?",
        "Integer p, q, r\nSet q = 13\nfor (p = 1 to 4)\n    r = q % p\n    p = p + 5\n    q = p + r\n    r = q / 5\nend for\nPrint q, r",
        "pseudocode"
    ),
    "card-acc-89": (
        "What will be printed by the following conditional statement?",
        "Integer x\nSet x = 259\nif (x == 0)\n    Print 0\nelse if (x % 9 == 0)\n    Print 9\nelse\n    Print (x % 9)\nend if",
        "pseudocode"
    ),
    "card-acc-90": (
        "What will be the printed values of `a` and `b`?",
        "Integer a, b\nSet a = 12, b = 25\na = (a + b) % 2\nb = a\na = a + b - 13\nPrint a, b",
        "pseudocode"
    ),
    "card-acc-91": (
        "What will be the final printed value of `(a + b + c)`?",
        "Integer a, b, c\nSet a = 4, b = 4, c = 4\nif (a & (b ^ b) & c)\n    a = a >> 1\nend if\nPrint (a + b + c)",
        "pseudocode"
    ),
    "card-acc-92": (
        "What is returned by the function call `funn(10, 5)`?",
        "function funn(Integer a = 10, Integer b)\n    if (0)\n        return funn(a, b)\n    end if\n    a = a + a + a + a\n    return a\nend function",
        "pseudocode"
    ),
    "card-acc-93": (
        "What will be printed by the conditional branching?",
        "Integer x\nSet x = 2\nif (x == 1)\n    Print \"A\"\nelse if (x == 3)\n    Print \"B\"\nelse\n    Print \"C\"\nend if",
        "pseudocode"
    ),
    "card-acc-94": (
        "What will be printed after executing the arithmetic updates?",
        "Integer m, n\nSet m = 9, n = 6\nm = m + 1\nn = n - 1\nm = m + n\nif (m > n)\n    Print m\nelse\n    Print n\nend if",
        "pseudocode"
    ),
    "card-acc-95": (
        "What will be the final value of `sum` printed after the loop?",
        "Integer f, g, sum, n\nSet f = 6, g = 9, sum = 0\nif (g > f)\n    for (n = f to g - 1)\n        sum = sum + n\n    end for\nend if\nPrint sum",
        "pseudocode"
    ),
    "card-acc-96": (
        "What is the return value of the function call `f(8, 9)`?",
        "function f(Integer a, Integer b)\n    if (a < b)\n        swap(a, b)\n    end if\n    if (b != 0)\n        return a + f(a, b - 1)\n    else\n        return 0\n    end if\nend function\n\nf(8, 9)",
        "pseudocode"
    ),
    "card-acc-97": (
        "What will be returned by the following block?",
        "Integer a, b, c\nSet a = 9, b = 7, c = 2\nb = b % c\na = a % c\nreturn a + b",
        "pseudocode"
    ),
    "card-acc-98": (
        "How many non-zero digits of `number` divide `number` evenly?",
        "Integer number, count\nSet number = 2630, count = 0\n// Counts non-zero digits d in 2630 where 2630 % d == 0\n// Eligible digits: 2, 6, 3 (0 is skipped)\nPrint count",
        "pseudocode"
    ),
    "card-acc-99": (
        "What will be the final value of `s` after converting octal digits to decimal?",
        "Integer n = 127, s = 0\n// Evaluates digits right to left with power of 8:\n// s = (7 * 8^0) + (2 * 8^1) + (1 * 8^2)\nPrint s",
        "pseudocode"
    ),
    "card-acc-100": (
        "What will be printed by the triangle angle validation logic?",
        "Integer a, b, c, sum\nSet a = 30, b = 60, c = 90\nsum = a + b + c\nif (sum == 180 AND a != 0 AND b != 0 AND c != 0)\n    Print \"Success\"\nelse\n    Print \"Fail\"\nend if",
        "pseudocode"
    ),

    # --- Group 2: card-acc-176 to card-acc-200 (25 cards) ---
    "card-acc-176": (
        "What will be printed by the bitwise left-shift operation?",
        "Integer y\nSet y = 5\nPrint (y << 3)",
        "pseudocode"
    ),
    "card-acc-177": (
        "What will be printed by the bitwise left-shift operation?",
        "Integer n\nSet n = 10\nPrint (n << 2)",
        "pseudocode"
    ),
    "card-acc-178": (
        "What will be printed by the bitwise right-shift operation?",
        "Integer x\nSet x = 7\nPrint (x >> 1)",
        "pseudocode"
    ),
    "card-acc-179": (
        "What will be printed by the bitwise AND operation?",
        "Integer a, b\nSet a = 12, b = 5\nPrint (a & b)",
        "pseudocode"
    ),
    "card-acc-180": (
        "What will be printed by the bitwise OR operation?",
        "Integer a, b\nSet a = 12, b = 5\nPrint (a | b)",
        "pseudocode"
    ),
    "card-acc-181": (
        "What will be printed by the bitwise XOR operation?",
        "Integer a, b\nSet a = 12, b = 5\nPrint (a ^ b)",
        "pseudocode"
    ),
    "card-acc-182": (
        "What sequence of numbers will be printed by the loop?",
        "Integer i\nfor (i = 1 to 5)\n    if (i % 2 == 0)\n        continue\n    end if\n    Print i\nend for",
        "pseudocode"
    ),
    "card-acc-183": (
        "What sequence of numbers will be printed by the loop?",
        "Integer i\nfor (i = 1 to 5)\n    Print i\n    if (i == 3)\n        break\n    end if\nend for",
        "pseudocode"
    ),
    "card-acc-184": (
        "What will be printed by the recursive factorial function `fact(5)`?",
        "function fact(Integer n)\n    if (n <= 1)\n        return 1\n    else\n        return n * fact(n - 1)\n    end if\nend function\n\nPrint fact(5)",
        "pseudocode"
    ),
    "card-acc-185": (
        "What will be printed by the recursive Fibonacci call `fib(6)`?",
        "function fib(Integer n)\n    if (n <= 1)\n        return n\n    else\n        return fib(n - 1) + fib(n - 2)\n    end if\nend function\n\nPrint fib(6)",
        "pseudocode"
    ),
    "card-acc-186": (
        "What will be printed after executing the arithmetic swap without a temporary variable?",
        "Integer a, b\nSet a = 4, b = 9\na = a + b\nb = a - b\na = a - b\nPrint a, b",
        "pseudocode"
    ),
    "card-acc-187": (
        "What will be the final value of `s` printed after the loop?",
        "Integer s, i\nSet s = 0\nfor (i = 1 to 4)\n    s = s + (i * i)\nend for\nPrint s",
        "pseudocode"
    ),
    "card-acc-188": (
        "What will be the final value of `c` (digit count) printed?",
        "Integer x, c\nSet x = 27, c = 0\nwhile (x > 0)\n    x = x / 10\n    c = c + 1\nend while\nPrint c",
        "pseudocode"
    ),
    "card-acc-189": (
        "What boolean output is printed by the palindrome number check?",
        "Integer n, r, t\nSet n = 121, r = 0, t = n\nwhile (t != 0)\n    r = (r * 10) + (t % 10)\n    t = t / 10\nend while\nPrint (r == n)",
        "pseudocode"
    ),
    "card-acc-190": (
        "What is printed by the iterative power function `pow(2, 5)`?",
        "function pow(Integer a, Integer b)\n    Integer r = 1\n    for (Integer i = 1 to b)\n        r = r * a\n    end for\n    return r\nend function\n\nPrint pow(2, 5)",
        "pseudocode"
    ),
    "card-acc-191": (
        "What will be the final value of `c` printed after the nested loops?",
        "Integer i, j, c\nSet c = 0\nfor (i = 1 to 3)\n    for (j = 1 to 3)\n        if (i == j)\n            c = c + 1\n        end if\n    end for\nend for\nPrint c",
        "pseudocode"
    ),
    "card-acc-192": (
        "What is the printed result of integer division and modulus?",
        "Integer a, b\nSet a = 8, b = 3\nPrint (a % b) + (a / b)",
        "pseudocode"
    ),
    "card-acc-193": (
        "What is the complete sequence of numbers printed by `f(2)`?",
        "function f(Integer n)\n    if (n == 0)\n        return\n    end if\n    Print n\n    f(n - 1)\n    Print n\nend function\n\nf(2)",
        "pseudocode"
    ),
    "card-acc-194": (
        "What will be the final value of `y` (count of set bits of 15) printed?",
        "Integer x, y\nSet x = 15, y = 0\nwhile (x != 0)\n    y = y + (x & 1)\n    x = x >> 1\nend while\nPrint y",
        "pseudocode"
    ),
    "card-acc-195": (
        "What will be the final value of `s` printed after the array loop?",
        "Integer a[4] = {2, 4, 6, 8}\nInteger s = 0, i\nfor (i = 0 to 3)\n    if (a[i] % 4 == 0)\n        s = s + a[i]\n    end if\nend for\nPrint s",
        "pseudocode"
    ),
    "card-acc-196": (
        "What is printed by the Euclidean GCD algorithm call `gcd(48, 18)`?",
        "function gcd(Integer a, Integer b)\n    Integer t\n    while (b != 0)\n        t = b\n        b = a % b\n        a = t\n    end while\n    return a\nend function\n\nPrint gcd(48, 18)",
        "pseudocode"
    ),
    "card-acc-197": (
        "What will be the final value of `s` printed after the loop?",
        "Integer n = 5, s = 1, i\nfor (i = 1 to n)\n    s = s * 2\nend for\nPrint s",
        "pseudocode"
    ),
    "card-acc-198": (
        "What will be printed by the post-increment conditional in C?",
        "int a = 5, b = 10;\nif (a++ > 5) {\n    printf(\"%d\", a);\n} else {\n    printf(\"%d\", b);\n}",
        "c"
    ),
    "card-acc-199": (
        "What is printed by the expression evaluation in C (left-to-right evaluation)?",
        "int a = 3;\nprintf(\"%d\", ++a + a++);",
        "c"
    ),
    "card-acc-200": (
        "What will be printed by `isPrime(9)` and `isPrime(11)`?",
        "function isPrime(Integer n)\n    if (n < 2)\n        return 0\n    end if\n    for (Integer i = 2 to n - 1)\n        if (n % i == 0)\n            return 0\n        end if\n    end for\n    return 1\nend function\n\nPrint isPrime(9), isPrime(11)",
        "pseudocode"
    ),

    # --- Group 3: card-acc-307 to card-acc-362 (56 cards) ---
    "card-acc-307": (
        "What will be printed by the recursive function call `mystery(5)`?",
        "function mystery(Integer x)\n    if (x <= 1)\n        return 1\n    else\n        return x * mystery(x - 2)\n    end if\nend function\n\nPrint mystery(5)",
        "pseudocode"
    ),
    "card-acc-308": (
        "What will be the final value of `sum` printed after execution?",
        "Integer n, d, sum\nSet n = 12345, sum = 0\nwhile (n > 0)\n    d = n % 10\n    if (d % 2 == 0)\n        sum = sum + d\n    end if\n    n = n / 10\nend while\nPrint sum",
        "pseudocode"
    ),
    "card-acc-309": (
        "What will be the final string stored in `result`?",
        "String str, result\nSet str = \"abcd\", result = \"\"\nfor (Integer i = length(str) down to 1)\n    result = result + str[i]\nend for\nPrint result",
        "pseudocode"
    ),
    "card-acc-310": (
        "What will be printed by the recursive call `mystery(6)`?",
        "function mystery(Integer n)\n    if (n <= 1)\n        return 1\n    else if (n % 2 == 0)\n        return n + mystery(n - 1)\n    else\n        return n * mystery(n - 2)\n    end if\nend function\n\nPrint mystery(6)",
        "pseudocode"
    ),
    "card-acc-311": (
        "What will be the printed value of `sum` for a 3x3 matrix with values 1 to 9?",
        "Integer matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n}\nInteger i, j, sum = 0\nfor (i = 1 to 3)\n    for (j = 1 to 3)\n        if (i == j OR i + j == 4)\n            sum = sum + matrix[i][j]\n        end if\n    end for\nend for\nPrint sum",
        "pseudocode"
    ),
    "card-acc-312": (
        "What will be printed after executing the arithmetic addition?",
        "Integer x, y\nSet x = 10, y = 5\nPrint (x + y)",
        "pseudocode"
    ),
    "card-acc-313": (
        "What will be the final value of `x` printed after the operations?",
        "Integer x\nSet x = 10\nx = x + 5\nx = x * 2\nPrint x",
        "pseudocode"
    ),
    "card-acc-314": (
        "What will be printed by the modulo operation?",
        "Print (17 % 5)",
        "pseudocode"
    ),
    "card-acc-315": (
        "What will be the result of integer division?",
        "// Integer division truncates decimal\nPrint (20 / 6)",
        "pseudocode"
    ),
    "card-acc-316": (
        "What will be printed by the conditional branch?",
        "Integer x\nSet x = 15\nif (x > 10)\n    Print \"A\"\nelse\n    Print \"B\"\nend if",
        "pseudocode"
    ),
    "card-acc-317": (
        "What will be printed by the even/odd conditional check?",
        "Integer x\nSet x = 20\nif (x % 2 == 0)\n    Print \"even\"\nelse\n    Print \"odd\"\nend if",
        "pseudocode"
    ),
    "card-acc-318": (
        "What sequence of numbers will be printed by the loop?",
        "Integer i\nfor (i = 1 to 5)\n    Print i\nend for",
        "pseudocode"
    ),
    "card-acc-319": (
        "What will be the final value of `sum` printed after the loop?",
        "Integer sum, i\nSet sum = 0\nfor (i = 1 to 5)\n    sum = sum + i\nend for\nPrint sum",
        "pseudocode"
    ),
    "card-acc-320": (
        "What will be the final value of `x` printed after the loop?",
        "Integer x, i\nSet x = 1\nfor (i = 1 to 4)\n    x = x * 2\nend for\nPrint x",
        "pseudocode"
    ),
    "card-acc-321": (
        "How many times does the following loop execute?",
        "Integer i\nfor (i = 1 to 10)\n    Print i\nend for",
        "pseudocode"
    ),
    "card-acc-322": (
        "How many times is 'Hello' printed by the nested loops?",
        "Integer i, j\nfor (i = 1 to 3)\n    for (j = 1 to 4)\n        Print \"Hello\"\n    end for\nend for",
        "pseudocode"
    ),
    "card-acc-323": (
        "What is the time complexity of the following nested loops?",
        "Integer i, j\nfor (i = 1 to n)\n    for (j = 1 to n)\n        Print (i + j)\n    end for\nend for",
        "pseudocode"
    ),
    "card-acc-324": (
        "What will be the final value of `x` printed after the loop?",
        "Integer x, i\nSet x = 0\nfor (i = 1 to 5)\n    if (i % 2 == 0)\n        x = x + i\n    end if\nend for\nPrint x",
        "pseudocode"
    ),
    "card-acc-325": (
        "What will be the final value of `x` printed after the loop?",
        "Integer x, i\nSet x = 0\nfor (i = 1 to 5)\n    if (i % 2 != 0)\n        x = x + i\n    end if\nend for\nPrint x",
        "pseudocode"
    ),
    "card-acc-326": (
        "In a 0-indexed array `a`, what is the value of `a[2]`?",
        "Integer a[5] = {10, 20, 30, 40, 50}\nPrint a[2]",
        "pseudocode"
    ),
    "card-acc-327": (
        "What will be the final value of `sum` printed after the loop?",
        "Integer a[4] = {2, 4, 6, 8}\nInteger sum = 0, i\nfor (i = 0 to 3)\n    sum = sum + a[i]\nend for\nPrint sum",
        "pseudocode"
    ),
    "card-acc-328": (
        "What will be the final value of `max` printed after the loop?",
        "Integer a[4] = {5, 3, 8, 2}\nInteger max = a[0], i\nfor (i = 1 to 3)\n    if (a[i] > max)\n        max = a[i]\n    end if\nend for\nPrint max",
        "pseudocode"
    ),
    "card-acc-329": (
        "What will be the minimum value found in array `[5, 3, 8, 2]`?",
        "Integer a[4] = {5, 3, 8, 2}\nInteger min = a[0], i\nfor (i = 1 to 3)\n    if (a[i] < min)\n        min = a[i]\n    end if\nend for\nPrint min",
        "pseudocode"
    ),
    "card-acc-330": (
        "What sequence of values will be printed by the reverse loop?",
        "Integer a[5] = {1, 2, 3, 4, 5}\nInteger i\nfor (i = 4 down to 0)\n    Print a[i]\nend for",
        "pseudocode"
    ),
    "card-acc-331": (
        "What sequence of numbers will be printed by the while loop?",
        "Integer x\nSet x = 5\nwhile (x > 0)\n    Print x\n    x = x - 1\nend while",
        "pseudocode"
    ),
    "card-acc-332": (
        "What will be the final value of `x` printed after the while loop terminates?",
        "Integer x\nSet x = 1\nwhile (x < 20)\n    x = x * 2\nend while\nPrint x",
        "pseudocode"
    ),
    "card-acc-333": (
        "What will be the final value of `x` printed after the while loop terminates?",
        "Integer x\nSet x = 10\nwhile (x > 1)\n    x = x / 2   // Integer division\nend while\nPrint x",
        "pseudocode"
    ),
    "card-acc-334": (
        "Which expression correctly tests if integer `x` is between 10 and 20 inclusive?",
        "// Target range: 10 <= x <= 20\nif (condition)\n    Print \"In Range\"\nend if",
        "pseudocode"
    ),
    "card-acc-335": (
        "What will be printed by the logical AND condition?",
        "Integer x, y\nSet x = 10, y = 20\nif (x > 5 AND y > 15)\n    Print \"yes\"\nelse\n    Print \"no\"\nend if",
        "pseudocode"
    ),
    "card-acc-336": (
        "What will be printed by the logical OR condition?",
        "Integer x, y\nSet x = 10, y = 5\nif (x < 5 OR y == 5)\n    Print \"yes\"\nelse\n    Print \"no\"\nend if",
        "pseudocode"
    ),
    "card-acc-337": (
        "What will be printed by the logical NOT condition?",
        "Integer x\nSet x = 5\nif (NOT (x > 10))\n    Print \"A\"\nelse\n    Print \"B\"\nend if",
        "pseudocode"
    ),
    "card-acc-338": (
        "What is printed by the function call `square(5)`?",
        "function square(Integer x)\n    return x * x\nend function\n\nPrint square(5)",
        "pseudocode"
    ),
    "card-acc-339": (
        "What is the printed value of `x` after the function call?",
        "function add(Integer a, Integer b)\n    return a + b\nend function\n\nInteger x = add(5, 3)\nPrint x",
        "pseudocode"
    ),
    "card-acc-340": (
        "What will be the final value of `(a + b)` printed after the loop?",
        "Integer a, b, c\nSet a = 3, b = 5\nfor (c = 1 to 2)\n    b = (a + 4) ^ b\n    a = (b & 3) + a\nend for\nPrint (a + b)",
        "pseudocode"
    ),
    "card-acc-341": (
        "What will be the printed value of `a[1][1] + a[1][0]` after bitwise updates?",
        "Integer a[2][2] = {\n    {3, 5},\n    {6, 2}\n}\n// Bitwise transformations applied to matrix\nPrint (a[1][1] + a[1][0])",
        "pseudocode"
    ),
    "card-acc-342": (
        "What will be returned by the conditional block?",
        "Integer a, b, c\nSet a = 4, b = 6, c = 2\nif (a + b + c < b - a + 5)\n    return (a - b + c)\nelse\n    return (a + b + c)\nend if",
        "pseudocode"
    ),
    "card-acc-343": (
        "What will be the final printed value of `(a + b)`?",
        "Integer a, b, t\nSet a = 6, b = 3\nt = (a | b) + (a & b)\n// Continuing sequential bitwise updates\nPrint (a + b)",
        "pseudocode"
    ),
    "card-acc-344": (
        "What will be printed by the recursive function call `fun(4)`?",
        "function fun(Integer n)\n    if (n <= 1)\n        return 1\n    else\n        return n + fun(n - 2)\n    end if\nend function\n\nPrint fun(4)",
        "pseudocode"
    ),
    "card-acc-345": (
        "What will be the final printed value of `(x + y)`?",
        "Integer x, y, z\nSet x = 2, y = 8\nfor (z = 1 to 3)\n    y = y - z\n    x = x ^ z\nend for\nPrint (x + y)",
        "pseudocode"
    ),
    "card-acc-346": (
        "Given regular expression pattern `^[A-Z]{2}[0-9]{3}[a-z]$`, will string `XY987g` be Accepted or Rejected?",
        "Regex pattern: ^[A-Z]{2}[0-9]{3}[a-z]$\nInput string:  \"XY987g\"\nValidation match result?",
        "pseudocode"
    ),
    "card-acc-347": (
        "What will be the final printed value of `(a + b)` after nested loops?",
        "Integer a, b, i, j\nSet a = 2, b = 0\nfor (i = 1 to 2)\n    for (j = 1 to 2)\n        b = b + (a ^ (i + j))\n    end for\nend for\nPrint (a + b)",
        "pseudocode"
    ),
    "card-acc-348": (
        "What sequence of values will be printed by the do-while loop?",
        "Integer x, y\nSet x = 15, y = 12\ny = x - 1\ndo\n    Print x\n    x = y + x - 2\nwhile (x < 40)",
        "pseudocode"
    ),
    "card-acc-349": (
        "What will be the final printed value of `(a + b + c)`?",
        "Integer a, b, c\nSet a = 5, b = 2, c = 7\nif (1 - c - b > b - 8)\n    a = a + 1\nend if\nc = b + c\nPrint (a + b + c)",
        "pseudocode"
    ),
    "card-acc-350": (
        "What will be the printed value of `a`?",
        "Integer x, y, z, a\nSet x = 9, y = 2, z = 6\na = (x & y) | z\nPrint a",
        "pseudocode"
    ),
    "card-acc-351": (
        "What is printed when characters 'f', 's', and 'b' are summed and printed as integers in C?",
        "char c = 'f'; // ASCII 102\nchar a = 's'; // ASCII 115\nchar b = 'x'; // ASCII 120\nprintf(\"%d\", c + a + b);",
        "c"
    ),
    "card-acc-352": (
        "What will be the final printed value of `(p + q + r)`?",
        "Integer p, q, r\nSet p = 7, q = 4, r = 5\nif ((p + r < q - p) OR (r < p))\n    r = q & p\n    r = (r + 3) & p\nend if\nPrint (p + q + r)",
        "pseudocode"
    ),
    "card-acc-353": (
        "What will be printed for `y` and `z` by the logical NOT operators?",
        "Integer x, y, z\nSet x = 11\ny = !x\nz = !(!x)\nPrint y, z",
        "pseudocode"
    ),
    "card-acc-354": (
        "What will be the final printed value of `(p + q)`?",
        "Integer p, q, r\nSet p = 6, q = 5, r = 6\np = (r + r) ^ q\nfor (r = 4 to 5)\n    continue\nend for\nPrint (p + q)",
        "pseudocode"
    ),
    "card-acc-355": (
        "What will be the final printed value of `(p + q + r)`?",
        "Integer p, q, r\nSet p = 3, q = 6\nr = (q & 7) + q\nif ((3 ^ 5) < 6)\n    p = p + 2\nend if\nPrint (p + q + r)",
        "pseudocode"
    ),
    "card-acc-356": (
        "What will be the final printed value of `(a + b + c)`?",
        "Integer a, b, c\nSet a = 1, b = 8, c = 7\nif (a > b)\n    a = a + 5\nend if\nif (c > b)\n    c = c + 5\nend if\nPrint (a + b + c)",
        "pseudocode"
    ),
    "card-acc-357": (
        "What is the complete printed output of the recursive call `rec(7)`?",
        "function rec(Integer x)\n    if (x > 3)\n        rec(x - 3)\n        Print x\n        rec(x / 2)\n        rec(x / 4)\n    end if\nend function\n\nrec(7)",
        "pseudocode"
    ),
    "card-acc-358": (
        "What will be the printed value of `a[1] + a[2] + a[3]` after the updates?",
        "Integer a[4] = {2, 3, 3, 4}\n// Applying array shift and assignment updates\nPrint (a[1] + a[2] + a[3])",
        "pseudocode"
    ),
    "card-acc-359": (
        "What will be the final value of `(p + q)` printed after the loop?",
        "Integer p, q, r\nSet p = 0, q = 6\nfor (r = 2 to 4)\n    if ((r ^ q) < 6)\n        continue\n    end if\n    p = p + 1\nend for\nPrint (p + q)",
        "pseudocode"
    ),
    "card-acc-360": (
        "What will be the final printed value of `(a + b + c)`?",
        "Integer a, b, c\nSet a = 8, b = 8, c = 9\nif (a < 5)\n    b = 0\nelse if (a == 8)\n    b = b + b + c\nelse\n    c = 0\nend if\nPrint (a + b + c)",
        "pseudocode"
    ),
    "card-acc-361": (
        "What will be the final printed value of `(a + b + c)`?",
        "Integer a, b, c\nSet a = 3, b = 1, c = 2\nb = b ^ a\nif (b != 0 AND c != 0)\n    b = 1\nend if\nif (a != 0)\n    a = a % 1\n    c = 0\nend if\nPrint (a + b + c)",
        "pseudocode"
    ),
    "card-acc-362": (
        "What will be the final printed value of `(p + q + r)`?",
        "Integer p, q, r\nSet p = 8, q = 5, r = 10\nif ((p & q) < r)\n    q = r & r\n    p = 9 + q\nend if\nif (p + q > r - p)\n    q = (q + 5) & p\nend if\nPrint (p + q + r)",
        "pseudocode"
    ),

    # --- Group 4: card-acc-453 to card-acc-456: JavaScript (4 cards) ---
    "card-acc-453": (
        "What will be printed by `document.write` after appending the paragraph?",
        "const para = document.createElement(\"p\");\npara.innerText = \"Dynamic Text\";\ndocument.body.appendChild(para);\n\ndocument.write(document.getElementsByTagName(\"p\").length);",
        "javascript"
    ),
    "card-acc-454": (
        "What happens on the page when the button is clicked?",
        "<!-- HTML -->\n<button onclick=\"changeText(this)\">Click Me</button>\n\n// JavaScript\nfunction changeText(button) {\n    button.innerHTML = \"Click\";\n    document.write(button.innerHTML);\n}",
        "javascript"
    ),
    "card-acc-455": (
        "What data type is printed by `typeof val` for an HTML text input element?",
        "// HTML: <input type=\"text\" id=\"age\" value=\"123\" />\nconst val = document.getElementById(\"age\").value;\ndocument.write(typeof val);",
        "javascript"
    ),
    "card-acc-456": (
        "What string will be displayed inside the `div` element?",
        "const myDiv = document.getElementById(\"result\");\nmyDiv.innerHTML = 10 + 20 + \"30\";",
        "javascript"
    ),

    # --- Group 5: card-acc-457 to card-acc-467 (11 cards) ---
    "card-acc-457": (
        "What will be printed after the bitwise operations and loop?",
        "Integer num = 85, count = 0, x, y\nx = num << 1\ny = (x ^ num) + 1\nwhile (y / 2 != 0)\n    y = y / 2\nend while\nPrint y, x",
        "pseudocode"
    ),
    "card-acc-458": (
        "What will be the final printed values of `P`, `Q`, and `R`?",
        "Integer P, Q, R\nSet Q = 7, R = 10\nP = Q % R\nQ = Q + P\nR = R + Q\nPrint P, Q, R",
        "pseudocode"
    ),
    "card-acc-459": (
        "What sequence of numbers is printed by the recursive call `fun(3, 4)`?",
        "function fun(Integer x, Integer y)\n    if (x > 0)\n        fun(x - 1, y + 1)\n        Print y\n    end if\nend function\n\nfun(3, 4)",
        "pseudocode"
    ),
    "card-acc-460": (
        "What is returned by the tail-recursive call `fun(5, 1)`?",
        "function fun(Integer n, Integer a)\n    if (n == 0)\n        return a\n    else\n        return fun(n - 1, n * a)\n    end if\nend function\n\nPrint fun(5, 1)",
        "pseudocode"
    ),
    "card-acc-461": (
        "What will be the final value of `sum` printed after calculating the sum of squares?",
        "Integer n = 7, sum = 0, i\nfor (i = 1 to n)\n    sum = sum + (i * i)\nend for\nPrint sum",
        "pseudocode"
    ),
    "card-acc-462": (
        "What is returned when the function with a static variable is called?",
        "int getVal(int n) {\n    static int i = 1;\n    if (n >= 5) {\n        return n;\n    }\n    n = n + i++;\n    return getVal(n);\n}\n\n// Initial call with n = 1\nprintf(\"%d\", getVal(1));",
        "c"
    ),
    "card-acc-463": (
        "What is returned by the recursive call `fun(6)`?",
        "function fun(Integer n)\n    if (n == 0)\n        return 0\n    else\n        return n + fun(n - 2)\n    end if\nend function\n\nPrint fun(6)",
        "pseudocode"
    ),
    "card-acc-464": (
        "What is the final value of `sum` printed after digit processing in the loop?",
        "Integer num, digit, sum = 0\n// While num > 0, extracts digits and adds matching values\nPrint sum",
        "pseudocode"
    ),
    "card-acc-465": (
        "What is printed after processing the array and condition?",
        "Integer arr[5] = {10, 20, 30, 40, 50}\nInteger result = 0, i\nfor (i = 0 to 4)\n    if (arr[i] >= 20 AND arr[i] <= 40)\n        result = result + arr[i]\n    end if\nend for\nPrint result",
        "pseudocode"
    ),
    "card-acc-466": (
        "What word will be printed after reconstructing the characters through the loop?",
        "String s = \"tech\", result = \"\"\nInteger order[4] = {3, 1, 2, 0}\nfor (Integer i = 0 to 3)\n    result = result + s[order[i]]\nend for\nPrint result",
        "pseudocode"
    ),
    "card-acc-467": (
        "What will be returned by the Fibonacci-style recursive function `mystery(4)`?",
        "function mystery(Integer n)\n    if (n <= 1)\n        return 1\n    else\n        return mystery(n - 1) + mystery(n - 2)\n    end if\nend function\n\nPrint mystery(4)",
        "pseudocode"
    ),
}

def main():
    with open("src/lib/accentureData.ts", "r") as f:
        content = f.read()

    m_decks = re.search(r"export const ACCENTURE_DECKS: Deck\[\] = (\[[\s\S]*?\]);\s*export const ACCENTURE_CARDS", content)
    m_cards = re.search(r"export const ACCENTURE_CARDS: Flashcard\[\] = (\[[\s\S]*\]);\s*$", content)

    if not m_decks or not m_cards:
        raise ValueError("Could not parse accentureData.ts")

    decks = json.loads(m_decks.group(1))
    cards = json.loads(m_cards.group(1))

    updated_count = 0
    for card in cards:
        cid = card["id"]
        if cid in PSEUDOCODE_MAP:
            new_front, new_snippet, new_lang = PSEUDOCODE_MAP[cid]
            card["front"] = new_front
            card["codeSnippet"] = new_snippet
            card["codeLanguage"] = new_lang
            card["type"] = "mcq"  # retain mcq with code view
            updated_count += 1

    print(f"Updated {updated_count} / {len(PSEUDOCODE_MAP)} pseudocode cards with segmented front and codeSnippet.")

    out = f"""import {{ Deck, Flashcard }} from "./types";

export const ACCENTURE_DECKS: Deck[] = {json.dumps(decks, indent=2)};

export const ACCENTURE_CARDS: Flashcard[] = {json.dumps(cards, indent=2)};
"""

    with open("src/lib/accentureData.ts", "w") as f:
        f.write(out)

    print("Saved updated cards to src/lib/accentureData.ts successfully.")

if __name__ == "__main__":
    main()
