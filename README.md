<div align="center">

<img src="https://img.shields.io/badge/Samhit-Mental%20Health%20Platform-6366f1?style=for-the-badge&logo=heart&logoColor=white" alt="Samhit Banner" />

# 🧠 Samhit — *सम्हित*
### *Bridging the Gap Between Silence and Support*

> A compassionate, privacy-first mental health awareness and early detection platform — no sign-up needed, no judgment given.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-samhit.vercel.app-6366f1?style=flat-square)](https://samhit.vercel.app/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-000000?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [The Problem We're Solving](#-the-problem-were-solving)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Disclaimer](#-disclaimer)
- [License](#-license)

---

## 🌿 About the Project

**Samhit** (Sanskrit: *सम्हित* — meaning "collected" or "composed") is a frontend-only mental health awareness platform that helps users understand their psychological well-being through a thoughtfully designed questionnaire.

The platform requires **no login**, **no data submission**, and **no internet dependency** beyond the initial load — making it safe, accessible, and stigma-free. Every result stays on the user's device.

---

## 💡 The Problem We're Solving

Mental health issues affect millions of people globally, yet most go undetected because:

- People often don't recognize early warning signs in themselves
- Stigma prevents open conversation or professional consultation
- Clinical tools are inaccessible or intimidating to the general public

**Samhit** offers a gentle, private entry point — empowering individuals to reflect on their mental state and take a first step toward understanding and improvement.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔍 **Early Detection** | 15–16 carefully structured questions targeting cognitive and emotional well-being |
| 📊 **Score-Based Insights** | A calculated wellness score with meaningful feedback across key psychological dimensions |
| 💡 **Personalized Suggestions** | Actionable, friendly guidance based on the user's specific score range |
| 📄 **Downloadable Report** | Users can save their results as a report for personal reference |
| 🔒 **Privacy First** | Zero login, zero backend — all data stays local on the user's device |
| 🔁 **Optional Continuation** | Advanced resources and support pathways are unlocked conditionally, only if scores indicate a potential concern |
| 🌐 **Multi-Language Support** | Dynamically switch between English, Hindi, Malayalam, and Bengali |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop experiences |

---

## 🔄 How It Works

```
┌────────────────────┐
│   Landing Page     │  ←  Introduction & context-setting
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│   Questionnaire    │  ←  15–16 guided questions
│   (15–16 Qs)       │      covering cognition, emotion, behaviour
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│   Score Engine     │  ←  Weighted scoring algorithm (client-side)
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│   Results Page     │  ←  Score, category, insights & suggestions
│                    │      + Downloadable report option
└────────┬───────────┘
         │
    [If score flags concern]
         │
         ▼
┌────────────────────┐
│  Optional Support  │  ←  Advanced tips, resources & next steps
│  Resources         │
└────────────────────┘
```

---

## 🛠 Tech Stack

This is a **frontend-only** project with no backend or database dependency.

| Technology | Purpose |
|---|---|
| **React 18+** | UI component architecture & state management |
| **Vite** | Lightning-fast build tool and dev server |
| **shadcn/ui** | Accessible, composable UI components |
| **Tailwind CSS** | Utility-first styling and responsive design |
| **JavaScript (JSX)** | Application logic and interactivity |
| **i18next + react-i18next** | Internationalization framework for multi-language support |
| **i18next-browser-languagedetector** | Automatically detects user's preferred browser language |

---

## 📁 Project Structure

```
Samhit/
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── Navbar.jsx       # Navbar with integrated Language Switcher
│   │   └── ...              # App-specific components
│   ├── pages/               # Route-level page components
│   │   ├── Landing.jsx      # Home / intro page
│   │   ├── Questionnaire.jsx# Question flow
│   │   ├── Results.jsx      # Score display & insights
│   │   └── Support.jsx      # Optional support resources
│   ├── data/                # Question bank & scoring logic
│   ├── utils/               # Score calculation helpers
│   ├── i18n.js              # i18next configuration & language detector setup
│   ├── translations.js      # Central translation dictionaries (EN, HI, ML, BN)
│   ├── App.jsx              # Root component & routing
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

> ⚠️ Structure above is representative. Actual folder names may vary slightly.

---

## 🌐 Internationalization (i18n)

Samhit supports dynamic language switching powered by the `react-i18next` ecosystem. Users can switch languages instantly via the **Language Switcher** embedded in the Navbar — no page reload required.

**Supported Languages:**

| Language | Code | Script |
|---|---|---|
| English | `en` | Latin |
| Hindi | `hi` | देवनागरी |
| Malayalam | `ml` | മലയാളം |
| Bengali | `bn` | বাংলা |

**Implementation Overview:**

- `i18next-browser-languagedetector` automatically detects and applies the user's preferred browser language on first load
- All translation strings are centralized in `translations.js` — making it easy to add new languages
- `i18n.js` holds the full i18next configuration and bootstraps the library before the React tree mounts
- The `<select>` Language Switcher lives inside the Navbar dropdown for seamless, always-accessible language switching

**Adding a New Language:**

```js
// In translations.js, add a new language object:
export const resources = {
  en: { translation: { ... } },
  hi: { translation: { ... } },
  // Add your new language here:
  ta: { translation: { welcome: "வரவேற்கிறோம்", ... } }
};
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Aditya1286/Samhit.git

# 2. Navigate into the project directory
cd Samhit

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 🗺 Roadmap

- [x] Core questionnaire flow
- [x] Score-based result engine
- [x] Personalized suggestions
- [x] Downloadable report
- [x] Responsive design
- [x] Multi-language support (English, Hindi, Malayalam, Bengali)
- [ ] Dark mode toggle
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Expanded question categories (sleep, social wellness)
- [ ] PWA support for offline use

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how to get started:

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
# Open a Pull Request
```

Please follow conventional commit messages and keep PRs focused and minimal. For major changes, open an issue first to discuss the proposal.

---

## ⚠️ Disclaimer

> **Samhit is not a clinical diagnostic tool.**
>
> This platform is designed purely for **awareness and self-reflection** purposes. It does not replace professional psychological assessment, therapy, or medical advice. If you or someone you know is experiencing a mental health crisis, please reach out to a qualified mental health professional or a crisis helpline immediately.
>
> 🆘 **iCall (India):** `9152987821`
> 🆘 **Vandrevala Foundation:** `1860-2662-345` (24/7)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with 💙 by [Aditya](https://github.com/Aditya1286)

*Because mental health matters — and so does your privacy.*

⭐ If this project resonates with you, consider leaving a star!

</div>