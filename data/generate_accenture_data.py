import json
import re
from verify_explanations import EXPLANATIONS

DECK_MAP = {
    "Cloud": "deck-cloud",
    "Networking": "deck-networking",
    "Security": "deck-security",
    "MS Office": "deck-ms-office",
    "Pseudocode": "deck-pseudocode",
    "JavaScript": "deck-pseudocode",
}

def load_existing_cards():
    with open("src/lib/accentureData.ts", "r") as f:
        content = f.read()

    # Extract ACCENTURE_CARDS array JSON content
    m = re.search(r"export const ACCENTURE_CARDS: Flashcard\[\] = (\[[\s\S]*\]);\s*$", content)
    if not m:
        raise ValueError("Could not find ACCENTURE_CARDS array in src/lib/accentureData.ts")
    raw_json = m.group(1)
    cards = json.loads(raw_json)
    print(f"Loaded {len(cards)} existing cards from src/lib/accentureData.ts")
    return cards

def build_new_cards():
    with open("scratch_new_questions.json", "r") as f:
        data = json.load(f)
    questions = data["questions"]
    new_cards = []
    base_time = 1715012000000

    for q in questions:
        qid = q["id"]
        topic = q["topic"]
        deck_id = DECK_MAP[topic]
        stem = q["question"].strip()
        ans_key = q["answer"]
        ans_text = q["options"][ans_key].strip()
        explanation = EXPLANATIONS[qid].strip()

        mcq_options = [
            {
                "id": opt_key,
                "text": q["options"][opt_key].strip(),
                "isCorrect": (opt_key == ans_key)
            }
            for opt_key in ["A", "B", "C", "D"]
        ]

        if topic == "JavaScript":
            tags = ["Pseudocode", "JavaScript", f"Set {q.get('set', 1)}"]
        else:
            tags = [topic, f"Set {q.get('set', 1)}"]

        card_time = base_time + qid * 60000

        card = {
            "id": f"card-acc-{200 + qid}",
            "deckId": deck_id,
            "type": "mcq",
            "front": stem,
            "back": ans_text,
            "explanation": explanation,
            "mcqOptions": mcq_options,
            "tags": tags,
            "createdAt": card_time,
            "updatedAt": card_time,
            "srs": {
                "reps": 0,
                "interval": 0,
                "easeFactor": 2.5,
                "lastStudied": None,
                "dueDate": card_time,
                "lapses": 0,
                "state": "new"
            }
        }
        new_cards.append(card)

    print(f"Built {len(new_cards)} new cards from scratch_new_questions.json")
    return new_cards

def main():
    existing_cards = load_existing_cards()
    new_cards = build_new_cards()

    combined_cards = existing_cards + new_cards
    print(f"Total combined cards: {len(combined_cards)}")

    # Count by deck
    counts = {}
    for c in combined_cards:
        d = c["deckId"]
        counts[d] = counts.get(d, 0) + 1
    print("Counts by deck:", counts)

    decks = [
        {
            "id": "deck-ms-office",
            "title": "MS Office & Productivity",
            "description": f"Word shortcuts, Excel formulas & charts, PowerPoint tools, and formatting mastery ({counts.get('deck-ms-office', 135)} Questions).",
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
            "description": f"OSI & TCP/IP layers, routing, switching, IP addressing, DNS, ports, and protocols ({counts.get('deck-networking', 63)} Questions).",
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
            "description": f"Threat vectors, malware types, symmetric/asymmetric encryption, firewalls, and SSL/TLS ({counts.get('deck-security', 60)} Questions).",
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
            "description": f"IaaS, PaaS, SaaS models, hypervisors, elasticity, cloud security, and architecture ({counts.get('deck-cloud', 88)} Questions).",
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
            "description": f"Loop execution, conditional branching, bitwise operators, string manipulation, and tracing ({counts.get('deck-pseudocode', 121)} Questions).",
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
    ]

    out_content = f"""import {{ Deck, Flashcard }} from "./types";

export const ACCENTURE_DECKS: Deck[] = {json.dumps(decks, indent=2)};

export const ACCENTURE_CARDS: Flashcard[] = {json.dumps(combined_cards, indent=2)};
"""

    with open("src/lib/accentureData.ts", "w") as f:
        f.write(out_content)

    print("Successfully wrote combined cards and decks to src/lib/accentureData.ts")

if __name__ == "__main__":
    main()
