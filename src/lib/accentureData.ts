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
    "explanation": "Ctrl+B toggles bold styling on the selected text or toggles bold mode for newly typed characters.",
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
    "explanation": "The MAX function scans a range of numeric values and returns the single highest value among them.",
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
    "explanation": "The Insert tab in Excel provides access to all chart types, pivot tables, shapes, and illustrations.",
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
    "explanation": "In a spreadsheet grid, the intersection point of a vertical column and a horizontal row is called a cell.",
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
    "explanation": "Ctrl+P is the standard shortcut across Microsoft Office and Windows applications to open the Print preview and dialog.",
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
    "explanation": "Ctrl+W closes the currently active document or workbook window without exiting the entire application.",
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
    "explanation": "Pressing F7 initiates the Spelling & Grammar proofing checker across the document in Word, Excel, and PowerPoint.",
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
    "explanation": "Document1 is the default temporary placeholder name assigned by Microsoft Word when creating a new blank document.",
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
    "explanation": "Regular, Bold, and Italic are font styles, whereas Superscript (and Subscript) are font effects/formatting attributes.",
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
    "explanation": "Ctrl+M inserts a new blank slide immediately after the active slide in PowerPoint (Ctrl+N creates an entirely new presentation).",
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
    "explanation": "Slide Transitions control visual motion when moving from one slide to another, while Animations apply motion to individual slide objects.",
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
    "explanation": "PowerPoint presentations support embedding multiple multimedia formats, including raster images, audio tracks, and animated graphics.",
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
    "explanation": "Dragging is the operation of pressing and holding the primary mouse button while moving the cursor across the screen to reposition items.",
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
    "explanation": "Microsoft Publisher is specifically designed for desktop publishing, page layout, newsletters, brochures, flyers, and greeting cards.",
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
    "explanation": "Sort & Filter is found on the Data and Home tabs in Excel; the Insert tab is reserved for objects like Tables, Charts, and Links.",
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
    "explanation": "Data Validation allows you to restrict user input and generate convenient in-cell drop-down lists by specifying allowed values or list ranges.",
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
    "explanation": ".xlsm denotes an XML-based Excel workbook that contains VBA macros, whereas standard .xlsx files cannot store macro code for security.",
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
    "explanation": "The colon (:) is the range operator in Excel, signifying a contiguous range of cells from column B row 8 down to column B row 10.",
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
    "explanation": "Both methods immediately terminate an active numbered list in Word: clicking the Numbering ribbon toggle or pressing Enter twice on an empty list item.",
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
    "explanation": "Ctrl+A selects all content, including text, tables, and objects, across the active document.",
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
    "explanation": "A Hyperlink allows readers to click and navigate directly to another webpage, external file, or internal bookmark/heading.",
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
    "explanation": "The Review tab houses collaboration and proofing tools including Track Changes, Comments, Compare, and Spelling/Grammar checks.",
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
    "explanation": "The Fill Handle is the small solid square in the bottom-right corner of the active cell, used to auto-fill formulas or data sequences.",
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
    "explanation": "In Excel 2007 and newer, every worksheet contains 16,384 columns (spanning from column A to XFD) and 1,048,576 rows.",
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
    "explanation": "Ctrl+Shift+M is the dedicated global keyboard shortcut to open a new email compose window in Microsoft Outlook.",
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
    "explanation": "A Virtual Private Network (VPN) encrypts internet traffic and tunnels it through an intermediary server, masking IP and securing transmission.",
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
    "explanation": "A Distributed Denial of Service (DDoS) attack overwhelms target servers, switches, or bandwidth with flood traffic from multiple botnet nodes.",
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
    "explanation": "SSH (Secure Shell) provides encrypted remote command-line login and secure file transfer (SFTP/SCP) over port 22.",
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
    "explanation": "A firewall filters inbound and outbound network traffic based on predefined security rules to block unauthorized connections.",
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
    "explanation": "The Network Layer (Layer 3 of OSI) handles logical addressing (IP addresses) and routes packets across distinct interconnected networks.",
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
    "explanation": "UDP (User Datagram Protocol) is connectionless, sending datagrams without establishing a handshake or verifying receipt, maximizing speed.",
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
    "explanation": "WPA3 provides stronger cryptographic protection with 192-bit security suite support and Protected Management Frames (PMF), replacing WPA2.",
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
    "explanation": "DNS queries primarily use UDP on port 53 for fast resolution, falling back to TCP port 53 for zone transfers or responses exceeding 512 bytes.",
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
    "explanation": "HTTP unencrypted web traffic defaults to TCP port 80, whereas secure HTTPS traffic encrypted via TLS defaults to TCP port 443.",
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
    "explanation": "A router is a Layer 3 device that inspects destination IP addresses to forward packets across different subnets and network boundaries.",
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
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to client devices on a network.",
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
    "explanation": "MAC (Media Access Control) hardware addresses operate at Layer 2 (Data Link Layer) to deliver frames across the local physical segment.",
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
    "explanation": "SMTP (Simple Mail Transfer Protocol) on port 25 or 587 is used by email clients to send/push messages to mail servers.",
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
    "explanation": "NAT (Network Address Translation) maps multiple private internal IP addresses to a single public IP address, conserving IPv4 addresses and adding basic security.",
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
    "explanation": "IPv4 addresses are 32 bits long, divided into 4 octets written in dotted-decimal format (providing ~4.3 billion total addresses).",
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
    "explanation": "IPv6 addresses are 128 bits long, expressed as 8 groups of 4 hexadecimal digits, resolving IPv4 address exhaustion.",
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
    "explanation": "Standard Ethernet switches operate at Layer 2 (Data Link Layer), using MAC address forwarding tables to switch frames directly to destination ports.",
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
    "explanation": "Ping uses ICMP (Internet Control Message Protocol) Echo Request (Type 8) and Echo Reply (Type 0) packets to test IP network reachability.",
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
    "explanation": "Port 22 is the standard well-known TCP port assigned to SSH (Secure Shell) for encrypted remote administration.",
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
    "explanation": "An IDS (Intrusion Detection System) passively inspects and alerts on suspicious network traffic, unlike an IPS (Intrusion Prevention System) which actively blocks malicious packets.",
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
    "explanation": "Authentication verifies the identity of a user or system (answering 'Who are you?'), usually via passwords, tokens, or biometrics.",
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
    "explanation": "Authorization determines the permissions and resources a verified user is permitted to access (answering 'What are you allowed to do?').",
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
    "explanation": "A virus self-replicates by attaching to clean files and spreading, whereas a Trojan disguises itself as legitimate software and does not self-replicate on its own.",
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
    "explanation": "Phishing is a social engineering attack that masquerades as a trusted entity to trick victims into divulging credentials, financial details, or personal data.",
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
    "explanation": "Packet-filtering firewalls inspect Layer 3 and Layer 4 packet header attributes (source/destination IP, protocol, and port numbers) against rule sets.",
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
    "explanation": "Stateful inspection firewalls maintain a state table tracking the context and sequence of active two-way network connections.",
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
    "explanation": "ESP provides data confidentiality (encryption), integrity, authentication, and anti-replay protection for IP payloads.",
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
    "explanation": "The PMK (Pairwise Master Key) is derived from the Wi-Fi pre-shared password (PSK) and SSID, and is used to generate temporary session encryption keys.",
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
    "explanation": "A security group acts as a virtual, stateful firewall controlling inbound and outbound traffic at the virtual instance level.",
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
    "explanation": "Encryption at rest safeguards static data stored on physical disks, databases, or object storage against unauthorized physical or offline access.",
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
    "explanation": "A MitM attack occurs when an adversary secretly relays, intercepts, or alters communications between two unsuspecting parties who believe they are communicating directly.",
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
    "explanation": "Spoofing is the practice of disguising communication from an unknown source as being from a known, trusted source by faking IP, MAC, or email addresses.",
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
    "explanation": "Network security firewalls include packet-filtering, stateful inspection, and application proxy firewalls; a spreadsheet filter is an office tool, not a security device.",
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
    "explanation": "In cloud computing, security obligations are divided: the cloud provider manages 'security OF the cloud' (hardware/infrastructure), while the customer handles 'security IN the cloud' (data, OS, configurations).",
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
    "explanation": "A firewall inspects packet headers and applies rule sets to filter incoming and outgoing traffic, serving as the foundational network perimeter defense.",
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
    "explanation": "IaaS (Infrastructure as a Service) provides virtualized compute, storage, and networking resources where users install and manage their own OS, middleware, and applications.",
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
    "explanation": "Software as a Service (SaaS) delivers fully managed web applications like Gmail, Office 365, or Salesforce directly to end users without server management.",
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
    "explanation": "A private cloud offers dedicated single-tenant infrastructure isolated within an organization's network, ensuring maximum control for sensitive workloads.",
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
    "explanation": "Public cloud environments host multiple tenants on shared physical infrastructure separated securely by hypervisor virtualization.",
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
    "explanation": "Pay-as-you-go billing allows small businesses to consume cloud resources on demand with zero upfront capital investment or capacity commitments.",
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
    "explanation": "Virtualization uses a hypervisor to abstract hardware resources, allowing multiple operating systems to run concurrently on a single physical host.",
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
    "explanation": "In Platform as a Service (PaaS), the provider manages the underlying runtime, OS, and server infrastructure, but data management, application logic, and schema design remain the customer's responsibility.",
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
    "explanation": "Cloud computing features rapid elasticity, allowing computing capacity, memory, and storage to scale up or down on-demand within seconds.",
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
    "explanation": "In an on-premises company-owned data center, the owner/organization bears 100% of the cost, maintenance, and hardware downtime responsibility.",
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
    "explanation": "Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) comprise the top global hyperscale public cloud providers.",
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
    "explanation": "Cloud storage offers virtually unlimited, elastic capacity that automatically scales dynamically to match data volume without manual disk provisioning.",
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
    "explanation": "A hypervisor (or Virtual Machine Monitor) abstracts physical hardware to instantiate, manage, and isolate multiple virtual machines on a single host machine.",
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
    "explanation": "Owning and operating physical infrastructure in an on-premises data center contrasts with renting elastic infrastructure on-demand from a cloud provider.",
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
    "explanation": "Client-server architecture requires robust network protocols, secure communication channels, proper access controls, and data mapping.",
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
    "explanation": "Cloud OpEx (pay-as-you-go consumption) eliminates heavy upfront Capital Expenditure (CapEx) associated with purchasing on-premises servers and data center facilities.",
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
    "explanation": "The loop executes with index l = 0 to 0, accessing and printing only word[0], which corresponds to the first character of the string.",
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
    "explanation": "Initially x=10, y=16, z=3. First condition (10>16) is false, so y becomes 10. Second condition (3>10) is false, so y becomes 3. Thus x=10, y=3, z=3, and x+y+z = 10+3+3 = 16.",
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
    "explanation": "Initially x=8, y=6, z=4. First condition (8>6) is true, so x=6. Second condition (4>6) is false, so y becomes 4. Thus x=6, y=4, z=4, and x+y+z = 6+4+4 = 14.",
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
    "explanation": "With z=2: y = 7 % 2 = 1, and x = 9 % 2 = 1. The function returns x + y = 1 + 1 = 2.",
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
    "explanation": "The condition requires all four terms to be true. Since sum==12 (not 11) and q==8 (not 4), the compound condition evaluates to false, outputting 'Fail'.",
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
    "explanation": "Since a=11 and b=12, the condition (11<3 && 12<4) is false immediately. The else branch executes directly: 11 + 12 = 23.",
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
    "explanation": "With num=0: right shifting 0 >> 1 equals 0. Then adding value (0 + 1) assigns num=1.",
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
    "explanation": "The loop begins at x=1. Inside, x increases to 3, and loop step increments it to 4, then 6 -> 7, 9 -> 10, 12 -> 13. When x reaches 13, it exceeds 11 and prints 13.",
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
    "explanation": "Array becomes: a[0]=0+1=1, a[1]=1+0=1, a[2]=0+1=1. Since a[0]=1 is truthy, a[1] is set to 5. Then m = 1 + a[1] = 1 + 5 = 6.",
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
    "explanation": "This recursive call prints k on the way down and on unwind: 150, 152, 154, followed by the unwinding prints 154, 152, 150.",
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
    "explanation": "Element-wise subtraction yields: 5-2=3, 9-4=5, 7-6=1, 3-8=-5, 1-10=-9, giving '3 5 1 -5 -9'.",
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
    "explanation": "For a from 0 to 4 and b from 0 to 2: pairs where a>b are (1,0)=1, (2,0),(2,1)=2, (3,0),(3,1),(3,2)=3, (4,0),(4,1),(4,2)=3. Total printed = 1 + 2 + 3 + 3 = 9 times.",
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
    "explanation": "Tracing step-by-step: q=13, p=1 gives r=13%1=0, p becomes 6, q becomes 6+0=6, then r=6/5=1. Loop terminates as p>4, printing '6 1'.",
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
    "explanation": "Evaluating x=259: 259 % 9 gives 7 (since sum of digits 2+5+9=16 and 16%9=7). The condition x%9!=0 routes to printing 259 % 9 = 7.",
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
    "explanation": "a=(12+25)%2 = 37%2 = 1. Then b=1. Next a = 1 + 1 - 13 = -11. Outputs a=-11 and b=1.",
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
    "explanation": "b ^ b evaluates to 0. Any value bitwise ANDed with 0 is 0, so (a & 0 & c) is 0 (false). The condition does not trigger, leaving a=4, b=4, c=4: sum is 12.",
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
    "explanation": "The recursive condition if(0) never executes. Then a = 10 + 10 + 10 + 10 = 40.",
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
    "explanation": "Since x=2, the condition x==1 is false, so the else branch executes, printing 'C'.",
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
    "explanation": "m becomes 10, n becomes 5. Then m = 10 + 5 = 15. Since 15 > 5, it prints m (15).",
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
    "explanation": "The loop sums n from 6 up to 8 (n < 9): 6 + 7 + 8 = 21.",
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
    "explanation": "f(8,9) swaps to f(9,8). This adds 9 repeatedly 8 times: 9 * 8 = 72.",
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
    "explanation": "b = 7 % 2 = 1, and a = 9 % 2 = 1. Returns a + b = 1 + 1 = 2.",
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
    "explanation": "Non-zero digits of 2630 are 2, 6, and 3. Testing divisibility: 2630 is divisible by 2 (2630/2=1315). It is not divisible by 6 or 3. Total dividing non-zero digits is 1 (or examining 3 non-zero candidates).",
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
    "explanation": "Octal to decimal conversion: 7*(8^0) + 2*(8^1) + 1*(8^2) = 7*1 + 2*8 + 1*64 = 7 + 16 + 64 = 87.",
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
    "explanation": "Sum is 30+60+90=180, and all three angles are positive nonzero values, validly forming a triangle: outputs 'Success'.",
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
    "explanation": "The Change Case command (Shift+F3) in Word lets you switch text between UPPERCASE, lowercase, Sentence case, and Capitalize Each Word.",
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
    "explanation": "Microsoft Access was introduced later in 1992; the initial 1990 Office suite for Windows contained only Word, Excel, and PowerPoint.",
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
    "explanation": "Statement I is true because Mini Translator remains active for selected words until disabled, but statement II is false because it only sends hovered words or short phrases.",
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
    "explanation": "In classic Word: red indicates spelling errors, blue indicates grammatical errors, and green indicated grammar in older editions. Thus none of the listed pairs are correct.",
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
    "explanation": "A Hyperlink (or Action Button) in PowerPoint connects a slide object to other slides, files, or web pages.",
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
    "explanation": "Deleted emails are moved to the Deleted Items folder before being permanently purged or moved to recoverable items.",
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
    "explanation": "Holding the Ctrl key while clicking or dragging allows you to highlight and select non-contiguous portions of text.",
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
    "explanation": "In Windows command line, 'cd ..' navigates up one folder level, and 'cd ..\\..' ascends two directory levels in a single command.",
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
    "explanation": "The Thesaurus tool (Shift+F7) in Word provides synonyms, antonyms, and related word definitions.",
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
    "explanation": "Ctrl+D (or Ctrl+Shift+F) opens the comprehensive Font formatting dialog box in Microsoft Word.",
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
    "explanation": "A gutter margin adds extra space to the side or top margin of a printed document to accommodate binding without obscuring text.",
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
    "explanation": "Ctrl+Alt+S splits the active Word document window horizontally into two independent scrollable panes.",
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
    "explanation": "VBA (Visual Basic for Applications) is the event-driven programming language integrated across Microsoft Office applications to automate repetitive tasks.",
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
    "explanation": "When merging a range of cells containing data, Excel preserves only the upper-left cell's value and discards all other values.",
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
    "explanation": "Pressing F2 enters edit mode for the currently selected cell, placing the insertion point at the end of the cell contents.",
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
    "explanation": "Hovering over the border of a selected cell or range displays a four-headed arrow cursor, allowing you to drag and move the selected cells to a new location.",
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
    "explanation": "Alt + = automatically inserts the SUM formula with an intelligent guess of adjacent rows or columns in Excel.",
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
    "explanation": "Backstage view (accessible via the File tab) manages document-level settings like Open, Save, Print, Share, and Account preferences.",
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
    "explanation": "Pressing F5 starts the PowerPoint slideshow presentation from the very first slide (Shift+F5 starts from the currently active slide).",
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
    "explanation": "Slide Sorter view presents thumbnail representations of all slides in a grid, making it ideal for reordering, copying, or deleting slides quickly.",
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
    "explanation": "A Theme provides a unified visual palette consisting of coordinate colors, heading/body fonts, and shape effects across Office documents.",
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
    "explanation": "A spreadsheet application arranges numerical and textual data in a grid of rows and columns to facilitate arithmetic formulas and analysis.",
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
    "explanation": "Slide Master is the top slide in a hierarchy that stores information about the theme, layout, fonts, and background for all slides in a PowerPoint presentation.",
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
    "explanation": "Alt+F8 opens the Macro dialog window in Word, Excel, and PowerPoint to view, run, step into, or edit macros.",
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
    "explanation": "Shift+F5 launches the slide show starting immediately from the currently selected slide rather than slide 1.",
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
    "explanation": "TCP (Transmission Control Protocol) is a reliable, connection-oriented transport protocol that ensures ordered, error-checked delivery of packets via acknowledgments and retransmissions.",
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
    "explanation": "The Physical Layer (Layer 1) defines the hardware specifications, cables, voltages, and raw bit-level transmission across physical media.",
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
    "explanation": "HTTP, FTP, SMTP, and DNS reside at the Application Layer (Layer 7 of OSI / Layer 4 of TCP/IP), interacting directly with software applications.",
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
    "explanation": "ARP (Address Resolution Protocol) resolves a known IPv4 network layer address into its corresponding physical MAC hardware address on a local area network.",
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
    "explanation": "The default gateway is the IP address of the local router interface that hosts forward packets to when the destination IP is outside their local subnet.",
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
    "explanation": "/26 has 6 host bits (2^6 = 64 total addresses). Subtracting 2 for network and broadcast leaves 62 usable host IP addresses.",
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
    "explanation": "The standard Maximum Transmission Unit (MTU) for Ethernet frames is 1,500 bytes of IP payload.",
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
    "explanation": "A standard hub operates at Layer 1 (Physical Layer) of the OSI model, broadcasting all incoming electrical signals to all other ports without packet inspection.",
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
    "explanation": "Traditional FTP uses TCP port 21 for command/control connection management and port 20 for active data transfer.",
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
    "explanation": "Telnet communicates in unencrypted plain text over TCP port 23, which is why it has been largely superseded by SSH (port 22).",
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
    "explanation": "Standard unencrypted POP3 uses TCP port 110, while IMAP uses TCP port 143 for retrieving emails from a mail server.",
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
    "explanation": "RFC 1918 defines private address spaces: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.",
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
    "explanation": "127.0.0.1 is the standard IPv4 loopback IP address representing localhost, allowing a computer to send network packets to itself.",
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
    "explanation": "The TCP connection establishment sequence proceeds: Client sends SYN, Server replies with SYN-ACK, and Client confirms with ACK.",
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
    "explanation": "A switch works at Layer 2 using MAC address tables to direct frames only to the designated port, creating dedicated collision domains per port.",
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
    "explanation": "DHCP utilizes UDP port 67 for the server to listen for requests and UDP port 68 for clients to receive configuration responses.",
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
    "explanation": "The nslookup utility sends queries directly to DNS servers to resolve domain names to IP addresses or inspect DNS records.",
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
    "explanation": "In a star topology, all network nodes connect individually to a central concentrating device such as a network switch or hub.",
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
    "explanation": "A Virtual Local Area Network (VLAN) groups physical switch ports into logically isolated broadcast domains regardless of physical location.",
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
    "explanation": "Microsoft Remote Desktop Protocol (RDP) communicates over TCP/UDP port 3389 by default.",
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
    "explanation": "A worm is standalone malware that actively replicates and spreads across network connections without attaching to an existing host program or requiring user execution.",
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
    "explanation": "Ransomware covertly encrypts the victim's critical data files and demands a cryptocurrency ransom in exchange for the decryption key.",
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
    "explanation": "The CIA triad forms the cornerstone of information security: Confidentiality (secrecy), Integrity (accuracy), and Availability (accessibility).",
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
    "explanation": "Cryptographic hashing algorithms generate a fixed-size, irreversible digest of data to verify integrity and detect tampering.",
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
    "explanation": "AES (Advanced Encryption Standard) is a symmetric block cipher approved by NIST using keys of 128, 192, or 256 bits.",
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
    "explanation": "RSA is an asymmetric cryptographic algorithm relying on the mathematical difficulty of factoring large composite integers into two prime factors.",
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
    "explanation": "HTTPS encapsulates standard HTTP application traffic within a secure Transport Layer Security (TLS/SSL) encrypted tunnel over port 443.",
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
    "explanation": "Multi-Factor Authentication requires two or more distinct authentication categories: something you know (password), something you have (phone/token), or something you are (biometrics).",
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
    "explanation": "While an IDS only detects and logs alerts, an IPS (Intrusion Prevention System) sits in-line on the network to actively block or drop malicious packets in real time.",
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
    "explanation": "SQL injection (SQLi) occurs when unsanitized user input is directly concatenated into database queries. Attackers exploit this vulnerability to execute arbitrary SQL commands, bypassing authentication and accessing or modifying sensitive backend database records.",
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
    "explanation": "Social engineering exploits human psychology (trust, urgency, fear) rather than technical software bugs to manipulate people into breaking security procedures.",
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
    "explanation": "The principle of least privilege mandates granting users and processes only the absolute minimum permissions necessary to perform their assigned functions.",
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
    "explanation": "A Certificate Authority (CA) acts as a trusted third-party organization that cryptographically validates identities and issues digital X.509 certificates.",
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
    "explanation": "A brute-force attack systematically generates and attempts every possible combination of characters until the correct password or key is found.",
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
    "explanation": "A keylogger is spyware designed to covertly record every keystroke entered on a keyboard to capture passwords, messages, and sensitive inputs.",
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
    "explanation": "Rapid elasticity enables computing and storage capabilities to be elastically provisioned and released to scale outward and inward commensurate with demand.",
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
    "explanation": "Measured service automatically meters and controls cloud resource consumption, allowing utility-based pay-as-you-go billing.",
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
    "explanation": "A private cloud is provisioned for exclusive use by a single organization comprising multiple consumers, hosted either on-premises or externally.",
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
    "explanation": "A hybrid cloud infrastructure combines two or more distinct cloud models (private, community, or public) bound together by standardized technology for data and application portability.",
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
    "explanation": "Amazon Elastic Compute Cloud (EC2) provides resizable compute capacity via virtual servers, making it a hallmark IaaS offering.",
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
    "explanation": "Google App Engine and Heroku provide managed application platforms where developers deploy code without managing servers, classifying them as PaaS.",
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
    "explanation": "Salesforce and Dropbox deliver complete, ready-to-use software applications over the internet to end users, classifying them as SaaS.",
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
    "explanation": "In IaaS, the cloud provider only secures the physical infrastructure and hypervisor; the customer is responsible for guest OS patches, firewall rules, and application security.",
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
    "explanation": "In SaaS, the vendor manages every layer of the technology stack\u2014from physical data centers to operating systems, runtimes, application code, and maintenance.",
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
    "explanation": "The fundamental SPI cloud service delivery models defined by NIST are SaaS (Software), PaaS (Platform), and IaaS (Infrastructure).",
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
    "explanation": "Multi-tenancy is an architectural model where a single instance of a software application serves multiple distinct customer groups (tenants) while logically isolating their data.",
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
    "explanation": "Virtualizing raw compute, networking, and block storage infrastructure forms the architectural foundation of Infrastructure as a Service (IaaS).",
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
    "explanation": "Google Workspace (Docs, Sheets, Gmail) provides cloud-hosted productivity software accessible via web browsers, exemplifying SaaS.",
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
    "explanation": "Vendor lock-in arises when proprietary APIs, custom configurations, or data migration hurdles make it prohibitively difficult or costly to switch cloud providers.",
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
    "explanation": "An Availability Zone consists of one or more discrete, redundant data centers located within a geographic region, engineered with independent power, cooling, and networking.",
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
    "explanation": "Left-shifting 5 by 3 bit positions calculates 5 * (2^3) = 5 * 8 = 40.",
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
    "explanation": "Left-shifting 10 by 2 bit positions calculates 10 * (2^2) = 10 * 4 = 40.",
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
    "explanation": "Right-shifting 7 (binary 0111) by 1 bit position performs integer division by 2: 7 // 2 = 3 (binary 0011).",
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
    "explanation": "In binary: 12 is 1100 and 5 is 0101. Bitwise AND (&) compares matching bits: only the 4s bit (0100) is 1, so the result is 4.",
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
    "explanation": "In binary: 12 is 1100 and 5 is 0101. Bitwise OR (|) gives 1101 in binary, which evaluates to 8 + 4 + 1 = 13.",
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
    "explanation": "In binary: 12 is 1100 and 5 is 0101. Bitwise XOR (^) yields 1001 in binary, which evaluates to 8 + 1 = 9.",
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
    "explanation": "The loop runs for i=1 to 5. When i is even (2, 4), continue skips printing, so only the odd numbers 1, 3, 5 are printed.",
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
    "explanation": "The loop prints i then checks if i==3. It prints 1, 2, 3 in succession, then immediately breaks upon reaching 3.",
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
    "explanation": "Factorial calculates the product of all positive integers up to n: fact(5) = 5 * 4 * 3 * 2 * 1 = 120.",
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
    "explanation": "Fibonacci sequence: F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8.",
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
    "explanation": "Arithmetic swap: a=4+9=13; b=13-9=4; a=13-4=9. The original values are successfully swapped to a=9 and b=4 without a temporary variable.",
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
    "explanation": "The loop accumulates the sum of squares: 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30.",
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
    "explanation": "Integer division by 10 counts the number of decimal digits in 27: first iteration x=2, c=1; second iteration x=0, c=2, or for 3-digit inputs c=3.",
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
    "explanation": "The while loop reverses the digits of 121: remainder operations yield r = 121. Since reversed equals original (r == n), it returns True (it is a palindrome).",
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
    "explanation": "The power function repeatedly multiplies 2 by itself 5 times: 2^5 = 32.",
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
    "explanation": "The nested loops iterate over a 3x3 grid. The diagonal condition i == j is met exactly 3 times (at (1,1), (2,2), (3,3)), resulting in c=3.",
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
    "explanation": "For a=8 and b=3: remainder 8 % 3 = 2, and integer quotient 8 // 3 = 2. Adding them gives 2 + 2 = 4.",
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
    "explanation": "f(2) prints 2, calls f(1). f(1) prints 1, calls f(0). Then f(0) returns. On unwind, f(1) prints 1, then f(2) prints 2. Sequence is: 2 1 1 2.",
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
    "explanation": "This algorithm counts the number of set bits (1s in binary) in 15. Binary of 15 is 1111 (four 1s), so y becomes 4.",
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
    "explanation": "The array is {2, 4, 6, 8}. Elements divisible by 4 (a[i]%4 == 0) are 4 and 8. Summing them yields 4 + 8 = 12.",
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
    "explanation": "Euclidean algorithm for GCD: gcd(48, 18) -> 48%18=12 -> 18%12=6 -> 12%6=0. The greatest common divisor is 6.",
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
    "explanation": "Starting with s=1 and doubling n=5 times computes 2^5: 1 -> 2 -> 4 -> 8 -> 16 -> 32.",
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
    "explanation": "In post-increment (a++), the original value of a (5) is evaluated before incrementing. Since 5 > 5 is false, it branches to the else block and prints b (10).",
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
    "explanation": "For a=3: pre-increment ++a makes a=4 and evaluates to 4. Then post-increment a++ evaluates to 4 (and increments a to 5). 4 + 4 = 8.",
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
    "explanation": "9 is not prime (divisible by 3), so isPrime(9) returns 0. 11 is prime, so isPrime(11) returns 1. The output is '0 1'.",
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
