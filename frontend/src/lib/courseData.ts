import { CoursePath, LessonDetail } from '@/types';

// Pre-defined fallback curriculum for all 10 courses
export const FALLBACK_COURSES_DATA: Record<number, CoursePath> = {
  // 1. Spanish
  1: {
    course_id: 1,
    course_title: 'Spanish for English Speakers',
    target_language: 'Spanish',
    flag: '🇪🇸',
    units: [
      {
            "id": 307,
            "course_id": 1,
            "unit_number": 1,
            "order_index": 1,
            "title": "Unit 1: Fundamentals & Greetings",
            "description": "Master basic introductions, polite words, and essential travel vocabulary.",
            "color": "#58CC02",
            "skills": [
                  {
                        "id": 407,
                        "unit_id": 307,
                        "title": "Basic Greetings",
                        "name": "Basic Greetings",
                        "order_index": 1,
                        "icon": "hand",
                        "lessons": [
                              {
                                    "id": 1,
                                    "skill_id": 407,
                                    "title": "Saying Hello & Goodbye",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": false
                              },
                              {
                                    "id": 2,
                                    "skill_id": 407,
                                    "title": "Polite Expressions",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 408,
                        "unit_id": 307,
                        "title": "People & Introductions",
                        "name": "People & Introductions",
                        "order_index": 2,
                        "icon": "users",
                        "lessons": [
                              {
                                    "id": 3,
                                    "skill_id": 408,
                                    "title": "I am a student",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 4,
                                    "skill_id": 408,
                                    "title": "Names & Origins",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 409,
                        "unit_id": 307,
                        "title": "Food & Drink",
                        "name": "Food & Drink",
                        "order_index": 3,
                        "icon": "coffee",
                        "lessons": [
                              {
                                    "id": 5,
                                    "skill_id": 409,
                                    "title": "At the Café",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 6,
                                    "skill_id": 409,
                                    "title": "Ordering Food",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 410,
                        "unit_id": 307,
                        "title": "Numbers & Counting",
                        "name": "Numbers & Counting",
                        "order_index": 4,
                        "icon": "hash",
                        "lessons": [
                              {
                                    "id": 7,
                                    "skill_id": 410,
                                    "title": "Numbers 1 to 5",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 8,
                                    "skill_id": 410,
                                    "title": "Numbers 6 to 10",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 411,
                        "unit_id": 307,
                        "title": "Family Members",
                        "name": "Family Members",
                        "order_index": 5,
                        "icon": "heart",
                        "lessons": [
                              {
                                    "id": 9,
                                    "skill_id": 411,
                                    "title": "Parents & Siblings",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 10,
                                    "skill_id": 411,
                                    "title": "Describing Family",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  }
            ]
      },
      {
            "id": 308,
            "course_id": 1,
            "unit_number": 2,
            "order_index": 2,
            "title": "Unit 2: Daily Life & Navigation",
            "description": "Navigate cities, ask for directions, and describe places you visit.",
            "color": "#CE82FF",
            "skills": [
                  {
                        "id": 412,
                        "unit_id": 308,
                        "title": "City & Places",
                        "name": "City & Places",
                        "order_index": 1,
                        "icon": "map-pin",
                        "lessons": [
                              {
                                    "id": 11,
                                    "skill_id": 412,
                                    "title": "Around Town",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 12,
                                    "skill_id": 412,
                                    "title": "Asking Directions",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 413,
                        "unit_id": 308,
                        "title": "Time & Schedule",
                        "name": "Time & Schedule",
                        "order_index": 2,
                        "icon": "clock",
                        "lessons": [
                              {
                                    "id": 13,
                                    "skill_id": 413,
                                    "title": "Telling Time",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 14,
                                    "skill_id": 413,
                                    "title": "Days of the Week",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 414,
                        "unit_id": 308,
                        "title": "At Home",
                        "name": "At Home",
                        "order_index": 3,
                        "icon": "home",
                        "lessons": [
                              {
                                    "id": 15,
                                    "skill_id": 414,
                                    "title": "Rooms & House",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 16,
                                    "skill_id": 414,
                                    "title": "Objects & Furniture",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 415,
                        "unit_id": 308,
                        "title": "Shopping & Clothes",
                        "name": "Shopping & Clothes",
                        "order_index": 4,
                        "icon": "shopping-bag",
                        "lessons": [
                              {
                                    "id": 17,
                                    "skill_id": 415,
                                    "title": "Clothing Basics",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 18,
                                    "skill_id": 415,
                                    "title": "Prices & Sizes",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 416,
                        "unit_id": 308,
                        "title": "Feelings & Health",
                        "name": "Feelings & Health",
                        "order_index": 5,
                        "icon": "smile",
                        "lessons": [
                              {
                                    "id": 19,
                                    "skill_id": 416,
                                    "title": "Emotions",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 20,
                                    "skill_id": 416,
                                    "title": "At the Doctor",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  }
            ]
      },
      {
            "id": 309,
            "course_id": 1,
            "unit_number": 3,
            "order_index": 3,
            "title": "Unit 3: Travel, Culture & Leisure",
            "description": "Converse comfortably while traveling, exploring attractions, and enjoying sports.",
            "color": "#00CD9C",
            "skills": [
                  {
                        "id": 417,
                        "unit_id": 309,
                        "title": "Travel & Airport",
                        "name": "Travel & Airport",
                        "order_index": 1,
                        "icon": "plane",
                        "lessons": [
                              {
                                    "id": 21,
                                    "skill_id": 417,
                                    "title": "Boarding the Flight",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 22,
                                    "skill_id": 417,
                                    "title": "Arrival & Customs",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 418,
                        "unit_id": 309,
                        "title": "Hobbies & Sports",
                        "name": "Hobbies & Sports",
                        "order_index": 2,
                        "icon": "activity",
                        "lessons": [
                              {
                                    "id": 23,
                                    "skill_id": 418,
                                    "title": "Playing Sports",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 24,
                                    "skill_id": 418,
                                    "title": "Arts & Free Time",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 419,
                        "unit_id": 309,
                        "title": "Weather & Seasons",
                        "name": "Weather & Seasons",
                        "order_index": 3,
                        "icon": "sun",
                        "lessons": [
                              {
                                    "id": 25,
                                    "skill_id": 419,
                                    "title": "The Forecast",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 26,
                                    "skill_id": 419,
                                    "title": "The 4 Seasons",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 420,
                        "unit_id": 309,
                        "title": "Nature & Animals",
                        "name": "Nature & Animals",
                        "order_index": 4,
                        "icon": "feather",
                        "lessons": [
                              {
                                    "id": 27,
                                    "skill_id": 420,
                                    "title": "Wild Animals",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 28,
                                    "skill_id": 420,
                                    "title": "Landscapes",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  },
                  {
                        "id": 421,
                        "unit_id": 309,
                        "title": "Celebrations & Fiesta",
                        "name": "Celebrations & Fiesta",
                        "order_index": 5,
                        "icon": "gift",
                        "lessons": [
                              {
                                    "id": 29,
                                    "skill_id": 421,
                                    "title": "Birthday Wishes",
                                    "order_index": 1,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              },
                              {
                                    "id": 30,
                                    "skill_id": 421,
                                    "title": "Traditions & Music",
                                    "order_index": 2,
                                    "total_xp": 15,
                                    "xp_reward": 15,
                                    "completed": false,
                                    "locked": true
                              }
                        ]
                  }
            ]
      }
]
  },
  // 2. French
  2: {
    course_id: 2,
    course_title: 'French for English Speakers',
    target_language: 'French',
    flag: '🇫🇷',
    units: [
      {
        id: 101,
        course_id: 2,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: French Basics & Salutations',
        description: 'Learn everyday French greetings, polite phrases, and simple sentences.',
        color: '#1CB0F6',
        skills: [
          {
            id: 201,
            unit_id: 101,
            title: 'French Greetings',
            name: 'French Greetings',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 1001, skill_id: 201, title: 'Bonjour & Au Revoir', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 3. German
  3: {
    course_id: 3,
    course_title: 'German for English Speakers',
    target_language: 'German',
    flag: '🇩🇪',
    units: [
      {
        id: 102,
        course_id: 3,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: German Greetings & Introductions',
        description: 'Master basic German salutations and common greetings.',
        color: '#FF9600',
        skills: [
          {
            id: 202,
            unit_id: 102,
            title: 'Hallo & Tschüss',
            name: 'Hallo & Tschüss',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 1002, skill_id: 202, title: 'German Basics', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 4. Japanese
  4: {
    course_id: 4,
    course_title: 'Japanese for English Speakers',
    target_language: 'Japanese',
    flag: '🇯🇵',
    units: [
      {
        id: 103,
        course_id: 4,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: Japanese Basics & Hiragana',
        description: 'Master foundational greetings and everyday polite phrases.',
        color: '#FF4B4B',
        skills: [
          {
            id: 203,
            unit_id: 103,
            title: 'Konnichiwa',
            name: 'Konnichiwa',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 1003, skill_id: 203, title: 'Essential Greetings', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 10. Hindi
  10: {
    course_id: 10,
    course_title: 'Hindi for English Speakers',
    target_language: 'Hindi',
    flag: '🇮🇳',
    units: [
      {
        id: 301,
        course_id: 10,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: Hindi Basics & Polite Phrases',
        description: 'Master everyday Namaste greetings, polite expressions, and basic sentences.',
        color: '#58CC02',
        skills: [
          {
            id: 401,
            unit_id: 301,
            title: 'Hindi Namaste',
            name: 'Hindi Namaste',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 2001, skill_id: 401, title: 'Hindi Greetings (नमस्ते)', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 11. Tamil
  11: {
    course_id: 11,
    course_title: 'Tamil for English Speakers',
    target_language: 'Tamil',
    flag: '🇮🇳',
    units: [
      {
        id: 302,
        course_id: 11,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: Tamil Greetings & Etiquette',
        description: 'Learn Vanakkam, respectful words, and common phrases in Tamil.',
        color: '#FF9600',
        skills: [
          {
            id: 402,
            unit_id: 302,
            title: 'Tamil Vanakkam',
            name: 'Tamil Vanakkam',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 2002, skill_id: 402, title: 'Tamil Basics (வணக்கம்)', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 12. Telugu
  12: {
    course_id: 12,
    course_title: 'Telugu for English Speakers',
    target_language: 'Telugu',
    flag: '🇮🇳',
    units: [
      {
        id: 303,
        course_id: 12,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: Telugu Greetings & Welcome',
        description: 'Learn Namaskaram, polite words, and everyday Telugu vocabulary.',
        color: '#1CB0F6',
        skills: [
          {
            id: 403,
            unit_id: 303,
            title: 'Telugu Namaskaram',
            name: 'Telugu Namaskaram',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 2003, skill_id: 403, title: 'Telugu Basics (నమస్కారం)', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 13. Kannada
  13: {
    course_id: 13,
    course_title: 'Kannada for English Speakers',
    target_language: 'Kannada',
    flag: '🇮🇳',
    units: [
      {
        id: 304,
        course_id: 13,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: Kannada Basics & Namaskara',
        description: 'Learn Namaskara, polite terms, and everyday expressions in Kannada.',
        color: '#CE82FF',
        skills: [
          {
            id: 404,
            unit_id: 304,
            title: 'Kannada Namaskara',
            name: 'Kannada Namaskara',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 2004, skill_id: 404, title: 'Kannada Basics (ನಮಸ್ಕಾರ)', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 14. Malayalam
  14: {
    course_id: 14,
    course_title: 'Malayalam for English Speakers',
    target_language: 'Malayalam',
    flag: '🇮🇳',
    units: [
      {
        id: 305,
        course_id: 14,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: Malayalam Greetings & Namaskaram',
        description: 'Discover Namaskaram, pleasantries, and foundational Malayalam phrases.',
        color: '#00CD9C',
        skills: [
          {
            id: 405,
            unit_id: 305,
            title: 'Malayalam Namaskaram',
            name: 'Malayalam Namaskaram',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 2005, skill_id: 405, title: 'Malayalam Basics (നമസ്കാരം)', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },

  // 15. English for Hindi Speakers
  15: {
    course_id: 15,
    course_title: 'English for Hindi Speakers',
    target_language: 'English',
    flag: '🇬🇧',
    units: [
      {
        id: 306,
        course_id: 15,
        unit_number: 1,
        order_index: 1,
        title: 'Unit 1: English Greetings for Hindi Speakers',
        description: 'Learn essential English greetings, introductions, and everyday sentences.',
        color: '#1CB0F6',
        skills: [
          {
            id: 406,
            unit_id: 306,
            title: 'English Hello',
            name: 'English Hello',
            order_index: 1,
            icon: 'hand',
            lessons: [
              { id: 2006, skill_id: 406, title: 'English Greetings', order_index: 1, total_xp: 15, xp_reward: 15, completed: false, locked: false },
            ],
          },
        ],
      },
    ],
  },
};

// Complete fallback lessons with exercises for instant playback
export const FALLBACK_LESSONS_DATA: Record<number, any> = {
  // Spanish Lessons 1 to 30 (from database)
  1: {
      "id": 1,
      "title": "Saying Hello & Goodbye",
      "xp_reward": 15,
      "skill_title": "Basic Greetings",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20056,
              "lesson_id": 1,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Hola' mean?",
              "question": "What does 'Hola' mean?",
              "question_text": "What does 'Hola' mean?",
              "options": [
                  "Hello",
                  "Goodbye",
                  "Thank you",
                  "Water"
              ],
              "pairs": null,
              "correct_answer": "Hello",
              "explanation": "'Hola' is the universal Spanish greeting for 'Hello'.",
              "order_index": 1
          },
          {
              "id": 20057,
              "lesson_id": 1,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Good morning'",
              "question": "Translate: 'Good morning'",
              "question_text": "Translate: 'Good morning'",
              "options": [
                  "Buenos",
                  "días",
                  "noches",
                  "tardes",
                  "Hola"
              ],
              "pairs": null,
              "correct_answer": "Buenos días",
              "explanation": "'Buenos días' directly translates to 'Good morning'.",
              "order_index": 2
          },
          {
              "id": 20058,
              "lesson_id": 1,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match each Spanish greeting with its English meaning",
              "question": "Match each Spanish greeting with its English meaning",
              "question_text": "Match each Spanish greeting with its English meaning",
              "options": [],
              "pairs": {
                  "Hola": "Hello",
                  "Adiós": "Goodbye",
                  "Gracias": "Thank you",
                  "Por favor": "Please"
              },
              "correct_answer": "[[\"Hola\", \"Hello\"], [\"Adi\\u00f3s\", \"Goodbye\"], [\"Gracias\", \"Thank you\"], [\"Por favor\", \"Please\"]]",
              "explanation": "Pairing basic conversational polite phrases.",
              "order_index": 3
          },
          {
              "id": 20059,
              "lesson_id": 1,
              "exercise_type": "FILL_BLANK",
              "prompt": "___ noches. (Good evening / night)",
              "question": "___ noches. (Good evening / night)",
              "question_text": "___ noches. (Good evening / night)",
              "options": [
                  "Buenas",
                  "Buenos",
                  "Hola"
              ],
              "pairs": null,
              "correct_answer": "Buenas",
              "explanation": "'Noches' is a feminine plural noun, so it takes 'Buenas'.",
              "order_index": 4
          },
          {
              "id": 20060,
              "lesson_id": 1,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type the Spanish word for 'Goodbye':",
              "question": "Type the Spanish word for 'Goodbye':",
              "question_text": "Type the Spanish word for 'Goodbye':",
              "options": [],
              "pairs": null,
              "correct_answer": "Adiós",
              "explanation": "'Adiós' means goodbye.",
              "order_index": 5
          }
      ]
  },

  2: {
      "id": 2,
      "title": "Polite Expressions",
      "xp_reward": 15,
      "skill_title": "Basic Greetings",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20061,
              "lesson_id": 2,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "How do you say 'Thank you' in Spanish?",
              "question": "How do you say 'Thank you' in Spanish?",
              "question_text": "How do you say 'Thank you' in Spanish?",
              "options": [
                  "Gracias",
                  "De nada",
                  "Perdón",
                  "Por favor"
              ],
              "pairs": null,
              "correct_answer": "Gracias",
              "explanation": "'Gracias' means thank you.",
              "order_index": 1
          },
          {
              "id": 20062,
              "lesson_id": 2,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'You are welcome'",
              "question": "Translate: 'You are welcome'",
              "question_text": "Translate: 'You are welcome'",
              "options": [
                  "De",
                  "nada",
                  "por",
                  "favor",
                  "mucho"
              ],
              "pairs": null,
              "correct_answer": "De nada",
              "explanation": "'De nada' is 'You are welcome'.",
              "order_index": 2
          },
          {
              "id": 20063,
              "lesson_id": 2,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match polite words",
              "question": "Match polite words",
              "question_text": "Match polite words",
              "options": [],
              "pairs": {
                  "Perdón": "Excuse me",
                  "De nada": "You're welcome",
                  "Mucho gusto": "Nice to meet you",
                  "Sí": "Yes"
              },
              "correct_answer": "[[\"Perd\\u00f3n\", \"Excuse me\"], [\"De nada\", \"You're welcome\"], [\"Mucho gusto\", \"Nice to meet you\"], [\"S\\u00ed\", \"Yes\"]]",
              "explanation": "Common polite phrases in daily conversations.",
              "order_index": 3
          },
          {
              "id": 20064,
              "lesson_id": 2,
              "exercise_type": "FILL_BLANK",
              "prompt": "Muchas ___ (Thank you very much)",
              "question": "Muchas ___ (Thank you very much)",
              "question_text": "Muchas ___ (Thank you very much)",
              "options": [
                  "gracias",
                  "favor",
                  "buenos"
              ],
              "pairs": null,
              "correct_answer": "gracias",
              "explanation": "'Muchas gracias' means thanks a lot / thank you very much.",
              "order_index": 4
          },
          {
              "id": 20065,
              "lesson_id": 2,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type the English translation for 'Por favor':",
              "question": "Type the English translation for 'Por favor':",
              "question_text": "Type the English translation for 'Por favor':",
              "options": [],
              "pairs": null,
              "correct_answer": "Please",
              "explanation": "'Por favor' translates to 'Please'.",
              "order_index": 5
          }
      ]
  },

  3: {
      "id": 3,
      "title": "I am a student",
      "xp_reward": 15,
      "skill_title": "People & Introductions",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20066,
              "lesson_id": 3,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Yo soy' mean?",
              "question": "What does 'Yo soy' mean?",
              "question_text": "What does 'Yo soy' mean?",
              "options": [
                  "I am",
                  "You are",
                  "He is",
                  "We are"
              ],
              "pairs": null,
              "correct_answer": "I am",
              "explanation": "'Yo soy' translates to 'I am'.",
              "order_index": 1
          },
          {
              "id": 20067,
              "lesson_id": 3,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I am a student'",
              "question": "Translate: 'I am a student'",
              "question_text": "Translate: 'I am a student'",
              "options": [
                  "Yo",
                  "soy",
                  "un",
                  "estudiante",
                  "casa",
                  "el"
              ],
              "pairs": null,
              "correct_answer": "Yo soy un estudiante",
              "explanation": "'Yo soy un estudiante' = 'I am a student'.",
              "order_index": 2
          },
          {
              "id": 20068,
              "lesson_id": 3,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match pronouns and nouns",
              "question": "Match pronouns and nouns",
              "question_text": "Match pronouns and nouns",
              "options": [],
              "pairs": {
                  "Yo": "I",
                  "Tú": "You",
                  "Él": "He",
                  "Ella": "She"
              },
              "correct_answer": "[[\"Yo\", \"I\"], [\"T\\u00fa\", \"You\"], [\"\\u00c9l\", \"He\"], [\"Ella\", \"She\"]]",
              "explanation": "Subject pronouns in Spanish.",
              "order_index": 3
          },
          {
              "id": 20069,
              "lesson_id": 3,
              "exercise_type": "FILL_BLANK",
              "prompt": "Ella ___ maestra. (She is a teacher)",
              "question": "Ella ___ maestra. (She is a teacher)",
              "question_text": "Ella ___ maestra. (She is a teacher)",
              "options": [
                  "es",
                  "soy",
                  "eres"
              ],
              "pairs": null,
              "correct_answer": "es",
              "explanation": "'Ella es' is the 3rd person singular form of 'ser'.",
              "order_index": 4
          },
          {
              "id": 20070,
              "lesson_id": 3,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'I am' to Spanish:",
              "question": "Translate 'I am' to Spanish:",
              "question_text": "Translate 'I am' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Yo soy",
              "explanation": "'Yo soy' or simply 'Soy' means I am.",
              "order_index": 5
          }
      ]
  },

  4: {
      "id": 4,
      "title": "Names & Origins",
      "xp_reward": 15,
      "skill_title": "People & Introductions",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20071,
              "lesson_id": 4,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "How do you ask 'What is your name?'",
              "question": "How do you ask 'What is your name?'",
              "question_text": "How do you ask 'What is your name?'",
              "options": [
                  "¿Cómo te llamas?",
                  "¿Dónde estás?",
                  "¿Cuántos años?",
                  "¿De dónde eres?"
              ],
              "pairs": null,
              "correct_answer": "¿Cómo te llamas?",
              "explanation": "'¿Cómo te llamas?' asks for someone's name.",
              "order_index": 1
          },
          {
              "id": 20072,
              "lesson_id": 4,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'My name is Carlos'",
              "question": "Translate: 'My name is Carlos'",
              "question_text": "Translate: 'My name is Carlos'",
              "options": [
                  "Me",
                  "llamo",
                  "Carlos",
                  "nombre",
                  "es",
                  "yo"
              ],
              "pairs": null,
              "correct_answer": "Me llamo Carlos",
              "explanation": "'Me llamo Carlos' means 'My name is Carlos'.",
              "order_index": 2
          },
          {
              "id": 20073,
              "lesson_id": 4,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match conversational phrases",
              "question": "Match conversational phrases",
              "question_text": "Match conversational phrases",
              "options": [],
              "pairs": {
                  "¿Cómo estás?": "How are you?",
                  "Bien": "Fine / Good",
                  "Mal": "Bad",
                  "¿Y tú?": "And you?"
              },
              "correct_answer": "[[\"\\u00bfC\\u00f3mo est\\u00e1s?\", \"How are you?\"], [\"Bien\", \"Fine / Good\"], [\"Mal\", \"Bad\"], [\"\\u00bfY t\\u00fa?\", \"And you?\"]]",
              "explanation": "Checking in on how someone feels.",
              "order_index": 3
          },
          {
              "id": 20074,
              "lesson_id": 4,
              "exercise_type": "FILL_BLANK",
              "prompt": "Yo soy ___ España. (I am from Spain)",
              "question": "Yo soy ___ España. (I am from Spain)",
              "question_text": "Yo soy ___ España. (I am from Spain)",
              "options": [
                  "de",
                  "en",
                  "con"
              ],
              "pairs": null,
              "correct_answer": "de",
              "explanation": "'de' denotes origin (from).",
              "order_index": 4
          },
          {
              "id": 20075,
              "lesson_id": 4,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Good' or 'Well' to Spanish:",
              "question": "Translate 'Good' or 'Well' to Spanish:",
              "question_text": "Translate 'Good' or 'Well' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Bien",
              "explanation": "'Bien' = Well / Good.",
              "order_index": 5
          }
      ]
  },

  5: {
      "id": 5,
      "title": "At the Café",
      "xp_reward": 15,
      "skill_title": "Food & Drink",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20076,
              "lesson_id": 5,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'Agua'?",
              "question": "What is 'Agua'?",
              "question_text": "What is 'Agua'?",
              "options": [
                  "Water",
                  "Coffee",
                  "Bread",
                  "Milk"
              ],
              "pairs": null,
              "correct_answer": "Water",
              "explanation": "'Agua' means water.",
              "order_index": 1
          },
          {
              "id": 20077,
              "lesson_id": 5,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'A coffee with milk, please'",
              "question": "Translate: 'A coffee with milk, please'",
              "question_text": "Translate: 'A coffee with milk, please'",
              "options": [
                  "Un",
                  "café",
                  "con",
                  "leche",
                  "por",
                  "favor",
                  "pan"
              ],
              "pairs": null,
              "correct_answer": "Un café con leche por favor",
              "explanation": "Ordering standard morning coffee.",
              "order_index": 2
          },
          {
              "id": 20078,
              "lesson_id": 5,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match food & drink words",
              "question": "Match food & drink words",
              "question_text": "Match food & drink words",
              "options": [],
              "pairs": {
                  "Pan": "Bread",
                  "Agua": "Water",
                  "Leche": "Milk",
                  "Café": "Coffee"
              },
              "correct_answer": "[[\"Pan\", \"Bread\"], [\"Agua\", \"Water\"], [\"Leche\", \"Milk\"], [\"Caf\\u00e9\", \"Coffee\"]]",
              "explanation": "Basic breakfast vocabulary.",
              "order_index": 3
          },
          {
              "id": 20079,
              "lesson_id": 5,
              "exercise_type": "FILL_BLANK",
              "prompt": "Yo quiero ___ manzana. (I want an apple)",
              "question": "Yo quiero ___ manzana. (I want an apple)",
              "question_text": "Yo quiero ___ manzana. (I want an apple)",
              "options": [
                  "una",
                  "un",
                  "el"
              ],
              "pairs": null,
              "correct_answer": "una",
              "explanation": "'Manzana' is feminine singular.",
              "order_index": 4
          },
          {
              "id": 20080,
              "lesson_id": 5,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type the Spanish word for 'Bread':",
              "question": "Type the Spanish word for 'Bread':",
              "question_text": "Type the Spanish word for 'Bread':",
              "options": [],
              "pairs": null,
              "correct_answer": "Pan",
              "explanation": "'Pan' = Bread.",
              "order_index": 5
          }
      ]
  },

  6: {
      "id": 6,
      "title": "Ordering Food",
      "xp_reward": 15,
      "skill_title": "Food & Drink",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20081,
              "lesson_id": 6,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'La cuenta, por favor' mean?",
              "question": "What does 'La cuenta, por favor' mean?",
              "question_text": "What does 'La cuenta, por favor' mean?",
              "options": [
                  "The check, please",
                  "More food, please",
                  "A table, please",
                  "Thank you very much"
              ],
              "pairs": null,
              "correct_answer": "The check, please",
              "explanation": "'La cuenta' refers to the bill or check in restaurants.",
              "order_index": 1
          },
          {
              "id": 20082,
              "lesson_id": 6,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I need a table'",
              "question": "Translate: 'I need a table'",
              "question_text": "Translate: 'I need a table'",
              "options": [
                  "Necesito",
                  "una",
                  "mesa",
                  "silla",
                  "dos"
              ],
              "pairs": null,
              "correct_answer": "Necesito una mesa",
              "explanation": "'Necesito una mesa' = 'I need a table'.",
              "order_index": 2
          },
          {
              "id": 20083,
              "lesson_id": 6,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match restaurant vocabulary",
              "question": "Match restaurant vocabulary",
              "question_text": "Match restaurant vocabulary",
              "options": [],
              "pairs": {
                  "Mesa": "Table",
                  "Comida": "Food",
                  "Cuenta": "Bill",
                  "Menú": "Menu"
              },
              "correct_answer": "[[\"Mesa\", \"Table\"], [\"Comida\", \"Food\"], [\"Cuenta\", \"Bill\"], [\"Men\\u00fa\", \"Menu\"]]",
              "explanation": "Restaurant dining items.",
              "order_index": 3
          },
          {
              "id": 20084,
              "lesson_id": 6,
              "exercise_type": "FILL_BLANK",
              "prompt": "¿Tiene ___ menú? (Do you have the menu?)",
              "question": "¿Tiene ___ menú? (Do you have the menu?)",
              "question_text": "¿Tiene ___ menú? (Do you have the menu?)",
              "options": [
                  "el",
                  "la",
                  "las"
              ],
              "pairs": null,
              "correct_answer": "el",
              "explanation": "'Menú' takes masculine article 'el'.",
              "order_index": 4
          },
          {
              "id": 20085,
              "lesson_id": 6,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type the Spanish word for 'Water':",
              "question": "Type the Spanish word for 'Water':",
              "question_text": "Type the Spanish word for 'Water':",
              "options": [],
              "pairs": null,
              "correct_answer": "Agua",
              "explanation": "'Agua' = water.",
              "order_index": 5
          }
      ]
  },

  7: {
      "id": 7,
      "title": "Numbers 1 to 5",
      "xp_reward": 15,
      "skill_title": "Numbers & Counting",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20086,
              "lesson_id": 7,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "Which number is 'Tres'?",
              "question": "Which number is 'Tres'?",
              "question_text": "Which number is 'Tres'?",
              "options": [
                  "3",
                  "2",
                  "4",
                  "5"
              ],
              "pairs": null,
              "correct_answer": "3",
              "explanation": "'Tres' is the number 3.",
              "order_index": 1
          },
          {
              "id": 20087,
              "lesson_id": 7,
              "exercise_type": "WORD_BANK",
              "prompt": "Arrange numbers in order: 1, 2, 3",
              "question": "Arrange numbers in order: 1, 2, 3",
              "question_text": "Arrange numbers in order: 1, 2, 3",
              "options": [
                  "Uno",
                  "dos",
                  "tres",
                  "cuatro",
                  "cinco"
              ],
              "pairs": null,
              "correct_answer": "Uno dos tres",
              "explanation": "Sequential numbers 1, 2, 3.",
              "order_index": 2
          },
          {
              "id": 20088,
              "lesson_id": 7,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match numbers to digits",
              "question": "Match numbers to digits",
              "question_text": "Match numbers to digits",
              "options": [],
              "pairs": {
                  "Uno": "1",
                  "Dos": "2",
                  "Tres": "3",
                  "Cuatro": "4"
              },
              "correct_answer": "[[\"Uno\", \"1\"], [\"Dos\", \"2\"], [\"Tres\", \"3\"], [\"Cuatro\", \"4\"]]",
              "explanation": "Spanish numbers.",
              "order_index": 3
          },
          {
              "id": 20089,
              "lesson_id": 7,
              "exercise_type": "FILL_BLANK",
              "prompt": "Uno, dos, tres, cuatro, ___",
              "question": "Uno, dos, tres, cuatro, ___",
              "question_text": "Uno, dos, tres, cuatro, ___",
              "options": [
                  "cinco",
                  "seis",
                  "diez"
              ],
              "pairs": null,
              "correct_answer": "cinco",
              "explanation": "'Cinco' is 5.",
              "order_index": 4
          },
          {
              "id": 20090,
              "lesson_id": 7,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type the Spanish word for 'Two':",
              "question": "Type the Spanish word for 'Two':",
              "question_text": "Type the Spanish word for 'Two':",
              "options": [],
              "pairs": null,
              "correct_answer": "Dos",
              "explanation": "'Dos' = 2.",
              "order_index": 5
          }
      ]
  },

  8: {
      "id": 8,
      "title": "Numbers 6 to 10",
      "xp_reward": 15,
      "skill_title": "Numbers & Counting",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20091,
              "lesson_id": 8,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'Diez'?",
              "question": "What is 'Diez'?",
              "question_text": "What is 'Diez'?",
              "options": [
                  "10",
                  "8",
                  "6",
                  "7"
              ],
              "pairs": null,
              "correct_answer": "10",
              "explanation": "'Diez' = 10.",
              "order_index": 1
          },
          {
              "id": 20092,
              "lesson_id": 8,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Eight tacos'",
              "question": "Translate: 'Eight tacos'",
              "question_text": "Translate: 'Eight tacos'",
              "options": [
                  "Ocho",
                  "tacos",
                  "siete",
                  "nueve"
              ],
              "pairs": null,
              "correct_answer": "Ocho tacos",
              "explanation": "'Ocho tacos' = Eight tacos.",
              "order_index": 2
          },
          {
              "id": 20093,
              "lesson_id": 8,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match numbers 6 to 9",
              "question": "Match numbers 6 to 9",
              "question_text": "Match numbers 6 to 9",
              "options": [],
              "pairs": {
                  "Seis": "6",
                  "Siete": "7",
                  "Ocho": "8",
                  "Nueve": "9"
              },
              "correct_answer": "[[\"Seis\", \"6\"], [\"Siete\", \"7\"], [\"Ocho\", \"8\"], [\"Nueve\", \"9\"]]",
              "explanation": "Spanish numbers 6 through 9.",
              "order_index": 3
          },
          {
              "id": 20094,
              "lesson_id": 8,
              "exercise_type": "FILL_BLANK",
              "prompt": "Tengo ___ años. (I am 10 years old)",
              "question": "Tengo ___ años. (I am 10 years old)",
              "question_text": "Tengo ___ años. (I am 10 years old)",
              "options": [
                  "diez",
                  "dos",
                  "uno"
              ],
              "pairs": null,
              "correct_answer": "diez",
              "explanation": "'Diez' fits here.",
              "order_index": 4
          },
          {
              "id": 20095,
              "lesson_id": 8,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type the Spanish word for 'Seven':",
              "question": "Type the Spanish word for 'Seven':",
              "question_text": "Type the Spanish word for 'Seven':",
              "options": [],
              "pairs": null,
              "correct_answer": "Siete",
              "explanation": "'Siete' = 7.",
              "order_index": 5
          }
      ]
  },

  9: {
      "id": 9,
      "title": "Parents & Siblings",
      "xp_reward": 15,
      "skill_title": "Family Members",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20096,
              "lesson_id": 9,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Madre' mean?",
              "question": "What does 'Madre' mean?",
              "question_text": "What does 'Madre' mean?",
              "options": [
                  "Mother",
                  "Father",
                  "Sister",
                  "Brother"
              ],
              "pairs": null,
              "correct_answer": "Mother",
              "explanation": "'Madre' is Mother / Mom.",
              "order_index": 1
          },
          {
              "id": 20097,
              "lesson_id": 9,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'My father and my mother'",
              "question": "Translate: 'My father and my mother'",
              "question_text": "Translate: 'My father and my mother'",
              "options": [
                  "Mi",
                  "padre",
                  "y",
                  "mi",
                  "madre",
                  "hermano"
              ],
              "pairs": null,
              "correct_answer": "Mi padre y mi madre",
              "explanation": "Family pairings.",
              "order_index": 2
          },
          {
              "id": 20098,
              "lesson_id": 9,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match family relations",
              "question": "Match family relations",
              "question_text": "Match family relations",
              "options": [],
              "pairs": {
                  "Padre": "Father",
                  "Madre": "Mother",
                  "Hermano": "Brother",
                  "Hermana": "Sister"
              },
              "correct_answer": "[[\"Padre\", \"Father\"], [\"Madre\", \"Mother\"], [\"Hermano\", \"Brother\"], [\"Hermana\", \"Sister\"]]",
              "explanation": "Immediate family members in Spanish.",
              "order_index": 3
          },
          {
              "id": 20099,
              "lesson_id": 9,
              "exercise_type": "FILL_BLANK",
              "prompt": "Él es mi ___ (brother).",
              "question": "Él es mi ___ (brother).",
              "question_text": "Él es mi ___ (brother).",
              "options": [
                  "hermano",
                  "hermana",
                  "madre"
              ],
              "pairs": null,
              "correct_answer": "hermano",
              "explanation": "'Hermano' is masculine brother.",
              "order_index": 4
          },
          {
              "id": 20100,
              "lesson_id": 9,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Sister' to Spanish:",
              "question": "Translate 'Sister' to Spanish:",
              "question_text": "Translate 'Sister' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Hermana",
              "explanation": "'Hermana' = sister.",
              "order_index": 5
          }
      ]
  },

  10: {
      "id": 10,
      "title": "Describing Family",
      "xp_reward": 15,
      "skill_title": "Family Members",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20101,
              "lesson_id": 10,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Mi familia es grande' mean?",
              "question": "What does 'Mi familia es grande' mean?",
              "question_text": "What does 'Mi familia es grande' mean?",
              "options": [
                  "My family is big",
                  "My family is small",
                  "My family is happy",
                  "My house is big"
              ],
              "pairs": null,
              "correct_answer": "My family is big",
              "explanation": "'Grande' means big or large.",
              "order_index": 1
          },
          {
              "id": 20102,
              "lesson_id": 10,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I have a dog'",
              "question": "Translate: 'I have a dog'",
              "question_text": "Translate: 'I have a dog'",
              "options": [
                  "Tengo",
                  "un",
                  "perro",
                  "gato",
                  "casa"
              ],
              "pairs": null,
              "correct_answer": "Tengo un perro",
              "explanation": "'Tengo un perro' = I have a dog.",
              "order_index": 2
          },
          {
              "id": 20103,
              "lesson_id": 10,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match pets & family",
              "question": "Match pets & family",
              "question_text": "Match pets & family",
              "options": [],
              "pairs": {
                  "Perro": "Dog",
                  "Gato": "Cat",
                  "Abuelo": "Grandfather",
                  "Abuela": "Grandmother"
              },
              "correct_answer": "[[\"Perro\", \"Dog\"], [\"Gato\", \"Cat\"], [\"Abuelo\", \"Grandfather\"], [\"Abuela\", \"Grandmother\"]]",
              "explanation": "Common home companions.",
              "order_index": 3
          },
          {
              "id": 20104,
              "lesson_id": 10,
              "exercise_type": "FILL_BLANK",
              "prompt": "Mi abuela es ___ (nice / kind).",
              "question": "Mi abuela es ___ (nice / kind).",
              "question_text": "Mi abuela es ___ (nice / kind).",
              "options": [
                  "simpática",
                  "simpático",
                  "grande"
              ],
              "pairs": null,
              "correct_answer": "simpática",
              "explanation": "'Abuela' is feminine, adjective takes feminine ending.",
              "order_index": 4
          },
          {
              "id": 20105,
              "lesson_id": 10,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Dog' to Spanish:",
              "question": "Translate 'Dog' to Spanish:",
              "question_text": "Translate 'Dog' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Perro",
              "explanation": "'Perro' = dog.",
              "order_index": 5
          }
      ]
  },

  11: {
      "id": 11,
      "title": "Around Town",
      "xp_reward": 15,
      "skill_title": "City & Places",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20106,
              "lesson_id": 11,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'La estación de tren'?",
              "question": "What is 'La estación de tren'?",
              "question_text": "What is 'La estación de tren'?",
              "options": [
                  "Train station",
                  "Airport",
                  "Bus stop",
                  "Hotel"
              ],
              "pairs": null,
              "correct_answer": "Train station",
              "explanation": "'Estación de tren' is train station.",
              "order_index": 1
          },
          {
              "id": 20107,
              "lesson_id": 11,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Where is the hotel?'",
              "question": "Translate: 'Where is the hotel?'",
              "question_text": "Translate: 'Where is the hotel?'",
              "options": [
                  "¿Dónde",
                  "está",
                  "el",
                  "hotel?",
                  "la",
                  "casa"
              ],
              "pairs": null,
              "correct_answer": "¿Dónde está el hotel?",
              "explanation": "Asking where places are located.",
              "order_index": 2
          },
          {
              "id": 20108,
              "lesson_id": 11,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match town destinations",
              "question": "Match town destinations",
              "question_text": "Match town destinations",
              "options": [],
              "pairs": {
                  "Parque": "Park",
                  "Museo": "Museum",
                  "Hotel": "Hotel",
                  "Calle": "Street"
              },
              "correct_answer": "[[\"Parque\", \"Park\"], [\"Museo\", \"Museum\"], [\"Hotel\", \"Hotel\"], [\"Calle\", \"Street\"]]",
              "explanation": "City spots.",
              "order_index": 3
          },
          {
              "id": 20109,
              "lesson_id": 11,
              "exercise_type": "FILL_BLANK",
              "prompt": "El banco está en la ___ (street).",
              "question": "El banco está en la ___ (street).",
              "question_text": "El banco está en la ___ (street).",
              "options": [
                  "calle",
                  "casa",
                  "agua"
              ],
              "pairs": null,
              "correct_answer": "calle",
              "explanation": "'Calle' = street.",
              "order_index": 4
          },
          {
              "id": 20110,
              "lesson_id": 11,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type Spanish for 'Park':",
              "question": "Type Spanish for 'Park':",
              "question_text": "Type Spanish for 'Park':",
              "options": [],
              "pairs": null,
              "correct_answer": "Parque",
              "explanation": "'Parque' = park.",
              "order_index": 5
          }
      ]
  },

  12: {
      "id": 12,
      "title": "Asking Directions",
      "xp_reward": 15,
      "skill_title": "City & Places",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20111,
              "lesson_id": 12,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'A la derecha' mean?",
              "question": "What does 'A la derecha' mean?",
              "question_text": "What does 'A la derecha' mean?",
              "options": [
                  "To the right",
                  "To the left",
                  "Straight ahead",
                  "Behind"
              ],
              "pairs": null,
              "correct_answer": "To the right",
              "explanation": "Derecha is right.",
              "order_index": 1
          },
          {
              "id": 20112,
              "lesson_id": 12,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Turn to the left'",
              "question": "Translate: 'Turn to the left'",
              "question_text": "Translate: 'Turn to the left'",
              "options": [
                  "Gira",
                  "a",
                  "la",
                  "izquierda",
                  "derecha"
              ],
              "pairs": null,
              "correct_answer": "Gira a la izquierda",
              "explanation": "Izquierda is left.",
              "order_index": 2
          },
          {
              "id": 20113,
              "lesson_id": 12,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match navigation terms",
              "question": "Match navigation terms",
              "question_text": "Match navigation terms",
              "options": [],
              "pairs": {
                  "Izquierda": "Left",
                  "Derecha": "Right",
                  "Cerca": "Near",
                  "Lejos": "Far"
              },
              "correct_answer": "[[\"Izquierda\", \"Left\"], [\"Derecha\", \"Right\"], [\"Cerca\", \"Near\"], [\"Lejos\", \"Far\"]]",
              "explanation": "Spatial directions.",
              "order_index": 3
          },
          {
              "id": 20114,
              "lesson_id": 12,
              "exercise_type": "FILL_BLANK",
              "prompt": "El museo está ___ (near).",
              "question": "El museo está ___ (near).",
              "question_text": "El museo está ___ (near).",
              "options": [
                  "cerca",
                  "lejos",
                  "aquí"
              ],
              "pairs": null,
              "correct_answer": "cerca",
              "explanation": "'Cerca' = near.",
              "order_index": 4
          },
          {
              "id": 20115,
              "lesson_id": 12,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Left' to Spanish:",
              "question": "Translate 'Left' to Spanish:",
              "question_text": "Translate 'Left' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Izquierda",
              "explanation": "'Izquierda' = left.",
              "order_index": 5
          }
      ]
  },

  13: {
      "id": 13,
      "title": "Telling Time",
      "xp_reward": 15,
      "skill_title": "Time & Schedule",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20116,
              "lesson_id": 13,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does '¿Qué hora es?' ask?",
              "question": "What does '¿Qué hora es?' ask?",
              "question_text": "What does '¿Qué hora es?' ask?",
              "options": [
                  "What time is it?",
                  "What day is today?",
                  "Where are you going?",
                  "Who are you?"
              ],
              "pairs": null,
              "correct_answer": "What time is it?",
              "explanation": "Essential time inquiry.",
              "order_index": 1
          },
          {
              "id": 20117,
              "lesson_id": 13,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'It is two o'clock'",
              "question": "Translate: 'It is two o'clock'",
              "question_text": "Translate: 'It is two o'clock'",
              "options": [
                  "Son",
                  "las",
                  "dos",
                  "es",
                  "la",
                  "una"
              ],
              "pairs": null,
              "correct_answer": "Son las dos",
              "explanation": "For hours other than 1: 'Son las...'",
              "order_index": 2
          },
          {
              "id": 20118,
              "lesson_id": 13,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match time words",
              "question": "Match time words",
              "question_text": "Match time words",
              "options": [],
              "pairs": {
                  "Hora": "Hour / Time",
                  "Minuto": "Minute",
                  "Hoy": "Today",
                  "Mañana": "Tomorrow"
              },
              "correct_answer": "[[\"Hora\", \"Hour / Time\"], [\"Minuto\", \"Minute\"], [\"Hoy\", \"Today\"], [\"Ma\\u00f1ana\", \"Tomorrow\"]]",
              "explanation": "Time concepts.",
              "order_index": 3
          },
          {
              "id": 20119,
              "lesson_id": 13,
              "exercise_type": "FILL_BLANK",
              "prompt": "Es la ___ (one o'clock).",
              "question": "Es la ___ (one o'clock).",
              "question_text": "Es la ___ (one o'clock).",
              "options": [
                  "una",
                  "dos",
                  "tres"
              ],
              "pairs": null,
              "correct_answer": "una",
              "explanation": "'Es la una' is singular.",
              "order_index": 4
          },
          {
              "id": 20120,
              "lesson_id": 13,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Today' to Spanish:",
              "question": "Translate 'Today' to Spanish:",
              "question_text": "Translate 'Today' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Hoy",
              "explanation": "'Hoy' = today.",
              "order_index": 5
          }
      ]
  },

  14: {
      "id": 14,
      "title": "Days of the Week",
      "xp_reward": 15,
      "skill_title": "Time & Schedule",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20121,
              "lesson_id": 14,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "Which day is 'Lunes'?",
              "question": "Which day is 'Lunes'?",
              "question_text": "Which day is 'Lunes'?",
              "options": [
                  "Monday",
                  "Friday",
                  "Sunday",
                  "Wednesday"
              ],
              "pairs": null,
              "correct_answer": "Monday",
              "explanation": "Lunes is the start of the week: Monday.",
              "order_index": 1
          },
          {
              "id": 20122,
              "lesson_id": 14,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Today is Friday'",
              "question": "Translate: 'Today is Friday'",
              "question_text": "Translate: 'Today is Friday'",
              "options": [
                  "Hoy",
                  "es",
                  "viernes",
                  "sábado",
                  "domingo"
              ],
              "pairs": null,
              "correct_answer": "Hoy es viernes",
              "explanation": "Friday feeling.",
              "order_index": 2
          },
          {
              "id": 20123,
              "lesson_id": 14,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match days",
              "question": "Match days",
              "question_text": "Match days",
              "options": [],
              "pairs": {
                  "Lunes": "Monday",
                  "Martes": "Tuesday",
                  "Viernes": "Friday",
                  "Domingo": "Sunday"
              },
              "correct_answer": "[[\"Lunes\", \"Monday\"], [\"Martes\", \"Tuesday\"], [\"Viernes\", \"Friday\"], [\"Domingo\", \"Sunday\"]]",
              "explanation": "Weekdays and weekends.",
              "order_index": 3
          },
          {
              "id": 20124,
              "lesson_id": 14,
              "exercise_type": "FILL_BLANK",
              "prompt": "Mañana es ___ (Saturday).",
              "question": "Mañana es ___ (Saturday).",
              "question_text": "Mañana es ___ (Saturday).",
              "options": [
                  "sábado",
                  "domingo",
                  "lunes"
              ],
              "pairs": null,
              "correct_answer": "sábado",
              "explanation": "Sábado = Saturday.",
              "order_index": 4
          },
          {
              "id": 20125,
              "lesson_id": 14,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type Spanish for 'Monday':",
              "question": "Type Spanish for 'Monday':",
              "question_text": "Type Spanish for 'Monday':",
              "options": [],
              "pairs": null,
              "correct_answer": "Lunes",
              "explanation": "'Lunes' = Monday.",
              "order_index": 5
          }
      ]
  },

  15: {
      "id": 15,
      "title": "Rooms & House",
      "xp_reward": 15,
      "skill_title": "At Home",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20126,
              "lesson_id": 15,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'La cocina'?",
              "question": "What is 'La cocina'?",
              "question_text": "What is 'La cocina'?",
              "options": [
                  "The kitchen",
                  "The bedroom",
                  "The bathroom",
                  "The garden"
              ],
              "pairs": null,
              "correct_answer": "The kitchen",
              "explanation": "Cocina = kitchen.",
              "order_index": 1
          },
          {
              "id": 20127,
              "lesson_id": 15,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'My new house'",
              "question": "Translate: 'My new house'",
              "question_text": "Translate: 'My new house'",
              "options": [
                  "Mi",
                  "casa",
                  "nueva",
                  "vieja",
                  "carro"
              ],
              "pairs": null,
              "correct_answer": "Mi casa nueva",
              "explanation": "Describing a house.",
              "order_index": 2
          },
          {
              "id": 20128,
              "lesson_id": 15,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match home rooms",
              "question": "Match home rooms",
              "question_text": "Match home rooms",
              "options": [],
              "pairs": {
                  "Casa": "House",
                  "Cocina": "Kitchen",
                  "Baño": "Bathroom",
                  "Cuarto": "Room"
              },
              "correct_answer": "[[\"Casa\", \"House\"], [\"Cocina\", \"Kitchen\"], [\"Ba\\u00f1o\", \"Bathroom\"], [\"Cuarto\", \"Room\"]]",
              "explanation": "Parts of the house.",
              "order_index": 3
          },
          {
              "id": 20129,
              "lesson_id": 15,
              "exercise_type": "FILL_BLANK",
              "prompt": "El libro está en la ___ (table).",
              "question": "El libro está en la ___ (table).",
              "question_text": "El libro está en la ___ (table).",
              "options": [
                  "mesa",
                  "puerta",
                  "ventana"
              ],
              "pairs": null,
              "correct_answer": "mesa",
              "explanation": "Mesa = table.",
              "order_index": 4
          },
          {
              "id": 20130,
              "lesson_id": 15,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'House' to Spanish:",
              "question": "Translate 'House' to Spanish:",
              "question_text": "Translate 'House' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Casa",
              "explanation": "Casa = house.",
              "order_index": 5
          }
      ]
  },

  16: {
      "id": 16,
      "title": "Objects & Furniture",
      "xp_reward": 15,
      "skill_title": "At Home",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20131,
              "lesson_id": 16,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Cama' mean?",
              "question": "What does 'Cama' mean?",
              "question_text": "What does 'Cama' mean?",
              "options": [
                  "Bed",
                  "Chair",
                  "Door",
                  "Window"
              ],
              "pairs": null,
              "correct_answer": "Bed",
              "explanation": "Cama = bed.",
              "order_index": 1
          },
          {
              "id": 20132,
              "lesson_id": 16,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'The red door'",
              "question": "Translate: 'The red door'",
              "question_text": "Translate: 'The red door'",
              "options": [
                  "La",
                  "puerta",
                  "roja",
                  "el",
                  "azul"
              ],
              "pairs": null,
              "correct_answer": "La puerta roja",
              "explanation": "Noun-adjective gender agreement.",
              "order_index": 2
          },
          {
              "id": 20133,
              "lesson_id": 16,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match home items",
              "question": "Match home items",
              "question_text": "Match home items",
              "options": [],
              "pairs": {
                  "Cama": "Bed",
                  "Silla": "Chair",
                  "Puerta": "Door",
                  "Ventana": "Window"
              },
              "correct_answer": "[[\"Cama\", \"Bed\"], [\"Silla\", \"Chair\"], [\"Puerta\", \"Door\"], [\"Ventana\", \"Window\"]]",
              "explanation": "Furniture items.",
              "order_index": 3
          },
          {
              "id": 20134,
              "lesson_id": 16,
              "exercise_type": "FILL_BLANK",
              "prompt": "Abro la ___ (window).",
              "question": "Abro la ___ (window).",
              "question_text": "Abro la ___ (window).",
              "options": [
                  "ventana",
                  "cama",
                  "mesa"
              ],
              "pairs": null,
              "correct_answer": "ventana",
              "explanation": "Ventana = window.",
              "order_index": 4
          },
          {
              "id": 20135,
              "lesson_id": 16,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Chair' to Spanish:",
              "question": "Translate 'Chair' to Spanish:",
              "question_text": "Translate 'Chair' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Silla",
              "explanation": "Silla = chair.",
              "order_index": 5
          }
      ]
  },

  17: {
      "id": 17,
      "title": "Clothing Basics",
      "xp_reward": 15,
      "skill_title": "Shopping & Clothes",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20136,
              "lesson_id": 17,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'La camisa'?",
              "question": "What is 'La camisa'?",
              "question_text": "What is 'La camisa'?",
              "options": [
                  "Shirt",
                  "Shoes",
                  "Pants",
                  "Hat"
              ],
              "pairs": null,
              "correct_answer": "Shirt",
              "explanation": "Camisa = shirt.",
              "order_index": 1
          },
          {
              "id": 20137,
              "lesson_id": 17,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'A blue jacket'",
              "question": "Translate: 'A blue jacket'",
              "question_text": "Translate: 'A blue jacket'",
              "options": [
                  "Una",
                  "chaqueta",
                  "azul",
                  "un",
                  "rojo"
              ],
              "pairs": null,
              "correct_answer": "Una chaqueta azul",
              "explanation": "Color follows noun in Spanish.",
              "order_index": 2
          },
          {
              "id": 20138,
              "lesson_id": 17,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match clothing items",
              "question": "Match clothing items",
              "question_text": "Match clothing items",
              "options": [],
              "pairs": {
                  "Camisa": "Shirt",
                  "Pantalones": "Pants",
                  "Zapatos": "Shoes",
                  "Sombrero": "Hat"
              },
              "correct_answer": "[[\"Camisa\", \"Shirt\"], [\"Pantalones\", \"Pants\"], [\"Zapatos\", \"Shoes\"], [\"Sombrero\", \"Hat\"]]",
              "explanation": "Wardrobe items.",
              "order_index": 3
          },
          {
              "id": 20139,
              "lesson_id": 17,
              "exercise_type": "FILL_BLANK",
              "prompt": "Compro unos ___ (shoes).",
              "question": "Compro unos ___ (shoes).",
              "question_text": "Compro unos ___ (shoes).",
              "options": [
                  "zapatos",
                  "camisa",
                  "falda"
              ],
              "pairs": null,
              "correct_answer": "zapatos",
              "explanation": "Zapatos = shoes.",
              "order_index": 4
          },
          {
              "id": 20140,
              "lesson_id": 17,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Type Spanish for 'Shirt':",
              "question": "Type Spanish for 'Shirt':",
              "question_text": "Type Spanish for 'Shirt':",
              "options": [],
              "pairs": null,
              "correct_answer": "Camisa",
              "explanation": "Camisa = shirt.",
              "order_index": 5
          }
      ]
  },

  18: {
      "id": 18,
      "title": "Prices & Sizes",
      "xp_reward": 15,
      "skill_title": "Shopping & Clothes",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20141,
              "lesson_id": 18,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does '¿Cuánto cuesta?' ask?",
              "question": "What does '¿Cuánto cuesta?' ask?",
              "question_text": "What does '¿Cuánto cuesta?' ask?",
              "options": [
                  "How much does it cost?",
                  "What size is it?",
                  "Can I wear this?",
                  "Where is the cashier?"
              ],
              "pairs": null,
              "correct_answer": "How much does it cost?",
              "explanation": "Asking prices in stores.",
              "order_index": 1
          },
          {
              "id": 20142,
              "lesson_id": 18,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'It is very expensive'",
              "question": "Translate: 'It is very expensive'",
              "question_text": "Translate: 'It is very expensive'",
              "options": [
                  "Es",
                  "muy",
                  "caro",
                  "barato",
                  "bonito"
              ],
              "pairs": null,
              "correct_answer": "Es muy caro",
              "explanation": "Caro = expensive.",
              "order_index": 2
          },
          {
              "id": 20143,
              "lesson_id": 18,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match shopping terms",
              "question": "Match shopping terms",
              "question_text": "Match shopping terms",
              "options": [],
              "pairs": {
                  "Caro": "Expensive",
                  "Barato": "Cheap",
                  "Grande": "Large",
                  "Pequeño": "Small"
              },
              "correct_answer": "[[\"Caro\", \"Expensive\"], [\"Barato\", \"Cheap\"], [\"Grande\", \"Large\"], [\"Peque\\u00f1o\", \"Small\"]]",
              "explanation": "Shopping adjectives.",
              "order_index": 3
          },
          {
              "id": 20144,
              "lesson_id": 18,
              "exercise_type": "FILL_BLANK",
              "prompt": "Esta falda es muy ___ (cheap).",
              "question": "Esta falda es muy ___ (cheap).",
              "question_text": "Esta falda es muy ___ (cheap).",
              "options": [
                  "barata",
                  "barato",
                  "grande"
              ],
              "pairs": null,
              "correct_answer": "barata",
              "explanation": "Matches feminine falda.",
              "order_index": 4
          },
          {
              "id": 20145,
              "lesson_id": 18,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Expensive' (masculine) to Spanish:",
              "question": "Translate 'Expensive' (masculine) to Spanish:",
              "question_text": "Translate 'Expensive' (masculine) to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Caro",
              "explanation": "Caro = expensive.",
              "order_index": 5
          }
      ]
  },

  19: {
      "id": 19,
      "title": "Emotions",
      "xp_reward": 15,
      "skill_title": "Feelings & Health",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20146,
              "lesson_id": 19,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Estoy feliz' mean?",
              "question": "What does 'Estoy feliz' mean?",
              "question_text": "What does 'Estoy feliz' mean?",
              "options": [
                  "I am happy",
                  "I am tired",
                  "I am sick",
                  "I am busy"
              ],
              "pairs": null,
              "correct_answer": "I am happy",
              "explanation": "Feliz = happy.",
              "order_index": 1
          },
          {
              "id": 20147,
              "lesson_id": 19,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I am tired'",
              "question": "Translate: 'I am tired'",
              "question_text": "Translate: 'I am tired'",
              "options": [
                  "Estoy",
                  "cansado",
                  "feliz",
                  "enfermo",
                  "yo"
              ],
              "pairs": null,
              "correct_answer": "Estoy cansado",
              "explanation": "Estar used for temporary emotional states.",
              "order_index": 2
          },
          {
              "id": 20148,
              "lesson_id": 19,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match emotions",
              "question": "Match emotions",
              "question_text": "Match emotions",
              "options": [],
              "pairs": {
                  "Feliz": "Happy",
                  "Triste": "Sad",
                  "Cansado": "Tired",
                  "Enojado": "Angry"
              },
              "correct_answer": "[[\"Feliz\", \"Happy\"], [\"Triste\", \"Sad\"], [\"Cansado\", \"Tired\"], [\"Enojado\", \"Angry\"]]",
              "explanation": "Feelings in Spanish.",
              "order_index": 3
          },
          {
              "id": 20149,
              "lesson_id": 19,
              "exercise_type": "FILL_BLANK",
              "prompt": "Ella está muy ___ (happy).",
              "question": "Ella está muy ___ (happy).",
              "question_text": "Ella está muy ___ (happy).",
              "options": [
                  "contenta",
                  "contento",
                  "tristes"
              ],
              "pairs": null,
              "correct_answer": "contenta",
              "explanation": "Contenta = glad/happy.",
              "order_index": 4
          },
          {
              "id": 20150,
              "lesson_id": 19,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Sad' to Spanish:",
              "question": "Translate 'Sad' to Spanish:",
              "question_text": "Translate 'Sad' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Triste",
              "explanation": "Triste = sad.",
              "order_index": 5
          }
      ]
  },

  20: {
      "id": 20,
      "title": "At the Doctor",
      "xp_reward": 15,
      "skill_title": "Feelings & Health",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20151,
              "lesson_id": 20,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Me duele la cabeza' mean?",
              "question": "What does 'Me duele la cabeza' mean?",
              "question_text": "What does 'Me duele la cabeza' mean?",
              "options": [
                  "My head hurts",
                  "My stomach hurts",
                  "I have a fever",
                  "I am hungry"
              ],
              "pairs": null,
              "correct_answer": "My head hurts",
              "explanation": "Cabeza = head.",
              "order_index": 1
          },
          {
              "id": 20152,
              "lesson_id": 20,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I need a doctor'",
              "question": "Translate: 'I need a doctor'",
              "question_text": "Translate: 'I need a doctor'",
              "options": [
                  "Necesito",
                  "un",
                  "médico",
                  "hospital",
                  "cura"
              ],
              "pairs": null,
              "correct_answer": "Necesito un médico",
              "explanation": "Medical assistance.",
              "order_index": 2
          },
          {
              "id": 20153,
              "lesson_id": 20,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match health words",
              "question": "Match health words",
              "question_text": "Match health words",
              "options": [],
              "pairs": {
                  "Médico": "Doctor",
                  "Hospital": "Hospital",
                  "Medicina": "Medicine",
                  "Dolor": "Pain"
              },
              "correct_answer": "[[\"M\\u00e9dico\", \"Doctor\"], [\"Hospital\", \"Hospital\"], [\"Medicina\", \"Medicine\"], [\"Dolor\", \"Pain\"]]",
              "explanation": "Health terms.",
              "order_index": 3
          },
          {
              "id": 20154,
              "lesson_id": 20,
              "exercise_type": "FILL_BLANK",
              "prompt": "¿Dónde está la ___? (pharmacy)",
              "question": "¿Dónde está la ___? (pharmacy)",
              "question_text": "¿Dónde está la ___? (pharmacy)",
              "options": [
                  "farmacia",
                  "médico",
                  "dolor"
              ],
              "pairs": null,
              "correct_answer": "farmacia",
              "explanation": "Farmacia = pharmacy.",
              "order_index": 4
          },
          {
              "id": 20155,
              "lesson_id": 20,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Doctor' to Spanish:",
              "question": "Translate 'Doctor' to Spanish:",
              "question_text": "Translate 'Doctor' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Médico",
              "explanation": "Médico = doctor.",
              "order_index": 5
          }
      ]
  },

  21: {
      "id": 21,
      "title": "Boarding the Flight",
      "xp_reward": 15,
      "skill_title": "Travel & Airport",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20156,
              "lesson_id": 21,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'El pasaporte'?",
              "question": "What is 'El pasaporte'?",
              "question_text": "What is 'El pasaporte'?",
              "options": [
                  "Passport",
                  "Ticket",
                  "Suitcase",
                  "Flight"
              ],
              "pairs": null,
              "correct_answer": "Passport",
              "explanation": "Pasaporte = passport.",
              "order_index": 1
          },
          {
              "id": 20157,
              "lesson_id": 21,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Here is my ticket'",
              "question": "Translate: 'Here is my ticket'",
              "question_text": "Translate: 'Here is my ticket'",
              "options": [
                  "Aquí",
                  "está",
                  "mi",
                  "boleto",
                  "el",
                  "avión"
              ],
              "pairs": null,
              "correct_answer": "Aquí está mi boleto",
              "explanation": "Boleto = ticket.",
              "order_index": 2
          },
          {
              "id": 20158,
              "lesson_id": 21,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match travel terms",
              "question": "Match travel terms",
              "question_text": "Match travel terms",
              "options": [],
              "pairs": {
                  "Avión": "Airplane",
                  "Boleto": "Ticket",
                  "Maleta": "Suitcase",
                  "Aeropuerto": "Airport"
              },
              "correct_answer": "[[\"Avi\\u00f3n\", \"Airplane\"], [\"Boleto\", \"Ticket\"], [\"Maleta\", \"Suitcase\"], [\"Aeropuerto\", \"Airport\"]]",
              "explanation": "Airport necessities.",
              "order_index": 3
          },
          {
              "id": 20159,
              "lesson_id": 21,
              "exercise_type": "FILL_BLANK",
              "prompt": "Tengo una ___ grande. (suitcase)",
              "question": "Tengo una ___ grande. (suitcase)",
              "question_text": "Tengo una ___ grande. (suitcase)",
              "options": [
                  "maleta",
                  "avión",
                  "boleto"
              ],
              "pairs": null,
              "correct_answer": "maleta",
              "explanation": "Maleta is feminine.",
              "order_index": 4
          },
          {
              "id": 20160,
              "lesson_id": 21,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Airport' to Spanish:",
              "question": "Translate 'Airport' to Spanish:",
              "question_text": "Translate 'Airport' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Aeropuerto",
              "explanation": "Aeropuerto = airport.",
              "order_index": 5
          }
      ]
  },

  22: {
      "id": 22,
      "title": "Arrival & Customs",
      "xp_reward": 15,
      "skill_title": "Travel & Airport",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20161,
              "lesson_id": 22,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Viaje' mean?",
              "question": "What does 'Viaje' mean?",
              "question_text": "What does 'Viaje' mean?",
              "options": [
                  "Trip / Journey",
                  "Ticket",
                  "Flight",
                  "Hotel"
              ],
              "pairs": null,
              "correct_answer": "Trip / Journey",
              "explanation": "Buen viaje = have a good trip.",
              "order_index": 1
          },
          {
              "id": 20162,
              "lesson_id": 22,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Have a good trip!'",
              "question": "Translate: 'Have a good trip!'",
              "question_text": "Translate: 'Have a good trip!'",
              "options": [
                  "¡Buen",
                  "viaje!",
                  "feliz",
                  "día"
              ],
              "pairs": null,
              "correct_answer": "¡Buen viaje!",
              "explanation": "Classic wish for travellers.",
              "order_index": 2
          },
          {
              "id": 20163,
              "lesson_id": 22,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match journey vocabulary",
              "question": "Match journey vocabulary",
              "question_text": "Match journey vocabulary",
              "options": [],
              "pairs": {
                  "Viaje": "Trip",
                  "Llegada": "Arrival",
                  "Salida": "Departure",
                  "Vuelo": "Flight"
              },
              "correct_answer": "[[\"Viaje\", \"Trip\"], [\"Llegada\", \"Arrival\"], [\"Salida\", \"Departure\"], [\"Vuelo\", \"Flight\"]]",
              "explanation": "Flight schedule terms.",
              "order_index": 3
          },
          {
              "id": 20164,
              "lesson_id": 22,
              "exercise_type": "FILL_BLANK",
              "prompt": "El ___ sale a las cinco. (flight)",
              "question": "El ___ sale a las cinco. (flight)",
              "question_text": "El ___ sale a las cinco. (flight)",
              "options": [
                  "vuelo",
                  "maleta",
                  "salida"
              ],
              "pairs": null,
              "correct_answer": "vuelo",
              "explanation": "Vuelo = flight.",
              "order_index": 4
          },
          {
              "id": 20165,
              "lesson_id": 22,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Trip' to Spanish:",
              "question": "Translate 'Trip' to Spanish:",
              "question_text": "Translate 'Trip' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Viaje",
              "explanation": "Viaje = trip.",
              "order_index": 5
          }
      ]
  },

  23: {
      "id": 23,
      "title": "Playing Sports",
      "xp_reward": 15,
      "skill_title": "Hobbies & Sports",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20166,
              "lesson_id": 23,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'Fútbol'?",
              "question": "What is 'Fútbol'?",
              "question_text": "What is 'Fútbol'?",
              "options": [
                  "Soccer / Football",
                  "Basketball",
                  "Tennis",
                  "Baseball"
              ],
              "pairs": null,
              "correct_answer": "Soccer / Football",
              "explanation": "Fútbol is the beloved sport.",
              "order_index": 1
          },
          {
              "id": 20167,
              "lesson_id": 23,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I play football with friends'",
              "question": "Translate: 'I play football with friends'",
              "question_text": "Translate: 'I play football with friends'",
              "options": [
                  "Juego",
                  "al",
                  "fútbol",
                  "con",
                  "amigos",
                  "la"
              ],
              "pairs": null,
              "correct_answer": "Juego al fútbol con amigos",
              "explanation": "Jugar al fútbol.",
              "order_index": 2
          },
          {
              "id": 20168,
              "lesson_id": 23,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match sports",
              "question": "Match sports",
              "question_text": "Match sports",
              "options": [],
              "pairs": {
                  "Fútbol": "Soccer",
                  "Baloncesto": "Basketball",
                  "Pelota": "Ball",
                  "Equipo": "Team"
              },
              "correct_answer": "[[\"F\\u00fatbol\", \"Soccer\"], [\"Baloncesto\", \"Basketball\"], [\"Pelota\", \"Ball\"], [\"Equipo\", \"Team\"]]",
              "explanation": "Sports vocabulary.",
              "order_index": 3
          },
          {
              "id": 20169,
              "lesson_id": 23,
              "exercise_type": "FILL_BLANK",
              "prompt": "Me gusta la ___ (music).",
              "question": "Me gusta la ___ (music).",
              "question_text": "Me gusta la ___ (music).",
              "options": [
                  "música",
                  "fútbol",
                  "equipo"
              ],
              "pairs": null,
              "correct_answer": "música",
              "explanation": "Música = music.",
              "order_index": 4
          },
          {
              "id": 20170,
              "lesson_id": 23,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Soccer' to Spanish:",
              "question": "Translate 'Soccer' to Spanish:",
              "question_text": "Translate 'Soccer' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Fútbol",
              "explanation": "Fútbol = soccer.",
              "order_index": 5
          }
      ]
  },

  24: {
      "id": 24,
      "title": "Arts & Free Time",
      "xp_reward": 15,
      "skill_title": "Hobbies & Sports",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20171,
              "lesson_id": 24,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'Película'?",
              "question": "What is 'Película'?",
              "question_text": "What is 'Película'?",
              "options": [
                  "Movie",
                  "Book",
                  "Song",
                  "Game"
              ],
              "pairs": null,
              "correct_answer": "Movie",
              "explanation": "Película = movie/film.",
              "order_index": 1
          },
          {
              "id": 20172,
              "lesson_id": 24,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I want to watch a movie'",
              "question": "Translate: 'I want to watch a movie'",
              "question_text": "Translate: 'I want to watch a movie'",
              "options": [
                  "Quiero",
                  "ver",
                  "una",
                  "película",
                  "libro",
                  "un"
              ],
              "pairs": null,
              "correct_answer": "Quiero ver una película",
              "explanation": "Ver una película.",
              "order_index": 2
          },
          {
              "id": 20173,
              "lesson_id": 24,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match pastimes",
              "question": "Match pastimes",
              "question_text": "Match pastimes",
              "options": [],
              "pairs": {
                  "Cine": "Cinema",
                  "Película": "Movie",
                  "Libro": "Book",
                  "Canción": "Song"
              },
              "correct_answer": "[[\"Cine\", \"Cinema\"], [\"Pel\\u00edcula\", \"Movie\"], [\"Libro\", \"Book\"], [\"Canci\\u00f3n\", \"Song\"]]",
              "explanation": "Leisure entertainment.",
              "order_index": 3
          },
          {
              "id": 20174,
              "lesson_id": 24,
              "exercise_type": "FILL_BLANK",
              "prompt": "Leo un ___ interesante. (book)",
              "question": "Leo un ___ interesante. (book)",
              "question_text": "Leo un ___ interesante. (book)",
              "options": [
                  "libro",
                  "cine",
                  "canción"
              ],
              "pairs": null,
              "correct_answer": "libro",
              "explanation": "Libro = book.",
              "order_index": 4
          },
          {
              "id": 20175,
              "lesson_id": 24,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Book' to Spanish:",
              "question": "Translate 'Book' to Spanish:",
              "question_text": "Translate 'Book' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Libro",
              "explanation": "Libro = book.",
              "order_index": 5
          }
      ]
  },

  25: {
      "id": 25,
      "title": "The Forecast",
      "xp_reward": 15,
      "skill_title": "Weather & Seasons",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20176,
              "lesson_id": 25,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Hace sol' mean?",
              "question": "What does 'Hace sol' mean?",
              "question_text": "What does 'Hace sol' mean?",
              "options": [
                  "It is sunny",
                  "It is cold",
                  "It is raining",
                  "It is windy"
              ],
              "pairs": null,
              "correct_answer": "It is sunny",
              "explanation": "Hace sol = It is sunny.",
              "order_index": 1
          },
          {
              "id": 20177,
              "lesson_id": 25,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'It is very cold today'",
              "question": "Translate: 'It is very cold today'",
              "question_text": "Translate: 'It is very cold today'",
              "options": [
                  "Hoy",
                  "hace",
                  "mucho",
                  "frío",
                  "calor",
                  "sol"
              ],
              "pairs": null,
              "correct_answer": "Hoy hace mucho frío",
              "explanation": "Hacer frío.",
              "order_index": 2
          },
          {
              "id": 20178,
              "lesson_id": 25,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match weather states",
              "question": "Match weather states",
              "question_text": "Match weather states",
              "options": [],
              "pairs": {
                  "Calor": "Heat / Warm",
                  "Frío": "Cold",
                  "Lluvia": "Rain",
                  "Sol": "Sun"
              },
              "correct_answer": "[[\"Calor\", \"Heat / Warm\"], [\"Fr\\u00edo\", \"Cold\"], [\"Lluvia\", \"Rain\"], [\"Sol\", \"Sun\"]]",
              "explanation": "Weather terms.",
              "order_index": 3
          },
          {
              "id": 20179,
              "lesson_id": 25,
              "exercise_type": "FILL_BLANK",
              "prompt": "Hoy hace mucho ___ (heat).",
              "question": "Hoy hace mucho ___ (heat).",
              "question_text": "Hoy hace mucho ___ (heat).",
              "options": [
                  "calor",
                  "fríos",
                  "soles"
              ],
              "pairs": null,
              "correct_answer": "calor",
              "explanation": "Hace calor = it's hot.",
              "order_index": 4
          },
          {
              "id": 20180,
              "lesson_id": 25,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Sun' to Spanish:",
              "question": "Translate 'Sun' to Spanish:",
              "question_text": "Translate 'Sun' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Sol",
              "explanation": "Sol = sun.",
              "order_index": 5
          }
      ]
  },

  26: {
      "id": 26,
      "title": "The 4 Seasons",
      "xp_reward": 15,
      "skill_title": "Weather & Seasons",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20181,
              "lesson_id": 26,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "Which season is 'El verano'?",
              "question": "Which season is 'El verano'?",
              "question_text": "Which season is 'El verano'?",
              "options": [
                  "Summer",
                  "Winter",
                  "Spring",
                  "Autumn"
              ],
              "pairs": null,
              "correct_answer": "Summer",
              "explanation": "Verano = summer.",
              "order_index": 1
          },
          {
              "id": 20182,
              "lesson_id": 26,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'I love the summer'",
              "question": "Translate: 'I love the summer'",
              "question_text": "Translate: 'I love the summer'",
              "options": [
                  "Me",
                  "encanta",
                  "el",
                  "verano",
                  "invierno"
              ],
              "pairs": null,
              "correct_answer": "Me encanta el verano",
              "explanation": "Me encanta el verano.",
              "order_index": 2
          },
          {
              "id": 20183,
              "lesson_id": 26,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match seasons",
              "question": "Match seasons",
              "question_text": "Match seasons",
              "options": [],
              "pairs": {
                  "Verano": "Summer",
                  "Invierno": "Winter",
                  "Primavera": "Spring",
                  "Otoño": "Autumn"
              },
              "correct_answer": "[[\"Verano\", \"Summer\"], [\"Invierno\", \"Winter\"], [\"Primavera\", \"Spring\"], [\"Oto\\u00f1o\", \"Autumn\"]]",
              "explanation": "Four seasons.",
              "order_index": 3
          },
          {
              "id": 20184,
              "lesson_id": 26,
              "exercise_type": "FILL_BLANK",
              "prompt": "La ___ trae flores. (spring)",
              "question": "La ___ trae flores. (spring)",
              "question_text": "La ___ trae flores. (spring)",
              "options": [
                  "primavera",
                  "invierno",
                  "otoño"
              ],
              "pairs": null,
              "correct_answer": "primavera",
              "explanation": "Primavera = spring.",
              "order_index": 4
          },
          {
              "id": 20185,
              "lesson_id": 26,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Summer' to Spanish:",
              "question": "Translate 'Summer' to Spanish:",
              "question_text": "Translate 'Summer' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Verano",
              "explanation": "Verano = summer.",
              "order_index": 5
          }
      ]
  },

  27: {
      "id": 27,
      "title": "Wild Animals",
      "xp_reward": 15,
      "skill_title": "Nature & Animals",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20186,
              "lesson_id": 27,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'El pájaro'?",
              "question": "What is 'El pájaro'?",
              "question_text": "What is 'El pájaro'?",
              "options": [
                  "The bird",
                  "The horse",
                  "The fish",
                  "The lion"
              ],
              "pairs": null,
              "correct_answer": "The bird",
              "explanation": "Pájaro = bird (like Duo!).",
              "order_index": 1
          },
          {
              "id": 20187,
              "lesson_id": 27,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'The green bird sings'",
              "question": "Translate: 'The green bird sings'",
              "question_text": "Translate: 'The green bird sings'",
              "options": [
                  "El",
                  "pájaro",
                  "verde",
                  "canta",
                  "un",
                  "caballo"
              ],
              "pairs": null,
              "correct_answer": "El pájaro verde canta",
              "explanation": "Our green bird mascot.",
              "order_index": 2
          },
          {
              "id": 20188,
              "lesson_id": 27,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match wildlife",
              "question": "Match wildlife",
              "question_text": "Match wildlife",
              "options": [],
              "pairs": {
                  "Pájaro": "Bird",
                  "Caballo": "Horse",
                  "Pez": "Fish",
                  "León": "Lion"
              },
              "correct_answer": "[[\"P\\u00e1jaro\", \"Bird\"], [\"Caballo\", \"Horse\"], [\"Pez\", \"Fish\"], [\"Le\\u00f3n\", \"Lion\"]]",
              "explanation": "Animals in nature.",
              "order_index": 3
          },
          {
              "id": 20189,
              "lesson_id": 27,
              "exercise_type": "FILL_BLANK",
              "prompt": "El pájaro es de color ___ (green).",
              "question": "El pájaro es de color ___ (green).",
              "question_text": "El pájaro es de color ___ (green).",
              "options": [
                  "verde",
                  "rojo",
                  "azul"
              ],
              "pairs": null,
              "correct_answer": "verde",
              "explanation": "Verde = green.",
              "order_index": 4
          },
          {
              "id": 20190,
              "lesson_id": 27,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Bird' to Spanish:",
              "question": "Translate 'Bird' to Spanish:",
              "question_text": "Translate 'Bird' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Pájaro",
              "explanation": "Pájaro = bird.",
              "order_index": 5
          }
      ]
  },

  28: {
      "id": 28,
      "title": "Landscapes",
      "xp_reward": 15,
      "skill_title": "Nature & Animals",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20191,
              "lesson_id": 28,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is 'La playa'?",
              "question": "What is 'La playa'?",
              "question_text": "What is 'La playa'?",
              "options": [
                  "The beach",
                  "The mountain",
                  "The forest",
                  "The river"
              ],
              "pairs": null,
              "correct_answer": "The beach",
              "explanation": "Playa = beach.",
              "order_index": 1
          },
          {
              "id": 20192,
              "lesson_id": 28,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'A high mountain'",
              "question": "Translate: 'A high mountain'",
              "question_text": "Translate: 'A high mountain'",
              "options": [
                  "Una",
                  "montaña",
                  "alta",
                  "playa",
                  "río"
              ],
              "pairs": null,
              "correct_answer": "Una montaña alta",
              "explanation": "Montaña alta.",
              "order_index": 2
          },
          {
              "id": 20193,
              "lesson_id": 28,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match nature elements",
              "question": "Match nature elements",
              "question_text": "Match nature elements",
              "options": [],
              "pairs": {
                  "Playa": "Beach",
                  "Montaña": "Mountain",
                  "Río": "River",
                  "Bosque": "Forest"
              },
              "correct_answer": "[[\"Playa\", \"Beach\"], [\"Monta\\u00f1a\", \"Mountain\"], [\"R\\u00edo\", \"River\"], [\"Bosque\", \"Forest\"]]",
              "explanation": "Geographical features.",
              "order_index": 3
          },
          {
              "id": 20194,
              "lesson_id": 28,
              "exercise_type": "FILL_BLANK",
              "prompt": "Nadamos en el ___ (sea).",
              "question": "Nadamos en el ___ (sea).",
              "question_text": "Nadamos en el ___ (sea).",
              "options": [
                  "mar",
                  "montaña",
                  "árbol"
              ],
              "pairs": null,
              "correct_answer": "mar",
              "explanation": "Mar = sea.",
              "order_index": 4
          },
          {
              "id": 20195,
              "lesson_id": 28,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Beach' to Spanish:",
              "question": "Translate 'Beach' to Spanish:",
              "question_text": "Translate 'Beach' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Playa",
              "explanation": "Playa = beach.",
              "order_index": 5
          }
      ]
  },

  29: {
      "id": 29,
      "title": "Birthday Wishes",
      "xp_reward": 15,
      "skill_title": "Celebrations & Fiesta",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20196,
              "lesson_id": 29,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What is '¡Feliz cumpleaños!'?",
              "question": "What is '¡Feliz cumpleaños!'?",
              "question_text": "What is '¡Feliz cumpleaños!'?",
              "options": [
                  "Happy Birthday!",
                  "Happy New Year!",
                  "Merry Christmas!",
                  "Good luck!"
              ],
              "pairs": null,
              "correct_answer": "Happy Birthday!",
              "explanation": "Universal birthday greeting.",
              "order_index": 1
          },
          {
              "id": 20197,
              "lesson_id": 29,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'A gift for you'",
              "question": "Translate: 'A gift for you'",
              "question_text": "Translate: 'A gift for you'",
              "options": [
                  "Un",
                  "regalo",
                  "para",
                  "ti",
                  "fiesta",
                  "el"
              ],
              "pairs": null,
              "correct_answer": "Un regalo para ti",
              "explanation": "Regalo = gift/present.",
              "order_index": 2
          },
          {
              "id": 20198,
              "lesson_id": 29,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match party words",
              "question": "Match party words",
              "question_text": "Match party words",
              "options": [],
              "pairs": {
                  "Fiesta": "Party",
                  "Regalo": "Gift",
                  "Pastel": "Cake",
                  "Amigos": "Friends"
              },
              "correct_answer": "[[\"Fiesta\", \"Party\"], [\"Regalo\", \"Gift\"], [\"Pastel\", \"Cake\"], [\"Amigos\", \"Friends\"]]",
              "explanation": "Celebration vocabulary.",
              "order_index": 3
          },
          {
              "id": 20199,
              "lesson_id": 29,
              "exercise_type": "FILL_BLANK",
              "prompt": "Comemos el ___ de cumpleaños. (cake)",
              "question": "Comemos el ___ de cumpleaños. (cake)",
              "question_text": "Comemos el ___ de cumpleaños. (cake)",
              "options": [
                  "pastel",
                  "regalo",
                  "canción"
              ],
              "pairs": null,
              "correct_answer": "pastel",
              "explanation": "Pastel = cake.",
              "order_index": 4
          },
          {
              "id": 20200,
              "lesson_id": 29,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'Party' to Spanish:",
              "question": "Translate 'Party' to Spanish:",
              "question_text": "Translate 'Party' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Fiesta",
              "explanation": "Fiesta = party.",
              "order_index": 5
          }
      ]
  },

  30: {
      "id": 30,
      "title": "Traditions & Music",
      "xp_reward": 15,
      "skill_title": "Celebrations & Fiesta",
      "user_hearts": 5,
      "exercises": [
          {
              "id": 20201,
              "lesson_id": 30,
              "exercise_type": "MULTIPLE_CHOICE",
              "prompt": "What does 'Bailar' mean?",
              "question": "What does 'Bailar' mean?",
              "question_text": "What does 'Bailar' mean?",
              "options": [
                  "To dance",
                  "To sing",
                  "To drink",
                  "To play"
              ],
              "pairs": null,
              "correct_answer": "To dance",
              "explanation": "Bailar = to dance.",
              "order_index": 1
          },
          {
              "id": 20202,
              "lesson_id": 30,
              "exercise_type": "WORD_BANK",
              "prompt": "Translate: 'Everyone dances at the party'",
              "question": "Translate: 'Everyone dances at the party'",
              "question_text": "Translate: 'Everyone dances at the party'",
              "options": [
                  "Todos",
                  "bailan",
                  "en",
                  "la",
                  "fiesta",
                  "cantan"
              ],
              "pairs": null,
              "correct_answer": "Todos bailan en la fiesta",
              "explanation": "Fiesta excitement.",
              "order_index": 2
          },
          {
              "id": 20203,
              "lesson_id": 30,
              "exercise_type": "MATCH_PAIRS",
              "prompt": "Match festival actions",
              "question": "Match festival actions",
              "question_text": "Match festival actions",
              "options": [],
              "pairs": {
                  "Bailar": "To dance",
                  "Cantar": "To sing",
                  "Celebrar": "To celebrate",
                  "Sonreír": "To smile"
              },
              "correct_answer": "[[\"Bailar\", \"To dance\"], [\"Cantar\", \"To sing\"], [\"Celebrar\", \"To celebrate\"], [\"Sonre\\u00edr\", \"To smile\"]]",
              "explanation": "Celebratory verbs.",
              "order_index": 3
          },
          {
              "id": 20204,
              "lesson_id": 30,
              "exercise_type": "FILL_BLANK",
              "prompt": "Nos gusta ___ en la fiesta. (to sing)",
              "question": "Nos gusta ___ en la fiesta. (to sing)",
              "question_text": "Nos gusta ___ en la fiesta. (to sing)",
              "options": [
                  "cantar",
                  "bailo",
                  "regalos"
              ],
              "pairs": null,
              "correct_answer": "cantar",
              "explanation": "Cantar = to sing.",
              "order_index": 4
          },
          {
              "id": 20205,
              "lesson_id": 30,
              "exercise_type": "TYPE_ANSWER",
              "prompt": "Translate 'To dance' to Spanish:",
              "question": "Translate 'To dance' to Spanish:",
              "question_text": "Translate 'To dance' to Spanish:",
              "options": [],
              "pairs": null,
              "correct_answer": "Bailar",
              "explanation": "Bailar = to dance.",
              "order_index": 5
          }
      ]
  },
  // Hindi Lesson 2001
  2001: {
    id: 2001,
    title: 'Hindi Greetings (नमस्ते)',
    xp_reward: 15,
    skill_title: 'Hindi Namaste',
    user_hearts: 5,
    exercises: [
      {
        id: 20001,
        lesson_id: 2001,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What does 'Namaste' (नमस्ते) mean?",
        question: "What does 'Namaste' (नमस्ते) mean?",
        question_text: "Namaste नमस्ते",
        options: ['Hello / Greetings', 'Goodbye', 'Water', 'Food'],
        correct_answer: 'Hello / Greetings',
        explanation: "'Namaste' is the traditional respectful Indian greeting for hello.",
        order_index: 1,
      },
      {
        id: 20002,
        lesson_id: 2001,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Good morning'",
        question: "Translate: 'Good morning'",
        question_text: "Good morning",
        options: ['Shubh', 'prabhat', 'Namaste', 'Dhanyawad'],
        correct_answer: 'Shubh prabhat',
        explanation: "'Shubh prabhat' (शुभ प्रभात) means Good morning.",
        order_index: 2,
      },
      {
        id: 20003,
        lesson_id: 2001,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match Hindi words with English meanings',
        question: 'Match Hindi words with English meanings',
        question_text: 'Match words',
        pairs: {
          Namaste: 'Hello',
          Dhanyawad: 'Thank you',
          Haan: 'Yes',
          Nahin: 'No',
        },
        correct_answer: JSON.stringify([['Namaste', 'Hello'], ['Dhanyawad', 'Thank you'], ['Haan', 'Yes'], ['Nahin', 'No']]),
        explanation: 'Essential polite words in Hindi.',
        order_index: 3,
      },
      {
        id: 20004,
        lesson_id: 2001,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: 'Aap kaise ___? (How are you?)',
        question_text: 'Aap kaise ___?',
        options: ['hain', 'hoon', 'tha'],
        correct_answer: 'hain',
        explanation: "'Aap kaise hain?' (आप कैसे हैं?) means how are you.",
        order_index: 4,
      },
      {
        id: 20005,
        lesson_id: 2001,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Thank you' in Hindi (romaji):",
        question: "Type 'Thank you' in Hindi (romaji):",
        question_text: 'Dhanyawad (धन्यवाद)',
        options: [],
        correct_answer: 'Dhanyawad',
        explanation: "'Dhanyawad' (धन्यवाद) means Thank you.",
        order_index: 5,
      },
    ],
  },

  // Tamil Lesson 2002
  2002: {
    id: 2002,
    title: 'Tamil Basics (வணக்கம்)',
    xp_reward: 15,
    skill_title: 'Tamil Vanakkam',
    user_hearts: 5,
    exercises: [
      {
        id: 20011,
        lesson_id: 2002,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What does 'Vanakkam' (வணக்கம்) mean?",
        question: "What does 'Vanakkam' (வணக்கம்) mean?",
        question_text: "Vanakkam வணக்கம்",
        options: ['Hello / Greetings', 'Thank you', 'Water', 'Good night'],
        correct_answer: 'Hello / Greetings',
        explanation: "'Vanakkam' is the primary greeting in Tamil.",
        order_index: 1,
      },
      {
        id: 20012,
        lesson_id: 2002,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Thank you'",
        question: "Translate: 'Thank you'",
        question_text: "Thank you",
        options: ['Nandri', 'Vanakkam', 'Aam', 'Illai'],
        correct_answer: 'Nandri',
        explanation: "'Nandri' (நன்றி) means Thank you in Tamil.",
        order_index: 2,
      },
      {
        id: 20013,
        lesson_id: 2002,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match Tamil phrases with English',
        question: 'Match Tamil phrases with English',
        pairs: {
          Vanakkam: 'Hello',
          Nandri: 'Thank you',
          Aam: 'Yes',
          Illai: 'No',
        },
        correct_answer: JSON.stringify([['Vanakkam', 'Hello'], ['Nandri', 'Thank you'], ['Aam', 'Yes'], ['Illai', 'No']]),
        explanation: 'Essential Tamil conversational pairs.',
        order_index: 3,
      },
      {
        id: 20014,
        lesson_id: 2002,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: 'Kaalai ___ (Good morning)',
        question_text: 'Kaalai ___',
        options: ['Vanakkam', 'Nandri', 'Aam'],
        correct_answer: 'Vanakkam',
        explanation: "'Kaalai Vanakkam' translates to Good Morning.",
        order_index: 4,
      },
      {
        id: 20015,
        lesson_id: 2002,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Thank you' in Tamil (romaji):",
        question: "Type 'Thank you' in Tamil (romaji):",
        question_text: 'Nandri (நன்றி)',
        options: [],
        correct_answer: 'Nandri',
        explanation: "'Nandri' is Thank you in Tamil.",
        order_index: 5,
      },
    ],
  },

  // Telugu Lesson 2003
  2003: {
    id: 2003,
    title: 'Telugu Basics (నమస్కారం)',
    xp_reward: 15,
    skill_title: 'Telugu Namaskaram',
    user_hearts: 5,
    exercises: [
      {
        id: 20021,
        lesson_id: 2003,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What is 'Hello' in Telugu?",
        question: "What is 'Hello' in Telugu?",
        question_text: "Namaskaram నమస్కారం",
        options: ['Namaskaram', 'Dhanyavadalu', 'Avunu', 'Kaadu'],
        correct_answer: 'Namaskaram',
        explanation: "'Namaskaram' is the formal Telugu greeting.",
        order_index: 1,
      },
      {
        id: 20022,
        lesson_id: 2003,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Thank you very much'",
        question: "Translate: 'Thank you very much'",
        question_text: 'Thank you very much',
        options: ['Chala', 'dhanyavadalu', 'Namaskaram', 'Bagunnanu'],
        correct_answer: 'Chala dhanyavadalu',
        explanation: "'Chala dhanyavadalu' means Thanks a lot in Telugu.",
        order_index: 2,
      },
      {
        id: 20023,
        lesson_id: 2003,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match Telugu words to English',
        question: 'Match Telugu words to English',
        pairs: {
          Namaskaram: 'Hello',
          Dhanyavadalu: 'Thank you',
          Avunu: 'Yes',
          Kaadu: 'No',
        },
        correct_answer: JSON.stringify([['Namaskaram', 'Hello'], ['Dhanyavadalu', 'Thank you'], ['Avunu', 'Yes'], ['Kaadu', 'No']]),
        explanation: 'Common Telugu conversational terms.',
        order_index: 3,
      },
      {
        id: 20024,
        lesson_id: 2003,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: 'Meeru ela ___? (How are you?)',
        question_text: 'Meeru ela ___?',
        options: ['unnaru', 'undi', 'ledu'],
        correct_answer: 'unnaru',
        explanation: "'Meeru ela unnaru?' is the polite way to ask How are you.",
        order_index: 4,
      },
      {
        id: 20025,
        lesson_id: 2003,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Hello' in Telugu (romaji):",
        question: "Type 'Hello' in Telugu (romaji):",
        question_text: 'Namaskaram (నమస్కారం)',
        options: [],
        correct_answer: 'Namaskaram',
        explanation: "'Namaskaram' is Hello in Telugu.",
        order_index: 5,
      },
    ],
  },

  // Kannada Lesson 2004
  2004: {
    id: 2004,
    title: 'Kannada Basics (ನಮಸ್ಕಾರ)',
    xp_reward: 15,
    skill_title: 'Kannada Namaskara',
    user_hearts: 5,
    exercises: [
      {
        id: 20031,
        lesson_id: 2004,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What is 'Hello' in Kannada?",
        question: "What is 'Hello' in Kannada?",
        question_text: "Namaskara ನಮಸ್ಕಾರ",
        options: ['Namaskara', 'Dhanyavadagalu', 'Haudu', 'Illa'],
        correct_answer: 'Namaskara',
        explanation: "'Namaskara' (ನಮಸ್ಕಾರ) is the greeting in Kannada.",
        order_index: 1,
      },
      {
        id: 20032,
        lesson_id: 2004,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Thank you'",
        question: "Translate: 'Thank you'",
        question_text: 'Thank you',
        options: ['Dhanyavadagalu', 'Namaskara', 'Haudu', 'Shubhodaya'],
        correct_answer: 'Dhanyavadagalu',
        explanation: "'Dhanyavadagalu' (ಧನ್ಯವಾದಗಳು) means Thank you.",
        order_index: 2,
      },
      {
        id: 20033,
        lesson_id: 2004,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match Kannada vocabulary with English',
        question: 'Match Kannada vocabulary with English',
        pairs: {
          Namaskara: 'Hello',
          Dhanyavadagalu: 'Thank you',
          Haudu: 'Yes',
          Illa: 'No',
        },
        correct_answer: JSON.stringify([['Namaskara', 'Hello'], ['Dhanyavadagalu', 'Thank you'], ['Haudu', 'Yes'], ['Illa', 'No']]),
        explanation: 'Essential Kannada pairs.',
        order_index: 3,
      },
      {
        id: 20034,
        lesson_id: 2004,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: 'Neevu hege ___? (How are you?)',
        question_text: 'Neevu hege ___?',
        options: ['iddeera', 'idya', 'iddene'],
        correct_answer: 'iddeera',
        explanation: "'Neevu hege iddeera?' means How are you in Kannada.",
        order_index: 4,
      },
      {
        id: 20035,
        lesson_id: 2004,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Hello' in Kannada (romaji):",
        question: "Type 'Hello' in Kannada (romaji):",
        question_text: 'Namaskara (ನಮಸ್ಕಾರ)',
        options: [],
        correct_answer: 'Namaskara',
        explanation: "'Namaskara' means Hello.",
        order_index: 5,
      },
    ],
  },

  // Malayalam Lesson 2005
  2005: {
    id: 2005,
    title: 'Malayalam Basics (നമസ്കാരം)',
    xp_reward: 15,
    skill_title: 'Malayalam Namaskaram',
    user_hearts: 5,
    exercises: [
      {
        id: 20041,
        lesson_id: 2005,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What is 'Hello' in Malayalam?",
        question: "What is 'Hello' in Malayalam?",
        question_text: "Namaskaram നമസ്കാരം",
        options: ['Namaskaram', 'Nanni', 'Athe', 'Alla'],
        correct_answer: 'Namaskaram',
        explanation: "'Namaskaram' (നമസ്കാരം) is the standard Malayalam greeting.",
        order_index: 1,
      },
      {
        id: 20042,
        lesson_id: 2005,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Thank you'",
        question: "Translate: 'Thank you'",
        question_text: 'Thank you',
        options: ['Nanni', 'Namaskaram', 'Sugham', 'Athe'],
        correct_answer: 'Nanni',
        explanation: "'Nanni' (നന്ദി) means Thank you in Malayalam.",
        order_index: 2,
      },
      {
        id: 20043,
        lesson_id: 2005,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match Malayalam phrases with English',
        question: 'Match Malayalam phrases with English',
        pairs: {
          Namaskaram: 'Hello',
          Nanni: 'Thank you',
          Athe: 'Yes',
          Alla: 'No',
        },
        correct_answer: JSON.stringify([['Namaskaram', 'Hello'], ['Nanni', 'Thank you'], ['Athe', 'Yes'], ['Alla', 'No']]),
        explanation: 'Everyday Malayalam vocabulary.',
        order_index: 3,
      },
      {
        id: 20044,
        lesson_id: 2005,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: 'Sugham ___? (Are you doing well?)',
        question_text: 'Sugham ___?',
        options: ['aano', 'undu', 'alla'],
        correct_answer: 'aano',
        explanation: "'Sugham aano?' means How are you / Are you well? in Malayalam.",
        order_index: 4,
      },
      {
        id: 20045,
        lesson_id: 2005,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Thank you' in Malayalam (romaji):",
        question: "Type 'Thank you' in Malayalam (romaji):",
        question_text: 'Nanni (നന്ദി)',
        options: [],
        correct_answer: 'Nanni',
        explanation: "'Nanni' means Thank you.",
        order_index: 5,
      },
    ],
  },

  // English for Hindi Speakers Lesson 2006
  2006: {
    id: 2006,
    title: 'English Greetings',
    xp_reward: 15,
    skill_title: 'English Hello',
    user_hearts: 5,
    exercises: [
      {
        id: 20051,
        lesson_id: 2006,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What does 'Hello' mean in Hindi?",
        question: "What does 'Hello' mean in Hindi?",
        question_text: 'Hello नमस्ते',
        options: ['नमस्ते (Namaste)', 'पानी (Water)', 'अलविदा (Goodbye)', 'किताब (Book)'],
        correct_answer: 'नमस्ते (Namaste)',
        explanation: "'Hello' translates to 'Namaste' in Hindi.",
        order_index: 1,
      },
      {
        id: 20052,
        lesson_id: 2006,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Thank you'",
        question: "Translate: 'Thank you'",
        question_text: 'Thank you',
        options: ['धन्यवाद', 'कृपया', 'नमस्ते', 'हाँ'],
        correct_answer: 'धन्यवाद',
        explanation: "'Thank you' means 'धन्यवाद' (Dhanyawad).",
        order_index: 2,
      },
      {
        id: 20053,
        lesson_id: 2006,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match English words with Hindi meanings',
        question: 'Match English words with Hindi meanings',
        pairs: {
          Hello: 'Namaste',
          'Thank you': 'Dhanyawad',
          Yes: 'Haan',
          No: 'Nahin',
        },
        correct_answer: JSON.stringify([['Hello', 'Namaste'], ['Thank you', 'Dhanyawad'], ['Yes', 'Haan'], ['No', 'Nahin']]),
        explanation: 'English to Hindi common pairs.',
        order_index: 3,
      },
      {
        id: 20054,
        lesson_id: 2006,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: 'Good ___ (सुबह की नमस्ते / Good morning)',
        question_text: 'Good ___',
        options: ['morning', 'night', 'bye'],
        correct_answer: 'morning',
        explanation: "'Good morning' means Shubh Prabhat.",
        order_index: 4,
      },
      {
        id: 20055,
        lesson_id: 2006,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Yes' in English:",
        question: "Type 'Yes' in English:",
        question_text: 'Yes (हाँ)',
        options: [],
        correct_answer: 'Yes',
        explanation: "'Yes' is the affirmative in English.",
        order_index: 5,
      },
    ],
  },

  // French Lesson 1001
  1001: {
    id: 1001,
    title: 'Bonjour & Au Revoir',
    xp_reward: 15,
    skill_title: 'French Greetings',
    user_hearts: 5,
    exercises: [
      {
        id: 10001,
        lesson_id: 1001,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What does 'Bonjour' mean in English?",
        question: "What does 'Bonjour' mean in English?",
        question_text: 'Bonjour',
        options: ['Hello', 'Goodbye', 'Thanks', 'Water'],
        correct_answer: 'Hello',
        explanation: "'Bonjour' is the standard French greeting for 'Hello'.",
        order_index: 1,
      },
      {
        id: 10002,
        lesson_id: 1001,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Good evening'",
        question: "Translate: 'Good evening'",
        question_text: 'Good evening',
        options: ['Bonsoir', 'Bonjour', 'merci', 'oui'],
        correct_answer: 'Bonsoir',
        explanation: "'Bonsoir' translates to 'Good evening'.",
        order_index: 2,
      },
      {
        id: 10003,
        lesson_id: 1001,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match French and English greetings',
        question: 'Match French and English greetings',
        pairs: {
          Bonjour: 'Hello',
          'Au revoir': 'Goodbye',
          Merci: 'Thank you',
          'S’il vous plaît': 'Please',
        },
        correct_answer: JSON.stringify([['Bonjour', 'Hello'], ['Au revoir', 'Goodbye'], ['Merci', 'Thank you'], ['S’il vous plaît', 'Please']]),
        explanation: 'Basic polite phrases in French.',
        order_index: 3,
      },
      {
        id: 10004,
        lesson_id: 1001,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: '___ beaucoup! (Thank you very much!)',
        question_text: '___ beaucoup!',
        options: ['Merci', 'Bonjour', 'Non'],
        correct_answer: 'Merci',
        explanation: "'Merci beaucoup' means thank you very much.",
        order_index: 4,
      },
      {
        id: 10005,
        lesson_id: 1001,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Yes' in French:",
        question: "Type 'Yes' in French:",
        question_text: 'Oui',
        options: [],
        correct_answer: 'Oui',
        explanation: "'Oui' is French for 'Yes'.",
        order_index: 5,
      },
    ],
  },

  // German Lesson 1002
  1002: {
    id: 1002,
    title: 'German Basics',
    xp_reward: 15,
    skill_title: 'Hallo & Tschüss',
    user_hearts: 5,
    exercises: [
      {
        id: 10011,
        lesson_id: 1002,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What does 'Hallo' mean?",
        question: "What does 'Hallo' mean?",
        question_text: 'Hallo',
        options: ['Hello', 'Goodbye', 'Apple', 'Night'],
        correct_answer: 'Hello',
        explanation: "'Hallo' is German for 'Hello'.",
        order_index: 1,
      },
      {
        id: 10012,
        lesson_id: 1002,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Good day'",
        question: "Translate: 'Good day'",
        question_text: 'Good day',
        options: ['Guten', 'Tag', 'Morgen', 'Hallo'],
        correct_answer: 'Guten Tag',
        explanation: "'Guten Tag' means 'Good day'.",
        order_index: 2,
      },
      {
        id: 10013,
        lesson_id: 1002,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match German words with English',
        question: 'Match German words with English',
        pairs: {
          Hallo: 'Hello',
          Tschüss: 'Bye',
          Danke: 'Thanks',
          Bitte: 'Please',
        },
        correct_answer: JSON.stringify([['Hallo', 'Hello'], ['Tschüss', 'Bye'], ['Danke', 'Thanks'], ['Bitte', 'Please']]),
        explanation: 'Core conversational German.',
        order_index: 3,
      },
      {
        id: 10014,
        lesson_id: 1002,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: 'Guten ___ (Good morning)',
        question_text: 'Guten ___',
        options: ['Morgen', 'Nacht', 'Hallo'],
        correct_answer: 'Morgen',
        explanation: "'Guten Morgen' means good morning.",
        order_index: 4,
      },
      {
        id: 10015,
        lesson_id: 1002,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Thank you' in German:",
        question: "Type 'Thank you' in German:",
        question_text: 'Danke',
        options: [],
        correct_answer: 'Danke',
        explanation: "'Danke' means thank you.",
        order_index: 5,
      },
    ],
  },

  // Japanese Lesson 1003
  1003: {
    id: 1003,
    title: 'Essential Greetings',
    xp_reward: 15,
    skill_title: 'Konnichiwa',
    user_hearts: 5,
    exercises: [
      {
        id: 10021,
        lesson_id: 1003,
        exercise_type: 'MULTIPLE_CHOICE',
        prompt: "What does 'Konnichiwa' mean?",
        question: "What does 'Konnichiwa' mean?",
        question_text: 'Konnichiwa こんにちは',
        options: ['Hello / Good afternoon', 'Goodbye', 'Water', 'Night'],
        correct_answer: 'Hello / Good afternoon',
        explanation: "'Konnichiwa' is the standard Japanese greeting for daytime.",
        order_index: 1,
      },
      {
        id: 10022,
        lesson_id: 1003,
        exercise_type: 'TRANSLATE_WORDS',
        prompt: "Translate: 'Good morning'",
        question: "Translate: 'Good morning'",
        question_text: 'Good morning',
        options: ['Ohayou', 'gozaimasu', 'Konnichiwa', 'Arigato'],
        correct_answer: 'Ohayou gozaimasu',
        explanation: "'Ohayou gozaimasu' is polite 'Good morning'.",
        order_index: 2,
      },
      {
        id: 10023,
        lesson_id: 1003,
        exercise_type: 'MATCH_PAIRS',
        prompt: 'Match Japanese greetings with English',
        question: 'Match Japanese greetings with English',
        pairs: {
          Konnichiwa: 'Hello',
          Sayonara: 'Goodbye',
          Arigatou: 'Thank you',
          Hai: 'Yes',
        },
        correct_answer: JSON.stringify([['Konnichiwa', 'Hello'], ['Sayonara', 'Goodbye'], ['Arigatou', 'Thank you'], ['Hai', 'Yes']]),
        explanation: 'Japanese core conversational words.',
        order_index: 3,
      },
      {
        id: 10024,
        lesson_id: 1003,
        exercise_type: 'FILL_IN_BLANK',
        prompt: 'Fill in the blank:',
        question: '___ gozaimasu (Polite thank you)',
        question_text: '___ gozaimasu',
        options: ['Arigatou', 'Sayonara', 'Hai'],
        correct_answer: 'Arigatou',
        explanation: "'Arigatou gozaimasu' means thank you very much.",
        order_index: 4,
      },
      {
        id: 10025,
        lesson_id: 1003,
        exercise_type: 'TYPE_ANSWER',
        prompt: "Type 'Yes' in Japanese (romaji):",
        question: "Type 'Yes' in Japanese (romaji):",
        question_text: 'Hai (はい)',
        options: [],
        correct_answer: 'Hai',
        explanation: "'Hai' means yes in Japanese.",
        order_index: 5,
      },
    ],
  },
};

export function getFallbackCoursePath(courseId: number): CoursePath {
  return FALLBACK_COURSES_DATA[courseId] || FALLBACK_COURSES_DATA[1];
}

export function getFallbackLesson(lessonId: number): any {
  return FALLBACK_LESSONS_DATA[lessonId] || null;
}
