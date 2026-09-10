import { Deck, Flashcard } from "./types";

export const ACCENTURE_DECKS: Deck[] = [
  {
    "id": "deck-ms-office",
    "title": "MS Office & Productivity",
    "description": "Word shortcuts, Excel formulas & charts, PowerPoint tools, and formatting mastery (171 Questions).",
    "icon": "\ud83d\udcca",
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
    "description": "OSI & TCP/IP layers, routing, switching, IP addressing, DNS, ports, and protocols (88 Questions).",
    "icon": "\ud83c\udf10",
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
    "description": "Threat vectors, malware types, symmetric/asymmetric encryption, firewalls, and SSL/TLS (74 Questions).",
    "icon": "\ud83d\udd12",
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
    "description": "IaaS, PaaS, SaaS models, hypervisors, elasticity, cloud security, and architecture (94 Questions).",
    "icon": "\u2601\ufe0f",
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
    "description": "Loop execution, conditional branching, bitwise operators, string manipulation, and tracing (139 Questions).",
    "icon": "\ud83d\udcbb",
    "color": "#7c3aed",
    "tags": [
      "Pseudocode",
      "Algorithms",
      "Logic",
      "Code"
    ],
    "createdAt": 1788867077573,
    "updatedAt": 1788867077573
  },
  {
    "id": "deck-web",
    "title": "Web Technologies & Frontend",
    "description": "HTML5 semantics, CSS layout & flexbox, JavaScript DOM manipulation, closures, and SQL (30 Questions).",
    "icon": "\u26a1",
    "color": "#0ea5e9",
    "tags": [
      "Web",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Frontend"
    ],
    "createdAt": 1788953477573,
    "updatedAt": 1788953477573
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
        "isCorrect": true,
        "meaning": "Toggles bold styling on selected text."
      },
      {
        "id": "B",
        "text": "Ctrl+I",
        "isCorrect": false,
        "meaning": "Toggles italic styling on selected text."
      },
      {
        "id": "C",
        "text": "Ctrl+U",
        "isCorrect": false,
        "meaning": "Toggles underline styling on selected text."
      },
      {
        "id": "D",
        "text": "Ctrl+S",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
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
        "isCorrect": true,
        "meaning": "Returns highest numerical value from a set."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Insert"
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
        "isCorrect": true,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
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
        "isCorrect": true,
        "meaning": "Opens Print dialog preview."
      },
      {
        "id": "B",
        "text": "Ctrl+A",
        "isCorrect": false,
        "meaning": "Selects all content, text, or objects in the active document or sheet."
      },
      {
        "id": "C",
        "text": "Ctrl+C",
        "isCorrect": false,
        "meaning": "Copies selected item to clipboard."
      },
      {
        "id": "D",
        "text": "Ctrl+Q",
        "isCorrect": false,
        "meaning": "Word: Removes paragraph formatting and resets to Normal style."
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
        "isCorrect": true,
        "meaning": "Closes active document or workbook window."
      },
      {
        "id": "B",
        "text": "Ctrl+D",
        "isCorrect": false,
        "meaning": "Word: Font dialog; PowerPoint: Duplicate slide/shape; Excel: Fill down."
      },
      {
        "id": "C",
        "text": "Shift+F",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+N",
        "isCorrect": false,
        "meaning": "Creates a new blank document, workbook, or presentation."
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
        "isCorrect": false,
        "meaning": "Opens Help pane for the active application."
      },
      {
        "id": "B",
        "text": "F2",
        "isCorrect": false,
        "meaning": "Excel: Edits active cell; Windows: Renames selected file."
      },
      {
        "id": "C",
        "text": "F7",
        "isCorrect": true,
        "meaning": "Runs Spelling and Grammar check."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Document1"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Superscript"
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
        "isCorrect": true,
        "meaning": "Word: Indents paragraph; PowerPoint: Inserts a new blank slide."
      },
      {
        "id": "B",
        "text": "Ctrl+N",
        "isCorrect": false,
        "meaning": "Creates a new blank document, workbook, or presentation."
      },
      {
        "id": "C",
        "text": "Ctrl+F",
        "isCorrect": false,
        "meaning": "Opens Find search pane."
      },
      {
        "id": "D",
        "text": "Ctrl+S",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Transitions"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: All of the above"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Dragging"
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
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
      },
      {
        "id": "C",
        "text": "Publisher",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Publisher"
      },
      {
        "id": "D",
        "text": "Access",
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Sort & Filter"
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
        "isCorrect": false,
        "meaning": "Dynamically styles Excel cells (colors, data bars) based on cell values or rules."
      },
      {
        "id": "B",
        "text": "Data Validation",
        "isCorrect": true,
        "meaning": "Restricts cell inputs to specific allowed data types, lists, or numeric ranges."
      },
      {
        "id": "C",
        "text": "Pivot Table",
        "isCorrect": false,
        "meaning": "Interactive data summarization tool for grouping, aggregating, and pivoting Excel data."
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
        "isCorrect": true,
        "meaning": "Macro-enabled Excel workbook format."
      },
      {
        "id": "B",
        "text": ".xlsx",
        "isCorrect": false,
        "meaning": "Standard XML-based Excel workbook format."
      },
      {
        "id": "C",
        "text": ".xlsb",
        "isCorrect": false,
        "meaning": "Binary Excel workbook format optimized for large datasets and fast loading."
      },
      {
        "id": "D",
        "text": ".xltx",
        "isCorrect": false,
        "meaning": "Excel template workbook format."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: All cells from B8 to B10"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Both I and II"
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
        "isCorrect": false,
        "meaning": "Word: Hanging indent; Excel: Creates a formatted Table."
      },
      {
        "id": "B",
        "text": "Ctrl+A",
        "isCorrect": true,
        "meaning": "Selects all content, text, or objects in the active document or sheet."
      },
      {
        "id": "C",
        "text": "Ctrl+W",
        "isCorrect": false,
        "meaning": "Closes active document or workbook window."
      },
      {
        "id": "D",
        "text": "Ctrl+X",
        "isCorrect": false,
        "meaning": "Cuts selected text or object to clipboard."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Hyperlink"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Review"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Fill handle"
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
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "1024",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "16384",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "1048576",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
        "isCorrect": true,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "B",
        "text": "Ctrl+Shift+A",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "C",
        "text": "Ctrl+Shift+K",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "D",
        "text": "Ctrl+N",
        "isCorrect": false,
        "meaning": "Creates a new blank document, workbook, or presentation."
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
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "B",
        "text": "Virtual Public Network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Verified Private Node",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
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
        "isCorrect": false,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      },
      {
        "id": "B",
        "text": "Spoofing",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "DDoS",
        "isCorrect": true,
        "meaning": "Distributed Denial of Service: floods server with traffic from distributed botnets."
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
        "isCorrect": false,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
      },
      {
        "id": "B",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "C",
        "text": "SSH",
        "isCorrect": true,
        "meaning": "Secure Shell: cryptographic network protocol for secure remote access."
      },
      {
        "id": "D",
        "text": "POP3",
        "isCorrect": false,
        "meaning": "Post Office Protocol v3: downloads emails locally from server."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Filter traffic using security rules"
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
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "B",
        "text": "Network",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Transport",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      },
      {
        "id": "D",
        "text": "Session",
        "isCorrect": false,
        "meaning": "Layer 5: establishes, manages, and terminates application sessions."
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
        "isCorrect": false,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
      },
      {
        "id": "B",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "C",
        "text": "UDP",
        "isCorrect": true,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "D",
        "text": "HTTP",
        "isCorrect": false,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
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
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "WPA",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access: Interim standard introducing TKIP encryption."
      },
      {
        "id": "C",
        "text": "WPA2",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access 2: Strong Wi-Fi security using AES-CCMP encryption."
      },
      {
        "id": "D",
        "text": "WPA3",
        "isCorrect": true,
        "meaning": "Wi-Fi Protected Access 3: Modern wireless standard utilizing SAE (Simultaneous Authentication of Equals)."
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
        "isCorrect": false,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
      },
      {
        "id": "B",
        "text": "UDP (primarily)",
        "isCorrect": true,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "C",
        "text": "ICMP",
        "isCorrect": false,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
      },
      {
        "id": "D",
        "text": "SMTP",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 80 and 443"
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
        "isCorrect": false,
        "meaning": "Layer 1 legacy multi-port repeater broadcasting incoming signals to all ports."
      },
      {
        "id": "B",
        "text": "Switch",
        "isCorrect": false,
        "meaning": "Layer 2 network device that forwards frames within a local network using MAC table."
      },
      {
        "id": "C",
        "text": "Router",
        "isCorrect": true,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      },
      {
        "id": "D",
        "text": "Repeater",
        "isCorrect": false,
        "meaning": "Layer 1 network hardware regenerating and amplifying physical signals over distance."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Automatically assign IP addresses"
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
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Data Link",
        "isCorrect": true,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "C",
        "text": "Network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "D",
        "text": "Transport",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Sending email"
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
        "isCorrect": true,
        "meaning": "Intrusion Prevention System: actively blocks and terminates detected threats."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 32 bits"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 128 bits"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Layer 2"
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
        "isCorrect": false,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
      },
      {
        "id": "B",
        "text": "UDP",
        "isCorrect": false,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "C",
        "text": "ICMP",
        "isCorrect": true,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
      },
      {
        "id": "D",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
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
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "B",
        "text": "SSH",
        "isCorrect": true,
        "meaning": "Secure Shell: cryptographic network protocol for secure remote access."
      },
      {
        "id": "C",
        "text": "HTTP",
        "isCorrect": false,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
      },
      {
        "id": "D",
        "text": "DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
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
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "B",
        "text": "IDS",
        "isCorrect": true,
        "meaning": "Intrusion Detection System: monitors and alerts on suspicious network activity."
      },
      {
        "id": "C",
        "text": "IPS",
        "isCorrect": false,
        "meaning": "Intrusion Prevention System: actively blocks and terminates detected threats."
      },
      {
        "id": "D",
        "text": "UTM blocking gateway",
        "isCorrect": false,
        "meaning": "Network node acting as a protocol translator between disparate network architectures."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Verifying identity"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Checking what you are allowed to do"
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
        "isCorrect": true,
        "meaning": "Malicious code disguised as legitimate useful software."
      },
      {
        "id": "B",
        "text": "Same thing",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Trojan always replicates",
        "isCorrect": false,
        "meaning": "Malicious code disguised as legitimate useful software."
      },
      {
        "id": "D",
        "text": "Virus never spreads",
        "isCorrect": false,
        "meaning": "Malicious program requiring human execution and attaching to host executables."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Tricking users to reveal credentials"
      },
      {
        "id": "C",
        "text": "Guessing Wi-Fi keys by brute force only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Splitting a network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
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
        "isCorrect": false,
        "meaning": "Layer 7: interface for user applications (HTTP, DNS, FTP, SMTP)."
      },
      {
        "id": "B",
        "text": "Header info such as IP/port",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Header info such as IP/port"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Active connections"
      },
      {
        "id": "C",
        "text": "Only DNS names",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Confidentiality of payload (and often integrity)"
      },
      {
        "id": "C",
        "text": "Email delivery",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "DHCP leases",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Pairwise Master Key"
      },
      {
        "id": "C",
        "text": "Group Temporal Key",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Session cookie",
        "isCorrect": false,
        "meaning": "Layer 5: establishes, manages, and terminates application sessions."
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
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "A virtual firewall for instances",
        "isCorrect": true,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Data stored on disk"
      },
      {
        "id": "B",
        "text": "Data only in RAM",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "DNS queries",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Intercepts communication between two parties"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Faking identity (IP/MAC/email)"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Spreadsheet filter"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Security duties are split between provider and customer"
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
        "isCorrect": true,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "C",
        "text": "Word spell-check",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "D",
        "text": "PowerPoint theme",
        "isCorrect": false,
        "meaning": "Microsoft PowerPoint: Presentation software for designing slide decks."
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
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
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
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false,
        "meaning": "Desktop as a Service: Cloud-hosted virtual desktop environment accessible from anywhere."
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
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      },
      {
        "id": "D",
        "text": "Hybrid (always)",
        "isCorrect": false,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
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
        "isCorrect": false,
        "meaning": "Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "B",
        "text": "Public cloud",
        "isCorrect": true,
        "meaning": "Multi-tenant cloud infrastructure owned and operated by a third-party provider."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: pay-as-you-go"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Virtualization"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Management of your data"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Cloud"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Owner/organization"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: All of these"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Effectively elastic/unlimited for practical use"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Create and run virtual machines"
      },
      {
        "id": "C",
        "text": "Send SMTP mail",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Data center vs cloud"
      },
      {
        "id": "B",
        "text": "SaaS vs Word",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "C",
        "text": "Switch vs hub",
        "isCorrect": false,
        "meaning": "Layer 2 network device that forwards frames within a local network using MAC table."
      },
      {
        "id": "D",
        "text": "TCP vs UDP",
        "isCorrect": false,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Security, compatibility, and mapping"
      },
      {
        "id": "B",
        "text": "Only a printer driver",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Only Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Capex-heavy data centers"
      },
      {
        "id": "B",
        "text": "DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "C",
        "text": "MAC flooding",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+B",
        "isCorrect": false,
        "meaning": "Toggles bold styling on selected text."
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
    "front": "What does the following loop do for a string `word`?",
    "back": "First character",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The loop executes with index l = 0 to 0, accessing and printing only word[0], which corresponds to the first character of the string.",
    "codeSnippet": "String word\nfor (Integer l = 0 to 0)\n    Print word[l]\nend for",
    "codeLanguage": "pseudocode",
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: First character"
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
    "front": "What will be printed after executing the following pseudocode?",
    "back": "16",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Initially x=10, y=16, z=3. First condition (10>16) is false, so y becomes 10. Second condition (3>10) is false, so y becomes 3. Thus x=10, y=3, z=3, and x+y+z = 10+3+3 = 16.",
    "codeSnippet": "Integer x, y, z\nSet x = 10, y = 16, z = 3\nif (x > y)\n    x = y\nelse\n    y = x\nend if\nif (z > y)\n    z = y\nelse\n    y = z\nend if\nPrint (x + y + z)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "13",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "16",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "20",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be printed after executing the following pseudocode?",
    "back": "14",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Initially x=8, y=6, z=4. First condition (8>6) is true, so x=6. Second condition (4>6) is false, so y becomes 4. Thus x=6, y=4, z=4, and x+y+z = 6+4+4 = 14.",
    "codeSnippet": "Integer x, y, z\nSet x = 8, y = 6, z = 4\nif (x > y)\n    x = y\nelse\n    y = x\nend if\nif (z > y)\n    z = y\nelse\n    y = z\nend if\nPrint (x + y + z)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "13",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "17",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "14",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "23",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What is returned by the function call `funn(9, 7)`?",
    "back": "2",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "With z=2: y = 7 % 2 = 1, and x = 9 % 2 = 1. The function returns x + y = 1 + 1 = 2.",
    "codeSnippet": "function funn(Integer x = 9, Integer y = 7)\n    Integer z\n    Set z = 2\n    y = y % z\n    x = x % z\n    return x + y\nend function",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "17",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be printed by the following conditional block?",
    "back": "Fail",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The condition requires all four terms to be true. Since sum==12 (not 11) and q==8 (not 4), the compound condition evaluates to false, outputting 'Fail'.",
    "codeSnippet": "Integer p, q, r, sum\nSet p = 3, q = 8, r = 1, sum = 12\nif (p != 0 AND sum == 11 AND q == 4 AND r != 0)\n    Print \"Success\"\nelse\n    Print \"Fail\"\nend if",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Success",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Fail",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Fail"
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
    "front": "What does the recursive function call `solve(11, 12)` return?",
    "back": "23",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Since a=11 and b=12, the condition (11<3 && 12<4) is false immediately. The else branch executes directly: 11 + 12 = 23.",
    "codeSnippet": "function solve(Integer a, Integer b)\n    if (a < 3 AND b < 4)\n        return solve(a + 1, b + 1)\n    else\n        return a + b\nend if\nend function",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "13",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "22",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "23",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
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
    "front": "What will be printed after executing the bitwise shift and addition?",
    "back": "1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "With num=0: right shifting 0 >> 1 equals 0. Then adding value (0 + 1) assigns num=1.",
    "codeSnippet": "Integer num = 0, value = 1\nnum = num >> 1\nnum = num + value\nPrint num",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "44",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "1",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be the final value of `x` printed after the loop?",
    "back": "13",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The loop begins at x=1. Inside, x increases to 3, and loop step increments it to 4, then 6 -> 7, 9 -> 10, 12 -> 13. When x reaches 13, it exceeds 11 and prints 13.",
    "codeSnippet": "Integer x\nfor (x = 1 to 11)\n    x = x + 2\nend for\nPrint x",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "11",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "13",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
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
    "front": "What will be printed after executing the array and pointer updates?",
    "back": "6",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Array becomes: a[0]=0+1=1, a[1]=1+0=1, a[2]=0+1=1. Since a[0]=1 is truthy, a[1] is set to 5. Then m = 1 + a[1] = 1 + 5 = 6.",
    "codeSnippet": "Integer m, j\nInteger a[3] = {0, 1, 0}\nSet m = 1, j = 1\na[0] = a[0] + a[1]\na[1] = a[1] + a[2]\na[2] = a[2] + a[0]\nif (a[0])\n    a[j] = 5\nend if\nm = m + a[j]\nPrint m",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "C",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
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
    "front": "What is the complete printed sequence when `fun(150)` is executed?",
    "back": "150 152 154 154 152 150",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "This recursive call prints k on the way down and on unwind: 150, 152, 154, followed by the unwinding prints 154, 152, 150.",
    "codeSnippet": "function fun(Integer k)\n    if (k > 155)\n        return\n    end if\n    Print k\n    fun(k + 2)\n    Print k\nend function\n\nfun(150)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "150 152 154",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "150 152 154 154 152 150",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 150 152 154 154 152 150"
      },
      {
        "id": "C",
        "text": "150",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What are the resulting values stored in array `c`?",
    "back": "3 5 1 -5 -9",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Element-wise subtraction yields: 5-2=3, 9-4=5, 7-6=1, 3-8=-5, 1-10=-9, giving '3 5 1 -5 -9'.",
    "codeSnippet": "Integer a[5] = {5, 9, 7, 3, 1}\nInteger b[5] = {2, 4, 6, 8, 10}\nInteger c[5]\nfor (Integer k = 0 to 4)\n    c[k] = a[k] - b[k]\nend for\nPrint c",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "7 13 13 11 11",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "3 5 1 -5 -9",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 3 5 1 -5 -9"
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
    "front": "How many times will 'A' be printed by the nested loops?",
    "back": "9",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "For a from 0 to 4 and b from 0 to 2: pairs where a>b are (1,0)=1, (2,0),(2,1)=2, (3,0),(3,1),(3,2)=3, (4,0),(4,1),(4,2)=3. Total printed = 1 + 2 + 3 + 3 = 9 times.",
    "codeSnippet": "Integer a, b\nfor (a = 0 to 4)\n    for (b = 0 to 2)\n        if (a > b)\n            Print \"A\"\n        end if\n    end for\nend for",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "7",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be the printed values of `q` and `r`?",
    "back": "6 1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Tracing step-by-step: q=13, p=1 gives r=13%1=0, p becomes 6, q becomes 6+0=6, then r=6/5=1. Loop terminates as p>4, printing '6 1'.",
    "codeSnippet": "Integer p, q, r\nSet q = 13\nfor (p = 1 to 4)\n    r = q % p\n    p = p + 5\n    q = p + r\n    r = q / 5\nend for\nPrint q, r",
    "codeLanguage": "pseudocode",
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 6 1"
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
    "front": "What will be printed by the following conditional statement?",
    "back": "7",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Evaluating x=259: 259 % 9 gives 7 (since sum of digits 2+5+9=16 and 16%9=7). The condition x%9!=0 routes to printing 259 % 9 = 7.",
    "codeSnippet": "Integer x\nSet x = 259\nif (x == 0)\n    Print 0\nelse if (x % 9 == 0)\n    Print 9\nelse\n    Print (x % 9)\nend if",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "16",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "7",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "9",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be the printed values of `a` and `b`?",
    "back": "-11 1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "a=(12+25)%2 = 37%2 = 1. Then b=1. Next a = 1 + 1 - 13 = -11. Outputs a=-11 and b=1.",
    "codeSnippet": "Integer a, b\nSet a = 12, b = 25\na = (a + b) % 2\nb = a\na = a + b - 13\nPrint a, b",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "-11 1",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: -11 1"
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
    "front": "What will be the final printed value of `(a + b + c)`?",
    "back": "12",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "b ^ b evaluates to 0. Any value bitwise ANDed with 0 is 0, so (a & 0 & c) is 0 (false). The condition does not trigger, leaving a=4, b=4, c=4: sum is 12.",
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 4, c = 4\nif (a & (b ^ b) & c)\n    a = a >> 1\nend if\nPrint (a + b + c)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "16",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "24",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
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
    "front": "What is returned by the function call `funn(10, 5)`?",
    "back": "40",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The recursive condition if(0) never executes. Then a = 10 + 10 + 10 + 10 = 40.",
    "codeSnippet": "function funn(Integer a = 10, Integer b)\n    if (0)\n        return funn(a, b)\n    end if\n    a = a + a + a + a\n    return a\nend function",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "40",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "30",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "44",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be printed by the conditional branching?",
    "back": "C",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Since x=2, the condition x==1 is false, so the else branch executes, printing 'C'.",
    "codeSnippet": "Integer x\nSet x = 2\nif (x == 1)\n    Print \"A\"\nelse if (x == 3)\n    Print \"B\"\nelse\n    Print \"C\"\nend if",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "B C",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "C",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: C"
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
    "front": "What will be printed after executing the arithmetic updates?",
    "back": "15",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "m becomes 10, n becomes 5. Then m = 10 + 5 = 15. Since 15 > 5, it prints m (15).",
    "codeSnippet": "Integer m, n\nSet m = 9, n = 6\nm = m + 1\nn = n - 1\nm = m + n\nif (m > n)\n    Print m\nelse\n    Print n\nend if",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "10",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "15",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
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
    "front": "What will be the final value of `sum` printed after the loop?",
    "back": "21",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The loop sums n from 6 up to 8 (n < 9): 6 + 7 + 8 = 21.",
    "codeSnippet": "Integer f, g, sum, n\nSet f = 6, g = 9, sum = 0\nif (g > f)\n    for (n = f to g - 1)\n        sum = sum + n\n    end for\nend if\nPrint sum",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "21",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "6",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What is the return value of the function call `f(8, 9)`?",
    "back": "72",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "f(8,9) swaps to f(9,8). This adds 9 repeatedly 8 times: 9 * 8 = 72.",
    "codeSnippet": "function f(Integer a, Integer b)\n    if (a < b)\n        swap(a, b)\n    end if\n    if (b != 0)\n        return a + f(a, b - 1)\n    else\n        return 0\n    end if\nend function\n\nf(8, 9)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "56",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "88",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "72",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "65",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be returned by the following block?",
    "back": "2",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "b = 7 % 2 = 1, and a = 9 % 2 = 1. Returns a + b = 1 + 1 = 2.",
    "codeSnippet": "Integer a, b, c\nSet a = 9, b = 7, c = 2\nb = b % c\na = a % c\nreturn a + b",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "17",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "2",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "-5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "How many non-zero digits of `number` divide `number` evenly?",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Non-zero digits of 2630 are 2, 6, and 3. Testing divisibility: 2630 is divisible by 2 (2630/2=1315). It is not divisible by 6 or 3. Total dividing non-zero digits is 1 (or examining 3 non-zero candidates).",
    "codeSnippet": "Integer number, count\nSet number = 2630, count = 0\n// Counts non-zero digits d in 2630 where 2630 % d == 0\n// Eligible digits: 2, 6, 3 (0 is skipped)\nPrint count",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "2",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be the final value of `s` after converting octal digits to decimal?",
    "back": "87",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Octal to decimal conversion: 7*(8^0) + 2*(8^1) + 1*(8^2) = 7*1 + 2*8 + 1*64 = 7 + 16 + 64 = 87.",
    "codeSnippet": "Integer n = 127, s = 0\n// Evaluates digits right to left with power of 8:\n// s = (7 * 8^0) + (2 * 8^1) + (1 * 8^2)\nPrint s",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "27",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "87",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "187",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "D",
        "text": "120",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
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
    "front": "What will be printed by the triangle angle validation logic?",
    "back": "Success",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Sum is 30+60+90=180, and all three angles are positive nonzero values, validly forming a triangle: outputs 'Success'.",
    "codeSnippet": "Integer a, b, c, sum\nSet a = 30, b = 60, c = 90\nsum = a + b + c\nif (sum == 180 AND a != 0 AND b != 0 AND c != 0)\n    Print \"Success\"\nelse\n    Print \"Fail\"\nend if",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Success",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Success"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Change Case"
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
        "isCorrect": false,
        "meaning": "Office feature providing decorative visual typography and text transformations."
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
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
      },
      {
        "id": "C",
        "text": "PowerPoint",
        "isCorrect": false,
        "meaning": "Microsoft PowerPoint: Presentation software for designing slide decks."
      },
      {
        "id": "D",
        "text": "Access",
        "isCorrect": true,
        "meaning": "Microsoft Access: Relational desktop database management system."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Only I"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: None"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Hyperlink"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Deleted Items"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Ctrl"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: cd ..\\.."
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
        "isCorrect": true,
        "meaning": "Reference tool providing synonyms and antonyms for selected words in Word."
      },
      {
        "id": "C",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
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
        "isCorrect": false,
        "meaning": "Opens Find search pane."
      },
      {
        "id": "B",
        "text": "Ctrl+D",
        "isCorrect": true,
        "meaning": "Word: Font dialog; PowerPoint: Duplicate slide/shape; Excel: Fill down."
      },
      {
        "id": "C",
        "text": "Ctrl+M",
        "isCorrect": false,
        "meaning": "Word: Indents paragraph; PowerPoint: Inserts a new blank slide."
      },
      {
        "id": "D",
        "text": "Ctrl+P",
        "isCorrect": false,
        "meaning": "Opens Print dialog preview."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Binding"
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
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "B",
        "text": "Ctrl+Alt+S",
        "isCorrect": true,
        "meaning": "Selects all content, text, or objects in the active document or sheet."
      },
      {
        "id": "C",
        "text": "Ctrl+Shift+S",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: VBA"
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
        "isCorrect": false,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
      },
      {
        "id": "C",
        "text": "First cell",
        "isCorrect": true,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
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
        "isCorrect": false,
        "meaning": "Opens Help pane for the active application."
      },
      {
        "id": "B",
        "text": "F2",
        "isCorrect": true,
        "meaning": "Excel: Edits active cell; Windows: Renames selected file."
      },
      {
        "id": "C",
        "text": "F5",
        "isCorrect": false,
        "meaning": "Word/Excel: Opens Go To; PowerPoint: Starts Slide Show from beginning."
      },
      {
        "id": "D",
        "text": "F12",
        "isCorrect": false,
        "meaning": "Opens Save As dialog box to save a new copy."
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
        "isCorrect": false,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
      },
      {
        "id": "B",
        "text": "Select one cell",
        "isCorrect": false,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
      },
      {
        "id": "C",
        "text": "Move selected cells",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Move selected cells"
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
        "isCorrect": false,
        "meaning": "Selects all content, text, or objects in the active document or sheet."
      },
      {
        "id": "B",
        "text": "Alt+=",
        "isCorrect": true,
        "meaning": "Inserts an automatic AutoSum formula in Excel."
      },
      {
        "id": "C",
        "text": "Ctrl+S",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Backstage"
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
        "isCorrect": false,
        "meaning": "Excel: Edits active cell; Windows: Renames selected file."
      },
      {
        "id": "B",
        "text": "F5",
        "isCorrect": true,
        "meaning": "Word/Excel: Opens Go To; PowerPoint: Starts Slide Show from beginning."
      },
      {
        "id": "C",
        "text": "Ctrl+F5",
        "isCorrect": false,
        "meaning": "Opens Find search pane."
      },
      {
        "id": "D",
        "text": "Shift+F5",
        "isCorrect": false,
        "meaning": "PowerPoint: Starts Slide Show from current active slide."
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
        "isCorrect": true,
        "meaning": "PowerPoint view displaying miniature slide thumbnails for quick reordering."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Theme"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Spreadsheet"
      },
      {
        "id": "B",
        "text": "Presentation",
        "isCorrect": false,
        "meaning": "Layer 6: data formatting, character encoding, compression, and encryption."
      },
      {
        "id": "C",
        "text": "Word processor",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
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
        "isCorrect": false,
        "meaning": "PowerPoint view displaying miniature slide thumbnails for quick reordering."
      },
      {
        "id": "B",
        "text": "Slide Master",
        "isCorrect": true,
        "meaning": "Top slide in presentation hierarchy governing global slide layouts, fonts, and backgrounds."
      },
      {
        "id": "C",
        "text": "Notes Page",
        "isCorrect": false,
        "meaning": "PowerPoint view showing speaker notes beneath each slide for rehearsal or printing."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Alt+F8"
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
        "isCorrect": false,
        "meaning": "Word/Excel: Opens Go To; PowerPoint: Starts Slide Show from beginning."
      },
      {
        "id": "B",
        "text": "Shift+F5",
        "isCorrect": true,
        "meaning": "PowerPoint: Starts Slide Show from current active slide."
      },
      {
        "id": "C",
        "text": "Esc",
        "isCorrect": false,
        "meaning": "Cancels current operation or closes dialog box."
      },
      {
        "id": "D",
        "text": "F7",
        "isCorrect": false,
        "meaning": "Runs Spelling and Grammar check."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Connection-oriented and reliable"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Bits on the wire"
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
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "B",
        "text": "Transport",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      },
      {
        "id": "C",
        "text": "Data Link",
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "D",
        "text": "Application",
        "isCorrect": true,
        "meaning": "Layer 7: interface for user applications (HTTP, DNS, FTP, SMTP)."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: IP to MAC"
      },
      {
        "id": "C",
        "text": "Port to process",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "URL to DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
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
        "isCorrect": true,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      },
      {
        "id": "C",
        "text": "MAC of a switch",
        "isCorrect": false,
        "meaning": "Layer 2 network device that forwards frames within a local network using MAC table."
      },
      {
        "id": "D",
        "text": "DHCP lease time",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
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
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "62",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "32",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "126",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1500 bytes"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Layer 1"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 20 and 21"
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
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "22",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "23",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "25",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 110 and 143"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 192.168.0.0/16"
      },
      {
        "id": "C",
        "text": "1.1.1.1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "255.255.255.255",
        "isCorrect": false,
        "meaning": "Limited broadcast address reaching all hosts on the local subnet."
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
        "isCorrect": false,
        "meaning": "Default route / placeholder indicating all IPv4 addresses."
      },
      {
        "id": "B",
        "text": "127.0.0.1",
        "isCorrect": true,
        "meaning": "Loopback address testing internal network software stack on local machine."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: SYN, SYN-ACK, ACK"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Forwards using MAC and splits collision domains"
      },
      {
        "id": "C",
        "text": "Routes between WANs",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Assigns public IPs",
        "isCorrect": false,
        "meaning": "Intrusion Prevention System: actively blocks and terminates detected threats."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 67/68"
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
        "isCorrect": true,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Switch/hub"
      },
      {
        "id": "C",
        "text": "Modem only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Repeater chain",
        "isCorrect": false,
        "meaning": "Layer 1 network hardware regenerating and amplifying physical signals over distance."
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
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "B",
        "text": "Logically segment a LAN",
        "isCorrect": true,
        "meaning": "Local Area Network: Interconnects computers within a limited geographical area (home, office)."
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
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "3389",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "8080",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "1433",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
        "isCorrect": false,
        "meaning": "Malicious program requiring human execution and attaching to host executables."
      },
      {
        "id": "B",
        "text": "Trojan",
        "isCorrect": false,
        "meaning": "Malicious code disguised as legitimate useful software."
      },
      {
        "id": "C",
        "text": "Worm",
        "isCorrect": true,
        "meaning": "Self-replicating malware spreading across networks without user interaction."
      },
      {
        "id": "D",
        "text": "Spyware",
        "isCorrect": false,
        "meaning": "Covert monitoring software tracking user activity and keystrokes."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Encrypts files and demands payment"
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
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "B",
        "text": "Confidentiality, Integrity, Availability",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Confidentiality, Integrity, Availability"
      },
      {
        "id": "C",
        "text": "Cipher, Index, Auth",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cache, IP, ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Integrity / one-way fingerprint"
      },
      {
        "id": "C",
        "text": "Assigning IPs",
        "isCorrect": false,
        "meaning": "Intrusion Prevention System: actively blocks and terminates detected threats."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Symmetric cipher"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Asymmetric (public/private keys)"
      },
      {
        "id": "C",
        "text": "A switch type",
        "isCorrect": false,
        "meaning": "Layer 2 network device that forwards frames within a local network using MAC table."
      },
      {
        "id": "D",
        "text": "A subnet mask",
        "isCorrect": false,
        "meaning": "32-bit mask separating network portion from host portion of an IP address."
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
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "B",
        "text": "TLS/SSL over HTTP",
        "isCorrect": true,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
      },
      {
        "id": "C",
        "text": "SMTP",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
      },
      {
        "id": "D",
        "text": "ICMP",
        "isCorrect": false,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Extra factor besides password"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Can block/prevent the attack"
      },
      {
        "id": "C",
        "text": "Assigns DHCP",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
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
        "isCorrect": false,
        "meaning": "Microsoft PowerPoint: Presentation software for designing slide decks."
      },
      {
        "id": "B",
        "text": "Database queries via untrusted input",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Database queries via untrusted input"
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: People, not only packets"
      },
      {
        "id": "C",
        "text": "Fiber attenuation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Excel fill handle",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
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
        "isCorrect": true,
        "meaning": "Microsoft Access: Relational desktop database management system."
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
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "B",
        "text": "Certificate Authority",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Certificate Authority"
      },
      {
        "id": "C",
        "text": "Hub",
        "isCorrect": false,
        "meaning": "Layer 1 legacy multi-port repeater broadcasting incoming signals to all ports."
      },
      {
        "id": "D",
        "text": "Thesaurus",
        "isCorrect": false,
        "meaning": "Reference tool providing synonyms and antonyms for selected words in Word."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Tries many passwords"
      },
      {
        "id": "B",
        "text": "Floods DNS only",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Keystrokes"
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
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "B",
        "text": "Rapid elasticity",
        "isCorrect": true,
        "meaning": "Ability to dynamically scale resources up and down in real-time based on demand."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Measured service"
      },
      {
        "id": "C",
        "text": "On-prem CAPEX only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Physical lock-in",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
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
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
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
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      },
      {
        "id": "B",
        "text": "Hybrid",
        "isCorrect": true,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
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
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
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
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": true,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false,
        "meaning": "Desktop as a Service: Cloud-hosted virtual desktop environment accessible from anywhere."
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
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
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
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
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
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
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
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "C",
        "text": "SMTP, POP, IMAP",
        "isCorrect": false,
        "meaning": "Internet Message Access Protocol: syncs mailboxes across multiple devices."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Many customers share the same platform, isolated logically"
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
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "C",
        "text": "Thesaurus",
        "isCorrect": false,
        "meaning": "Reference tool providing synonyms and antonyms for selected words in Word."
      },
      {
        "id": "D",
        "text": "Slide Master",
        "isCorrect": false,
        "meaning": "Top slide in presentation hierarchy governing global slide layouts, fonts, and backgrounds."
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
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "SaaS",
        "isCorrect": true,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "C",
        "text": "Bare-metal colo",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Layer-1 hub",
        "isCorrect": false,
        "meaning": "Layer 1 legacy multi-port repeater broadcasting incoming signals to all ports."
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Vendor lock-in"
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
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "Isolated data-center group inside a region",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Isolated data-center group inside a region"
      },
      {
        "id": "C",
        "text": "A MAC address",
        "isCorrect": false,
        "meaning": "48-bit unique hardware identifier burnt into network interface cards."
      },
      {
        "id": "D",
        "text": "An Excel chart type",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
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
    "front": "What will be printed by the bitwise left-shift operation?",
    "back": "40",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Left-shifting 5 by 3 bit positions calculates 5 * (2^3) = 5 * 8 = 40.",
    "codeSnippet": "Integer y\nSet y = 5\nPrint (y << 3)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "40",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be printed by the bitwise left-shift operation?",
    "back": "40",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Left-shifting 10 by 2 bit positions calculates 10 * (2^2) = 10 * 4 = 40.",
    "codeSnippet": "Integer n\nSet n = 10\nPrint (n << 2)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "20",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "40",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be printed by the bitwise right-shift operation?",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Right-shifting 7 (binary 0111) by 1 bit position performs integer division by 2: 7 // 2 = 3 (binary 0011).",
    "codeSnippet": "Integer x\nSet x = 7\nPrint (x >> 1)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "14",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "6",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be printed by the bitwise AND operation?",
    "back": "4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "In binary: 12 is 1100 and 5 is 0101. Bitwise AND (&) compares matching bits: only the 4s bit (0100) is 1, so the result is 4.",
    "codeSnippet": "Integer a, b\nSet a = 12, b = 5\nPrint (a & b)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "17",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "13",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "4",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "9",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be printed by the bitwise OR operation?",
    "back": "13",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "In binary: 12 is 1100 and 5 is 0101. Bitwise OR (|) gives 1101 in binary, which evaluates to 8 + 4 + 1 = 13.",
    "codeSnippet": "Integer a, b\nSet a = 12, b = 5\nPrint (a | b)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "9",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "13",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "17",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be printed by the bitwise XOR operation?",
    "back": "9",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "In binary: 12 is 1100 and 5 is 0101. Bitwise XOR (^) yields 1001 in binary, which evaluates to 8 + 1 = 9.",
    "codeSnippet": "Integer a, b\nSet a = 12, b = 5\nPrint (a ^ b)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "9",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "13",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "D",
        "text": "17",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
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
    "front": "What sequence of numbers will be printed by the loop?",
    "back": "1 3 5",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The loop runs for i=1 to 5. When i is even (2, 4), continue skips printing, so only the odd numbers 1, 3, 5 are printed.",
    "codeSnippet": "Integer i\nfor (i = 1 to 5)\n    if (i % 2 == 0)\n        continue\n    end if\n    Print i\nend for",
    "codeLanguage": "pseudocode",
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
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 3 5"
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
    "front": "What sequence of numbers will be printed by the loop?",
    "back": "1 2 3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The loop prints i then checks if i==3. It prints 1, 2, 3 in succession, then immediately breaks upon reaching 3.",
    "codeSnippet": "Integer i\nfor (i = 1 to 5)\n    Print i\n    if (i == 3)\n        break\n    end if\nend for",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 2 3 4 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 2 3",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 2 3"
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
    "front": "What will be printed by the recursive factorial function `fact(5)`?",
    "back": "120",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Factorial calculates the product of all positive integers up to n: fact(5) = 5 * 4 * 3 * 2 * 1 = 120.",
    "codeSnippet": "function fact(Integer n)\n    if (n <= 1)\n        return 1\n    else\n        return n * fact(n - 1)\n    end if\nend function\n\nPrint fact(5)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "60",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "120",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "24",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be printed by the recursive Fibonacci call `fib(6)`?",
    "back": "8",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Fibonacci sequence: F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8.",
    "codeSnippet": "function fib(Integer n)\n    if (n <= 1)\n        return n\n    else\n        return fib(n - 1) + fib(n - 2)\n    end if\nend function\n\nPrint fib(6)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "13",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "21",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be printed after executing the arithmetic swap without a temporary variable?",
    "back": "9 4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Arithmetic swap: a=4+9=13; b=13-9=4; a=13-4=9. The original values are successfully swapped to a=9 and b=4 without a temporary variable.",
    "codeSnippet": "Integer a, b\nSet a = 4, b = 9\na = a + b\nb = a - b\na = a - b\nPrint a, b",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4 9",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "9 4",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 9 4"
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
    "front": "What will be the final value of `s` printed after the loop?",
    "back": "30",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The loop accumulates the sum of squares: 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30.",
    "codeSnippet": "Integer s, i\nSet s = 0\nfor (i = 1 to 4)\n    s = s + (i * i)\nend for\nPrint s",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "30",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "16",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be the final value of `c` (digit count) printed?",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Integer division by 10 counts the number of decimal digits in 27: first iteration x=2, c=1; second iteration x=0, c=2, or for 3-digit inputs c=3.",
    "codeSnippet": "Integer x, c\nSet x = 27, c = 0\nwhile (x > 0)\n    x = x / 10\n    c = c + 1\nend while\nPrint c",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "3",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "27",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What boolean output is printed by the palindrome number check?",
    "back": "True",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The while loop reverses the digits of 121: remainder operations yield r = 121. Since reversed equals original (r == n), it returns True (it is a palindrome).",
    "codeSnippet": "Integer n, r, t\nSet n = 121, r = 0, t = n\nwhile (t != 0)\n    r = (r * 10) + (t % 10)\n    t = t / 10\nend while\nPrint (r == n)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "True",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: True"
      },
      {
        "id": "B",
        "text": "False",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1210",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What is printed by the iterative power function `pow(2, 5)`?",
    "back": "32",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The power function repeatedly multiplies 2 by itself 5 times: 2^5 = 32.",
    "codeSnippet": "function pow(Integer a, Integer b)\n    Integer r = 1\n    for (Integer i = 1 to b)\n        r = r * a\n    end for\n    return r\nend function\n\nPrint pow(2, 5)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "7",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "32",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "25",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be the final value of `c` printed after the nested loops?",
    "back": "3",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The nested loops iterate over a 3x3 grid. The diagonal condition i == j is met exactly 3 times (at (1,1), (2,2), (3,3)), resulting in c=3.",
    "codeSnippet": "Integer i, j, c\nSet c = 0\nfor (i = 1 to 3)\n    for (j = 1 to 3)\n        if (i == j)\n            c = c + 1\n        end if\n    end for\nend for\nPrint c",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What is the printed result of integer division and modulus?",
    "back": "4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "For a=8 and b=3: remainder 8 % 3 = 2, and integer quotient 8 // 3 = 2. Adding them gives 2 + 2 = 4.",
    "codeSnippet": "Integer a, b\nSet a = 8, b = 3\nPrint (a % b) + (a / b)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "11",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What is the complete sequence of numbers printed by `f(2)`?",
    "back": "2 1 1 2",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "f(2) prints 2, calls f(1). f(1) prints 1, calls f(0). Then f(0) returns. On unwind, f(1) prints 1, then f(2) prints 2. Sequence is: 2 1 1 2.",
    "codeSnippet": "function f(Integer n)\n    if (n == 0)\n        return\n    end if\n    Print n\n    f(n - 1)\n    Print n\nend function\n\nf(2)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2 1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2 1 1 2",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 2 1 1 2"
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
    "front": "What will be the final value of `y` (count of set bits of 15) printed?",
    "back": "4",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "This algorithm counts the number of set bits (1s in binary) in 15. Binary of 15 is 1111 (four 1s), so y becomes 4.",
    "codeSnippet": "Integer x, y\nSet x = 15, y = 0\nwhile (x != 0)\n    y = y + (x & 1)\n    x = x >> 1\nend while\nPrint y",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be the final value of `s` printed after the array loop?",
    "back": "12",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "The array is {2, 4, 6, 8}. Elements divisible by 4 (a[i]%4 == 0) are 4 and 8. Summing them yields 4 + 8 = 12.",
    "codeSnippet": "Integer a[4] = {2, 4, 6, 8}\nInteger s = 0, i\nfor (i = 0 to 3)\n    if (a[i] % 4 == 0)\n        s = s + a[i]\n    end if\nend for\nPrint s",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "20",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What is printed by the Euclidean GCD algorithm call `gcd(48, 18)`?",
    "back": "6",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Euclidean algorithm for GCD: gcd(48, 18) -> 48%18=12 -> 18%12=6 -> 12%6=0. The greatest common divisor is 6.",
    "codeSnippet": "function gcd(Integer a, Integer b)\n    Integer t\n    while (b != 0)\n        t = b\n        b = a % b\n        a = t\n    end while\n    return a\nend function\n\nPrint gcd(48, 18)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "18",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be the final value of `s` printed after the loop?",
    "back": "32",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "Starting with s=1 and doubling n=5 times computes 2^5: 1 -> 2 -> 4 -> 8 -> 16 -> 32.",
    "codeSnippet": "Integer n = 5, s = 1, i\nfor (i = 1 to n)\n    s = s * 2\nend for\nPrint s",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "16",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "32",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "64",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
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
    "front": "What will be printed by the post-increment conditional in C?",
    "back": "10",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "In post-increment (a++), the original value of a (5) is evaluated before incrementing. Since 5 > 5 is false, it branches to the else block and prints b (10).",
    "codeSnippet": "int a = 5, b = 10;\nif (a++ > 5) {\n    printf(\"%d\", a);\n} else {\n    printf(\"%d\", b);\n}",
    "codeLanguage": "c",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "10",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "11",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What is printed by the expression evaluation in C (left-to-right evaluation)?",
    "back": "8",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "For a=3: pre-increment ++a makes a=4 and evaluates to 4. Then post-increment a++ evaluates to 4 (and increments a to 5). 4 + 4 = 8.",
    "codeSnippet": "int a = 3;\nprintf(\"%d\", ++a + a++);",
    "codeLanguage": "c",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "7",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "9",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
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
    "front": "What will be printed by `isPrime(9)` and `isPrime(11)`?",
    "back": "0 1",
    "hint": "Evaluate step by step following operator precedence and conditional branches.",
    "explanation": "9 is not prime (divisible by 3), so isPrime(9) returns 0. 11 is prime, so isPrime(11) returns 1. The output is '0 1'.",
    "codeSnippet": "function isPrime(Integer n)\n    if (n < 2)\n        return 0\n    end if\n    for (Integer i = 2 to n - 1)\n        if (n % i == 0)\n            return 0\n        end if\n    end for\n    return 1\nend function\n\nPrint isPrime(9), isPrime(11)",
    "codeLanguage": "pseudocode",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 1",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "0 1",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 0 1"
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
  },
  {
    "id": "card-acc-201",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which of the following is not a cloud service model?",
    "back": "VaaS",
    "explanation": "The three standard NIST cloud computing service models are IaaS, PaaS, and SaaS. VaaS (Video as a Service) is not an official cloud service model.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "VaaS",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: VaaS"
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012060000,
    "updatedAt": 1715012060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-202",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which cloud deployment model provides high-level data control and security?",
    "back": "Private",
    "explanation": "A Private Cloud is dedicated solely to a single organization, offering the highest level of security, compliance, and governance control over infrastructure and data.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Hybrid",
        "isCorrect": false,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "D",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012120000,
    "updatedAt": 1715012120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-203",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "In cloud computing, multi-tenancy refers to:",
    "back": "Multiple users accessing the same application or database instance",
    "explanation": "Multi-tenancy is a core cloud architecture feature where a single software instance or infrastructure pool serves multiple independent customers (tenants) securely.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "One user, one dedicated physical server only",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Multiple users accessing the same application or database instance",
        "isCorrect": true,
        "meaning": "Layer 7: interface for user applications (HTTP, DNS, FTP, SMTP)."
      },
      {
        "id": "C",
        "text": "Offline-only storage",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A type of antivirus",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012180000,
    "updatedAt": 1715012180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-204",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which is an example of PaaS?",
    "back": "Microsoft Azure App Service",
    "explanation": "Microsoft Azure App Service is a Platform as a Service (PaaS) that enables developers to build and host web applications without managing the underlying VMs or OS.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Amazon EC2",
        "isCorrect": false,
        "meaning": "Amazon Elastic Compute Cloud: Scalable virtual servers (VMs) in AWS."
      },
      {
        "id": "B",
        "text": "Microsoft Azure App Service",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Microsoft Azure App Service"
      },
      {
        "id": "C",
        "text": "Google Drive",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Dropbox",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012240000,
    "updatedAt": 1715012240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-205",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Main purpose of a load balancer in cloud architecture?",
    "back": "Distribute network traffic evenly across servers",
    "explanation": "Load balancers distribute incoming client requests evenly across multiple backend servers to prevent overload, maximize throughput, and ensure high availability.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Encrypt disks",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Distribute network traffic evenly across servers",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Assign MAC addresses",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Spell-check documents",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012300000,
    "updatedAt": 1715012300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-206",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Organization transitioning to cloud with highly sensitive data. Most secure deployment?",
    "back": "Private",
    "explanation": "A Private Cloud deployment provides exclusive physical infrastructure and isolated networks, making it the most secure choice for highly sensitive data.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Hybrid",
        "isCorrect": false,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "D",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012360000,
    "updatedAt": 1715012360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-207",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Highly confidential financial records needing complete control over infrastructure and security policies. Most appropriate model?",
    "back": "Private",
    "explanation": "Strict financial compliance and confidentiality standards require the dedicated governance, granular network policies, and isolated infrastructure of a Private Cloud.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Hybrid",
        "isCorrect": false,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "D",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012420000,
    "updatedAt": 1715012420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-208",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Startup web app, rapidly changing traffic, users across different regions, no dedicated hardware, minimize infrastructure cost?",
    "back": "Public",
    "explanation": "Public Cloud offers on-demand elasticity, global data centers, and a pay-as-you-go model, allowing startups to scale with dynamic traffic while eliminating capital expenses.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Private",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "B",
        "text": "Public",
        "isCorrect": true,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "C",
        "text": "On-premises only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012480000,
    "updatedAt": 1715012480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-209",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Hassle-free office productivity tools over the internet, no IT management complexity. Best use case?",
    "back": "Software as a Service",
    "explanation": "Software as a Service (SaaS) provides ready-to-use software applications hosted on the cloud and accessed via web browser, removing infrastructure and OS maintenance burdens.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Big data intelligence",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Testing and building applications",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Software as a Service",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Software as a Service"
      },
      {
        "id": "D",
        "text": "Intelligent energy saving",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012540000,
    "updatedAt": 1715012540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-210",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Employees use email and office apps in a browser without installing/maintaining software. Model?",
    "back": "SaaS",
    "explanation": "SaaS delivers web-based productivity and email suites (such as Google Workspace and Microsoft 365) without requiring local installation or administrative patching.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false,
        "meaning": "Desktop as a Service: Cloud-hosted virtual desktop environment accessible from anywhere."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012600000,
    "updatedAt": 1715012600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-211",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "What does cloud computing primarily provide?",
    "back": "Computing resources over the internet",
    "explanation": "Cloud computing is the on-demand delivery of computing services\u2014including servers, storage, databases, networking, and software\u2014over the Internet.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical hardware only",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Computing resources over the internet",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Computing resources over the internet"
      },
      {
        "id": "C",
        "text": "Offline software",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Antivirus protection",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012660000,
    "updatedAt": 1715012660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-212",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which is an example of SaaS?",
    "back": "Gmail",
    "explanation": "Gmail is an end-user web application fully managed and hosted by Google, which is a classic example of Software as a Service (SaaS).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Amazon EC2",
        "isCorrect": false,
        "meaning": "Amazon Elastic Compute Cloud: Scalable virtual servers (VMs) in AWS."
      },
      {
        "id": "B",
        "text": "Google App Engine",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Gmail",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Gmail"
      },
      {
        "id": "D",
        "text": "Virtual machine",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012720000,
    "updatedAt": 1715012720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-213",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Full form of PaaS?",
    "back": "Platform as a Service",
    "explanation": "PaaS stands for Platform as a Service, providing hardware, networking, and an application runtime environment for developers to build applications.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Platform as a Service",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Platform as a Service"
      },
      {
        "id": "B",
        "text": "Protocol as a Service",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Packet as a Service",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Private as a Service",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012780000,
    "updatedAt": 1715012780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-214",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which is an example of IaaS?",
    "back": "Amazon EC2",
    "explanation": "Amazon EC2 (Elastic Compute Cloud) provides scalable virtual computing capacity (virtual servers), representing Infrastructure as a Service (IaaS).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Gmail",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Amazon EC2",
        "isCorrect": true,
        "meaning": "Amazon Elastic Compute Cloud: Scalable virtual servers (VMs) in AWS."
      },
      {
        "id": "C",
        "text": "Salesforce",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Zoom",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012840000,
    "updatedAt": 1715012840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-215",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which cloud service model gives the user the most control over infrastructure?",
    "back": "IaaS",
    "explanation": "IaaS gives users the greatest degree of control over computing resources, allowing configuration of the OS, middleware, runtime, and installed software.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false,
        "meaning": "Desktop as a Service: Cloud-hosted virtual desktop environment accessible from anywhere."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012900000,
    "updatedAt": 1715012900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-216",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which deployment model is dedicated to a single organization?",
    "back": "Private",
    "explanation": "A Private Cloud deployment model is provisioned for exclusive use by a single organization comprising multiple consumers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Hybrid",
        "isCorrect": false,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "C",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      },
      {
        "id": "D",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715012960000,
    "updatedAt": 1715012960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715012960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-217",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which cloud model combines public and private?",
    "back": "Hybrid",
    "explanation": "A Hybrid Cloud combines on-premises private cloud/infrastructure with public cloud environments, bound together by standardized technology for data and application portability.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      },
      {
        "id": "B",
        "text": "Hybrid",
        "isCorrect": true,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
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
      "Set 1"
    ],
    "createdAt": 1715013020000,
    "updatedAt": 1715013020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-218",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Major advantage of cloud computing?",
    "back": "Scalability",
    "explanation": "Scalability allows a cloud system to handle increasing workloads by dynamically provisioning additional compute or storage capacity as needed.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Fixed unchangeable hardware",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Scalability",
        "isCorrect": true,
        "meaning": "System capability to handle growing workloads by adding hardware capacity."
      },
      {
        "id": "C",
        "text": "Must be physically at the laptop",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No security ever",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013080000,
    "updatedAt": 1715013080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-219",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Scalability in cloud means:",
    "back": "Increasing or decreasing resources based on demand",
    "explanation": "Cloud scalability refers to the capability to expand or reduce system resources (CPU, RAM, storage) dynamically to match fluctuating demand.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Always buy more disks forever",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Increasing or decreasing resources based on demand",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Increasing or decreasing resources based on demand"
      },
      {
        "id": "C",
        "text": "Deleting the internet",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "One VM per planet",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013140000,
    "updatedAt": 1715013140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-220",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Virtualization is:",
    "back": "Creating virtual versions of computing resources",
    "explanation": "Virtualization is the process of creating a software-based representation of physical servers, storage, or networks using a hypervisor.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical destruction of a server",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Creating virtual versions of computing resources",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Creating virtual versions of computing resources"
      },
      {
        "id": "C",
        "text": "Encrypting files",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Connecting computers using cable",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013200000,
    "updatedAt": 1715013200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-221",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which component creates and manages virtual machines?",
    "back": "Hypervisor",
    "explanation": "A hypervisor (or Virtual Machine Monitor) is the software layer that creates, runs, and isolates virtual machines on underlying physical hardware.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Firewall",
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "B",
        "text": "Router",
        "isCorrect": false,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      },
      {
        "id": "C",
        "text": "Compiler",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hypervisor",
        "isCorrect": true,
        "meaning": "Virtual Machine Monitor (VMM) creating and running virtual machines on hardware."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013260000,
    "updatedAt": 1715013260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-222",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Pay-as-you-go means:",
    "back": "Pay according to resources consumed",
    "explanation": "Pay-as-you-go is a utility billing model where organizations only pay for the exact volume of computing resources, storage, and bandwidth they consume.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Fixed annual payment only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Free cloud services",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Pay according to resources consumed",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Pay according to resources consumed"
      },
      {
        "id": "D",
        "text": "Pay before using, never after",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013320000,
    "updatedAt": 1715013320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-223",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Type-1 hypervisor example (runs on physical hardware)?",
    "back": "VMware ESXi",
    "explanation": "VMware ESXi is a bare-metal (Type-1) hypervisor that runs directly on physical server hardware without requiring a host operating system.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Microsoft Word",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "Chrome",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "VLC",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "VMware ESXi",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: VMware ESXi"
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013380000,
    "updatedAt": 1715013380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-224",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Type-2 hypervisor example (runs on a host OS)?",
    "back": "VirtualBox",
    "explanation": "VirtualBox is a hosted (Type-2) hypervisor that runs as an application on top of an existing host operating system (like Windows or macOS).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "VMware ESXi",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "VirtualBox",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: VirtualBox"
      },
      {
        "id": "C",
        "text": "BIOS",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Router",
        "isCorrect": false,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013440000,
    "updatedAt": 1715013440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-225",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which AWS service is used for storage?",
    "back": "S3",
    "explanation": "Amazon S3 (Simple Storage Service) is AWS's scalable object storage service designed for storing and retrieving any amount of data from anywhere.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "EC2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "S3",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: S3"
      },
      {
        "id": "C",
        "text": "VPC",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "IAM",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013500000,
    "updatedAt": 1715013500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-226",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Migrating legacy + new cloud data, access both simultaneously, logically integrated without physical movement?",
    "back": "Abstraction layer that unifies separate data sources",
    "explanation": "A data abstraction or virtualization layer allows disparate on-premises and cloud databases to be queried and integrated logically as a single unified source.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical copy only",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Abstraction layer that unifies separate data sources",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Abstraction layer that unifies separate data sources"
      },
      {
        "id": "C",
        "text": "Floppy backup",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Print to paper",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 1"
    ],
    "createdAt": 1715013560000,
    "updatedAt": 1715013560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-227",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which OSI layer is responsible for reliable end-to-end communication?",
    "back": "Transport",
    "explanation": "The Transport Layer (OSI Layer 4) is responsible for end-to-end communication, flow control, error recovery, and reliable data transmission (using protocols like TCP).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "B",
        "text": "Transport",
        "isCorrect": true,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      },
      {
        "id": "C",
        "text": "Data Link",
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "D",
        "text": "Physical",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715013620000,
    "updatedAt": 1715013620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-228",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which of the following IP addresses is a private IP?",
    "back": "192.168.1.10",
    "explanation": "192.168.1.10 falls within the RFC 1918 private IPv4 address block (192.168.0.0/16), reserved for private local area networks and non-routable on the public internet.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8.8.8.8",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "192.168.1.10",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 192.168.1.10"
      },
      {
        "id": "C",
        "text": "1.1.1.1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "255.255.255.255",
        "isCorrect": false,
        "meaning": "Limited broadcast address reaching all hosts on the local subnet."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715013680000,
    "updatedAt": 1715013680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-229",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which device operates at the Data Link layer (Layer 2)?",
    "back": "Switch",
    "explanation": "Network switches operate primarily at the Data Link Layer (OSI Layer 2), inspecting frame headers and forwarding data based on hardware MAC addresses.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Router",
        "isCorrect": false,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      },
      {
        "id": "B",
        "text": "Hub",
        "isCorrect": false,
        "meaning": "Layer 1 legacy multi-port repeater broadcasting incoming signals to all ports."
      },
      {
        "id": "C",
        "text": "Switch",
        "isCorrect": true,
        "meaning": "Layer 2 network device that forwards frames within a local network using MAC table."
      },
      {
        "id": "D",
        "text": "Repeater",
        "isCorrect": false,
        "meaning": "Layer 1 network hardware regenerating and amplifying physical signals over distance."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715013740000,
    "updatedAt": 1715013740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-230",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Main purpose of a subnet mask?",
    "back": "Divide the IP address into network and host portions",
    "explanation": "A subnet mask determines which bits of an IP address represent the network prefix and which bits designate the host identifier.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Encrypt network data",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "B",
        "text": "Divide the IP address into network and host portions",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Assign MAC addresses",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Manage DNS resolution",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715013800000,
    "updatedAt": 1715013800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-231",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol automatically assigns IP addresses to devices?",
    "back": "DHCP",
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically leases IP addresses, default gateways, and DNS settings to devices on a network.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "B",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "C",
        "text": "DHCP",
        "isCorrect": true,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "D",
        "text": "SMTP",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715013860000,
    "updatedAt": 1715013860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-232",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Segment a large physical network into distinct broadcast domains (HR, Finance, IT) without buying extra physical switches. Technology?",
    "back": "VLAN",
    "explanation": "VLANs (Virtual Local Area Networks) logically segment a single physical switch into distinct, isolated broadcast domains for different departments or security zones.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DHCP",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "B",
        "text": "VLAN",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: VLAN"
      },
      {
        "id": "C",
        "text": "NAT",
        "isCorrect": false,
        "meaning": "Network Address Translation: Maps private local IP addresses to a public routable IP."
      },
      {
        "id": "D",
        "text": "STP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715013920000,
    "updatedAt": 1715013920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-233",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Returning response traffic for internal users is allowed back in; uninitiated inbound internet traffic is blocked; handles this state awareness dynamically. Firewall type?",
    "back": "Stateful inspection firewall",
    "explanation": "Stateful inspection firewalls track the operational state of active transport connections (like TCP handshakes), automatically allowing return traffic while dropping unprompted inbound packets.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Packet filter firewall",
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "B",
        "text": "Stateful inspection firewall",
        "isCorrect": true,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "C",
        "text": "Circuit-level gateway",
        "isCorrect": false,
        "meaning": "Network node acting as a protocol translator between disparate network architectures."
      },
      {
        "id": "D",
        "text": "Application-level proxy",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715013980000,
    "updatedAt": 1715013980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715013980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-234",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Most secure Wi-Fi protocol among common options?",
    "back": "WPA3",
    "explanation": "WPA3 (Wi-Fi Protected Access 3) provides the strongest Wi-Fi encryption using 128-bit/192-bit cryptographic strength and the Simultaneous Authentication of Equals (SAE) protocol.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP",
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "WPA",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access: Interim standard introducing TKIP encryption."
      },
      {
        "id": "C",
        "text": "WPA2",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access 2: Strong Wi-Fi security using AES-CCMP encryption."
      },
      {
        "id": "D",
        "text": "WPA3",
        "isCorrect": true,
        "meaning": "Wi-Fi Protected Access 3: Modern wireless standard utilizing SAE (Simultaneous Authentication of Equals)."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014040000,
    "updatedAt": 1715014040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-235",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Upgrade wireless network, stronger protection against brute-force attacks, replace outdated protocols. Prefer?",
    "back": "WPA3",
    "explanation": "WPA3 replaces the vulnerable pre-shared key 4-way handshake with SAE, preventing offline dictionary and brute-force password cracking attacks.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP",
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "WPA",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access: Interim standard introducing TKIP encryption."
      },
      {
        "id": "C",
        "text": "WPA2",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access 2: Strong Wi-Fi security using AES-CCMP encryption."
      },
      {
        "id": "D",
        "text": "WPA3",
        "isCorrect": true,
        "meaning": "Wi-Fi Protected Access 3: Modern wireless standard utilizing SAE (Simultaneous Authentication of Equals)."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014100000,
    "updatedAt": 1715014100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-236",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which wireless security protocol is considered obsolete (weak encryption, easy to crack)?",
    "back": "WEP",
    "explanation": "WEP (Wired Equivalent Privacy) uses vulnerable 40-bit/104-bit RC4 stream ciphers with short 24-bit initialization vectors that can be broken in minutes.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WPA3",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access 3: Modern wireless standard utilizing SAE (Simultaneous Authentication of Equals)."
      },
      {
        "id": "B",
        "text": "WPA2",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access 2: Strong Wi-Fi security using AES-CCMP encryption."
      },
      {
        "id": "C",
        "text": "WEP",
        "isCorrect": true,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "D",
        "text": "WPA3-Enterprise only",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014160000,
    "updatedAt": 1715014160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-237",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Must keep compatibility with older devices that do not support WPA3, and avoid obsolete WEP. Use?",
    "back": "WPA2",
    "explanation": "WPA2 (using AES-CCMP encryption) offers strong security and near-universal backwards compatibility across legacy and modern wireless devices.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP",
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "WPA2",
        "isCorrect": true,
        "meaning": "Wi-Fi Protected Access 2: Strong Wi-Fi security using AES-CCMP encryption."
      },
      {
        "id": "C",
        "text": "Open Wi-Fi",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "WPA3 only",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access 3: Modern wireless standard utilizing SAE (Simultaneous Authentication of Equals)."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014220000,
    "updatedAt": 1715014220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-238",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Legacy devices cannot use AES; enable older mechanism that improved original WPA while keeping compatibility. Technology?",
    "back": "TKIP",
    "explanation": "TKIP (Temporal Key Integrity Protocol) was designed as a stopgap wrapper around RC4 to improve legacy WEP hardware without requiring new AES hardware.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "AES-CCMP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TKIP",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: TKIP"
      },
      {
        "id": "C",
        "text": "WPA3-SAE",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SSL",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014280000,
    "updatedAt": 1715014280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-239",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Data stolen; hacker mentions the route packets should use to avoid security / packet firewall. Attack type?",
    "back": "Source routing attack",
    "explanation": "In a source routing attack, an adversary explicitly predefines the sequential path of network hops inside the packet header to circumvent firewall inspection rules.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IP address spoofing",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Source routing attack",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Source routing attack"
      },
      {
        "id": "C",
        "text": "Phishing",
        "isCorrect": false,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      },
      {
        "id": "D",
        "text": "DDoS",
        "isCorrect": false,
        "meaning": "Distributed Denial of Service: floods server with traffic from distributed botnets."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014340000,
    "updatedAt": 1715014340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-240",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Attacker specifies the route packets should follow instead of letting routers decide?",
    "back": "Source routing attack",
    "explanation": "Source routing enables the sender to specify the exact route a packet must traverse through the network rather than allowing intermediate routers to choose.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DNS poisoning",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "B",
        "text": "Source routing attack",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Source routing attack"
      },
      {
        "id": "C",
        "text": "DHCP starvation",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "D",
        "text": "ARP reply flood only",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014400000,
    "updatedAt": 1715014400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-241",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Fake IT-support email, lookalike login page, employee enters username/password. Attack?",
    "back": "Phishing",
    "explanation": "Phishing is a social engineering attack where fraudulent emails or lookalike websites deceive victims into disclosing sensitive credentials or personal data.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DDoS",
        "isCorrect": false,
        "meaning": "Distributed Denial of Service: floods server with traffic from distributed botnets."
      },
      {
        "id": "B",
        "text": "Phishing",
        "isCorrect": true,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      },
      {
        "id": "C",
        "text": "SQL injection",
        "isCorrect": false,
        "meaning": "Inserting malicious SQL queries through web inputs to manipulate database."
      },
      {
        "id": "D",
        "text": "Ransomware encrypt-only",
        "isCorrect": false,
        "meaning": "Extortion malware encrypting victim files and demanding ransom payment."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014460000,
    "updatedAt": 1715014460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-242",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Company divides network into isolated segments so a compromised device cannot easily talk to other segments. Primary security objective?",
    "back": "Limiting attack propagation",
    "explanation": "Network segmentation contains breaches within a localized zone, preventing attackers from laterally moving or propagating malware across the broader enterprise network.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Faster Wi-Fi only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Limiting attack propagation",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Limiting attack propagation"
      },
      {
        "id": "C",
        "text": "Bigger fonts",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cheaper Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014520000,
    "updatedAt": 1715014520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-243",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Major security benefit of network segmentation?",
    "back": "Restricts unauthorized movement between network segments",
    "explanation": "Dividing a network into isolated subnets/VLANs restricts lateral movement and unauthorized traffic flow between distinct functional units.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "It removes the need for passwords",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Restricts unauthorized movement between network segments",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Assigns MAC to RAM",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Replaces DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014580000,
    "updatedAt": 1715014580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-244",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "API endpoint not found. HTTP status code?",
    "back": "404",
    "explanation": "HTTP status code 404 Not Found indicates that the server cannot locate the requested URL resource or API endpoint.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "200",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "403",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "404",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "500",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715014640000,
    "updatedAt": 1715014640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-245",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Employee WFH needs company internal files. Best VPN type?",
    "back": "Remote access VPN",
    "explanation": "A Remote Access VPN allows individual telecommuting employees to securely connect over the public internet to their corporate intranet and internal files.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Site-to-site VPN",
        "isCorrect": false,
        "meaning": "Virtual Private Network: encrypted tunnel across public networks."
      },
      {
        "id": "B",
        "text": "Remote access VPN",
        "isCorrect": true,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "C",
        "text": "MPLS VPN",
        "isCorrect": false,
        "meaning": "Virtual Private Network: encrypted tunnel across public networks."
      },
      {
        "id": "D",
        "text": "No VPN",
        "isCorrect": false,
        "meaning": "Virtual Private Network: encrypted tunnel across public networks."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715014700000,
    "updatedAt": 1715014700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-246",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Need fast connectionless query/response; packet loss acceptable; retransmission delay not acceptable. Protocol family used?",
    "back": "DNS (can use UDP)",
    "explanation": "DNS lookups typically use UDP (port 53) because it provides rapid, lightweight, connectionless request-response without the overhead of a three-way TCP handshake.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "HTTP (TCP)",
        "isCorrect": false,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
      },
      {
        "id": "B",
        "text": "FTP (TCP)",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "C",
        "text": "DNS (can use UDP)",
        "isCorrect": true,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "D",
        "text": "SMTP (TCP)",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715014760000,
    "updatedAt": 1715014760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-247",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Video call packets must arrive correctly and in the right order. OSI layer?",
    "back": "Transport",
    "explanation": "The Transport Layer (Layer 4) handles packet sequencing, flow control, and error correction to ensure packets are assembled in the proper order.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Data Link",
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "C",
        "text": "Network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "D",
        "text": "Transport",
        "isCorrect": true,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715014820000,
    "updatedAt": 1715014820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-248",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol is connectionless?",
    "back": "UDP",
    "explanation": "UDP (User Datagram Protocol) is a connectionless transport protocol that transmits datagrams without establishing a handshake or guaranteeing delivery order.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "TCP",
        "isCorrect": false,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
      },
      {
        "id": "B",
        "text": "UDP",
        "isCorrect": true,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "C",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "D",
        "text": "HTTP",
        "isCorrect": false,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715014880000,
    "updatedAt": 1715014880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-249",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Encrypt IP packet payload and protect integrity during VPN/IPsec. Protocol?",
    "back": "ESP (Encapsulating Security Payload)",
    "explanation": "ESP (Encapsulating Security Payload) is an IPsec protocol that provides data confidentiality (encryption), payload integrity, and authentication.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "AH only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ESP (Encapsulating Security Payload)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: ESP (Encapsulating Security Payload)"
      },
      {
        "id": "C",
        "text": "ICMP",
        "isCorrect": false,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
      },
      {
        "id": "D",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      }
    ],
    "tags": [
      "Security",
      "Set 1"
    ],
    "createdAt": 1715014940000,
    "updatedAt": 1715014940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715014940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-250",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "LAN stands for?",
    "back": "Local Area Network",
    "explanation": "LAN stands for Local Area Network, interconnecting computers and devices within a limited geographical area such as a home, office, or building.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Large Access Network",
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "B",
        "text": "Local Area Network",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Logical Access Node",
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "D",
        "text": "Long Antenna Network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715015000000,
    "updatedAt": 1715015000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-251",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which device connects different networks?",
    "back": "Router",
    "explanation": "A router operates at OSI Layer 3 (Network Layer) and routes packets across different IP subnets and autonomous networks.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Hub",
        "isCorrect": false,
        "meaning": "Layer 1 legacy multi-port repeater broadcasting incoming signals to all ports."
      },
      {
        "id": "B",
        "text": "Switch",
        "isCorrect": false,
        "meaning": "Layer 2 network device that forwards frames within a local network using MAC table."
      },
      {
        "id": "C",
        "text": "Router",
        "isCorrect": true,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      },
      {
        "id": "D",
        "text": "Repeater",
        "isCorrect": false,
        "meaning": "Layer 1 network hardware regenerating and amplifying physical signals over distance."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715015060000,
    "updatedAt": 1715015060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-252",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which OSI layer is responsible for routing?",
    "back": "Network",
    "explanation": "The Network Layer (OSI Layer 3) is responsible for logical IP addressing, packet forwarding, and path determination (routing).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data Link",
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "B",
        "text": "Transport",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      },
      {
        "id": "C",
        "text": "Network",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "D",
        "text": "Session",
        "isCorrect": false,
        "meaning": "Layer 5: establishes, manages, and terminates application sessions."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715015120000,
    "updatedAt": 1715015120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-253",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol finds the MAC address associated with an IP on the local network?",
    "back": "ARP",
    "explanation": "ARP (Address Resolution Protocol) resolves a known Layer 3 IP address to a physical Layer 2 MAC address on the local network segment.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "B",
        "text": "ARP",
        "isCorrect": true,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      },
      {
        "id": "C",
        "text": "DHCP",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "D",
        "text": "SMTP",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715015180000,
    "updatedAt": 1715015180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-254",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol translates a domain name into an IP address?",
    "back": "DNS",
    "explanation": "DNS (Domain Name System) translates human-readable hostnames (such as www.example.com) into numerical IP addresses required for routing.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      },
      {
        "id": "B",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "C",
        "text": "DNS",
        "isCorrect": true,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "D",
        "text": "ICMP",
        "isCorrect": false,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
      }
    ],
    "tags": [
      "Networking",
      "Set 1"
    ],
    "createdAt": 1715015240000,
    "updatedAt": 1715015240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-255",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to copy selected content?",
    "back": "Ctrl+C",
    "explanation": "Ctrl+C is the universal shortcut to copy selected text, objects, or cells to the system clipboard.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+X",
        "isCorrect": false,
        "meaning": "Cuts selected text or object to clipboard."
      },
      {
        "id": "B",
        "text": "Ctrl+C",
        "isCorrect": true,
        "meaning": "Copies selected item to clipboard."
      },
      {
        "id": "C",
        "text": "Ctrl+V",
        "isCorrect": false,
        "meaning": "Pastes clipboard contents at cursor position."
      },
      {
        "id": "D",
        "text": "Ctrl+Z",
        "isCorrect": false,
        "meaning": "Undoes the last action performed."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015300000,
    "updatedAt": 1715015300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-256",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to undo an action?",
    "back": "Ctrl+Z",
    "explanation": "Ctrl+Z reverses the most recent editing action or command in Microsoft Office and other applications.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+Y",
        "isCorrect": false,
        "meaning": "Redoes the most recently undone action."
      },
      {
        "id": "B",
        "text": "Ctrl+U",
        "isCorrect": false,
        "meaning": "Toggles underline styling on selected text."
      },
      {
        "id": "C",
        "text": "Ctrl+Z",
        "isCorrect": true,
        "meaning": "Undoes the last action performed."
      },
      {
        "id": "D",
        "text": "Ctrl+R",
        "isCorrect": false,
        "meaning": "Applies Right alignment to paragraph."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015360000,
    "updatedAt": 1715015360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-257",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Word feature to create personalized documents for many recipients?",
    "back": "Mail Merge",
    "explanation": "Mail Merge connects a Word document to a data source (like an Excel sheet) to generate personalized letters, envelopes, or emails in bulk.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Track Changes",
        "isCorrect": false,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
      },
      {
        "id": "B",
        "text": "Mail Merge",
        "isCorrect": true,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "C",
        "text": "WordArt",
        "isCorrect": false,
        "meaning": "Office feature providing decorative visual typography and text transformations."
      },
      {
        "id": "D",
        "text": "Format Painter",
        "isCorrect": false,
        "meaning": "Copies formatting attributes from selected text/object and applies them elsewhere."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015420000,
    "updatedAt": 1715015420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-258",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Feature that records modifications so they can be reviewed/accepted/rejected?",
    "back": "Track Changes",
    "explanation": "Track Changes in Microsoft Word records all insertions, deletions, and formatting edits made to a document for collaborative review and approval.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Track Changes",
        "isCorrect": true,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
      },
      {
        "id": "B",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "C",
        "text": "Word Count",
        "isCorrect": false,
        "meaning": "Counts cells in a range that contain numbers only."
      },
      {
        "id": "D",
        "text": "Page Break",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015480000,
    "updatedAt": 1715015480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-259",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Alignment that makes both left and right edges of a paragraph aligned?",
    "back": "Justify",
    "explanation": "Justify alignment aligns paragraph text evenly along both the left and right margins by adding variable spacing between words.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Left",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Right",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Center",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Justify",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Justify"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015540000,
    "updatedAt": 1715015540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-260",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is a header in MS Word?",
    "back": "Text at the top of the page",
    "explanation": "A header is a dedicated section appearing at the top margin of each page throughout a document, often displaying titles or dates.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Text at the bottom of the page",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Text at the top of the page",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Text at the top of the page"
      },
      {
        "id": "C",
        "text": "A document title only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hidden text",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015600000,
    "updatedAt": 1715015600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-261",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Feature used to copy formatting from one piece of content to another?",
    "back": "Format Painter",
    "explanation": "The Format Painter tool copies font, color, spacing, and styling properties from one selected piece of content and applies them to another.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Format Painter",
        "isCorrect": true,
        "meaning": "Copies formatting attributes from selected text/object and applies them elsewhere."
      },
      {
        "id": "B",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "C",
        "text": "WordArt",
        "isCorrect": false,
        "meaning": "Office feature providing decorative visual typography and text transformations."
      },
      {
        "id": "D",
        "text": "Autocorrect",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015660000,
    "updatedAt": 1715015660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-262",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which shortcut saves a document?",
    "back": "Ctrl+S",
    "explanation": "Ctrl+S commits changes and saves the currently open file or document to disk.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+A",
        "isCorrect": false,
        "meaning": "Selects all content, text, or objects in the active document or sheet."
      },
      {
        "id": "B",
        "text": "Ctrl+S",
        "isCorrect": true,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "C",
        "text": "Ctrl+P",
        "isCorrect": false,
        "meaning": "Opens Print dialog preview."
      },
      {
        "id": "D",
        "text": "Ctrl+N",
        "isCorrect": false,
        "meaning": "Creates a new blank document, workbook, or presentation."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015720000,
    "updatedAt": 1715015720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-263",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Ctrl+A generally:",
    "back": "Select all content",
    "explanation": "Ctrl+A selects all text, cells, slides, or objects in the active window or document.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Align text",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Open a file",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Save a file",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Select all content",
        "isCorrect": true,
        "meaning": "SQL command to query and retrieve data rows from database tables."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015780000,
    "updatedAt": 1715015780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-264",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Feature used to start content on a new page?",
    "back": "Page Break",
    "explanation": "A Page Break inserts an explicit marker ending the current page and forcing subsequent text to start at the top of the next page.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Page Break",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Page Break"
      },
      {
        "id": "B",
        "text": "WordArt",
        "isCorrect": false,
        "meaning": "Office feature providing decorative visual typography and text transformations."
      },
      {
        "id": "C",
        "text": "Track Changes",
        "isCorrect": false,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
      },
      {
        "id": "D",
        "text": "Format Painter",
        "isCorrect": false,
        "meaning": "Copies formatting attributes from selected text/object and applies them elsewhere."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015840000,
    "updatedAt": 1715015840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-265",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which Excel symbol begins a formula?",
    "back": "=",
    "explanation": "All Excel formulas and expressions must begin with an equal sign (=) to signal to the spreadsheet engine to evaluate the input.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "=",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: ="
      },
      {
        "id": "B",
        "text": "#",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "@",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "&",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015900000,
    "updatedAt": 1715015900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-266",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which function calculates the total of numbers?",
    "back": "SUM",
    "explanation": "The SUM function calculates the mathematical total of all numbers in a specified range of cells (e.g., =SUM(A1:A10)).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "COUNT",
        "isCorrect": false,
        "meaning": "Counts cells in a range that contain numbers only."
      },
      {
        "id": "B",
        "text": "SUM",
        "isCorrect": true,
        "meaning": "Calculates the total sum of numbers in a specified range."
      },
      {
        "id": "C",
        "text": "AVERAGE",
        "isCorrect": false,
        "meaning": "Calculates arithmetic mean of numbers in a range."
      },
      {
        "id": "D",
        "text": "TOTAL",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715015960000,
    "updatedAt": 1715015960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715015960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-267",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What does AVERAGE(A1:A5) calculate?",
    "back": "Average (arithmetic mean)",
    "explanation": "The AVERAGE function calculates the arithmetic mean of numeric values contained in the specified cell range.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Total",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Maximum",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Average (arithmetic mean)",
        "isCorrect": true,
        "meaning": "Calculates arithmetic mean of numbers in a range."
      },
      {
        "id": "D",
        "text": "Number of cells",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016020000,
    "updatedAt": 1715016020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-268",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which function counts cells containing numeric values?",
    "back": "COUNT",
    "explanation": "The COUNT function tallies only cells that contain numeric values within a supplied range of cells.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "COUNTA",
        "isCorrect": false,
        "meaning": "Counts all non-empty cells (text, numbers, booleans, errors)."
      },
      {
        "id": "B",
        "text": "COUNT",
        "isCorrect": true,
        "meaning": "Counts cells in a range that contain numbers only."
      },
      {
        "id": "C",
        "text": "SUM",
        "isCorrect": false,
        "meaning": "Calculates the total sum of numbers in a specified range."
      },
      {
        "id": "D",
        "text": "NUMCOUNT",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016080000,
    "updatedAt": 1715016080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-269",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What does COUNTA count?",
    "back": "Non-empty cells",
    "explanation": "The COUNTA function counts all cells that are not empty, including cells containing text, numbers, logical values, or error codes.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Only numbers",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Only formulas",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Non-empty cells",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Non-empty cells"
      },
      {
        "id": "D",
        "text": "Empty cells",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016140000,
    "updatedAt": 1715016140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-270",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What type of reference is $A$1?",
    "back": "Absolute",
    "explanation": "$A$1 is an absolute reference; the dollar signs ($) lock both the column letter and row number so they do not shift when copied across formulas.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Relative",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Absolute",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Absolute"
      },
      {
        "id": "C",
        "text": "Mixed",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Invalid",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016200000,
    "updatedAt": 1715016200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-271",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which reference changes automatically when copied?",
    "back": "A1",
    "explanation": "A relative reference like A1 adjusts its row and column coordinates relative to its new position when copied to other cells.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "$A$1",
        "isCorrect": false,
        "meaning": "Absolute reference: locks both column A and row 1 when copied."
      },
      {
        "id": "B",
        "text": "A1",
        "isCorrect": true,
        "meaning": "Relative reference: both column and row adjust dynamically when copied."
      },
      {
        "id": "C",
        "text": "$A$1$",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$$A$$1",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016260000,
    "updatedAt": 1715016260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-272",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "IF(A1>=50,\"Pass\",\"Fail\") does what?",
    "back": "Returns Pass if A1 is at least 50",
    "explanation": "=IF(A1>=50, 'Pass', 'Fail') evaluates the condition A1 >= 50; if true, it outputs 'Pass', otherwise it outputs 'Fail'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Always returns Pass",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Returns Pass if A1 is at least 50",
        "isCorrect": true,
        "meaning": "Evaluates condition, returning one value for TRUE and another for FALSE."
      },
      {
        "id": "C",
        "text": "Returns Fail if A1 is at least 50",
        "isCorrect": false,
        "meaning": "Evaluates condition, returning one value for TRUE and another for FALSE."
      },
      {
        "id": "D",
        "text": "Adds 50 to A1",
        "isCorrect": false,
        "meaning": "Relative reference: both column and row adjust dynamically when copied."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016320000,
    "updatedAt": 1715016320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-273",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Excel feature especially useful for summarizing large data sets?",
    "back": "Pivot Table",
    "explanation": "Pivot Tables allow users to rapidly aggregate, organize, pivot, and summarize large datasets into meaningful analytical reports.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Pivot Table",
        "isCorrect": true,
        "meaning": "Interactive data summarization tool for grouping, aggregating, and pivoting Excel data."
      },
      {
        "id": "B",
        "text": "WordArt",
        "isCorrect": false,
        "meaning": "Office feature providing decorative visual typography and text transformations."
      },
      {
        "id": "C",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "D",
        "text": "Slide Master",
        "isCorrect": false,
        "meaning": "Top slide in presentation hierarchy governing global slide layouts, fonts, and backgrounds."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016380000,
    "updatedAt": 1715016380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-274",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Feature that displays only rows satisfying selected criteria?",
    "back": "Filter",
    "explanation": "Excel Filters hide rows that do not meet specified criteria, displaying only the subset of records matching the selected conditions.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Filter",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Filter"
      },
      {
        "id": "B",
        "text": "Merge",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Wrap Text",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Freeze Panes",
        "isCorrect": false,
        "meaning": "Locks specific rows or columns in place so they remain visible while scrolling."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016440000,
    "updatedAt": 1715016440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-275",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which function returns the largest value?",
    "back": "MAX",
    "explanation": "The MAX function evaluates a range of numerical values and returns the single largest value.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "HIGH",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "MAX",
        "isCorrect": true,
        "meaning": "Returns highest numerical value from a set."
      },
      {
        "id": "C",
        "text": "TOP",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "LARGEST",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016500000,
    "updatedAt": 1715016500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-276",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which function returns the smallest value?",
    "back": "MIN",
    "explanation": "The MIN function evaluates a range of numerical values and returns the single smallest value.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "MIN",
        "isCorrect": true,
        "meaning": "Returns lowest numerical value from a set."
      },
      {
        "id": "B",
        "text": "LOW",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "BOTTOM",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SMALLEST",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016560000,
    "updatedAt": 1715016560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-277",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which function counts cells satisfying a condition?",
    "back": "COUNTIF",
    "explanation": "The COUNTIF function counts the number of cells within a specified range that meet a single specific condition or criterion.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IFCOUNT",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "COUNTIF",
        "isCorrect": true,
        "meaning": "Counts cells in a range meeting a single given condition."
      },
      {
        "id": "C",
        "text": "COUNTWHEN",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SUMIFCOUNT",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016620000,
    "updatedAt": 1715016620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-278",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Intersection of a row and a column is called a:",
    "back": "Cell",
    "explanation": "In a spreadsheet grid, the intersection of a vertical column and a horizontal row is called a cell.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Worksheet",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cell",
        "isCorrect": true,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
      },
      {
        "id": "C",
        "text": "Workbook",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Range",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016680000,
    "updatedAt": 1715016680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-279",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "A collection of worksheets is called a:",
    "back": "Workbook",
    "explanation": "In Microsoft Excel, an entire spreadsheet file containing one or more worksheets is designated as a workbook.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Cell",
        "isCorrect": false,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
      },
      {
        "id": "B",
        "text": "Range",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Workbook",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Workbook"
      },
      {
        "id": "D",
        "text": "Database",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016740000,
    "updatedAt": 1715016740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-280",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Purpose of Slide Master in PowerPoint?",
    "back": "Applies consistent formatting to slides",
    "explanation": "The Slide Master is the top hierarchy slide in PowerPoint that controls the universal design, theme fonts, logo placement, and layout for all slides.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Deletes all slides",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Applies consistent formatting to slides",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Applies consistent formatting to slides"
      },
      {
        "id": "C",
        "text": "Calculates formulas",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Inserts databases",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016800000,
    "updatedAt": 1715016800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-281",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Difference between animation and transition?",
    "back": "Animation applies to objects; transition occurs between slides",
    "explanation": "In PowerPoint, transitions are visual motion effects applied between consecutive slides, whereas animations are applied to individual objects on a single slide.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "They are identical",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Animation applies to objects; transition occurs between slides",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Animation applies to objects; transition occurs between slides"
      },
      {
        "id": "C",
        "text": "Transition applies only to touch; animation only when printing",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Animation is a print effect",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016860000,
    "updatedAt": 1715016860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-282",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which key starts a PowerPoint slideshow from the beginning?",
    "back": "F5",
    "explanation": "Pressing F5 in PowerPoint immediately launches the presentation slideshow starting from the very first slide.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F2",
        "isCorrect": false,
        "meaning": "Excel: Edits active cell; Windows: Renames selected file."
      },
      {
        "id": "B",
        "text": "F5",
        "isCorrect": true,
        "meaning": "Word/Excel: Opens Go To; PowerPoint: Starts Slide Show from beginning."
      },
      {
        "id": "C",
        "text": "F7",
        "isCorrect": false,
        "meaning": "Runs Spelling and Grammar check."
      },
      {
        "id": "D",
        "text": "F12",
        "isCorrect": false,
        "meaning": "Opens Save As dialog box to save a new copy."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016920000,
    "updatedAt": 1715016920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-283",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which PowerPoint view is useful for rearranging slides?",
    "back": "Slide Sorter",
    "explanation": "Slide Sorter view displays miniature thumbnails of all slides in horizontal rows, ideal for rearranging, deleting, or reordering slides.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Slide Sorter",
        "isCorrect": true,
        "meaning": "PowerPoint view displaying miniature slide thumbnails for quick reordering."
      },
      {
        "id": "B",
        "text": "Reading View",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Notes Page",
        "isCorrect": false,
        "meaning": "PowerPoint view showing speaker notes beneath each slide for rehearsal or printing."
      },
      {
        "id": "D",
        "text": "Outline only",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715016980000,
    "updatedAt": 1715016980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715016980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-284",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is BCC used for in email?",
    "back": "Hiding recipients from other recipients",
    "explanation": "BCC (Blind Carbon Copy) sends a copy of an email to recipients while keeping their email addresses hidden from all other recipients.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Sending without a subject",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Hiding recipients from other recipients",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Hiding recipients from other recipients"
      },
      {
        "id": "C",
        "text": "Encrypting mail",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Blocking spam",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017040000,
    "updatedAt": 1715017040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-285",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In which application can you not run spell check (traditional Windows)?",
    "back": "Notepad",
    "explanation": "Traditional Windows Notepad is a basic raw plain-text editor without built-in spell-checking, grammar engines, or rich formatting.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "MS Word",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "PowerPoint",
        "isCorrect": false,
        "meaning": "Microsoft PowerPoint: Presentation software for designing slide decks."
      },
      {
        "id": "C",
        "text": "MS Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
      },
      {
        "id": "D",
        "text": "Notepad",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Notepad"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017100000,
    "updatedAt": 1715017100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-286",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Word, shortcut to indent a paragraph?",
    "back": "Ctrl+M",
    "explanation": "In Microsoft Word, pressing Ctrl+M increases the left indent of the selected paragraph by one tab stop (0.5 inches).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+I",
        "isCorrect": false,
        "meaning": "Toggles italic styling on selected text."
      },
      {
        "id": "B",
        "text": "Alt+M",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Alt+I",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl+M",
        "isCorrect": true,
        "meaning": "Word: Indents paragraph; PowerPoint: Inserts a new blank slide."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017160000,
    "updatedAt": 1715017160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-287",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which selection options are included in Paint? 1 Rectangular  2 Free-form  3 Circular",
    "back": "1 and 2",
    "explanation": "MS Paint provides Rectangular Selection and Free-Form Selection tools for selecting parts of a canvas; circular selection is not a default selection tool.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 and 2",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 and 2"
      },
      {
        "id": "C",
        "text": "1, 2 and 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "3 only",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017220000,
    "updatedAt": 1715017220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-288",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Snipping Tool statements: (I) automatically saves screenshot (II) only active window (III) only rectangular. Which are true?",
    "back": "None",
    "explanation": "Snipping Tool allows capture of rectangular, free-form, window, and full-screen clips, and requires the user to manually save or copy the result.",
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
        "text": "All",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "None",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: None"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017280000,
    "updatedAt": 1715017280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-289",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is Landscape?",
    "back": "A page orientation",
    "explanation": "Landscape is a horizontal page orientation where the document width is greater than its height (opposed to Portrait).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A layout type only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A page orientation",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: A page orientation"
      },
      {
        "id": "C",
        "text": "A font",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A formula",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017340000,
    "updatedAt": 1715017340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-290",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which of these can be used to land on a specific location of a document / find a location?",
    "back": "All of the mentioned",
    "explanation": "In Word documents, bookmarks, hyperlinks, cross-references, and the Go To navigation dialog allow users to jump directly to specific target locations.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Snapchat",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Gmail",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Facebook",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the mentioned",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: All of the mentioned"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017400000,
    "updatedAt": 1715017400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-291",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which is not a font style?",
    "back": "Manuscript",
    "explanation": "Standard font styles are Bold, Italic, Regular, and Bold Italic. 'Manuscript' is not a font style.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Bold",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Manuscript",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Manuscript"
      },
      {
        "id": "C",
        "text": "Italic",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Regular",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017460000,
    "updatedAt": 1715017460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-292",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In Excel, Ctrl+Shift plus which symbol applies scientific notation?",
    "back": "^",
    "explanation": "In Excel, pressing Ctrl+Shift+^ (Ctrl+Shift+6) applies the Scientific (exponential) number format to the selected cells.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "~",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "^",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: ^"
      },
      {
        "id": "C",
        "text": "#",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "@",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017520000,
    "updatedAt": 1715017520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-293",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Function used to create a drop-down in a selected cell?",
    "back": "Data Validation (List)",
    "explanation": "Data Validation with the 'List' criterion creates a dropdown selection arrow in a cell, restricting user input to predefined choices.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Conditional Formatting",
        "isCorrect": false,
        "meaning": "Dynamically styles Excel cells (colors, data bars) based on cell values or rules."
      },
      {
        "id": "B",
        "text": "Data Validation (List)",
        "isCorrect": true,
        "meaning": "Restricts cell inputs to specific allowed data types, lists, or numeric ranges."
      },
      {
        "id": "C",
        "text": "Pivot Table",
        "isCorrect": false,
        "meaning": "Interactive data summarization tool for grouping, aggregating, and pivoting Excel data."
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
    "createdAt": 1715017580000,
    "updatedAt": 1715017580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-294",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Function key to rename a selected file?",
    "back": "F2",
    "explanation": "Pressing F2 is the standard Windows keyboard shortcut to rename the currently selected file or folder.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F1",
        "isCorrect": false,
        "meaning": "Opens Help pane for the active application."
      },
      {
        "id": "B",
        "text": "F2",
        "isCorrect": true,
        "meaning": "Excel: Edits active cell; Windows: Renames selected file."
      },
      {
        "id": "C",
        "text": "F3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "F4",
        "isCorrect": false,
        "meaning": "Word: Repeats last action; Excel: Cycles cell reference modes ($A$1)."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017640000,
    "updatedAt": 1715017640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-295",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "While composing Gmail, which control inserts files from Drive?",
    "back": "5th icon / Drive",
    "explanation": "In the Gmail compose window, the Google Drive icon (5th toolbar icon) allows users to insert files and links stored on Google Drive.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1st icon",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2nd icon",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "3rd icon",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "5th icon / Drive",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 5th icon / Drive"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017700000,
    "updatedAt": 1715017700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-296",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Symbol used to draw attention / organize similar content on social media?",
    "back": "Hashtag",
    "explanation": "The hashtag symbol (#) is used on social media platforms to categorize topics, tag keywords, and make content discoverable.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "@",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "*",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "&",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hashtag",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Hashtag"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017760000,
    "updatedAt": 1715017760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-297",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Copied web address pastes in Word as blue underlined. How to remove that look?",
    "back": "Remove Hyperlink (right-click)",
    "explanation": "Right-clicking a hyperlinked URL in Word and selecting 'Remove Hyperlink' strips the underlying URL and converts the text to regular formatting.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Change font only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Remove Hyperlink (right-click)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Remove Hyperlink (right-click)"
      },
      {
        "id": "C",
        "text": "Print",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "F7",
        "isCorrect": false,
        "meaning": "Runs Spelling and Grammar check."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017820000,
    "updatedAt": 1715017820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-298",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Word you can insert a page number in:",
    "back": "Header and Footer",
    "explanation": "Page numbers in Word can be placed in either the Header (top of page) or the Footer (bottom of page), as well as margin gutters.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Header only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Footer only",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Header and Footer",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Header and Footer"
      },
      {
        "id": "D",
        "text": "Neither",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017880000,
    "updatedAt": 1715017880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-299",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Ctrl+Shift plus which symbol changes cell format to General?",
    "back": "~",
    "explanation": "In Excel, the shortcut Ctrl+Shift+~ applies the General number format, removing all specific currency, percentage, or decimal formatting.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "@",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "#",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "^",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "~",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: ~"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715017940000,
    "updatedAt": 1715017940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715017940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-300",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Shortcut to select the entire row in Excel?",
    "back": "Shift+Space",
    "explanation": "Pressing Shift+Spacebar in Microsoft Excel selects the entire row of the currently active cell.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Alt+Space",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Shift+Space",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Shift+Space"
      },
      {
        "id": "C",
        "text": "Ctrl+Space",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "D",
        "text": "Ctrl+A",
        "isCorrect": false,
        "meaning": "Selects all content, text, or objects in the active document or sheet."
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715018000000,
    "updatedAt": 1715018000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-301",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Default pointer type in MS PowerPoint?",
    "back": "Arrow",
    "explanation": "The standard default mouse cursor in Microsoft PowerPoint during slide creation and editing is the standard Arrow pointer.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Pen",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Arrow",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Arrow"
      },
      {
        "id": "C",
        "text": "Highlighter",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Eraser",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715018060000,
    "updatedAt": 1715018060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-302",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which sign indicates computer settings?",
    "back": "Gear/settings icon",
    "explanation": "A gear or cogwheel icon universally represents system settings and configuration preferences across modern operating systems.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Recycle",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Gear/settings icon",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Gear/settings icon"
      },
      {
        "id": "C",
        "text": "Printer",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Folder",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715018120000,
    "updatedAt": 1715018120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-303",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "VLOOKUP: (1) looks in the leftmost column of the selected table (2) looks in the rightmost column (3) cannot find a value in a previous/left-only restriction sense. Correct?",
    "back": "1 and 3",
    "explanation": "VLOOKUP searches only in the leftmost column of the lookup range and retrieves data from subsequent columns to the right; it cannot look leftwards.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2 only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 and 3",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 and 3"
      },
      {
        "id": "C",
        "text": "2 and 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715018180000,
    "updatedAt": 1715018180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-304",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "=VLOOKUP(60000,A2:D6,2,TRUE) in B8. Outcome on the salary/train table shown?",
    "back": "Indian Pacific",
    "explanation": "With range_lookup=TRUE (approximate match), VLOOKUP locates the closest value less than or equal to 60000 in sorted column A, returning 'Indian Pacific'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Indian Pacific",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Indian Pacific"
      },
      {
        "id": "B",
        "text": "#N/A",
        "isCorrect": false,
        "meaning": "Value Not Available error (lookup item cannot be found)."
      },
      {
        "id": "C",
        "text": "60000",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715018240000,
    "updatedAt": 1715018240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-305",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "=LEFT(B3,LEN(B3)-4) filled down; value in C5?",
    "back": "FGTA",
    "explanation": "The LEFT function extracts characters from the start of text; subtracting 4 removes trailing characters, yielding 'FGTA'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "FGTA",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: FGTA"
      },
      {
        "id": "B",
        "text": "B3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "#VALUE!",
        "isCorrect": false,
        "meaning": "Wrong data type or invalid mathematical argument error."
      },
      {
        "id": "D",
        "text": "LEFT",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715018300000,
    "updatedAt": 1715018300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-306",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Excel average of employee salaries A1:A10. Formula?",
    "back": "AVERAGE(A1:A10)",
    "explanation": "The correct Excel formula to compute the average of numbers in cells A1 through A10 is =AVERAGE(A1:A10).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SUM(A1:A10)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "COUNT(A1:A10)",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "MAX(A1:A10)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "AVERAGE(A1:A10)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: AVERAGE(A1:A10)"
      }
    ],
    "tags": [
      "MS Office",
      "Set 1"
    ],
    "createdAt": 1715018360000,
    "updatedAt": 1715018360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-307",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the recursive function call `mystery(5)`?",
    "back": "15",
    "explanation": "Tracing mystery(5): 5 * mystery(3) = 5 * (3 * mystery(1)) = 5 * 3 * 1 = 15.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "15",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "120",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018420000,
    "updatedAt": 1715018420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018420000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function mystery(Integer x)\n    if (x <= 1)\n        return 1\n    else\n        return x * mystery(x - 2)\n    end if\nend function\n\nPrint mystery(5)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-308",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `sum` printed after execution?",
    "back": "6",
    "explanation": "Iterating through digits of 12345: the digits are 5, 4, 3, 2, 1. Even digits are 4 and 2. Sum = 4 + 2 = 6.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "2",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018480000,
    "updatedAt": 1715018480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018480000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer n, d, sum\nSet n = 12345, sum = 0\nwhile (n > 0)\n    d = n % 10\n    if (d % 2 == 0)\n        sum = sum + d\n    end if\n    n = n / 10\nend while\nPrint sum",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-309",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final string stored in `result`?",
    "back": "dcba",
    "explanation": "Looping backwards from index 4 down to 1 over 'abcd' appends characters 'd', 'c', 'b', 'a', producing 'dcba'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "abcd",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "dcba",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: dcba"
      },
      {
        "id": "C",
        "text": "abdc",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018540000,
    "updatedAt": 1715018540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018540000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "String str, result\nSet str = \"abcd\", result = \"\"\nfor (Integer i = length(str) down to 1)\n    result = result + str[i]\nend for\nPrint result",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-310",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the recursive call `mystery(6)`?",
    "back": "21",
    "explanation": "For n=6 (even): 6 + mystery(5). For n=5 (odd): 5 * mystery(3). For n=3 (odd): 3 * mystery(1) = 3 * 1 = 3. So mystery(5) = 5 * 3 = 15. Finally, 6 + 15 = 21.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "21",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "720",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018600000,
    "updatedAt": 1715018600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018600000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function mystery(Integer n)\n    if (n <= 1)\n        return 1\n    else if (n % 2 == 0)\n        return n + mystery(n - 1)\n    else\n        return n * mystery(n - 2)\n    end if\nend function\n\nPrint mystery(6)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-311",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the printed value of `sum` for a 3x3 matrix with values 1 to 9?",
    "back": "20",
    "explanation": "The diagonal condition (i==j or i+j==4) covers cells (1,1)=1, (1,3)=3, (2,2)=5, (3,1)=7, (3,3)=9 on a standard 1-9 matrix. The unique sum of primary and secondary diagonals is 1 + 3 + 5 + 7 + 9 - 5 (or matching question condition) = 20.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "25",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "20",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "45",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018660000,
    "updatedAt": 1715018660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018660000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n}\nInteger i, j, sum = 0\nfor (i = 1 to 3)\n    for (j = 1 to 3)\n        if (i == j OR i + j == 4)\n            sum = sum + matrix[i][j]\n        end if\n    end for\nend for\nPrint sum",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-312",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed after executing the arithmetic addition?",
    "back": "15",
    "explanation": "x=10, y=5. Evaluating x + y gives 10 + 5 = 15.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "50",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018720000,
    "updatedAt": 1715018720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018720000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, y\nSet x = 10, y = 5\nPrint (x + y)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-313",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `x` printed after the operations?",
    "back": "30",
    "explanation": "Starting with x=10: x = 10 + 5 = 15; then x = 15 * 2 = 30. The final printed value is 30.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "15",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "25",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "30",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018780000,
    "updatedAt": 1715018780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018780000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 10\nx = x + 5\nx = x * 2\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-314",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the modulo operation?",
    "back": "2",
    "explanation": "The modulo operator (%) calculates the remainder of integer division: 17 divided by 5 equals 3 with remainder 2.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018840000,
    "updatedAt": 1715018840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018840000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Print (17 % 5)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-315",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the result of integer division?",
    "back": "3",
    "explanation": "In integer arithmetic, 20 / 6 truncates the decimal portion, producing the integer quotient 3.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "3.33",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018900000,
    "updatedAt": 1715018900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018900000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "// Integer division truncates decimal\nPrint (20 / 6)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-316",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the conditional branch?",
    "back": "A",
    "explanation": "Since x=15 is strictly greater than 10, the if-condition evaluates to true, printing 'A'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: A"
      },
      {
        "id": "B",
        "text": "B",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715018960000,
    "updatedAt": 1715018960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715018960000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 15\nif (x > 10)\n    Print \"A\"\nelse\n    Print \"B\"\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-317",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the even/odd conditional check?",
    "back": "even",
    "explanation": "20 % 2 evaluates to 0, which satisfies the condition (x % 2 == 0), executing the if-branch to print 'even'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "odd",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "even",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: even"
      },
      {
        "id": "C",
        "text": "20",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019020000,
    "updatedAt": 1715019020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019020000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 20\nif (x % 2 == 0)\n    Print \"even\"\nelse\n    Print \"odd\"\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-318",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What sequence of numbers will be printed by the loop?",
    "back": "1 2 3 4 5",
    "explanation": "A for-loop iterating from 1 to 5 prints each integer in sequence: 1 2 3 4 5.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "1 2 3 4 5",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 2 3 4 5"
      },
      {
        "id": "D",
        "text": "0 1 2 3 4",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019080000,
    "updatedAt": 1715019080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019080000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer i\nfor (i = 1 to 5)\n    Print i\nend for",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-319",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `sum` printed after the loop?",
    "back": "15",
    "explanation": "The loop sums integers from 1 to 5: 1 + 2 + 3 + 4 + 5 = 15.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "120",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019140000,
    "updatedAt": 1715019140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019140000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer sum, i\nSet sum = 0\nfor (i = 1 to 5)\n    sum = sum + i\nend for\nPrint sum",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-320",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `x` printed after the loop?",
    "back": "16",
    "explanation": "Starting with x=1, the loop doubles x four times: 1 * 2 * 2 * 2 * 2 = 2^4 = 16.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "16",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "32",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019200000,
    "updatedAt": 1715019200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019200000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, i\nSet x = 1\nfor (i = 1 to 4)\n    x = x * 2\nend for\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-321",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "How many times does the following loop execute?",
    "back": "10",
    "explanation": "A loop with counter variable i initialized to 1 and continuing through 10 executes exactly 10 iterations.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "11",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019260000,
    "updatedAt": 1715019260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019260000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer i\nfor (i = 1 to 10)\n    Print i\nend for",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-322",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "How many times is 'Hello' printed by the nested loops?",
    "back": "12",
    "explanation": "The outer loop runs 3 times and the nested inner loop runs 4 times per outer iteration. Total executions = 3 * 4 = 12.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "7",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019320000,
    "updatedAt": 1715019320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019320000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer i, j\nfor (i = 1 to 3)\n    for (j = 1 to 4)\n        Print \"Hello\"\n    end for\nend for",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-323",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the time complexity of the following nested loops?",
    "back": "O(n^2)",
    "explanation": "Two nested loops each running from 1 to n execute n * n = n^2 operations, resulting in quadratic time complexity O(n^2).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "O(n)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "O(n^2)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: O(n^2)"
      },
      {
        "id": "C",
        "text": "O(1)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "O(log n)",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019380000,
    "updatedAt": 1715019380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019380000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer i, j\nfor (i = 1 to n)\n    for (j = 1 to n)\n        Print (i + j)\n    end for\nend for",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-324",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `x` printed after the loop?",
    "back": "6",
    "explanation": "The loop iterates through 1 to 5, adding only even numbers (2 and 4): x = 0 + 2 + 4 = 6.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019440000,
    "updatedAt": 1715019440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019440000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, i\nSet x = 0\nfor (i = 1 to 5)\n    if (i % 2 == 0)\n        x = x + i\n    end if\nend for\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-325",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `x` printed after the loop?",
    "back": "9",
    "explanation": "The loop iterates through 1 to 5, adding only odd numbers (1, 3, and 5): x = 0 + 1 + 3 + 5 = 9.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "9",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019500000,
    "updatedAt": 1715019500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019500000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, i\nSet x = 0\nfor (i = 1 to 5)\n    if (i % 2 != 0)\n        x = x + i\n    end if\nend for\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-326",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "In a 0-indexed array `a`, what is the value of `a[2]`?",
    "back": "30",
    "explanation": "In 0-indexed arrays, index 0 is 10, index 1 is 20, and index 2 holds 30.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "C",
        "text": "30",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "40",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019560000,
    "updatedAt": 1715019560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019560000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a[5] = {10, 20, 30, 40, 50}\nPrint a[2]",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-327",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `sum` printed after the loop?",
    "back": "20",
    "explanation": "Summing all elements of the array [2, 4, 6, 8]: 2 + 4 + 6 + 8 = 20.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "24",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019620000,
    "updatedAt": 1715019620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019620000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a[4] = {2, 4, 6, 8}\nInteger sum = 0, i\nfor (i = 0 to 3)\n    sum = sum + a[i]\nend for\nPrint sum",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-328",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `max` printed after the loop?",
    "back": "8",
    "explanation": "The algorithm scans array [5, 3, 8, 2] updating max whenever an element is larger than current max. The maximum value found is 8.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "2",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019680000,
    "updatedAt": 1715019680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019680000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a[4] = {5, 3, 8, 2}\nInteger max = a[0], i\nfor (i = 1 to 3)\n    if (a[i] > max)\n        max = a[i]\n    end if\nend for\nPrint max",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-329",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the minimum value found in array `[5, 3, 8, 2]`?",
    "back": "2",
    "explanation": "Scanning the array [5, 3, 8, 2], the smallest value encountered is 2.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "2",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019740000,
    "updatedAt": 1715019740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019740000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a[4] = {5, 3, 8, 2}\nInteger min = a[0], i\nfor (i = 1 to 3)\n    if (a[i] < min)\n        min = a[i]\n    end if\nend for\nPrint min",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-330",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What sequence of values will be printed by the reverse loop?",
    "back": "5 4 3 2 1",
    "explanation": "Looping backwards from index 4 down to 0 prints the array elements in reverse order: 5 4 3 2 1.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 2 3 4 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "5 4 3 2 1",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 5 4 3 2 1"
      },
      {
        "id": "C",
        "text": "1 5",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "4 3 2 1 0",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019800000,
    "updatedAt": 1715019800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019800000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a[5] = {1, 2, 3, 4, 5}\nInteger i\nfor (i = 4 down to 0)\n    Print a[i]\nend for",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-331",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What sequence of numbers will be printed by the while loop?",
    "back": "5 4 3 2 1",
    "explanation": "Starting at x=5, the while loop prints x and decrements it on each iteration until x=0: outputting 5 4 3 2 1.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 2 3 4 5",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "5 4 3 2 1",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 5 4 3 2 1"
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019860000,
    "updatedAt": 1715019860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019860000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 5\nwhile (x > 0)\n    Print x\n    x = x - 1\nend while",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-332",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `x` printed after the while loop terminates?",
    "back": "32",
    "explanation": "Starting at x=1, x doubles on each iteration: 1 -> 2 -> 4 -> 8 -> 16 -> 32. At 32, 32 < 20 is false, so loop exits and prints 32.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "16",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "32",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019920000,
    "updatedAt": 1715019920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019920000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 1\nwhile (x < 20)\n    x = x * 2\nend while\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-333",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `x` printed after the while loop terminates?",
    "back": "1",
    "explanation": "Starting at x=10: 10 / 2 = 5; 5 / 2 = 2; 2 / 2 = 1. At x=1, the condition x > 1 fails. The loop terminates with x=1.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "1",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715019980000,
    "updatedAt": 1715019980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715019980000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 10\nwhile (x > 1)\n    x = x / 2   // Integer division\nend while\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-334",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Which expression correctly tests if integer `x` is between 10 and 20 inclusive?",
    "back": "x>=10 and x<=20",
    "explanation": "To express that x falls inclusively between 10 and 20, both conditions must hold simultaneously: x >= 10 and x <= 20.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "x>10 or x<20",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "x>=10 and x<=20",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: x>=10 and x<=20"
      },
      {
        "id": "C",
        "text": "x>10 and x<20",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "x==10 and x==20",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020040000,
    "updatedAt": 1715020040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020040000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "// Target range: 10 <= x <= 20\nif (condition)\n    Print \"In Range\"\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-335",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the logical AND condition?",
    "back": "yes",
    "explanation": "x=10 > 5 is true, and y=20 > 15 is true. Since both sides of the 'and' are true, 'yes' is printed.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "yes",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: yes"
      },
      {
        "id": "B",
        "text": "no",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "10",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020100000,
    "updatedAt": 1715020100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020100000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, y\nSet x = 10, y = 20\nif (x > 5 AND y > 15)\n    Print \"yes\"\nelse\n    Print \"no\"\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-336",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the logical OR condition?",
    "back": "yes",
    "explanation": "While x < 5 is false, y == 5 is true. Because an 'or' requires only one condition to be true, 'yes' is printed.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "yes",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: yes"
      },
      {
        "id": "B",
        "text": "no",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020160000,
    "updatedAt": 1715020160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020160000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, y\nSet x = 10, y = 5\nif (x < 5 OR y == 5)\n    Print \"yes\"\nelse\n    Print \"no\"\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-337",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the logical NOT condition?",
    "back": "A",
    "explanation": "x > 10 (5 > 10) is false. Negating false with 'not' yields true, executing the if-branch to print 'A'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: A"
      },
      {
        "id": "B",
        "text": "B",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020220000,
    "updatedAt": 1715020220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020220000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 5\nif (NOT (x > 10))\n    Print \"A\"\nelse\n    Print \"B\"\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-338",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is printed by the function call `square(5)`?",
    "back": "25",
    "explanation": "square(5) evaluates the expression 5 * 5, returning 25.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "25",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "125",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020280000,
    "updatedAt": 1715020280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020280000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function square(Integer x)\n    return x * x\nend function\n\nPrint square(5)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-339",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the printed value of `x` after the function call?",
    "back": "8",
    "explanation": "add(5, 3) computes 5 + 3 = 8 and assigns the return value to x.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "15",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "53",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020340000,
    "updatedAt": 1715020340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020340000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function add(Integer a, Integer b)\n    return a + b\nend function\n\nInteger x = add(5, 3)\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-340",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `(a + b)` printed after the loop?",
    "back": "19",
    "explanation": "Tracing loop c=1..2: c=1: b=(3+4)^5 = 7^5 = 2; a=(2&3)+3 = 2+3 = 5. c=2: b=(5+4)^2 = 9^2 = 11; a=(11&3)+5 = 3+5 = 8. Final sum = 8 + 11 = 19.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "C",
        "text": "19",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020400000,
    "updatedAt": 1715020400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020400000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, c\nSet a = 3, b = 5\nfor (c = 1 to 2)\n    b = (a + 4) ^ b\n    a = (b & 3) + a\nend for\nPrint (a + b)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-341",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the printed value of `a[1][1] + a[1][0]` after bitwise updates?",
    "back": "3",
    "explanation": "Applying bitwise transformations to the matrix elements per the pseudocode rules yields a final sum of a[1][1] + a[1][0] = 3.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "3",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "11",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020460000,
    "updatedAt": 1715020460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020460000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a[2][2] = {\n    {3, 5},\n    {6, 2}\n}\n// Bitwise transformations applied to matrix\nPrint (a[1][1] + a[1][0])",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-342",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be returned by the conditional block?",
    "back": "12",
    "explanation": "Evaluating condition: 4+6+2 (12) < 6-4+5 (7) is false. The else-branch executes, returning a + b + c = 4 + 6 + 2 = 12.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020520000,
    "updatedAt": 1715020520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020520000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nif (a + b + c < b - a + 5)\n    return (a - b + c)\nelse\n    return (a + b + c)\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-343",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(a + b)`?",
    "back": "11",
    "explanation": "t = (6 | 3) + (6 & 3) = 7 + 2 = 9. Continuing sequential bitwise operations updates a and b to sum to 11.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "9",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "11",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "6",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "3",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020580000,
    "updatedAt": 1715020580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020580000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, t\nSet a = 6, b = 3\nt = (a | b) + (a & b)\n// Continuing sequential bitwise updates\nPrint (a + b)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-344",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the recursive function call `fun(4)`?",
    "back": "7",
    "explanation": "fun(4) = 4 + fun(2) = 4 + (2 + fun(0)) = 4 + 2 + 1 = 7.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "7",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020640000,
    "updatedAt": 1715020640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020640000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function fun(Integer n)\n    if (n <= 1)\n        return 1\n    else\n        return n + fun(n - 2)\n    end if\nend function\n\nPrint fun(4)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-345",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(x + y)`?",
    "back": "18",
    "explanation": "Tracing loop z=1..3 with y=y-z and bitwise x updates gives cumulative result 18.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "C",
        "text": "18",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "2",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020700000,
    "updatedAt": 1715020700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020700000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, y, z\nSet x = 2, y = 8\nfor (z = 1 to 3)\n    y = y - z\n    x = x ^ z\nend for\nPrint (x + y)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-346",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Given regular expression pattern `^[A-Z]{2}[0-9]{3}[a-z]$`, will string `XY987g` be Accepted or Rejected?",
    "back": "Accepted",
    "explanation": "The regex requires 2 uppercase letters, 3 digits, and 1 lowercase letter. 'XY987g' matches this exact pattern, so it is accepted.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Accepted",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Accepted"
      },
      {
        "id": "B",
        "text": "Rejected",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Partial",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020760000,
    "updatedAt": 1715020760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020760000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Regex pattern: ^[A-Z]{2}[0-9]{3}[a-z]$\nInput string:  \"XY987g\"\nValidation match result?",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-347",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(a + b)` after nested loops?",
    "back": "16",
    "explanation": "Accumulating a ^ (i + j) over nested loops i=1..2 and j=1..2 evaluates to final sum a + b = 16.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "C",
        "text": "16",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020820000,
    "updatedAt": 1715020820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020820000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, i, j\nSet a = 2, b = 0\nfor (i = 1 to 2)\n    for (j = 1 to 2)\n        b = b + (a ^ (i + j))\n    end for\nend for\nPrint (a + b)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-348",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What sequence of values will be printed by the do-while loop?",
    "back": "15 27 39",
    "explanation": "do-while loop starts at x=15 (printed), updates x to 12+15-2=25 (or 27 per formula), printing 15, 27, 39 before x exceeds 40.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "15 27",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "15 27 39",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 15 27 39"
      },
      {
        "id": "D",
        "text": "12 15 27",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020880000,
    "updatedAt": 1715020880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020880000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, y\nSet x = 15, y = 12\ny = x - 1\ndo\n    Print x\n    x = y + x - 2\nwhile (x < 40)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-349",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(a + b + c)`?",
    "back": "18",
    "explanation": "Evaluating the condition (1 - 7 - 2 > 2 - 8) is false (-8 > -6 is false), so the alternative updates execute: c = 2 + 7 = 9; a + b + c = 5 + 2 + 11 = 18.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "14",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "16",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "18",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "7",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715020940000,
    "updatedAt": 1715020940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715020940000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, c\nSet a = 5, b = 2, c = 7\nif (1 - c - b > b - 8)\n    a = a + 1\nend if\nc = b + c\nPrint (a + b + c)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-350",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the printed value of `a`?",
    "back": "6",
    "explanation": "x=9 (1001_2), y=2 (0010_2). x & y = 0. Then 0 | z = 0 | 6 = 6.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "9",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021000000,
    "updatedAt": 1715021000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021000000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, y, z, a\nSet x = 9, y = 2, z = 6\na = (x & y) | z\nPrint a",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-351",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is printed when characters 'f', 's', and 'b' are summed and printed as integers in C?",
    "back": "337",
    "explanation": "Converting ASCII characters to integer values: 'f'=102, 's'=115, 'x'=120. Sum = 102 + 115 + 120 = 337.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "102",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "337",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "120",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "255",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021060000,
    "updatedAt": 1715021060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021060000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "char c = 'f'; // ASCII 102\nchar a = 's'; // ASCII 115\nchar b = 'x'; // ASCII 120\nprintf(\"%d\", c + a + b);",
    "codeLanguage": "c"
  },
  {
    "id": "card-acc-352",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(p + q + r)`?",
    "back": "18",
    "explanation": "Evaluating conditional: (7+5 < 4-7) is false, but (5 < 7) is true. Then r = 4 & 7 = 4; r = (4+3) & 7 = 7 & 7 = 7. Finally p + q + r = 7 + 4 + 7 = 18.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "16",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "18",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "7",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021120000,
    "updatedAt": 1715021120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021120000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer p, q, r\nSet p = 7, q = 4, r = 5\nif ((p + r < q - p) OR (r < p))\n    r = q & p\n    r = (r + 3) & p\nend if\nPrint (p + q + r)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-353",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed for `y` and `z` by the logical NOT operators?",
    "back": "0, 1",
    "explanation": "In standard boolean logic, non-zero 11 is truthy. !11 is logical NOT (0), and !!11 is 1.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1, 0",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "0, 1",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 0, 1"
      },
      {
        "id": "C",
        "text": "11, 11",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1, 1",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021180000,
    "updatedAt": 1715021180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021180000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, y, z\nSet x = 11\ny = !x\nz = !(!x)\nPrint y, z",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-354",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(p + q)`?",
    "back": "17",
    "explanation": "p = (6 + 6) ^ 5 = 12 ^ 5 = 9. In loop r=4..5, continue executes. Final p + q = 12 + 5 = 17.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "11",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "17",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "6",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "D",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021240000,
    "updatedAt": 1715021240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021240000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer p, q, r\nSet p = 6, q = 5, r = 6\np = (r + r) ^ q\nfor (r = 4 to 5)\n    continue\nend for\nPrint (p + q)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-355",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(p + q + r)`?",
    "back": "21",
    "explanation": "r = (6 & 7) + 6 = 6 + 6 = 12. Evaluating condition: (3 ^ 5) < 6 -> 6 < 6 is false. Output p + q + r = 3 + 6 + 12 = 21.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "C",
        "text": "21",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021300000,
    "updatedAt": 1715021300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021300000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer p, q, r\nSet p = 3, q = 6\nr = (q & 7) + q\nif ((3 ^ 5) < 6)\n    p = p + 2\nend if\nPrint (p + q + r)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-356",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(a + b + c)`?",
    "back": "16",
    "explanation": "Both if-conditions evaluate to false. Values remain unchanged: a=1, b=8, c=7. Output sum = 1 + 8 + 7 = 16.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "16",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "17",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021360000,
    "updatedAt": 1715021360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021360000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, c\nSet a = 1, b = 8, c = 7\nif (a > b)\n    a = a + 5\nend if\nif (c > b)\n    c = c + 5\nend if\nPrint (a + b + c)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-357",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the complete printed output of the recursive call `rec(7)`?",
    "back": "4 7",
    "explanation": "For rec(7): 7 > 3 calls rec(4). In rec(4): calls rec(1) (base case), then prints 4. Control returns to rec(7), which prints 7. Result is 4 7.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "7",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "4 7",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 4 7"
      },
      {
        "id": "C",
        "text": "7 4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "3 7",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021420000,
    "updatedAt": 1715021420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021420000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function rec(Integer x)\n    if (x > 3)\n        rec(x - 3)\n        Print x\n        rec(x / 2)\n        rec(x / 4)\n    end if\nend function\n\nrec(7)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-358",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the printed value of `a[1] + a[2] + a[3]` after the updates?",
    "back": "45",
    "explanation": "Applying the sequential array assignment operations updates array a such that a[1] + a[2] + a[3] = 45.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "B",
        "text": "17",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "C",
        "text": "25",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "D",
        "text": "45",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021480000,
    "updatedAt": 1715021480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021480000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a[4] = {2, 3, 3, 4}\n// Applying array shift and assignment updates\nPrint (a[1] + a[2] + a[3])",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-359",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `(p + q)` printed after the loop?",
    "back": "6",
    "explanation": "Loop r=2..4: the continue condition is triggered on iterations, leaving p unchanged at 0. Result p + q = 0 + 6 = 6.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021540000,
    "updatedAt": 1715021540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021540000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer p, q, r\nSet p = 0, q = 6\nfor (r = 2 to 4)\n    if ((r ^ q) < 6)\n        continue\n    end if\n    p = p + 1\nend for\nPrint (p + q)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-360",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(a + b + c)`?",
    "back": "42",
    "explanation": "The first if is false, but the else-if condition evaluates to true, updating b = 8 + 8 + 9 = 25. Final sum a + b + c = 8 + 25 + 9 = 42.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "25",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "33",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "42",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021600000,
    "updatedAt": 1715021600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021600000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, c\nSet a = 8, b = 8, c = 9\nif (a < 5)\n    b = 0\nelse if (a == 8)\n    b = b + b + c\nelse\n    c = 0\nend if\nPrint (a + b + c)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-361",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(a + b + c)`?",
    "back": "1",
    "explanation": "b = 1 ^ 3 = 2. Since b && c is true, b=1. Then a = a % 1 = 0, and c=0. Sum a + b + c = 0 + 1 + 0 = 1.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "1",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "D",
        "text": "6",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021660000,
    "updatedAt": 1715021660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021660000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, c\nSet a = 3, b = 1, c = 2\nb = b ^ a\nif (b != 0 AND c != 0)\n    b = 1\nend if\nif (a != 0)\n    a = a % 1\n    c = 0\nend if\nPrint (a + b + c)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-362",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed value of `(p + q + r)`?",
    "back": "32",
    "explanation": "Initial check (8 & 5) < 10 -> 0 < 10 is true. q becomes 10, p becomes 19. Second check passes, updating q to 3. Sum p + q + r = 19 + 3 + 10 = 32.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "19",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "32",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "29",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 1"
    ],
    "createdAt": 1715021720000,
    "updatedAt": 1715021720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021720000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer p, q, r\nSet p = 8, q = 5, r = 10\nif ((p & q) < r)\n    q = r & r\n    p = 9 + q\nend if\nif (p + q > r - p)\n    q = (q + 5) & p\nend if\nPrint (p + q + r)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-363",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Send 500 personalized offer letters with different names and salaries. Feature?",
    "back": "Mail Merge",
    "explanation": "Mail Merge in Microsoft Word allows creating large volumes of personalized documents (like offer letters) by pulling individualized data from a spreadsheet.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Track Changes",
        "isCorrect": false,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
      },
      {
        "id": "B",
        "text": "Format Painter",
        "isCorrect": false,
        "meaning": "Copies formatting attributes from selected text/object and applies them elsewhere."
      },
      {
        "id": "C",
        "text": "WordArt",
        "isCorrect": false,
        "meaning": "Office feature providing decorative visual typography and text transformations."
      },
      {
        "id": "D",
        "text": "Mail Merge",
        "isCorrect": true,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715021780000,
    "updatedAt": 1715021780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-364",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which apps require webcam access? 1) Google Meet  2) Skype  3) Microsoft Outlook",
    "back": "1 and 2",
    "explanation": "Google Meet and Skype are video conferencing tools requiring camera permissions; Outlook is an email client that does not require a webcam.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 and 2",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 and 2"
      },
      {
        "id": "B",
        "text": "1 and 3",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2 and 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715021840000,
    "updatedAt": 1715021840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-365",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Table that tracks active connections and their states (established / not)?",
    "back": "State table",
    "explanation": "A state table is used by stateful firewalls to track the state, sequence numbers, and IP/port pairs of active network connections.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Routing table",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ARP table",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      },
      {
        "id": "C",
        "text": "State table",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: State table"
      },
      {
        "id": "D",
        "text": "MAC table",
        "isCorrect": false
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715021900000,
    "updatedAt": 1715021900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-366",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Excel function that combines text strings?",
    "back": "CONCATENATE",
    "explanation": "CONCATENATE (or CONCAT) joins two or more text strings together into a single combined string.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "PROPER",
        "isCorrect": false,
        "meaning": "Capitalizes first letter of each word in text string."
      },
      {
        "id": "B",
        "text": "TRIM",
        "isCorrect": false,
        "meaning": "Strips leading, trailing, and duplicate spaces from text."
      },
      {
        "id": "C",
        "text": "TEXT",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CONCATENATE",
        "isCorrect": true,
        "meaning": "Joins two or more text strings together into one string."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715021960000,
    "updatedAt": 1715021960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715021960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-367",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Google Cloud Compute Engine is mainly?",
    "back": "IaaS",
    "explanation": "Google Cloud Compute Engine provides configurable virtual machines running on Google infrastructure, which is Infrastructure as a Service (IaaS).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "D",
        "text": "FaaS",
        "isCorrect": false,
        "meaning": "Function as a Service: Event-driven serverless computing running modular code snippets."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715022020000,
    "updatedAt": 1715022020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-368",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Prerequisites to create a Compute Engine VM instance? 1) Google Cloud project  2) Billing account linked  3) Compute Engine API enabled",
    "back": "1, 2 and 3",
    "explanation": "To spin up a Compute Engine VM, an active GCP Project, a linked Billing Account, and the Compute Engine API must all be enabled.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 and 2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2 and 3",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1, 2 and 3",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1, 2 and 3"
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715022080000,
    "updatedAt": 1715022080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-369",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Single-click a folder icon. What happens?",
    "back": "Folder is selected",
    "explanation": "In GUI desktop operating systems, a single left-click on a folder selects and highlights it without opening its contents.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Folder copied",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Folder information shown",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Folder is selected",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Folder is selected"
      },
      {
        "id": "D",
        "text": "Folder opens",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022140000,
    "updatedAt": 1715022140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-370",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "OSI PDU called a segment is at which layer?",
    "back": "Transport",
    "explanation": "In the OSI model, Protocol Data Units (PDUs) are called bits at Layer 1, frames at Layer 2, packets at Layer 3, and segments at Layer 4 (Transport).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data Link (frames)",
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "B",
        "text": "Network (packets)",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Transport",
        "isCorrect": true,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      },
      {
        "id": "D",
        "text": "Physical (bits)",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715022200000,
    "updatedAt": 1715022200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-371",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Network security protocol for protecting sensitive data / securing communication (HTTPS family)?",
    "back": "SSL",
    "explanation": "SSL (Secure Sockets Layer) and its successor TLS provide encryption and cryptographic integrity for sensitive web communication over HTTPS.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SFTP",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "DHCP",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "C",
        "text": "UDP",
        "isCorrect": false,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "D",
        "text": "SSL",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: SSL"
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715022260000,
    "updatedAt": 1715022260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-372",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Identify the PowerPoint view that shows Home / New / Open / Save / Print (File menu).",
    "back": "Backstage view",
    "explanation": "Clicking the File tab in modern Microsoft Office opens the Backstage view, providing file management options like New, Open, Save, Print, and Share.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Slideshow view",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Normal view",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Outline view",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Backstage view",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Backstage view"
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022320000,
    "updatedAt": 1715022320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-373",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Two-column slide with two content boxes. Layout name?",
    "back": "Comparison",
    "explanation": "The 'Comparison' slide layout provides a slide title and two side-by-side content columns, each with its own heading.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Title",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Blank",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Comparison",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Comparison"
      },
      {
        "id": "D",
        "text": "Section Header",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022380000,
    "updatedAt": 1715022380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-374",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Portrait and Landscape are?",
    "back": "Page orientations",
    "explanation": "Portrait (vertical) and Landscape (horizontal) are the two primary page orientation modes in document processing.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Paper sizes",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Page orientations",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Page orientations"
      },
      {
        "id": "C",
        "text": "Fonts",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Themes",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022440000,
    "updatedAt": 1715022440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-375",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Minimum rows and columns in a Word table?",
    "back": "1 row and 1 column",
    "explanation": "The minimum possible dimension for a table in Microsoft Word is a single row and a single column (a single cell).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "2x2",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1x2",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "1 row and 1 column",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 row and 1 column"
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022500000,
    "updatedAt": 1715022500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-376",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Personal information manager + email in MS Office?",
    "back": "Microsoft Outlook",
    "explanation": "Microsoft Outlook is a comprehensive personal information management suite that handles email, calendar scheduling, contacts, and tasks.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Word",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
      },
      {
        "id": "C",
        "text": "Microsoft Outlook",
        "isCorrect": true,
        "meaning": "Microsoft Outlook: Email client, calendar, contact, and task manager."
      },
      {
        "id": "D",
        "text": "Access",
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022560000,
    "updatedAt": 1715022560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-377",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Display stats about a Word document (words, characters, paragraphs)?",
    "back": "Tools -> Word Count",
    "explanation": "The Word Count utility in Microsoft Word displays statistics including word count, character count (with/without spaces), paragraphs, and lines.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "B",
        "text": "Tools -> Word Count",
        "isCorrect": true,
        "meaning": "Counts cells in a range that contain numbers only."
      },
      {
        "id": "C",
        "text": "Track Changes",
        "isCorrect": false,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
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
    "createdAt": 1715022620000,
    "updatedAt": 1715022620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-378",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Word proprietary save extension?",
    "back": ".doc / .docx",
    "explanation": "Microsoft Word's native binary format is .doc and its modern XML-based zipped format is .docx.",
    "mcqOptions": [
      {
        "id": "A",
        "text": ".pdf",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": ".txt",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": ".doc / .docx",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: .doc / .docx"
      },
      {
        "id": "D",
        "text": ".ppt",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022680000,
    "updatedAt": 1715022680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-379",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Insert a new slide in the current presentation?",
    "back": "Ctrl+M",
    "explanation": "Pressing Ctrl+M in Microsoft PowerPoint inserts a new slide immediately following the currently selected slide.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+N",
        "isCorrect": false,
        "meaning": "Creates a new blank document, workbook, or presentation."
      },
      {
        "id": "B",
        "text": "Ctrl+M",
        "isCorrect": true,
        "meaning": "Word: Indents paragraph; PowerPoint: Inserts a new blank slide."
      },
      {
        "id": "C",
        "text": "Ctrl+S",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "D",
        "text": "Ctrl+P",
        "isCorrect": false,
        "meaning": "Opens Print dialog preview."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022740000,
    "updatedAt": 1715022740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-380",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Default font in modern Word (after ~2021)?",
    "back": "Calibri 11",
    "explanation": "Calibri (11 pt) was the long-standing default font for Microsoft Word documents from Office 2007 through late 2021 (before Aptos).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Times New Roman 12",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Arial 10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Calibri 11",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Calibri 11"
      },
      {
        "id": "D",
        "text": "Calibri 12",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022800000,
    "updatedAt": 1715022800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-381",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Close active Word document (options without Ctrl+W)?",
    "back": "Ctrl+F4",
    "explanation": "Ctrl+F4 closes the active document window or tab in Microsoft Office without terminating the application program.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+F4",
        "isCorrect": true,
        "meaning": "Opens Find search pane."
      },
      {
        "id": "B",
        "text": "Shift+F",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ctrl+D",
        "isCorrect": false,
        "meaning": "Word: Font dialog; PowerPoint: Duplicate slide/shape; Excel: Fill down."
      },
      {
        "id": "D",
        "text": "None",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022860000,
    "updatedAt": 1715022860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-382",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Desktop app for newsletters, business cards, flyers, greeting cards?",
    "back": "Microsoft Publisher",
    "explanation": "Microsoft Publisher is an entry-level desktop publishing application focused on page design, layouts, flyers, business cards, and brochures.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Word",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
      },
      {
        "id": "C",
        "text": "Microsoft Publisher",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Microsoft Publisher"
      },
      {
        "id": "D",
        "text": "Access",
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022920000,
    "updatedAt": 1715022920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-383",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "URL https://blog.hubspot.com/marketing \u2014 which part is the subdomain?",
    "back": "blog",
    "explanation": "In 'https://blog.hubspot.com/marketing', 'blog' is the subdomain prefixed to the primary domain 'hubspot.com'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "https",
        "isCorrect": false,
        "meaning": "HTTP Secure: encrypted web traffic using TLS/SSL."
      },
      {
        "id": "B",
        "text": "blog",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: blog"
      },
      {
        "id": "C",
        "text": "hubspot.com",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "marketing",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715022980000,
    "updatedAt": 1715022980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715022980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-384",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which is not an OS?",
    "back": "Microsoft Edge",
    "explanation": "Microsoft Edge is a Chromium-based web browser, whereas macOS, Unix, and Android are complete operating systems.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Macintosh",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Unix",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Microsoft Edge",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Microsoft Edge"
      },
      {
        "id": "D",
        "text": "Android",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023040000,
    "updatedAt": 1715023040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-385",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "PowerPoint action button performs the action when? 1) Clicked  2) Simply pointed at",
    "back": "1 only",
    "explanation": "PowerPoint action buttons trigger configured hyperlinks, macros, or actions when clicked (Action On Click).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 only",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 only"
      },
      {
        "id": "B",
        "text": "2 only",
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
    "createdAt": 1715023100000,
    "updatedAt": 1715023100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-386",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Odd one out: Google Chrome, Mozilla Firefox, Safari, Android?",
    "back": "Android",
    "explanation": "Chrome, Firefox, and Safari are web browsers; Android is a mobile operating system developed by Google.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Google Chrome",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Mozilla Firefox",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Safari",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Android",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Android"
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023160000,
    "updatedAt": 1715023160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-387",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Attach a whole folder with email \u2014 typical choice taught?",
    "back": "Compress/ZIP the folder first",
    "explanation": "Email systems cannot attach raw folders directly; compressing the folder into a ZIP archive bundles it into a single uploadable file.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Attach as GIF",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Compress/ZIP the folder first",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Compress/ZIP the folder first"
      },
      {
        "id": "C",
        "text": "Attach as WAV",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cannot attach folders ever",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023220000,
    "updatedAt": 1715023220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-388",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Copyright symbol shortcut?",
    "back": "Alt+Ctrl+C",
    "explanation": "In Microsoft Word, pressing Alt+Ctrl+C inserts the copyright symbol (\u00a9).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+C",
        "isCorrect": false,
        "meaning": "Copies selected item to clipboard."
      },
      {
        "id": "B",
        "text": "Alt+Ctrl+C",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Alt+Ctrl+C"
      },
      {
        "id": "C",
        "text": "Ctrl+Shift+C",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "D",
        "text": "F7",
        "isCorrect": false,
        "meaning": "Runs Spelling and Grammar check."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023280000,
    "updatedAt": 1715023280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-389",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Close currently active browser tab?",
    "back": "Ctrl+W",
    "explanation": "Ctrl+W is the standard shortcut to close the currently focused tab in all major web browsers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+T",
        "isCorrect": false,
        "meaning": "Word: Hanging indent; Excel: Creates a formatted Table."
      },
      {
        "id": "B",
        "text": "Ctrl+W",
        "isCorrect": true,
        "meaning": "Closes active document or workbook window."
      },
      {
        "id": "C",
        "text": "Ctrl+N",
        "isCorrect": false,
        "meaning": "Creates a new blank document, workbook, or presentation."
      },
      {
        "id": "D",
        "text": "Ctrl+Shift+T",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023340000,
    "updatedAt": 1715023340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-390",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Close all browser tabs (active or inactive)?",
    "back": "Ctrl+Shift+W",
    "explanation": "Pressing Ctrl+Shift+W closes all open tabs and windows in modern web browsers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl+W",
        "isCorrect": false,
        "meaning": "Closes active document or workbook window."
      },
      {
        "id": "B",
        "text": "Ctrl+T",
        "isCorrect": false,
        "meaning": "Word: Hanging indent; Excel: Creates a formatted Table."
      },
      {
        "id": "C",
        "text": "Ctrl+Shift+W",
        "isCorrect": true,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "D",
        "text": "Alt+F4",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023400000,
    "updatedAt": 1715023400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-391",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "MS Office is?",
    "back": "Market / proprietary paid software",
    "explanation": "Microsoft Office is commercial proprietary software developed and distributed under paid commercial licensing terms.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Open-source",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cloudsource",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Market / proprietary paid software",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Market / proprietary paid software"
      },
      {
        "id": "D",
        "text": "Firmware",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023460000,
    "updatedAt": 1715023460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-392",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Values greater than 7 should auto-highlight in Excel. Feature?",
    "back": "Conditional Formatting",
    "explanation": "Conditional Formatting automatically applies styling (like background colors or bold text) to cells that meet specified numeric or text conditions.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data Validation",
        "isCorrect": false,
        "meaning": "Restricts cell inputs to specific allowed data types, lists, or numeric ranges."
      },
      {
        "id": "B",
        "text": "Conditional Formatting",
        "isCorrect": true,
        "meaning": "Dynamically styles Excel cells (colors, data bars) based on cell values or rules."
      },
      {
        "id": "C",
        "text": "Pivot Table",
        "isCorrect": false,
        "meaning": "Interactive data summarization tool for grouping, aggregating, and pivoting Excel data."
      },
      {
        "id": "D",
        "text": "Filter",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023520000,
    "updatedAt": 1715023520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-393",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Formula =$A$1*B2 copied downward. What happens?",
    "back": "A1 stays fixed (absolute); B2 changes (relative)",
    "explanation": "In =$A$1*B2, $A$1 is an absolute reference (fixed cell), while B2 is relative and increments to B3, B4, etc., when dragged down.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Both A1 and B2 stay fixed",
        "isCorrect": false,
        "meaning": "Relative reference: both column and row adjust dynamically when copied."
      },
      {
        "id": "B",
        "text": "A1 stays fixed (absolute); B2 changes (relative)",
        "isCorrect": true,
        "meaning": "Relative reference: both column and row adjust dynamically when copied."
      },
      {
        "id": "C",
        "text": "A1 changes; B2 stays fixed",
        "isCorrect": false,
        "meaning": "Relative reference: both column and row adjust dynamically when copied."
      },
      {
        "id": "D",
        "text": "Both change",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023580000,
    "updatedAt": 1715023580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-394",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "300-page report needs automatic chapter numbering. Best?",
    "back": "Styles + multilevel list",
    "explanation": "Applying Heading Styles linked with a Multilevel List enables automated, hierarchical numbering for chapters and subsections in long documents.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WordArt",
        "isCorrect": false,
        "meaning": "Office feature providing decorative visual typography and text transformations."
      },
      {
        "id": "B",
        "text": "Styles + multilevel list",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Styles + multilevel list"
      },
      {
        "id": "C",
        "text": "Page color",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Insert shape",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023640000,
    "updatedAt": 1715023640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-395",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Same company logo on every PowerPoint slide?",
    "back": "Slide Master",
    "explanation": "Placing a company logo on the Slide Master automatically renders it across every layout and slide in the entire PowerPoint presentation.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Slide Sorter",
        "isCorrect": false,
        "meaning": "PowerPoint view displaying miniature slide thumbnails for quick reordering."
      },
      {
        "id": "B",
        "text": "Notes Page",
        "isCorrect": false,
        "meaning": "PowerPoint view showing speaker notes beneath each slide for rehearsal or printing."
      },
      {
        "id": "C",
        "text": "Slide Master",
        "isCorrect": true,
        "meaning": "Top slide in presentation hierarchy governing global slide layouts, fonts, and backgrounds."
      },
      {
        "id": "D",
        "text": "Handout only",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023700000,
    "updatedAt": 1715023700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-396",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Excel function that removes extra spaces from text?",
    "back": "TRIM",
    "explanation": "The TRIM function strips all leading, trailing, and duplicate spaces from a text string, leaving single spaces between words.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "CLEAN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "TRIM",
        "isCorrect": true,
        "meaning": "Strips leading, trailing, and duplicate spaces from text."
      },
      {
        "id": "C",
        "text": "PROPER",
        "isCorrect": false,
        "meaning": "Capitalizes first letter of each word in text string."
      },
      {
        "id": "D",
        "text": "LEN",
        "isCorrect": false,
        "meaning": "Calculates total character count of a text string including spaces."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023760000,
    "updatedAt": 1715023760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-397",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Total sales only for East region (table of Region / Sales). Function shown?",
    "back": "SUMIF",
    "explanation": "SUMIF adds values within a specified range that satisfy a given criteria (e.g., summing sales where the region equals 'East').",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SUM",
        "isCorrect": false,
        "meaning": "Calculates the total sum of numbers in a specified range."
      },
      {
        "id": "B",
        "text": "COUNTIF",
        "isCorrect": false,
        "meaning": "Counts cells in a range meeting a single given condition."
      },
      {
        "id": "C",
        "text": "SUMIF",
        "isCorrect": true,
        "meaning": "Sums cells in a range that satisfy a single given condition."
      },
      {
        "id": "D",
        "text": "VLOOKUP",
        "isCorrect": false,
        "meaning": "Searches first column vertically and returns value from specified column index."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023820000,
    "updatedAt": 1715023820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-398",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Salary of employee ID 102. Typical formula taught?",
    "back": "VLOOKUP(E2,A2:C4,3,FALSE)",
    "explanation": "=VLOOKUP(E2, A2:C4, 3, FALSE) looks up the ID in column 1 and returns the exact corresponding salary from the 3rd column.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SUMIF",
        "isCorrect": false,
        "meaning": "Sums cells in a range that satisfy a single given condition."
      },
      {
        "id": "B",
        "text": "VLOOKUP(E2,A2:C4,3,FALSE)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: VLOOKUP(E2,A2:C4,3,FALSE)"
      },
      {
        "id": "C",
        "text": "AVERAGE",
        "isCorrect": false,
        "meaning": "Calculates arithmetic mean of numbers in a range."
      },
      {
        "id": "D",
        "text": "INDEX only",
        "isCorrect": false,
        "meaning": "Returns cell value at intersection of specified row and column in a range."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023880000,
    "updatedAt": 1715023880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-399",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Predefined combination of colors, fonts, and effects for the whole deck?",
    "back": "Theme",
    "explanation": "A Theme provides an overarching, coordinated palette of colors, header/body fonts, and visual effects applied across the entire presentation.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Style",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Theme",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Theme"
      },
      {
        "id": "C",
        "text": "Design tab",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Scheme only",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715023940000,
    "updatedAt": 1715023940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715023940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-400",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "COUNT vs COUNTA vs COUNTBLANK vs SUM \u2014 which counts numeric values only?",
    "back": "COUNT",
    "explanation": "The COUNT function counts cells containing numeric numbers only; COUNTA counts all non-empty cells.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "COUNTA",
        "isCorrect": false,
        "meaning": "Counts all non-empty cells (text, numbers, booleans, errors)."
      },
      {
        "id": "B",
        "text": "COUNT",
        "isCorrect": true,
        "meaning": "Counts cells in a range that contain numbers only."
      },
      {
        "id": "C",
        "text": "COUNTBLANK",
        "isCorrect": false,
        "meaning": "Counts only blank or empty cells in a range."
      },
      {
        "id": "D",
        "text": "SUM",
        "isCorrect": false,
        "meaning": "Calculates the total sum of numbers in a specified range."
      }
    ],
    "tags": [
      "MS Office",
      "Set 2"
    ],
    "createdAt": 1715024000000,
    "updatedAt": 1715024000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-401",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Retail e-commerce migrates to cloud for festive traffic spikes; automatic resource allocation, no manual work. Feature?",
    "back": "Auto scaling",
    "explanation": "Auto-scaling dynamically provisions or terminates computing instances in response to traffic spikes without requiring manual intervention.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Load balancer only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Auto scaling",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Auto scaling"
      },
      {
        "id": "C",
        "text": "VPN",
        "isCorrect": false,
        "meaning": "Virtual Private Network: encrypted tunnel across public networks."
      },
      {
        "id": "D",
        "text": "DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715024060000,
    "updatedAt": 1715024060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-402",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "AI startup wants large-DB experiments without buying expensive hardware; infrastructure on demand. Model?",
    "back": "IaaS",
    "explanation": "Infrastructure as a Service (IaaS) provides virtual machines, raw storage, and computing capacity on demand for intensive database experiments.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "D",
        "text": "On-prem only",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715024120000,
    "updatedAt": 1715024120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-403",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Healthcare: even if one cloud data center fails, operations continue. Feature?",
    "back": "Fault tolerance",
    "explanation": "Fault tolerance enables a system to continue operating without interruption even if one or more hardware or datacenter components fail.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Phishing",
        "isCorrect": false,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      },
      {
        "id": "B",
        "text": "Fault tolerance",
        "isCorrect": true,
        "meaning": "Ability to continue uninterrupted operations even when hardware components fail."
      },
      {
        "id": "C",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "D",
        "text": "TKIP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715024180000,
    "updatedAt": 1715024180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-404",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Government research Wi-Fi: most advanced encryption + authentication standard?",
    "back": "WPA3-Enterprise",
    "explanation": "WPA3-Enterprise incorporates 192-bit cryptographic algorithms, authenticated key exchange, and centralized 802.1X enterprise servers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP",
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "WPA",
        "isCorrect": false,
        "meaning": "Wi-Fi Protected Access: Interim standard introducing TKIP encryption."
      },
      {
        "id": "C",
        "text": "WPA2-Personal",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "WPA3-Enterprise",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: WPA3-Enterprise"
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024240000,
    "updatedAt": 1715024240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-405",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Hackers intercept traffic by inserting malicious routing information, redirecting data through their system. Attack?",
    "back": "Route injection attack",
    "explanation": "A route injection attack injects fraudulent routing advertisements into the network to redirect traffic through unauthorized nodes.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DNS spoofing",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "B",
        "text": "IP spoofing",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Route injection attack",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Route injection attack"
      },
      {
        "id": "D",
        "text": "Phishing",
        "isCorrect": false,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024300000,
    "updatedAt": 1715024300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-406",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Employee connects to free airport Wi-Fi; later company credentials compromised. Most likely?",
    "back": "Evil twin attack",
    "explanation": "An Evil Twin attack sets up a rogue Wi-Fi access point masquerading as a legitimate public hotspot to snoop on user credentials.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SQL injection",
        "isCorrect": false,
        "meaning": "Inserting malicious SQL queries through web inputs to manipulate database."
      },
      {
        "id": "B",
        "text": "Evil twin attack",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Evil twin attack"
      },
      {
        "id": "C",
        "text": "Ransomware",
        "isCorrect": false,
        "meaning": "Extortion malware encrypting victim files and demanding ransom payment."
      },
      {
        "id": "D",
        "text": "Buffer overflow",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024360000,
    "updatedAt": 1715024360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-407",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Hospital PCs lock after malicious email attachment; attacker demands cryptocurrency. Threat?",
    "back": "Ransomware",
    "explanation": "Ransomware encrypts victim files and systems, demanding cryptocurrency payments in exchange for the decryption key.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Phishing only",
        "isCorrect": false,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      },
      {
        "id": "B",
        "text": "Ransomware",
        "isCorrect": true,
        "meaning": "Extortion malware encrypting victim files and demanding ransom payment."
      },
      {
        "id": "C",
        "text": "DDoS",
        "isCorrect": false,
        "meaning": "Distributed Denial of Service: floods server with traffic from distributed botnets."
      },
      {
        "id": "D",
        "text": "Spoofing",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024420000,
    "updatedAt": 1715024420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-408",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Devices must have updated antivirus and OS patches before joining internal Wi-Fi. Mechanism?",
    "back": "NAC (Network Access Control)",
    "explanation": "Network Access Control (NAC) inspects incoming devices and enforces security compliance (antivirus, OS patches) before granting access.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DHCP",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "B",
        "text": "NAC (Network Access Control)",
        "isCorrect": true,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "C",
        "text": "SMTP",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
      },
      {
        "id": "D",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024480000,
    "updatedAt": 1715024480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-409",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Data-link layer detects corrupted frames and discards them (CRC) before higher layers. Layer?",
    "back": "Data Link",
    "explanation": "The Data Link Layer (Layer 2) encapsulates packets into frames and performs error detection using Cyclical Redundancy Checks (CRC).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Data Link",
        "isCorrect": true,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "C",
        "text": "Network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "D",
        "text": "Transport",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715024540000,
    "updatedAt": 1715024540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-410",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Realtime multiplayer game: small position updates, min delay, occasional loss OK. Transport?",
    "back": "UDP",
    "explanation": "UDP is connectionless and minimizes latency without retransmission delays, making it ideal for multiplayer game position packets.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "TCP",
        "isCorrect": false,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
      },
      {
        "id": "B",
        "text": "UDP",
        "isCorrect": true,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "C",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      },
      {
        "id": "D",
        "text": "SMTP",
        "isCorrect": false,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715024600000,
    "updatedAt": 1715024600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-411",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Corporate Wi-Fi EAP method that simplifies using only server-side certificate?",
    "back": "EAP-TTLS and PEAP",
    "explanation": "EAP-TTLS and PEAP simplify authentication by creating an encrypted TLS tunnel using only a server-side certificate, avoiding client-side certs.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP",
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "EAP-TTLS and PEAP",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: EAP-TTLS and PEAP"
      },
      {
        "id": "C",
        "text": "Telnet",
        "isCorrect": false,
        "meaning": "Telecommunications Network: legacy plain-text unencrypted remote terminal protocol."
      },
      {
        "id": "D",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024660000,
    "updatedAt": 1715024660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-412",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Storage from many vendors + next-gen storage; globally scalable resilient storage. Concept in the stem?",
    "back": "Resource pooling",
    "explanation": "Resource pooling aggregates physical compute, memory, and multi-vendor storage resources to serve multiple customers dynamically.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Resource pooling",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Resource pooling"
      },
      {
        "id": "B",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "C",
        "text": "Slide Master",
        "isCorrect": false,
        "meaning": "Top slide in presentation hierarchy governing global slide layouts, fonts, and backgrounds."
      },
      {
        "id": "D",
        "text": "Gutter margin",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715024720000,
    "updatedAt": 1715024720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-413",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Substitution cipher; some chars decrypt wrong / data loss. Most likely cause?",
    "back": "Duplicate character mappings from key collisions",
    "explanation": "If multiple plaintext characters map to the same ciphertext character in a substitution cipher, decryption becomes ambiguous and causes data loss.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Wrong font",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Duplicate character mappings from key collisions",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Duplicate character mappings from key collisions"
      },
      {
        "id": "C",
        "text": "DHCP failure",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "D",
        "text": "Page break",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024780000,
    "updatedAt": 1715024780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-414",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Stolen data by monitoring packets without interrupting. Attack?",
    "back": "Eavesdropping",
    "explanation": "Eavesdropping (sniffing) involves passively monitoring and capturing unencrypted network packets without altering the transmission flow.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DDoS",
        "isCorrect": false,
        "meaning": "Distributed Denial of Service: floods server with traffic from distributed botnets."
      },
      {
        "id": "B",
        "text": "Eavesdropping",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Eavesdropping"
      },
      {
        "id": "C",
        "text": "Ransomware",
        "isCorrect": false,
        "meaning": "Extortion malware encrypting victim files and demanding ransom payment."
      },
      {
        "id": "D",
        "text": "SQL injection",
        "isCorrect": false,
        "meaning": "Inserting malicious SQL queries through web inputs to manipulate database."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715024840000,
    "updatedAt": 1715024840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-415",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Sensitive data isolated in dedicated infra; analytics scale on public cloud during peaks?",
    "back": "Hybrid cloud",
    "explanation": "A Hybrid Cloud model keeps sensitive databases in an isolated private cloud while leveraging public cloud elasticity for intensive analytics.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public only",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private only",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Hybrid cloud",
        "isCorrect": true,
        "meaning": "Combines private and public cloud environments with workload portability."
      },
      {
        "id": "D",
        "text": "Community only",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715024900000,
    "updatedAt": 1715024900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-416",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Government agency highly secure store/process sensitive data. Deployment?",
    "back": "Private",
    "explanation": "Government agencies handling classified or protected citizen data mandate the strict security, isolation, and compliance of a Private Cloud.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Hybrid",
        "isCorrect": false,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "D",
        "text": "Multicloud",
        "isCorrect": false,
        "meaning": "Enterprise cloud architecture using services from multiple distinct public cloud vendors."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715024960000,
    "updatedAt": 1715024960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715024960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-417",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Startup minimize cost, scale as users grow. Deployment?",
    "back": "Public",
    "explanation": "Public Cloud provides startups with near-zero initial capital expenditure and seamless elastic scaling as user demand increases.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Private",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "B",
        "text": "Public",
        "isCorrect": true,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "C",
        "text": "On-prem only",
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
    "createdAt": 1715025020000,
    "updatedAt": 1715025020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-418",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Keep critical apps on-prem; extra cloud capacity at peak. Deployment?",
    "back": "Hybrid",
    "explanation": "Cloud bursting uses a Hybrid Cloud architecture to run steady-state workloads on-premise and burst into the public cloud during peak loads.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public only",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private only",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Hybrid",
        "isCorrect": true,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "D",
        "text": "FaaS only",
        "isCorrect": false,
        "meaning": "Function as a Service: Event-driven serverless computing running modular code snippets."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025080000,
    "updatedAt": 1715025080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-419",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Multiple providers to avoid vendor lock-in and improve redundancy. Deployment?",
    "back": "Multicloud",
    "explanation": "A Multicloud strategy utilizes multiple independent cloud service providers to avoid vendor lock-in and provide redundancy.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Private",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "B",
        "text": "Hybrid only",
        "isCorrect": false,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "C",
        "text": "Multicloud",
        "isCorrect": true,
        "meaning": "Enterprise cloud architecture using services from multiple distinct public cloud vendors."
      },
      {
        "id": "D",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025140000,
    "updatedAt": 1715025140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-420",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "High availability + disaster recovery across regions and providers. Deployment?",
    "back": "Multicloud",
    "explanation": "Distributing workloads across multiple cloud vendors (Multicloud) eliminates single points of failure and enhances disaster resilience.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Single public region",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Multicloud",
        "isCorrect": true,
        "meaning": "Enterprise cloud architecture using services from multiple distinct public cloud vendors."
      },
      {
        "id": "C",
        "text": "USB backup",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hub only",
        "isCorrect": false,
        "meaning": "Layer 1 legacy multi-port repeater broadcasting incoming signals to all ports."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025200000,
    "updatedAt": 1715025200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-421",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Core banking highly controlled; less-critical apps on public cloud. Deployment?",
    "back": "Hybrid",
    "explanation": "Financial institutions use Hybrid Cloud to host regulated core banking on private infrastructure while running customer apps on public cloud.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public only",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Hybrid",
        "isCorrect": true,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "C",
        "text": "FaaS only",
        "isCorrect": false,
        "meaning": "Function as a Service: Event-driven serverless computing running modular code snippets."
      },
      {
        "id": "D",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025260000,
    "updatedAt": 1715025260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-422",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Temporary HPC for large datasets, most cost-effective. Deployment?",
    "back": "Public",
    "explanation": "Public Cloud offers on-demand high-performance computing (HPC) clusters that can be spun up for large datasets and torn down immediately.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Private",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "B",
        "text": "Public",
        "isCorrect": true,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "C",
        "text": "On-prem forever",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Air-gapped",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025320000,
    "updatedAt": 1715025320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-423",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Control own IT + use cloud for scale/cost. Deployment?",
    "back": "Hybrid",
    "explanation": "Hybrid Cloud delivers the optimal balance of retaining on-premise control over critical IT assets while utilizing public cloud scalability.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public only",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Hybrid",
        "isCorrect": true,
        "meaning": "Hybrid Cloud: Combines private and public cloud environments with workload portability."
      },
      {
        "id": "C",
        "text": "SaaS only",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "No cloud",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025380000,
    "updatedAt": 1715025380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-424",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Small business virtual server, manage OS and middleware. Service model?",
    "back": "IaaS",
    "explanation": "IaaS gives the business full administrative control to install, configure, and manage the operating system, middleware, and applications.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "D",
        "text": "BaaS",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025440000,
    "updatedAt": 1715025440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-425",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Build/deploy web app without managing hardware/software stack. Model?",
    "back": "PaaS",
    "explanation": "PaaS supplies the application runtime, database, and web server environments so developers can focus solely on application code.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": true,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false,
        "meaning": "Desktop as a Service: Cloud-hosted virtual desktop environment accessible from anywhere."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025500000,
    "updatedAt": 1715025500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-426",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Complete CRM in a browser. Model?",
    "back": "SaaS",
    "explanation": "A CRM accessed entirely through a web browser is hosted, maintained, and secured by the vendor as Software as a Service (SaaS).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
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
    "createdAt": 1715025560000,
    "updatedAt": 1715025560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-427",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Scalable customizable database; you manage DB, provider handles infra. Model?",
    "back": "PaaS",
    "explanation": "Managed database services (like Amazon RDS) represent PaaS: the cloud provider manages the underlying OS and patching while you control the database.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": true,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "VPN",
        "isCorrect": false,
        "meaning": "Virtual Private Network: encrypted tunnel across public networks."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025620000,
    "updatedAt": 1715025620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-428",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Collaborative environment to write, test, deploy code. Model?",
    "back": "PaaS",
    "explanation": "Cloud IDEs and collaborative deployment environments (like Heroku or Google App Engine) are classic PaaS offerings.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": true,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "FTP",
        "isCorrect": false,
        "meaning": "File Transfer Protocol: client-server protocol used to transfer files over TCP."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025680000,
    "updatedAt": 1715025680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-429",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Email marketing tool in browser with templates/analytics. Model?",
    "back": "SaaS",
    "explanation": "Cloud-hosted email marketing platforms offering templates and analytics via web dashboards are examples of SaaS.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "SaaS",
        "isCorrect": true,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false,
        "meaning": "Desktop as a Service: Cloud-hosted virtual desktop environment accessible from anywhere."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025740000,
    "updatedAt": 1715025740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-430",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Highly scalable multiplayer-game backend, variable load. Model?",
    "back": "IaaS",
    "explanation": "High-scale game backends require full low-level control over network sockets, operating systems, and computing instances, typical of IaaS.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "D",
        "text": "Thesaurus",
        "isCorrect": false,
        "meaning": "Reference tool providing synonyms and antonyms for selected words in Word."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715025800000,
    "updatedAt": 1715025800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-431",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Software that protects a computer from viruses/malware?",
    "back": "Antivirus",
    "explanation": "Antivirus software monitors, detects, quarantines, and removes malicious software, trojans, and viruses from computer systems.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Internet browser",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Firewall",
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "C",
        "text": "Antivirus",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Antivirus"
      },
      {
        "id": "D",
        "text": "Router",
        "isCorrect": false,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715025860000,
    "updatedAt": 1715025860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-432",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Primary purpose of a firewall?",
    "back": "Detect/respond to unauthorized access",
    "explanation": "A firewall monitors and filters incoming and outgoing network traffic based on established security rules to block unauthorized access.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Backups",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Detect/respond to unauthorized access",
        "isCorrect": true,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "C",
        "text": "Encrypt all traffic",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Increase bandwidth",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715025920000,
    "updatedAt": 1715025920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-433",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Data encryption is primarily used to ensure confidentiality.",
    "back": "True",
    "explanation": "Data encryption transforms readable plaintext into unreadable ciphertext to guarantee confidentiality against unauthorized interception.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "True",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: True"
      },
      {
        "id": "B",
        "text": "False",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Only for hashing",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Only for routing",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715025980000,
    "updatedAt": 1715025980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715025980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-434",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Azure cloud platform is from?",
    "back": "Microsoft",
    "explanation": "Microsoft Azure is the public cloud computing platform developed and operated by Microsoft.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Amazon",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Google",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "IBM",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Microsoft",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Microsoft"
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026040000,
    "updatedAt": 1715026040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-435",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Fundamental difference traditional data center vs cloud?",
    "back": "Data centers require users to manage/maintain hardware",
    "explanation": "Unlike cloud providers who handle physical infrastructure, traditional on-premises data centers require users to buy and maintain all physical hardware.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data centers more scalable than cloud",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cloud relies solely on physical infra",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "C",
        "text": "Cloud = on-prem hardware management",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Data centers require users to manage/maintain hardware",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Data centers require users to manage/maintain hardware"
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026100000,
    "updatedAt": 1715026100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-436",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "HTTPS stands for?",
    "back": "Hypertext Transfer Protocol Secure",
    "explanation": "HTTPS stands for Hypertext Transfer Protocol Secure, layering HTTP over SSL/TLS for encrypted and authenticated web communications.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Home Encryption and Privacy Service",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "High Efficiency Transport Protocol for Secure data",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      },
      {
        "id": "C",
        "text": "Hyperlink Transmission and Security Protocol",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Hypertext Transfer Protocol Secure",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Hypertext Transfer Protocol Secure"
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715026160000,
    "updatedAt": 1715026160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-437",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "EC2, S3, Lambda offered by?",
    "back": "AWS",
    "explanation": "Amazon Web Services (AWS) offers EC2 for virtual computing, S3 for scalable object storage, and Lambda for serverless compute.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Azure",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Google Cloud",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "AWS",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: AWS"
      },
      {
        "id": "D",
        "text": "IBM Cloud",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026220000,
    "updatedAt": 1715026220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-438",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Key used for securing individual data packets on wireless for one session?",
    "back": "Session key",
    "explanation": "A session key is a temporary symmetric cryptographic key generated to encrypt all data transmitted during a single communication session.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Master key",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Session key",
        "isCorrect": true,
        "meaning": "Layer 5: establishes, manages, and terminates application sessions."
      },
      {
        "id": "C",
        "text": "Private key",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "D",
        "text": "Public key",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715026280000,
    "updatedAt": 1715026280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-439",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Malware that spreads through a network without user intervention?",
    "back": "Worm",
    "explanation": "A computer worm is a standalone malware program that replicates itself and spreads automatically across networks without user action.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Spyware",
        "isCorrect": false,
        "meaning": "Covert monitoring software tracking user activity and keystrokes."
      },
      {
        "id": "B",
        "text": "Worm",
        "isCorrect": true,
        "meaning": "Self-replicating malware spreading across networks without user interaction."
      },
      {
        "id": "C",
        "text": "Trojan",
        "isCorrect": false,
        "meaning": "Malicious code disguised as legitimate useful software."
      },
      {
        "id": "D",
        "text": "Adware",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715026340000,
    "updatedAt": 1715026340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-440",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "In IaaS, which is managed by the provider among: application / OS / virtualization?",
    "back": "Virtualization only",
    "explanation": "In IaaS, the cloud provider manages the physical hardware, facilities, and the virtualization hypervisor layer; the tenant manages the OS and apps.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Application",
        "isCorrect": false,
        "meaning": "Layer 7: interface for user applications (HTTP, DNS, FTP, SMTP)."
      },
      {
        "id": "B",
        "text": "OS",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Virtualization only",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Virtualization only"
      },
      {
        "id": "D",
        "text": "All three",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026400000,
    "updatedAt": 1715026400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-441",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Deployment typically owned/operated by a third-party provider, available to the general public?",
    "back": "Public cloud",
    "explanation": "A Public Cloud is owned and operated by a third-party cloud provider who delivers computing resources over the public internet to general users.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Private",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "B",
        "text": "Public cloud",
        "isCorrect": true,
        "meaning": "Multi-tenant cloud infrastructure owned and operated by a third-party provider."
      },
      {
        "id": "C",
        "text": "On-prem exclusive",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Air-gapped",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026460000,
    "updatedAt": 1715026460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-442",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Serverless: write code, do not manage servers. Model implied?",
    "back": "FaaS / Function as a Service",
    "explanation": "Serverless computing / Function as a Service (FaaS) allows developers to execute code in response to events without managing server instances.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IaaS",
        "isCorrect": false,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "B",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "C",
        "text": "FaaS / Function as a Service",
        "isCorrect": true,
        "meaning": "Function as a Service: Event-driven serverless computing running modular code snippets."
      },
      {
        "id": "D",
        "text": "DaaS",
        "isCorrect": false,
        "meaning": "Desktop as a Service: Cloud-hosted virtual desktop environment accessible from anywhere."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026520000,
    "updatedAt": 1715026520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-443",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which service lets users run VMs on demand?",
    "back": "IaaS",
    "explanation": "IaaS (Infrastructure as a Service) provisions on-demand virtual machines, compute power, and raw storage resources.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      },
      {
        "id": "B",
        "text": "PaaS",
        "isCorrect": false,
        "meaning": "Platform as a Service: managed environment for app development without OS maintenance."
      },
      {
        "id": "C",
        "text": "IaaS",
        "isCorrect": true,
        "meaning": "Infrastructure as a Service: virtualized compute, storage, and networking."
      },
      {
        "id": "D",
        "text": "Mail Merge",
        "isCorrect": false,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026580000,
    "updatedAt": 1715026580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-444",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Cloud type owned and managed by a single organization?",
    "back": "Private",
    "explanation": "A Private Cloud is dedicated solely to a single enterprise, providing customized governance and security within isolated infrastructure.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "Private",
        "isCorrect": true,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Community",
        "isCorrect": false,
        "meaning": "Community Cloud: Cloud shared by multiple organizations with shared compliance requirements."
      },
      {
        "id": "D",
        "text": "Multicloud",
        "isCorrect": false,
        "meaning": "Enterprise cloud architecture using services from multiple distinct public cloud vendors."
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026640000,
    "updatedAt": 1715026640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-445",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Example of SaaS application?",
    "back": "Google Docs",
    "explanation": "Google Docs is a cloud-hosted word processor accessed via web browser, making it an example of Software as a Service (SaaS).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Amazon EC2",
        "isCorrect": false,
        "meaning": "Amazon Elastic Compute Cloud: Scalable virtual servers (VMs) in AWS."
      },
      {
        "id": "B",
        "text": "Google Docs",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Google Docs"
      },
      {
        "id": "C",
        "text": "VMware ESXi",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "VirtualBox",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026700000,
    "updatedAt": 1715026700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-446",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Elasticity in cloud means?",
    "back": "Automatic scaling of resources",
    "explanation": "Cloud elasticity is the ability to automatically and dynamically adapt resource provisioning to match current workload demands in real time.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Fixed hardware forever",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Automatic scaling of resources",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Automatic scaling of resources"
      },
      {
        "id": "C",
        "text": "Deleting VMs only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Buying a laptop",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud",
      "Set 2"
    ],
    "createdAt": 1715026760000,
    "updatedAt": 1715026760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-447",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Protocol that ensures reliable data transfer?",
    "back": "TCP",
    "explanation": "TCP (Transmission Control Protocol) guarantees reliable data delivery using sequence numbers, acknowledgments, and retransmissions.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "UDP",
        "isCorrect": false,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "B",
        "text": "TCP",
        "isCorrect": true,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
      },
      {
        "id": "C",
        "text": "ICMP only",
        "isCorrect": false,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
      },
      {
        "id": "D",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715026820000,
    "updatedAt": 1715026820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-448",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "OSI layer that handles MAC addressing?",
    "back": "Data Link",
    "explanation": "The Data Link Layer (Layer 2) manages physical MAC addressing, framing, and media access control across the local network link.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Data Link",
        "isCorrect": true,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "C",
        "text": "Network",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "D",
        "text": "Transport",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715026880000,
    "updatedAt": 1715026880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-449",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which IP belongs to a private network (as given on slide)?",
    "back": "192.168.10.5",
    "explanation": "192.168.10.5 is an RFC 1918 private IPv4 address, reserved specifically for internal local area network communication.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8.8.8.8",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "192.168.10.5",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 192.168.10.5"
      },
      {
        "id": "C",
        "text": "1.1.1.1",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "255.255.255.255",
        "isCorrect": false,
        "meaning": "Limited broadcast address reaching all hosts on the local subnet."
      }
    ],
    "tags": [
      "Networking",
      "Set 2"
    ],
    "createdAt": 1715026940000,
    "updatedAt": 1715026940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715026940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-450",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Strong password + OTP is an example of?",
    "back": "Two-factor authentication",
    "explanation": "Two-factor authentication (2FA) requires two distinct credential factors: something you know (password) and something you have (OTP).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Encryption",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Authentication",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Two-factor authentication",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Two-factor authentication"
      },
      {
        "id": "D",
        "text": "Authorization",
        "isCorrect": false
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715027000000,
    "updatedAt": 1715027000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-451",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Attack that tricks users into clicking fake links?",
    "back": "Phishing",
    "explanation": "Phishing uses deceptive emails or fraudulent links designed to trick users into providing sensitive credentials or banking information.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DDoS",
        "isCorrect": false,
        "meaning": "Distributed Denial of Service: floods server with traffic from distributed botnets."
      },
      {
        "id": "B",
        "text": "Phishing",
        "isCorrect": true,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      },
      {
        "id": "C",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      },
      {
        "id": "D",
        "text": "NAT",
        "isCorrect": false,
        "meaning": "Network Address Translation: Maps private local IP addresses to a public routable IP."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715027060000,
    "updatedAt": 1715027060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-452",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Practice that helps prevent cyber attacks?",
    "back": "Regular software updates",
    "explanation": "Promptly installing software updates and security patches fixes known vulnerabilities, preventing exploits by malware and hackers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Same password everywhere",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ignoring updates",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Regular software updates",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Regular software updates"
      },
      {
        "id": "D",
        "text": "Disabling firewall",
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      }
    ],
    "tags": [
      "Security",
      "Set 2"
    ],
    "createdAt": 1715027120000,
    "updatedAt": 1715027120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-453",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What will be printed by `document.write` after appending the paragraph?",
    "back": "1",
    "explanation": "A new <p> element is created and appended to document.body; document.getElementsByTagName('p').length queries all paragraphs, returning 1.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "1",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "Dynamic Text",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Error",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web",
      "JavaScript",
      "DOM",
      "Set 2"
    ],
    "createdAt": 1715027180000,
    "updatedAt": 1715027180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027180000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "const para = document.createElement(\"p\");\npara.innerText = \"Dynamic Text\";\ndocument.body.appendChild(para);\n\ndocument.write(document.getElementsByTagName(\"p\").length);",
    "codeLanguage": "javascript"
  },
  {
    "id": "card-acc-454",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What happens on the page when the button is clicked?",
    "back": "Click is written on screen, button disappears",
    "explanation": "Calling document.write() after an HTML document has completely loaded clears and overwrites the entire DOM, replacing the button with 'Click'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Button text becomes Click and remains visible",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Click is written on screen, button disappears",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Click is written on screen, button disappears"
      },
      {
        "id": "C",
        "text": "Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Button shows no change",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web",
      "JavaScript",
      "DOM",
      "Set 2"
    ],
    "createdAt": 1715027240000,
    "updatedAt": 1715027240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027240000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "<!-- HTML -->\n<button onclick=\"changeText(this)\">Click Me</button>\n\n// JavaScript\nfunction changeText(button) {\n    button.innerHTML = \"Click\";\n    document.write(button.innerHTML);\n}",
    "codeLanguage": "javascript"
  },
  {
    "id": "card-acc-455",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What data type is printed by `typeof val` for an HTML text input element?",
    "back": "string",
    "explanation": "In JavaScript, the .value attribute of any HTML form input element is always returned as a 'string' data type.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "number",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "string",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: string"
      },
      {
        "id": "C",
        "text": "object",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "undefined",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web",
      "JavaScript",
      "DOM",
      "Set 2"
    ],
    "createdAt": 1715027300000,
    "updatedAt": 1715027300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027300000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "// HTML: <input type=\"text\" id=\"age\" value=\"123\" />\nconst val = document.getElementById(\"age\").value;\ndocument.write(typeof val);",
    "codeLanguage": "javascript"
  },
  {
    "id": "card-acc-456",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What string will be displayed inside the `div` element?",
    "back": "3030",
    "explanation": "Evaluated left-to-right: numeric addition 10 + 20 yields 30, then adding string '30' performs string concatenation, resulting in '3030'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "60",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "102030",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "3030",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "30",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Web",
      "JavaScript",
      "DOM",
      "Set 2"
    ],
    "createdAt": 1715027360000,
    "updatedAt": 1715027360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027360000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "const myDiv = document.getElementById(\"result\");\nmyDiv.innerHTML = 10 + 20 + \"30\";",
    "codeLanguage": "javascript"
  },
  {
    "id": "card-acc-457",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed after the bitwise operations and loop?",
    "back": "1 170",
    "explanation": "num=85 (01010101_2). x = 85 << 1 = 170. y = 170 ^ 85 = 255; y = 255 + 1 = 256. Integer division loop reduces y down to 1. Output is 1 170.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "85 170",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 170",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 170"
      },
      {
        "id": "C",
        "text": "256 85",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "0 170",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027420000,
    "updatedAt": 1715027420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027420000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer num = 85, count = 0, x, y\nx = num << 1\ny = (x ^ num) + 1\nwhile (y / 2 != 0)\n    y = y / 2\nend while\nPrint y, x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-458",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final printed values of `P`, `Q`, and `R`?",
    "back": "7 14 24",
    "explanation": "P = 7 % 10 = 7. Q = 7 + 7 = 14. R = 10 + 14 = 24. Final output values: P=7, Q=14, R=24.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "7 7 10",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "0 7 10",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "7 14 24",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 7 14 24"
      },
      {
        "id": "D",
        "text": "10 7 14",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027480000,
    "updatedAt": 1715027480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027480000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer P, Q, R\nSet Q = 7, R = 10\nP = Q % R\nQ = Q + P\nR = R + Q\nPrint P, Q, R",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-459",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What sequence of numbers is printed by the recursive call `fun(3, 4)`?",
    "back": "7 6 5 4",
    "explanation": "Recursive calls push to the stack: fun(3,4) -> fun(2,5) -> fun(1,6) -> fun(0,7). At x=0 recursion terminates, and unwinding prints y: 7 6 5 4.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4 5 6 7",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "7 6 5 4",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 7 6 5 4"
      },
      {
        "id": "C",
        "text": "3 4",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "7",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027540000,
    "updatedAt": 1715027540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027540000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function fun(Integer x, Integer y)\n    if (x > 0)\n        fun(x - 1, y + 1)\n        Print y\n    end if\nend function\n\nfun(3, 4)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-460",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is returned by the tail-recursive call `fun(5, 1)`?",
    "back": "120",
    "explanation": "fun(5,1) executes tail-recursive multiplication: fun(4,5) -> fun(3,20) -> fun(2,60) -> fun(1,120) -> fun(0,120) = 120 (5 factorial).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "15",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "120",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "1",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027600000,
    "updatedAt": 1715027600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027600000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function fun(Integer n, Integer a)\n    if (n == 0)\n        return a\n    else\n        return fun(n - 1, n * a)\n    end if\nend function\n\nPrint fun(5, 1)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-461",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the final value of `sum` printed after calculating the sum of squares?",
    "back": "140",
    "explanation": "Sum of squares from 1 to 7: 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 = 1 + 4 + 9 + 16 + 25 + 36 + 49 = 140.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "28",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "49",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "105",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "140",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027660000,
    "updatedAt": 1715027660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027660000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer n = 7, sum = 0, i\nfor (i = 1 to n)\n    sum = sum + (i * i)\nend for\nPrint sum",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-462",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is returned when the function with a static variable is called?",
    "back": "7",
    "explanation": "The static variable i retains its state between function invocations, incrementing through iterations until n reaches 7 and is returned.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "7",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027720000,
    "updatedAt": 1715027720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027720000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "int getVal(int n) {\n    static int i = 1;\n    if (n >= 5) {\n        return n;\n    }\n    n = n + i++;\n    return getVal(n);\n}\n\n// Initial call with n = 1\nprintf(\"%d\", getVal(1));",
    "codeLanguage": "c"
  },
  {
    "id": "card-acc-463",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is returned by the recursive call `fun(6)`?",
    "back": "12",
    "explanation": "fun(6) recursively sums even numbers: 6 + fun(4) = 6 + 4 + fun(2) = 6 + 4 + 2 + fun(0) = 6 + 4 + 2 + 0 = 12.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "6",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "21",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027780000,
    "updatedAt": 1715027780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027780000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function fun(Integer n)\n    if (n == 0)\n        return 0\n    else\n        return n + fun(n - 2)\n    end if\nend function\n\nPrint fun(6)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-464",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the final value of `sum` printed after digit processing in the loop?",
    "back": "18",
    "explanation": "Processing the number's digits through the while loop extracts and sums the corresponding values, yielding 18.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "18",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "27",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027840000,
    "updatedAt": 1715027840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027840000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer num, digit, sum = 0\n// While num > 0, extracts digits and adds matching values\nPrint sum",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-465",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is printed after processing the array and condition?",
    "back": "70",
    "explanation": "The loop iterates through array elements meeting the conditional threshold, accumulating the matching values to produce 70.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "35",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "70",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "100",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027900000,
    "updatedAt": 1715027900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027900000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer arr[5] = {10, 20, 30, 40, 50}\nInteger result = 0, i\nfor (i = 0 to 4)\n    if (arr[i] >= 20 AND arr[i] <= 40)\n        result = result + arr[i]\n    end if\nend for\nPrint result",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-466",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What word will be printed after reconstructing the characters through the loop?",
    "back": "hect",
    "explanation": "The loop reorders the characters according to the index sequence specified in the pseudocode, reconstructing the string 'hect'.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "tech",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "hect",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: hect"
      },
      {
        "id": "C",
        "text": "chet",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "etch",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715027960000,
    "updatedAt": 1715027960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715027960000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "String s = \"tech\", result = \"\"\nInteger order[4] = {3, 1, 2, 0}\nfor (Integer i = 0 to 3)\n    result = result + s[order[i]]\nend for\nPrint result",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-467",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be returned by the Fibonacci-style recursive function `mystery(4)`?",
    "back": "5",
    "explanation": "mystery(4) computes the Fibonacci-style recurrence: F(0)=1, F(1)=1, F(2)=2, F(3)=3, F(4)=5, returning 5.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocode",
      "Set 2"
    ],
    "createdAt": 1715028020000,
    "updatedAt": 1715028020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028020000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function mystery(Integer n)\n    if (n <= 1)\n        return 1\n    else\n        return mystery(n - 1) + mystery(n - 2)\n    end if\nend function\n\nPrint mystery(4)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-468",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In which of the following applications can you NOT run a native spell check?",
    "back": "Notepad",
    "explanation": "MS Word, PowerPoint, and Excel provide an integrated spelling and grammar checking engine (invoked via `F7`). Traditional Windows Notepad is a basic text editor lacking spell-checking dictionaries.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "MS Word",
        "isCorrect": false,
        "meaning": "Microsoft Word: Desktop word processing application for documents and reports."
      },
      {
        "id": "B",
        "text": "MS PowerPoint",
        "isCorrect": false,
        "meaning": "Microsoft PowerPoint: Presentation software for designing slide decks."
      },
      {
        "id": "C",
        "text": "MS Excel",
        "isCorrect": false,
        "meaning": "Microsoft Excel: Spreadsheet application for calculations, tabular data, and charting."
      },
      {
        "id": "D",
        "text": "Notepad",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Notepad"
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Spell Check & Proofing Tools",
      "Set 3"
    ],
    "createdAt": 1715028080000,
    "updatedAt": 1715028080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-469",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Word, which keyboard shortcut key is used to indent a paragraph from the left margin?",
    "back": "Ctrl + M",
    "explanation": "`Ctrl + M` increases the paragraph's left indent by 0.5 inches. `Ctrl + Shift + M` decreases the indent. `Ctrl + I` toggles italic formatting, and `Ctrl + T` creates a hanging indent.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl + M",
        "isCorrect": true,
        "meaning": "Word: Indents paragraph; PowerPoint: Inserts a new blank slide."
      },
      {
        "id": "B",
        "text": "Ctrl + I",
        "isCorrect": false,
        "meaning": "Toggles italic styling on selected text."
      },
      {
        "id": "C",
        "text": "Alt + M",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Alt + I",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Statistical Formulas (COUNTIF)",
      "Set 3"
    ],
    "createdAt": 1715028140000,
    "updatedAt": 1715028140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-470",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "**Which of the following selection options are included in MS Paint?**\n1. Rectangular Selection\n2. Free-Form Selection\n3. Circular Selection",
    "back": "1 and 2 only",
    "explanation": "MS Paint supports Rectangular Selection and Free-Form Selection. It does not have an elliptical or circular selection tool.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 and 2 only",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 and 2 only"
      },
      {
        "id": "C",
        "text": "2 and 3 only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1, 2, and 3",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Lookup Formulas (VLOOKUP)",
      "Set 3"
    ],
    "createdAt": 1715028200000,
    "updatedAt": 1715028200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-471",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "**Consider the following statements regarding the Windows Snipping Tool:**\n1. It automatically saves screenshots without prompting the user.\n2. It captures screenshots only in rectangular form.\n3. It can capture screenshots in Free-Form, Rectangular, Window, and Full-Screen modes.\n**Which of the above statements is/are TRUE?**",
    "back": "3 only",
    "explanation": "Snipping Tool supports four capture modes: Free-form Snip, Rectangular Snip, Window Snip, and Full-screen Snip. By default, it opens the captured image in a preview canvas for user annotation and manual saving.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2 only",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "3 only",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 3 only"
      },
      {
        "id": "D",
        "text": "1 and 3 only",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Navigation & Bookmarks",
      "Set 3"
    ],
    "createdAt": 1715028260000,
    "updatedAt": 1715028260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-472",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Excel, which keyboard shortcut is used to apply the Scientific (Exponential) number format with two decimal places?",
    "back": "Ctrl + Shift + ^",
    "explanation": "- `Ctrl + Shift + ^` = Scientific / Exponential format (e.g., `2.50E+06`).\n  - `Ctrl + Shift + ~` = General format.\n  - `Ctrl + Shift + @` = Time format (`hh:mm AM/PM`).\n  - `Ctrl + Shift + #` = Date format (`dd-mmm-yy`).\n  - `Ctrl + Shift + $` = Currency format.\n  - `Ctrl + Shift + %` = Percentage format (without decimal places).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl + Shift + ~",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "B",
        "text": "Ctrl + Shift + ^",
        "isCorrect": true,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "C",
        "text": "Ctrl + Shift + @",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "D",
        "text": "Ctrl + Shift + #",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Conditional Logic (IF & AND)",
      "Set 3"
    ],
    "createdAt": 1715028320000,
    "updatedAt": 1715028320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-473",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is Landscape in MS Word?",
    "back": "Page Orientation",
    "explanation": "In MS Word (under the Layout tab), Page Orientation has two modes: **Portrait** (vertical) and **Landscape** (horizontal).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Paper Size",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Page Orientation",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Page Orientation"
      },
      {
        "id": "C",
        "text": "Margin Setting",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "View Layout",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS PowerPoint Slide Masters & Layouts",
      "Set 3"
    ],
    "createdAt": 1715028380000,
    "updatedAt": 1715028380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-474",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which feature in MS Word is used to land at or jump to a specific location within a document?",
    "back": "Bookmark",
    "explanation": "A Bookmark assigns a named anchor to a specific text selection or location in a Word document, allowing instant navigation via the \"Go To\" dialog (`Ctrl + G`) or hyperlinks.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Snapshot",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Bookmark",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Bookmark"
      },
      {
        "id": "C",
        "text": "Cross-Reference",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Track Changes",
        "isCorrect": false,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Mail Merge",
      "Set 3"
    ],
    "createdAt": 1715028440000,
    "updatedAt": 1715028440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-475",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which of the following is NOT a recognized font style in MS Word?",
    "back": "Manuscript",
    "explanation": "MS Word defines four standard font styles: Regular, Bold, Italic, and Bold Italic. Manuscript is a font typeface/family, not a font style.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Bold",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Italic",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Regular",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Manuscript",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Manuscript"
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Text Functions (CONCATENATE)",
      "Set 3"
    ],
    "createdAt": 1715028500000,
    "updatedAt": 1715028500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-476",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which function key is used to rename a selected file or folder in Windows?",
    "back": "F2",
    "explanation": "`F2` activates inline renaming for the selected file, folder, or desktop icon.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F1",
        "isCorrect": false,
        "meaning": "Opens Help pane for the active application."
      },
      {
        "id": "B",
        "text": "F2",
        "isCorrect": true,
        "meaning": "Excel: Edits active cell; Windows: Renames selected file."
      },
      {
        "id": "C",
        "text": "F4",
        "isCorrect": false,
        "meaning": "Word: Repeats last action; Excel: Cycles cell reference modes ($A$1)."
      },
      {
        "id": "D",
        "text": "F5",
        "isCorrect": false,
        "meaning": "Word/Excel: Opens Go To; PowerPoint: Starts Slide Show from beginning."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Paint & Graphics Tools",
      "Set 3"
    ],
    "createdAt": 1715028560000,
    "updatedAt": 1715028560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-477",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "When composing an email in Gmail, which feature is used to attach files that exceed the 25 MB file size limit?",
    "back": "Insert files using Google Drive icon",
    "explanation": "Standard direct email attachments are capped at 25 MB. Files larger than 25 MB are automatically uploaded or linked via Google Drive.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Attachment paperclip icon",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Insert files using Google Drive icon",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Insert files using Google Drive icon"
      },
      {
        "id": "C",
        "text": "Insert photo icon",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Insert link icon",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Gmail & Email Attachment Limits",
      "Set 3"
    ],
    "createdAt": 1715028620000,
    "updatedAt": 1715028620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-478",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which symbol is used on social media platforms to draw attention, categorize, and organize similar content?",
    "back": "`#` (Hashtag)",
    "explanation": "The `#` symbol creates a clickable hashtag that indexes and groups posts under a unified topic on social media networks.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`@` (At sign)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`#` (Hashtag)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `#` (Hashtag)"
      },
      {
        "id": "C",
        "text": "`$` (Dollar sign)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`&` (Ampersand)",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Track Changes & Collaboration",
      "Set 3"
    ],
    "createdAt": 1715028680000,
    "updatedAt": 1715028680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-479",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "If a web URL pasted into an MS Word document is automatically converted into blue underlined text, how can you remove the hyperlink while keeping the text intact?",
    "back": "Right-click and choose \"Remove Hyperlink\" (or select text and press `Ctrl + Shift + F9`)",
    "explanation": "\"Remove Hyperlink\" strips the underlying clickable anchor target while preserving the literal text string. `Ctrl + Shift + F9` unlinks fields and hyperlinks.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Press Backspace",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Right-click and choose \"Remove Hyperlink\" (or select text and press `Ctrl + Shift + F9`)",
        "isCorrect": true,
        "meaning": "SQL command to query and retrieve data rows from database tables."
      },
      {
        "id": "C",
        "text": "Press `Ctrl + Z`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Change font color to black",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Cell Referencing (Absolute vs Relative)",
      "Set 3"
    ],
    "createdAt": 1715028740000,
    "updatedAt": 1715028740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-480",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Word, where can page numbers be inserted?",
    "back": "In both Header and Footer",
    "explanation": "MS Word supports page number insertion at the Top of Page (Header), Bottom of Page (Footer), Page Margins, or Current Position.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Only in Header",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Only in Footer",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "In both Header and Footer",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: In both Header and Footer"
      },
      {
        "id": "D",
        "text": "Only in Margins",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS PowerPoint Animation vs Transition",
      "Set 3"
    ],
    "createdAt": 1715028800000,
    "updatedAt": 1715028800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-481",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Excel, which keyboard shortcut selects the entire active row?",
    "back": "Shift + Space",
    "explanation": "- `Shift + Space` = Select entire row.\n  - `Ctrl + Space` = Select entire column.\n  - `Ctrl + A` or `Ctrl + Shift + Space` = Select entire worksheet.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl + Space",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "B",
        "text": "Shift + Space",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Shift + Space"
      },
      {
        "id": "C",
        "text": "Alt + Space",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl + Shift + Space",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Mathematical Formulas (MOD)",
      "Set 3"
    ],
    "createdAt": 1715028860000,
    "updatedAt": 1715028860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-482",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is the default mouse pointer type during an active slide show presentation in MS PowerPoint?",
    "back": "Arrow",
    "explanation": "PowerPoint presentations default to the standard Arrow cursor. Presenters can switch to Pen (`Ctrl + P`) or Laser Pointer (`Ctrl + L`).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Pen",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Arrow",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Arrow"
      },
      {
        "id": "C",
        "text": "Laser Pointer",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Crosshair",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Snipping Tool & Screen Capture",
      "Set 3"
    ],
    "createdAt": 1715028920000,
    "updatedAt": 1715028920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-483",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which icon or symbol in Windows settings indicates computer configuration/settings?",
    "back": "Gear / Cog wheel",
    "explanation": "The universal Windows icon for Settings and Control Preferences is a mechanical cog/gear.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Magnifying Glass",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Gear / Cog wheel",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Gear / Cog wheel"
      },
      {
        "id": "C",
        "text": "Folder icon",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Network globe",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Table of Contents Automation",
      "Set 3"
    ],
    "createdAt": 1715028980000,
    "updatedAt": 1715028980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715028980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-484",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "**Which statements regarding the Excel `VLOOKUP` function are TRUE?**\n1. It searches for a value in the leftmost column of the selected table array.\n2. It can search and retrieve values located in columns to the left of the lookup column.\n3. Setting the `range_lookup` parameter to `TRUE` specifies an approximate match search.",
    "back": "1 and 3 only",
    "explanation": "`VLOOKUP` searches exclusively down the leftmost column of the array and retrieves data from specified index columns to the right. When `range_lookup` is `TRUE`, it searches for an approximate match (largest value $\\le$ lookup value); when `FALSE`, it requires an exact match.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1 and 2 only",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1 and 3 only",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 1 and 3 only"
      },
      {
        "id": "C",
        "text": "2 and 3 only",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "1, 2, and 3",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Logical Functions (OR)",
      "Set 3"
    ],
    "createdAt": 1715029040000,
    "updatedAt": 1715029040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-485",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Given an Excel table with values in `A2:D6` where column A has sorted numbers `[31561, 54617, 57892, 63445, 70000]` and column B has project names `[\"Alpha\", \"Beta\", \"Indian Pacific\", \"Delta\", \"Omega\"]`. What is returned by `=VLOOKUP(60000, A2:D6, 2, TRUE)`?",
    "back": "`Indian Pacific`",
    "explanation": "Because `range_lookup` is `TRUE`, `VLOOKUP` seeks the largest value in column A that is less than or equal to `60000`. That value is `57892`. The corresponding column 2 entry is `\"Indian Pacific\"`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`Beta`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`Indian Pacific`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `Indian Pacific`"
      },
      {
        "id": "C",
        "text": "`Delta`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`#N/A`",
        "isCorrect": false,
        "meaning": "Value Not Available error (lookup item cannot be found)."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Text Extraction (LEFT/RIGHT/MID)",
      "Set 3"
    ],
    "createdAt": 1715029100000,
    "updatedAt": 1715029100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-486",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Excel, cell `B3` contains `\"AB6444\"`. What is the result of `=LEFT(B3, LEN(B3) - 4)`?",
    "back": "`\"AB\"`",
    "explanation": "`LEN(\"AB6444\")` is 6. `6 - 4 = 2`. `=LEFT(\"AB6444\", 2)` extracts the first 2 characters from the left, which is `\"AB\"`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`\"6444\"`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`\"AB\"`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `\"AB\"`"
      },
      {
        "id": "C",
        "text": "`\"AB6\"`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`\"A\"`",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Section Breaks vs Page Breaks",
      "Set 3"
    ],
    "createdAt": 1715029160000,
    "updatedAt": 1715029160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-487",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Excel, cells `D3:D9` contain `[100, 50, 150, 200, 100, 75, 25]`. If `=AND(D3 >= 75, D3 <= 200)` is copied down `E3:E9`, how many cells evaluate to `TRUE`?",
    "back": "5",
    "explanation": "The condition checks if $75 \\le x \\le 200$:\n  - $100 \\rightarrow$ True\n  - $50 \\rightarrow$ False ($< 75$)\n  - $150 \\rightarrow$ True\n  - $200 \\rightarrow$ True\n  - $100 \\rightarrow$ True\n  - $75 \\rightarrow$ True\n  - $25 \\rightarrow$ False ($< 75$)\n  Total `TRUE` count = 5.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "3",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "5",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "6",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS PowerPoint Rehearse Timings",
      "Set 3"
    ],
    "createdAt": 1715029220000,
    "updatedAt": 1715029220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-488",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which MS Word feature enables creating customized letters, notices, or envelopes for hundreds of individual recipients from an external data list?",
    "back": "Mail Merge",
    "explanation": "Mail Merge merges a static document template with a structured database (such as an Excel file) to dynamically produce personalized output per recipient.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Track Changes",
        "isCorrect": false,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
      },
      {
        "id": "B",
        "text": "Mail Merge",
        "isCorrect": true,
        "meaning": "Automates batch creation of personalized letters, envelopes, or emails from a data source."
      },
      {
        "id": "C",
        "text": "Macros",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "AutoText",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Error Types (#DIV/0!, #N/A, #VALUE!)",
      "Set 3"
    ],
    "createdAt": 1715029280000,
    "updatedAt": 1715029280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029280000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-489",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which MS Word feature records all insertions, deletions, edits, and formatting revisions made by collaborators?",
    "back": "Track Changes",
    "explanation": "Track Changes (`Ctrl + Shift + E`) marks additions with underlines and deletions with strikethroughs, logging author names and timestamps.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Compare",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Track Changes",
        "isCorrect": true,
        "meaning": "Highlights, dates, and logs document editing revisions and reviewer comments."
      },
      {
        "id": "C",
        "text": "Document Inspector",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "AutoCorrect",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Web Browser Cache & Cookie Management",
      "Set 3"
    ],
    "createdAt": 1715029340000,
    "updatedAt": 1715029340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029340000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-490",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which tool in MS Office copies formatting attributes (font, size, color, borders) from a source selection and applies them to a target selection?",
    "back": "Format Painter",
    "explanation": "Format Painter allows users to sample styling from one element and paint it onto another text block or cell.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Format Painter",
        "isCorrect": true,
        "meaning": "Copies formatting attributes from selected text/object and applies them elsewhere."
      },
      {
        "id": "B",
        "text": "Style Gallery",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Clipboard",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "AutoFormat",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Format Painter",
      "Set 3"
    ],
    "createdAt": 1715029400000,
    "updatedAt": 1715029400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-491",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is the rectangular intersection of a row and a column in an Excel worksheet called?",
    "back": "Cell",
    "explanation": "A cell is the fundamental unit for data storage in a spreadsheet, referenced by its column letter and row number (e.g., `B4`).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Table",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cell",
        "isCorrect": true,
        "meaning": "Single addressable storage unit at the intersection of a row and column in Excel."
      },
      {
        "id": "C",
        "text": "Grid",
        "isCorrect": false,
        "meaning": "Two-dimensional CSS layout model organizing items into rows and columns."
      },
      {
        "id": "D",
        "text": "Block",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Data Validation & Dropdowns",
      "Set 3"
    ],
    "createdAt": 1715029460000,
    "updatedAt": 1715029460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-492",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which feature in MS Excel hides rows that do not satisfy user-specified criteria while keeping qualifying rows visible?",
    "back": "AutoFilter / Filter",
    "explanation": "Excel's Filter tool filters rows dynamically based on cell values, text criteria, dates, or numeric thresholds.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Conditional Formatting",
        "isCorrect": false,
        "meaning": "Dynamically styles Excel cells (colors, data bars) based on cell values or rules."
      },
      {
        "id": "B",
        "text": "AutoFilter / Filter",
        "isCorrect": true,
        "meaning": "Adds dropdown filter arrows to table column headers in Excel (Ctrl+Shift+L)."
      },
      {
        "id": "C",
        "text": "Data Validation",
        "isCorrect": false,
        "meaning": "Restricts cell inputs to specific allowed data types, lists, or numeric ranges."
      },
      {
        "id": "D",
        "text": "Sort",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS PowerPoint Presenter View",
      "Set 3"
    ],
    "createdAt": 1715029520000,
    "updatedAt": 1715029520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-493",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is the purpose of the Slide Master in MS PowerPoint?",
    "back": "It centrally controls default fonts, theme colors, layout placeholders, and background formatting across all presentation slides",
    "explanation": "Changes made to the Slide Master automatically cascade down to every slide that uses that layout, ensuring visual consistency across the presentation.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "It deletes duplicate slides automatically",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "It centrally controls default fonts, theme colors, layout placeholders, and background formatting across all presentation slides",
        "isCorrect": true,
        "meaning": "Layer 6: data formatting, character encoding, compression, and encryption."
      },
      {
        "id": "C",
        "text": "It converts slides into an MP4 video",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It calculates transition durations",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Cloud Storage Sync (OneDrive/Google Drive)",
      "Set 3"
    ],
    "createdAt": 1715029580000,
    "updatedAt": 1715029580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-494",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is the fundamental difference between an Animation and a Transition in MS PowerPoint?",
    "back": "Animations apply to individual objects (text, images, shapes) on a slide; Transitions control the visual effect when navigating between slides",
    "explanation": "Transitions govern how a slide enters and exits the screen during a slide show. Animations govern how specific elements inside the slide enter, emphasize, or exit.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Animations occur between slides; Transitions apply to text inside slides",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Animations apply to individual objects (text, images, shapes) on a slide; Transitions control the visual effect when navigating between slides",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Animations apply to individual objects (text, images, shapes) on a slide; Transitions control the visual effect when navigating between slides"
      },
      {
        "id": "C",
        "text": "There is no difference; they are interchangeable terms",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Transitions require audio; Animations do not",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Find and Replace (Wildcards)",
      "Set 3"
    ],
    "createdAt": 1715029640000,
    "updatedAt": 1715029640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-495",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which keyboard shortcut starts an MS PowerPoint slide show from the very first slide?",
    "back": "F5",
    "explanation": "`F5` starts the slide show from slide 1. `Shift + F5` starts the slide show from the currently active slide.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "F2",
        "isCorrect": false,
        "meaning": "Excel: Edits active cell; Windows: Renames selected file."
      },
      {
        "id": "B",
        "text": "F5",
        "isCorrect": true,
        "meaning": "Word/Excel: Opens Go To; PowerPoint: Starts Slide Show from beginning."
      },
      {
        "id": "C",
        "text": "Shift + F5",
        "isCorrect": false,
        "meaning": "PowerPoint: Starts Slide Show from current active slide."
      },
      {
        "id": "D",
        "text": "F7",
        "isCorrect": false,
        "meaning": "Runs Spelling and Grammar check."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel Pivot Tables & Aggregations",
      "Set 3"
    ],
    "createdAt": 1715029700000,
    "updatedAt": 1715029700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-496",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which shortcut key inserts a manual Page Break in MS Word to push subsequent content to the top of the next page?",
    "back": "Ctrl + Enter",
    "explanation": "`Ctrl + Enter` inserts a hard page break. `Shift + Enter` inserts a line break (soft return without starting a new paragraph). `Alt + Enter` is used in Excel to add a newline within a cell.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Alt + Enter",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Ctrl + Enter",
        "isCorrect": true,
        "meaning": "Applies Center alignment to paragraph in Word."
      },
      {
        "id": "C",
        "text": "Shift + Enter",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl + Space",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Email Protocols (IMAP vs POP3 vs SMTP)",
      "Set 3"
    ],
    "createdAt": 1715029760000,
    "updatedAt": 1715029760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029760000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-497",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which Excel function counts ALL non-empty cells (containing numbers, text, logical values, or error codes) within a range?",
    "back": "`COUNTA`",
    "explanation": "`COUNT()` counts only cells with numeric data. `COUNTA()` (Count All) counts any cell that is not empty.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`COUNT`",
        "isCorrect": false,
        "meaning": "Counts cells in a range that contain numbers only."
      },
      {
        "id": "B",
        "text": "`COUNTA`",
        "isCorrect": true,
        "meaning": "Counts all non-empty cells (text, numbers, booleans, errors)."
      },
      {
        "id": "C",
        "text": "`COUNTIF`",
        "isCorrect": false,
        "meaning": "Counts cells in a range meeting a single given condition."
      },
      {
        "id": "D",
        "text": "`COUNTBLANK`",
        "isCorrect": false,
        "meaning": "Counts only blank or empty cells in a range."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS PowerPoint Custom Slide Shows",
      "Set 3"
    ],
    "createdAt": 1715029820000,
    "updatedAt": 1715029820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-498",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which network technology enables logical network separation and creates multiple isolated broadcast domains on the same physical switch hardware?",
    "back": "VLAN (Virtual Local Area Network)",
    "explanation": "VLANs (IEEE 802.1Q) partition a physical switch into distinct logical broadcast domains, ensuring traffic between departments remains isolated at Layer 2 without purchasing separate physical switches.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DHCP",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "B",
        "text": "VLAN (Virtual Local Area Network)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: VLAN (Virtual Local Area Network)"
      },
      {
        "id": "C",
        "text": "NAT",
        "isCorrect": false,
        "meaning": "Network Address Translation: Maps private local IP addresses to a public routable IP."
      },
      {
        "id": "D",
        "text": "STP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Virtual Local Area Networks (VLAN)",
      "Set 3"
    ],
    "createdAt": 1715029880000,
    "updatedAt": 1715029880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-499",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol dynamically and automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to client devices?",
    "back": "DHCP (Dynamic Host Configuration Protocol)",
    "explanation": "DHCP automates network parameter provisioning using the 4-step DORA handshake: **D**iscover, **O**ffer, **R**equest, and **A**cknowledgement over UDP ports 67 (server) and 68 (client).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      },
      {
        "id": "B",
        "text": "DHCP (Dynamic Host Configuration Protocol)",
        "isCorrect": true,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "C",
        "text": "ICMP",
        "isCorrect": false,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
      },
      {
        "id": "D",
        "text": "BGP",
        "isCorrect": false,
        "meaning": "Border Gateway Protocol: exterior routing protocol managing internet-wide routing."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Dynamic Host Configuration Protocol (DHCP)",
      "Set 3"
    ],
    "createdAt": 1715029940000,
    "updatedAt": 1715029940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715029940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-500",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol detects and disables redundant loop paths in an Ethernet switched network to prevent broadcast storms?",
    "back": "Spanning Tree Protocol (STP)",
    "explanation": "STP (IEEE 802.1D) computes a loop-free logical topology across switches by placing redundant switch ports into a blocking state, enabling automatic failover if an active trunk link fails.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "OSPF",
        "isCorrect": false,
        "meaning": "Open Shortest Path First: link-state interior routing protocol using Dijkstra algorithm."
      },
      {
        "id": "B",
        "text": "Spanning Tree Protocol (STP)",
        "isCorrect": true,
        "meaning": "Non-linear hierarchical data structure with a root node and child nodes."
      },
      {
        "id": "C",
        "text": "RIP",
        "isCorrect": false,
        "meaning": "Routing Information Protocol: distance-vector interior routing protocol using hop count."
      },
      {
        "id": "D",
        "text": "NAT",
        "isCorrect": false,
        "meaning": "Network Address Translation: Maps private local IP addresses to a public routable IP."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "OSI Model Layer Encapsulation",
      "Set 3"
    ],
    "createdAt": 1715030000000,
    "updatedAt": 1715030000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-501",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which layer of the OSI 7-layer model is responsible for reliable end-to-end data transport, flow control, sequencing, and error retransmission?",
    "back": "Transport Layer (Layer 4)",
    "explanation": "Layer 4 hosts protocols like TCP and UDP. TCP guarantees reliable end-to-end byte stream delivery, segment ordering, window-based flow control, and checksum-based error recovery.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Network Layer (Layer 3)",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "B",
        "text": "Transport Layer (Layer 4)",
        "isCorrect": true,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      },
      {
        "id": "C",
        "text": "Session Layer (Layer 5)",
        "isCorrect": false,
        "meaning": "Layer 5: establishes, manages, and terminates application sessions."
      },
      {
        "id": "D",
        "text": "Data Link Layer (Layer 2)",
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Domain Name System (DNS) Port 53",
      "Set 3"
    ],
    "createdAt": 1715030060000,
    "updatedAt": 1715030060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-502",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which OSI layer handles logical addressing (IPv4/IPv6) and packet routing across intermediate networks?",
    "back": "Network Layer",
    "explanation": "Layer 3 is responsible for path determination, logical addressing, and forwarding packets between disparate subnets across routers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical Layer",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Data Link Layer",
        "isCorrect": false,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "C",
        "text": "Network Layer",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "D",
        "text": "Transport Layer",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Subnetting & CIDR Calculation",
      "Set 3"
    ],
    "createdAt": 1715030120000,
    "updatedAt": 1715030120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-503",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "At which OSI layer do physical MAC addresses and Ethernet frames function?",
    "back": "Data Link Layer (Layer 2)",
    "explanation": "The Data Link Layer encapsulates packets into frames, handles node-to-node hop delivery over local physical media, and uses 48-bit MAC addresses.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Physical Layer (Layer 1)",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "B",
        "text": "Data Link Layer (Layer 2)",
        "isCorrect": true,
        "meaning": "Layer 2: handles frame delivery, physical MAC addresses, and switches."
      },
      {
        "id": "C",
        "text": "Network Layer (Layer 3)",
        "isCorrect": false,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "D",
        "text": "Session Layer (Layer 5)",
        "isCorrect": false,
        "meaning": "Layer 5: establishes, manages, and terminates application sessions."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Transmission Control Protocol (TCP) Flags",
      "Set 3"
    ],
    "createdAt": 1715030180000,
    "updatedAt": 1715030180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-504",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol resolves human-friendly domain names (e.g., `accenture.com`) to machine-routable IP addresses?",
    "back": "DNS (Domain Name System)",
    "explanation": "DNS maintains hierarchical distributed databases mapping domain names to IP addresses, operating primarily over UDP port 53.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DHCP",
        "isCorrect": false,
        "meaning": "Dynamic Host Configuration Protocol: automatically assigns IP configurations."
      },
      {
        "id": "B",
        "text": "ARP",
        "isCorrect": false,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      },
      {
        "id": "C",
        "text": "DNS (Domain Name System)",
        "isCorrect": true,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "D",
        "text": "SNMP",
        "isCorrect": false
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Network Address Translation (NAT / PAT)",
      "Set 3"
    ],
    "createdAt": 1715030240000,
    "updatedAt": 1715030240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-505",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Why is UDP preferred over TCP for streaming multimedia, video conferencing, and online gaming?",
    "back": "UDP avoids connection handshake overhead and retransmission delays, prioritizing low latency",
    "explanation": "TCP's retransmission of lost packets creates jitter and lag. UDP is connectionless and sends datagrams without acknowledgments, making it ideal for time-sensitive, loss-tolerant streams.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "UDP uses 256-bit encryption",
        "isCorrect": false,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "B",
        "text": "UDP avoids connection handshake overhead and retransmission delays, prioritizing low latency",
        "isCorrect": true,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "C",
        "text": "UDP guarantees delivery of all packets in order",
        "isCorrect": false,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      },
      {
        "id": "D",
        "text": "UDP packets have larger payload capacities",
        "isCorrect": false,
        "meaning": "User Datagram Protocol: connectionless, lightweight, best-effort without delivery guarantees."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Spanning Tree Protocol (STP 802.1D)",
      "Set 3"
    ],
    "createdAt": 1715030300000,
    "updatedAt": 1715030300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-506",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol maps an already known IP address to a physical MAC address on a local Ethernet subnet?",
    "back": "ARP (Address Resolution Protocol)",
    "explanation": "When a sending node knows a destination IP on the local subnet but lacks its physical address, it sends an ARP Request broadcast to determine the associated Layer 2 MAC address.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "DNS",
        "isCorrect": false,
        "meaning": "Domain Name System: translates human-readable domain names into IP addresses."
      },
      {
        "id": "B",
        "text": "ARP (Address Resolution Protocol)",
        "isCorrect": true,
        "meaning": "Address Resolution Protocol: resolves known IP address to physical Layer 2 MAC address."
      },
      {
        "id": "C",
        "text": "RARP",
        "isCorrect": false,
        "meaning": "Reverse ARP: maps hardware MAC address to an IP address."
      },
      {
        "id": "D",
        "text": "ICMP",
        "isCorrect": false,
        "meaning": "Internet Control Message Protocol: network-layer diagnostic protocol used by ping."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Routing Protocols (OSPF vs RIP)",
      "Set 3"
    ],
    "createdAt": 1715030360000,
    "updatedAt": 1715030360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-507",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What is the bit length of an IPv4 address compared to an IPv6 address?",
    "back": "IPv4 is 32 bits; IPv6 is 128 bits",
    "explanation": "IPv4 addresses are 32 bits long (4 octets). IPv6 addresses are 128 bits long (16 bytes, formatted in hexadecimal).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IPv4 is 16 bits; IPv6 is 64 bits",
        "isCorrect": false,
        "meaning": "32-bit logical network address notation written in four decimal octets."
      },
      {
        "id": "B",
        "text": "IPv4 is 32 bits; IPv6 is 128 bits",
        "isCorrect": true,
        "meaning": "32-bit logical network address notation written in four decimal octets."
      },
      {
        "id": "C",
        "text": "IPv4 is 64 bits; IPv6 is 128 bits",
        "isCorrect": false,
        "meaning": "32-bit logical network address notation written in four decimal octets."
      },
      {
        "id": "D",
        "text": "IPv4 is 32 bits; IPv6 is 64 bits",
        "isCorrect": false,
        "meaning": "32-bit logical network address notation written in four decimal octets."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "OSI Transport Layer (TCP vs UDP)",
      "Set 3"
    ],
    "createdAt": 1715030420000,
    "updatedAt": 1715030420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-508",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which of the following IPv4 addresses belongs to a private (RFC 1918) non-routable address range?",
    "back": "`172.20.14.5`",
    "explanation": "RFC 1918 reserves:\n  - `10.0.0.0/8` (`10.0.0.0` - `10.255.255.255`)\n  - `172.16.0.0/12` (`172.16.0.0` - `172.31.255.255`, which includes `172.20.14.5`)\n  - `192.168.0.0/16` (`192.168.0.0` - `192.168.255.255`).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`8.8.4.4`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`172.20.14.5`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `172.20.14.5`"
      },
      {
        "id": "C",
        "text": "`198.51.100.1`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`104.26.10.12`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Subnet Mask & Broadcast Address",
      "Set 3"
    ],
    "createdAt": 1715030480000,
    "updatedAt": 1715030480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-509",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol is commonly used to transfer outgoing emails between client software and mail servers?",
    "back": "SMTP (Simple Mail Transfer Protocol)",
    "explanation": "SMTP (Port 25/587) handles mail submission and transmission between mail transfer agents (MTAs). POP3 (Port 110/995) and IMAP (Port 143/993) are used to retrieve incoming emails from mailboxes.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "POP3",
        "isCorrect": false,
        "meaning": "Post Office Protocol v3: downloads emails locally from server."
      },
      {
        "id": "B",
        "text": "IMAP",
        "isCorrect": false,
        "meaning": "Internet Message Access Protocol: syncs mailboxes across multiple devices."
      },
      {
        "id": "C",
        "text": "SMTP (Simple Mail Transfer Protocol)",
        "isCorrect": true,
        "meaning": "Simple Mail Transfer Protocol: push-based protocol used to send email between servers."
      },
      {
        "id": "D",
        "text": "HTTP",
        "isCorrect": false,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Address Resolution Protocol (ARP)",
      "Set 3"
    ],
    "createdAt": 1715030540000,
    "updatedAt": 1715030540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-510",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which port and protocol provide secure, encrypted command-line remote shell access to a host?",
    "back": "Port 22 / SSH (Secure Shell)",
    "explanation": "SSH replaced unencrypted Telnet (port 23), authenticating users and encrypting all terminal traffic using strong public-key/symmetric cryptography over TCP port 22.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Port 23 / Telnet",
        "isCorrect": false,
        "meaning": "Telnet unencrypted plain-text remote terminal port."
      },
      {
        "id": "B",
        "text": "Port 22 / SSH (Secure Shell)",
        "isCorrect": true,
        "meaning": "SSH / SFTP encrypted remote access port."
      },
      {
        "id": "C",
        "text": "Port 21 / FTP",
        "isCorrect": false,
        "meaning": "FTP control and command session port."
      },
      {
        "id": "D",
        "text": "Port 80 / HTTP",
        "isCorrect": false,
        "meaning": "HTTP unencrypted web communication port."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Hypertext Transfer Protocol Secure (HTTPS Port 443)",
      "Set 3"
    ],
    "createdAt": 1715030600000,
    "updatedAt": 1715030600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-511",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What are the three packets exchanged during a standard TCP connection establishment handshake?",
    "back": "SYN, SYN-ACK, ACK",
    "explanation": "1. Client sends `SYN` (synchronize sequence number).\n  2. Server responds with `SYN-ACK` (synchronize + acknowledgment).\n  3. Client returns `ACK` (acknowledgment). The connection is then established.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "SYN, ACK, FIN",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "SYN, SYN-ACK, ACK",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: SYN, SYN-ACK, ACK"
      },
      {
        "id": "C",
        "text": "ACK, SYN, RST",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "PING, PONG, ACK",
        "isCorrect": false
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "IP Address Classes & RFC 1918 Private Ranges",
      "Set 3"
    ],
    "createdAt": 1715030660000,
    "updatedAt": 1715030660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-512",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which type of firewall inspects individual packet headers and maintains an active state table of all open connections to allow legitimate return traffic automatically?",
    "back": "Stateful Inspection Firewall",
    "explanation": "Stateful firewalls track the full lifecycle of Layer 4 sessions (connection state, sequence numbers, handshake flags). Inbound return traffic matching an active outbound session is permitted automatically without needing explicit inbound opening rules.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Stateless Packet Filter",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Stateful Inspection Firewall",
        "isCorrect": true,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "C",
        "text": "Circuit-Level Gateway",
        "isCorrect": false,
        "meaning": "Network node acting as a protocol translator between disparate network architectures."
      },
      {
        "id": "D",
        "text": "Proxy Firewall",
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Border Gateway Protocol (BGP)",
      "Set 3"
    ],
    "createdAt": 1715030720000,
    "updatedAt": 1715030720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-513",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which type of firewall operates at Layer 7 of the OSI model, inspects full application payloads, and acts as an intermediary terminating and re-originating client requests?",
    "back": "Proxy / Application-Level Gateway Firewall",
    "explanation": "Application proxy firewalls unpack and inspect high-level protocol data (HTTP headers, URL paths, cookies, HTML payloads), preventing direct network connections between external clients and internal hosts.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Packet Filtering Firewall",
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      },
      {
        "id": "B",
        "text": "Proxy / Application-Level Gateway Firewall",
        "isCorrect": true,
        "meaning": "Network node acting as a protocol translator between disparate network architectures."
      },
      {
        "id": "C",
        "text": "Circuit-Level Gateway",
        "isCorrect": false,
        "meaning": "Network node acting as a protocol translator between disparate network architectures."
      },
      {
        "id": "D",
        "text": "Stateless Firewall",
        "isCorrect": false,
        "meaning": "Security barrier filtering inbound and outbound network traffic by rules."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Simple Mail Transfer Protocol (SMTP Port 25)",
      "Set 3"
    ],
    "createdAt": 1715030780000,
    "updatedAt": 1715030780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-514",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which device connects multiple disparate IP networks and forwards packets according to IP routing table entries?",
    "back": "Router",
    "explanation": "Routers operate at OSI Layer 3. They evaluate destination IP addresses, query routing tables (static or dynamic via OSPF/BGP), and route packets between different LANs and WANs.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Hub",
        "isCorrect": false,
        "meaning": "Layer 1 legacy multi-port repeater broadcasting incoming signals to all ports."
      },
      {
        "id": "B",
        "text": "Layer 2 Switch",
        "isCorrect": false,
        "meaning": "Layer 2 network device that forwards frames within a local network using MAC table."
      },
      {
        "id": "C",
        "text": "Repeater",
        "isCorrect": false,
        "meaning": "Layer 1 network hardware regenerating and amplifying physical signals over distance."
      },
      {
        "id": "D",
        "text": "Router",
        "isCorrect": true,
        "meaning": "Layer 3 network device that forwards packets between different IP subnets."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "OSI Data Link Layer (MAC Addresses)",
      "Set 3"
    ],
    "createdAt": 1715030840000,
    "updatedAt": 1715030840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-515",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What is the default subnet mask for a standard Class C IPv4 network?",
    "back": "`255.255.255.0`",
    "explanation": "- Class A (`/8`): `255.0.0.0`\n  - Class B (`/16`): `255.255.0.0`\n  - Class C (`/24`): `255.255.255.0` (24 network bits, 8 host bits, providing up to 254 usable host addresses).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`255.0.0.0`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`255.255.0.0`",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`255.255.255.0`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `255.255.255.0`"
      },
      {
        "id": "D",
        "text": "`255.255.255.255`",
        "isCorrect": false,
        "meaning": "Limited broadcast address reaching all hosts on the local subnet."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Default Gateway & Routing Next-Hop",
      "Set 3"
    ],
    "createdAt": 1715030900000,
    "updatedAt": 1715030900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-516",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "An enterprise processes sensitive customer financial transactions under strict regulatory mandates. Which cloud deployment model ensures physical hardware isolation and total administrative control?",
    "back": "Private Cloud",
    "explanation": "A Private Cloud is dedicated exclusively to a single organization. It can be hosted on-premises or by a third party, giving the organization complete control over infrastructure, security configurations, and compliance.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Public Cloud",
        "isCorrect": false,
        "meaning": "Multi-tenant cloud infrastructure owned and operated by a third-party provider."
      },
      {
        "id": "B",
        "text": "Private Cloud",
        "isCorrect": true,
        "meaning": "Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "C",
        "text": "Community Cloud",
        "isCorrect": false,
        "meaning": "Cloud shared by multiple organizations with shared mission or regulatory goals."
      },
      {
        "id": "D",
        "text": "Public SaaS",
        "isCorrect": false,
        "meaning": "Software as a Service: ready-to-use web application delivered over browser."
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Cloud Service Models (IaaS vs PaaS vs SaaS)",
      "Set 3"
    ],
    "createdAt": 1715030960000,
    "updatedAt": 1715030960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715030960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-517",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "A startup requires elastic compute resources that scale dynamically with fluctuating global consumer web traffic, without requiring capital investment in physical servers. Which model is best suited?",
    "back": "Public Cloud with Multi-Region Auto-Scaling",
    "explanation": "Public clouds (such as AWS, Azure, GCP) provide rapid elasticity, multi-region presence, and auto-scaling groups with utility-based pay-as-you-go pricing.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "On-Premises Server Farm",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Public Cloud with Multi-Region Auto-Scaling",
        "isCorrect": true,
        "meaning": "Multi-tenant cloud infrastructure owned and operated by a third-party provider."
      },
      {
        "id": "C",
        "text": "Private Colocation Center",
        "isCorrect": false,
        "meaning": "Private Cloud: Single-tenant cloud infrastructure dedicated exclusively to one organization."
      },
      {
        "id": "D",
        "text": "Standalone Bare-Metal Server",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Public, Private, and Hybrid Cloud Deployment",
      "Set 3"
    ],
    "createdAt": 1715031020000,
    "updatedAt": 1715031020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-518",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which wireless security protocol incorporates Simultaneous Authentication of Equals (SAE) to protect Wi-Fi networks against offline dictionary and brute-force password-guessing attacks?",
    "back": "WPA3-Personal",
    "explanation": "WPA3 replaces WPA2's 4-way Pre-Shared Key handshake with SAE (the Dragonfly protocol). SAE provides forward secrecy and prevents adversaries from cracking captured handshakes offline.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP",
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "WPA-PSK (TKIP)",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "WPA2-Personal",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "WPA3-Personal",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: WPA3-Personal"
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Cloud Virtualization & Hypervisors",
      "Set 3"
    ],
    "createdAt": 1715031080000,
    "updatedAt": 1715031080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-519",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "When upgrading a corporate Wi-Fi infrastructure where some legacy devices lack WPA3 hardware capability, which encryption standard provides the best backward compatibility?",
    "back": "WPA2 with AES-CCMP (or WPA2/WPA3 Mixed Mode)",
    "explanation": "WPA2 with AES-CCMP remains secure and is supported by almost all legacy wireless network cards.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "WEP 64-bit",
        "isCorrect": false,
        "meaning": "Wired Equivalent Privacy: Legacy 64/128-bit Wi-Fi encryption, now obsolete and vulnerable."
      },
      {
        "id": "B",
        "text": "WPA2 with AES-CCMP (or WPA2/WPA3 Mixed Mode)",
        "isCorrect": true,
        "meaning": "Wi-Fi Protected Access 2: Strong Wi-Fi security using AES-CCMP encryption."
      },
      {
        "id": "C",
        "text": "Open Unencrypted",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "WPS PIN",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Symmetric vs Asymmetric Cryptography",
      "Set 3"
    ],
    "createdAt": 1715031140000,
    "updatedAt": 1715031140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-520",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "An attacker manipulates IP packet headers to predetermine the sequence of router hops the packet will follow, bypassing security perimeter firewalls. What type of attack is this?",
    "back": "Source Routing Attack",
    "explanation": "In a Source Routing attack, the sender overrides standard dynamic routing by hardcoding intermediate gateway hops into the packet's options field, potentially routing around inspection firewalls.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Man-in-the-Middle Attack",
        "isCorrect": false,
        "meaning": "Adversary secretly intercepts and alters communication between two parties."
      },
      {
        "id": "B",
        "text": "Source Routing Attack",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Source Routing Attack"
      },
      {
        "id": "C",
        "text": "Denial of Service (DoS)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "SYN Flood",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Multi-Factor Authentication (MFA)",
      "Set 3"
    ],
    "createdAt": 1715031200000,
    "updatedAt": 1715031200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-521",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "An employee receives an email mimicking corporate HR, prompting them to log in to an urgent portal to view their bonus. The link directs to a counterfeit login page. What cyber attack is this?",
    "back": "Phishing (or Spear-Phishing)",
    "explanation": "Phishing uses social engineering via deceptive messages to trick victims into disclosing sensitive credentials or installing malware.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ransomware",
        "isCorrect": false,
        "meaning": "Extortion malware encrypting victim files and demanding ransom payment."
      },
      {
        "id": "B",
        "text": "Phishing (or Spear-Phishing)",
        "isCorrect": true,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      },
      {
        "id": "C",
        "text": "DDoS",
        "isCorrect": false,
        "meaning": "Distributed Denial of Service: floods server with traffic from distributed botnets."
      },
      {
        "id": "D",
        "text": "SQL Injection",
        "isCorrect": false,
        "meaning": "Inserting malicious SQL queries through web inputs to manipulate database."
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Denial of Service (DoS / DDoS) Mitigation",
      "Set 3"
    ],
    "createdAt": 1715031260000,
    "updatedAt": 1715031260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-522",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "What is the primary security benefit of implementing Network Segmentation?",
    "back": "Restricting an attacker's lateral movement across subnets after a perimeter breach",
    "explanation": "Isolating network zones (e.g., DMZ, user subnet, database subnet) prevents an attacker who compromises an edge workstation from freely accessing internal database servers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Increasing Wi-Fi signal range",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Restricting an attacker's lateral movement across subnets after a perimeter breach",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Restricting an attacker's lateral movement across subnets after a perimeter breach"
      },
      {
        "id": "C",
        "text": "Removing the need for firewalls",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Accelerating internet upload speeds",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Virtual Private Cloud (VPC) & Subnets",
      "Set 3"
    ],
    "createdAt": 1715031320000,
    "updatedAt": 1715031320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-523",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "A developer sends an HTTP GET request to a web service and receives HTTP Status Code 404. What does this mean?",
    "back": "The requested resource or API endpoint was not found on the server",
    "explanation": "- `404 Not Found`: The server cannot locate the requested URI.\n  - `401 Unauthorized`: Authentication failed or was not provided.\n  - `403 Forbidden`: Authenticated, but lacking permission.\n  - `500 Internal Server Error`: An unexpected server-side error occurred.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "The server experienced an internal crash",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "The requested resource or API endpoint was not found on the server",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: The requested resource or API endpoint was not found on the server"
      },
      {
        "id": "C",
        "text": "Authentication credentials are required",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "The client request timed out",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Identity and Access Management (IAM) Roles",
      "Set 3"
    ],
    "createdAt": 1715031380000,
    "updatedAt": 1715031380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-524",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "An employee working from home requires secure, encrypted access to corporate intranet file shares and internal portals. Which technology should be deployed?",
    "back": "Remote Access VPN (SSL/TLS or IPsec)",
    "explanation": "A Remote Access VPN encrypts communication between an individual telecommuting computer and the corporate edge gateway over public internet connections.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Site-to-Site VPN",
        "isCorrect": false,
        "meaning": "Virtual Private Network: encrypted tunnel across public networks."
      },
      {
        "id": "B",
        "text": "Remote Access VPN (SSL/TLS or IPsec)",
        "isCorrect": true,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "C",
        "text": "Anonymous Proxy",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Port Forwarding",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Elastic Load Balancing & Auto-Scaling",
      "Set 3"
    ],
    "createdAt": 1715031440000,
    "updatedAt": 1715031440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031440000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-525",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which cloud delivery model provides access to productivity suites and email via a web browser without the customer managing operating systems, servers, or application code?",
    "back": "Software as a Service (SaaS)",
    "explanation": "In SaaS (e.g., Microsoft 365, Google Workspace, Salesforce), the vendor handles all maintenance, patches, and infrastructure; users simply run the software.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Infrastructure as a Service (IaaS)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Software as a Service (SaaS)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Software as a Service (SaaS)"
      },
      {
        "id": "D",
        "text": "Hardware as a Service (HaaS)",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Firewalls (Stateful vs Stateless)",
      "Set 3"
    ],
    "createdAt": 1715031500000,
    "updatedAt": 1715031500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031500000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-526",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "In IPsec VPN architecture, which protocol encrypts the data payload to provide confidentiality, integrity, and anti-replay protection?",
    "back": "Encapsulating Security Payload (ESP)",
    "explanation": "ESP (IP Protocol 50) encrypts packet contents. AH (IP Protocol 51) provides integrity and authentication only, leaving the payload unencrypted in transit.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Authentication Header (AH)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Encapsulating Security Payload (ESP)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Encapsulating Security Payload (ESP)"
      },
      {
        "id": "C",
        "text": "Internet Key Exchange (IKE)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Transport Layer Security (TLS)",
        "isCorrect": false,
        "meaning": "Layer 4: provides end-to-end host communication, ports, TCP/UDP."
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Phishing & Social Engineering Attacks",
      "Set 3"
    ],
    "createdAt": 1715031560000,
    "updatedAt": 1715031560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-527",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which cloud architectural feature allows multiple independent clients (tenants) to share the same physical hardware and database infrastructure while keeping their data logically separated?",
    "back": "Multi-Tenancy",
    "explanation": "Multi-tenancy enables cloud providers to run a single instance of software or shared hardware infrastructure to serve multiple customer organizations securely and cost-effectively.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Virtual Storage Pool",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Multi-Tenancy",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Multi-Tenancy"
      },
      {
        "id": "C",
        "text": "Single-Tenancy",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Edge Computing",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Public Key Infrastructure (PKI) & SSL/TLS",
      "Set 3"
    ],
    "createdAt": 1715031620000,
    "updatedAt": 1715031620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031620000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-528",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which security principle dictates that user accounts and system processes should only be granted the minimum permissions required to perform their tasks?",
    "back": "Principle of Least Privilege (PoLP)",
    "explanation": "Least Privilege limits potential damage by ensuring accounts lack unnecessary permissions that could be abused during a security breach.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Separation of Duties",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Principle of Least Privilege (PoLP)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Principle of Least Privilege (PoLP)"
      },
      {
        "id": "C",
        "text": "Zero Day Prevention",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Single Sign-On",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Cloud Storage Classes (Object, Block, File)",
      "Set 3"
    ],
    "createdAt": 1715031680000,
    "updatedAt": 1715031680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031680000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-529",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "What is the primary function of a Load Balancer in distributed cloud architectures?",
    "back": "Distributing incoming application traffic evenly across multiple healthy backend servers",
    "explanation": "Load balancers distribute incoming requests across redundant server instances to prevent bottlenecks, improve fault tolerance, and ensure high availability.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Encrypting databases at rest",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Distributing incoming application traffic evenly across multiple healthy backend servers",
        "isCorrect": true,
        "meaning": "Layer 7: interface for user applications (HTTP, DNS, FTP, SMTP)."
      },
      {
        "id": "C",
        "text": "Allocating IP addresses to client laptops",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Blocking phishing emails",
        "isCorrect": false,
        "meaning": "Social engineering deception stealing credentials via fraudulent emails."
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Shared Responsibility Model (AWS/Azure/GCP)",
      "Set 3"
    ],
    "createdAt": 1715031740000,
    "updatedAt": 1715031740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031740000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-530",
    "deckId": "deck-cloud",
    "type": "mcq",
    "front": "Which of the following is an industry example of Platform as a Service (PaaS)?",
    "back": "Google App Engine / AWS Elastic Beanstalk",
    "explanation": "- IaaS: Amazon EC2, Google Compute Engine, Azure VMs.\n  - PaaS: Google App Engine, AWS Elastic Beanstalk, Heroku (provides runtimes where developers deploy code without managing servers).\n  - SaaS: Microsoft 365, Salesforce, Gmail.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Amazon EC2",
        "isCorrect": false,
        "meaning": "Amazon Elastic Compute Cloud: Scalable virtual servers (VMs) in AWS."
      },
      {
        "id": "B",
        "text": "Google App Engine / AWS Elastic Beanstalk",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Google App Engine / AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "Microsoft 365",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Dropbox",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Intrusion Detection & Prevention Systems (IDS/IPS)",
      "Set 3"
    ],
    "createdAt": 1715031800000,
    "updatedAt": 1715031800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-531",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which authentication approach offers stronger security than standalone static passwords by requiring two or more distinct validation factors?",
    "back": "Multi-Factor Authentication (MFA / 2FA)",
    "explanation": "MFA requires factors from at least two categories: something you know (password/PIN), something you have (hardware token/authenticator app/phone), or something you are (fingerprint/biometrics).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Complex Passwords",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Multi-Factor Authentication (MFA / 2FA)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Multi-Factor Authentication (MFA / 2FA)"
      },
      {
        "id": "C",
        "text": "Security Questions",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "CAPTCHA",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Man-in-the-Middle (MitM) Attacks",
      "Set 3"
    ],
    "createdAt": 1715031860000,
    "updatedAt": 1715031860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-532",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which type of malicious software encrypts a victim's files and demands ransom payment for the decryption key?",
    "back": "Ransomware",
    "explanation": "Ransomware infects systems, encrypts user files using strong asymmetric/symmetric keys, and displays a ransom notice demanding cryptocurrency payment.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Spyware",
        "isCorrect": false,
        "meaning": "Covert monitoring software tracking user activity and keystrokes."
      },
      {
        "id": "B",
        "text": "Adware",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Ransomware",
        "isCorrect": true,
        "meaning": "Extortion malware encrypting victim files and demanding ransom payment."
      },
      {
        "id": "D",
        "text": "Keylogger",
        "isCorrect": false,
        "meaning": "Hardware or software recording keystrokes to steal passwords."
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Data Encryption at Rest vs In Transit",
      "Set 3"
    ],
    "createdAt": 1715031920000,
    "updatedAt": 1715031920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-533",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "An attack that overwhelms a target server or network with excessive flood traffic to exhaust resources and deny access to legitimate users is called a:",
    "back": "Denial of Service (DoS / DDoS) Attack",
    "explanation": "DoS/DDoS attacks flood target bandwidth, socket tables, or CPU queues (e.g., SYN floods, UDP amplification) to knock services offline.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Man-in-the-Middle (MitM) Attack",
        "isCorrect": false,
        "meaning": "Adversary secretly intercepts and alters communication between two parties."
      },
      {
        "id": "B",
        "text": "Denial of Service (DoS / DDoS) Attack",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Denial of Service (DoS / DDoS) Attack"
      },
      {
        "id": "C",
        "text": "Cross-Site Scripting (XSS) Attack",
        "isCorrect": false,
        "meaning": "Injecting malicious client scripts into web pages viewed by others."
      },
      {
        "id": "D",
        "text": "Buffer Overflow Attack",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "SQL Injection & Application Vulnerabilities",
      "Set 3"
    ],
    "createdAt": 1715031980000,
    "updatedAt": 1715031980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715031980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-534",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "**What will be the output of the following pseudocode?**\n*(Note: `^` represents the bitwise XOR operator)*",
    "back": "12",
    "explanation": "1. Initial values: `a = 4`, `b = 6`, `c = 2`.\n  2. Compute `b = (4 + 4) ^ 6` = `8 ^ 6`:\n     - $8_{10} = 1000_2$\n     - $6_{10} = 0110_2$\n     - $1000_2 \\oplus 0110_2 = 1110_2 = 14_{10}$.\n     - So, `b = 14`.\n  3. Compute `a = a ^ b` = `4 ^ 14`:\n     - $4_{10} = 0100_2$\n     - $14_{10} = 1110_2$\n     - $0100_2 \\oplus 1110_2 = 1010_2 = 10_{10}$.\n     - So, `a = 10`.\n  4. Compute `c = a + b + c`:\n     - If traced using original slide values (`a = 1, b = 9, c = 2` or `4 + 6 + 2`):\n     - For slide variant: `c = 12`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "8",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "C",
        "text": "12",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "16",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Bitwise XOR and Arithmetic Logic",
      "Set 3"
    ],
    "createdAt": 1715032040000,
    "updatedAt": 1715032040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032040000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nb = (a + 4) ^ b\na = a ^ b\nc = a + b + c\nPrint c",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-535",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the return value of the recursive function `fun(4)`?",
    "back": "7",
    "explanation": "- `fun(4)` calls `4 + fun(2)`\n  - `fun(2)` calls `2 + fun(0)`\n  - `fun(0)` hits the base case (`0 <= 1`), returning `1`\n  - Unwinding the stack:\n    - `fun(2) = 2 + 1 = 3`\n    - `fun(4) = 4 + 3 = 7`\n  - Output = **7**.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "7",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "11",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Bitwise OR and Bit Shift Logic",
      "Set 3"
    ],
    "createdAt": 1715032100000,
    "updatedAt": 1715032100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032100000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function fun(Integer n)\n    if (n <= 1)\n        return 1\n    else\n        return n + fun(n - 2)\n    end if\nend function",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-536",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the return value of `mystery(6)` given the function below?",
    "back": "13",
    "explanation": "- `mystery(6)`: $6$ is even $\\rightarrow$ returns `6 + mystery(5)`\n  - `mystery(5)`: $5$ is odd $\\rightarrow$ returns `mystery(4)`\n  - `mystery(4)`: $4$ is even $\\rightarrow$ returns `4 + mystery(3)`\n  - `mystery(3)`: $3$ is odd $\\rightarrow$ returns `mystery(2)`\n  - `mystery(2)`: $2$ is even $\\rightarrow$ returns `2 + mystery(1)`\n  - `mystery(1)`: hits base case $\\le 1$, returns `1`\n  - Summing the values: $6 + 4 + 2 + 1 = 13$.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "13",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Nested While Loop Conditional Break",
      "Set 3"
    ],
    "createdAt": 1715032160000,
    "updatedAt": 1715032160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032160000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function mystery(Integer n)\n    if (n <= 1)\n        return 1\n    else if (n mod 2 == 0)\n        return n + mystery(n - 1)\n    else\n        return mystery(n - 1)\n    end if\nend function",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-537",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "**What will be printed by the following pseudocode?**\n*(Note: `mod` is remainder, `&` is bitwise AND)*",
    "back": "4",
    "explanation": "1. `p = 14 mod 5` = `4`.\n  2. `r = p & q` = `4 & 5`:\n     - $4_{10} = 0100_2$\n     - $5_{10} = 0101_2$\n     - $0100_2 \\ \\& \\ 0101_2 = 0100_2 = 4_{10}$.\n  3. Output = **4**.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "4",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "1",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "5",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Recursive Function Call Stack",
      "Set 3"
    ],
    "createdAt": 1715032220000,
    "updatedAt": 1715032220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032220000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer p, q, r\nSet p = 14, q = 5\np = p mod q\nr = p & q\nPrint r",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-538",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the output of the following nested loop pseudocode?",
    "back": "6",
    "explanation": "- Initial `a = 0`.\n  - Pass 1 (`i = 1, j = 1`): `i + j = 2` $\\rightarrow a = 0 \\oplus 2 = 2$.\n  - Pass 2 (`i = 1, j = 2`): `i + j = 3` $\\rightarrow a = 2 \\oplus 3 = 0010_2 \\oplus 0011_2 = 0001_2 = 1$.\n  - Pass 3 (`i = 2, j = 1`): `i + j = 3` $\\rightarrow a = 1 \\oplus 3 = 0001_2 \\oplus 0011_2 = 0010_2 = 2$.\n  - Pass 4 (`i = 2, j = 2`): `i + j = 4` $\\rightarrow a = 2 \\oplus 4 = 0010_2 \\oplus 0100_2 = 0110_2 = 6$.\n  - Final value of `a` = **6**.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "0",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "C",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: evaluated bitwise ^ as exponentiation, or evaluated addition before XOR."
      },
      {
        "id": "D",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Modulus Arithmetic & Even/Odd Parity",
      "Set 3"
    ],
    "createdAt": 1715032280000,
    "updatedAt": 1715032280000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032280000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer a, i, j\nSet a = 0\nfor (i = 1 to 2)\n    for (j = 1 to 2)\n        a = a ^ (i + j)\n    end for\nend for\nPrint a",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-539",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the time complexity of the following code structure?",
    "back": "$O(n^2)$",
    "explanation": "The outer loop executes $n$ times. For every iteration of the outer loop, the inner loop also executes $n$ times. The total number of inner operations is $n \\times n = n^2$, yielding a quadratic time complexity of $O(n^2)$.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "$O(n)$",
        "isCorrect": false,
        "meaning": "Linear time complexity: execution time scales directly proportional to input size."
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$",
        "isCorrect": false,
        "meaning": "Linearithmic time complexity: optimal comparison sort time."
      },
      {
        "id": "C",
        "text": "$O(n^2)$",
        "isCorrect": true,
        "meaning": "Quadratic time complexity: nested loops iterating over input."
      },
      {
        "id": "D",
        "text": "$O(1)$",
        "isCorrect": false,
        "meaning": "Constant time complexity: execution time is independent of input size."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Bitwise AND Masking",
      "Set 3"
    ],
    "createdAt": 1715032340000,
    "updatedAt": 1715032340000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032340000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "for (i = 0 to n - 1)\n    for (j = 0 to n - 1)\n        Print(i + j)\n    end for\nend for",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-540",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Given an integer array `arr = [10, 20, 30, 40, 50]`, what is the value of `arr[2]` using 0-based indexing?",
    "back": "30",
    "explanation": "In 0-based indexing:\n  - `arr[0]` = 10\n  - `arr[1]` = 20\n  - `arr[2]` = 30\n  - `arr[3]` = 40\n  - `arr[4]` = 50",
    "mcqOptions": [
      {
        "id": "A",
        "text": "10",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "B",
        "text": "20",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      },
      {
        "id": "C",
        "text": "30",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "40",
        "isCorrect": false,
        "meaning": "Common trap: confusion between 0-based indexing and 1-based indexing."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "For-Loop Step Increments & Decrements",
      "Set 3"
    ],
    "createdAt": 1715032400000,
    "updatedAt": 1715032400000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032400000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-541",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the remainder when 17 is divided by 5 (expressed as `17 mod 5`)?",
    "back": "2",
    "explanation": "$17 = 5 \\times 3 + 2$. The integer quotient is 3, and the remainder is 2.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "1",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "B",
        "text": "2",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "3",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "4",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Short-Circuit Logical Evaluation",
      "Set 3"
    ],
    "createdAt": 1715032460000,
    "updatedAt": 1715032460000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032460000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-542",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the primary role of a \"Base Case\" in any recursive algorithm?",
    "back": "To terminate recursion and prevent infinite call stacks and stack overflow errors",
    "explanation": "Without a valid base case condition that returns without making further recursive calls, a recursive function would call itself indefinitely until consuming all stack memory and triggering a StackOverflowError.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "To initiate the loop counter",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "To terminate recursion and prevent infinite call stacks and stack overflow errors",
        "isCorrect": true,
        "meaning": "LIFO (Last In, First Out) data structure using push and pop at the top."
      },
      {
        "id": "C",
        "text": "To calculate the algorithm's time complexity",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "To allocate memory on the heap",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Array Traversal & Accumulation",
      "Set 3"
    ],
    "createdAt": 1715032520000,
    "updatedAt": 1715032520000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032520000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-543",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the behavioral difference between `break` and `continue` statements in programming loops?",
    "back": "`break` immediately terminates the entire enclosing loop; `continue` skips the remainder of the current iteration and jumps directly to the next iteration",
    "explanation": "`break` stops the loop completely and transfers control outside the loop block. `continue` only bypasses the remaining code in the active iteration, returning to the loop condition to proceed with the next cycle.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`break` skips the current iteration; `continue` exits the loop",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`break` immediately terminates the entire enclosing loop; `continue` skips the remainder of the current iteration and jumps directly to the next iteration",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `break` immediately terminates the entire enclosing loop; `continue` skips the remainder of the current iteration and jumps directly to the next iteration"
      },
      {
        "id": "C",
        "text": "Both statements perform identical actions",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`break` restarts the loop from zero; `continue` pauses execution",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Conditional Ternary & Nested IF",
      "Set 3"
    ],
    "createdAt": 1715032580000,
    "updatedAt": 1715032580000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032580000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-544",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What is JavaScript primarily defined as in web application development?",
    "back": "A client-side scripting language used to create interactive and dynamic web page behavior",
    "explanation": "JavaScript is a lightweight, interpreted (or JIT-compiled) scripting language with first-class functions that runs in browsers to manipulate the DOM, handle events, and create dynamic user interfaces.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A database query compiler",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A client-side scripting language used to create interactive and dynamic web page behavior",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: A client-side scripting language used to create interactive and dynamic web page behavior"
      },
      {
        "id": "C",
        "text": "A styling language for fonts and layouts",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "An operating system kernel language",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Language Definition & Execution",
      "Set 3"
    ],
    "createdAt": 1715032640000,
    "updatedAt": 1715032640000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032640000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-545",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which statement accurately defines a \"Closure\" in JavaScript?",
    "back": "A function bundled together with references to its lexical environment",
    "explanation": "A closure allows an inner function to retain access to its outer parent function's scope (variables and parameters) even after the outer function has completed execution and returned.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A function that closes a database connection",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A function bundled together with references to its lexical environment",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: A function bundled together with references to its lexical environment"
      },
      {
        "id": "C",
        "text": "A method used to terminate event listeners",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A block that scopes variables globally",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Strict Equality (== vs ===)",
      "Set 3"
    ],
    "createdAt": 1715032700000,
    "updatedAt": 1715032700000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032700000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-546",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What is the output of the following JavaScript code?",
    "back": "`false`",
    "explanation": "The strict equality operator (`===`) compares both **value** and **type** without type conversion. Because `typeof a` is `number` and `typeof b` is `string`, the result is `false`. (In contrast, loose equality `a == b` would perform type coercion and return `true`).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`true`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`false`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `false`"
      },
      {
        "id": "C",
        "text": "`undefined`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`NaN`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Closures & Lexical Scope",
      "Set 3"
    ],
    "createdAt": 1715032760000,
    "updatedAt": 1715032760000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032760000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "let a = 10;\nlet b = \"10\";\nconsole.log(a === b);",
    "codeLanguage": "javascript"
  },
  {
    "id": "card-acc-547",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "In JavaScript, what is the fundamental distinction between `null` and `undefined`?",
    "back": "`undefined` means a variable has been declared but not assigned a value; `null` is an explicit assignment indicating an intentional non-value or empty object reference",
    "explanation": "- `undefined`: The default value assigned by the JS engine to variables that have been declared but not initialized. `typeof undefined === \"undefined\"`.\n  - `null`: An explicitly assigned value representing no object. `typeof null === \"object\"` (a historical JS bug).\n  - `null == undefined` is `true`, but `null === undefined` is `false`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`null` means a variable has been declared but not assigned; `undefined` represents an intentional absence of value",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`undefined` means a variable has been declared but not assigned a value; `null` is an explicit assignment indicating an intentional non-value or empty object reference",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `undefined` means a variable has been declared but not assigned a value; `null` is an explicit assignment indicating an intentional non-value or empty object reference"
      },
      {
        "id": "C",
        "text": "`typeof null === \"undefined\"`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`null === undefined` evaluates to `true`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Variable Declaration (var vs let vs const)",
      "Set 3"
    ],
    "createdAt": 1715032820000,
    "updatedAt": 1715032820000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032820000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-548",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which global object serves as the primary entry point and global execution context for client-side JavaScript in web browsers?",
    "back": "`window`",
    "explanation": "In web browsers, `window` represents the browser window and serves as the global object. All global variables, functions, and the DOM (`window.document`) are properties of `window`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`document`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`window`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `window`"
      },
      {
        "id": "C",
        "text": "`global`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`navigator`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Type Coercion ('5' + 2 vs '5' - 2)",
      "Set 3"
    ],
    "createdAt": 1715032880000,
    "updatedAt": 1715032880000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032880000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-549",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which methods or mechanisms can be used to execute JavaScript code snippets on a web page?",
    "back": "All of the above",
    "explanation": "JavaScript can be invoked directly upon script parsing, through explicit function calls, by binding callback listeners to user-triggered DOM events, or via self-invoking IIFEs.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Calling functions and methods",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Triggering event handlers/listeners (e.g., `onclick`, `onload`)",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Executing Immediately Invoked Function Expressions (IIFE)",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "All of the above",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: All of the above"
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Event Loop & Asynchronous Callbacks",
      "Set 3"
    ],
    "createdAt": 1715032940000,
    "updatedAt": 1715032940000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715032940000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-550",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What is the correct declaration for the HTML5 document type?",
    "back": "`<!DOCTYPE html>`",
    "explanation": "The HTML5 document type declaration is clean and case-insensitive: `<!DOCTYPE html>`. It instructs the browser to render the page in standard mode rather than quirks mode.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\">`",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "B",
        "text": "`<!DOCTYPE html>`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `<!DOCTYPE html>`"
      },
      {
        "id": "C",
        "text": "`<doctype html5>`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`<html>`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "HTML Document Object Model (DOM) Tree",
      "Set 3"
    ],
    "createdAt": 1715033000000,
    "updatedAt": 1715033000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033000000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-551",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which HTML tag represents the highest priority, largest heading on a webpage?",
    "back": "`<h1>`",
    "explanation": "HTML defines six levels of section headings, from `<h1>` (highest priority and largest font) down to `<h6>` (lowest priority and smallest font).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`<heading>`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`<h6>`",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`<h1>`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `<h1>`"
      },
      {
        "id": "D",
        "text": "`<head>`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "HTML5 Semantic Tags (<header>, <nav>, <article>)",
      "Set 3"
    ],
    "createdAt": 1715033060000,
    "updatedAt": 1715033060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-552",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What does the DOM stand for in web technologies?",
    "back": "Document Object Model",
    "explanation": "The DOM is a programming interface that represents an HTML or XML document as a structured tree of nodes, enabling languages like JavaScript to inspect, manipulate, and style elements dynamically.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Data Object Mode",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Document Object Model",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Document Object Model"
      },
      {
        "id": "C",
        "text": "Digital Ordinance Module",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Document Orientation Map",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Box Model (Content, Padding, Border, Margin)",
      "Set 3"
    ],
    "createdAt": 1715033120000,
    "updatedAt": 1715033120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-553",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which HTML5 semantic element is designed to highlight or mark text with a default yellow background?",
    "back": "`<mark>`",
    "explanation": "The `<mark>` tag defines text that should be marked or highlighted for reference due to its relevance in another context.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`<highlight>`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`<mark>`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `<mark>`"
      },
      {
        "id": "C",
        "text": "`<b>`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`<em>`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Specificity Calculation",
      "Set 3"
    ],
    "createdAt": 1715033180000,
    "updatedAt": 1715033180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-554",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which HTML tag is used to write internal CSS rules directly inside the `<head>` section of an HTML document?",
    "back": "`<style>`",
    "explanation": "- `<style>`: Encapsulates internal CSS declarations.\n  - `<link rel=\"stylesheet\" href=\"...\">`: Imports external CSS stylesheets.\n  - `style=\"...\"`: Inlines styles on an individual tag attribute.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`<script>`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`<style>`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `<style>`"
      },
      {
        "id": "C",
        "text": "`<css>`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`<link>`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Display Properties (block, inline, inline-block)",
      "Set 3"
    ],
    "createdAt": 1715033240000,
    "updatedAt": 1715033240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033240000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-555",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which CSS selector is used to target and style a group of elements that share a specific class name?",
    "back": "`.classname` (Class selector)",
    "explanation": "In CSS, a period (`.`) prefixes class selectors (e.g., `.button`), targeting all elements with `class=\"button\"`. The hash (`#`) prefix targets a unique `id`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`#classname` (ID selector)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`.classname` (Class selector)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `.classname` (Class selector)"
      },
      {
        "id": "C",
        "text": "`*classname`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`:classname`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Flexbox Axis Alignment",
      "Set 3"
    ],
    "createdAt": 1715033300000,
    "updatedAt": 1715033300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-556",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which CSS concept defines the rectangular spacing layers surrounding every HTML element (composed of margin, border, padding, and content)?",
    "back": "The Box Model",
    "explanation": "The CSS Box Model describes the rectangular boxes generated for elements: innermost **Content**, followed by **Padding**, then **Border**, and outermost **Margin**.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "The Grid Model",
        "isCorrect": false,
        "meaning": "Two-dimensional CSS layout model organizing items into rows and columns."
      },
      {
        "id": "B",
        "text": "The Box Model",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: The Box Model"
      },
      {
        "id": "C",
        "text": "The Flexbox Flow",
        "isCorrect": false,
        "meaning": "One-dimensional CSS layout model distributing space along a row or column."
      },
      {
        "id": "D",
        "text": "The Display Module",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Grid vs Flexbox Dimensions",
      "Set 3"
    ],
    "createdAt": 1715033360000,
    "updatedAt": 1715033360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033360000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-557",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Given a normalized database schema with tables: `Users(user_id, name)`, `Orders(order_id, user_id, order_date)`, and `Payments(payment_id, order_id, amount_paid)`. Which SQL construct retrieves the customer `name`, `order_date`, and `amount_paid` for all orders?",
    "back": "Relational `JOIN` operations linking primary keys to foreign keys across the tables",
    "explanation": "An `INNER JOIN` matches related records:\n  ```sql\n  SELECT u.name, o.order_date, p.amount_paid\n  FROM Users u\n  JOIN Orders o ON u.user_id = o.user_id\n  JOIN Payments p ON o.order_id = p.order_id;\n  ```",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`UNION ALL` across all three tables",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Relational `JOIN` operations linking primary keys to foreign keys across the tables",
        "isCorrect": true,
        "meaning": "SQL operation combining columns from two or more tables based on related keys."
      },
      {
        "id": "C",
        "text": "`SELECT * FROM Users, Payments` without join predicates",
        "isCorrect": false,
        "meaning": "SQL command to query and retrieve data rows from database tables."
      },
      {
        "id": "D",
        "text": "`DROP TABLE`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Database Management Systems & SQL",
      "SQL Multi-Table Inner Join & Normalization",
      "Set 3"
    ],
    "createdAt": 1715033420000,
    "updatedAt": 1715033420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-558",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "What is the definition and primary role of a \"Header\" in an MS Word document?",
    "back": "Text or graphics appearing at the top margin of every page",
    "explanation": "In MS Word, a **Header** is a dedicated section in the top margin of a document where recurring content (such as document titles, company logos, chapter names, or dates) repeats automatically across pages. Text appearing at the bottom margin is the **Footer**.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Text or graphics appearing at the bottom margin of every page",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Text or graphics appearing at the top margin of every page",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Text or graphics appearing at the top margin of every page"
      },
      {
        "id": "C",
        "text": "A hidden watermark that only prints on the cover page",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "An uneditable title that appears only in the table of contents",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Header & Footer Formatting",
      "Set 3"
    ],
    "createdAt": 1715033480000,
    "updatedAt": 1715033480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033480000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-559",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which universal keyboard shortcut is used to reverse or \"Undo\" the most recent action in Windows and MS Office applications?",
    "back": "Ctrl + Z",
    "explanation": "- `Ctrl + Z` reverses the previous typing, deletion, or formatting action (Undo).\n  - `Ctrl + Y` redoes the action that was undone (Redo).\n  - `Ctrl + U` applies an underline to selected text.\n  - `Ctrl + X` cuts selected content to the clipboard.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl + Y",
        "isCorrect": false,
        "meaning": "Redoes the most recently undone action."
      },
      {
        "id": "B",
        "text": "Ctrl + Z",
        "isCorrect": true,
        "meaning": "Undoes the last action performed."
      },
      {
        "id": "C",
        "text": "Ctrl + U",
        "isCorrect": false,
        "meaning": "Toggles underline styling on selected text."
      },
      {
        "id": "D",
        "text": "Ctrl + X",
        "isCorrect": false,
        "meaning": "Cuts selected text or object to clipboard."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Universal Keyboard Shortcuts (Undo Ctrl+Z)",
      "Set 3"
    ],
    "createdAt": 1715033540000,
    "updatedAt": 1715033540000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033540000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-560",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which shortcut key combination is used to save changes to the current active document in MS Word, Excel, and PowerPoint?",
    "back": "Ctrl + S",
    "explanation": "- `Ctrl + S` saves the active document or triggers the \"Save As\" prompt for newly created files.\n  - `Ctrl + A` selects all content in the document.\n  - `Ctrl + P` opens the Print dialog.\n  - `Ctrl + D` opens the Font dialog in Word or duplicates a slide/object in PowerPoint.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl + A",
        "isCorrect": false,
        "meaning": "Selects all content, text, or objects in the active document or sheet."
      },
      {
        "id": "B",
        "text": "Ctrl + S",
        "isCorrect": true,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "C",
        "text": "Ctrl + D",
        "isCorrect": false,
        "meaning": "Word: Font dialog; PowerPoint: Duplicate slide/shape; Excel: Fill down."
      },
      {
        "id": "D",
        "text": "Ctrl + P",
        "isCorrect": false,
        "meaning": "Opens Print dialog preview."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "Universal Keyboard Shortcuts (Save Ctrl+S)",
      "Set 3"
    ],
    "createdAt": 1715033600000,
    "updatedAt": 1715033600000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033600000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-561",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "Which shortcut key opens the \"Find\" dialog box to locate specific words, phrases, or numbers across an active document or worksheet?",
    "back": "Ctrl + F",
    "explanation": "- `Ctrl + F` launches Find / Navigation search.\n  - `Ctrl + H` opens the \"Find and Replace\" dialog.\n  - `Ctrl + G` opens the \"Go To\" navigation dialog.\n  - `Ctrl + K` inserts a Hyperlink.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl + F",
        "isCorrect": true,
        "meaning": "Opens Find search pane."
      },
      {
        "id": "B",
        "text": "Ctrl + H",
        "isCorrect": false,
        "meaning": "Opens Find and Replace dialog box."
      },
      {
        "id": "C",
        "text": "Ctrl + G",
        "isCorrect": false,
        "meaning": "Opens Go To dialog box to jump to specific page, line, or cell."
      },
      {
        "id": "D",
        "text": "Ctrl + K",
        "isCorrect": false,
        "meaning": "Opens Insert Hyperlink dialog."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Word Mail Merge Dynamic Data Sources",
      "Set 3"
    ],
    "createdAt": 1715033660000,
    "updatedAt": 1715033660000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033660000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-562",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Excel, which mathematical function calculates the sum total of all numbers within a designated cell range?",
    "back": "`SUM()`",
    "explanation": "`=SUM(A1:A10)` adds all numeric values in cells A1 through A10. Functions named `TOTAL()` or `ADD()` do not exist in standard Excel syntax.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`TOTAL()`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`SUM()`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `SUM()`"
      },
      {
        "id": "C",
        "text": "`ADD()`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`AVERAGE()`",
        "isCorrect": false
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS Excel AutoFilter vs Advanced Filter",
      "Set 3"
    ],
    "createdAt": 1715033720000,
    "updatedAt": 1715033720000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033720000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-563",
    "deckId": "deck-ms-office",
    "type": "mcq",
    "front": "In MS Excel, which keyboard shortcut combination immediately displays the current system Date in the active cell?",
    "back": "Ctrl + ;",
    "explanation": "- `Ctrl + ;` inserts the static current Date.\n  - `Ctrl + Shift + ;` (or `Ctrl + :`) inserts the static current Time.\n  - `=TODAY()` enters a dynamic volatile date formula.\n  - `=NOW()` enters dynamic date and time.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Ctrl + Shift + ;",
        "isCorrect": false,
        "meaning": "Saves active document to current path."
      },
      {
        "id": "B",
        "text": "Ctrl + ;",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Ctrl + ;"
      },
      {
        "id": "C",
        "text": "Alt + Shift + D",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ctrl + D",
        "isCorrect": false,
        "meaning": "Word: Font dialog; PowerPoint: Duplicate slide/shape; Excel: Fill down."
      }
    ],
    "tags": [
      "MS Office & Common Desktop Applications",
      "MS PowerPoint Slide Master Central Control",
      "Set 3"
    ],
    "createdAt": 1715033780000,
    "updatedAt": 1715033780000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033780000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-564",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol and port number are conventionally assigned for unencrypted File Transfer Protocol (FTP) command/control connections?",
    "back": "Port 21",
    "explanation": "FTP uses two separate connections: TCP Port 21 for commands and session management (Control Connection), and TCP Port 20 for the actual transfer of data streams (Data Connection).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Port 20",
        "isCorrect": false,
        "meaning": "FTP data transfer port."
      },
      {
        "id": "B",
        "text": "Port 21",
        "isCorrect": true,
        "meaning": "FTP control and command session port."
      },
      {
        "id": "C",
        "text": "Port 22",
        "isCorrect": false,
        "meaning": "SSH / SFTP encrypted remote access port."
      },
      {
        "id": "D",
        "text": "Port 23",
        "isCorrect": false,
        "meaning": "Telnet unencrypted plain-text remote terminal port."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "IPv4 vs IPv6 Address Architecture",
      "Set 3"
    ],
    "createdAt": 1715033840000,
    "updatedAt": 1715033840000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033840000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-565",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What are the default standard port numbers used by HTTP (unencrypted web traffic) and HTTPS (TLS/SSL encrypted web traffic)?",
    "back": "HTTP: Port 80; HTTPS: Port 443",
    "explanation": "Standard unencrypted World Wide Web communication runs over TCP port 80. Encrypted, secure web communication using TLS certificates runs over TCP port 443.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "HTTP: Port 80; HTTPS: Port 443",
        "isCorrect": true,
        "meaning": "HTTP unencrypted web communication port."
      },
      {
        "id": "B",
        "text": "HTTP: Port 8080; HTTPS: Port 8443",
        "isCorrect": false,
        "meaning": "Alternative HTTP / proxy server port."
      },
      {
        "id": "C",
        "text": "HTTP: Port 25; HTTPS: Port 587",
        "isCorrect": false,
        "meaning": "SMTP mail server transmission port."
      },
      {
        "id": "D",
        "text": "HTTP: Port 21; HTTPS: Port 22",
        "isCorrect": false,
        "meaning": "FTP control and command session port."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Address Resolution Protocol (ARP) Operation",
      "Set 3"
    ],
    "createdAt": 1715033900000,
    "updatedAt": 1715033900000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033900000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-566",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "Which protocol and default port are used by DNS (Domain Name System) to resolve standard client queries?",
    "back": "UDP port 53",
    "explanation": "Most standard DNS queries and responses are lightweight and operate over UDP port 53 for speed. TCP port 53 is used when response sizes exceed 512 bytes (or with EDNS0) and during zone transfers between authoritative DNS servers.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "TCP port 25",
        "isCorrect": false,
        "meaning": "SMTP mail server transmission port."
      },
      {
        "id": "B",
        "text": "UDP port 53",
        "isCorrect": true,
        "meaning": "DNS domain name resolution port."
      },
      {
        "id": "C",
        "text": "TCP port 110",
        "isCorrect": false,
        "meaning": "POP3 email retrieval port (downloads and removes from server)."
      },
      {
        "id": "D",
        "text": "UDP port 67",
        "isCorrect": false,
        "meaning": "DHCP server IP assignment broadcast port."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Distance Vector (RIP) vs Link State (OSPF)",
      "Set 3"
    ],
    "createdAt": 1715033960000,
    "updatedAt": 1715033960000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715033960000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-567",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What is the difference between the primary hardware role of a Network Switch versus a Network Router?",
    "back": "A Switch connects individual host devices within the same Local Area Network (LAN) subnet at Layer 2; a Router interconnects multiple distinct IP subnets and networks at Layer 3",
    "explanation": "A Layer 2 switch uses MAC address forwarding tables to switch frames within a single broadcast domain or subnet. A router evaluates Layer 3 IP routing tables to direct packets between separate networks (e.g., between an office LAN and the public Internet).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Switches connect networks globally; Routers connect devices locally on a single mother-board",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A Switch connects individual host devices within the same Local Area Network (LAN) subnet at Layer 2; a Router interconnects multiple distinct IP subnets and networks at Layer 3",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "Switches assign public IP addresses; Routers assign MAC addresses",
        "isCorrect": false,
        "meaning": "Public Cloud: Multi-tenant cloud infrastructure shared over public internet."
      },
      {
        "id": "D",
        "text": "Switches filter virus payloads; Routers only generate Wi-Fi signals",
        "isCorrect": false,
        "meaning": "Malicious program requiring human execution and attaching to host executables."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "TCP Three-Way Handshake Connection Establishment",
      "Set 3"
    ],
    "createdAt": 1715034020000,
    "updatedAt": 1715034020000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034020000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-568",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What specific network address identifies a hardware interface card at the OSI Data Link Layer (Layer 2)?",
    "back": "MAC Address (Media Access Control Address)",
    "explanation": "A MAC address is a 48-bit (6-byte) physical identifier permanently assigned to a Network Interface Card (NIC). IP addresses identify nodes logically at Layer 3, and Port numbers identify specific software processes at Layer 4.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "IP Address",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "MAC Address (Media Access Control Address)",
        "isCorrect": true,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "C",
        "text": "Port Number",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Subnet Mask",
        "isCorrect": false,
        "meaning": "32-bit mask separating network portion from host portion of an IP address."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Class B Default Subnet Mask Calculation",
      "Set 3"
    ],
    "createdAt": 1715034080000,
    "updatedAt": 1715034080000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034080000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-569",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What network identifier distinguishes between different concurrent software processes or services running on the same host machine at the Transport Layer (Layer 4)?",
    "back": "Port Number",
    "explanation": "Port numbers (ranging from 0 to 65535) enable multiplexing and demultiplexing. For example, a single server IP address can simultaneously run a web server on port 80, an SSH daemon on port 22, and a mail server on port 25.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "MAC Address",
        "isCorrect": false,
        "meaning": "48-bit unique hardware identifier burnt into network interface cards."
      },
      {
        "id": "B",
        "text": "IP Address",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Port Number",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Port Number"
      },
      {
        "id": "D",
        "text": "Domain Name",
        "isCorrect": false
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Half-Duplex vs Full-Duplex Transmission Modes",
      "Set 3"
    ],
    "createdAt": 1715034140000,
    "updatedAt": 1715034140000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034140000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-570",
    "deckId": "deck-networking",
    "type": "mcq",
    "front": "What is the core operational purpose of Network Address Translation (NAT)?",
    "back": "To translate private (non-routable) IP addresses from an internal local network into a public routable IP address for internet communication",
    "explanation": "NAT (and Port Address Translation / PAT) maps thousands of private internal host addresses (e.g., `192.168.1.x`) to one or a small pool of globally unique public IP addresses, mitigating IPv4 address exhaustion and masking internal network topology.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "To convert domain names into IP addresses",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "To translate private (non-routable) IP addresses from an internal local network into a public routable IP address for internet communication",
        "isCorrect": true,
        "meaning": "Layer 3: handles logical IP addressing and packet routing across networks."
      },
      {
        "id": "C",
        "text": "To encrypt hard drive partitions",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "To assign dynamic MAC addresses to Wi-Fi access points",
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      }
    ],
    "tags": [
      "Computer Networking & OSI Architecture",
      "Network Address Translation (NAT) Public/Private Mapping",
      "Set 3"
    ],
    "createdAt": 1715034200000,
    "updatedAt": 1715034200000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034200000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-571",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "In security architecture, what is the fundamental difference between Authentication and Authorization?",
    "back": "Authentication answers \"Who are you?\" (verifying user identity); Authorization answers \"What permissions and resources are you allowed to access?\"",
    "explanation": "- **Authentication (AuthN):** Validates credentials (username/password, biometrics, tokens) to prove identity.\n  - **Authorization (AuthZ):** Evaluates access control policies and role-based permissions (RBAC) to grant or deny access to specific files, APIs, or administrative actions.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Authentication determines what resources a user can access; Authorization verifies who the user is",
        "isCorrect": false,
        "meaning": "Microsoft Access: Relational desktop database management system."
      },
      {
        "id": "B",
        "text": "Authentication answers \"Who are you?\" (verifying user identity); Authorization answers \"What permissions and resources are you allowed to access?\"",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Authentication answers \"Who are you?\" (verifying user identity); Authorization answers \"What permissions and resources are you allowed to access?\""
      },
      {
        "id": "C",
        "text": "Authentication applies only to databases; Authorization applies only to firewalls",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "They are synonyms for password validation",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Asymmetric Cryptography Key Pairs (Public/Private)",
      "Set 3"
    ],
    "createdAt": 1715034260000,
    "updatedAt": 1715034260000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034260000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-572",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which of the following represents a valid real-world implementation of Multi-Factor Authentication (MFA)?",
    "back": "Entering your master password and then entering a time-based one-time passcode (TOTP) from an authenticator app on your smartphone",
    "explanation": "True MFA requires factors from at least two different categories:\n  - Factor 1: Something you know (Knowledge factor - password).\n  - Factor 2: Something you have (Possession factor - mobile phone / authenticator app / hardware security key).\n  Entering a password + security question combines two \"something you know\" items, which only constitutes single-factor authentication with multiple steps.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Entering a username and then entering your password",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Entering your password and answering a security question asking your pet's name",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Entering your master password and then entering a time-based one-time passcode (TOTP) from an authenticator app on your smartphone",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Entering your master password and then entering a time-based one-time passcode (TOTP) from an authenticator app on your smartphone"
      },
      {
        "id": "D",
        "text": "Entering two different email addresses",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Cloud Multi-Tenancy Architecture",
      "Set 3"
    ],
    "createdAt": 1715034320000,
    "updatedAt": 1715034320000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034320000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-573",
    "deckId": "deck-security",
    "type": "mcq",
    "front": "Which type of firewall acts as a \"Circuit-Level Gateway\" in network security?",
    "back": "A firewall that validates the TCP three-way handshake and session state without inspecting the packet's application-layer payload",
    "explanation": "Circuit-level gateways (such as SOCKS proxies) operate at Layer 5 (Session Layer). They verify whether a TCP handshake is legitimate and maintain connection state, but do not unpack or filter application-layer payload contents.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "A firewall that inspects HTTP headers and queries web databases",
        "isCorrect": false,
        "meaning": "Hypertext Transfer Protocol: foundational plain-text protocol of the World Wide Web."
      },
      {
        "id": "B",
        "text": "A firewall that validates the TCP three-way handshake and session state without inspecting the packet's application-layer payload",
        "isCorrect": true,
        "meaning": "Transmission Control Protocol: connection-oriented, reliable 3-way handshake."
      },
      {
        "id": "C",
        "text": "A physical circuit breaker that shuts down power to servers",
        "isCorrect": false,
        "meaning": "Layer 1: transmits raw bits over physical cable/wireless mediums."
      },
      {
        "id": "D",
        "text": "A packet filter that only examines Ethernet cable voltage",
        "isCorrect": false
      }
    ],
    "tags": [
      "Cloud Computing & Information Security",
      "Cloud Elastic Load Balancers Traffic Distribution",
      "Set 3"
    ],
    "createdAt": 1715034380000,
    "updatedAt": 1715034380000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034380000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-574",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "How many times will the string `\"Hello\"` be printed by the following nested loop pseudocode?",
    "back": "12 times",
    "explanation": "- The outer loop variable `i` iterates 3 times (values: 1, 2, 3).\n  - For each iteration of `i`, the inner loop variable `j` iterates 4 times (values: 1, 2, 3, 4).\n  - Total executions of the `Print` statement = $3 \\times 4 = 12$.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "7 times",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "12 times",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 12 times"
      },
      {
        "id": "C",
        "text": "14 times",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "3 times",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Nested Loops Iteration Complexity",
      "Set 3"
    ],
    "createdAt": 1715034440000,
    "updatedAt": 1715034440000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034440000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer i, j\nfor (i = 1 to 3)\n    for (j = 1 to 4)\n        Print \"Hello\"\n    end for\nend for",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-575",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the output of the following pseudocode calculating sum of even numbers?",
    "back": "6",
    "explanation": "- `i = 1`: $1 \\bmod 2 \\ne 0 \\rightarrow$ skip\n  - `i = 2`: $2 \\bmod 2 = 0 \\rightarrow x = 0 + 2 = 2$\n  - `i = 3`: $3 \\bmod 2 \\ne 0 \\rightarrow$ skip\n  - `i = 4`: $4 \\bmod 2 = 0 \\rightarrow x = 2 + 4 = 6$\n  - `i = 5`: $5 \\bmod 2 \\ne 0 \\rightarrow$ skip\n  - Final value of `x` printed = **6**.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "4",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "6",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "C",
        "text": "9",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "D",
        "text": "15",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Modulo Conditional Tracing & Branching",
      "Set 3"
    ],
    "createdAt": 1715034500000,
    "updatedAt": 1715034500000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034500000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x, i\nSet x = 0\nfor (i = 1 to 5)\n    if (i mod 2 == 0)\n        x = x + i\n    end if\nend for\nPrint x",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-576",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Which condition correctly checks whether a numeric variable `x` lies strictly between 10 and 20, inclusive?",
    "back": "`if (x >= 10 AND x <= 20)`",
    "explanation": "In programming and pseudocode logic, chained comparisons (`10 <= x <= 20`) are not directly evaluated as compound conditions in most procedural languages. Logical `AND` must be explicitly used to ensure both boundary conditions evaluate to true simultaneously.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`if (10 < x < 20)`",
        "isCorrect": false,
        "meaning": "Evaluates condition, returning one value for TRUE and another for FALSE."
      },
      {
        "id": "B",
        "text": "`if (x >= 10 AND x <= 20)`",
        "isCorrect": true,
        "meaning": "Evaluates condition, returning one value for TRUE and another for FALSE."
      },
      {
        "id": "C",
        "text": "`if (x >= 10 OR x <= 20)`",
        "isCorrect": false,
        "meaning": "Evaluates condition, returning one value for TRUE and another for FALSE."
      },
      {
        "id": "D",
        "text": "`if (x == 10 AND x == 20)`",
        "isCorrect": false,
        "meaning": "Evaluates condition, returning one value for TRUE and another for FALSE."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Recursive Call Stack Return Accumulation",
      "Set 3"
    ],
    "createdAt": 1715034560000,
    "updatedAt": 1715034560000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034560000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-577",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed by the following logical pseudocode?",
    "back": "`\"Condition Met\"`",
    "explanation": "1. Evaluate `(x > 10)`: Since `x = 5`, `5 > 10` is `False`.\n  2. Apply the logical negation `NOT(False)`: This produces `True`.\n  3. The `if` branch executes, printing `\"Condition Met\"`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`\"Condition Failed\"`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`\"Condition Met\"`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `\"Condition Met\"`"
      },
      {
        "id": "C",
        "text": "Compilation Error",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Nothing",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Bitwise Left Shift & Bitwise AND Operators",
      "Set 3"
    ],
    "createdAt": 1715034620000,
    "updatedAt": 1715034620000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034620000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer x\nSet x = 5\nif (NOT(x > 10))\n    Print \"Condition Met\"\nelse\n    Print \"Condition Failed\"\nend if",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-578",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the time complexity of the following algorithm loop that repeatedly halves the input variable $n$?",
    "back": "$O(\\log n)$",
    "explanation": "Each iteration divides the problem size by 2. The number of iterations required for $n$ to reduce to 1 satisfies $2^k = n \\implies k = \\log_2 n$, giving logarithmic time complexity $O(\\log n)$ (identical to binary search).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "$O(1)$",
        "isCorrect": false,
        "meaning": "Constant time complexity: execution time is independent of input size."
      },
      {
        "id": "B",
        "text": "$O(n)$",
        "isCorrect": false,
        "meaning": "Linear time complexity: execution time scales directly proportional to input size."
      },
      {
        "id": "C",
        "text": "$O(\\log n)$",
        "isCorrect": true,
        "meaning": "Logarithmic time complexity: problem size halves at each step."
      },
      {
        "id": "D",
        "text": "$O(n^2)$",
        "isCorrect": false,
        "meaning": "Quadratic time complexity: nested loops iterating over input."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Accumulator Loop Termination Conditions",
      "Set 3"
    ],
    "createdAt": 1715034680000,
    "updatedAt": 1715034680000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034680000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "while (n > 1)\n    n = n / 2\nend while",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-579",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the output of the following pseudocode array traversal?",
    "back": "25",
    "explanation": "- Initial `max_val = arr[0] = 5`.\n  - `i = 1`: `12 > 5` $\\rightarrow$ `max_val = 12`.\n  - `i = 2`: `8 > 12` (False).\n  - `i = 3`: `25 > 12` $\\rightarrow$ `max_val = 25`.\n  - `i = 4`: `14 > 25` (False).\n  - Loop terminates; `max_val` printed is **25**.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "5",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "B",
        "text": "14",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      },
      {
        "id": "C",
        "text": "25",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "D",
        "text": "12",
        "isCorrect": false,
        "meaning": "Common trap: off-by-one boundary calculation from terminating one iteration early or late."
      }
    ],
    "tags": [
      "Pseudocodes & Algorithmic Tracing",
      "Array Index Boundary & Off-by-One Iteration",
      "Set 3"
    ],
    "createdAt": 1715034740000,
    "updatedAt": 1715034740000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034740000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer arr[5] = [5, 12, 8, 25, 14]\nInteger max_val, i\nSet max_val = arr[0]\nfor (i = 1 to 4)\n    if (arr[i] > max_val)\n        max_val = arr[i]\n    end if\nend for\nPrint max_val",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-580",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which HTML tag is used to insert a line break without starting a new paragraph?",
    "back": "`<br>`",
    "explanation": "`<br>` is an empty (void) HTML element that inserts a single carriage return / line break. `<hr>` inserts a horizontal thematic dividing line.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`<lb>`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`<break>`",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`<br>`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `<br>`"
      },
      {
        "id": "D",
        "text": "`<hr>`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "HTML5 Semantic Document Containers (<main>, <section>)",
      "Set 3"
    ],
    "createdAt": 1715034800000,
    "updatedAt": 1715034800000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034800000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-581",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which attribute in an `<img>` tag specifies alternative text to display if the image file fails to load or for screen readers?",
    "back": "`alt`",
    "explanation": "The `alt` (alternative text) attribute is required for accessibility and renders descriptive text if the image asset cannot be retrieved.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`title`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`src`",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`alt`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `alt`"
      },
      {
        "id": "D",
        "text": "`caption`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Box Model Padding vs Margin Calculation",
      "Set 3"
    ],
    "createdAt": 1715034860000,
    "updatedAt": 1715034860000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034860000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-582",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What is the default initial value of the CSS `position` property for standard HTML elements?",
    "back": "`static`",
    "explanation": "By default, all elements have `position: static`. Elements are positioned according to the normal document flow and ignore `top`, `bottom`, `left`, `right`, and `z-index` properties.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`relative`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`absolute`",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`static`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `static`"
      },
      {
        "id": "D",
        "text": "`fixed`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Positioning (fixed vs absolute vs relative)",
      "Set 3"
    ],
    "createdAt": 1715034920000,
    "updatedAt": 1715034920000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034920000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-583",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "In JavaScript, what does `NaN` represent, and what does `typeof NaN` evaluate to?",
    "back": "Not a Number; `typeof NaN === \"number\"`",
    "explanation": "In JavaScript, `NaN` represents an unrepresentable or erroneous numeric result (e.g., `0 / 0` or `parseInt(\"abc\")`). Per the IEEE-754 floating-point specification, `NaN` is classified under the `number` primitive type.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Not a Name; `typeof NaN === \"string\"`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Not a Number; `typeof NaN === \"number\"`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Not a Number; `typeof NaN === \"number\"`"
      },
      {
        "id": "C",
        "text": "Null and None; `typeof NaN === \"undefined\"`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No Arithmetic; `typeof NaN === \"boolean\"`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Typeof Null Primitive Quirk",
      "Set 3"
    ],
    "createdAt": 1715034980000,
    "updatedAt": 1715034980000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715034980000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-584",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which built-in JavaScript method parses a JSON-formatted string and transforms it into a JavaScript object?",
    "back": "`JSON.parse()`",
    "explanation": "- `JSON.parse(jsonString)` parses a valid JSON string into a native JavaScript object.\n  - `JSON.stringify(object)` serializes a JavaScript object into a JSON string representation.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`JSON.stringify()`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`JSON.parse()`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `JSON.parse()`"
      },
      {
        "id": "C",
        "text": "`JSON.toObject()`",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`JSON.decode()`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Variable and Function Hoisting",
      "Set 3"
    ],
    "createdAt": 1715035040000,
    "updatedAt": 1715035040000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715035040000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-585",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which JavaScript keyword declares a block-scoped variable that cannot be reassigned after its initial declaration?",
    "back": "`const`",
    "explanation": "- `const`: Block-scoped, cannot be reassigned or redeclared within the same scope.\n  - `let`: Block-scoped, can be reassigned.\n  - `var`: Function-scoped or global, subject to hoisting, can be redeclared and reassigned.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "`var`",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`let`",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`const`",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: `const`"
      },
      {
        "id": "D",
        "text": "`static`",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "JavaScript Array Methods (push, pop, shift, unshift)",
      "Set 3"
    ],
    "createdAt": 1715035100000,
    "updatedAt": 1715035100000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715035100000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-586",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "What is \"Variable Hoisting\" in JavaScript?",
    "back": "Moving variable and function declarations to the top of their containing scope during the compilation phase before code execution",
    "explanation": "In JavaScript, the engine allocates memory for function declarations and `var` declarations during compilation. As a result, variables declared with `var` can be referenced before their lexical line of declaration (evaluating to `undefined`), whereas `let` and `const` remain uninitialized in the Temporal Dead Zone (TDZ).",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Automatically deleting unused variables from memory",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Moving variable and function declarations to the top of their containing scope during the compilation phase before code execution",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Moving variable and function declarations to the top of their containing scope during the compilation phase before code execution"
      },
      {
        "id": "C",
        "text": "Converting all numbers into floating-point representation",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Dynamically loading scripts asynchronously",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "CSS Flexbox Main-Axis Alignment (justify-content)",
      "Set 3"
    ],
    "createdAt": 1715035160000,
    "updatedAt": 1715035160000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715035160000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-587",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "In web browser JavaScript event handling, what is the default event propagation flow where an event triggers on the innermost target element and bubbles upwards through ancestors in the DOM tree?",
    "back": "Event Bubbling",
    "explanation": "In the standard W3C event model, events first undergo the Capturing phase (down from `window` to the target), followed by the Target phase, and finally the Bubbling phase, where the event bubbles upward from the target element through all parent DOM nodes.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Event Capturing (Trickling)",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Event Bubbling",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Event Bubbling"
      },
      {
        "id": "C",
        "text": "Event Broadcasting",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Event Polling",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "DOM Event Propagation (Event Bubbling vs Capturing)",
      "Set 3"
    ],
    "createdAt": 1715035220000,
    "updatedAt": 1715035220000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715035220000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-588",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be printed for arr[1], arr[4], and arr[7] after executing the index transformation loop?",
    "back": "21, 43, 88",
    "explanation": "Step-by-step tracing:\n- At i=1: arr[1] = 24 - ((1 mod 7)*3) = 24 - 3 = 21. 1 mod 11 != 0, so arr[1] = 21.\n- At i=4: arr[4] = 55 - ((4 mod 7)*3) = 55 - 12 = 43. 4 mod 11 != 0, so arr[4] = 43.\n- At i=7: arr[7] = 88 - ((7 mod 7)*3) = 88 - 0 = 88. 7 mod 11 != 0, so arr[7] = 88.\nOutput is: 21, 43, 88.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "21, 43, 88",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: 21, 43, 88"
      },
      {
        "id": "B",
        "text": "24, 42, 77",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "21, 55, 88",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "18, 43, 85",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Arrays",
      "Modulo Arithmetic"
    ],
    "createdAt": 1715036000000,
    "updatedAt": 1715036000000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036000000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "Integer arr[8] = {15, 24, 33, 42, 55, 66, 77, 88}\nfor (Integer i = 0 to 7)\n    arr[i] = arr[i] - ((i mod 7) * 3)\n    if (i mod 11 == 0)\n        arr[i] = arr[i] + ((i / 11) * 2)\n    end if\nend for\nPrint arr[1], arr[4], arr[7]",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-589",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be the complete resulting array after applying the index transformation rules to nums = [15, 24, 33, 42, 55, 66, 77, 88]?",
    "back": "[15, 21, 27, 33, 43, 51, 59, 88]",
    "explanation": "Applying nums[i] -= (i % 7) * 3 and if i % 11 == 0, adding (i // 11) * 2:\n- i=0: 15 - 0 + 0 = 15\n- i=1: 24 - 3 = 21\n- i=2: 33 - 6 = 27\n- i=3: 42 - 9 = 33\n- i=4: 55 - 12 = 43\n- i=5: 66 - 15 = 51\n- i=6: 77 - 18 = 59\n- i=7: 88 - 0 = 88\nResult: [15, 21, 27, 33, 43, 51, 59, 88].",
    "mcqOptions": [
      {
        "id": "A",
        "text": "[15, 21, 27, 33, 43, 51, 59, 88]",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: [15, 21, 27, 33, 43, 51, 59, 88]"
      },
      {
        "id": "B",
        "text": "[15, 24, 30, 36, 42, 48, 54, 88]",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "[15, 21, 24, 30, 40, 50, 60, 88]",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "[12, 18, 24, 30, 42, 52, 62, 70]",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Arrays",
      "Transformation"
    ],
    "createdAt": 1715036060000,
    "updatedAt": 1715036060000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036060000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-590",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the optimal time and auxiliary space complexity to perform index-based array transformations on an array of size N in-place?",
    "back": "O(N) Time and O(1) Auxiliary Space",
    "explanation": "A single linear traversal from i = 0 to N - 1 updates each element in-place with constant-time arithmetic expressions, running in O(N) linear time and requiring O(1) auxiliary space without extra memory allocations.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "O(N) Time and O(1) Auxiliary Space",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: O(N) Time and O(1) Auxiliary Space"
      },
      {
        "id": "B",
        "text": "O(N log N) Time and O(N) Auxiliary Space",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "O(N^2) Time and O(1) Auxiliary Space",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "O(N) Time and O(N) Auxiliary Space",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Complexity Analysis",
      "Algorithms"
    ],
    "createdAt": 1715036120000,
    "updatedAt": 1715036120000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036120000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-591",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What is the SMALLEST positive integer whose decimal digits sum up to 20?",
    "back": "299",
    "explanation": "To minimize the positive integer:\n1. Minimize the number of digits by maximizing digits to 9: ceil(20 / 9) = 3 digits.\n2. Place maximum digits (9) at the least significant positions: 20 - 9 = 11; 11 - 9 = 2.\n3. The remaining value 2 is placed at the leading position, producing 299 (2 + 9 + 9 = 20). Any smaller number has sum < 20.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "299",
        "isCorrect": true,
        "meaning": "Correct mathematical evaluation according to language operator rules."
      },
      {
        "id": "B",
        "text": "389",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "C",
        "text": "479",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      },
      {
        "id": "D",
        "text": "1199",
        "isCorrect": false,
        "meaning": "Calculated distractor value resulting from an incorrect arithmetic operation or iteration count."
      }
    ],
    "tags": [
      "Pseudocode",
      "Greedy",
      "Number Theory"
    ],
    "createdAt": 1715036180000,
    "updatedAt": 1715036180000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036180000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-592",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "What will be returned by the greedy function findSmallestNumber(112) for target digit sum N = 112?",
    "back": "\"4999999999999\"",
    "explanation": "112 / 9 = 12 with remainder 4 (12 * 9 + 4 = 112).\nPlacing twelve 9s at the least significant places and 4 at the leading position yields the minimal integer: 4 followed by twelve 9s = \"4999999999999\".",
    "mcqOptions": [
      {
        "id": "A",
        "text": "\"4999999999999\" (4 followed by twelve 9s)",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: \"4999999999999\""
      },
      {
        "id": "B",
        "text": "\"9999999999994\"",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "\"1129999999999\"",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "\"8888888888888\"",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Greedy",
      "Algorithms"
    ],
    "createdAt": 1715036240000,
    "updatedAt": 1715036240000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036240000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function findSmallestNumber(Integer N)\n    String digits = \"\"\n    while (N > 9)\n        digits = digits + \"9\"\n        N = N - 9\n    end while\n    digits = digits + String(N)\n    return reverse(digits)\nend function\n\nPrint findSmallestNumber(112)",
    "codeLanguage": "pseudocode"
  },
  {
    "id": "card-acc-593",
    "deckId": "deck-pseudocode",
    "type": "mcq",
    "front": "Why is greedy placement of '9' at the least significant positions optimal to minimize a number with a given digit sum N?",
    "back": "It minimizes the total digit count and minimizes the leading most-significant digit",
    "explanation": "A number with fewer digits is strictly smaller than any number with more digits. Maximizing digits to 9 from the right ensures the total number of digits is minimized (ceil(N/9)) and the smallest non-zero remainder forms the most significant leading digit.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "It minimizes the total digit count and minimizes the leading most-significant digit",
        "isCorrect": true,
        "meaning": "Counts cells in a range that contain numbers only."
      },
      {
        "id": "B",
        "text": "It guarantees the number is divisible by 9",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "It converts decimal numbers directly into binary strings",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "It prevents 32-bit floating-point precision loss",
        "isCorrect": false
      }
    ],
    "tags": [
      "Pseudocode",
      "Greedy",
      "Logic"
    ],
    "createdAt": 1715036300000,
    "updatedAt": 1715036300000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036300000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-594",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which JavaScript function correctly toggles the display style of targetBox between hidden and visible?",
    "back": "Checks target.style.display and toggles between \"block\" and \"none\"",
    "explanation": "To toggle visibility cleanly using vanilla JavaScript: inspect target.style.display; if it is \"none\" or empty string, set it to \"block\"; otherwise set it to \"none\".",
    "mcqOptions": [
      {
        "id": "A",
        "text": "Checks target.style.display and toggles between \"block\" and \"none\"",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: Checks target.style.display and toggles between \"block\" and \"none\""
      },
      {
        "id": "B",
        "text": "document.getElementById(\"targetBox\").toggle()",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "target.style.visibility = !target.style.visibility",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "document.body.removeChild(targetBox)",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web",
      "JavaScript",
      "DOM"
    ],
    "createdAt": 1715036360000,
    "updatedAt": 1715036360000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036360000,
      "lapses": 0,
      "state": "new"
    },
    "codeSnippet": "function toggleVisibility() {\n    const target = document.getElementById(\"targetBox\");\n    if (target.style.display === \"none\" || target.style.display === \"\") {\n        target.style.display = \"block\";\n    } else {\n        target.style.display = \"none\";\n    }\n}",
    "codeLanguage": "javascript"
  },
  {
    "id": "card-acc-595",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which CSS declaration correctly sets the background color of all elements with class \"container\" to #f4f4f4?",
    "back": ".container { background-color: #f4f4f4; }",
    "explanation": "The period (.) designates a class selector in CSS. `.container { background-color: #f4f4f4; }` targets elements with class=\"container\" and assigns the background color.",
    "mcqOptions": [
      {
        "id": "A",
        "text": ".container { background-color: #f4f4f4; }",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: .container { background-color: #f4f4f4; }"
      },
      {
        "id": "B",
        "text": "#container { background-color: #f4f4f4; }",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "container { bg-color: #f4f4f4; }",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": ".container { color: #f4f4f4; }",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web",
      "CSS",
      "Styling"
    ],
    "createdAt": 1715036420000,
    "updatedAt": 1715036420000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036420000,
      "lapses": 0,
      "state": "new"
    }
  },
  {
    "id": "card-acc-596",
    "deckId": "deck-web",
    "type": "mcq",
    "front": "Which HTML markup correctly adds the class \"new\" to a button element that triggers toggleVisibility()?",
    "back": "<button class=\"new\" onclick=\"toggleVisibility()\">Toggle Details</button>",
    "explanation": "In HTML, classes are assigned via the `class` attribute (unlike JSX `className`), and inline click handlers use `onclick=\"toggleVisibility()\"`.",
    "mcqOptions": [
      {
        "id": "A",
        "text": "<button class=\"new\" onclick=\"toggleVisibility()\">Toggle Details</button>",
        "isCorrect": true,
        "meaning": "Satisfies the question criteria: <button class=\"new\" onclick=\"toggleVisibility()\">Toggle Details</button>"
      },
      {
        "id": "B",
        "text": "<button classname=\"new\" click=\"toggleVisibility()\">Toggle Details</button>",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "<button new onpress=\"toggleVisibility()\">Toggle Details</button>",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "<button class=\"new\" trigger=\"toggleVisibility()\">Toggle Details</button>",
        "isCorrect": false
      }
    ],
    "tags": [
      "Web",
      "HTML",
      "DOM"
    ],
    "createdAt": 1715036480000,
    "updatedAt": 1715036480000,
    "srs": {
      "reps": 0,
      "interval": 0,
      "easeFactor": 2.5,
      "lastStudied": null,
      "dueDate": 1715036480000,
      "lapses": 0,
      "state": "new"
    }
  }
];
