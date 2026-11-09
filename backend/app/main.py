from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routers import users, courses, lessons, gamification

# Initialize tables
Base.metadata.create_all(bind=engine)

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
