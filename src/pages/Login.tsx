import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Fingerprint, ArrowLeft } from 'lucide-react';

type LoginStep = 'input' | 'code';
type LoginMode = 'phone' | 'card';

const Login = () => {
  const { t } = useLanguage();
  const { login, isOnboarded } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState<LoginStep>('input');
  const [mode, setMode] = useState<LoginMode>('phone');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [code, setCode] = useState('');
  const [enableBiometric, setEnableBiometric] = useState(false);

  const inputValue = mode === 'phone' ? phone : cardNumber;
  const isInputValid = mode === 'phone' ? phone.length >= 9 : cardNumber.replace(/\s/g, '').length === 16;

  const handleSendCode = () => {
    if (isInputValid) setStep('code');
  };

  const handleVerify = () => {
    if (code.length === 4) {
      login();
      navigate(isOnboarded ? '/home' : '/onboarding');
    }
  };

  const formatCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  };

  const handleScanCard = () => {
    // Mock scan — in real app would use camera API
    setCardNumber('8600 1234 5678 9012');
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
      <button onClick={() => step === 'code' ? setStep('input') : navigate('/')} className="absolute top-12 left-5 p-2 rounded-xl bg-secondary">
        <ArrowLeft size={20} />
      </button>

      <AnimatePresence mode="wait">
        {step === 'input' && (
          <motion.div
            key="input"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-sm"
          >
            <div className="text-6xl text-center mb-6">{mode === 'phone' ? '📱' : '💳'}</div>
            <h1 className="text-2xl font-black text-center mb-2">{t('loginTitle')}</h1>

            {/* Mode toggle */}
            <div className="flex gap-2 mb-6 bg-secondary rounded-2xl p-1">
              <button
                onClick={() => setMode('phone')}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  mode === 'phone' ? 'gradient-primary text-primary-foreground shadow-button' : 'text-muted-foreground'
                }`}
              >
                {t('loginByPhone')}
              </button>
              <button
                onClick={() => setMode('card')}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  mode === 'card' ? 'gradient-primary text-primary-foreground shadow-button' : 'text-muted-foreground'
                }`}
              >
                {t('loginByCard')}
              </button>
            </div>

            {mode === 'phone' ? (
              <>
                <p className="text-muted-foreground text-center mb-4">{t('loginPhone')}</p>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9+\s]/g, '').slice(0, 17))}
                  placeholder={t('loginPhonePlaceholder')}
                  className="w-full bg-secondary text-foreground text-center text-xl font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary"
                />
              </>
            ) : (
              <>
                <p className="text-muted-foreground text-center mb-2 text-sm">{t('loginCardHint')}</p>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder={t('loginCardPlaceholder')}
                  className="w-full bg-secondary text-foreground text-center text-xl font-bold p-4 rounded-2xl mb-3 outline-none focus:ring-2 focus:ring-primary tracking-wider"
                />
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleScanCard}
                  className="w-full bg-secondary text-foreground font-semibold py-3 rounded-xl mb-4 flex items-center justify-center gap-2 border border-border"
                >
                  <Camera size={18} className="text-primary" />
                  {t('loginScanCard')}
                </motion.button>
              </>
            )}

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleSendCode}
              disabled={!isInputValid}
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

            {/* Biometric toggle */}
            <div className="bg-card rounded-2xl p-4 shadow-card mb-4 flex items-center gap-3">
              <Fingerprint size={24} className="text-primary shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-bold">{t('loginBiometric')}</p>
                <p className="text-xs text-muted-foreground">{t('loginBiometricDesc')}</p>
              </div>
              <button
                onClick={() => setEnableBiometric(!enableBiometric)}
                className={`w-12 h-7 rounded-full transition-all relative ${enableBiometric ? 'bg-primary' : 'bg-border'}`}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-card absolute top-1 shadow-sm"
                  animate={{ left: enableBiometric ? 26 : 4 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

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
