import { useApp } from '@/contexts/AppContext';
import { Navigate } from 'react-router-dom';
import Home from './Home';

const Index = () => {
  const { isAuthenticated, isOnboarded } = useApp();

  if (!isAuthenticated) return <Navigate to="/welcome" replace />;
  if (!isOnboarded) return <Navigate to="/onboarding" replace />;

  return <Home />;
};

export default Index;
