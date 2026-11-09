from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routers import users, courses, lessons, gamification

# Initialize tables
Base.metadata.create_all(bind=engine)

@app.on_event("startup")
def ensure_all_languages_seeded():
    try:
        from app.database import SessionLocal
        from app.models import Course
        db = SessionLocal()
        count = db.query(Course).count()
        db.close()
        # If fewer than 10 courses exist, populate the additional and Indian courses
        if count < 10:
            print(f"Current courses count = {count}. Auto-seeding remaining language tracks...")
            import sys
            import os
            base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            if base_dir not in sys.path:
                sys.path.insert(0, base_dir)
            import add_languages
            add_languages.run()
            import add_indian_languages
            add_indian_languages.run()
            print("Auto-seeding completed.")
    except Exception as e:
        print(f"Startup language check note: {e}")

app = FastAPI(
    title="Duolingo Clone API",
    description="Full-stack Duolingo-inspired language learning platform API",
    version="1.0.0"
)

# Configure CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow development frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(courses.router)
app.include_router(lessons.router)
app.include_router(gamification.router)

@app.get("/")
def root():
    return {
        "status": "online",
        "app": "Duolingo Clone Backend",
        "version": "1.0.0",
        "docs_url": "/docs"
    }
