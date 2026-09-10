export interface CodingExample {
  input: string;
  output: string;
  explanation: string;
}

export interface CodingTestCase {
  id: string;
  input: any;
  expected: any;
  label: string;
}

export interface CodingChallenge {
  id: string;
  title: string;
  examReference: string;
  category: string;
  difficulty: 'Easy' | 'Easy-Medium' | 'Medium' | 'Hard';
  tags: string[];
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  examples: CodingExample[];
  algorithmicApproach: string;
  complexity: {
    timeComplexity: string;
    spaceComplexity: string;
  };
  starterCode: {
    python: string;
    javascript: string;
    java: string;
    cpp: string;
    html?: string;
    css?: string;
  };
  codeImplementations: {
    python?: string;
    javascript?: string;
    java?: string;
    cpp?: string;
    html?: string;
    css?: string;
  };
  testCases: CodingTestCase[];
}

export const CODING_CHALLENGES: CodingChallenge[] = [
{
  "id": "CODING-01",
  "title": "Index-Based Array Transformation",
  "examReference": "September 8, 2026 Examination (Shift 1)",
  "category": "Arrays & Modulo Arithmetic",
  "difficulty": "Medium",
  "tags": [
    "Array Manipulation",
    "Modulo Arithmetic",
    "In-Place Updates"
  ],
  "problemStatement": "You are given a 0-indexed integer array 'nums' of size n. You are required to perform the following two transformations on each element at index i (0 <= i < n):\n1. Subtract the value ((i % 7) * 3) from nums[i].\n2. If index i is evenly divisible by 11 (i.e., i % 11 == 0), add the value ((i // 11) * 2) to nums[i].\nReturn the modified array after all operations have been applied in order.",
  "inputFormat": "An integer n denoting array size, followed by n space-separated integers representing the array 'nums'.",
  "outputFormat": "Print or return the transformed array of n integers.",
  "constraints": [
    "1 <= nums.length <= 10^5",
    "-10^6 <= nums[i] <= 10^6",
    "0 <= i < nums.length"
  ],
  "examples": [
    {
      "input": "nums = [15, 24, 33, 42, 55, 66, 77, 88]",
      "output": "[15, 21, 27, 33, 43, 51, 59, 88]",
      "explanation": "At index 0: i%7=0, i%11=0 -> nums[0] = 15 - (0*3) + (0*2) = 15. At index 1: i%7=1 -> nums[1] = 24 - 3 = 21. At index 7: i%7=0 -> nums[7] = 88 - 0 = 88."
    }
  ],
  "algorithmicApproach": "1. Iterate through the array using a single loop from i = 0 to n - 1.\n2. In each iteration, evaluate subtrahend = (i % 7) * 3 and update nums[i] -= subtrahend.\n3. Check if i % 11 == 0. If true, evaluate addend = (i / 11) * 2 and update nums[i] += addend.\n4. Return nums. Time complexity is strictly O(N) linear time, and Auxiliary Space is O(1) in-place.",
  "complexity": {
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  "starterCode": {
    "javascript": "/**\n * @param {number[]} nums\n * @returns {number[]}\n */\nfunction transformArray(nums) {\n  // Write your code here\n  // 1. Subtract ((i % 7) * 3) from nums[i]\n  // 2. If (i % 11 === 0), add ((Math.floor(i / 11)) * 2) to nums[i]\n  return nums;\n}\n",
    "python": "from typing import List\n\ndef transform_array(nums: List[int]) -> List[int]:\n    # Write your solution here\n    # 1. nums[i] -= (i % 7) * 3\n    # 2. If i % 11 == 0: nums[i] += (i // 11) * 2\n    return nums\n",
    "java": "public class ArrayTransformation {\n    public static int[] transformArray(int[] nums) {\n        // Write your solution here\n        return nums;\n    }\n}\n",
    "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> transformArray(vector<int>& nums) {\n    // Write your solution here\n    return nums;\n}\n"
  },
  "codeImplementations": {
    "cpp": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> transformArray(vector<int>& nums) {\n    int n = nums.size();\n    for (int i = 0; i < n; i++) {\n        // Step 1: Subtract (i % 7) * 3\n        nums[i] -= (i % 7) * 3;\n        \n        // Step 2: If index is divisible by 11, add (i / 11) * 2\n        if (i % 11 == 0) {\n            nums[i] += (i / 11) * 2;\n        }\n    }\n    return nums;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    vector<int> nums = {15, 24, 33, 42, 55, 66, 77, 88};\n    vector<int> result = transformArray(nums);\n    \n    for (int x : result) {\n        cout << x << \" \";\n    }\n    cout << \"\\n\";\n    return 0;\n}",
    "python": "from typing import List\n\ndef transform_array(nums: List[int]) -> List[int]:\n    \"\"\"\n    Applies index-based transformation rules in-place to nums:\n    1. nums[i] -= (i % 7) * 3\n    2. If i % 11 == 0: nums[i] += (i // 11) * 2\n    \"\"\"\n    for i in range(len(nums)):\n        nums[i] -= (i % 7) * 3\n        if i % 11 == 0:\n            nums[i] += (i // 11) * 2\n    return nums\n\nif __name__ == \"__main__\":\n    test_nums = [15, 24, 33, 42, 55, 66, 77, 88]\n    output = transform_array(test_nums)\n    print(\"Transformed Array:\", output)\n    # Expected: [15, 21, 27, 33, 43, 51, 59, 88]",
    "java": "import java.util.Arrays;\n\npublic class ArrayTransformation {\n    public static int[] transformArray(int[] nums) {\n        for (int i = 0; i < nums.length; i++) {\n            nums[i] -= (i % 7) * 3;\n            if (i % 11 == 0) {\n                nums[i] += (i / 11) * 2;\n            }\n        }\n        return nums;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {15, 24, 33, 42, 55, 66, 77, 88};\n        transformArray(nums);\n        System.out.println(\"Transformed Array: \" + Arrays.toString(nums));\n    }\n}",
    "javascript": "/**\n * Transforms array elements based on index rules.\n * @param {number[]} nums\n * @returns {number[]}\n */\nfunction transformArray(nums) {\n    for (let i = 0; i < nums.length; i++) {\n        nums[i] -= (i % 7) * 3;\n        if (i % 11 === 0) {\n            nums[i] += Math.floor(i / 11) * 2;\n        }\n    }\n    return nums;\n}\n\nconst testArr = [15, 24, 33, 42, 55, 66, 77, 88];\nconsole.log(\"Transformed:\", transformArray(testArr));"
  },
  "testCases": [
    {
      "id": "tc-1",
      "label": "Example 1 (Shift 1 Exam Case)",
      "input": [
        15,
        24,
        33,
        42,
        55,
        66,
        77,
        88
      ],
      "expected": [
        15,
        21,
        27,
        33,
        43,
        51,
        59,
        88
      ]
    },
    {
      "id": "tc-2",
      "label": "Boundary Case: Multiples of 11",
      "input": [
        0,
        11,
        22,
        33
      ],
      "expected": [
        0,
        8,
        16,
        24
      ]
    },
    {
      "id": "tc-3",
      "label": "Single Element Array",
      "input": [
        100
      ],
      "expected": [
        100
      ]
    },
    {
      "id": "tc-4",
      "label": "Multiples of 7 Sequence",
      "input": [
        7,
        14,
        21,
        28,
        35,
        42,
        49,
        56
      ],
      "expected": [
        7,
        11,
        15,
        19,
        23,
        27,
        31,
        56
      ]
    }
  ]
},
{
  "id": "CODING-02",
  "title": "Smallest Equivalent Sum Representation",
  "examReference": "September 8, 2026 Examination (Shift 2)",
  "category": "Greedy Algorithms & Number Theory",
  "difficulty": "Medium",
  "tags": [
    "Greedy",
    "Math",
    "Number Theory",
    "String Construction"
  ],
  "problemStatement": "You are given a target positive integer N. For any positive integer X, let E(X) represent the sum of the decimal digits of X. Find the SMALLEST positive integer X such that E(X) = N. If no valid positive integer can be formed, return '-1'. Since the resulting number X may exceed standard 64-bit integer ranges when N is large (e.g., N = 112), return X as a string of digits.",
  "inputFormat": "A single integer N denoting the target digit sum.",
  "outputFormat": "A string representing the smallest positive integer X whose digit sum equals N.",
  "constraints": [
    "1 <= N <= 10^5"
  ],
  "examples": [
    {
      "input": "N = 20",
      "output": "\"299\"",
      "explanation": "Sum of digits of 299 is 2 + 9 + 9 = 20. Any smaller number (e.g., 389, 479) has sum 20 or fewer digits, but 299 is the minimum possible positive integer."
    },
    {
      "input": "N = 112",
      "output": "\"4999999999999\"",
      "explanation": "112 = 12 * 9 + 4. Placing twelve '9's at the least significant positions and '4' as the most significant digit yields the smallest positive number."
    }
  ],
  "algorithmicApproach": "To minimize the number X:\n1. We must first minimize the total number of digits in X. Since each decimal digit can be at most 9, the minimum number of digits needed is ceil(N / 9).\n2. Among numbers with the same number of digits, smaller numbers have smaller leading (most significant) digits.\n3. Therefore, greedy placement is optimal: assign the maximum possible value (9) to the rightmost (least significant) digits as many times as possible.\n4. Subtract 9 repeatedly from N until N <= 9. The final remaining value of N is placed at the leading position.\n5. Assemble the digits and return as string. Time complexity is O(N / 9) = O(N) operations, and Space is O(N / 9) to store the digit characters.",
  "complexity": {
    "timeComplexity": "O(N / 9) = O(N)",
    "spaceComplexity": "O(N / 9) = O(N)"
  },
  "starterCode": {
    "javascript": "/**\n * @param {number} n\n * @returns {string}\n */\nfunction findSmallestNumber(n) {\n  // Write your code here\n  // Find the smallest positive integer whose digits sum to n\n  // Return as string\n  return ;\n}\n",
    "python": "def find_smallest_number(n: int) -> str:\n    # Write your solution here\n    # Find smallest positive integer whose digit sum equals n\n    return \n",
    "java": "public class SmallestDigitSum {\n    public static String findSmallestNumber(int N) {\n        // Write your solution here\n        return ;\n    }\n}\n",
    "cpp": "#include <string>\nusing namespace std;\n\nstring findSmallestNumber(int N) {\n    // Write your solution here\n    return ;\n}\n"
  },
  "codeImplementations": {
    "cpp": "#include <iostream>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\nstring findSmallestNumber(int N) {\n    if (N <= 0) return \"-1\";\n    \n    string digits = \"\";\n    // Greedily append '9' for least significant places\n    while (N > 9) {\n        digits.push_back('9');\n        N -= 9;\n    }\n    // Append the remaining leading digit\n    digits.push_back('0' + N);\n    \n    // Reverse so the smallest leading digit is at the front\n    reverse(digits.begin(), digits.end());\n    return digits;\n}\n\nint main() {\n    cout << \"N = 20 -> \" << findSmallestNumber(20) << endl;     // Expected: 299\n    cout << \"N = 112 -> \" << findSmallestNumber(112) << endl;   // Expected: 4999999999999\n    cout << \"N = 9 -> \" << findSmallestNumber(9) << endl;       // Expected: 9\n    return 0;\n}",
    "python": "def find_smallest_number(n: int) -> str:\n    \"\"\"\n    Returns the smallest positive integer (as string) whose digits sum to n.\n    Greedily maximizes '9's in least significant positions.\n    \"\"\"\n    if n <= 0:\n        return \"-1\"\n    \n    digits = []\n    while n > 9:\n        digits.append('9')\n        n -= 9\n    \n    digits.append(str(n))\n    return \"\".join(reversed(digits))\n\nif __name__ == \"__main__\":\n    test_cases = [9, 20, 112]\n    for tc in test_cases:\n        print(f\"N = {tc} -> {find_smallest_number(tc)}\")\n    # N = 9 -> 9\n    # N = 20 -> 299\n    # N = 112 -> 4999999999999",
    "java": "public class SmallestDigitSum {\n    public static String findSmallestNumber(int N) {\n        if (N <= 0) return \"-1\";\n        \n        StringBuilder sb = new StringBuilder();\n        while (N > 9) {\n            sb.append('9');\n            N -= 9;\n        }\n        sb.append(N);\n        return sb.reverse().toString();\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"N = 20 -> \" + findSmallestNumber(20));\n        System.out.println(\"N = 112 -> \" + findSmallestNumber(112));\n    }\n}",
    "javascript": "/**\n * Computes the smallest positive integer whose digits sum to N.\n * @param {number} n\n * @returns {string}\n */\nfunction findSmallestNumber(n) {\n    if (n <= 0) return \"-1\";\n    \n    let digits = [];\n    while (n > 9) {\n        digits.push('9');\n        n -= 9;\n    }\n    digits.push(n.toString());\n    return digits.reverse().join('');\n}\n\nconsole.log(\"N = 20 ->\", findSmallestNumber(20));\nconsole.log(\"N = 112 ->\", findSmallestNumber(112));"
  },
  "testCases": [
    {
      "id": "tc-1",
      "label": "Example 1: N = 20",
      "input": 20,
      "expected": "299"
    },
    {
      "id": "tc-2",
      "label": "Example 2: N = 112 (Large BigInt)",
      "input": 112,
      "expected": "4999999999999"
    },
    {
      "id": "tc-3",
      "label": "Single Digit Target: N = 9",
      "input": 9,
      "expected": "9"
    },
    {
      "id": "tc-4",
      "label": "Boundary Target: N = 1",
      "input": 1,
      "expected": "1"
    },
    {
      "id": "tc-5",
      "label": "Medium Target: N = 28",
      "input": 28,
      "expected": "1999"
    }
  ]
},
{
  "id": "CODING-03",
  "title": "Web-Based UI Code Modification Tasks",
  "examReference": "September 8, 2026 Examination (Frontend Assessment Component)",
  "category": "Frontend Web Development (HTML5, CSS3, DOM JS)",
  "difficulty": "Easy-Medium",
  "tags": [
    "DOM Manipulation",
    "CSS Styling",
    "HTML Attributes",
    "Event Handlers"
  ],
  "problemStatement": "In the frontend technical assessment section, candidates are presented with a web page containing layout elements and must apply three surgical code modifications to satisfy unit tests:\nTask 1 (HTML): Locate all existing button elements in the template and append the class 'new' to each button.\nTask 2 (CSS): Modify the style rule for '.container' so that its background-color is set to '#f4f4f4'.\nTask 3 (JavaScript): Implement a function named 'toggleVisibility()' that inspects the element with id 'targetBox'. If 'targetBox' display style is 'none', change it to 'block'; otherwise, set it to 'none'.",
  "inputFormat": "Interactive DOM environment containing pre-rendered elements.",
  "outputFormat": "Modified HTML markup, updated stylesheet rules, and completed JavaScript event function.",
  "constraints": [
    "Must preserve existing tag IDs and classes.",
    "Do not introduce external libraries (Vanilla JS / Pure CSS only)."
  ],
  "examples": [
    {
      "input": "Clicking button with onclick='toggleVisibility()'",
      "output": "#targetBox display switches between 'none' and 'block'",
      "explanation": "Toggles visibility cleanly without disrupting layout flow."
    }
  ],
  "algorithmicApproach": "1. HTML: Add class attribute class='new' to all <button> tags.\n2. CSS: Declare or update .container { background-color: #f4f4f4; }.\n3. JS: Use document.getElementById('targetBox') to read current style.display. If 'none', set to 'block'; else set to 'none'.",
  "complexity": {
    "timeComplexity": "O(1) per DOM operation",
    "spaceComplexity": "O(1)"
  },
  "starterCode": {
    "javascript": "function toggleVisibility() {\n  // Task 3: Toggle display property of #targetBox between 'none' and 'block'\n  const target = document.getElementById(targetBox);\n  if (!target) return;\n  \n}\n\nfunction resetView() {\n  const target = document.getElementById(targetBox);\n  if (target) {\n    target.style.display = none;\n  }\n}\n",
    "html": "<div class=\"container\">\n  <h2>Action Panel</h2>\n  <!-- Task 1: Add class=\"new\" to all button elements -->\n  <button onclick=\"toggleVisibility()\">Toggle Details</button>\n  <button onclick=\"resetView()\">Reset</button>\n\n  <div id=\"targetBox\" style=\"display: none; margin-top: 15px; padding: 10px; border: 1px solid #ccc;\">\n    <p>Assessment candidate content is now visible.</p>\n  </div>\n</div>\n",
    "css": "/* Task 2: Set background-color to #f4f4f4 for .container */\n.container {\n  width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n  /* Add background-color: #f4f4f4 here */\n  font-family: Arial, sans-serif;\n}\n\nbutton.new {\n  padding: 8px 16px;\n  margin-right: 8px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n",
    "python": "# Frontend Assessment Component (HTML5/CSS3/DOM JS Task)\n# Refer to HTML, CSS, and JS tabs for code implementation.\n",
    "java": "// Frontend Assessment Component (HTML5/CSS3/DOM JS Task)\n// Refer to HTML, CSS, and JS tabs for code implementation.\n",
    "cpp": "// Frontend Assessment Component (HTML5/CSS3/DOM JS Task)\n// Refer to HTML, CSS, and JS tabs for code implementation.\n"
  },
  "codeImplementations": {
    "html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Accenture Technical Web Assessment</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"container\">\n        <h2>Action Panel</h2>\n        <!-- Task 1: Add class=\"new\" to all button elements -->\n        <button class=\"new\" onclick=\"toggleVisibility()\">Toggle Details</button>\n        <button class=\"new\" onclick=\"resetView()\">Reset</button>\n\n        <div id=\"targetBox\" style=\"display: none; margin-top: 15px; padding: 10px; border: 1px solid #ccc;\">\n            <p>Assessment candidate content is now visible.</p>\n        </div>\n    </div>\n    <script src=\"script.js\"></script>\n</body>\n</html>",
    "css": "/* Task 2: Update background-color for container */\n.container {\n    width: 400px;\n    margin: 40px auto;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    background-color: #f4f4f4; /* Updated property per requirement */\n    font-family: Arial, sans-serif;\n}\n\nbutton.new {\n    padding: 8px 16px;\n    margin-right: 8px;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\nbutton.new:hover {\n    background-color: #0056b3;\n}",
    "javascript": "/**\n * Task 3: Toggle display property of #targetBox\n */\nfunction toggleVisibility() {\n    const target = document.getElementById(\"targetBox\");\n    if (!target) return;\n    \n    if (target.style.display === \"none\" || target.style.display === \"\") {\n        target.style.display = \"block\";\n    } else {\n        target.style.display = \"none\";\n    }\n}\n\nfunction resetView() {\n    const target = document.getElementById(\"targetBox\");\n    if (target) {\n        target.style.display = \"none\";\n    }\n}"
  },
  "testCases": [
    {
      "id": "tc-1",
      "label": "Task 1: Button class check",
      "input": "Check button elements",
      "expected": "All buttons contain class \"new\""
    },
    {
      "id": "tc-2",
      "label": "Task 2: .container background check",
      "input": "Check .container background-color",
      "expected": "#f4f4f4"
    },
    {
      "id": "tc-3",
      "label": "Task 3: toggleVisibility() execution",
      "input": "Invoke toggleVisibility()",
      "expected": "Toggles #targetBox between \"block\" and \"none\""
    }
  ]
},
];
