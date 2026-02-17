import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type LoginStep = 'phone' | 'code' | 'pin';

const Login = () => {
  const { t } = useLanguage();
  const { login, isOnboarded } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState<LoginStep>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [pin, setPin] = useState('');

  const handleSendCode = () => {
    if (phone.length >= 9) setStep('code');
  };

  const handleVerify = () => {
    if (code.length === 4) {
      login();
      navigate(isOnboarded ? '/home' : '/onboarding');
    }
  };

  const handlePinSubmit = () => {
    if (pin.length === 4) {
      login();
      navigate('/home');
    }
  };

  const PinDots = ({ value, max }: { value: string; max: number }) => (
    <div className="flex gap-4 justify-center my-8">
      {Array.from({ length: max }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-4 h-4 rounded-full ${i < value.length ? 'bg-primary' : 'bg-border'}`}
          animate={i < value.length ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <AnimatePresence mode="wait">
        {step === 'phone' && (
          <motion.div
            key="phone"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-sm"
          >
            <div className="text-6xl text-center mb-6">📱</div>
            <h1 className="text-2xl font-black text-center mb-2">{t('loginTitle')}</h1>
            <p className="text-muted-foreground text-center mb-8">{t('loginPhone')}</p>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9+\s]/g, '').slice(0, 17))}
              placeholder={t('loginPhonePlaceholder')}
              className="w-full bg-secondary text-foreground text-center text-xl font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleSendCode}
              disabled={phone.length < 9}
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-button disabled:opacity-40"
            >
              {t('loginSendCode')}
            </motion.button>
          </motion.div>
        )}

        {step === 'code' && (
          <motion.div
            key="code"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-sm"
          >
            <div className="text-6xl text-center mb-6">✉️</div>
            <h1 className="text-2xl font-black text-center mb-2">{t('loginEnterCode')}</h1>
            <PinDots value={code} max={4} />
            <input
              type="tel"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder={t('loginCodePlaceholder')}
              className="w-full bg-secondary text-foreground text-center text-3xl font-black p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary tracking-[0.5em]"
              autoFocus
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleVerify}
              disabled={code.length < 4}
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-button disabled:opacity-40"
            >
              {t('loginVerify')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
