export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense' | 'savings';
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

export const avatars: Avatar[] = [
  { id: '1', emoji: '🦊', name: 'Лисёнок' },
  { id: '2', emoji: '🐼', name: 'Панда' },
  { id: '3', emoji: '🦁', name: 'Львёнок' },
  { id: '4', emoji: '🐱', name: 'Котик' },
  { id: '5', emoji: '🐰', name: 'Зайка' },
];

export const mockTransactions: Transaction[] = [
  { id: '1', amount: 50000, type: 'income', description: 'От мамы', source: 'Мама', date: '15.02', icon: '💝' },
  { id: '2', amount: -12000, type: 'expense', description: 'Мороженое', source: 'Магазин', date: '14.02', icon: '🍦' },
  { id: '3', amount: -8000, type: 'expense', description: 'Школьный магазин', source: 'Школа', date: '13.02', icon: '📚' },
  { id: '4', amount: 100000, type: 'income', description: 'От папы', source: 'Папа', date: '12.02', icon: '💰' },
  { id: '5', amount: -20000, type: 'savings', description: 'На велосипед', source: 'Копилка', date: '11.02', icon: '🚲' },
  { id: '6', amount: -5000, type: 'expense', description: 'Сок и булочка', source: 'Базар', date: '10.02', icon: '🧃' },
  { id: '7', amount: 25000, type: 'income', description: 'Подарок от дедушки', source: 'Дедушка', date: '09.02', icon: '🎁' },
];

export const mockGoals: Goal[] = [
  { id: '1', name: 'Велосипед', targetAmount: 500000, currentAmount: 180000, reason: 'Кататься с друзьями по парку!', emoji: '🚲', createdAt: '2025-01-15' },
  { id: '2', name: 'Наушники', targetAmount: 150000, currentAmount: 90000, reason: 'Слушать музыку на прогулке', emoji: '🎧', createdAt: '2025-02-01' },
];

export const goalEmojis = ['🚲', '🎧', '📱', '🎮', '⚽', '🎸', '📷', '🎨', '🛹', '🎁', '👟', '🧸'];
