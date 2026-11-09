import sqlite3
import json
import os

def run():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DB_PATH = os.path.join(BASE_DIR, "duolingo.db")

    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()

    # 1. Define Indian Languages Courses
    indian_courses = [
        (10, 'Hindi for English Speakers', 'English', 'Hindi', '🇮🇳'),
        (11, 'Tamil for English Speakers', 'English', 'Tamil', '🇮🇳'),
        (12, 'Telugu for English Speakers', 'English', 'Telugu', '🇮🇳'),
        (13, 'Kannada for English Speakers', 'English', 'Kannada', '🇮🇳'),
        (14, 'Malayalam for English Speakers', 'English', 'Malayalam', '🇮🇳'),
        (15, 'English for Hindi Speakers', 'Hindi', 'English', '🇬🇧'),
    ]

    for c in indian_courses:
        cur.execute('''
        INSERT OR REPLACE INTO courses (id, title, source_language, target_language, flag)
        VALUES (?, ?, ?, ?, ?)
        ''', c)

    # 2. Define Units, Skills, Lessons and 5 Exercises per language

    # --- HINDI (Course 10) ---
    cur.execute('''
    INSERT OR REPLACE INTO units (id, course_id, title, description, order_index)
    VALUES (301, 10, 'Unit 1: Hindi Basics & Polite Phrases', 'Master everyday Namaste greetings, polite expressions, and basic sentences.', 1)
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (401, 301, 'Hindi Namaste', 'Everyday greetings in Hindi.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (2001, 401, 'Hindi Greetings', 1, 15)
    ''')

    hindi_exs = [
        (20001, 2001, 'multiple_choice', "What does 'Namaste' (नमस्ते) mean?", json.dumps(["Hello / Greetings", "Goodbye", "Water", "Food"]), "Hello / Greetings", "'Namaste' is the traditional respectful Indian greeting for hello.", 1),
        (20002, 2001, 'word_bank', "Translate: 'Good morning'", json.dumps(["Shubh", "prabhat", "Namaste", "Dhanyawad"]), "Shubh prabhat", "'Shubh prabhat' (शुभ प्रभात) means Good morning.", 2),
        (20003, 2001, 'match_pairs', "Match Hindi words with English meanings", json.dumps([["Namaste", "Hello"], ["Dhanyawad", "Thank you"], ["Haan", "Yes"], ["Nahin", "No"]]), json.dumps([["Namaste", "Hello"], ["Dhanyawad", "Thank you"], ["Haan", "Yes"], ["Nahin", "No"]]), "Essential polite words in Hindi.", 3),
        (20004, 2001, 'fill_blank', "Aap kaise ___? (How are you?)", json.dumps(["hain", "hoon", "tha"]), "hain", "'Aap kaise hain?' (आप कैसे हैं?) means how are you.", 4),
        (20005, 2001, 'type_answer', "Type 'Thank you' in Hindi (romaji):", None, "Dhanyawad", "'Dhanyawad' (धन्यवाद) means Thank you.", 5)
    ]
    for ex in hindi_exs:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    # --- TAMIL (Course 11) ---
    cur.execute('''
    INSERT OR REPLACE INTO units (id, course_id, title, description, order_index)
    VALUES (302, 11, 'Unit 1: Tamil Greetings & Etiquette', 'Learn Vanakkam, respectful words, and common phrases in Tamil.', 1)
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (402, 302, 'Tamil Vanakkam', 'Basic conversational Tamil.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (2002, 402, 'Tamil Basics', 1, 15)
    ''')

    tamil_exs = [
        (20011, 2002, 'multiple_choice', "What does 'Vanakkam' (வணக்கம்) mean?", json.dumps(["Hello / Greetings", "Thank you", "Water", "Good night"]), "Hello / Greetings", "'Vanakkam' is the primary greeting in Tamil.", 1),
        (20012, 2002, 'word_bank', "Translate: 'Thank you'", json.dumps(["Nandri", "Vanakkam", "Aam", "Illai"]), "Nandri", "'Nandri' (நன்றி) means Thank you in Tamil.", 2),
        (20013, 2002, 'match_pairs', "Match Tamil phrases with English", json.dumps([["Vanakkam", "Hello"], ["Nandri", "Thank you"], ["Aam", "Yes"], ["Illai", "No"]]), json.dumps([["Vanakkam", "Hello"], ["Nandri", "Thank you"], ["Aam", "Yes"], ["Illai", "No"]]), "Essential Tamil conversational pairs.", 3),
        (20014, 2002, 'fill_blank', "Kaalai ___ (Good morning in Tamil)", json.dumps(["Vanakkam", "Nandri", "Aam"]), "Vanakkam", "'Kaalai Vanakkam' translates to Good Morning.", 4),
        (20015, 2002, 'type_answer', "Type 'Thank you' in Tamil (romaji):", None, "Nandri", "'Nandri' is Thank you in Tamil.", 5)
    ]
    for ex in tamil_exs:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    # --- TELUGU (Course 12) ---
    cur.execute('''
    INSERT OR REPLACE INTO units (id, course_id, title, description, order_index)
    VALUES (303, 12, 'Unit 1: Telugu Greetings & Welcome', 'Learn Namaskaram, polite words, and everyday Telugu vocabulary.', 1)
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (403, 303, 'Telugu Namaskaram', 'Daily Telugu phrases and politeness.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (2003, 403, 'Telugu Basics', 1, 15)
    ''')

    telugu_exs = [
        (20021, 2003, 'multiple_choice', "What is 'Hello' in Telugu?", json.dumps(["Namaskaram", "Dhanyavadalu", "Avunu", "Kaadu"]), "Namaskaram", "'Namaskaram' (నమస్కారం) is the formal Telugu greeting.", 1),
        (20022, 2003, 'word_bank', "Translate: 'Thank you very much'", json.dumps(["Chala", "dhanyavadalu", "Namaskaram", "Bagunnanu"]), "Chala dhanyavadalu", "'Chala dhanyavadalu' means Thanks a lot in Telugu.", 2),
        (20023, 2003, 'match_pairs', "Match Telugu words to English", json.dumps([["Namaskaram", "Hello"], ["Dhanyavadalu", "Thank you"], ["Avunu", "Yes"], ["Kaadu", "No"]]), json.dumps([["Namaskaram", "Hello"], ["Dhanyavadalu", "Thank you"], ["Avunu", "Yes"], ["Kaadu", "No"]]), "Common Telugu conversational terms.", 3),
        (20024, 2003, 'fill_blank', "Meeru ela ___? (How are you?)", json.dumps(["unnaru", "undi", "ledu"]), "unnaru", "'Meeru ela unnaru?' is the polite way to ask How are you.", 4),
        (20025, 2003, 'type_answer', "Type 'Hello' in Telugu (romaji):", None, "Namaskaram", "'Namaskaram' is Hello in Telugu.", 5)
    ]
    for ex in telugu_exs:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    # --- KANNADA (Course 13) ---
    cur.execute('''
    INSERT OR REPLACE INTO units (id, course_id, title, description, order_index)
    VALUES (304, 13, 'Unit 1: Kannada Basics & Namaskara', 'Learn Namaskara, polite terms, and everyday expressions in Kannada.', 1)
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (404, 304, 'Kannada Namaskara', 'Everyday conversational Kannada.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (2004, 404, 'Kannada Basics', 1, 15)
    ''')

    kannada_exs = [
        (20031, 2004, 'multiple_choice', "What is 'Hello' in Kannada?", json.dumps(["Namaskara", "Dhanyavadagalu", "Haudu", "Illa"]), "Namaskara", "'Namaskara' (ನಮಸ್ಕಾರ) is the greeting in Kannada.", 1),
        (20032, 2004, 'word_bank', "Translate: 'Thank you'", json.dumps(["Dhanyavadagalu", "Namaskara", "Haudu", "Shubhodaya"]), "Dhanyavadagalu", "'Dhanyavadagalu' (ಧನ್ಯವಾದಗಳು) means Thank you.", 2),
        (20033, 2004, 'match_pairs', "Match Kannada vocabulary with English", json.dumps([["Namaskara", "Hello"], ["Dhanyavadagalu", "Thank you"], ["Haudu", "Yes"], ["Illa", "No"]]), json.dumps([["Namaskara", "Hello"], ["Dhanyavadagalu", "Thank you"], ["Haudu", "Yes"], ["Illa", "No"]]), "Essential Kannada pairs.", 3),
        (20034, 2004, 'fill_blank', "Neevu hege ___? (How are you?)", json.dumps(["iddeera", "idya", "iddene"]), "iddeera", "'Neevu hege iddeera?' means How are you in Kannada.", 4),
        (20035, 2004, 'type_answer', "Type 'Hello' in Kannada (romaji):", None, "Namaskara", "'Namaskara' means Hello.", 5)
    ]
    for ex in kannada_exs:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    # --- MALAYALAM (Course 14) ---
    cur.execute('''
    INSERT OR REPLACE INTO units (id, course_id, title, description, order_index)
    VALUES (305, 14, 'Unit 1: Malayalam Greetings & Namaskaram', 'Discover Namaskaram, pleasantries, and foundational Malayalam phrases.', 1)
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (405, 305, 'Malayalam Namaskaram', 'Everyday Malayalam expressions.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (2005, 405, 'Malayalam Basics', 1, 15)
    ''')

    malayalam_exs = [
        (20041, 2005, 'multiple_choice', "What is 'Hello' in Malayalam?", json.dumps(["Namaskaram", "Nanni", "Athe", "Alla"]), "Namaskaram", "'Namaskaram' (നമസ്കാരം) is the standard Malayalam greeting.", 1),
        (20042, 2005, 'word_bank', "Translate: 'Thank you'", json.dumps(["Nanni", "Namaskaram", "Sugham", "Athe"]), "Nanni", "'Nanni' (നന്ദി) means Thank you in Malayalam.", 2),
        (20043, 2005, 'match_pairs', "Match Malayalam phrases with English", json.dumps([["Namaskaram", "Hello"], ["Nanni", "Thank you"], ["Athe", "Yes"], ["Alla", "No"]]), json.dumps([["Namaskaram", "Hello"], ["Nandri", "Thank you"], ["Athe", "Yes"], ["Alla", "No"]]), "Everyday Malayalam vocabulary.", 3),
        (20044, 2005, 'fill_blank', "Sugham ___? (Are you doing well?)", json.dumps(["aano", "undu", "alla"]), "aano", "'Sugham aano?' means How are you / Are you well? in Malayalam.", 4),
        (20045, 2005, 'type_answer', "Type 'Thank you' in Malayalam (romaji):", None, "Nanni", "'Nanni' means Thank you.", 5)
    ]
    for ex in malayalam_exs:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    # --- ENGLISH FOR HINDI SPEAKERS (Course 15) ---
    cur.execute('''
    INSERT OR REPLACE INTO units (id, course_id, title, description, order_index)
    VALUES (306, 15, 'Unit 1: English Greetings for Hindi Speakers', 'Learn essential English greetings, introductions, and everyday sentences.', 1)
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (406, 306, 'English Hello', 'Basic English for Hindi speakers.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR REPLACE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (2006, 406, 'English Greetings', 1, 15)
    ''')

    english_exs = [
        (20051, 2006, 'multiple_choice', "What does 'Hello' mean in Hindi?", json.dumps(["नमस्ते (Namaste)", "पानी (Water)", "अलविदा (Goodbye)", "किताब (Book)"]), "नमस्ते (Namaste)", "'Hello' translates to 'Namaste' in Hindi.", 1),
        (20052, 2006, 'word_bank', "Translate: 'Thank you'", json.dumps(["धन्यवाद", "कृपया", "नमस्ते", "हाँ"]), "धन्यवाद", "'Thank you' means 'धन्यवाद' (Dhanyawad).", 2),
        (20053, 2006, 'match_pairs', "Match English words with Hindi meanings", json.dumps([["Hello", "Namaste"], ["Thank you", "Dhanyawad"], ["Yes", "Haan"], ["No", "Nahin"]]), json.dumps([["Hello", "Namaste"], ["Thank you", "Dhanyawad"], ["Yes", "Haan"], ["No", "Nahin"]]), "English to Hindi common pairs.", 3),
        (20054, 2006, 'fill_blank', "Good ___ (सुबह की नमस्ते / Good morning)", json.dumps(["morning", "night", "bye"]), "morning", "'Good morning' means Shubh Prabhat.", 4),
        (20055, 2006, 'type_answer', "Type 'Yes' in English:", None, "Yes", "'Yes' is the affirmative in English.", 5)
    ]
    for ex in english_exs:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    con.commit()
    con.close()
    print("Hindi, Tamil, Telugu, Kannada, Malayalam, and English courses successfully added!")

if __name__ == "__main__":
    run()
