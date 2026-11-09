# Duolingo Clone — Modern Language Learning Web Application

A full-stack, fully functional Duolingo-inspired language learning platform built for an SDE Full-Stack assessment. Features an interactive wavy learning path, 5 distinct exercise types with real-time backend validation, persistent SQLite gamification (XP, hearts, streaks, gems, levels, achievements), a weekly league leaderboard, and custom mascot animations.

---

## Architecture Overview

```
                      +---------------------------------------+
                      |       Next.js 15+ (App Router)        |
                      |  TypeScript + Tailwind CSS + Motion   |
                      +---------------------------------------+
                                          |
                                   REST API Calls
                                          |
                                          v
                      +---------------------------------------+
                      |         FastAPI Backend (Python)      |
                      |   Pydantic Schemas + Service Logic    |
                      +---------------------------------------+
                                          |
                                      SQLAlchemy
                                          |
                                          v
                      +---------------------------------------+
                      |            SQLite Database            |
                      |  12 Relational Tables (Courses, Units,|
                      |   Skills, Lessons, Exercises, Stats)  |
                      +---------------------------------------+
```

---

## Tech Stack

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Motion & Visuals**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React
- **Client**: Native Fetch API service abstraction

### Backend
- **Framework**: Python 3.13+ / FastAPI
- **ORM**: SQLAlchemy 2.0+
- **Validation**: Pydantic v2
- **Testing**: Pytest & Starlette TestClient

### Database
- **Engine**: SQLite
- **Schema**: 12 relational models with foreign keys, constraints, and transactions.

---

## Key Features

1. **Interactive Learning Path (`/`)**
   - 3 Curricular Units, 5 Skills per Unit, 2 Lessons per Skill (30 total lessons).
   - Dynamic wavy node layout following Duolingo's path aesthetics.
   - States: Completed (Gold checkmark), Active/Unlocked (Green pulsing star with "START" callout), and Locked (Grey lock).
   - Sequential progression enforcement.

2. **Full-Screen Lesson Experience (`/lesson/[lessonId]`)**
   - Immersive player with header progress bar, heart counter, and close dialog.
   - **5 Interactive Exercise Types**:
     - Multiple Choice
     - Translate using interactive Word Bank
     - Match Pairs (interactive dual-column matching)
     - Fill in the blank
     - Type the answer (case-insensitive & whitespace normalized)
   - Dynamic Feedback Sheets (Green success panel with encouragement, Red panel showing correct solution and explanation).
   - Celebration Screen with confetti, XP breakdown, accuracy %, and streak tally.
   - Out-of-Hearts modal with practice refill option.

3. **Gamification & Persistence**
   - **Hearts System**: 5 max hearts. Deducted on errors. Refillable via practice or gem purchase.
   - **Streak Engine**: Real-time daily streak calculation that increments on daily completions and detects missed days.
   - **Gems & XP**: Dynamic XP awards, bonus XP for high accuracy, and milestone gems.
   - **Daily Goal**: 50 XP daily quota tracker with live progress percentage.

4. **Dedicated Views**
   - **Leaderboard (`/leaderboard`)**: Weekly league ranking showcasing learners and badges for top 3 positions.
   - **Practice Hub (`/practice`)**: Review drills to regain hearts and polish learned vocabulary.
   - **Quests (`/quests`)**: Daily milestone tasks with gem bounties.
   - **Shop (`/shop`)**: Heart refills and Super Duolingo preview.
   - **Profile (`/profile`)**: Lifetime statistics, streak records, and achievements grid.
   - **Settings (`/settings`)**: Preferences for audio, animations, and reminders.

---

## Folder Structure

```
duolingo-clone/
├── backend/
│   ├── app/
│   │   ├── main.py                  # FastAPI application entrypoint & CORS
│   │   ├── database.py              # SQLite engine & SessionLocal factory
│   │   ├── models/                  # SQLAlchemy ORM models (12 tables)
│   │   ├── schemas/                 # Pydantic v2 validation models
│   │   ├── routers/
│   │   │   ├── courses.py           # Curriculum & path endpoint
│   │   │   ├── lessons.py           # Lesson start, submit & complete
│   │   │   ├── gamification.py      # Hearts, stats, refills & leaderboard
│   │   │   └── users.py             # User profile & progress
│   │   └── services/
│   │       └── gamification.py      # Core answer checker & streak algorithm
│   ├── seed.py                      # Curriculum & leaderboard seeding script
│   ├── test_backend.py              # Pytest suite
│   ├── duolingo.db                  # Pre-seeded SQLite database
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx             # Home learning path
│   │   │   ├── lesson/[lessonId]/   # Lesson player
│   │   │   ├── leaderboard/         # Leaderboard league
│   │   │   ├── practice/            # Practice & refill
│   │   │   ├── quests/              # Quests & challenges
│   │   │   ├── shop/                # Gems & refills
│   │   │   ├── profile/             # Profile & achievements
│   │   │   ├── settings/            # Settings & preferences
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── layout/              # Sidebar & TopStatsBar
│   │   │   ├── learning-path/       # UnitHeader & LessonNode
│   │   │   ├── lesson/              # 5 Exercise components & modals
│   │   │   ├── gamification/        # Daily goal & preview widgets
│   │   │   └── common/              # Custom SVG Mascot
│   │   ├── services/
│   │   │   └── api.ts               # Centralized REST API client
│   │   └── types/                   # TypeScript interfaces
│   ├── package.json
│   └── tailwind.config.ts
└── README.md
```

---

## Installation & Startup

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+

### 1. Backend Setup

```bash
cd backend

# Install dependencies
pip install -r requirements.txt

# Run seed script (generates database and seeds Spanish course)
python seed.py

# Start FastAPI server (runs on http://localhost:8000)
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

*Interactive Swagger API Docs are available at:* `http://localhost:8000/docs`

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

*Open your browser and navigate to:* `http://localhost:3000`

---

## Default Learner Profile

The seeded database comes pre-configured with a default demo learner:
- **Username**: `duo_learner`
- **Initial Progress**: Units 1 & 2 available, Unit 1 lessons 1 & 2 completed, Lesson 3 unlocked and ready to play.
- **Initial Hearts**: 5 / 5
- **Gems**: 500

---

## Running Automated Tests

```bash
cd backend
python -m pytest test_backend.py -v
```
Verifies:
- API health and status check.
- User profile and stats retrieval.
- Sequential lock & unlock validation on learning path.
- Correct/incorrect exercise checking & real-time heart deduction.
- Heart refill endpoint.
- Leaderboard rankings with active user identification.
