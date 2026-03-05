import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Shield, PiggyBank, ShoppingCart, Smartphone, CheckCircle2, XCircle, Trophy } from 'lucide-react';

type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

type TestTopic = {
  id: string;
  emoji: string;
  icon: typeof BookOpen;
  color: string;
  title: string;
  author: string;
  questions: Question[];
};

const Tests = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [completedTests, setCompletedTests] = useState<Record<string, number>>({});

  const topics: TestTopic[] = [
    {
      id: 'budget',
      emoji: '📊',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-400',
      title: t('testTopicBudget'),
      author: t('testAuthorCB'),
      questions: [
        { question: t('testBudgetQ1'), options: [t('testBudgetQ1a'), t('testBudgetQ1b'), t('testBudgetQ1c'), t('testBudgetQ1d')], correct: 1, explanation: t('testBudgetQ1exp') },
        { question: t('testBudgetQ2'), options: [t('testBudgetQ2a'), t('testBudgetQ2b'), t('testBudgetQ2c'), t('testBudgetQ2d')], correct: 2, explanation: t('testBudgetQ2exp') },
        { question: t('testBudgetQ3'), options: [t('testBudgetQ3a'), t('testBudgetQ3b'), t('testBudgetQ3c'), t('testBudgetQ3d')], correct: 0, explanation: t('testBudgetQ3exp') },
        { question: t('testBudgetQ4'), options: [t('testBudgetQ4a'), t('testBudgetQ4b'), t('testBudgetQ4c'), t('testBudgetQ4d')], correct: 2, explanation: t('testBudgetQ4exp') },
        { question: t('testBudgetQ5'), options: [t('testBudgetQ5a'), t('testBudgetQ5b'), t('testBudgetQ5c'), t('testBudgetQ5d')], correct: 1, explanation: t('testBudgetQ5exp') },
      ],
    },
    {
      id: 'security',
      emoji: '🔒',
      icon: Shield,
      color: 'from-red-500 to-orange-400',
      title: t('testTopicSecurity'),
      author: t('testAuthorMVD'),
      questions: [
        { question: t('testSecurityQ1'), options: [t('testSecurityQ1a'), t('testSecurityQ1b'), t('testSecurityQ1c'), t('testSecurityQ1d')], correct: 2, explanation: t('testSecurityQ1exp') },
        { question: t('testSecurityQ2'), options: [t('testSecurityQ2a'), t('testSecurityQ2b'), t('testSecurityQ2c'), t('testSecurityQ2d')], correct: 0, explanation: t('testSecurityQ2exp') },
        { question: t('testSecurityQ3'), options: [t('testSecurityQ3a'), t('testSecurityQ3b'), t('testSecurityQ3c'), t('testSecurityQ3d')], correct: 3, explanation: t('testSecurityQ3exp') },
        { question: t('testSecurityQ4'), options: [t('testSecurityQ4a'), t('testSecurityQ4b'), t('testSecurityQ4c'), t('testSecurityQ4d')], correct: 1, explanation: t('testSecurityQ4exp') },
        { question: t('testSecurityQ5'), options: [t('testSecurityQ5a'), t('testSecurityQ5b'), t('testSecurityQ5c'), t('testSecurityQ5d')], correct: 0, explanation: t('testSecurityQ5exp') },
      ],
    },
    {
      id: 'savings',
      emoji: '🐷',
      icon: PiggyBank,
      color: 'from-green-500 to-emerald-400',
      title: t('testTopicSavings'),
      author: t('testAuthorMinEdu'),
      questions: [
        { question: t('testSavingsQ1'), options: [t('testSavingsQ1a'), t('testSavingsQ1b'), t('testSavingsQ1c'), t('testSavingsQ1d')], correct: 1, explanation: t('testSavingsQ1exp') },
        { question: t('testSavingsQ2'), options: [t('testSavingsQ2a'), t('testSavingsQ2b'), t('testSavingsQ2c'), t('testSavingsQ2d')], correct: 2, explanation: t('testSavingsQ2exp') },
        { question: t('testSavingsQ3'), options: [t('testSavingsQ3a'), t('testSavingsQ3b'), t('testSavingsQ3c'), t('testSavingsQ3d')], correct: 0, explanation: t('testSavingsQ3exp') },
        { question: t('testSavingsQ4'), options: [t('testSavingsQ4a'), t('testSavingsQ4b'), t('testSavingsQ4c'), t('testSavingsQ4d')], correct: 3, explanation: t('testSavingsQ4exp') },
        { question: t('testSavingsQ5'), options: [t('testSavingsQ5a'), t('testSavingsQ5b'), t('testSavingsQ5c'), t('testSavingsQ5d')], correct: 1, explanation: t('testSavingsQ5exp') },
      ],
    },
    {
      id: 'spending',
      emoji: '🛒',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-400',
      title: t('testTopicSpending'),
      author: t('testAuthorCB'),
      questions: [
        { question: t('testSpendingQ1'), options: [t('testSpendingQ1a'), t('testSpendingQ1b'), t('testSpendingQ1c'), t('testSpendingQ1d')], correct: 2, explanation: t('testSpendingQ1exp') },
        { question: t('testSpendingQ2'), options: [t('testSpendingQ2a'), t('testSpendingQ2b'), t('testSpendingQ2c'), t('testSpendingQ2d')], correct: 0, explanation: t('testSpendingQ2exp') },
        { question: t('testSpendingQ3'), options: [t('testSpendingQ3a'), t('testSpendingQ3b'), t('testSpendingQ3c'), t('testSpendingQ3d')], correct: 1, explanation: t('testSpendingQ3exp') },
        { question: t('testSpendingQ4'), options: [t('testSpendingQ4a'), t('testSpendingQ4b'), t('testSpendingQ4c'), t('testSpendingQ4d')], correct: 3, explanation: t('testSpendingQ4exp') },
        { question: t('testSpendingQ5'), options: [t('testSpendingQ5a'), t('testSpendingQ5b'), t('testSpendingQ5c'), t('testSpendingQ5d')], correct: 0, explanation: t('testSpendingQ5exp') },
      ],
    },
    {
      id: 'digital',
      emoji: '📱',
      icon: Smartphone,
      color: 'from-indigo-500 to-violet-400',
      title: t('testTopicDigital'),
      author: t('testAuthorMinICT'),
      questions: [
        { question: t('testDigitalQ1'), options: [t('testDigitalQ1a'), t('testDigitalQ1b'), t('testDigitalQ1c'), t('testDigitalQ1d')], correct: 2, explanation: t('testDigitalQ1exp') },
        { question: t('testDigitalQ2'), options: [t('testDigitalQ2a'), t('testDigitalQ2b'), t('testDigitalQ2c'), t('testDigitalQ2d')], correct: 3, explanation: t('testDigitalQ2exp') },
        { question: t('testDigitalQ3'), options: [t('testDigitalQ3a'), t('testDigitalQ3b'), t('testDigitalQ3c'), t('testDigitalQ3d')], correct: 0, explanation: t('testDigitalQ3exp') },
        { question: t('testDigitalQ4'), options: [t('testDigitalQ4a'), t('testDigitalQ4b'), t('testDigitalQ4c'), t('testDigitalQ4d')], correct: 1, explanation: t('testDigitalQ4exp') },
        { question: t('testDigitalQ5'), options: [t('testDigitalQ5a'), t('testDigitalQ5b'), t('testDigitalQ5c'), t('testDigitalQ5d')], correct: 2, explanation: t('testDigitalQ5exp') },
      ],
    },
  ];

  const topic = topics.find(t => t.id === activeTopic);
  const q = topic?.questions[currentQ];

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q?.correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (!topic) return;
    if (currentQ < topic.questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
      setCompletedTests(prev => ({ ...prev, [topic.id]: score + (selected === q?.correct ? 0 : 0) }));
    }
  };

  const handleBack = () => {
    if (activeTopic) {
      setActiveTopic(null);
      setCurrentQ(0);
      setSelected(null);
      setScore(0);
      setFinished(false);
    } else {
      navigate('/settings');
    }
  };

  const startTest = (id: string) => {
    setActiveTopic(id);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-5 pt-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.button whileTap={{ scale: 0.9 }} onClick={handleBack}
            className="w-10 h-10 bg-card rounded-2xl flex items-center justify-center shadow-card">
            <ArrowLeft size={20} />
          </motion.button>
          <h1 className="text-2xl font-black">{activeTopic ? topic?.title : t('testsTitle')}</h1>
        </div>

        {!activeTopic && (
          <>
            {/* Intro */}
            <div className="bg-card rounded-3xl p-5 shadow-card mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">{t('testsDesc')}</p>
            </div>

            {/* Topic list */}
            <div className="space-y-3">
              {topics.map((tp, i) => (
                <motion.button key={tp.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }} whileTap={{ scale: 0.97 }}
                  onClick={() => startTest(tp.id)}
                  className="w-full bg-card rounded-3xl p-5 shadow-card flex items-center gap-4 text-left relative overflow-hidden">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tp.color} flex items-center justify-center text-2xl shrink-0`}>
                    {tp.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm">{tp.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{tp.author} · 5 {t('testsQuestions')}</p>
                  </div>
                  {completedTests[tp.id] !== undefined && (
                    <div className="bg-primary/10 text-primary rounded-xl px-3 py-1 text-xs font-bold">
                      {completedTests[tp.id]}/5
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </>
        )}

        {/* Active quiz */}
        {activeTopic && !finished && q && (
          <AnimatePresence mode="wait">
            <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              {/* Progress */}
              <div className="flex gap-1.5 mb-6">
                {topic!.questions.map((_, i) => (
                  <div key={i} className={`flex-1 h-2 rounded-full transition-all ${
                    i < currentQ ? 'bg-primary' : i === currentQ ? 'bg-primary/50' : 'bg-secondary'
                  }`} />
                ))}
              </div>

              <div className="bg-card rounded-3xl p-5 shadow-card mb-4">
                <p className="text-xs text-muted-foreground mb-2">{t('testsQuestion')} {currentQ + 1}/5</p>
                <h2 className="font-bold text-base leading-snug">{q.question}</h2>
              </div>

              <div className="space-y-2.5">
                {q.options.map((opt, idx) => {
                  let cls = 'bg-card shadow-card';
                  if (selected !== null) {
                    if (idx === q.correct) cls = 'bg-primary/15 border-2 border-primary';
                    else if (idx === selected) cls = 'bg-destructive/15 border-2 border-destructive';
                  }
                  return (
                    <motion.button key={idx} whileTap={selected === null ? { scale: 0.97 } : {}}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full rounded-2xl p-4 text-left text-sm font-semibold flex items-center gap-3 transition-all ${cls}`}>
                      <span className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {selected !== null && idx === q.correct && <CheckCircle2 size={20} className="text-primary shrink-0" />}
                      {selected !== null && idx === selected && idx !== q.correct && <XCircle size={20} className="text-destructive shrink-0" />}
                    </motion.button>
                  );
                })}
              </div>

              {selected !== null && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                  <div className={`rounded-2xl p-4 text-sm ${selected === q.correct ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                    <p className="font-bold mb-1">{selected === q.correct ? '✅ ' + t('testsCorrect') : '❌ ' + t('testsWrong')}</p>
                    <p className="text-xs opacity-80">{q.explanation}</p>
                  </div>
                  <motion.button whileTap={{ scale: 0.95 }} onClick={handleNext}
                    className="w-full mt-3 gradient-primary text-primary-foreground rounded-2xl py-4 font-bold shadow-button">
                    {currentQ < topic!.questions.length - 1 ? t('testsNext') : t('testsFinish')}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Finished */}
        {finished && topic && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <div className="text-6xl mb-4">{score >= 4 ? '🏆' : score >= 2 ? '👍' : '📚'}</div>
            <h2 className="text-2xl font-black mb-2">{t('testsResultTitle')}</h2>
            <p className="text-4xl font-black text-primary mb-2">{score}/5</p>
            <p className="text-sm text-muted-foreground mb-6">
              {score >= 4 ? t('testsResultGreat') : score >= 2 ? t('testsResultGood') : t('testsResultTryAgain')}
            </p>
            <div className="flex gap-3">
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => startTest(topic.id)}
                className="flex-1 bg-secondary rounded-2xl py-4 font-bold text-sm">
                {t('testsRetry')}
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={handleBack}
                className="flex-1 gradient-primary text-primary-foreground rounded-2xl py-4 font-bold text-sm shadow-button">
                {t('testsBackToList')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tests;
