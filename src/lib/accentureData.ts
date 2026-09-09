import { Deck, Flashcard } from "./types";

export const ACCENTURE_DECKS: Deck[] = [
  {
    "id": "deck-ms-office",
    "title": "MS Office & Productivity",
    "description": "Word shortcuts, Excel formulas & charts, PowerPoint tools, and formatting mastery (50 Questions).",
    "icon": "📊",
    "color": "#2563eb",
    "tags": [
      "MS Office",
      "Excel",
      "Word",
      "Productivity"
    ],
    "createdAt": 1788521477573,
    "updatedAt": 1788521477573
  },
  {
    "id": "deck-networking",
    "title": "Computer Networks & Protocols",
    "description": "OSI & TCP/IP layers, routing, switching, IP addressing, DNS, ports, and protocols (40 Questions).",
    "icon": "🌐",
    "color": "#059669",
    "tags": [
      "Networking",
      "Protocols",
      "TCP/IP",
      "OSI"
    ],
    "createdAt": 1788607877573,
    "updatedAt": 1788607877573
  },
  {
    "id": "deck-security",
    "title": "Cybersecurity & Defense",
    "description": "Threat vectors, malware types, symmetric/asymmetric encryption, firewalls, and SSL/TLS (30 Questions).",
    "icon": "🔒",
    "color": "#dc2626",
    "tags": [
      "Security",
      "Cybersecurity",
      "Encryption",
      "Threats"
    ],
    "createdAt": 1788694277573,
    "updatedAt": 1788694277573
  },
  {
    "id": "deck-cloud",
    "title": "Cloud Computing & Virtualization",
    "description": "IaaS, PaaS, SaaS models, hypervisors, elasticity, cloud security, and architecture (30 Questions).",
    "icon": "☁️",
    "color": "#0284c7",
    "tags": [
      "Cloud",
      "Virtualization",
      "SaaS",
      "IaaS"
    ],
    "createdAt": 1788780677573,
    "updatedAt": 1788780677573
  },
  {
    "id": "deck-pseudocode",
    "title": "Pseudocode & Algorithmic Logic",
    "description": "Loop execution, conditional branching, bitwise operators, string manipulation, and tracing (50 Questions).",
    "icon": "💻",
    "color": "#7c3aed",
    "tags": [
      "Pseudocode",
      "Algorithms",
      "Logic",
      "Code"
    ],
    "createdAt": 1788867077573,
    "updatedAt": 1788867077573
  }
];

export const ACCENTURE_CARDS: Flashcard[] = [
  {
    "id": "card-acc-1",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to bold selected text in Word?",
    "back": "Ctrl+B",
    "explanation": "Option A: Ctrl+B",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+B",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Ctrl+I",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ctrl+U",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+S",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000060000,
    "updatedAt": 1715000060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-2",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Excel function for the highest value in a range?",
    "back": "MAX",
    "explanation": "Option A: MAX",
    "mcqOptions": [
      {
        "id": "A",
        "text": "MAX",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "HIGH",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "TOP",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "HIGHEST",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000120000,
    "updatedAt": 1715000120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-3",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which Excel tab is used to create charts?",
    "back": "Insert",
    "explanation": "Option A: Insert",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Insert",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Data",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Formulas",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Review",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000180000,
    "updatedAt": 1715000180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-4",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Intersection of a row and a column in Excel is called a:",
    "back": "Cell",
    "explanation": "Option A: Cell",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Cell",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Box",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Square",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Unit",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000240000,
    "updatedAt": 1715000240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-5",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to print a document?",
    "back": "Ctrl+P",
    "explanation": "Option A: Ctrl+P",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+P",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Ctrl+A",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ctrl+C",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+Q",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000300000,
    "updatedAt": 1715000300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-6",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to close the active Word document?",
    "back": "Ctrl+W",
    "explanation": "Option A: Ctrl+W",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+W",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Ctrl+D",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Shift+F",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+N",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000360000,
    "updatedAt": 1715000360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-7",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut for spell check in Word?",
    "back": "F7",
    "explanation": "Option C: F7",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "F2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "F7",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "F9",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000420000,
    "updatedAt": 1715000420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-8",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Default title of a new Word file?",
    "back": "Document1",
    "explanation": "Option B: Document1",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Doc1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Document1",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Document",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Doc",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000480000,
    "updatedAt": 1715000480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-9",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which is not a font style?",
    "back": "Superscript",
    "explanation": "Option D: Superscript",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Bold",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Italics",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Regular",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Superscript",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000540000,
    "updatedAt": 1715000540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-10",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to insert a new slide in PowerPoint?",
    "back": "Ctrl+M",
    "explanation": "Option A: Ctrl+M",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+M",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Ctrl+N",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ctrl+F",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+S",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000600000,
    "updatedAt": 1715000600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-11",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Effects used to introduce slides in PowerPoint are:",
    "back": "Transitions",
    "explanation": "Option B: Transitions",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Effect",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Transitions",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Slide animation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Custom animation",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000660000,
    "updatedAt": 1715000660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-12",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which file types can be added to a PowerPoint show?",
    "back": "All of the above",
    "explanation": "Option D: All of the above",
    "mcqOptions": [
      {
        "id": "A",
        "text": ".jpg",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": ".gif",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": ".wav",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the above",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000720000,
    "updatedAt": 1715000720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-13",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Holding the left mouse button and moving an object on a slide is:",
    "back": "Dragging",
    "explanation": "Option A: Dragging",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Dragging",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Moving",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Highlighting",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000780000,
    "updatedAt": 1715000780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-14",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "App used for newsletters, flyers, and greeting cards?",
    "back": "Publisher",
    "explanation": "Option C: Publisher",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Word",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Excel",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Publisher",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Access",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000840000,
    "updatedAt": 1715000840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-15",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which group is not on Excel's Insert tab?",
    "back": "Sort & Filter",
    "explanation": "Option C: Sort & Filter",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Charts",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Text",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sort & Filter",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tables",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000900000,
    "updatedAt": 1715000900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-16",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Function used to create a drop-down in Excel cells?",
    "back": "Data Validation",
    "explanation": "Option B: Data Validation",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Conditional Formatting",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Data Validation",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Pivot Table",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Filter",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715000960000,
    "updatedAt": 1715000960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715000960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-17",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Macro-enabled Excel 2007+ workbook extension?",
    "back": ".xlsm",
    "explanation": "Option A: .xlsm",
    "mcqOptions": [
      {
        "id": "A",
        "text": ".xlsm",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": ".xlsx",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": ".xlsb",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": ".xltx",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001020000,
    "updatedAt": 1715001020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-18",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In Excel, B8:B10 refers to:",
    "back": "All cells from B8 to B10",
    "explanation": "Option A: All cells from B8 to B10",
    "mcqOptions": [
      {
        "id": "A",
        "text": "All cells from B8 to B10",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Product of B8 and B10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Only B8 and B10",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Column B only",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001080000,
    "updatedAt": 1715001080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-19",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "How do you stop automatic numbering in Word? I. Click Numbering again  II. Press Enter twice",
    "back": "Both I and II",
    "explanation": "Option C: Both I and II",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Neither",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Only I",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both I and II",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Only II",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001140000,
    "updatedAt": 1715001140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-20",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to select the entire document in Word?",
    "back": "Ctrl+A",
    "explanation": "Option B: Ctrl+A",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+T",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ctrl+A",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ctrl+W",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+X",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001200000,
    "updatedAt": 1715001200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-21",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "A link that jumps to another location in a document is a:",
    "back": "Hyperlink",
    "explanation": "Option C: Hyperlink",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Footer",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Header",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Hyperlink",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Attachment",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001260000,
    "updatedAt": 1715001260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-22",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Track Changes in Word is found under:",
    "back": "Review",
    "explanation": "Option C: Review",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Home",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Insert",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Review",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "View",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001320000,
    "updatedAt": 1715001320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-23",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In Excel, the small square at the bottom-right of the active cell is the:",
    "back": "Fill handle",
    "explanation": "Option B: Fill handle",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Formula bar",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Fill handle",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Name box",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Status bar",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001380000,
    "updatedAt": 1715001380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-24",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "A single Excel worksheet has how many columns (Excel 2007+)?",
    "back": "16384",
    "explanation": "Option C: 16384",
    "mcqOptions": [
      {
        "id": "A",
        "text": "256",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1024",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "16384",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "1048576",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001440000,
    "updatedAt": 1715001440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-25",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Outlook shortcut to create a new email?",
    "back": "Ctrl+Shift+M",
    "explanation": "Option A: Ctrl+Shift+M",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+Shift+M",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Ctrl+Shift+A",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ctrl+Shift+K",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+N",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715001500000,
    "updatedAt": 1715001500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-26",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "VPN stands for:",
    "back": "Virtual Private Network",
    "explanation": "Option A: Virtual Private Network",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Virtual Private Network",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Virtual Public Network",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Verified Private Node",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Virtual Protected Number",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001560000,
    "updatedAt": 1715001560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-27",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Attack that floods a network to disrupt service?",
    "back": "DDoS",
    "explanation": "Option C: DDoS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Phishing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Spoofing",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "DDoS",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "MITM",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001620000,
    "updatedAt": 1715001620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-28",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Protocol commonly used for secure remote access / secure file transfer?",
    "back": "SSH",
    "explanation": "Option C: SSH",
    "mcqOptions": [
      {
        "id": "A",
        "text": "HTTP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FTP",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SSH",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "POP3",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001680000,
    "updatedAt": 1715001680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-29",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Main purpose of a firewall?",
    "back": "Filter traffic using security rules",
    "explanation": "Option B: Filter traffic using security rules",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Speed up browsing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Filter traffic using security rules",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Assign IP addresses",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Store passwords",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001740000,
    "updatedAt": 1715001740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-30",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "OSI layer that routes packets between networks?",
    "back": "Network",
    "explanation": "Option B: Network",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data Link",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Network",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Transport",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Session",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001800000,
    "updatedAt": 1715001800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-31",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol is connectionless?",
    "back": "UDP",
    "explanation": "Option C: UDP",
    "mcqOptions": [
      {
        "id": "A",
        "text": "TCP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "FTP",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "UDP",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "HTTP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001860000,
    "updatedAt": 1715001860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-32",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Most secure Wi-Fi protocol among common options?",
    "back": "WPA3",
    "explanation": "Option D: WPA3",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "WPA",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "WPA2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "WPA3",
        "isCorrect": true
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001920000,
    "updatedAt": 1715001920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-33",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "DNS mainly uses which transport protocol?",
    "back": "UDP (primarily)",
    "explanation": "Option B: UDP (primarily)",
    "mcqOptions": [
      {
        "id": "A",
        "text": "TCP only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "UDP (primarily)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "ICMP",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SMTP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715001980000,
    "updatedAt": 1715001980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715001980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-34",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Default HTTP and HTTPS ports?",
    "back": "80 and 443",
    "explanation": "Option C: 80 and 443",
    "mcqOptions": [
      {
        "id": "A",
        "text": "21 and 22",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "25 and 110",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "80 and 443",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "53 and 67",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002040000,
    "updatedAt": 1715002040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-35",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Device that forwards packets between different networks?",
    "back": "Router",
    "explanation": "Option C: Router",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Hub",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Switch",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Router",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Repeater",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002100000,
    "updatedAt": 1715002100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-36",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "DHCP is used to:",
    "back": "Automatically assign IP addresses",
    "explanation": "Option B: Automatically assign IP addresses",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Encrypt packets",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Automatically assign IP addresses",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Block malware",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Compress files",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002160000,
    "updatedAt": 1715002160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-37",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "MAC address operates at which OSI layer?",
    "back": "Data Link",
    "explanation": "Option B: Data Link",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Data Link",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Network",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Transport",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002220000,
    "updatedAt": 1715002220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-38",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "SMTP is used for:",
    "back": "Sending email",
    "explanation": "Option A: Sending email",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Sending email",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Browsing web pages",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "File transfer",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Name resolution",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002280000,
    "updatedAt": 1715002280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-39",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "NAT is used to:",
    "back": "Map private IPs to a public IP",
    "explanation": "Option B: Map private IPs to a public IP",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Convert domain names",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Map private IPs to a public IP",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Detect viruses",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Create VLANs",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002340000,
    "updatedAt": 1715002340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-40",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "IPv4 address size is:",
    "back": "32 bits",
    "explanation": "Option A: 32 bits",
    "mcqOptions": [
      {
        "id": "A",
        "text": "32 bits",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "64 bits",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "128 bits",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "16 bits",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002400000,
    "updatedAt": 1715002400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-41",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "IPv6 address size is:",
    "back": "128 bits",
    "explanation": "Option C: 128 bits",
    "mcqOptions": [
      {
        "id": "A",
        "text": "32 bits",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "64 bits",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "128 bits",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "256 bits",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002460000,
    "updatedAt": 1715002460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-42",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "A switch typically operates at:",
    "back": "Layer 2",
    "explanation": "Option B: Layer 2",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Layer 1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Layer 2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Layer 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Layer 7",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002520000,
    "updatedAt": 1715002520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-43",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Ping uses which protocol?",
    "back": "ICMP",
    "explanation": "Option C: ICMP",
    "mcqOptions": [
      {
        "id": "A",
        "text": "TCP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "UDP",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ICMP",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "ARP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002580000,
    "updatedAt": 1715002580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-44",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Port 22 is associated with:",
    "back": "SSH",
    "explanation": "Option B: SSH",
    "mcqOptions": [
      {
        "id": "A",
        "text": "FTP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SSH",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "HTTP",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DNS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002640000,
    "updatedAt": 1715002640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-45",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which is a passive network security device (monitors, does not block by default)?",
    "back": "IDS",
    "explanation": "Option B: IDS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Firewall that drops packets",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "IDS",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "IPS",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "UTM blocking gateway",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715002700000,
    "updatedAt": 1715002700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-46",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Authentication means:",
    "back": "Verifying identity",
    "explanation": "Option B: Verifying identity",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Granting permissions",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Verifying identity",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Encrypting disks",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Backing up data",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715002760000,
    "updatedAt": 1715002760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-47",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Authorization means:",
    "back": "Checking what you are allowed to do",
    "explanation": "Option B: Checking what you are allowed to do",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Checking who you are",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Checking what you are allowed to do",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Scanning viruses",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Assigning MAC addresses",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715002820000,
    "updatedAt": 1715002820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-48",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Difference between a virus and a Trojan?",
    "back": "Virus replicates; Trojan typically does not",
    "explanation": "Option A: Virus replicates; Trojan typically does not",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Virus replicates; Trojan typically does not",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Same thing",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Trojan always replicates",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Virus never spreads",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715002880000,
    "updatedAt": 1715002880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-49",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Phishing is:",
    "back": "Tricking users to reveal credentials",
    "explanation": "Option B: Tricking users to reveal credentials",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Flooding a server",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Tricking users to reveal credentials",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Guessing Wi-Fi keys by brute force only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Splitting a network",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715002940000,
    "updatedAt": 1715002940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715002940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-50",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Packet-filtering firewall inspects:",
    "back": "Header info such as IP/port",
    "explanation": "Option B: Header info such as IP/port",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Application payload only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Header info such as IP/port",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "User passwords only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Disk files",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003000000,
    "updatedAt": 1715003000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-51",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Stateful inspection firewalls track:",
    "back": "Active connections",
    "explanation": "Option B: Active connections",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Only MAC addresses",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Active connections",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Only DNS names",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Printer queues",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003060000,
    "updatedAt": 1715003060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-52",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Encapsulating Security Payload (ESP) in IPsec provides:",
    "back": "Confidentiality of payload (and often integrity)",
    "explanation": "Option B: Confidentiality of payload (and often integrity)",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Only name lookup",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Confidentiality of payload (and often integrity)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Email delivery",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DHCP leases",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003120000,
    "updatedAt": 1715003120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-53",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "In WPA2 4-way handshake, the key present on AP and clients is:",
    "back": "Pairwise Master Key",
    "explanation": "Option B: Pairwise Master Key",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Pairwise Transient Key",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Pairwise Master Key",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Group Temporal Key",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Session cookie",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003180000,
    "updatedAt": 1715003180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-54",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "A security group in cloud typically is:",
    "back": "A virtual firewall for instances",
    "explanation": "Option B: A virtual firewall for instances",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A physical lock",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A virtual firewall for instances",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "An email alias",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A billing plan",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003240000,
    "updatedAt": 1715003240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-55",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Encryption of data at rest mainly protects:",
    "back": "Data stored on disk",
    "explanation": "Option A: Data stored on disk",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data stored on disk",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Data only in RAM",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "DNS queries",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cable length",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003300000,
    "updatedAt": 1715003300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-56",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Man-in-the-middle attack:",
    "back": "Intercepts communication between two parties",
    "explanation": "Option B: Intercepts communication between two parties",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Deletes backups",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Intercepts communication between two parties",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Overheats CPUs",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Changes screen resolution",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003360000,
    "updatedAt": 1715003360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-57",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Spoofing means:",
    "back": "Faking identity (IP/MAC/email)",
    "explanation": "Option B: Faking identity (IP/MAC/email)",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Compressing files",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Faking identity (IP/MAC/email)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Defragmenting disks",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Load balancing",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003420000,
    "updatedAt": 1715003420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-58",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which is not typically a firewall type listed in Accenture prep?",
    "back": "Spreadsheet filter",
    "explanation": "Option D: Spreadsheet filter",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Packet filtering",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Proxy service",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Stateful inspection",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Spreadsheet filter",
        "isCorrect": true
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003480000,
    "updatedAt": 1715003480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-59",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Shared responsibility model in cloud means:",
    "back": "Security duties are split between provider and customer",
    "explanation": "Option C: Security duties are split between provider and customer",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Cloud vendor does everything",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Customer does everything",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Security duties are split between provider and customer",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "No one is responsible",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003540000,
    "updatedAt": 1715003540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-60",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Best first control to block unauthorized network traffic?",
    "back": "Firewall",
    "explanation": "Option B: Firewall",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Screensaver",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Firewall",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Word spell-check",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "PowerPoint theme",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715003600000,
    "updatedAt": 1715003600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-61",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "IaaS gives control of:",
    "back": "OS, VMs, storage, and network config",
    "explanation": "Option B: OS, VMs, storage, and network config",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Only the app UI",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "OS, VMs, storage, and network config",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Only email",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only office templates",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715003660000,
    "updatedAt": 1715003660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-62",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Gmail / Office 365 style delivery is mainly:",
    "back": "SaaS",
    "explanation": "Option C: SaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715003720000,
    "updatedAt": 1715003720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-63",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Most secure deployment model for highly sensitive data?",
    "back": "Private",
    "explanation": "Option B: Private",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Community",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hybrid (always)",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715003780000,
    "updatedAt": 1715003780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-64",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Sharing physical hardware with other organizations is typical of:",
    "back": "Public cloud",
    "explanation": "Option B: Public cloud",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Private cloud",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Public cloud",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "On-prem exclusive rack",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Air-gapped lab",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715003840000,
    "updatedAt": 1715003840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-65",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Payment model best for small businesses in cloud?",
    "back": "pay-as-you-go",
    "explanation": "Option A: pay-as-you-go",
    "mcqOptions": [
      {
        "id": "A",
        "text": "pay-as-you-go",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "lifetime license only",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "hardware purchase",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "none",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715003900000,
    "updatedAt": 1715003900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-66",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Technology that runs multiple VMs on one physical server?",
    "back": "Virtualization",
    "explanation": "Option B: Virtualization",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Compilation",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Virtualization",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Pagination",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Fragmentation",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715003960000,
    "updatedAt": 1715003960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715003960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-67",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "In PaaS, which is not a typical benefit / still often your job?",
    "back": "Management of your data",
    "explanation": "Option C: Management of your data",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Runtime managed",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Middleware managed",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Management of your data",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Platform patching",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004020000,
    "updatedAt": 1715004020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-68",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Instant scalability is a property of:",
    "back": "Cloud",
    "explanation": "Option B: Cloud",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Traditional data center",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cloud",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Floppy disks",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CRT monitors",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004080000,
    "updatedAt": 1715004080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-69",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Who is usually responsible for hardware downtime in a company-owned data center?",
    "back": "Owner/organization",
    "explanation": "Option B: Owner/organization",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Cloud vendor",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Owner/organization",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "ISP only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "End user",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004140000,
    "updatedAt": 1715004140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-70",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Major public cloud providers include:",
    "back": "All of these",
    "explanation": "Option D: All of these",
    "mcqOptions": [
      {
        "id": "A",
        "text": "AWS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Azure",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Google Cloud",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of these",
        "isCorrect": true
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004200000,
    "updatedAt": 1715004200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-71",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Cloud storage capacity is generally described as:",
    "back": "Effectively elastic/unlimited for practical use",
    "explanation": "Option B: Effectively elastic/unlimited for practical use",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Strictly limited like a USB",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Effectively elastic/unlimited for practical use",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Always 1 GB",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only email-sized",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004260000,
    "updatedAt": 1715004260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-72",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Hypervisor is used to:",
    "back": "Create and run virtual machines",
    "explanation": "Option B: Create and run virtual machines",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Draw slides",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Create and run virtual machines",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Send SMTP mail",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Check spelling",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004320000,
    "updatedAt": 1715004320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-73",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "On-premises hardware vs remote rented hardware maps to:",
    "back": "Data center vs cloud",
    "explanation": "Option A: Data center vs cloud",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data center vs cloud",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "SaaS vs Word",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Switch vs hub",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "TCP vs UDP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004380000,
    "updatedAt": 1715004380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-74",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Client-server sharing requires:",
    "back": "Security, compatibility, and mapping",
    "explanation": "Option A: Security, compatibility, and mapping",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Security, compatibility, and mapping",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Only a printer driver",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Only Excel",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No authentication ever",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004440000,
    "updatedAt": 1715004440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-75",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Pay as you use / pay as you go contrasts with:",
    "back": "Capex-heavy data centers",
    "explanation": "Option A: Capex-heavy data centers",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Capex-heavy data centers",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "DNS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "MAC flooding",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+B",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715004500000,
    "updatedAt": 1715004500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-76",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "word is a string. Loop for l = 0 to 0: print word[l]. What does it do?",
    "back": "First character",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: First character",
    "codeSnippet": "word is a string. Loop for l = 0 to 0: print word[l]. What does it do?",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Last character",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Increasing order",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "First character",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Reverse string",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004560000,
    "updatedAt": 1715004560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-77",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "x=10, y=16, z=3. if x>y then x=y else y=x; if z>y then z=y else y=z. Print x+y+z.",
    "back": "16",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 16",
    "codeSnippet": "x=10, y=16, z=3. if x>y then x=y else y=x; if z>y then z=y else y=z. Print x+y+z.",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "16",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "20",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004620000,
    "updatedAt": 1715004620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-78",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "x=8, y=6, z=4. Same min-style logic as previous. Print x+y+z.",
    "back": "14",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 14",
    "codeSnippet": "x=8, y=6, z=4. Same min-style logic as previous. Print x+y+z.",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "14",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "23",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004680000,
    "updatedAt": 1715004680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-79",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "funn(x=9,y=7): z=2; y=y%z; x=x%z; return x+y",
    "back": "2",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: 2",
    "codeSnippet": "funn(x=9,y=7): z=2; y=y%z; x=x%z; return x+y",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "5",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004740000,
    "updatedAt": 1715004740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-80",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "p=3, q=8, r=1, sum=12. if p!=0 and sum==11 and q==4 and r!=0 print Success else Fail",
    "back": "Fail",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: Fail",
    "codeSnippet": "p=3, q=8, r=1, sum=12. if p!=0 and sum==11 and q==4 and r!=0 print Success else Fail",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Success",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Fail",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004800000,
    "updatedAt": 1715004800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-81",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=11, b=12. solve: if a<3 && b<4 return solve(a+1,b+1) else return a+b",
    "back": "23",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option D: 23",
    "codeSnippet": "a=11, b=12. solve: if a<3 && b<4 return solve(a+1,b+1) else return a+b",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "22",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "23",
        "isCorrect": true
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004860000,
    "updatedAt": 1715004860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-82",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Uninitialized num (default 0), value=1; num = num >> 1; num = num + value; print num",
    "back": "1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 1",
    "codeSnippet": "Uninitialized num (default 0), value=1; num = num >> 1; num = num + value; print num",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "44",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004920000,
    "updatedAt": 1715004920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-83",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "C-style for x from 1 to 11 with x = x + 2 inside, then print x",
    "back": "13",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option D: 13",
    "codeSnippet": "C-style for x from 1 to 11 with x = x + 2 inside, then print x",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "13",
        "isCorrect": true
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715004980000,
    "updatedAt": 1715004980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715004980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-84",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "m=1, j=1, a={0,1,0}; a[0]+=a[1]; a[1]+=a[2]; a[2]+=a[0]; if(a[0]) a[j]=5; m=m+a[j]; print m",
    "back": "6",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 6",
    "codeSnippet": "m=1, j=1, a={0,1,0}; a[0]+=a[1]; a[1]+=a[2]; a[2]+=a[0]; if(a[0]) a[j]=5; m=m+a[j]; print m",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "6",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005040000,
    "updatedAt": 1715005040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-85",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "fun(k): if k>155 return; print k; fun(k+2); print k. Start k=150. Output?",
    "back": "150 152 154 154 152 150",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 150 152 154 154 152 150",
    "codeSnippet": "fun(k): if k>155 return; print k; fun(k+2); print k. Start k=150. Output?",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "150 152 154",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "150 152 154 154 152 150",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "150",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005100000,
    "updatedAt": 1715005100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-86",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a={5,9,7,3,1}, b={2,4,6,8,10}; c[k]=a[k]-b[k]. Print c.",
    "back": "3 5 1 -5 -9",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 3 5 1 -5 -9",
    "codeSnippet": "a={5,9,7,3,1}, b={2,4,6,8,10}; c[k]=a[k]-b[k]. Print c.",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "7 13 13 11 11",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3 5 1 -5 -9",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "-3 -5 -1 5 9",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005160000,
    "updatedAt": 1715005160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-87",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Nested: a=0..4, b=0..2, if a>b print \"A\". How many A?",
    "back": "9",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 9",
    "codeSnippet": "Nested: a=0..4, b=0..2, if a>b print \"A\". How many A?",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "10",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005220000,
    "updatedAt": 1715005220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-88",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "q=13; for p=1 to 4: r=q%p; p=p+5; q=p+r then r=q/5; print q, r",
    "back": "6 1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option D: 6 1",
    "codeSnippet": "q=13; for p=1 to 4: r=q%p; p=p+5; q=p+r then r=q/5; print q, r",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6 4",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "7 2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "6 1",
        "isCorrect": true
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005280000,
    "updatedAt": 1715005280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-89",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "x=259; if x==0 print 0 else if x%9==0 print 9 else print x%9",
    "back": "7",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 7",
    "codeSnippet": "x=259; if x==0 print 0 else if x%9==0 print 9 else print x%9",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "16",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "7",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "9",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005340000,
    "updatedAt": 1715005340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-90",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=12, b=25; a=(a+b)%2; b=a; a=a+b-13; print a,b",
    "back": "-11 1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: -11 1",
    "codeSnippet": "a=12, b=25; a=(a+b)%2; b=a; a=a+b-13; print a,b",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "-11 1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "-12 0",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "11 22",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "37 24",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005400000,
    "updatedAt": 1715005400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-91",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=b=c=4; if (a & (b^b) & c) a=a>>1; print a+b+c",
    "back": "12",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option D: 12",
    "codeSnippet": "a=b=c=4; if (a & (b^b) & c) a=a>>1; print a+b+c",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "16",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "24",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": true
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005460000,
    "updatedAt": 1715005460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-92",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "funn(a=10,b): if(0) recursive; a=a+a+a+a; return a",
    "back": "40",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: 40",
    "codeSnippet": "funn(a=10,b): if(0) recursive; a=a+a+a+a; return a",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "40",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "30",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "44",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005520000,
    "updatedAt": 1715005520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-93",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "x=2; if x==1 ... else print \"C\". Output?",
    "back": "C",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: C",
    "codeSnippet": "x=2; if x==1 ... else print \"C\". Output?",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "B C",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "C",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "B",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005580000,
    "updatedAt": 1715005580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-94",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "m=9, n=6; m=m+1; n=n-1; m=m+n; if m>n print m else n",
    "back": "15",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option D: 15",
    "codeSnippet": "m=9, n=6; m=m+1; n=n-1; m=m+n; if m>n print m else n",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "15",
        "isCorrect": true
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005640000,
    "updatedAt": 1715005640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-95",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "f=6, g=9, sum=0; if g>f for n=f to n<g: sum+=n; print sum",
    "back": "21",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: 21",
    "codeSnippet": "f=6, g=9, sum=0; if g>f for n=f to n<g: sum+=n; print sum",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "21",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "6",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005700000,
    "updatedAt": 1715005700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-96",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "if a<b swap; if b!=0 return a + f(a,b-1); else 0. Call f(8,9).",
    "back": "72",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 72",
    "codeSnippet": "if a<b swap; if b!=0 return a + f(a,b-1); else 0. Call f(8,9).",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "56",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "88",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "72",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "65",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005760000,
    "updatedAt": 1715005760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-97",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=9, b=7, c=2; b%=c; a%=c; return a+b",
    "back": "2",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 2",
    "codeSnippet": "a=9, b=7, c=2; b%=c; a%=c; return a+b",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "-5",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005820000,
    "updatedAt": 1715005820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-98",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "number=2630; count digits != 0 that divide 2630.",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: 3",
    "codeSnippet": "number=2630; count digits != 0 that divide 2630.",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005880000,
    "updatedAt": 1715005880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-99",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "n=127 treated digit-wise as s += digit * 8^i (i from 0). Value of s?",
    "back": "87",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 87",
    "codeSnippet": "n=127 treated digit-wise as s += digit * 8^i (i from 0). Value of s?",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "27",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "87",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "187",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "120",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715005940000,
    "updatedAt": 1715005940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715005940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-100",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=30, b=60, c=90; if sum==180 and all nonzero print Success else Fail",
    "back": "Success",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: Success",
    "codeSnippet": "a=30, b=60, c=90; if sum==180 and all nonzero print Success else Fail",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Success",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Fail",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715006000000,
    "updatedAt": 1715006000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-101",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Feature that converts a sentence to ALL CAPS or all small letters?",
    "back": "Change Case",
    "explanation": "Option A: Change Case",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Change Case",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Font Color",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Highlight",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "WordArt",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006060000,
    "updatedAt": 1715006060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-102",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which app was not in the first Microsoft Office suite?",
    "back": "Access",
    "explanation": "Option D: Access",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Word",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Excel",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "PowerPoint",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Access",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006120000,
    "updatedAt": 1715006120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-103",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Mini Translator: (I) stays on until you turn it off (II) sends the whole document as you type.",
    "back": "Only I",
    "explanation": "Option A: Only I",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Only I",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Only II",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Both",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Neither",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006180000,
    "updatedAt": 1715006180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-104",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Classic Word underlines: green = contextual, blue = spelling, red = grammar. Which is true?",
    "back": "None",
    "explanation": "Option D: None",
    "mcqOptions": [
      {
        "id": "A",
        "text": "I only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "II only",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "All three",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006240000,
    "updatedAt": 1715006240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-105",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Connection that jumps to another slide in this deck or another presentation?",
    "back": "Hyperlink",
    "explanation": "Option B: Hyperlink",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Bookmark",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Hyperlink",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Footer",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Comment",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006300000,
    "updatedAt": 1715006300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-106",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Accidentally deleted Outlook mail is first kept in:",
    "back": "Deleted Items",
    "explanation": "Option D: Deleted Items",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Inbox",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Drafts",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sent Items",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Deleted Items",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006360000,
    "updatedAt": 1715006360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-107",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Key held to select non-adjacent words/phrases in Word?",
    "back": "Ctrl",
    "explanation": "Option C: Ctrl",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Alt",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Shift",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ctrl",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tab",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006420000,
    "updatedAt": 1715006420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-108",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Command Prompt: go two directories up from the current folder?",
    "back": "cd ..\\..",
    "explanation": "Option C: cd ..\\..",
    "mcqOptions": [
      {
        "id": "A",
        "text": "cd .",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "cd ..",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "cd ..\\..",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "cd \\",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006480000,
    "updatedAt": 1715006480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-109",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Word tool for synonyms?",
    "back": "Thesaurus",
    "explanation": "Option B: Thesaurus",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Spell Check",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Thesaurus",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Mail Merge",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SmartArt",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006540000,
    "updatedAt": 1715006540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-110",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to open the Font dialog in Word?",
    "back": "Ctrl+D",
    "explanation": "Option B: Ctrl+D",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+F",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ctrl+D",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ctrl+M",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+P",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006600000,
    "updatedAt": 1715006600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-111",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Gutter margin is mainly for:",
    "back": "Binding",
    "explanation": "Option B: Binding",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Decoration",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Binding",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Alignment",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Page numbering",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006660000,
    "updatedAt": 1715006660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-112",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to split the Word document window?",
    "back": "Ctrl+Alt+S",
    "explanation": "Option B: Ctrl+Alt+S",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+S",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ctrl+Alt+S",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ctrl+Shift+S",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Alt+S",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006720000,
    "updatedAt": 1715006720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-113",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Macros in MS Office are typically written in:",
    "back": "VBA",
    "explanation": "Option C: VBA",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Java",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Python",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "VBA",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "C++",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006780000,
    "updatedAt": 1715006780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-114",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Merging several Excel cells keeps:",
    "back": "First cell",
    "explanation": "Option C: First cell",
    "mcqOptions": [
      {
        "id": "A",
        "text": "All values concatenated",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Last cell",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "First cell",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Error always",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006840000,
    "updatedAt": 1715006840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-115",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Key to edit the active Excel cell?",
    "back": "F2",
    "explanation": "Option B: F2",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "F2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "F5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "F12",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006900000,
    "updatedAt": 1715006900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-116",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Four-headed arrow cursor in Excel is used to:",
    "back": "Move selected cells",
    "explanation": "Option C: Move selected cells",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Resize a cell",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Select one cell",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Move selected cells",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Fill a series",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715006960000,
    "updatedAt": 1715006960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715006960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-117",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "AutoSum shortcut?",
    "back": "Alt+=",
    "explanation": "Option B: Alt+=",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+A",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Alt+=",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ctrl+S",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Shift+=",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007020000,
    "updatedAt": 1715007020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-118",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "PowerPoint view for file/print/share options?",
    "back": "Backstage",
    "explanation": "Option D: Backstage",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Normal",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Slide Show",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Outline",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Backstage",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007080000,
    "updatedAt": 1715007080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-119",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Start a slide show from the first slide?",
    "back": "F5",
    "explanation": "Option B: F5",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "F5",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ctrl+F5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Shift+F5",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007140000,
    "updatedAt": 1715007140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-120",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Best view to rearrange many slides?",
    "back": "Slide Sorter",
    "explanation": "Option C: Slide Sorter",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Normal",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Reading",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Slide Sorter",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Notes",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007200000,
    "updatedAt": 1715007200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-121",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Collective design for fonts, colors, and effects across a document/deck?",
    "back": "Theme",
    "explanation": "Option D: Theme",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Highlight",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Line spacing",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Formatting only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Theme",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007260000,
    "updatedAt": 1715007260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-122",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Tool that stores data in rows and columns for calculation?",
    "back": "Spreadsheet",
    "explanation": "Option A: Spreadsheet",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Spreadsheet",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Presentation",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Word processor",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Browser",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007320000,
    "updatedAt": 1715007320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-123",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "PowerPoint place that controls the layout of all slides at once?",
    "back": "Slide Master",
    "explanation": "Option B: Slide Master",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Slide Sorter",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Slide Master",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Notes Page",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Handout Master only",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007380000,
    "updatedAt": 1715007380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-124",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to run macros dialog?",
    "back": "Alt+F8",
    "explanation": "Option D: Alt+F8",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Alt+F5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Alt+F6",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Alt+F7",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Alt+F8",
        "isCorrect": true
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007440000,
    "updatedAt": 1715007440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-125",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Start slide show from the current slide?",
    "back": "Shift+F5",
    "explanation": "Option B: Shift+F5",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Shift+F5",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Esc",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "F7",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715007500000,
    "updatedAt": 1715007500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-126",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "TCP is best described as:",
    "back": "Connection-oriented and reliable",
    "explanation": "Option B: Connection-oriented and reliable",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Connectionless and unreliable",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Connection-oriented and reliable",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Broadcast-only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Analog signaling",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007560000,
    "updatedAt": 1715007560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-127",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "OSI Physical layer deals with:",
    "back": "Bits on the wire",
    "explanation": "Option B: Bits on the wire",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IP routing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Bits on the wire",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Sessions",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Encryption keys only",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007620000,
    "updatedAt": 1715007620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-128",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "HTTP, FTP, and SMTP sit mainly at:",
    "back": "Application",
    "explanation": "Option D: Application",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Network",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Transport",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Data Link",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Application",
        "isCorrect": true
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007680000,
    "updatedAt": 1715007680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-129",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "ARP maps:",
    "back": "IP to MAC",
    "explanation": "Option B: IP to MAC",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Domain to IP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "IP to MAC",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Port to process",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "URL to DNS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007740000,
    "updatedAt": 1715007740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-130",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Default gateway is:",
    "back": "Router IP used to leave the local subnet",
    "explanation": "Option B: Router IP used to leave the local subnet",
    "mcqOptions": [
      {
        "id": "A",
        "text": "The printer IP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Router IP used to leave the local subnet",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "MAC of a switch",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DHCP lease time",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007800000,
    "updatedAt": 1715007800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-131",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Subnet mask 255.255.255.192 allows how many usable hosts?",
    "back": "62",
    "explanation": "Option B: 62",
    "mcqOptions": [
      {
        "id": "A",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "62",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "32",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "126",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007860000,
    "updatedAt": 1715007860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-132",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Typical Ethernet MTU size?",
    "back": "1500 bytes",
    "explanation": "Option C: 1500 bytes",
    "mcqOptions": [
      {
        "id": "A",
        "text": "64 bytes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "512 bytes",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1500 bytes",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "65535 bytes",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007920000,
    "updatedAt": 1715007920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-133",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "A hub operates at:",
    "back": "Layer 1",
    "explanation": "Option A: Layer 1",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Layer 1",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Layer 2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Layer 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Layer 4",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715007980000,
    "updatedAt": 1715007980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715007980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-134",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "FTP control and data ports (classic)?",
    "back": "20 and 21",
    "explanation": "Option A: 20 and 21",
    "mcqOptions": [
      {
        "id": "A",
        "text": "20 and 21",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "22 and 23",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "25 and 110",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "53 and 80",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008040000,
    "updatedAt": 1715008040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-135",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Telnet default port?",
    "back": "23",
    "explanation": "Option C: 23",
    "mcqOptions": [
      {
        "id": "A",
        "text": "21",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "22",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "23",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "25",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008100000,
    "updatedAt": 1715008100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-136",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "POP3 and IMAP ports?",
    "back": "110 and 143",
    "explanation": "Option A: 110 and 143",
    "mcqOptions": [
      {
        "id": "A",
        "text": "110 and 143",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "25 and 80",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "67 and 68",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "443 and 993",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008160000,
    "updatedAt": 1715008160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-137",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Private IPv4 ranges include:",
    "back": "192.168.0.0/16",
    "explanation": "Option B: 192.168.0.0/16",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8.8.8.8",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "192.168.0.0/16",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1.1.1.1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "255.255.255.255",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008220000,
    "updatedAt": 1715008220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-138",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Loopback address?",
    "back": "127.0.0.1",
    "explanation": "Option B: 127.0.0.1",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0.0.0.0",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "127.0.0.1",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "192.168.1.1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "255.0.0.0",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008280000,
    "updatedAt": 1715008280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-139",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "TCP three-way handshake order?",
    "back": "SYN, SYN-ACK, ACK",
    "explanation": "Option B: SYN, SYN-ACK, ACK",
    "mcqOptions": [
      {
        "id": "A",
        "text": "ACK, SYN, FIN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SYN, SYN-ACK, ACK",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "FIN, ACK, SYN",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "RST, SYN, ACK",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008340000,
    "updatedAt": 1715008340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-140",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "A switch vs a hub: the switch mainly:",
    "back": "Forwards using MAC and splits collision domains",
    "explanation": "Option B: Forwards using MAC and splits collision domains",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Shares one collision domain for all ports",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Forwards using MAC and splits collision domains",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Routes between WANs",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Assigns public IPs",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008400000,
    "updatedAt": 1715008400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-141",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "DHCP typically uses ports:",
    "back": "67/68",
    "explanation": "Option B: 67/68",
    "mcqOptions": [
      {
        "id": "A",
        "text": "53/54",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "67/68",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "80/443",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "20/21",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008460000,
    "updatedAt": 1715008460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-142",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "nslookup is used to:",
    "back": "Query DNS records",
    "explanation": "Option B: Query DNS records",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Trace every hop's latency only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Query DNS records",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Capture packets",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Compress files",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008520000,
    "updatedAt": 1715008520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-143",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Star topology's center device is usually a:",
    "back": "Switch/hub",
    "explanation": "Option B: Switch/hub",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Terminator",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Switch/hub",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Modem only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Repeater chain",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008580000,
    "updatedAt": 1715008580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-144",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "VLAN is used to:",
    "back": "Logically segment a LAN",
    "explanation": "Option B: Logically segment a LAN",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Replace DNS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Logically segment a LAN",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Assign MAC to RAM",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Encrypt disks",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008640000,
    "updatedAt": 1715008640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-145",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "RDP default port?",
    "back": "3389",
    "explanation": "Option B: 3389",
    "mcqOptions": [
      {
        "id": "A",
        "text": "22",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3389",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "8080",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1433",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715008700000,
    "updatedAt": 1715008700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-146",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Malware that copies itself across networks without a host file?",
    "back": "Worm",
    "explanation": "Option C: Worm",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Virus",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Trojan",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Worm",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Spyware",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715008760000,
    "updatedAt": 1715008760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-147",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Ransomware typically:",
    "back": "Encrypts files and demands payment",
    "explanation": "Option B: Encrypts files and demands payment",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Speeds the CPU",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Encrypts files and demands payment",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Fixes bugs",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Updates BIOS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715008820000,
    "updatedAt": 1715008820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-148",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "CIA triad is:",
    "back": "Confidentiality, Integrity, Availability",
    "explanation": "Option B: Confidentiality, Integrity, Availability",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Cloud, Internet, Access",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Confidentiality, Integrity, Availability",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Cipher, Index, Auth",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cache, IP, ARP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715008880000,
    "updatedAt": 1715008880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-149",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Hashing is mainly for:",
    "back": "Integrity / one-way fingerprint",
    "explanation": "Option B: Integrity / one-way fingerprint",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Hiding data so it can be decrypted with a key",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Integrity / one-way fingerprint",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Assigning IPs",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Drawing charts",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715008940000,
    "updatedAt": 1715008940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715008940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-150",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "AES is a:",
    "back": "Symmetric cipher",
    "explanation": "Option B: Symmetric cipher",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Hash only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Symmetric cipher",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Routing protocol",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mail client",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009000000,
    "updatedAt": 1715009000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-151",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "RSA is typically:",
    "back": "Asymmetric (public/private keys)",
    "explanation": "Option B: Asymmetric (public/private keys)",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Symmetric only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Asymmetric (public/private keys)",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A switch type",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A subnet mask",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009060000,
    "updatedAt": 1715009060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-152",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "HTTPS uses:",
    "back": "TLS/SSL over HTTP",
    "explanation": "Option B: TLS/SSL over HTTP",
    "mcqOptions": [
      {
        "id": "A",
        "text": "FTP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TLS/SSL over HTTP",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SMTP",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ICMP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009120000,
    "updatedAt": 1715009120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-153",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "MFA means:",
    "back": "Extra factor besides password",
    "explanation": "Option B: Extra factor besides password",
    "mcqOptions": [
      {
        "id": "A",
        "text": "One password only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Extra factor besides password",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "No login",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "MAC flooding",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009180000,
    "updatedAt": 1715009180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-154",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "IDS vs IPS: IPS additionally:",
    "back": "Can block/prevent the attack",
    "explanation": "Option B: Can block/prevent the attack",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Only logs",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Can block/prevent the attack",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Assigns DHCP",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Draws slides",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009240000,
    "updatedAt": 1715009240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-155",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "SQL injection targets:",
    "back": "Database queries via untrusted input",
    "explanation": "Option B: Database queries via untrusted input",
    "mcqOptions": [
      {
        "id": "A",
        "text": "PowerPoint themes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Database queries via untrusted input",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "HDMI cables",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "RAM clock",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009300000,
    "updatedAt": 1715009300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-156",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Social engineering attacks:",
    "back": "People, not only packets",
    "explanation": "Option B: People, not only packets",
    "mcqOptions": [
      {
        "id": "A",
        "text": "CPUs",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "People, not only packets",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Fiber attenuation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Excel fill handle",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009360000,
    "updatedAt": 1715009360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-157",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Least privilege means:",
    "back": "Minimum access needed for the job",
    "explanation": "Option B: Minimum access needed for the job",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Admin rights for everyone",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Minimum access needed for the job",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Open all ports",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Share one password",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009420000,
    "updatedAt": 1715009420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-158",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "A digital certificate is issued by a:",
    "back": "Certificate Authority",
    "explanation": "Option B: Certificate Authority",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DHCP server",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Certificate Authority",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Hub",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Thesaurus",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009480000,
    "updatedAt": 1715009480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-159",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Brute-force attack:",
    "back": "Tries many passwords",
    "explanation": "Option A: Tries many passwords",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Tries many passwords",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Floods DNS only",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Paints slides",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Merges cells",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009540000,
    "updatedAt": 1715009540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-160",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Keylogger captures:",
    "back": "Keystrokes",
    "explanation": "Option B: Keystrokes",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Packets at Layer 3 only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Keystrokes",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Subnet masks",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cloud regions",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715009600000,
    "updatedAt": 1715009600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-161",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "NIST cloud trait: use more/less resource as demand changes?",
    "back": "Rapid elasticity",
    "explanation": "Option B: Rapid elasticity",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Broad network access",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Rapid elasticity",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Measured service",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Resource pooling",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715009660000,
    "updatedAt": 1715009660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-162",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Billing by actual use is:",
    "back": "Measured service",
    "explanation": "Option B: Measured service",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Resource pooling",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Measured service",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "On-prem CAPEX only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Physical lock-in",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715009720000,
    "updatedAt": 1715009720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-163",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Cloud owned and used by one organization?",
    "back": "Private",
    "explanation": "Option B: Private",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Community",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Multi-public",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715009780000,
    "updatedAt": 1715009780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-164",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Mix of public + private is:",
    "back": "Hybrid",
    "explanation": "Option B: Hybrid",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Community only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Hybrid",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Bare metal only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Mainframe",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715009840000,
    "updatedAt": 1715009840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-165",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Amazon EC2 is mainly:",
    "back": "IaaS",
    "explanation": "Option C: IaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "IDaaS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715009900000,
    "updatedAt": 1715009900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-166",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Google App Engine / Heroku are mainly:",
    "back": "PaaS",
    "explanation": "Option B: PaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715009960000,
    "updatedAt": 1715009960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715009960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-167",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Salesforce / Dropbox-style apps are mainly:",
    "back": "SaaS",
    "explanation": "Option C: SaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Bare metal",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010020000,
    "updatedAt": 1715010020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-168",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Least built-in security (you secure more yourself)?",
    "back": "IaaS",
    "explanation": "Option C: IaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "All equal",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010080000,
    "updatedAt": 1715010080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-169",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Most complete app + platform + hardware vendor model?",
    "back": "SaaS",
    "explanation": "Option C: SaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "CaaS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010140000,
    "updatedAt": 1715010140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-170",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "SPI cloud models are:",
    "back": "SaaS, PaaS, IaaS",
    "explanation": "Option B: SaaS, PaaS, IaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Switch, Port, IP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SaaS, PaaS, IaaS",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "SMTP, POP, IMAP",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SYN, PSH, ACK",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010200000,
    "updatedAt": 1715010200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-171",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Multi-tenancy means:",
    "back": "Many customers share the same platform, isolated logically",
    "explanation": "Option B: Many customers share the same platform, isolated logically",
    "mcqOptions": [
      {
        "id": "A",
        "text": "One VM per planet",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Many customers share the same platform, isolated logically",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "No isolation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only USB sharing",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010260000,
    "updatedAt": 1715010260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-172",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Hardware virtualized in the cloud is the core of:",
    "back": "IaaS",
    "explanation": "Option B: IaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "IaaS",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Thesaurus",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Slide Master",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010320000,
    "updatedAt": 1715010320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-173",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Google Workspace is an example of:",
    "back": "SaaS",
    "explanation": "Option B: SaaS",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SaaS",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Bare-metal colo",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Layer-1 hub",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010380000,
    "updatedAt": 1715010380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-174",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Main risk of depending on one cloud vendor's APIs?",
    "back": "Vendor lock-in",
    "explanation": "Option B: Vendor lock-in",
    "mcqOptions": [
      {
        "id": "A",
        "text": "VLAN hopping",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Vendor lock-in",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Gutter margin",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Fill handle",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010440000,
    "updatedAt": 1715010440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-175",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Availability Zone is best described as:",
    "back": "Isolated data-center group inside a region",
    "explanation": "Option B: Isolated data-center group inside a region",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A Word style",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Isolated data-center group inside a region",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A MAC address",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "An Excel chart type",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715010500000,
    "updatedAt": 1715010500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-176",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "y = 5; print y << 3",
    "back": "40",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 40",
    "codeSnippet": "y = 5; print y << 3",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "40",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "5",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010560000,
    "updatedAt": 1715010560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-177",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "n = 10; print n << 2",
    "back": "40",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 40",
    "codeSnippet": "n = 10; print n << 2",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "20",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "40",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010620000,
    "updatedAt": 1715010620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-178",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "x = 7; print x >> 1",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: 3",
    "codeSnippet": "x = 7; print x >> 1",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "14",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010680000,
    "updatedAt": 1715010680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-179",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a = 12; b = 5; print a & b",
    "back": "4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 4",
    "codeSnippet": "a = 12; b = 5; print a & b",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "9",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010740000,
    "updatedAt": 1715010740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-180",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a = 12; b = 5; print a | b",
    "back": "13",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 13",
    "codeSnippet": "a = 12; b = 5; print a | b",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "13",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "17",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010800000,
    "updatedAt": 1715010800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-181",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a = 12; b = 5; print a ^ b",
    "back": "9",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 9",
    "codeSnippet": "a = 12; b = 5; print a ^ b",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "17",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010860000,
    "updatedAt": 1715010860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-182",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "for i = 1 to 5: if i % 2 == 0: continue; print i",
    "back": "1 3 5",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 1 3 5",
    "codeSnippet": "for i = 1 to 5: if i % 2 == 0: continue; print i",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 2 3 4 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2 4",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1 3 5",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "1 2 3",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010920000,
    "updatedAt": 1715010920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-183",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "for i = 1 to 5: print i; if i == 3: break",
    "back": "1 2 3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 1 2 3",
    "codeSnippet": "for i = 1 to 5: print i; if i == 3: break",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 2 3 4 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 2 3",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "3 4 5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1 2",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715010980000,
    "updatedAt": 1715010980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715010980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-184",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "fact(n): if n <= 1 return 1 else return n * fact(n-1). print fact(5)",
    "back": "120",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 120",
    "codeSnippet": "fact(n): if n <= 1 return 1 else return n * fact(n-1). print fact(5)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "60",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "120",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "24",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011040000,
    "updatedAt": 1715011040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-185",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "fib(n): if n <= 1 return n else return fib(n-1)+fib(n-2). print fib(6)",
    "back": "8",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 8",
    "codeSnippet": "fib(n): if n <= 1 return n else return fib(n-1)+fib(n-2). print fib(6)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "21",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011100000,
    "updatedAt": 1715011100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-186",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Swap without temp: a=4; b=9; a=a+b; b=a-b; a=a-b; print a, b",
    "back": "9 4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 9 4",
    "codeSnippet": "Swap without temp: a=4; b=9; a=a+b; b=a-b; a=a-b; print a, b",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4 9",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "9 4",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "13 4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "9 13",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011160000,
    "updatedAt": 1715011160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-187",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "s = 0; for i = 1 to 4: s = s + i * i; print s",
    "back": "30",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 30",
    "codeSnippet": "s = 0; for i = 1 to 4: s = s + i * i; print s",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "30",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "16",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011220000,
    "updatedAt": 1715011220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-188",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "x = 27; c = 0; while x > 0: x = x // 10; c = c + 1; print c",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 3",
    "codeSnippet": "x = 27; c = 0; while x > 0: x = x // 10; c = c + 1; print c",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "27",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011280000,
    "updatedAt": 1715011280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-189",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "n = 121; r = 0; t = n; while t: r = r*10 + t%10; t = t//10. print r == n",
    "back": "True",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: True",
    "codeSnippet": "n = 121; r = 0; t = n; while t: r = r*10 + t%10; t = t//10. print r == n",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "True",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "False",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1210",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011340000,
    "updatedAt": 1715011340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-190",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "pow(a,b): r=1; for i=1 to b: r=r*a; return r. print pow(2,5)",
    "back": "32",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 32",
    "codeSnippet": "pow(a,b): r=1; for i=1 to b: r=r*a; return r. print pow(2,5)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "32",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "25",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011400000,
    "updatedAt": 1715011400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-191",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "c=0; for i=1 to 3: for j=1 to 3: if i==j: c=c+1; print c",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: 3",
    "codeSnippet": "c=0; for i=1 to 3: for j=1 to 3: if i==j: c=c+1; print c",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011460000,
    "updatedAt": 1715011460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-192",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=8; b=3; print a % b + a / b (integer division)",
    "back": "4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 4",
    "codeSnippet": "a=8; b=3; print a % b + a / b (integer division)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "11",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011520000,
    "updatedAt": 1715011520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-193",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "f(n): if n==0: return; print n; f(n-1); print n. f(2) output?",
    "back": "2 1 1 2",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 2 1 1 2",
    "codeSnippet": "f(n): if n==0: return; print n; f(n-1); print n. f(2) output?",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2 1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2 1 1 2",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1 2",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2 2 1 1",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011580000,
    "updatedAt": 1715011580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-194",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "x=15; y=0; while x: y = y + (x & 1); x = x >> 1; print y",
    "back": "4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 4",
    "codeSnippet": "x=15; y=0; while x: y = y + (x & 1); x = x >> 1; print y",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011640000,
    "updatedAt": 1715011640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-195",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a={2,4,6,8}; s=0; for i=0 to 3: if a[i]%4==0: s=s+a[i]; print s",
    "back": "12",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 12",
    "codeSnippet": "a={2,4,6,8}; s=0; for i=0 to 3: if a[i]%4==0: s=s+a[i]; print s",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "20",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011700000,
    "updatedAt": 1715011700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-196",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "gcd(a,b): while b: t=b; b=a%b; a=t; return a. print gcd(48,18)",
    "back": "6",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option A: 6",
    "codeSnippet": "gcd(a,b): while b: t=b; b=a%b; a=t; return a. print gcd(48,18)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "18",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "3",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011760000,
    "updatedAt": 1715011760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-197",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "n=5; s=1; for i=1 to n: s=s*2; print s",
    "back": "32",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 32",
    "codeSnippet": "n=5; s=1; for i=1 to n: s=s*2; print s",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "16",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "32",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "64",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011820000,
    "updatedAt": 1715011820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-198",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=5; b=10; if a++ > 5: print a else print b (post-increment)",
    "back": "10",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 10",
    "codeSnippet": "a=5; b=10; if a++ > 5: print a else print b (post-increment)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "10",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "11",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011880000,
    "updatedAt": 1715011880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-199",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "a=3; print ++a + a++ (C left-to-right, typical Accenture expected)",
    "back": "8",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option C: 8",
    "codeSnippet": "a=3; print ++a + a++ (C left-to-right, typical Accenture expected)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "9",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715011940000,
    "updatedAt": 1715011940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715011940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-200",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "isPrime(n): if n<2 return 0; for i=2 to n-1: if n%i==0 return 0; return 1. print isPrime(9), isPrime(11)",
    "back": "0 1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Option B: 0 1",
    "codeSnippet": "isPrime(n): if n<2 return 0; for i=2 to n-1: if n%i==0 return 0; return 1. print isPrime(9), isPrime(11)",
    "codeLanguage": "pseudo",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "0 1",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "1 0",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "0 0",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715012000000,
    "updatedAt": 1715012000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012000000,
      "lapses": 0,
      "state": "new"
    }
  }
];
