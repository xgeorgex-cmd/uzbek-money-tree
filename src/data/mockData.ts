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
}

export const avatars: Avatar[] = [
  { id: '1', emoji: '🦊', name: 'Лисёнок' },
  { id: '2', emoji: '🐼', name: 'Панда' },
  { id: '3', emoji: '🦁', name: 'Львёнок' },
  { id: '4', emoji: '🐱', name: 'Котик' },
  { id: '5', emoji: '🐰', name: 'Зайка' },
];

export const mockStories: Story[] = [
  { id: '1', emoji: '💡', title: 'Совет дня', content: 'Перед покупкой подожди 24 часа — может, передумаешь!', color: 'bg-savings/20' },
  { id: '2', emoji: '🏦', title: 'Что такое банк?', content: 'Банк — это место, где хранят деньги и дают их в долг другим людям', color: 'bg-primary/20' },
  { id: '3', emoji: '🌍', title: 'Деньги мира', content: 'В Японии на монетах изображены цветы, а в Австралии — животные!', color: 'bg-success/20' },
  { id: '4', emoji: '📊', title: 'Правило 50/30/20', content: '50% на нужное, 30% на желания, 20% — в копилку!', color: 'bg-accent/20' },
  { id: '5', emoji: '🎯', title: 'Цель = мотивация', content: 'Люди, которые ставят цели, копят в 3 раза быстрее!', color: 'bg-destructive/20' },
];

export const mockTransactions: Transaction[] = [
  { id: '1', amount: 50000, type: 'income', category: 'transfer', description: 'От мамы', source: 'Мама', date: '15.02', icon: '💝' },
  { id: '2', amount: -12000, type: 'expense', category: 'food', description: 'Мороженое', source: 'Магазин', date: '14.02', icon: '🍦' },
  { id: '3', amount: -8000, type: 'expense', category: 'education', description: 'Школьный магазин', source: 'Школа', date: '13.02', icon: '📚' },
  { id: '4', amount: 100000, type: 'income', category: 'transfer', description: 'От папы', source: 'Папа', date: '12.02', icon: '💰' },
  { id: '5', amount: -20000, type: 'savings', category: 'savings', description: 'На велосипед', source: 'Копилка', date: '11.02', icon: '🚲' },
  { id: '6', amount: -5000, type: 'expense', category: 'food', description: 'Сок и булочка', source: 'Базар', date: '10.02', icon: '🧃' },
  { id: '7', amount: 25000, type: 'income', category: 'transfer', description: 'Подарок от дедушки', source: 'Дедушка', date: '09.02', icon: '🎁' },
  { id: '8', amount: -15000, type: 'expense', category: 'food', description: 'Фаст-фуд', source: 'Кафе', date: '08.02', icon: '🍔' },
  { id: '9', amount: -3000, type: 'cash', category: 'cash', description: 'Снятие наличных', source: 'Банкомат', date: '07.02', icon: '🏧' },
  { id: '10', amount: -7000, type: 'expense', category: 'entertainment', description: 'Игры', source: 'App Store', date: '06.02', icon: '🎮' },
];

export const mockGoals: Goal[] = [
  { id: '1', name: 'Велосипед', targetAmount: 500000, currentAmount: 180000, reason: 'Кататься с друзьями по парку!', emoji: '🚲', createdAt: '2025-01-15' },
  { id: '2', name: 'Наушники', targetAmount: 150000, currentAmount: 90000, reason: 'Слушать музыку на прогулке', emoji: '🎧', createdAt: '2025-02-01' },
];

export const expenseCategories: Record<string, { label: string; emoji: string; color: string }> = {
  food: { label: 'Еда', emoji: '🍔', color: '#FF6B6B' },
  education: { label: 'Учёба', emoji: '📚', color: '#4ECDC4' },
  entertainment: { label: 'Развлечения', emoji: '🎮', color: '#45B7D1' },
  transport: { label: 'Транспорт', emoji: '🚌', color: '#96CEB4' },
  cash: { label: 'Наличные', emoji: '🏧', color: '#FFEAA7' },
  savings: { label: 'Копилки', emoji: '🐷', color: '#DDA0DD' },
  transfer: { label: 'Переводы', emoji: '💸', color: '#98D8C8' },
  other: { label: 'Другое', emoji: '📦', color: '#B8B8B8' },
};

export const goalEmojis = ['🚲', '🎧', '📱', '🎮', '⚽', '🎸', '📷', '🎨', '🛹', '🎁', '👟', '🧸'];
