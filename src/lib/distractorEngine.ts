// Knowledge base and distractor engine for contextual exam explanations
import { MCQOption } from './types';

// Normalized lookup dictionary for concepts across the syllabus
const CONCEPT_DICTIONARY: Record<string, string> = {
  // MS Office & Shortcuts
  'ctrl+a': 'Selects all content, text, or objects in the active document or sheet.',
  'ctrl+b': 'Applies or toggles Bold formatting on the selected text.',
  'ctrl+c': 'Copies the selected text, cell, or object to the clipboard.',
  'ctrl+d': 'Opens Font dialog in Word; duplicates selected shape/slide in PowerPoint; fills down in Excel.',
  'ctrl+e': 'Applies Center alignment to the selected paragraph.',
  'ctrl+f': 'Opens the Find tool/navigation pane to search for text or data.',
  'ctrl+g': 'Opens the Go To dialog to jump to a specific page, line, or cell.',
  'ctrl+h': 'Opens the Replace dialog to find and replace text.',
  'ctrl+i': 'Applies or toggles Italic styling on the selected text.',
  'ctrl+j': 'Applies Justify alignment (aligns text to both left and right margins).',
  'ctrl+k': 'Opens the Insert Hyperlink dialog to create a link.',
  'ctrl+l': 'Applies Left alignment to the selected paragraph.',
  'ctrl+m': 'Indents a paragraph in Word; inserts a new blank slide in PowerPoint.',
  'ctrl+n': 'Creates a brand new blank document, workbook, or presentation.',
  'ctrl+o': 'Opens an existing document or file from storage.',
  'ctrl+p': 'Opens the Print dialog or backstage print preview.',
  'ctrl+q': 'Removes all paragraph formatting and resets to default style in Word.',
  'ctrl+r': 'Applies Right alignment to the selected paragraph.',
  'ctrl+s': 'Saves the active document to its current file path.',
  'ctrl+t': 'Creates a hanging indent in Word; creates a formatted Table in Excel.',
  'ctrl+u': 'Applies or toggles Underline formatting on the selected text.',
  'ctrl+v': 'Pastes content from the clipboard into the current cursor position.',
  'ctrl+w': 'Closes the currently active document or window without quitting the app.',
  'ctrl+x': 'Cuts the selected content to the clipboard.',
  'ctrl+y': 'Redoes the most recently undone action.',
  'ctrl+z': 'Undoes the most recent action.',
  'f5': 'Opens Go To dialog in Excel/Word; starts Slide Show from the first slide in PowerPoint.',
  'shift+f5': 'Starts Slide Show from the current active slide in PowerPoint.',
  'f7': 'Launches the Spelling and Grammar checking tool.',
  'f12': 'Opens the Save As dialog box to save a new file copy.',
  'ctrl+shift+l': 'Toggles AutoFilter arrows on the selected table/headers in Excel.',
  'ctrl+1': 'Opens the Format Cells dialog box in Excel.',
  'alt+=': 'Inserts an automatic AutoSum formula in Excel.',
  'ctrl+;': 'Inserts the current static date into the active Excel cell.',
  'ctrl+shift+:': 'Inserts the current static time into the active Excel cell.',

  // Excel Functions
  'sum': 'Calculates the total sum of all numerical values in a specified range.',
  'average': 'Calculates the arithmetic mean of numbers in a range, ignoring empty cells.',
  'count': 'Counts only the cells in a range that contain numerical values.',
  'counta': 'Counts all non-empty cells in a range (including text, numbers, and errors).',
  'countblank': 'Counts only empty or blank cells within a specified range.',
  'countif': 'Counts the number of cells within a range that satisfy a single given condition.',
  'countifs': 'Counts the number of cells that meet multiple criteria across multiple ranges.',
  'sumif': 'Sums the values in a range that meet a single specific criterion.',
  'sumifs': 'Sums values in a range based on multiple criteria across multiple ranges.',
  'max': 'Returns the single highest numerical value from a set of values.',
  'min': 'Returns the single lowest numerical value from a set of values.',
  'vlookup': 'Searches vertically down the first column of a table and returns a value in the same row from a specified column index.',
  'hlookup': 'Searches horizontally across the top row of a table and returns a value in the same column.',
  'xlookup': 'Modern lookup function that searches in any direction (vertical or horizontal) and supports exact matching by default.',
  'index': 'Returns the value of a cell at the intersection of a specified row and column within a table range.',
  'match': 'Returns the numeric relative position of a specified value within a one-dimensional array.',
  'if': 'Evaluates a logical condition and returns one specified value if TRUE, and another if FALSE.',
  'ifs': 'Evaluates multiple logical conditions sequentially without requiring nested IF statements.',
  'len': 'Returns the total count of characters in a text string, including spaces and punctuation.',
  'trim': 'Strips all leading, trailing, and duplicate spaces from text, preserving single spaces between words.',
  'concatenate': 'Joins two or more text strings into a single unified string.',
  'concat': 'Modern replacement for CONCATENATE that supports entire ranges of cells.',
  'pmt': 'Calculates the periodic payment for a loan based on constant payments and a fixed interest rate.',
  'now': 'Returns the current dynamic date and time according to the system clock.',
  'today': 'Returns the current dynamic date without time components.',

  // Networking Ports
  'port 20': 'FTP Data port used for transferring file payloads.',
  'port 21': 'FTP Control port used for sending commands and authentication.',
  'port 22': 'SSH (Secure Shell) / SFTP port used for encrypted remote terminal access and secure file transfer.',
  'port 23': 'Telnet port used for unencrypted, plain-text remote terminal sessions (legacy & insecure).',
  'port 25': 'SMTP (Simple Mail Transfer Protocol) port used for sending emails between mail servers.',
  'port 53': 'DNS (Domain Name System) port used to resolve human-readable domain names into IP addresses.',
  'port 67': 'DHCP Server port used to broadcast and assign IP configurations to clients.',
  'port 68': 'DHCP Client port used to receive IP addresses and network parameters.',
  'port 69': 'TFTP (Trivial File Transfer Protocol) port used for lightweight file transfer without authentication.',
  'port 80': 'HTTP (Hypertext Transfer Protocol) port used for standard unencrypted web communications.',
  'port 110': 'POP3 (Post Office Protocol v3) port used by email clients to retrieve and download emails from a server.',
  'port 123': 'NTP (Network Time Protocol) port used to synchronize system clocks across network devices.',
  'port 143': 'IMAP (Internet Message Access Protocol) port used to synchronize and manage emails across multiple devices.',
  'port 161': 'SNMP (Simple Network Management Protocol) port used for querying network device statistics.',
  'port 443': 'HTTPS port used for secure web browsing encrypted with TLS/SSL.',
  'port 3306': 'Default listening port for MySQL database server connections.',
  'port 3389': 'RDP (Remote Desktop Protocol) port used by Microsoft Windows for remote GUI management.',
  'port 5432': 'Default listening port for PostgreSQL database server connections.',
  'port 8080': 'Common alternative HTTP port frequently used for proxy servers and local development web servers.',

  // Networking Protocols & Architecture
  'tcp': 'Transmission Control Protocol: connection-oriented, reliable protocol with 3-way handshake, sequencing, and retransmission.',
  'udp': 'User Datagram Protocol: connectionless, lightweight, best-effort protocol without handshake or delivery guarantees (used for streaming, DNS, VoIP).',
  'icmp': 'Internet Control Message Protocol: network-layer diagnostic protocol used by ping and traceroute for error reporting.',
  'arp': 'Address Resolution Protocol: resolves a known Layer 3 IP address to a physical Layer 2 MAC address on the local network.',
  'rarp': 'Reverse ARP: resolves a physical MAC address to an IP address (largely superseded by DHCP).',
  'dhcp': 'Dynamic Host Configuration Protocol: automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to network clients.',
  'dns': 'Domain Name System: hierarchical distributed naming system that translates domain names into numerical IP addresses.',
  'ftp': 'File Transfer Protocol: client-server protocol used to transfer files over TCP (unencrypted credentials).',
  'ssh': 'Secure Shell: cryptographic network protocol for secure data communication and remote command execution.',
  'telnet': 'Telecommunications Network: legacy bidirectional terminal protocol transmitting in plain text without encryption.',
  'smtp': 'Simple Mail Transfer Protocol: push-based protocol used to send email from a client to a server or between servers.',
  'pop3': 'Post Office Protocol 3: downloads emails from server to local client and typically removes them from the server.',
  'imap': 'Internet Message Access Protocol: keeps emails on the server and synchronizes state (read/unread/folders) across all devices.',
  'http': 'Hypertext Transfer Protocol: foundational protocol of the World Wide Web, transfers hypertext in plain text.',
  'https': 'HTTP Secure: encrypts web traffic using Transport Layer Security (TLS) or SSL to ensure confidentiality and integrity.',
  'ip': 'Internet Protocol: Layer 3 protocol responsible for addressing and routing packets across network boundaries.',
  'mac address': 'Media Access Control address: 48-bit unique hardware identifier hardcoded into network interface cards (Layer 2).',
  'ip address': 'Logical numerical label assigned to every device connected to a computer network (Layer 3).',
  'subnet mask': '32-bit number used to divide an IP address into network and host portions.',
  'default gateway': 'The router interface on the local network that forwards traffic destined outside the local subnet.',

  // OSI Layers
  'physical layer': 'Layer 1: transmits raw unstructured bit streams over physical transmission mediums (cables, fiber, radio frequencies).',
  'data link layer': 'Layer 2: handles node-to-node frame delivery, physical MAC addressing, flow control, and error detection (Ethernet, switches).',
  'network layer': 'Layer 3: responsible for logical addressing (IP addresses) and routing packets across multiple networks (routers).',
  'transport layer': 'Layer 4: provides host-to-host communication, end-to-end reliability, segmentation, and port multiplexing (TCP, UDP).',
  'session layer': 'Layer 5: establishes, manages, and terminates persistent dialogue sessions between applications.',
  'presentation layer': 'Layer 6: handles data format translation, syntax conversion, character encoding, compression, and encryption/decryption (TLS/SSL).',
  'application layer': 'Layer 7: closest to the end user; provides network services directly to applications (HTTP, DNS, FTP, SMTP).',

  // Cybersecurity Concepts
  'phishing': 'Social engineering attack where attackers impersonate trustworthy entities to deceive victims into revealing sensitive credentials.',
  'spear phishing': 'Highly tailored, personalized phishing attack targeted at a specific individual or organization.',
  'whaling': 'Targeted phishing attack directed exclusively at high-profile executives (CEOs, CFOs, government leaders).',
  'smishing': 'Phishing carried out via SMS text messages containing malicious links.',
  'vishing': 'Voice phishing conducted over telephone calls to trick victims into revealing financial or personal details.',
  'man-in-the-middle': 'Cryptographic attack where an adversary secretly intercepts and relays communications between two parties who believe they are directly talking.',
  'ddos': 'Distributed Denial of Service: attack using multiple distributed compromised systems (botnets) to flood a target server with traffic.',
  'dos': 'Denial of Service: attack from a single source designed to make a machine or network resource unavailable to its intended users.',
  'ransomware': 'Extortion malware that encrypts the victim\'s personal or corporate files and demands a cryptocurrency ransom for the decryption key.',
  'trojan': 'Malware disguised as legitimate or harmless software that secretly performs unauthorized actions once installed.',
  'worm': 'Self-replicating standalone malicious software that spreads across computer networks without requiring human activation or host files.',
  'virus': 'Malicious code that attaches itself to an existing legitimate executable host file and spreads when the infected program runs.',
  'spyware': 'Software that covertly monitors user behavior, keystrokes, and browsing habits without consent.',
  'keylogger': 'Surveillance software or hardware tool that records every keystroke entered by a user to steal passwords.',
  'sql injection': 'Security vulnerability where malicious SQL statements are inserted into web entry fields to manipulate the backend database.',
  'cross-site scripting': 'Security vulnerability where malicious client-side scripts are injected into web pages viewed by other users.',
  'symmetric encryption': 'Encryption technique that uses the exact same shared secret key for both encrypting and decrypting data (e.g. AES, DES).',
  'asymmetric encryption': 'Public-key cryptography that uses a mathematically linked key pair: a public key to encrypt and a private key to decrypt (e.g. RSA, ECC).',
  'hashing': 'One-way mathematical algorithm that converts input data into a fixed-length string to verify integrity; cannot be reversed.',
  'firewall': 'Network security device that monitors and filters incoming and outgoing traffic based on predefined security rules.',

  // Cloud Computing Models & Types
  'iaas': 'Infrastructure as a Service: Delivers virtualized computing infrastructure (servers, VMs, storage, networking).',
  'paas': 'Platform as a Service: Development and runtime environment for building and running apps without managing underlying servers.',
  'saas': 'Software as a Service: Fully managed applications delivered directly via web browser (e.g., Google Workspace, Microsoft 365).',
  'public': 'Public Cloud: Multi-tenant cloud infrastructure owned by a third-party provider, shared over the public internet.',
  'public cloud': 'Public Cloud: Multi-tenant cloud infrastructure owned by a third-party provider, shared over the public internet.',
  'private': 'Private Cloud: Single-tenant infrastructure dedicated exclusively to one organization, providing highest security and isolation.',
  'private cloud': 'Private Cloud: Single-tenant infrastructure dedicated exclusively to one organization, providing highest security and isolation.',
  'hybrid': 'Hybrid Cloud: Combines private and public cloud environments, enabling data and workload portability between them.',
  'hybrid cloud': 'Hybrid Cloud: Combines private and public cloud environments, enabling data and workload portability between them.',
  'community': 'Community Cloud: Cloud infrastructure shared by multiple organizations with common compliance, security, or mission requirements.',
  'community cloud': 'Community Cloud: Cloud infrastructure shared by multiple organizations with common compliance, security, or mission requirements.',

  // Programming & Pseudocode Traps
  'xor': 'Bitwise XOR (exclusive OR, ^): outputs 1 only when bits differ. Note: ^ is NOT exponentiation in pseudocode.',
  'bitwise and': 'Bitwise AND (&): outputs 1 only when both corresponding input bits are 1.',
  'bitwise or': 'Bitwise OR (|): outputs 1 if either of the corresponding input bits is 1.',
  'bitwise not': 'Bitwise NOT (~): inverts all bits of a number (~x = -(x + 1) in two\'s complement).',
  'modulo': 'Modulo operator (% or mod): returns the integer remainder after division of one number by another.',
  'integer division': 'Division between integers that automatically truncates any fractional/decimal component toward zero (e.g., 7 / 2 = 3).',
  'off-by-one': 'Common logic trap occurring when loop boundaries execute one iteration too few (e.g. < instead of <=) or one iteration too many.',
  'recursion': 'Programming technique where a function calls itself repeatedly until reaching a predefined base case.',
  'base case': 'The terminating condition in a recursive function that stops further recursive calls and prevents infinite recursion.',
  'stack': 'LIFO (Last-In, First-Out) linear data structure where elements are added and removed from the same end (top).',
  'queue': 'FIFO (First-In, First-Out) linear data structure where elements are added at the rear and removed from the front.',
  'pass by value': 'Argument-passing method where a copy of the actual variable\'s value is passed into the function; modifying it does not affect the original.',
  'pass by reference': 'Argument-passing method where a reference or memory address to the actual variable is passed; modifying it changes the original caller\'s variable.',

  // Web Technologies & HTML Tags
  '<heading>': 'Non-existent HTML tag; headings in HTML are designated exclusively using <h1> through <h6>.',
  'heading': 'Non-existent HTML tag; headings in HTML are designated exclusively using <h1> through <h6>.',
  '<h6>': 'Represents the lowest priority and smallest font section heading in HTML.',
  'h6': 'Represents the lowest priority and smallest font section heading in HTML.',
  '<h1>': 'Represents the highest priority, top-level section heading on a webpage.',
  'h1': 'Represents the highest priority, top-level section heading on a webpage.',
  '<head>': 'Document head container for metadata (<title>, <meta>, <link>), not a visible heading element.',
  'head': 'Document head container for metadata (<title>, <meta>, <link>), not a visible heading element.',
  '<highlight>': 'Non-existent HTML tag; <mark> is the semantic element for highlighted text.',
  '<mark>': 'HTML5 semantic element representing text marked or highlighted for reference.',
  'mark': 'HTML5 semantic element representing text marked or highlighted for reference.',
  '<b>': 'Bolds text stylistically without conveying semantic emphasis or highlighting.',
  '<em>': 'Italicizes text to represent semantic emphasis and spoken stress.',
  '<script>': 'Embeds or links executable client-side JavaScript code.',
  '<style>': 'Embeds internal CSS stylesheets directly within the HTML document.',
  '<css>': 'Non-existent HTML tag; CSS is included via <style> or <link> tags.',
  '<link>': 'Links external resources like CSS stylesheets (<link rel="stylesheet">) to the HTML document.',
  '<lb>': 'Non-existent HTML tag; line breaks are inserted with <br>.',
  '<break>': 'Non-existent HTML tag; line breaks are inserted with <br>.',
  '<br>': 'Inserts an empty carriage-return line break without paragraph semantics.',
  '<hr>': 'Inserts a thematic break or horizontal divider rule between sections.',
  'document': 'Represents the web page DOM loaded in the browser window.',
  'window': 'The global root object representing the browser window or tab.',
  'global': 'Node.js runtime global scope object; browsers use window.',
  'navigator': 'Provides browser and device environment information (user agent, language, geolocation).',
  'json.stringify': 'Serializes a JavaScript object or value into a JSON-formatted string.',
  'json.parse': 'Deserializes a valid JSON string into a JavaScript object or value.',
  'var': 'Function-scoped or globally scoped variable declaration that is hoisted.',
  'let': 'Block-scoped mutable variable declaration not initialized during hoisting (TDZ).',
  'const': 'Block-scoped immutable binding declaration that cannot be reassigned.',
};

/**
 * Normalizes text to lookup keys
 */
function cleanKey(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/^option\s+[a-d]:\s*/i, '')
    .replace(/[()*`_]/g, '')
    .trim();
}

/**
 * Searches the concept dictionary for a match based on exact or tokenized pattern
 */
export function getOptionMeaning(optionText: string): string | null {
  const clean = cleanKey(optionText);

  // Exact match
  if (CONCEPT_DICTIONARY[clean]) {
    return CONCEPT_DICTIONARY[clean];
  }

  // Key combinations like Ctrl + B or CTRL+B
  const ctrlMatch = clean.match(/ctrl\s*\+\s*([a-z0-9;:]|shift\s*\+\s*[a-z0-9])/i);
  if (ctrlMatch) {
    const key = ctrlMatch[0].replace(/\s+/g, '');
    if (CONCEPT_DICTIONARY[key]) return CONCEPT_DICTIONARY[key];
  }

  // Function keys F1 - F12
  const fKeyMatch = clean.match(/\b(shift\s*\+\s*)?f[1-9][0-2]?\b/i);
  if (fKeyMatch) {
    const key = fKeyMatch[0].replace(/\s+/g, '');
    if (CONCEPT_DICTIONARY[key]) return CONCEPT_DICTIONARY[key];
  }

  // Ports like Port 22, 22/TCP, Port 80
  const portMatch = clean.match(/\bport\s*(\d+)\b|\b(\d+)\s*\/\s*(?:tcp|udp)\b/i);
  if (portMatch) {
    const pNum = portMatch[1] || portMatch[2];
    const key = `port ${pNum}`;
    if (CONCEPT_DICTIONARY[key]) return CONCEPT_DICTIONARY[key];
  }

  // Check known concepts by substring or tokens
  for (const [k, desc] of Object.entries(CONCEPT_DICTIONARY)) {
    if (clean === k || clean.startsWith(k + ' ') || clean.endsWith(' ' + k) || clean.includes(' ' + k + ' ')) {
      return desc;
    }
  }

  return null;
}

/**
 * Resolves a tailored explanation of why a chosen option is incorrect
 * or what that option actually does or represents.
 */
export function resolveDistractorExplanation(
  question: string,
  chosenOption: MCQOption,
  correctOption: MCQOption
): { meaning?: string; whyIncorrect?: string } {
  // If option already has custom authored reasons, respect them
  if (chosenOption.whyIncorrect) {
    return {
      meaning: chosenOption.meaning,
      whyIncorrect: chosenOption.whyIncorrect,
    };
  }

  const qLower = question.toLowerCase();
  const chosenClean = cleanKey(chosenOption.text);
  const meaning = chosenOption.meaning || getOptionMeaning(chosenOption.text);

  // Case 1: Knowledge concept with known dictionary meaning
  if (meaning) {
    return {
      meaning,
      whyIncorrect: meaning,
    };
  }

  // Case 2: Numeric Pseudocode / Logic tracing distractor
  const isNumeric = /^-?\d+(\.\d+)?$/.test(chosenClean);
  if (isNumeric) {
    if (qLower.includes('^') && (qLower.includes('xor') || qLower.includes('bitwise') || qLower.includes('integer'))) {
      return {
        whyIncorrect: 'Bitwise trap: evaluating ^ (XOR) as exponentiation or using incorrect operator precedence (+ before ^).',
      };
    }

    if (qLower.includes('loop') || qLower.includes('for') || qLower.includes('while') || qLower.includes('iterations')) {
      return {
        whyIncorrect: 'Loop boundary trap: off-by-one error from terminating one iteration too early or late (< vs <=).',
      };
    }

    if (qLower.includes('array') || qLower.includes('index') || qLower.includes('element')) {
      return {
        whyIncorrect: 'Array indexing trap: confusion between 0-based indexing and 1-based indexing.',
      };
    }
  }

  // Case 3: No specific meaning or trap known -> return undefined
  return {
    meaning: undefined,
    whyIncorrect: undefined,
  };
}

/**
 * Builds a structured breakdown of options for interactive review
 */
export function getOptionBreakdown(
  question: string,
  options: MCQOption[]
): { id: string; text: string; isCorrect: boolean; meaning?: string }[] {
  const correctOpt = options.find((o) => o.isCorrect) || options[0];

  return options.map((opt) => {
    if (opt.isCorrect) {
      const meaning = opt.meaning || getOptionMeaning(opt.text);
      return {
        id: opt.id,
        text: opt.text,
        isCorrect: true,
        meaning: meaning || undefined,
      };
    }

    const { meaning, whyIncorrect } = resolveDistractorExplanation(question, opt, correctOpt);
    const resolvedMeaning = meaning || whyIncorrect || undefined;

    return {
      id: opt.id,
      text: opt.text,
      isCorrect: false,
      meaning: resolvedMeaning,
    };
  });
}
