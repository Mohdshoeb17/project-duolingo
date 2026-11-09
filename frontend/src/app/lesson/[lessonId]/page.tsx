'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { X, Heart } from 'lucide-react';
import { api } from '@/services/api';
import { LessonDetail, Exercise, SubmitResult } from '@/types';
import { MultipleChoiceExercise } from '@/components/lesson/MultipleChoiceExercise';
import { WordBankExercise } from '@/components/lesson/WordBankExercise';
import { MatchPairsExercise } from '@/components/lesson/MatchPairsExercise';
import { FillBlankExercise } from '@/components/lesson/FillBlankExercise';
import { TypeAnswerExercise } from '@/components/lesson/TypeAnswerExercise';
import { FeedbackPanel } from '@/components/lesson/FeedbackPanel';
import { LessonCompleteModal } from '@/components/lesson/LessonCompleteModal';
import { OutOfHeartsModal } from '@/components/lesson/OutOfHeartsModal';
import { getFallbackLesson } from '@/lib/courseData';

function LessonContent() {
  const params = useParams();
  const router = useRouter();
  const lessonId = Number(params?.lessonId);

  const [lesson, setLesson] = useState<LessonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Lesson Execution State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [correctCount, setCorrectCount] = useState(0);

  // User Answer state
  const [multipleChoiceAns, setMultipleChoiceAns] = useState('');
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [matchedPairsData, setMatchedPairsData] = useState<any>(null);
  const [fillBlankAns, setFillBlankAns] = useState('');
  const [typeAns, setTypeAns] = useState('');

  // Submission & Feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<SubmitResult | null>(null);
  const [showOutOfHearts, setShowOutOfHearts] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completionResult, setCompletionResult] = useState<{
    xp: number;
    accuracy: number;
    streak: number;
  } | null>(null);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        // Start lesson session
        try {
          const startRes = await api.startLesson(lessonId);
          if (startRes && startRes.hearts !== undefined) {
            setHearts(startRes.hearts);
          }
        } catch {
          // ignore session start failure
        }

        // Fetch lesson detail with graceful fallback
        let data: any = null;
        try {
          data = await api.getLesson(lessonId);
        } catch (fetchErr) {
          console.warn(`API getLesson failed for lesson ${lessonId}, using built-in lesson:`, fetchErr);
          data = getFallbackLesson(lessonId);
        }

        if (!data) {
          data = getFallbackLesson(lessonId);
        }

        if (!data) {
          throw new Error('Lesson data not found');
        }

        // Normalize exercises coming from backend
        if (data && data.exercises) {
          const normalizedExercises = data.exercises.map((ex: any) => {
            const typeUpper = (ex.exercise_type || '').toUpperCase();
            let parsedPairs: any = null;
            if (typeUpper === 'MATCH_PAIRS') {
              try {
                const rawPairs = typeof ex.correct_answer === 'string' ? JSON.parse(ex.correct_answer) : ex.correct_answer;
                if (Array.isArray(rawPairs)) {
                  parsedPairs = Object.fromEntries(rawPairs);
                } else if (rawPairs && typeof rawPairs === 'object') {
                  parsedPairs = rawPairs;
                }
              } catch {
                parsedPairs = ex.pairs || {};
              }
            }

            return {
              id: ex.id,
              lesson_id: ex.lesson_id,
              exercise_type: typeUpper,
              prompt: ex.question || ex.prompt || '',
              question_text: ex.question_text || ex.question || '',
              correct_answer: ex.correct_answer || '',
              options: ex.options || [],
              pairs: parsedPairs || ex.pairs,
              explanation: ex.explanation,
              order_index: ex.order_index,
            };
          });
          setLesson({ ...data, exercises: normalizedExercises });
        } else {
          setLesson(data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load lesson');
      } finally {
        setLoading(false);
      }
    }
    if (lessonId) {
      init();
    }
  }, [lessonId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#58CC02] border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 font-black text-gray-500 uppercase tracking-wider text-sm">
          Loading lesson...
        </p>
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="text-4xl mb-3">⚠️</div>
        <h2 className="text-2xl font-black text-gray-800">Lesson Unavailable</h2>
        <p className="text-gray-500 font-bold mt-1 max-w-md">{error}</p>
        <button
          onClick={() => router.push('/')}
          className="mt-6 px-8 py-3 bg-[#58CC02] text-white rounded-2xl font-black shadow-[0_4px_0_#46A302]"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const currentExercise: Exercise | undefined = lesson.exercises[currentIndex];
  const progressPercent = Math.round((currentIndex / lesson.exercises.length) * 100);

  // Normalize exercise type for checks
  const exType = (currentExercise?.exercise_type || '').toUpperCase();

  let canSubmit = false;
  let preparedAnswer: any = '';

  if (currentExercise) {
    if (exType === 'MULTIPLE_CHOICE') {
      canSubmit = multipleChoiceAns.trim().length > 0;
      preparedAnswer = multipleChoiceAns;
    } else if (exType === 'WORD_BANK' || exType === 'TRANSLATE_WORDS') {
      canSubmit = selectedWords.length > 0;
      preparedAnswer = selectedWords.join(' ');
    } else if (exType === 'MATCH_PAIRS') {
      canSubmit = matchedPairsData !== null;
      preparedAnswer = matchedPairsData;
    } else if (exType === 'FILL_BLANK' || exType === 'FILL_IN_BLANK') {
      canSubmit = fillBlankAns.trim().length > 0;
      preparedAnswer = fillBlankAns;
    } else if (exType === 'TYPE_ANSWER') {
      canSubmit = typeAns.trim().length > 0;
      preparedAnswer = typeAns;
    }
  }

  // Handle word bank clicks
  const handleWordBankClick = (word: string, index: number, isSelected: boolean) => {
    if (feedback) return;
    if (isSelected) {
      const updated = [...selectedWords];
      updated.splice(index, 1);
      setSelectedWords(updated);
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  // Submit Answer to Backend
  const handleSubmit = async () => {
    if (!canSubmit || isSubmitting || !currentExercise || feedback) return;

    try {
      setIsSubmitting(true);
      let res: any = null;
      try {
        res = await api.submitExercise(lessonId, currentExercise.id, preparedAnswer);
      } catch (subErr) {
        // Fallback local check if backend is offline or sleeping
        const prepStr = String(preparedAnswer || '').trim().toLowerCase();
        const corrStr = String(currentExercise.correct_answer || '').trim().toLowerCase();
        const isCorrect = (exType === 'MATCH_PAIRS') ? true : (prepStr === corrStr);
        res = {
          is_correct: isCorrect,
          correct_answer: currentExercise.correct_answer,
          explanation: currentExercise.explanation || 'Good job!',
          hearts_remaining: isCorrect ? hearts : Math.max(0, hearts - 1),
          lesson_failed: !isCorrect && hearts <= 1,
        };
      }
      
      const normalizedResult: SubmitResult = {
        is_correct: res.is_correct,
        correct_answer: res.correct_answer,
        explanation: res.explanation,
        hearts_remaining: res.hearts_remaining,
        out_of_hearts: res.lesson_failed || res.hearts_remaining <= 0,
      };

      setFeedback(normalizedResult);
      setHearts(res.hearts_remaining);

      if (res.is_correct) {
        setCorrectCount((prev) => prev + 1);
      }

      if (res.lesson_failed || res.hearts_remaining <= 0) {
        setShowOutOfHearts(true);
      }
    } catch (err: any) {
      console.warn(`Submission handled locally:`, err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Continue to Next Exercise or Complete Lesson
  const handleContinue = async () => {
    setFeedback(null);
    setMultipleChoiceAns('');
    setSelectedWords([]);
    setMatchedPairsData(null);
    setFillBlankAns('');
    setTypeAns('');

    const nextIndex = currentIndex + 1;
    if (nextIndex < lesson.exercises.length) {
      setCurrentIndex(nextIndex);
    } else {
      try {
        const total = lesson.exercises.length;
        const accuracy = Math.round((correctCount / total) * 100);
        let comp: any = null;
        try {
          comp = await api.completeLesson(lessonId, accuracy, correctCount, total);
        } catch {
          comp = { xp_awarded: 15, current_streak: 1 };
        }

        setCompletionResult({
          xp: comp.xp_awarded ?? comp.xp_earned ?? 15,
          accuracy: accuracy,
          streak: comp.current_streak ?? comp.streak ?? 1,
        });
        setIsCompleted(true);
      } catch (err: any) {
        console.warn(`Completion handled locally:`, err);
      }
    }
  };

  const handleRefillHearts = async () => {
    try {
      await api.refillHearts();
      setHearts(5);
      setShowOutOfHearts(false);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between select-none">
      {/* Top Header */}
      <header className="max-w-4xl w-full mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <button
          onClick={() => router.push('/')}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X className="w-7 h-7 stroke-[3]" />
        </button>

        <div className="flex-1 bg-[#E5E5E5] h-4 rounded-full overflow-hidden p-0.5">
          <div
            className="bg-[#58CC02] h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center gap-1.5 font-black text-lg text-[#FF4B4B]">
          <Heart className="w-6 h-6 fill-[#FF4B4B]" />
          <span>{hearts}</span>
        </div>
      </header>

      {/* Main Exercise Canvas */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-4 flex flex-col justify-center">
        {exType === 'MULTIPLE_CHOICE' && (
          <MultipleChoiceExercise
            exercise={currentExercise}
            selectedAnswer={multipleChoiceAns}
            onSelect={setMultipleChoiceAns}
            disabled={feedback !== null}
          />
        )}

        {(exType === 'WORD_BANK' || exType === 'TRANSLATE_WORDS') && (
          <WordBankExercise
            exercise={currentExercise}
            selectedWords={selectedWords}
            onWordClick={handleWordBankClick}
            disabled={feedback !== null}
          />
        )}

        {exType === 'MATCH_PAIRS' && (
          <MatchPairsExercise
            exercise={currentExercise}
            onMatchedAll={() => {
              // Pass the matched pairs map to backend
              setMatchedPairsData(currentExercise.pairs || {});
            }}
            disabled={feedback !== null}
          />
        )}

        {(exType === 'FILL_BLANK' || exType === 'FILL_IN_BLANK') && (
          <FillBlankExercise
            exercise={currentExercise}
            selectedOption={fillBlankAns}
            onSelect={setFillBlankAns}
            disabled={feedback !== null}
          />
        )}

        {exType === 'TYPE_ANSWER' && (
          <TypeAnswerExercise
            exercise={currentExercise}
            userAnswer={typeAns}
            onChange={setTypeAns}
            disabled={feedback !== null}
          />
        )}
      </main>

      {/* Bottom Action Footer */}
      {!feedback && (
        <footer className="w-full border-t-2 border-[#E5E5E5] py-5 px-6 sm:px-12 bg-white">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400">
              Exercise {currentIndex + 1} of {lesson.exercises.length}
            </span>
            <button
              type="button"
              disabled={!canSubmit || isSubmitting}
              onClick={handleSubmit}
              className={`px-10 py-3.5 rounded-2xl font-black text-base uppercase tracking-wider transition-all shadow-[0_4px_0_rgba(0,0,0,0.1)] active:translate-y-0.5 ${
                canSubmit && !isSubmitting
                  ? 'bg-[#58CC02] text-white shadow-[0_4px_0_#46A302] hover:bg-[#46A302]'
                  : 'bg-[#E5E5E5] text-[#AFAFAF] shadow-none cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Checking...' : 'Check'}
            </button>
          </div>
        </footer>
      )}

      {/* Feedback Panel */}
      {feedback && (
        <FeedbackPanel
          isCorrect={feedback.is_correct}
          correctAnswer={feedback.correct_answer}
          explanation={feedback.explanation}
          onContinue={handleContinue}
        />
      )}

      {/* Out of Hearts Modal */}
      {showOutOfHearts && <OutOfHeartsModal onRefill={handleRefillHearts} />}

      {/* Lesson Complete Celebration */}
      {isCompleted && completionResult && (
        <LessonCompleteModal
          xpEarned={completionResult.xp}
          accuracy={completionResult.accuracy}
          streak={completionResult.streak}
          correctCount={correctCount}
          totalQuestions={lesson.exercises.length}
        />
      )}
    </div>
  );
}

export default function LessonPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#58CC02] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LessonContent />
    </Suspense>
  );
}
