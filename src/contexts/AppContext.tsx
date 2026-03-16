import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Goal, Transaction, mockGoals, mockTransactions, AppTheme, migrateTransaction } from '@/data/mockData';

interface AppState {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  userName: string;
  avatarId: string;
  customPhoto: string | null;
  cardNumber: string;
  balance: number;
  transactions: Transaction[];
  goals: Goal[];
  viewedStories: string[];
  likedStories: string[];
  dislikedStories: string[];
  theme: AppTheme;
  quizScore: number;
  lastQuizScore: number;
  loginStreak: number;
  appCustomized: boolean;
}

interface AppContextType extends AppState {
  login: (cardNumber?: string) => void;
  logout: () => void;
  completeOnboarding: (name: string, avatarId: string, customPhoto?: string | null) => void;
  updateAvatar: (avatarId: string, customPhoto?: string | null) => void;
  addGoal: (goal: Omit<Goal, 'id' | 'currentAmount' | 'createdAt'>) => void;
  deleteGoal: (goalId: string) => void;
  contributeToGoal: (goalId: string, amount: number) => void;
  withdrawFromGoal: (goalId: string, amount: number) => void;
  markStoryViewed: (storyId: string) => void;
  likeStory: (storyId: string) => void;
  dislikeStory: (storyId: string) => void;
  setTheme: (theme: AppTheme) => void;
  setQuizScore: (score: number) => void;
  addQuizReward: (amount: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('app-state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          viewedStories: parsed.viewedStories || [],
          likedStories: parsed.likedStories || [],
          dislikedStories: parsed.dislikedStories || [],
          theme: parsed.theme || 'calm',
          customPhoto: parsed.customPhoto || null,
          quizScore: parsed.quizScore || 0,
          lastQuizScore: parsed.lastQuizScore || 0,
          loginStreak: parsed.loginStreak || 0,
          appCustomized: parsed.appCustomized || false,
          cardNumber: parsed.cardNumber || '',
        };
      } catch {}
    }
    return {
      isAuthenticated: false,
      isOnboarded: false,
      userName: '',
      avatarId: '1',
      customPhoto: null,
      balance: 230000,
      cardNumber: '',
      transactions: mockTransactions,
      goals: mockGoals,
      viewedStories: [],
      likedStories: [],
      dislikedStories: [],
      theme: 'calm' as AppTheme,
      quizScore: 0,
      lastQuizScore: 0,
      loginStreak: 0,
      appCustomized: false,
    };
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-playful', 'theme-anime', 'theme-national');
    if (state.theme !== 'calm') {
      root.classList.add(`theme-${state.theme}`);
    }
  }, [state.theme]);

  const save = (newState: AppState) => {
    setState(newState);
    localStorage.setItem('app-state', JSON.stringify(newState));
  };

  const login = useCallback((cardNum?: string) => {
    setState(prev => {
      const newState = { ...prev, isAuthenticated: true, loginStreak: prev.loginStreak + 1, cardNumber: cardNum || prev.cardNumber };
      localStorage.setItem('app-state', JSON.stringify(newState));
      return newState;
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('app-state');
    document.documentElement.classList.remove('theme-playful', 'theme-anime', 'theme-national');
    setState({
      isAuthenticated: false, isOnboarded: false, userName: '', avatarId: '1', customPhoto: null,
      cardNumber: '', balance: 230000, transactions: mockTransactions, goals: mockGoals, viewedStories: [],
      likedStories: [], dislikedStories: [],
      theme: 'calm', quizScore: 0, lastQuizScore: 0, loginStreak: 0, appCustomized: false,
    });
  }, []);

  const completeOnboarding = useCallback((name: string, avatarId: string, customPhoto?: string | null) => {
    save({ ...state, isOnboarded: true, userName: name, avatarId, customPhoto: customPhoto || null });
  }, [state]);

  const updateAvatar = useCallback((avatarId: string, customPhoto?: string | null) => {
    save({ ...state, avatarId, customPhoto: customPhoto || null });
  }, [state]);

  const addGoal = useCallback((goal: Omit<Goal, 'id' | 'currentAmount' | 'createdAt'>) => {
    const newGoal: Goal = { ...goal, id: Date.now().toString(), currentAmount: 0, createdAt: new Date().toISOString().split('T')[0] };
    save({ ...state, goals: [...state.goals, newGoal] });
  }, [state]);

  const deleteGoal = useCallback((goalId: string) => {
    const goal = state.goals.find(g => g.id === goalId);
    if (!goal) return;
    const returnAmount = goal.currentAmount;
    const newGoals = state.goals.filter(g => g.id !== goalId);
    const newTx: Transaction = {
      id: Date.now().toString(), amount: returnAmount, type: 'income',
      description: `Закрытие копилки «${goal.name}»`,
      descKey: 'txClosePiggy',
      source: 'Копилка',
      sourceKey: 'txPiggyBank',
      date: `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}`,
      icon: goal.emoji,
    };
    const txs = returnAmount > 0 ? [newTx, ...state.transactions] : state.transactions;
    save({ ...state, balance: state.balance + returnAmount, goals: newGoals, transactions: txs });
  }, [state]);

  const contributeToGoal = useCallback((goalId: string, amount: number) => {
    if (amount > state.balance || amount <= 0) return;
    const newGoals = state.goals.map(g =>
      g.id === goalId ? { ...g, currentAmount: Math.min(g.currentAmount + amount, g.targetAmount) } : g
    );
    const newTx: Transaction = {
      id: Date.now().toString(), amount: -amount, type: 'savings',
      description: `На ${state.goals.find(g => g.id === goalId)?.name || 'копилку'}`,
      descKey: 'txToPiggy',
      source: 'Копилка',
      sourceKey: 'txPiggyBank',
      date: `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}`,
      icon: state.goals.find(g => g.id === goalId)?.emoji || '🔐',
    };
    save({ ...state, balance: state.balance - amount, goals: newGoals, transactions: [newTx, ...state.transactions] });
  }, [state]);

  const withdrawFromGoal = useCallback((goalId: string, amount: number) => {
    const goal = state.goals.find(g => g.id === goalId);
    if (!goal || amount <= 0 || amount > goal.currentAmount) return;
    const newGoals = state.goals.map(g =>
      g.id === goalId ? { ...g, currentAmount: g.currentAmount - amount } : g
    );
    const newTx: Transaction = {
      id: Date.now().toString(), amount: amount, type: 'income',
      description: `Из копилки «${goal.name}»`,
      descKey: 'txFromPiggy',
      source: 'Копилка',
      sourceKey: 'txPiggyBank',
      date: `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}`,
      icon: goal.emoji,
    };
    save({ ...state, balance: state.balance + amount, goals: newGoals, transactions: [newTx, ...state.transactions] });
  }, [state]);

  const markStoryViewed = useCallback((storyId: string) => {
    if (!state.viewedStories.includes(storyId)) {
      save({ ...state, viewedStories: [...state.viewedStories, storyId] });
    }
  }, [state]);

  const likeStory = useCallback((storyId: string) => {
    const liked = state.likedStories.includes(storyId)
      ? state.likedStories.filter(id => id !== storyId)
      : [...state.likedStories, storyId];
    const disliked = state.dislikedStories.filter(id => id !== storyId);
    save({ ...state, likedStories: liked, dislikedStories: disliked });
  }, [state]);

  const dislikeStory = useCallback((storyId: string) => {
    const disliked = state.dislikedStories.includes(storyId)
      ? state.dislikedStories.filter(id => id !== storyId)
      : [...state.dislikedStories, storyId];
    const liked = state.likedStories.filter(id => id !== storyId);
    save({ ...state, likedStories: liked, dislikedStories: disliked });
  }, [state]);

  const setTheme = useCallback((theme: AppTheme) => {
    save({ ...state, theme, appCustomized: true });
  }, [state]);

  const setQuizScore = useCallback((score: number) => {
    save({ ...state, lastQuizScore: state.quizScore, quizScore: score });
  }, [state]);

  const addQuizReward = useCallback((amount: number) => {
    if (amount <= 0) return;
    const newTx: Transaction = {
      id: Date.now().toString(), amount: amount, type: 'income',
      description: 'Награда за квест 🧠',
      descKey: 'txQuizReward',
      source: 'Квест',
      sourceKey: 'txQuest',
      date: `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}`,
      icon: '🏆',
    };
    save({ ...state, balance: state.balance + amount, transactions: [newTx, ...state.transactions] });
  }, [state]);

  return (
    <AppContext.Provider value={{
      ...state, login, logout, completeOnboarding, updateAvatar, addGoal, deleteGoal,
      contributeToGoal, withdrawFromGoal, markStoryViewed, likeStory, dislikeStory,
      setTheme, setQuizScore, addQuizReward
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
