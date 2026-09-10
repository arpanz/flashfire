# 🔥 FlashFire

> **Intelligent Flashcards, Supercharged Spaced Repetition (SRS), and Technical Quiz Hub powered by Z.ai GLM 4.7 Flash AI.**

[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://flashfire.pages.dev)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-CSS%204-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)

🚀 **Live Deployment:** [https://flashfire.pages.dev](https://flashfire.pages.dev)

---

## ✨ Features

- 🧠 **Supercharged Spaced Repetition (SRS)**: Implements the SM-2 algorithm. If you miss a question during a quiz, it is automatically flagged as a lapse and moved into your high-priority Due Queue.
- ⚡ **Z.ai GLM AI Explanations**:
  - **Quick Explanation**: Powered by `glm-4.7-flash` for instant, 1-2 sentence insights upon selecting an answer.
  - **Deep Concept Breakdown**: Powered by `glm-4.7-flash` for structured Markdown breakdowns covering *Core Concept*, *Option Analysis*, and *Key Takeaways / Mnemonics*.
- 📚 **467 Real Accenture Technical MCQs**: Pre-loaded across 5 technical categories:
  - MS Office & Productivity (135 Questions)
  - Computer Networks & Protocols (63 Questions)
  - Cybersecurity & Defense (60 Questions)
  - Cloud Computing & Virtualization (88 Questions)
  - Pseudocode, Logic & Web Tech (121 Questions)
- 📥 **Custom JSON Importer & Exporter**: Import your own question sets in intuitive JSON formats (both standard MCQ and front/back flashcards).
- 🎨 **Modern Minimalist UI**: Built with Tailwind CSS v4, Framer Motion animations, KaTeX LaTeX math support, interactive Cloze deletions, Web Audio feedback, and full Light/Dark mode.
- ☁️ **Cloudflare Edge Performance**: Deployed on Cloudflare Pages with edge serverless functions for ultra-low latency worldwide.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS v4
- **Edge Deployment**: Cloudflare Pages + Cloudflare Pages Functions
- **AI Backend**: Z.ai GLM API (`glm-4.7-flash`)
- **Icons & Animations**: Lucide React + Framer Motion + Canvas Confetti
- **Math & Formatting**: KaTeX + Custom Markdown parser

---

## 🚀 Getting Started

### 1. Clone and Install
```bash
git clone https://github.com/arpanz/flashfire.git
cd flashfire
npm install
```

### 2. Configure Environment Variables
Create `.env.local`:
```env
ZAI_API_KEY="your-z-ai-api-key"
ZAI_BASE_URL="https://api.z.ai/api/paas/v4"
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Cloudflare Pages

1. **Build the static frontend:**
   ```bash
   npm run build
   ```
2. **Deploy with Wrangler:**
   ```bash
   npx wrangler pages deploy out --project-name=flashfire --branch=main
   ```
3. **Set your API Key secret:**
   ```bash
   echo -n "your-z-ai-key" | npx wrangler pages secret put ZAI_API_KEY --project-name=flashfire
   ```

---

## 📄 License
MIT
