import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Goal, Transaction, mockGoals, mockTransactions, AppTheme } from '@/data/mockData';

interface AppState {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  userName: string;
  avatarId: string;
  customPhoto: string | null;
  balance: number;
  transactions: Transaction[];
  goals: Goal[];
  viewedStories: string[];
  theme: AppTheme;
  quizScore: number;
  lastQuizScore: number;
  loginStreak: number;
  appCustomized: boolean;
}

interface AppContextType extends AppState {
  login: () => void;
  logout: () => void;
  completeOnboarding: (name: string, avatarId: string, customPhoto?: string | null) => void;
  updateAvatar: (avatarId: string, customPhoto?: string | null) => void;
  addGoal: (goal: Omit<Goal, 'id' | 'currentAmount' | 'createdAt'>) => void;
  contributeToGoal: (goalId: string, amount: number) => void;
  markStoryViewed: (storyId: string) => void;
  setTheme: (theme: AppTheme) => void;
  setQuizScore: (score: number) => void;
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
          theme: parsed.theme || 'calm',
          customPhoto: parsed.customPhoto || null,
          quizScore: parsed.quizScore || 0,
          lastQuizScore: parsed.lastQuizScore || 0,
          loginStreak: parsed.loginStreak || 0,
          appCustomized: parsed.appCustomized || false,
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
      transactions: mockTransactions,
      goals: mockGoals,
      viewedStories: [],
      theme: 'calm' as AppTheme,
      quizScore: 0,
      lastQuizScore: 0,
      loginStreak: 0,
      appCustomized: false,
    };
  });

  // Apply theme class to document
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

  const login = useCallback(() => {
    save({ ...state, isAuthenticated: true, loginStreak: state.loginStreak + 1 });
  }, [state]);

  const logout = useCallback(() => {
    localStorage.removeItem('app-state');
    document.documentElement.classList.remove('theme-playful', 'theme-anime', 'theme-national');
    setState({
      isAuthenticated: false,
      isOnboarded: false,
      userName: '',
      avatarId: '1',
      customPhoto: null,
      balance: 230000,
      transactions: mockTransactions,
      goals: mockGoals,
      viewedStories: [],
      theme: 'calm',
      quizScore: 0,
      lastQuizScore: 0,
      loginStreak: 0,
      appCustomized: false,
    });
  }, []);

  const completeOnboarding = useCallback((name: string, avatarId: string, customPhoto?: string | null) => {
    const newState = { ...state, isOnboarded: true, userName: name, avatarId, customPhoto: customPhoto || null };
    save(newState);
  }, [state]);

  const updateAvatar = useCallback((avatarId: string, customPhoto?: string | null) => {
    save({ ...state, avatarId, customPhoto: customPhoto || null });
  }, [state]);

  const addGoal = useCallback((goal: Omit<Goal, 'id' | 'currentAmount' | 'createdAt'>) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
      currentAmount: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const newState = { ...state, goals: [...state.goals, newGoal] };
    save(newState);
  }, [state]);

  const contributeToGoal = useCallback((goalId: string, amount: number) => {
    if (amount > state.balance || amount <= 0) return;
    const newGoals = state.goals.map(g =>
      g.id === goalId ? { ...g, currentAmount: Math.min(g.currentAmount + amount, g.targetAmount) } : g
    );
    const newTx: Transaction = {
      id: Date.now().toString(),
      amount: -amount,
      type: 'savings',
      description: `На ${state.goals.find(g => g.id === goalId)?.name || 'копилку'}`,
      source: 'Копилка',
      date: `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}`,
      icon: state.goals.find(g => g.id === goalId)?.emoji || '🔐',
    };
    const newState = {
      ...state,
      balance: state.balance - amount,
      goals: newGoals,
      transactions: [newTx, ...state.transactions],
    };
    save(newState);
  }, [state]);

  const markStoryViewed = useCallback((storyId: string) => {
    if (!state.viewedStories.includes(storyId)) {
      save({ ...state, viewedStories: [...state.viewedStories, storyId] });
    }
  }, [state]);

  const setTheme = useCallback((theme: AppTheme) => {
    save({ ...state, theme, appCustomized: true });
  }, [state]);

  const setQuizScore = useCallback((score: number) => {
    save({ ...state, lastQuizScore: state.quizScore, quizScore: score });
  }, [state]);

  return (
    <AppContext.Provider value={{
      ...state, login, logout, completeOnboarding, updateAvatar, addGoal,
      contributeToGoal, markStoryViewed, setTheme, setQuizScore
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
