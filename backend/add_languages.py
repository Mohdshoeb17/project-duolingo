import sqlite3
import json
import os

def run():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DB_PATH = os.path.join(BASE_DIR, "duolingo.db")

    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()

    # 0. Ensure courses exist
    cur.execute('''
    INSERT OR IGNORE INTO courses (id, title, source_language, target_language, flag)
    VALUES (2, 'French for English Speakers', 'English', 'French', '🇫🇷')
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO courses (id, title, source_language, target_language, flag)
    VALUES (3, 'German for English Speakers', 'English', 'German', '🇩🇪')
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO courses (id, title, source_language, target_language, flag)
    VALUES (4, 'Japanese for English Speakers', 'English', 'Japanese', '🇯🇵')
    ''')

    # 1. French Unit 1
    cur.execute('''
    INSERT OR IGNORE INTO units (id, course_id, title, description, order_index)
    VALUES (101, 2, 'Unit 1: French Basics & Salutations', 'Learn everyday French greetings, polite phrases, and simple sentences.', 1)
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (201, 101, 'French Greetings', 'Bonjour, Au revoir, and basic etiquette.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (1001, 201, 'Bonjour & Au Revoir', 1, 15)
    ''')

    exs_fr = [
        (10001, 1001, 'multiple_choice', "What does 'Bonjour' mean in English?", json.dumps(["Hello", "Goodbye", "Thanks", "Water"]), "Hello", "'Bonjour' is the standard French greeting for 'Hello'.", 1),
        (10002, 1001, 'word_bank', "Translate: 'Good evening'", json.dumps(["Bonsoir", "Bonjour", "merci", "oui"]), "Bonsoir", "'Bonsoir' translates to 'Good evening'.", 2),
        (10003, 1001, 'match_pairs', "Match French and English greetings", json.dumps([["Bonjour", "Hello"], ["Au revoir", "Goodbye"], ["Merci", "Thank you"], ["S’il vous plaît", "Please"]]), json.dumps([["Bonjour", "Hello"], ["Au revoir", "Goodbye"], ["Merci", "Thank you"], ["S’il vous plaît", "Please"]]), "Basic polite phrases in French.", 3),
        (10004, 1001, 'fill_blank', "___ beaucoup! (Thank you very much!)", json.dumps(["Merci", "Bonjour", "Non"]), "Merci", "'Merci beaucoup' means thank you very much.", 4),
        (10005, 1001, 'type_answer', "Type 'Yes' in French:", None, "Oui", "'Oui' is French for 'Yes'.", 5)
    ]

    for ex in exs_fr:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    # 2. German Unit 1
    cur.execute('''
    INSERT OR IGNORE INTO units (id, course_id, title, description, order_index)
    VALUES (102, 3, 'Unit 1: German Greetings & Introductions', 'Master basic German salutations and common greetings.', 1)
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (202, 102, 'Hallo & Tschüss', 'Greet someone and say goodbye in German.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (1002, 202, 'German Basics', 1, 15)
    ''')

    exs_de = [
        (10011, 1002, 'multiple_choice', "What does 'Hallo' mean?", json.dumps(["Hello", "Goodbye", "Apple", "Night"]), "Hello", "'Hallo' is German for 'Hello'.", 1),
        (10012, 1002, 'word_bank', "Translate: 'Good day'", json.dumps(["Guten", "Tag", "Morgen", "Hallo"]), "Guten Tag", "'Guten Tag' means 'Good day'.", 2),
        (10013, 1002, 'match_pairs', "Match German words with English", json.dumps([["Hallo", "Hello"], ["Tschüss", "Bye"], ["Danke", "Thanks"], ["Bitte", "Please"]]), json.dumps([["Hallo", "Hello"], ["Tschüss", "Bye"], ["Danke", "Thanks"], ["Bitte", "Please"]]), "Core conversational German.", 3),
        (10014, 1002, 'fill_blank', "Guten ___ (Good morning)", json.dumps(["Morgen", "Nacht", "Hallo"]), "Morgen", "'Guten Morgen' means good morning.", 4),
        (10015, 1002, 'type_answer', "Type 'Thank you' in German:", None, "Danke", "'Danke' means thank you.", 5)
    ]

    for ex in exs_de:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    # 3. Japanese Unit 1
    cur.execute('''
    INSERT OR IGNORE INTO units (id, course_id, title, description, order_index)
    VALUES (103, 4, 'Unit 1: Japanese Basics & Hiragana', 'Master foundational greetings and everyday polite phrases.', 1)
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO skills (id, unit_id, title, description, order_index, icon)
    VALUES (203, 103, 'Konnichiwa', 'Daily greetings in Japanese.', 1, 'hand')
    ''')
    cur.execute('''
    INSERT OR IGNORE INTO lessons (id, skill_id, title, order_index, xp_reward)
    VALUES (1003, 203, 'Essential Greetings', 1, 15)
    ''')

    exs_ja = [
        (10021, 1003, 'multiple_choice', "What does 'Konnichiwa' mean?", json.dumps(["Hello / Good afternoon", "Goodbye", "Water", "Night"]), "Hello / Good afternoon", "'Konnichiwa' is the standard Japanese greeting for daytime.", 1),
        (10022, 1003, 'word_bank', "Translate: 'Good morning'", json.dumps(["Ohayou", "gozaimasu", "Konnichiwa", "Arigato"]), "Ohayou gozaimasu", "'Ohayou gozaimasu' is polite 'Good morning'.", 2),
        (10023, 1003, 'match_pairs', "Match Japanese greetings with English", json.dumps([["Konnichiwa", "Hello"], ["Sayonara", "Goodbye"], ["Arigatou", "Thank you"], ["Hai", "Yes"]]), json.dumps([["Konnichiwa", "Hello"], ["Sayonara", "Goodbye"], ["Arigatou", "Thank you"], ["Hai", "Yes"]]), "Japanese core conversational words.", 3),
        (10024, 1003, 'fill_blank', "___ gozaimasu (Polite thank you)", json.dumps(["Arigatou", "Sayonara", "Hai"]), "Arigatou", "'Arigatou gozaimasu' means thank you very much.", 4),
        (10025, 1003, 'type_answer', "Type 'Yes' in Japanese (romaji):", None, "Hai", "'Hai' means yes in Japanese.", 5)
    ]

    for ex in exs_ja:
        cur.execute('''
        INSERT OR REPLACE INTO exercises (id, lesson_id, exercise_type, question, options, correct_answer, explanation, order_index)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ex)

    con.commit()
    con.close()
    print("French, German, and Japanese curriculum successfully added!")

if __name__ == "__main__":
    run()
