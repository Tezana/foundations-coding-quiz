window.QUIZ_MODULES = [
  {
    "id": "module1",
    "title": "Module 1: Algorithmic Thinking & Programming",
    "questions": [
      {
        "q": "What is an algorithm?",
        "choices": [
          "A step-by-step solution to a problem",
          "A type of database",
          "A computer screen",
          "A programming error"
        ],
        "answer": 0,
        "explanation": "An algorithm is a sequence of logical steps used to solve a problem."
      },
      {
        "q": "What is a program?",
        "choices": [
          "A set of instructions a computer can execute",
          "A flowchart symbol",
          "A database key",
          "A math formula only"
        ],
        "answer": 0,
        "explanation": "A program is code containing instructions the computer can execute."
      },
      {
        "q": "What does IPO stand for?",
        "choices": [
          "Input, Process, Output",
          "Internet, Program, Operation",
          "Input, Python, Object",
          "Instruction, Process, Order"
        ],
        "answer": 0,
        "explanation": "Programs commonly follow Input \u2192 Process \u2192 Output."
      },
      {
        "q": "Which logic pattern means instructions happen in order?",
        "choices": [
          "Sequence",
          "Selection",
          "Iteration",
          "Recursion"
        ],
        "answer": 0,
        "explanation": "Sequence means do Step 1, then Step 2, then Step 3."
      },
      {
        "q": "Which logic pattern means the program makes a decision?",
        "choices": [
          "Selection",
          "Sequence",
          "Iteration",
          "Compilation"
        ],
        "answer": 0,
        "explanation": "Selection chooses a path based on a condition, often using if/else."
      },
      {
        "q": "Which logic pattern means repeating instructions?",
        "choices": [
          "Iteration",
          "Selection",
          "Sequence",
          "Declaration"
        ],
        "answer": 0,
        "explanation": "Iteration repeats instructions using loops such as for or while."
      },
      {
        "q": "What does a variable do?",
        "choices": [
          "Stores information",
          "Deletes code",
          "Compiles Python",
          "Creates a database automatically"
        ],
        "answer": 0,
        "explanation": "A variable is a named place used to store a value."
      },
      {
        "q": "Which data type stores a whole number such as 25?",
        "choices": [
          "int",
          "float",
          "str",
          "bool"
        ],
        "answer": 0,
        "explanation": "int means integer, or whole number."
      },
      {
        "q": "Which data type stores a decimal such as 3.14?",
        "choices": [
          "float",
          "int",
          "str",
          "bool"
        ],
        "answer": 0,
        "explanation": "A float stores numbers with decimals."
      },
      {
        "q": "Which data type stores text such as \"Hello\"?",
        "choices": [
          "str",
          "int",
          "float",
          "bool"
        ],
        "answer": 0,
        "explanation": "str means string, which stores text."
      },
      {
        "q": "Which data type stores True or False?",
        "choices": [
          "bool",
          "str",
          "int",
          "float"
        ],
        "answer": 0,
        "explanation": "bool means Boolean, which stores True or False."
      },
      {
        "q": "In Python, what does = mean?",
        "choices": [
          "Assign a value",
          "Compare two values",
          "Add two values",
          "End a program"
        ],
        "answer": 0,
        "explanation": "One equals sign assigns a value, as in x = 5."
      },
      {
        "q": "In Python, what does == mean?",
        "choices": [
          "Compare two values",
          "Assign a value",
          "Print a value",
          "Start a loop"
        ],
        "answer": 0,
        "explanation": "Two equals signs compare values."
      },
      {
        "q": "What does print() do?",
        "choices": [
          "Displays output",
          "Gets keyboard input",
          "Creates a variable",
          "Sorts a list"
        ],
        "answer": 0,
        "explanation": "print() displays information on the screen."
      },
      {
        "q": "What does input() return by default in Python?",
        "choices": [
          "A string",
          "An integer",
          "A float",
          "A Boolean"
        ],
        "answer": 0,
        "explanation": "input() returns text, so numbers often need conversion with int() or float()."
      },
      {
        "q": "What is pseudocode?",
        "choices": [
          "A plain-language plan for program logic",
          "A Python error",
          "A database query",
          "Machine code"
        ],
        "answer": 0,
        "explanation": "Pseudocode helps plan an algorithm before writing actual code."
      },
      {
        "q": "What is the correct workflow?",
        "choices": [
          "Problem \u2192 Algorithm \u2192 Pseudocode \u2192 Code",
          "Code \u2192 Problem \u2192 Output \u2192 Algorithm",
          "Database \u2192 Code \u2192 Problem",
          "Output \u2192 Input \u2192 Code"
        ],
        "answer": 0,
        "explanation": "The instructor guide uses Problem \u2192 Algorithm \u2192 Pseudocode \u2192 Code."
      },
      {
        "q": "What does a linear search do?",
        "choices": [
          "Checks items one by one",
          "Always checks the middle",
          "Sorts a list",
          "Checks only the first item"
        ],
        "answer": 0,
        "explanation": "Linear search checks each item one at a time."
      },
      {
        "q": "What must be true before using binary search?",
        "choices": [
          "The list must be sorted",
          "The list must contain text",
          "The list must be empty",
          "The list must have 100 items"
        ],
        "answer": 0,
        "explanation": "Binary search depends on sorted order so it can eliminate half the list."
      },
      {
        "q": "How does binary search work?",
        "choices": [
          "Check the middle and eliminate half",
          "Check every item one by one",
          "Randomly choose values",
          "Always start at the end"
        ],
        "answer": 0,
        "explanation": "Binary search repeatedly checks the middle and discards half of the remaining search area."
      },
      {
        "q": "What is a shortest path algorithm used for?",
        "choices": [
          "Finding the best route between points",
          "Sorting names",
          "Finding duplicate text only",
          "Converting strings to numbers"
        ],
        "answer": 0,
        "explanation": "Shortest path algorithms find the lowest-cost, shortest, or fastest route."
      },
      {
        "q": "What is the longest common substring?",
        "choices": [
          "The longest continuous matching sequence in two strings",
          "The longest word in one file",
          "Any letters that appear anywhere",
          "A sorted list"
        ],
        "answer": 0,
        "explanation": "The matching characters must be continuous and in the same order."
      },
      {
        "q": "What does polynomial time generally mean in this course?",
        "choices": [
          "Runtime grows at a manageable rate as input grows",
          "The program never finishes",
          "The program has no input",
          "The algorithm uses only multiplication"
        ],
        "answer": 0,
        "explanation": "Polynomial growth is generally treated as efficient/manageable."
      },
      {
        "q": "What is true about NP-complete problems?",
        "choices": [
          "No known efficient algorithm exists for them",
          "They are always easy",
          "They cannot be solved at all",
          "They only involve databases"
        ],
        "answer": 0,
        "explanation": "No known polynomial-time solution exists for NP-complete problems."
      },
      {
        "q": "Which is an NP-complete example from the course?",
        "choices": [
          "Traveling Salesman Problem",
          "Printing Hello World",
          "Adding 2 + 2",
          "Displaying a name"
        ],
        "answer": 0,
        "explanation": "The course uses the Traveling Salesman Problem as an NP-complete example."
      },
      {
        "q": "What does dynamic programming do?",
        "choices": [
          "Solves smaller repeated subproblems once and reuses the answers",
          "Always picks the current best choice",
          "Only searches graphs",
          "Only creates web pages"
        ],
        "answer": 0,
        "explanation": "Dynamic programming stores solutions to repeated subproblems to avoid doing the same work again."
      },
      {
        "q": "What does a greedy algorithm do?",
        "choices": [
          "Chooses the best-looking option right now",
          "Checks every possible solution first",
          "Never makes decisions",
          "Only works with strings"
        ],
        "answer": 0,
        "explanation": "Greedy algorithms make the locally best choice at each step."
      },
      {
        "q": "What is procedural programming?",
        "choices": [
          "Programming with step-by-step procedures",
          "Programming only with databases",
          "Programming without instructions",
          "Programming only for websites"
        ],
        "answer": 0,
        "explanation": "Procedural programming follows a sequence of instructions and procedures."
      },
      {
        "q": "What is object-oriented programming (OOP)?",
        "choices": [
          "Organizing code around objects with data and actions",
          "Writing only math equations",
          "Using no functions",
          "A database security method"
        ],
        "answer": 0,
        "explanation": "OOP groups related data (attributes) and actions (methods) into objects."
      },
      {
        "q": "What is functional programming focused on?",
        "choices": [
          "Functions and data transformations",
          "Only user interface design",
          "Only databases",
          "Hardware repair"
        ],
        "answer": 0,
        "explanation": "Functional programming emphasizes functions and transforming data."
      },
      {
        "q": "What does immutability mean?",
        "choices": [
          "Data is not changed after it is created",
          "Data must be deleted",
          "Every value is zero",
          "Code cannot run"
        ],
        "answer": 0,
        "explanation": "Immutable data remains unchanged; a new value is created instead."
      },
      {
        "q": "What is event-driven programming?",
        "choices": [
          "The program reacts when an event happens",
          "The program runs only once a year",
          "The program cannot use input",
          "The program is always compiled"
        ],
        "answer": 0,
        "explanation": "Events such as clicks or key presses trigger code to run."
      },
      {
        "q": "What is declarative programming?",
        "choices": [
          "Describe what result you want, not every step to get it",
          "Write every machine instruction yourself",
          "Only use loops",
          "Only write comments"
        ],
        "answer": 0,
        "explanation": "Declarative programming focuses on what should happen rather than exactly how to do it."
      },
      {
        "q": "Which flowchart shape usually represents a decision?",
        "choices": [
          "Diamond",
          "Rectangle",
          "Oval",
          "Arrow"
        ],
        "answer": 0,
        "explanation": "A diamond represents a decision or condition."
      },
      {
        "q": "Which flowchart shape usually represents a process/action?",
        "choices": [
          "Rectangle",
          "Diamond",
          "Oval",
          "Arrow"
        ],
        "answer": 0,
        "explanation": "A rectangle represents a process or action."
      },
      {
        "q": "Which flowchart shape usually represents Start or End?",
        "choices": [
          "Oval",
          "Diamond",
          "Rectangle",
          "Parallelogram"
        ],
        "answer": 0,
        "explanation": "An oval is commonly used for Start and End."
      },
      {
        "q": "Which flowchart shape usually represents Input/Output?",
        "choices": [
          "Parallelogram",
          "Diamond",
          "Rectangle",
          "Oval"
        ],
        "answer": 0,
        "explanation": "A parallelogram commonly represents data entering or leaving the program."
      },
      {
        "q": "What do arrows show in a flowchart?",
        "choices": [
          "Direction of flow",
          "A variable type",
          "A database key",
          "An error"
        ],
        "answer": 0,
        "explanation": "Arrows show what step comes next."
      },
      {
        "q": "What is a compiled language?",
        "choices": [
          "Code is translated before the program runs",
          "Code can never run",
          "Code is translated only after output",
          "Code is always Python"
        ],
        "answer": 0,
        "explanation": "Compiled code is translated before execution."
      },
      {
        "q": "What is an interpreted language?",
        "choices": [
          "Code is read and executed as the program runs",
          "Code is translated completely before running",
          "A language only for databases",
          "A language that cannot use functions"
        ],
        "answer": 0,
        "explanation": "Interpreted code is processed as it runs. Python is the course example."
      }
    ]
  }
];
