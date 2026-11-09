import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_api_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["status"] == "online"

def test_get_users_me():
    response = client.get("/api/users/me")
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == "duo_learner"
    assert data["stats"]["hearts"] == 5

def test_get_course_path():
    response = client.get("/api/courses/1/path")
    assert response.status_code == 200
    data = response.json()
    assert len(data["units"]) == 3
    # Lesson 1 and 2 completed, Lesson 3 unlocked
    unit1 = data["units"][0]
    skill1 = unit1["skills"][0]
    assert skill1["lessons"][0]["completed"] is True
    assert skill1["lessons"][1]["completed"] is True
    assert skill1["lessons"][0]["locked"] is False
    assert skill1["lessons"][1]["locked"] is False

    # Check lesson 3 unlocked
    skill2 = unit1["skills"][1]
    assert skill2["lessons"][0]["locked"] is False # Lesson 3 active
    assert skill2["lessons"][1]["locked"] is True # Lesson 4 locked

def test_exercise_submission_and_heart_deduction():
    # Submit incorrect answer to lesson 3
    resp = client.post("/api/lessons/3/submit", json={
        "exercise_id": 11, # First exercise of lesson 3: 'Yo soy' -> 'I am'
        "user_answer": "Wrong Answer"
    })
    assert resp.status_code == 200
    data = resp.json()
    assert data["is_correct"] is False
    assert data["hearts_remaining"] < 5

    # Check refill
    refill_resp = client.post("/api/gamification/refill-hearts")
    assert refill_resp.status_code == 200
    assert refill_resp.json()["hearts"] == 5

def test_leaderboard():
    resp = client.get("/api/leaderboard")
    assert resp.status_code == 200
    items = resp.json()
    assert len(items) >= 5
    # Ensure current user is in leaderboard
    assert any(u["is_current_user"] for u in items)
