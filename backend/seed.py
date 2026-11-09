from app.database import SessionLocal, engine, Base
from app.models import (
    User, UserStats, Course, Unit, Skill, Lesson, Exercise,
    Achievement, UserProgress, UserAchievement
)
from datetime import datetime, timezone, timedelta
import json

def seed():
    print("Initializing database tables...")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        print("Seeding Users...")
        # 1. Main Learner
        main_user = User(
            id=1,
            username="duo_learner",
            email="learner@duolingo.clone",
            avatar="🦉",
            created_at=datetime.now(timezone.utc) - timedelta(days=14)
        )
        db.add(main_user)
        db.flush()

        # Learner Stats
        main_stats = UserStats(
            user_id=main_user.id,
            total_xp=245,
            current_streak=4,
            longest_streak=7,
            last_activity_date=datetime.now(timezone.utc).strftime("%Y-%m-%d"),
            hearts=5,
            max_hearts=5,
            gems=680,
            daily_xp=35,
            daily_goal_xp=50
        )
        db.add(main_stats)

        # Seed Leaderboard Competitors
        competitors = [
            ("maria_garcia", "maria@mail.com", "👩‍🦰", 480, 12),
            ("carlos_sanz", "carlos@mail.com", "👨‍🦱", 395, 9),
            ("sofia_lingua", "sofia@mail.com", "👩‍🎨", 310, 5),
            ("juan_valdez", "juan@mail.com", "👨‍🍳", 210, 3),
            ("elena_rodriguez", "elena@mail.com", "👩‍⚕️", 180, 2),
            ("alex_torres", "alex@mail.com", "🧑‍💻", 125, 4),
            ("lucas_dev", "lucas@mail.com", "🧒", 95, 1),
        ]
        for idx, (uname, email, av, xp, strk) in enumerate(competitors, start=2):
            u = User(id=idx, username=uname, email=email, avatar=av)
            db.add(u)
            db.flush()
            st = UserStats(
                user_id=u.id,
                total_xp=xp,
                current_streak=strk,
                longest_streak=strk + 2,
                last_activity_date=datetime.now(timezone.utc).strftime("%Y-%m-%d"),
                hearts=5,
                gems=300 + (idx * 20),
                daily_xp=20
            )
            db.add(st)

        print("Seeding Achievements...")
        achievements_data = [
            ("First Step", "Complete your very first lesson", "zap", 25),
            ("Streak Master", "Reach a 3-day learning streak", "flame", 50),
            ("XP Champion", "Collect at least 100 total XP", "trophy", 50),
            ("Knowledge Seeker", "Complete 5 lessons on the learning path", "star", 75),
            ("Sharp Mind", "Score 100% accuracy on any lesson", "target", 40),
            ("Vocabulary King", "Match 50 words successfully", "crown", 100),
        ]
        ach_objs = []
        for t, d, ic, xp in achievements_data:
            ach = Achievement(title=t, description=d, icon=ic, xp_reward=xp)
            db.add(ach)
            ach_objs.append(ach)
        db.flush()

        # Unlock initial 2 achievements for main learner
        db.add(UserAchievement(user_id=main_user.id, achievement_id=ach_objs[0].id))
        db.add(UserAchievement(user_id=main_user.id, achievement_id=ach_objs[1].id))
        db.add(UserAchievement(user_id=main_user.id, achievement_id=ach_objs[2].id))

        print("Seeding Spanish Course...")
        course = Course(
            id=1,
            title="Spanish for English Speakers",
            source_language="English",
            target_language="Spanish",
            flag="🇪🇸"
        )
        db.add(course)
        db.flush()

        # 3 Units, 5 Skills per Unit, 2 Lessons per Skill = 30 Lessons
        units_definitions = [
            {
                "title": "Unit 1: Fundamentals & Greetings",
                "desc": "Master basic introductions, polite words, and essential travel vocabulary.",
                "skills": [
                    {
                        "title": "Basic Greetings",
                        "desc": "Say hello, ask how someone is doing, and say goodbye.",
                        "icon": "hand",
                        "lessons": [
                            {
                                "title": "Saying Hello & Goodbye",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "What does 'Hola' mean?",
                                        "opts": ["Hello", "Goodbye", "Thank you", "Water"],
                                        "ans": "Hello",
                                        "exp": "'Hola' is the universal Spanish greeting for 'Hello'."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'Good morning'",
                                        "opts": ["Buenos", "días", "noches", "tardes", "Hola"],
                                        "ans": "Buenos días",
                                        "exp": "'Buenos días' directly translates to 'Good morning'."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match each Spanish greeting with its English meaning",
                                        "opts": None,
                                        "ans": json.dumps([["Hola", "Hello"], ["Adiós", "Goodbye"], ["Gracias", "Thank you"], ["Por favor", "Please"]]),
                                        "exp": "Pairing basic conversational polite phrases."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "___ noches. (Good evening / night)",
                                        "opts": ["Buenas", "Buenos", "Hola"],
                                        "ans": "Buenas",
                                        "exp": "'Noches' is a feminine plural noun, so it takes 'Buenas'."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Type the Spanish word for 'Goodbye':",
                                        "opts": None,
                                        "ans": "Adiós",
                                        "exp": "'Adiós' means goodbye."
                                    }
                                ]
                            },
                            {
                                "title": "Polite Expressions",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "How do you say 'Thank you' in Spanish?",
                                        "opts": ["Gracias", "De nada", "Perdón", "Por favor"],
                                        "ans": "Gracias",
                                        "exp": "'Gracias' means thank you."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'You are welcome'",
                                        "opts": ["De", "nada", "por", "favor", "mucho"],
                                        "ans": "De nada",
                                        "exp": "'De nada' is 'You are welcome'."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match polite words",
                                        "opts": None,
                                        "ans": json.dumps([["Perdón", "Excuse me"], ["De nada", "You're welcome"], ["Mucho gusto", "Nice to meet you"], ["Sí", "Yes"]]),
                                        "exp": "Common polite phrases in daily conversations."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Muchas ___ (Thank you very much)",
                                        "opts": ["gracias", "favor", "buenos"],
                                        "ans": "gracias",
                                        "exp": "'Muchas gracias' means thanks a lot / thank you very much."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Type the English translation for 'Por favor':",
                                        "opts": None,
                                        "ans": "Please",
                                        "exp": "'Por favor' translates to 'Please'."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "People & Introductions",
                        "desc": "Introduce yourself and talk about friends.",
                        "icon": "users",
                        "lessons": [
                            {
                                "title": "I am a student",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "What does 'Yo soy' mean?",
                                        "opts": ["I am", "You are", "He is", "We are"],
                                        "ans": "I am",
                                        "exp": "'Yo soy' translates to 'I am'."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'I am a student'",
                                        "opts": ["Yo", "soy", "un", "estudiante", "casa", "el"],
                                        "ans": "Yo soy un estudiante",
                                        "exp": "'Yo soy un estudiante' = 'I am a student'."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match pronouns and nouns",
                                        "opts": None,
                                        "ans": json.dumps([["Yo", "I"], ["Tú", "You"], ["Él", "He"], ["Ella", "She"]]),
                                        "exp": "Subject pronouns in Spanish."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Ella ___ maestra. (She is a teacher)",
                                        "opts": ["es", "soy", "eres"],
                                        "ans": "es",
                                        "exp": "'Ella es' is the 3rd person singular form of 'ser'."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Translate 'I am' to Spanish:",
                                        "opts": None,
                                        "ans": "Yo soy",
                                        "exp": "'Yo soy' or simply 'Soy' means I am."
                                    }
                                ]
                            },
                            {
                                "title": "Names & Origins",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "How do you ask 'What is your name?'",
                                        "opts": ["¿Cómo te llamas?", "¿Dónde estás?", "¿Cuántos años?", "¿De dónde eres?"],
                                        "ans": "¿Cómo te llamas?",
                                        "exp": "'¿Cómo te llamas?' asks for someone's name."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'My name is Carlos'",
                                        "opts": ["Me", "llamo", "Carlos", "nombre", "es", "yo"],
                                        "ans": "Me llamo Carlos",
                                        "exp": "'Me llamo Carlos' means 'My name is Carlos'."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match conversational phrases",
                                        "opts": None,
                                        "ans": json.dumps([["¿Cómo estás?", "How are you?"], ["Bien", "Fine / Good"], ["Mal", "Bad"], ["¿Y tú?", "And you?"]]),
                                        "exp": "Checking in on how someone feels."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Yo soy ___ España. (I am from Spain)",
                                        "opts": ["de", "en", "con"],
                                        "ans": "de",
                                        "exp": "'de' denotes origin (from)."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Translate 'Good' or 'Well' to Spanish:",
                                        "opts": None,
                                        "ans": "Bien",
                                        "exp": "'Bien' = Well / Good."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Food & Drink",
                        "desc": "Order tasty meals and refreshing drinks in restaurants.",
                        "icon": "coffee",
                        "lessons": [
                            {
                                "title": "At the Café",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "What is 'Agua'?",
                                        "opts": ["Water", "Coffee", "Bread", "Milk"],
                                        "ans": "Water",
                                        "exp": "'Agua' means water."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'A coffee with milk, please'",
                                        "opts": ["Un", "café", "con", "leche", "por", "favor", "pan"],
                                        "ans": "Un café con leche por favor",
                                        "exp": "Ordering standard morning coffee."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match food & drink words",
                                        "opts": None,
                                        "ans": json.dumps([["Pan", "Bread"], ["Agua", "Water"], ["Leche", "Milk"], ["Café", "Coffee"]]),
                                        "exp": "Basic breakfast vocabulary."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Yo quiero ___ manzana. (I want an apple)",
                                        "opts": ["una", "un", "el"],
                                        "ans": "una",
                                        "exp": "'Manzana' is feminine singular."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Type the Spanish word for 'Bread':",
                                        "opts": None,
                                        "ans": "Pan",
                                        "exp": "'Pan' = Bread."
                                    }
                                ]
                            },
                            {
                                "title": "Ordering Food",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "What does 'La cuenta, por favor' mean?",
                                        "opts": ["The check, please", "More food, please", "A table, please", "Thank you very much"],
                                        "ans": "The check, please",
                                        "exp": "'La cuenta' refers to the bill or check in restaurants."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'I need a table'",
                                        "opts": ["Necesito", "una", "mesa", "silla", "dos"],
                                        "ans": "Necesito una mesa",
                                        "exp": "'Necesito una mesa' = 'I need a table'."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match restaurant vocabulary",
                                        "opts": None,
                                        "ans": json.dumps([["Mesa", "Table"], ["Comida", "Food"], ["Cuenta", "Bill"], ["Menú", "Menu"]]),
                                        "exp": "Restaurant dining items."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "¿Tiene ___ menú? (Do you have the menu?)",
                                        "opts": ["el", "la", "las"],
                                        "ans": "el",
                                        "exp": "'Menú' takes masculine article 'el'."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Type the Spanish word for 'Water':",
                                        "opts": None,
                                        "ans": "Agua",
                                        "exp": "'Agua' = water."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Numbers & Counting",
                        "desc": "Count from one to ten and handle simple amounts.",
                        "icon": "hash",
                        "lessons": [
                            {
                                "title": "Numbers 1 to 5",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "Which number is 'Tres'?",
                                        "opts": ["3", "2", "4", "5"],
                                        "ans": "3",
                                        "exp": "'Tres' is the number 3."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Arrange numbers in order: 1, 2, 3",
                                        "opts": ["Uno", "dos", "tres", "cuatro", "cinco"],
                                        "ans": "Uno dos tres",
                                        "exp": "Sequential numbers 1, 2, 3."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match numbers to digits",
                                        "opts": None,
                                        "ans": json.dumps([["Uno", "1"], ["Dos", "2"], ["Tres", "3"], ["Cuatro", "4"]]),
                                        "exp": "Spanish numbers."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Uno, dos, tres, cuatro, ___",
                                        "opts": ["cinco", "seis", "diez"],
                                        "ans": "cinco",
                                        "exp": "'Cinco' is 5."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Type the Spanish word for 'Two':",
                                        "opts": None,
                                        "ans": "Dos",
                                        "exp": "'Dos' = 2."
                                    }
                                ]
                            },
                            {
                                "title": "Numbers 6 to 10",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "What is 'Diez'?",
                                        "opts": ["10", "8", "6", "7"],
                                        "ans": "10",
                                        "exp": "'Diez' = 10."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'Eight tacos'",
                                        "opts": ["Ocho", "tacos", "siete", "nueve"],
                                        "ans": "Ocho tacos",
                                        "exp": "'Ocho tacos' = Eight tacos."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match numbers 6 to 9",
                                        "opts": None,
                                        "ans": json.dumps([["Seis", "6"], ["Siete", "7"], ["Ocho", "8"], ["Nueve", "9"]]),
                                        "exp": "Spanish numbers 6 through 9."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Tengo ___ años. (I am 10 years old)",
                                        "opts": ["diez", "dos", "uno"],
                                        "ans": "diez",
                                        "exp": "'Diez' fits here."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Type the Spanish word for 'Seven':",
                                        "opts": None,
                                        "ans": "Siete",
                                        "exp": "'Siete' = 7."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Family Members",
                        "desc": "Talk about mothers, fathers, brothers, and sisters.",
                        "icon": "heart",
                        "lessons": [
                            {
                                "title": "Parents & Siblings",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "What does 'Madre' mean?",
                                        "opts": ["Mother", "Father", "Sister", "Brother"],
                                        "ans": "Mother",
                                        "exp": "'Madre' is Mother / Mom."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'My father and my mother'",
                                        "opts": ["Mi", "padre", "y", "mi", "madre", "hermano"],
                                        "ans": "Mi padre y mi madre",
                                        "exp": "Family pairings."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match family relations",
                                        "opts": None,
                                        "ans": json.dumps([["Padre", "Father"], ["Madre", "Mother"], ["Hermano", "Brother"], ["Hermana", "Sister"]]),
                                        "exp": "Immediate family members in Spanish."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Él es mi ___ (brother).",
                                        "opts": ["hermano", "hermana", "madre"],
                                        "ans": "hermano",
                                        "exp": "'Hermano' is masculine brother."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Translate 'Sister' to Spanish:",
                                        "opts": None,
                                        "ans": "Hermana",
                                        "exp": "'Hermana' = sister."
                                    }
                                ]
                            },
                            {
                                "title": "Describing Family",
                                "exercises": [
                                    {
                                        "type": "multiple_choice",
                                        "q": "What does 'Mi familia es grande' mean?",
                                        "opts": ["My family is big", "My family is small", "My family is happy", "My house is big"],
                                        "ans": "My family is big",
                                        "exp": "'Grande' means big or large."
                                    },
                                    {
                                        "type": "word_bank",
                                        "q": "Translate: 'I have a dog'",
                                        "opts": ["Tengo", "un", "perro", "gato", "casa"],
                                        "ans": "Tengo un perro",
                                        "exp": "'Tengo un perro' = I have a dog."
                                    },
                                    {
                                        "type": "match_pairs",
                                        "q": "Match pets & family",
                                        "opts": None,
                                        "ans": json.dumps([["Perro", "Dog"], ["Gato", "Cat"], ["Abuelo", "Grandfather"], ["Abuela", "Grandmother"]]),
                                        "exp": "Common home companions."
                                    },
                                    {
                                        "type": "fill_blank",
                                        "q": "Mi abuela es ___ (nice / kind).",
                                        "opts": ["simpática", "simpático", "grande"],
                                        "ans": "simpática",
                                        "exp": "'Abuela' is feminine, adjective takes feminine ending."
                                    },
                                    {
                                        "type": "type_answer",
                                        "q": "Translate 'Dog' to Spanish:",
                                        "opts": None,
                                        "ans": "Perro",
                                        "exp": "'Perro' = dog."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Unit 2: Daily Life & Navigation",
                "desc": "Navigate cities, ask for directions, and describe places you visit.",
                "skills": [
                    {
                        "title": "City & Places",
                        "desc": "Find museums, parks, and train stations.",
                        "icon": "map-pin",
                        "lessons": [
                            {"title": "Around Town", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'La estación de tren'?", "opts": ["Train station", "Airport", "Bus stop", "Hotel"], "ans": "Train station", "exp": "'Estación de tren' is train station."},
                                {"type": "word_bank", "q": "Translate: 'Where is the hotel?'", "opts": ["¿Dónde", "está", "el", "hotel?", "la", "casa"], "ans": "¿Dónde está el hotel?", "exp": "Asking where places are located."},
                                {"type": "match_pairs", "q": "Match town destinations", "opts": None, "ans": json.dumps([["Parque", "Park"], ["Museo", "Museum"], ["Hotel", "Hotel"], ["Calle", "Street"]]), "exp": "City spots."},
                                {"type": "fill_blank", "q": "El banco está en la ___ (street).", "opts": ["calle", "casa", "agua"], "ans": "calle", "exp": "'Calle' = street."},
                                {"type": "type_answer", "q": "Type Spanish for 'Park':", "opts": None, "ans": "Parque", "exp": "'Parque' = park."}
                            ]},
                            {"title": "Asking Directions", "exercises": [
                                {"type": "multiple_choice", "q": "What does 'A la derecha' mean?", "opts": ["To the right", "To the left", "Straight ahead", "Behind"], "ans": "To the right", "exp": "Derecha is right."},
                                {"type": "word_bank", "q": "Translate: 'Turn to the left'", "opts": ["Gira", "a", "la", "izquierda", "derecha"], "ans": "Gira a la izquierda", "exp": "Izquierda is left."},
                                {"type": "match_pairs", "q": "Match navigation terms", "opts": None, "ans": json.dumps([["Izquierda", "Left"], ["Derecha", "Right"], ["Cerca", "Near"], ["Lejos", "Far"]]), "exp": "Spatial directions."},
                                {"type": "fill_blank", "q": "El museo está ___ (near).", "opts": ["cerca", "lejos", "aquí"], "ans": "cerca", "exp": "'Cerca' = near."},
                                {"type": "type_answer", "q": "Translate 'Left' to Spanish:", "opts": None, "ans": "Izquierda", "exp": "'Izquierda' = left."}
                            ]}
                        ]
                    },
                    {
                        "title": "Time & Schedule",
                        "desc": "Tell what time it is and organize your week.",
                        "icon": "clock",
                        "lessons": [
                            {"title": "Telling Time", "exercises": [
                                {"type": "multiple_choice", "q": "What does '¿Qué hora es?' ask?", "opts": ["What time is it?", "What day is today?", "Where are you going?", "Who are you?"], "ans": "What time is it?", "exp": "Essential time inquiry."},
                                {"type": "word_bank", "q": "Translate: 'It is two o'clock'", "opts": ["Son", "las", "dos", "es", "la", "una"], "ans": "Son las dos", "exp": "For hours other than 1: 'Son las...'"},
                                {"type": "match_pairs", "q": "Match time words", "opts": None, "ans": json.dumps([["Hora", "Hour / Time"], ["Minuto", "Minute"], ["Hoy", "Today"], ["Mañana", "Tomorrow"]]), "exp": "Time concepts."},
                                {"type": "fill_blank", "q": "Es la ___ (one o'clock).", "opts": ["una", "dos", "tres"], "ans": "una", "exp": "'Es la una' is singular."},
                                {"type": "type_answer", "q": "Translate 'Today' to Spanish:", "opts": None, "ans": "Hoy", "exp": "'Hoy' = today."}
                            ]},
                            {"title": "Days of the Week", "exercises": [
                                {"type": "multiple_choice", "q": "Which day is 'Lunes'?", "opts": ["Monday", "Friday", "Sunday", "Wednesday"], "ans": "Monday", "exp": "Lunes is the start of the week: Monday."},
                                {"type": "word_bank", "q": "Translate: 'Today is Friday'", "opts": ["Hoy", "es", "viernes", "sábado", "domingo"], "ans": "Hoy es viernes", "exp": "Friday feeling."},
                                {"type": "match_pairs", "q": "Match days", "opts": None, "ans": json.dumps([["Lunes", "Monday"], ["Martes", "Tuesday"], ["Viernes", "Friday"], ["Domingo", "Sunday"]]), "exp": "Weekdays and weekends."},
                                {"type": "fill_blank", "q": "Mañana es ___ (Saturday).", "opts": ["sábado", "domingo", "lunes"], "ans": "sábado", "exp": "Sábado = Saturday."},
                                {"type": "type_answer", "q": "Type Spanish for 'Monday':", "opts": None, "ans": "Lunes", "exp": "'Lunes' = Monday."}
                            ]}
                        ]
                    },
                    {
                        "title": "At Home",
                        "desc": "Describe your room, furniture, and household objects.",
                        "icon": "home",
                        "lessons": [
                            {"title": "Rooms & House", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'La cocina'?", "opts": ["The kitchen", "The bedroom", "The bathroom", "The garden"], "ans": "The kitchen", "exp": "Cocina = kitchen."},
                                {"type": "word_bank", "q": "Translate: 'My new house'", "opts": ["Mi", "casa", "nueva", "vieja", "carro"], "ans": "Mi casa nueva", "exp": "Describing a house."},
                                {"type": "match_pairs", "q": "Match home rooms", "opts": None, "ans": json.dumps([["Casa", "House"], ["Cocina", "Kitchen"], ["Baño", "Bathroom"], ["Cuarto", "Room"]]), "exp": "Parts of the house."},
                                {"type": "fill_blank", "q": "El libro está en la ___ (table).", "opts": ["mesa", "puerta", "ventana"], "ans": "mesa", "exp": "Mesa = table."},
                                {"type": "type_answer", "q": "Translate 'House' to Spanish:", "opts": None, "ans": "Casa", "exp": "Casa = house."}
                            ]},
                            {"title": "Objects & Furniture", "exercises": [
                                {"type": "multiple_choice", "q": "What does 'Cama' mean?", "opts": ["Bed", "Chair", "Door", "Window"], "ans": "Bed", "exp": "Cama = bed."},
                                {"type": "word_bank", "q": "Translate: 'The red door'", "opts": ["La", "puerta", "roja", "el", "azul"], "ans": "La puerta roja", "exp": "Noun-adjective gender agreement."},
                                {"type": "match_pairs", "q": "Match home items", "opts": None, "ans": json.dumps([["Cama", "Bed"], ["Silla", "Chair"], ["Puerta", "Door"], ["Ventana", "Window"]]), "exp": "Furniture items."},
                                {"type": "fill_blank", "q": "Abro la ___ (window).", "opts": ["ventana", "cama", "mesa"], "ans": "ventana", "exp": "Ventana = window."},
                                {"type": "type_answer", "q": "Translate 'Chair' to Spanish:", "opts": None, "ans": "Silla", "exp": "Silla = chair."}
                            ]}
                        ]
                    },
                    {
                        "title": "Shopping & Clothes",
                        "desc": "Pick out stylish outfits, sizes, and colors.",
                        "icon": "shopping-bag",
                        "lessons": [
                            {"title": "Clothing Basics", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'La camisa'?", "opts": ["Shirt", "Shoes", "Pants", "Hat"], "ans": "Shirt", "exp": "Camisa = shirt."},
                                {"type": "word_bank", "q": "Translate: 'A blue jacket'", "opts": ["Una", "chaqueta", "azul", "un", "rojo"], "ans": "Una chaqueta azul", "exp": "Color follows noun in Spanish."},
                                {"type": "match_pairs", "q": "Match clothing items", "opts": None, "ans": json.dumps([["Camisa", "Shirt"], ["Pantalones", "Pants"], ["Zapatos", "Shoes"], ["Sombrero", "Hat"]]), "exp": "Wardrobe items."},
                                {"type": "fill_blank", "q": "Compro unos ___ (shoes).", "opts": ["zapatos", "camisa", "falda"], "ans": "zapatos", "exp": "Zapatos = shoes."},
                                {"type": "type_answer", "q": "Type Spanish for 'Shirt':", "opts": None, "ans": "Camisa", "exp": "Camisa = shirt."}
                            ]},
                            {"title": "Prices & Sizes", "exercises": [
                                {"type": "multiple_choice", "q": "What does '¿Cuánto cuesta?' ask?", "opts": ["How much does it cost?", "What size is it?", "Can I wear this?", "Where is the cashier?"], "ans": "How much does it cost?", "exp": "Asking prices in stores."},
                                {"type": "word_bank", "q": "Translate: 'It is very expensive'", "opts": ["Es", "muy", "caro", "barato", "bonito"], "ans": "Es muy caro", "exp": "Caro = expensive."},
                                {"type": "match_pairs", "q": "Match shopping terms", "opts": None, "ans": json.dumps([["Caro", "Expensive"], ["Barato", "Cheap"], ["Grande", "Large"], ["Pequeño", "Small"]]), "exp": "Shopping adjectives."},
                                {"type": "fill_blank", "q": "Esta falda es muy ___ (cheap).", "opts": ["barata", "barato", "grande"], "ans": "barata", "exp": "Matches feminine falda."},
                                {"type": "type_answer", "q": "Translate 'Expensive' (masculine) to Spanish:", "opts": None, "ans": "Caro", "exp": "Caro = expensive."}
                            ]}
                        ]
                    },
                    {
                        "title": "Feelings & Health",
                        "desc": "Express how you feel and discuss wellness.",
                        "icon": "smile",
                        "lessons": [
                            {"title": "Emotions", "exercises": [
                                {"type": "multiple_choice", "q": "What does 'Estoy feliz' mean?", "opts": ["I am happy", "I am tired", "I am sick", "I am busy"], "ans": "I am happy", "exp": "Feliz = happy."},
                                {"type": "word_bank", "q": "Translate: 'I am tired'", "opts": ["Estoy", "cansado", "feliz", "enfermo", "yo"], "ans": "Estoy cansado", "exp": "Estar used for temporary emotional states."},
                                {"type": "match_pairs", "q": "Match emotions", "opts": None, "ans": json.dumps([["Feliz", "Happy"], ["Triste", "Sad"], ["Cansado", "Tired"], ["Enojado", "Angry"]]), "exp": "Feelings in Spanish."},
                                {"type": "fill_blank", "q": "Ella está muy ___ (happy).", "opts": ["contenta", "contento", "tristes"], "ans": "contenta", "exp": "Contenta = glad/happy."},
                                {"type": "type_answer", "q": "Translate 'Sad' to Spanish:", "opts": None, "ans": "Triste", "exp": "Triste = sad."}
                            ]},
                            {"title": "At the Doctor", "exercises": [
                                {"type": "multiple_choice", "q": "What does 'Me duele la cabeza' mean?", "opts": ["My head hurts", "My stomach hurts", "I have a fever", "I am hungry"], "ans": "My head hurts", "exp": "Cabeza = head."},
                                {"type": "word_bank", "q": "Translate: 'I need a doctor'", "opts": ["Necesito", "un", "médico", "hospital", "cura"], "ans": "Necesito un médico", "exp": "Medical assistance."},
                                {"type": "match_pairs", "q": "Match health words", "opts": None, "ans": json.dumps([["Médico", "Doctor"], ["Hospital", "Hospital"], ["Medicina", "Medicine"], ["Dolor", "Pain"]]), "exp": "Health terms."},
                                {"type": "fill_blank", "q": "¿Dónde está la ___? (pharmacy)", "opts": ["farmacia", "médico", "dolor"], "ans": "farmacia", "exp": "Farmacia = pharmacy."},
                                {"type": "type_answer", "q": "Translate 'Doctor' to Spanish:", "opts": None, "ans": "Médico", "exp": "Médico = doctor."}
                            ]}
                        ]
                    }
                ]
            },
            {
                "title": "Unit 3: Travel, Culture & Leisure",
                "desc": "Converse comfortably while traveling, exploring attractions, and enjoying sports.",
                "skills": [
                    {
                        "title": "Travel & Airport",
                        "desc": "Check in bags, navigate gates, and fly smoothly.",
                        "icon": "plane",
                        "lessons": [
                            {"title": "Boarding the Flight", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'El pasaporte'?", "opts": ["Passport", "Ticket", "Suitcase", "Flight"], "ans": "Passport", "exp": "Pasaporte = passport."},
                                {"type": "word_bank", "q": "Translate: 'Here is my ticket'", "opts": ["Aquí", "está", "mi", "boleto", "el", "avión"], "ans": "Aquí está mi boleto", "exp": "Boleto = ticket."},
                                {"type": "match_pairs", "q": "Match travel terms", "opts": None, "ans": json.dumps([["Avión", "Airplane"], ["Boleto", "Ticket"], ["Maleta", "Suitcase"], ["Aeropuerto", "Airport"]]), "exp": "Airport necessities."},
                                {"type": "fill_blank", "q": "Tengo una ___ grande. (suitcase)", "opts": ["maleta", "avión", "boleto"], "ans": "maleta", "exp": "Maleta is feminine."},
                                {"type": "type_answer", "q": "Translate 'Airport' to Spanish:", "opts": None, "ans": "Aeropuerto", "exp": "Aeropuerto = airport."}
                            ]},
                            {"title": "Arrival & Customs", "exercises": [
                                {"type": "multiple_choice", "q": "What does 'Viaje' mean?", "opts": ["Trip / Journey", "Ticket", "Flight", "Hotel"], "ans": "Trip / Journey", "exp": "Buen viaje = have a good trip."},
                                {"type": "word_bank", "q": "Translate: 'Have a good trip!'", "opts": ["¡Buen", "viaje!", "feliz", "día"], "ans": "¡Buen viaje!", "exp": "Classic wish for travellers."},
                                {"type": "match_pairs", "q": "Match journey vocabulary", "opts": None, "ans": json.dumps([["Viaje", "Trip"], ["Llegada", "Arrival"], ["Salida", "Departure"], ["Vuelo", "Flight"]]), "exp": "Flight schedule terms."},
                                {"type": "fill_blank", "q": "El ___ sale a las cinco. (flight)", "opts": ["vuelo", "maleta", "salida"], "ans": "vuelo", "exp": "Vuelo = flight."},
                                {"type": "type_answer", "q": "Translate 'Trip' to Spanish:", "opts": None, "ans": "Viaje", "exp": "Viaje = trip."}
                            ]}
                        ]
                    },
                    {
                        "title": "Hobbies & Sports",
                        "desc": "Talk about soccer, music, cinema, and outdoor games.",
                        "icon": "activity",
                        "lessons": [
                            {"title": "Playing Sports", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'Fútbol'?", "opts": ["Soccer / Football", "Basketball", "Tennis", "Baseball"], "ans": "Soccer / Football", "exp": "Fútbol is the beloved sport."},
                                {"type": "word_bank", "q": "Translate: 'I play football with friends'", "opts": ["Juego", "al", "fútbol", "con", "amigos", "la"], "ans": "Juego al fútbol con amigos", "exp": "Jugar al fútbol."},
                                {"type": "match_pairs", "q": "Match sports", "opts": None, "ans": json.dumps([["Fútbol", "Soccer"], ["Baloncesto", "Basketball"], ["Pelota", "Ball"], ["Equipo", "Team"]]), "exp": "Sports vocabulary."},
                                {"type": "fill_blank", "q": "Me gusta la ___ (music).", "opts": ["música", "fútbol", "equipo"], "ans": "música", "exp": "Música = music."},
                                {"type": "type_answer", "q": "Translate 'Soccer' to Spanish:", "opts": None, "ans": "Fútbol", "exp": "Fútbol = soccer."}
                            ]},
                            {"title": "Arts & Free Time", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'Película'?", "opts": ["Movie", "Book", "Song", "Game"], "ans": "Movie", "exp": "Película = movie/film."},
                                {"type": "word_bank", "q": "Translate: 'I want to watch a movie'", "opts": ["Quiero", "ver", "una", "película", "libro", "un"], "ans": "Quiero ver una película", "exp": "Ver una película."},
                                {"type": "match_pairs", "q": "Match pastimes", "opts": None, "ans": json.dumps([["Cine", "Cinema"], ["Película", "Movie"], ["Libro", "Book"], ["Canción", "Song"]]), "exp": "Leisure entertainment."},
                                {"type": "fill_blank", "q": "Leo un ___ interesante. (book)", "opts": ["libro", "cine", "canción"], "ans": "libro", "exp": "Libro = book."},
                                {"type": "type_answer", "q": "Translate 'Book' to Spanish:", "opts": None, "ans": "Libro", "exp": "Libro = book."}
                            ]}
                        ]
                    },
                    {
                        "title": "Weather & Seasons",
                        "desc": "Check the forecast, sunny days, rain, and seasons.",
                        "icon": "sun",
                        "lessons": [
                            {"title": "The Forecast", "exercises": [
                                {"type": "multiple_choice", "q": "What does 'Hace sol' mean?", "opts": ["It is sunny", "It is cold", "It is raining", "It is windy"], "ans": "It is sunny", "exp": "Hace sol = It is sunny."},
                                {"type": "word_bank", "q": "Translate: 'It is very cold today'", "opts": ["Hoy", "hace", "mucho", "frío", "calor", "sol"], "ans": "Hoy hace mucho frío", "exp": "Hacer frío."},
                                {"type": "match_pairs", "q": "Match weather states", "opts": None, "ans": json.dumps([["Calor", "Heat / Warm"], ["Frío", "Cold"], ["Lluvia", "Rain"], ["Sol", "Sun"]]), "exp": "Weather terms."},
                                {"type": "fill_blank", "q": "Hoy hace mucho ___ (heat).", "opts": ["calor", "fríos", "soles"], "ans": "calor", "exp": "Hace calor = it's hot."},
                                {"type": "type_answer", "q": "Translate 'Sun' to Spanish:", "opts": None, "ans": "Sol", "exp": "Sol = sun."}
                            ]},
                            {"title": "The 4 Seasons", "exercises": [
                                {"type": "multiple_choice", "q": "Which season is 'El verano'?", "opts": ["Summer", "Winter", "Spring", "Autumn"], "ans": "Summer", "exp": "Verano = summer."},
                                {"type": "word_bank", "q": "Translate: 'I love the summer'", "opts": ["Me", "encanta", "el", "verano", "invierno"], "ans": "Me encanta el verano", "exp": "Me encanta el verano."},
                                {"type": "match_pairs", "q": "Match seasons", "opts": None, "ans": json.dumps([["Verano", "Summer"], ["Invierno", "Winter"], ["Primavera", "Spring"], ["Otoño", "Autumn"]]), "exp": "Four seasons."},
                                {"type": "fill_blank", "q": "La ___ trae flores. (spring)", "opts": ["primavera", "invierno", "otoño"], "ans": "primavera", "exp": "Primavera = spring."},
                                {"type": "type_answer", "q": "Translate 'Summer' to Spanish:", "opts": None, "ans": "Verano", "exp": "Verano = summer."}
                            ]}
                        ]
                    },
                    {
                        "title": "Nature & Animals",
                        "desc": "Discover wildlife, forests, oceans, and natural wonders.",
                        "icon": "feather",
                        "lessons": [
                            {"title": "Wild Animals", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'El pájaro'?", "opts": ["The bird", "The horse", "The fish", "The lion"], "ans": "The bird", "exp": "Pájaro = bird (like Duo!)."},
                                {"type": "word_bank", "q": "Translate: 'The green bird sings'", "opts": ["El", "pájaro", "verde", "canta", "un", "caballo"], "ans": "El pájaro verde canta", "exp": "Our green bird mascot."},
                                {"type": "match_pairs", "q": "Match wildlife", "opts": None, "ans": json.dumps([["Pájaro", "Bird"], ["Caballo", "Horse"], ["Pez", "Fish"], ["León", "Lion"]]), "exp": "Animals in nature."},
                                {"type": "fill_blank", "q": "El pájaro es de color ___ (green).", "opts": ["verde", "rojo", "azul"], "ans": "verde", "exp": "Verde = green."},
                                {"type": "type_answer", "q": "Translate 'Bird' to Spanish:", "opts": None, "ans": "Pájaro", "exp": "Pájaro = bird."}
                            ]},
                            {"title": "Landscapes", "exercises": [
                                {"type": "multiple_choice", "q": "What is 'La playa'?", "opts": ["The beach", "The mountain", "The forest", "The river"], "ans": "The beach", "exp": "Playa = beach."},
                                {"type": "word_bank", "q": "Translate: 'A high mountain'", "opts": ["Una", "montaña", "alta", "playa", "río"], "ans": "Una montaña alta", "exp": "Montaña alta."},
                                {"type": "match_pairs", "q": "Match nature elements", "opts": None, "ans": json.dumps([["Playa", "Beach"], ["Montaña", "Mountain"], ["Río", "River"], ["Bosque", "Forest"]]), "exp": "Geographical features."},
                                {"type": "fill_blank", "q": "Nadamos en el ___ (sea).", "opts": ["mar", "montaña", "árbol"], "ans": "mar", "exp": "Mar = sea."},
                                {"type": "type_answer", "q": "Translate 'Beach' to Spanish:", "opts": None, "ans": "Playa", "exp": "Playa = beach."}
                            ]}
                        ]
                    },
                    {
                        "title": "Celebrations & Fiesta",
                        "desc": "Celebrate birthdays, holidays, music festivals, and gifts.",
                        "icon": "gift",
                        "lessons": [
                            {"title": "Birthday Wishes", "exercises": [
                                {"type": "multiple_choice", "q": "What is '¡Feliz cumpleaños!'?", "opts": ["Happy Birthday!", "Happy New Year!", "Merry Christmas!", "Good luck!"], "ans": "Happy Birthday!", "exp": "Universal birthday greeting."},
                                {"type": "word_bank", "q": "Translate: 'A gift for you'", "opts": ["Un", "regalo", "para", "ti", "fiesta", "el"], "ans": "Un regalo para ti", "exp": "Regalo = gift/present."},
                                {"type": "match_pairs", "q": "Match party words", "opts": None, "ans": json.dumps([["Fiesta", "Party"], ["Regalo", "Gift"], ["Pastel", "Cake"], ["Amigos", "Friends"]]), "exp": "Celebration vocabulary."},
                                {"type": "fill_blank", "q": "Comemos el ___ de cumpleaños. (cake)", "opts": ["pastel", "regalo", "canción"], "ans": "pastel", "exp": "Pastel = cake."},
                                {"type": "type_answer", "q": "Translate 'Party' to Spanish:", "opts": None, "ans": "Fiesta", "exp": "Fiesta = party."}
                            ]},
                            {"title": "Traditions & Music", "exercises": [
                                {"type": "multiple_choice", "q": "What does 'Bailar' mean?", "opts": ["To dance", "To sing", "To drink", "To play"], "ans": "To dance", "exp": "Bailar = to dance."},
                                {"type": "word_bank", "q": "Translate: 'Everyone dances at the party'", "opts": ["Todos", "bailan", "en", "la", "fiesta", "cantan"], "ans": "Todos bailan en la fiesta", "exp": "Fiesta excitement."},
                                {"type": "match_pairs", "q": "Match festival actions", "opts": None, "ans": json.dumps([["Bailar", "To dance"], ["Cantar", "To sing"], ["Celebrar", "To celebrate"], ["Sonreír", "To smile"]]), "exp": "Celebratory verbs."},
                                {"type": "fill_blank", "q": "Nos gusta ___ en la fiesta. (to sing)", "opts": ["cantar", "bailo", "regalos"], "ans": "cantar", "exp": "Cantar = to sing."},
                                {"type": "type_answer", "q": "Translate 'To dance' to Spanish:", "opts": None, "ans": "Bailar", "exp": "Bailar = to dance."}
                            ]}
                        ]
                    }
                ]
            }
        ]

        lesson_counter = 1
        created_lessons = []

        for u_idx, u_def in enumerate(units_definitions, start=1):
            unit_obj = Unit(
                course_id=course.id,
                title=u_def["title"],
                description=u_def["desc"],
                order_index=u_idx
            )
            db.add(unit_obj)
            db.flush()

            for s_idx, s_def in enumerate(u_def["skills"], start=1):
                skill_obj = Skill(
                    unit_id=unit_obj.id,
                    title=s_def["title"],
                    description=s_def["desc"],
                    order_index=s_idx,
                    icon=s_def["icon"]
                )
                db.add(skill_obj)
                db.flush()

                for l_idx, l_def in enumerate(s_def["lessons"], start=1):
                    lesson_obj = Lesson(
                        id=lesson_counter,
                        skill_id=skill_obj.id,
                        title=l_def["title"],
                        order_index=l_idx,
                        xp_reward=15
                    )
                    db.add(lesson_obj)
                    db.flush()
                    created_lessons.append(lesson_obj)

                    for ex_idx, ex_def in enumerate(l_def["exercises"], start=1):
                        ex_obj = Exercise(
                            lesson_id=lesson_obj.id,
                            exercise_type=ex_def["type"],
                            question=ex_def["q"],
                            options=ex_def["opts"],
                            correct_answer=ex_def["ans"],
                            explanation=ex_def["exp"],
                            order_index=ex_idx
                        )
                        db.add(ex_obj)

                    lesson_counter += 1

        print(f"Created {len(created_lessons)} lessons total across 3 units.")

        # Seed progress: Mark Lesson 1 and Lesson 2 as completed for main learner
        # Lesson 3 will thus be the current active unlocked lesson!
        print("Seeding initial progress for main user...")
        prog1 = UserProgress(
            user_id=main_user.id,
            lesson_id=1,
            completed=True,
            accuracy=100.0,
            completed_at=datetime.now(timezone.utc) - timedelta(days=2)
        )
        prog2 = UserProgress(
            user_id=main_user.id,
            lesson_id=2,
            completed=True,
            accuracy=92.0,
            completed_at=datetime.now(timezone.utc) - timedelta(days=1)
        )
        db.add(prog1)
        db.add(prog2)

        db.commit()
        print("Database seeded successfully with all 30 lessons, 150+ exercises, gamification stats, and users!")

    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    seed()
