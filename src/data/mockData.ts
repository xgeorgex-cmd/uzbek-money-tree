export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense' | 'savings' | 'cash';
  category?: string;
  description: string;
  source: string;
  date: string; // DD.MM
  icon: string;
}

export interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  reason: string;
  emoji: string;
  createdAt: string;
  deadline?: string;
}

export interface Avatar {
  id: string;
  emoji: string;
  name: string;
}

export interface Story {
  id: string;
  emoji: string;
  title: string;
  content: string;
  color: string;
  type?: 'info' | 'quiz';
  image?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Achievement {
  id: string;
  emoji: string;
  name: string;
  description: string;
  condition: string;
  unlockedMessage: string;
}

export const avatars: Avatar[] = [
  { id: '1', emoji: '🦊', name: 'Лисёнок' },
  { id: '2', emoji: '🐼', name: 'Панда' },
  { id: '3', emoji: '🦁', name: 'Львёнок' },
  { id: '4', emoji: '🐱', name: 'Котик' },
  { id: '5', emoji: '🐰', name: 'Зайка' },
  { id: '6', emoji: '🐻', name: 'Мишка' },
  { id: '7', emoji: '🦄', name: 'Единорог' },
  { id: '8', emoji: '🐸', name: 'Лягушонок' },
  { id: '9', emoji: '🦋', name: 'Бабочка' },
  { id: '10', emoji: '🐨', name: 'Коала' },
  { id: '11', emoji: '🦉', name: 'Совёнок' },
  { id: '12', emoji: '🐧', name: 'Пингвин' },
  { id: '13', emoji: '🦈', name: 'Акула' },
  { id: '14', emoji: '🐯', name: 'Тигрёнок' },
  { id: '15', emoji: '🦜', name: 'Попугай' },
];

import story1Img from '@/assets/stories/story-1.jpg';
import story2Img from '@/assets/stories/story-2.jpg';
import story3Img from '@/assets/stories/story-3.jpg';
import story4Img from '@/assets/stories/story-4.jpg';
import story5Img from '@/assets/stories/story-5.jpg';
import story6Img from '@/assets/stories/story-6.jpg';
import story7Img from '@/assets/stories/story-7.jpg';
import story8Img from '@/assets/stories/story-8.jpg';
import story9Img from '@/assets/stories/story-9.jpg';
import story10Img from '@/assets/stories/story-10.jpg';
import story11Img from '@/assets/stories/story-11.jpg';
import story12Img from '@/assets/stories/story-12.jpg';
import story13Img from '@/assets/stories/story-13.jpg';
import story14Img from '@/assets/stories/story-14.jpg';
import story15Img from '@/assets/stories/story-15.jpg';

export const mockStories: Story[] = [
  { id: '1', emoji: '💡', title: 'Совет дня', content: 'Перед покупкой подожди 24 часа — может, передумаешь!', color: 'bg-savings/20', image: story1Img },
  { id: '2', emoji: '🧠', title: 'Решай — зарабатывай!', content: 'Ответь на вопросы и заработай сумы!', color: 'bg-primary/20', type: 'quiz', image: story2Img },
  { id: '3', emoji: '🏦', title: 'Что такое банк?', content: 'Банк — это место, где хранят деньги и дают их в долг другим людям. За хранение банк платит тебе проценты!', color: 'bg-primary/20', image: story3Img },
  { id: '4', emoji: '🌍', title: 'Деньги мира', content: 'В Японии на монетах изображены цветы, а в Австралии — животные! Узбекский сум назван в честь золота.', color: 'bg-success/20', image: story4Img },
  { id: '5', emoji: '📊', title: 'Правило 50/30/20', content: '50% на нужное, 30% на желания, 20% — в копилку! Это правило помогает управлять деньгами.', color: 'bg-accent/20', image: story5Img },
  { id: '6', emoji: '🎯', title: 'Цель = мотивация', content: 'Люди, которые ставят цели, копят в 3 раза быстрее! Поставь свою цель прямо сейчас.', color: 'bg-destructive/20', image: story6Img },
  { id: '7', emoji: '🎮', title: 'Игра на монетки', content: 'Знаешь ли ты, что первые деньги были из ракушек? А монеты придумали 2700 лет назад в Лидии!', color: 'bg-primary/20', image: story7Img },
  { id: '8', emoji: '🍕', title: 'Пицца или копилка?', content: 'Если вместо одной пиццы в неделю откладывать деньги, через год у тебя будет целый велосипед!', color: 'bg-accent/20', image: story8Img },
  { id: '9', emoji: '🦸', title: 'Финансовый герой', content: 'Настоящий герой умеет не только зарабатывать, но и разумно тратить. Ты уже на пути!', color: 'bg-success/20', image: story9Img },
  { id: '10', emoji: '🎪', title: 'Весёлый факт', content: 'Самая дорогая монета в мире стоит 18,9 миллионов долларов! Это серебряный доллар 1794 года.', color: 'bg-savings/20', image: story10Img },
  { id: '11', emoji: '🌟', title: 'Ты молодец!', content: 'Каждый раз, когда ты открываешь приложение, ты учишься управлять деньгами. Так держать!', color: 'bg-primary/20', image: story11Img },
  { id: '12', emoji: '🎨', title: 'Нарисуй мечту', content: 'Нарисуй то, на что копишь, и повесь рисунок на стену. Визуализация помогает достигать целей!', color: 'bg-accent/20', image: story12Img },
  { id: '13', emoji: '🤝', title: 'Делись добром', content: 'Когда копишь деньги, можно часть отложить на подарки друзьям. Щедрость делает счастливее!', color: 'bg-success/20', image: story13Img },
  { id: '14', emoji: '📱', title: 'Цифровые деньги', content: 'Сегодня большинство денег существуют только в компьютерах. Наличные — лишь малая часть!', color: 'bg-savings/20', image: story14Img },
  { id: '15', emoji: '🏆', title: 'Челлендж недели', content: 'Попробуй целую неделю записывать все свои траты. Ты удивишься, куда уходят деньги!', color: 'bg-destructive/20', image: story15Img },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'Что лучше делать с карманными деньгами?',
    options: ['Потратить всё сразу', 'Часть потратить, часть отложить', 'Спрятать под подушку', 'Отдать другу'],
    correctIndex: 1,
    explanation: 'Правильно! Лучше часть потратить на нужное, а часть отложить в копилку для большой мечты.'
  },
  {
    question: 'Что такое "копилка" в банке?',
    options: ['Стеклянная банка', 'Специальный счёт для накоплений', 'Место где печатают деньги', 'Игрушка'],
    correctIndex: 1,
    explanation: 'Верно! Копилка в банке — это специальный счёт, где деньги не только хранятся, но и растут благодаря процентам.'
  },
  {
    question: 'Зачем ставить финансовую цель?',
    options: ['Это не нужно', 'Чтобы родители были довольны', 'Чтобы знать сколько и зачем копить', 'Чтобы похвастаться'],
    correctIndex: 2,
    explanation: 'Точно! Цель помогает понять, сколько нужно откладывать и мотивирует копить.'
  },
  {
    question: 'Что значит "жить по средствам"?',
    options: ['Не тратить вообще', 'Тратить не больше, чем получаешь', 'Тратить всё сразу', 'Брать в долг'],
    correctIndex: 1,
    explanation: 'Правильно! Это значит тратить не больше, чем у тебя есть. Важное правило для всех!'
  },
  {
    question: 'Что такое проценты по вкладу?',
    options: ['Штраф банка', 'Деньги, которые банк платит тебе за хранение', 'Комиссия за перевод', 'Цена карты'],
    correctIndex: 1,
    explanation: 'Верно! Банк платит тебе проценты за то, что ты хранишь деньги у него. Твои деньги растут!'
  },
];

export const achievements: Achievement[] = [
  { id: 'no_cash', emoji: '💳', name: 'Безналичный герой', description: 'Не снимай наличные 30 дней', condition: 'no_cash_30_days', unlockedMessage: 'Ты целый месяц обходился без наличных! Круто!' },
  { id: 'saver', emoji: '🏦', name: 'Мастер накоплений', description: 'Накопи 100 000 сум в копилках', condition: 'savings_100k', unlockedMessage: 'Ты накопил больше 100 000 сум! Отличная работа!' },
  { id: 'daily_login', emoji: '📱', name: 'Верный друг', description: 'Заходи в приложение 7 дней подряд', condition: 'login_streak_7', unlockedMessage: 'Целая неделя с нами! Ты настоящий финансовый герой!' },
  { id: 'customizer', emoji: '🎨', name: 'Дизайнер', description: 'Настрой приложение под себя', condition: 'app_customized', unlockedMessage: 'Ты сделал приложение своим! Красота!' },
  { id: 'first_goal', emoji: '🎯', name: 'Мечтатель', description: 'Создай свою первую копилку', condition: 'first_goal_created', unlockedMessage: 'Первый шаг к мечте сделан! Продолжай!' },
  { id: 'quiz_master', emoji: '🧠', name: 'Умник', description: 'Ответь правильно на все вопросы квиза', condition: 'quiz_perfect', unlockedMessage: 'Все ответы верные! Ты настоящий финансовый гений!' },
];

// Generate 3 months of transactions for a kid getting ~400k/month
const generateTransactions = (): Transaction[] => {
  const txs: Transaction[] = [];
  const months = [
    { m: '02', y: '2026', days: 28 },
    { m: '01', y: '2026', days: 31 },
    { m: '12', y: '2025', days: 31 },
  ];

  const incomeTemplates = [
    { description: 'От мамы', source: 'Мама', icon: '💝' },
    { description: 'От папы', source: 'Папа', icon: '💰' },
    { description: 'Подарок от бабушки', source: 'Бабушка', icon: '🎁' },
    { description: 'Подарок от дедушки', source: 'Дедушка', icon: '🎁' },
    { description: 'За хорошие оценки', source: 'Мама', icon: '⭐' },
  ];

  const expenseTemplates = [
    { description: 'Мороженое', source: 'Магазин', icon: '🍦', category: 'food' },
    { description: 'Школьный магазин', source: 'Школа', icon: '📚', category: 'education' },
    { description: 'Сок и булочка', source: 'Базар', icon: '🧃', category: 'food' },
    { description: 'Фаст-фуд', source: 'Кафе', icon: '🍔', category: 'food' },
    { description: 'Игры', source: 'App Store', icon: '🎮', category: 'entertainment' },
    { description: 'Канцтовары', source: 'Магазин', icon: '✏️', category: 'education' },
    { description: 'Транспорт', source: 'Метро', icon: '🚌', category: 'transport' },
    { description: 'Снеки', source: 'Магазин', icon: '🍿', category: 'food' },
    { description: 'Напитки', source: 'Магазин', icon: '🥤', category: 'food' },
    { description: 'Подарок другу', source: 'Магазин', icon: '🎁', category: 'other' },
  ];

  let id = 1;
  months.forEach(({ m, days }) => {
    // 2-3 incomes per month (~400k total)
    const incomeCount = 2 + Math.floor(Math.random() * 2);
    const incomeAmounts = [200000, 150000, 50000, 100000, 30000];
    for (let i = 0; i < incomeCount; i++) {
      const template = incomeTemplates[i % incomeTemplates.length];
      const day = String(Math.floor(Math.random() * days) + 1).padStart(2, '0');
      txs.push({
        id: String(id++),
        amount: incomeAmounts[i % incomeAmounts.length],
        type: 'income',
        category: 'transfer',
        ...template,
        date: `${day}.${m}`,
      });
    }

    // 6-8 expenses per month
    const expenseCount = 6 + Math.floor(Math.random() * 3);
    for (let i = 0; i < expenseCount; i++) {
      const template = expenseTemplates[i % expenseTemplates.length];
      const day = String(Math.floor(Math.random() * days) + 1).padStart(2, '0');
      const amounts = [5000, 8000, 12000, 15000, 3000, 7000, 10000, 20000];
      txs.push({
        id: String(id++),
        amount: -amounts[i % amounts.length],
        type: 'expense',
        ...template,
        date: `${day}.${m}`,
      });
    }

    // 1-2 savings per month
    txs.push({
      id: String(id++),
      amount: -20000,
      type: 'savings',
      category: 'savings',
      description: 'На велосипед',
      source: 'Копилка',
      date: `15.${m}`,
      icon: '🚲',
    });

    // 1 cash withdrawal
    txs.push({
      id: String(id++),
      amount: -3000,
      type: 'cash',
      category: 'cash',
      description: 'Снятие наличных',
      source: 'Банкомат',
      date: `20.${m}`,
      icon: '🏧',
    });
  });

  // Sort by date descending (month then day)
  return txs.sort((a, b) => {
    const [da, ma] = a.date.split('.').map(Number);
    const [db, mb] = b.date.split('.').map(Number);
    if (ma !== mb) return mb - ma;
    return db - da;
  });
};

export const mockTransactions: Transaction[] = generateTransactions();

export const mockGoals: Goal[] = [
  { id: '1', name: 'Велосипед', targetAmount: 500000, currentAmount: 180000, reason: 'Кататься с друзьями по парку!', emoji: '🚲', createdAt: '2025-01-15', deadline: '2026-06-01' },
  { id: '2', name: 'Наушники', targetAmount: 150000, currentAmount: 90000, reason: 'Слушать музыку на прогулке', emoji: '🎧', createdAt: '2025-02-01', deadline: '2026-04-01' },
];

export const expenseCategories: Record<string, { label: string; emoji: string; color: string }> = {
  food: { label: 'Еда', emoji: '🍔', color: '#FF6B6B' },
  education: { label: 'Учёба', emoji: '📚', color: '#4ECDC4' },
  entertainment: { label: 'Развлечения', emoji: '🎮', color: '#45B7D1' },
  transport: { label: 'Транспорт', emoji: '🚌', color: '#96CEB4' },
  cash: { label: 'Наличные', emoji: '🏧', color: '#FFEAA7' },
  savings: { label: 'Копилки', emoji: '🔐', color: '#DDA0DD' },
  transfer: { label: 'Переводы', emoji: '💸', color: '#98D8C8' },
  other: { label: 'Другое', emoji: '📦', color: '#B8B8B8' },
};

export const goalEmojis = ['🚲', '🎧', '📱', '🎮', '⚽', '🎸', '📷', '🎨', '🛹', '🎁', '👟', '🧸'];

export type AppTheme = 'calm' | 'playful' | 'anime' | 'national';

export const appThemes: { key: AppTheme; emoji: string; name: string }[] = [
  { key: 'calm', emoji: '🌿', name: 'Спокойная' },
  { key: 'playful', emoji: '🎉', name: 'Игривая' },
  { key: 'anime', emoji: '⚡', name: 'Аниме' },
  { key: 'national', emoji: '🏛️', name: 'Национальная' },
];
