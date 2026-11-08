# LINGORA — Full-Scale Language Learning Platform
> *"Learn Beyond Words. Connect Beyond Borders."*

LINGORA is an international multilingual online language academy and EdTech platform built with **React**, **Vite**, **React Router**, and **Lucide React**.

---

## 🌟 Highlights & Supported Languages

LINGORA supports 8 global languages across CEFR proficiency levels (A1 to C2):
1. **English** (1.5B+ speakers worldwide)
2. **German** (Gateway to Central Europe)
3. **French** (Diplomacy, cuisine, and culture)
4. **Spanish** (Vibrant Latin America & Spain)
5. **Italian** (Melodic art, opera, and heritage)
6. **Japanese** (Anime, technology, and tradition)
7. **Korean** (Hangul and the global Hallyu wave)
8. **Turkish** (Bridge between East and West)

---

## 🚀 Key Modules & Pages

- **Landing Page (`/`)**: Hero, animated language cards with native pronunciation, value pillars, featured courses, testimonials, interactive FAQ.
- **Languages Catalog & Dynamic Deep-Dive (`/languages`, `/languages/:langId`)**: CEFR syllabus paths (A1–C2), regional culture, cuisine, and enrollment CTAs.
- **Placement Assessment (`/placement-test`, `/placement-test/results`)**: Adaptive 8-question CEFR level evaluator with word rearrangement, reading, and listening comprehension.
- **Student Dashboard (`/dashboard`)**: Personalized welcome, streak counter, daily goal tracker, weekly study chart, and enrolled course progress.
- **Course Library & Course Syllabus (`/courses`, `/courses/:courseId`)**: Filter by language/level, instructor bios, curriculum outlines, and enrollment actions.
- **Interactive Lessons (`/lessons`, `/lessons/:lessonId`)**: 4-tab interface (Video/Lecture, Grammar Notes, Vocabulary Vault, Practice Exercises), native audio playback, note downloads, and XP rewards.
- **Central Practice Center (`/practice`)**: 6 dedicated practice hubs:
  - **Grammar Practice (`/practice/grammar`)**: Instant feedback on syntax and rules.
  - **Vocabulary Vault (`/practice/vocabulary`)**: Flashcards, word-of-the-day, filter/search, and custom vocabulary creator.
  - **Listening Lab (`/practice/listening`)**: Web Speech native playback with interactive audio transcripts.
  - **Reading Lounge (`/practice/reading`)**: Cultural short stories with comprehension quizzes.
  - **Writing Studio (`/practice/writing`)**: Real-time word counter and rule-based writing feedback.
  - **Speaking Room (`/practice/speaking`)**: 8 conversation categories (Job Interview, Restaurant, Airport, etc.) with Web Speech synthesis and recognition.
- **Gamification & Hall of Fame (`/achievements`)**: Badges, weekly quests, global diamond league leaderboard, and printable CEFR diplomas.
- **Interactive Branching Stories (`/stories`)**: Choose-your-own-adventure real-world dialogues.
- **Word Battle Arena (`/word-battle`)**: Fast-paced 10-second vocabulary challenge with streak multipliers.
- **Mistakes Bank (`/my-mistakes`)**: Spaced-repetition bank for missed quiz items with mastery clearing.
- **Culture Corner (`/culture`)**: In-depth sociolinguistic articles on unwritten cultural codes.
- **Study Planner (`/planner`)**: Dynamic 7-day schedule with task management.
- **User Profile (`/profile`)**: Avatar presets, daily study targets, theme preferences, and notifications.
- **Authentication (`/login`, `/register`)**: Demo one-click fill and credential login.

---

## 🛠️ Quickstart

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

Visit the app at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```

---

## 🔑 Demo Access
- **Email:** `alex.mercer@lingora.edu`
- **Password:** Any password (or click **"Use Demo Account"** / **"Auto-fill with Demo Account"** on the login/register screen)

---

## 🎨 Design System & Palette

- **Primary Navy:** `#172554`
- **Primary Lavender:** `#8B78D6`
- **Soft Lavender:** `#E9E5FA`
- **Background:** `#F8F7F4` (with full dark mode support)
- **Typography:** *Plus Jakarta Sans* & *Inter*

---

## 🚀 Deployment to Vercel & GitHub

### Deploy to Vercel (1-Click Ready):
1. Push this repository to **GitHub**.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset is automatically detected as **Vite**.
5. Click **Deploy**!

> **Note on Client-Side Routing:** The included `vercel.json` ensures that all React Router subroutes (`/dashboard`, `/languages/:id`, `/courses`, etc.) are rewritten to `index.html` seamlessly without 404 errors.

