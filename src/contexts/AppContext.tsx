import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Goal, Transaction, mockGoals, mockTransactions } from '@/data/mockData';

interface AppState {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  userName: string;
  avatarId: string;
  balance: number;
  transactions: Transaction[];
  goals: Goal[];
}

interface AppContextType extends AppState {
  login: () => void;
  logout: () => void;
  completeOnboarding: (name: string, avatarId: string) => void;
  addGoal: (goal: Omit<Goal, 'id' | 'currentAmount' | 'createdAt'>) => void;
  contributeToGoal: (goalId: string, amount: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('app-state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return {
      isAuthenticated: false,
      isOnboarded: false,
      userName: '',
      avatarId: '1',
      balance: 230000,
      transactions: mockTransactions,
      goals: mockGoals,
    };
  });

  const save = (newState: AppState) => {
    setState(newState);
    localStorage.setItem('app-state', JSON.stringify(newState));
  };

  const login = useCallback(() => {
    save({ ...state, isAuthenticated: true });
  }, [state]);

  const logout = useCallback(() => {
    localStorage.removeItem('app-state');
    setState({
      isAuthenticated: false,
      isOnboarded: false,
      userName: '',
      avatarId: '1',
      balance: 230000,
      transactions: mockTransactions,
      goals: mockGoals,
    });
  }, []);

  const completeOnboarding = useCallback((name: string, avatarId: string) => {
    const newState = { ...state, isOnboarded: true, userName: name, avatarId };
    save(newState);
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
      icon: state.goals.find(g => g.id === goalId)?.emoji || '🐷',
    };
    const newState = {
      ...state,
      balance: state.balance - amount,
      goals: newGoals,
      transactions: [newTx, ...state.transactions],
    };
    save(newState);
  }, [state]);

  return (
    <AppContext.Provider value={{ ...state, login, logout, completeOnboarding, addGoal, contributeToGoal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
