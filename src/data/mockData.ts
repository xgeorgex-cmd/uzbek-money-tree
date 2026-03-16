export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense' | 'savings' | 'cash';
  category?: string;
  description: string;
  source: string;
  date: string; // DD.MM
  icon: string;
  descKey?: string;
  sourceKey?: string;
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
  nameKey?: string;
  reasonKey?: string;
}

// Helper to resolve translated text for transactions and goals
type TFunc = (key: any) => string;
export const txDesc = (tx: Transaction, t: TFunc) => tx.descKey ? t(tx.descKey) : tx.description;
export const txSource = (tx: Transaction, t: TFunc) => tx.sourceKey ? t(tx.sourceKey) : tx.source;
export const goalName = (g: Goal, t: TFunc) => g.nameKey ? t(g.nameKey) : g.name;
export const goalReason = (g: Goal, t: TFunc) => g.reasonKey ? t(g.reasonKey) : g.reason;

export interface Avatar {
  id: string;
  emoji: string;
  nameKey: string;
}

export interface Story {
  id: string;
  emoji: string;
  titleKey: string;
  contentKey: string;
  color: string;
  type?: 'info' | 'quiz';
  image?: string;
}

export interface QuizQuestion {
  questionKey: string;
  optionKeys: string[];
  correctIndex: number;
  explanationKey: string;
}

export interface Achievement {
  id: string;
  emoji: string;
  nameKey: string;
  descriptionKey: string;
  condition: string;
  unlockedMessageKey: string;
}

export const avatars: Avatar[] = [
  { id: '1', emoji: '🦊', nameKey: 'avatarFox' },
  { id: '2', emoji: '🐼', nameKey: 'avatarPanda' },
  { id: '3', emoji: '🦁', nameKey: 'avatarLion' },
  { id: '4', emoji: '🐱', nameKey: 'avatarCat' },
  { id: '5', emoji: '🐰', nameKey: 'avatarBunny' },
  { id: '6', emoji: '🐻', nameKey: 'avatarBear' },
  { id: '7', emoji: '🦄', nameKey: 'avatarUnicorn' },
  { id: '8', emoji: '🐸', nameKey: 'avatarFrog' },
  { id: '9', emoji: '🦋', nameKey: 'avatarButterfly' },
  { id: '10', emoji: '🐨', nameKey: 'avatarKoala' },
  { id: '11', emoji: '🦉', nameKey: 'avatarOwl' },
  { id: '12', emoji: '🐧', nameKey: 'avatarPenguin' },
  { id: '13', emoji: '🦈', nameKey: 'avatarShark' },
  { id: '14', emoji: '🐯', nameKey: 'avatarTiger' },
  { id: '15', emoji: '🦜', nameKey: 'avatarParrot' },
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
import humoStickerImg from '@/assets/humo-sticker.jpeg';

export const mockStories: Story[] = [
  { id: '1', emoji: '💡', titleKey: 'storyTipTitle', contentKey: 'storyTipContent', color: 'bg-savings/20', image: story1Img },
  { id: '2', emoji: '🧠', titleKey: 'storyQuizTitle', contentKey: 'storyQuizContent', color: 'bg-primary/20', type: 'quiz', image: story2Img },
  { id: '16', emoji: '💳', titleKey: 'storyHumoTitle', contentKey: 'storyHumoContent', color: 'bg-primary/20', image: humoStickerImg },
  { id: '3', emoji: '🏦', titleKey: 'storyBankTitle', contentKey: 'storyBankContent', color: 'bg-primary/20', image: story3Img },
  { id: '4', emoji: '🌍', titleKey: 'storyMoneyWorldTitle', contentKey: 'storyMoneyWorldContent', color: 'bg-success/20', image: story4Img },
  { id: '5', emoji: '📊', titleKey: 'storyRuleTitle', contentKey: 'storyRuleContent', color: 'bg-accent/20', image: story5Img },
  { id: '6', emoji: '🎯', titleKey: 'storyGoalTitle', contentKey: 'storyGoalContent', color: 'bg-destructive/20', image: story6Img },
  { id: '7', emoji: '🎮', titleKey: 'storyCoinsTitle', contentKey: 'storyCoinsContent', color: 'bg-primary/20', image: story7Img },
  { id: '8', emoji: '🍕', titleKey: 'storyPizzaTitle', contentKey: 'storyPizzaContent', color: 'bg-accent/20', image: story8Img },
  { id: '9', emoji: '🦸', titleKey: 'storyHeroTitle', contentKey: 'storyHeroContent', color: 'bg-success/20', image: story9Img },
  { id: '10', emoji: '🎪', titleKey: 'storyFunFactTitle', contentKey: 'storyFunFactContent', color: 'bg-savings/20', image: story10Img },
  { id: '11', emoji: '🌟', titleKey: 'storyGreatTitle', contentKey: 'storyGreatContent', color: 'bg-primary/20', image: story11Img },
  { id: '12', emoji: '🎨', titleKey: 'storyDrawTitle', contentKey: 'storyDrawContent', color: 'bg-accent/20', image: story12Img },
  { id: '13', emoji: '🤝', titleKey: 'storyShareTitle', contentKey: 'storyShareContent', color: 'bg-success/20', image: story13Img },
  { id: '14', emoji: '📱', titleKey: 'storyDigitalTitle', contentKey: 'storyDigitalContent', color: 'bg-savings/20', image: story14Img },
  { id: '15', emoji: '🏆', titleKey: 'storyChallengeTitle', contentKey: 'storyChallengeContent', color: 'bg-destructive/20', image: story15Img },
];

export const quizQuestions: QuizQuestion[] = [
  { questionKey: 'quizQ1', optionKeys: ['quizQ1a', 'quizQ1b', 'quizQ1c', 'quizQ1d'], correctIndex: 1, explanationKey: 'quizQ1exp' },
  { questionKey: 'quizQ2', optionKeys: ['quizQ2a', 'quizQ2b', 'quizQ2c', 'quizQ2d'], correctIndex: 1, explanationKey: 'quizQ2exp' },
  { questionKey: 'quizQ3', optionKeys: ['quizQ3a', 'quizQ3b', 'quizQ3c', 'quizQ3d'], correctIndex: 2, explanationKey: 'quizQ3exp' },
  { questionKey: 'quizQ4', optionKeys: ['quizQ4a', 'quizQ4b', 'quizQ4c', 'quizQ4d'], correctIndex: 1, explanationKey: 'quizQ4exp' },
  { questionKey: 'quizQ5', optionKeys: ['quizQ5a', 'quizQ5b', 'quizQ5c', 'quizQ5d'], correctIndex: 1, explanationKey: 'quizQ5exp' },
];

export const achievements: Achievement[] = [
  { id: 'no_cash', emoji: '💳', nameKey: 'achNoCashName', descriptionKey: 'achNoCashDesc', condition: 'no_cash_30_days', unlockedMessageKey: 'achNoCashMsg' },
  { id: 'saver', emoji: '🏦', nameKey: 'achSaverName', descriptionKey: 'achSaverDesc', condition: 'savings_100k', unlockedMessageKey: 'achSaverMsg' },
  { id: 'daily_login', emoji: '📱', nameKey: 'achDailyName', descriptionKey: 'achDailyDesc', condition: 'login_streak_7', unlockedMessageKey: 'achDailyMsg' },
  { id: 'customizer', emoji: '🎨', nameKey: 'achCustomizerName', descriptionKey: 'achCustomizerDesc', condition: 'app_customized', unlockedMessageKey: 'achCustomizerMsg' },
  { id: 'first_goal', emoji: '🎯', nameKey: 'achDreamerName', descriptionKey: 'achDreamerDesc', condition: 'first_goal_created', unlockedMessageKey: 'achDreamerMsg' },
  { id: 'quiz_master', emoji: '🧠', nameKey: 'achQuizName', descriptionKey: 'achQuizDesc', condition: 'quiz_perfect', unlockedMessageKey: 'achQuizMsg' },
];

// Translation helper type
type TFunc = (key: any) => string;

// Income templates with translation keys
const incomeTemplateKeys = [
  { descKey: 'txFromMom', sourceKey: 'contactMom', icon: '💝' },
  { descKey: 'txFromDad', sourceKey: 'contactDad', icon: '💰' },
  { descKey: 'txFromGrandma', sourceKey: 'contactGrandma', icon: '🎁' },
  { descKey: 'txFromGrandpa', sourceKey: 'contactGrandpa', icon: '🎁' },
  { descKey: 'txGoodGrades', sourceKey: 'contactMom', icon: '⭐' },
];

const expenseTemplateKeys = [
  { descKey: 'txIceCream', sourceKey: 'txSourceShop', icon: '🍦', category: 'food' },
  { descKey: 'txSchoolShop', sourceKey: 'txSourceSchool', icon: '📚', category: 'education' },
  { descKey: 'txJuiceBun', sourceKey: 'txSourceBazaar', icon: '🧃', category: 'food' },
  { descKey: 'txFastFood', sourceKey: 'txSourceCafe', icon: '🍔', category: 'food' },
  { descKey: 'txGames', sourceKey: 'txSourceShop', icon: '🎮', category: 'entertainment' },
  { descKey: 'txStationery', sourceKey: 'txSourceShop', icon: '✏️', category: 'education' },
  { descKey: 'txTransport', sourceKey: 'txSourceMetro', icon: '🚌', category: 'transport' },
  { descKey: 'txSnacks', sourceKey: 'txSourceShop', icon: '🍿', category: 'food' },
  { descKey: 'txDrinks', sourceKey: 'txSourceShop', icon: '🥤', category: 'food' },
  { descKey: 'txGiftFriend', sourceKey: 'txSourceShop', icon: '🎁', category: 'other' },
];

// Deterministic transaction generation (no Math.random so it's stable per render)
const generateTransactions = (t: TFunc): Transaction[] => {
  const txs: Transaction[] = [];
  const months = [
    { m: '02', y: '2026', days: 28 },
    { m: '01', y: '2026', days: 31 },
    { m: '12', y: '2025', days: 31 },
  ];

  // Use a seeded pseudo-random for stable output
  let seed = 42;
  const nextRand = () => { seed = (seed * 16807 + 0) % 2147483647; return (seed - 1) / 2147483646; };

  let id = 1;
  months.forEach(({ m, days }) => {
    const incomeCount = 2 + Math.floor(nextRand() * 2);
    const incomeAmounts = [200000, 150000, 50000, 100000, 30000];
    for (let i = 0; i < incomeCount; i++) {
      const template = incomeTemplateKeys[i % incomeTemplateKeys.length];
      const day = String(Math.floor(nextRand() * days) + 1).padStart(2, '0');
      txs.push({
        id: String(id++),
        amount: incomeAmounts[i % incomeAmounts.length],
        type: 'income',
        category: 'transfer',
        description: t(template.descKey),
        source: t(template.sourceKey),
        icon: template.icon,
        date: `${day}.${m}`,
      });
    }

    const expenseCount = 6 + Math.floor(nextRand() * 3);
    for (let i = 0; i < expenseCount; i++) {
      const template = expenseTemplateKeys[i % expenseTemplateKeys.length];
      const day = String(Math.floor(nextRand() * days) + 1).padStart(2, '0');
      const amounts = [5000, 8000, 12000, 15000, 3000, 7000, 10000, 20000];
      txs.push({
        id: String(id++),
        amount: -amounts[i % amounts.length],
        type: 'expense',
        category: template.category,
        description: t(template.descKey),
        source: t(template.sourceKey),
        icon: template.icon,
        date: `${day}.${m}`,
      });
    }

    txs.push({
      id: String(id++),
      amount: -20000,
      type: 'savings',
      category: 'savings',
      description: t('txToBike'),
      source: t('txPiggyBank'),
      date: `15.${m}`,
      icon: '🚲',
    });

    txs.push({
      id: String(id++),
      amount: -3000,
      type: 'cash',
      category: 'cash',
      description: t('txCashWithdraw'),
      source: t('txATM'),
      date: `20.${m}`,
      icon: '🏧',
    });
  });

  return txs.sort((a, b) => {
    const [da, ma] = a.date.split('.').map(Number);
    const [db, mb] = b.date.split('.').map(Number);
    if (ma !== mb) return mb - ma;
    return db - da;
  });
};

export const getTranslatedTransactions = (t: TFunc): Transaction[] => generateTransactions(t);

// Keep a static version for backward compat (uses Russian keys as fallback)
const identity = (k: string) => k;
export const mockTransactions: Transaction[] = generateTransactions(identity);

export const getTranslatedGoals = (t: TFunc): Goal[] => [
  { id: '1', name: t('goalBike'), targetAmount: 500000, currentAmount: 180000, reason: t('goalBikeReason'), emoji: '🚲', createdAt: '2025-01-15', deadline: '2026-06-01' },
  { id: '2', name: t('goalHeadphones'), targetAmount: 150000, currentAmount: 90000, reason: t('goalHeadphonesReason'), emoji: '🎧', createdAt: '2025-02-01', deadline: '2026-04-01' },
];

export const mockGoals: Goal[] = [
  { id: '1', name: 'Велосипед', targetAmount: 500000, currentAmount: 180000, reason: 'Кататься с друзьями по парку!', emoji: '🚲', createdAt: '2025-01-15', deadline: '2026-06-01' },
  { id: '2', name: 'Наушники', targetAmount: 150000, currentAmount: 90000, reason: 'Слушать музыку на прогулке', emoji: '🎧', createdAt: '2025-02-01', deadline: '2026-04-01' },
];

export const getTranslatedCategories = (t: TFunc): Record<string, { label: string; emoji: string; color: string }> => ({
  food: { label: t('catFood'), emoji: '🍔', color: '#FF6B6B' },
  education: { label: t('catEducation'), emoji: '📚', color: '#4ECDC4' },
  entertainment: { label: t('catEntertainment'), emoji: '🎮', color: '#45B7D1' },
  transport: { label: t('catTransport'), emoji: '🚌', color: '#96CEB4' },
  cash: { label: t('catCash'), emoji: '🏧', color: '#FFEAA7' },
  savings: { label: t('catSavings'), emoji: '🔐', color: '#DDA0DD' },
  transfer: { label: t('catTransfer'), emoji: '💸', color: '#98D8C8' },
  other: { label: t('catOther'), emoji: '📦', color: '#B8B8B8' },
});

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

export const getTranslatedThemes = (t: TFunc) => [
  { key: 'calm' as const, emoji: '🌿', name: t('themeCalmName') },
  { key: 'playful' as const, emoji: '🎉', name: t('themePlayfulName') },
  { key: 'anime' as const, emoji: '⚡', name: t('themeAnimeName') },
  { key: 'national' as const, emoji: '🏛️', name: t('themeNationalName') },
];

export const goalEmojis = ['🚲', '🎧', '📱', '🎮', '⚽', '🎸', '📷', '🎨', '🛹', '🎁', '👟', '🧸'];

export type AppTheme = 'calm' | 'playful' | 'anime' | 'national';

export const appThemes: { key: AppTheme; emoji: string; name: string }[] = [
  { key: 'calm', emoji: '🌿', name: 'Спокойная' },
  { key: 'playful', emoji: '🎉', name: 'Игривая' },
  { key: 'anime', emoji: '⚡', name: 'Аниме' },
  { key: 'national', emoji: '🏛️', name: 'Национальная' },
];
