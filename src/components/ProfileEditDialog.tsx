import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { avatars } from '@/data/mockData';
import { toast } from 'sonner';

interface ProfileEditDialogProps {
  open: boolean;
  onClose: () => void;
}

const ProfileEditDialog = ({ open, onClose }: ProfileEditDialogProps) => {
  const { t } = useLanguage();
  const { userName, avatarId, customPhoto, updateAvatar, completeOnboarding } = useApp();
  const [name, setName] = useState(userName);
  const [selectedAvatar, setSelectedAvatar] = useState(avatarId);
  const [photo, setPhoto] = useState<string | null>(customPhoto);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPhoto(ev.target?.result as string);
        setSelectedAvatar('custom');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateAvatar(photo ? 'custom' : selectedAvatar, photo);
    // Update name via completeOnboarding (reuses existing logic to persist name)
    completeOnboarding(name || 'Друг', photo ? 'custom' : selectedAvatar, photo);
    toast.success('✅');
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-foreground/40 flex items-end" onClick={onClose}>
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto">
            <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />
            
            <h2 className="text-xl font-black mb-2 text-center">{t('onboardChooseAvatar')}</h2>
            <p className="text-muted-foreground text-center mb-5 text-sm">{t('onboardAvatarSubtitle')}</p>

            <div className="grid grid-cols-5 gap-3 mb-4">
              {avatars.map(av => (
                <motion.button key={av.id} whileTap={{ scale: 0.9 }}
                  onClick={() => { setSelectedAvatar(av.id); setPhoto(null); }}
                  className={`w-14 h-14 text-2xl rounded-2xl flex items-center justify-center mx-auto ${
                    selectedAvatar === av.id && !photo ? 'bg-primary/15 ring-2 ring-primary' : 'bg-secondary'
                  }`}>
                  {av.emoji}
                </motion.button>
              ))}
            </div>

            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => fileInputRef.current?.click()}
              className={`w-full rounded-2xl py-4 flex items-center justify-center gap-2 font-bold text-sm mb-4 ${
                photo ? 'bg-primary/15 ring-2 ring-primary' : 'bg-secondary text-foreground'
              }`}>
              {photo ? (
                <img src={photo} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <Camera size={18} className="text-primary" />
              )}
              {t('onboardUploadPhoto')}
            </motion.button>

            <input value={name} onChange={(e) => setName(e.target.value.slice(0, 20))}
              placeholder={t('profileEditNamePlaceholder')}
              className="w-full bg-secondary text-foreground text-center text-lg font-bold p-5 rounded-3xl mb-6 outline-none focus:ring-2 focus:ring-primary" />

            <motion.button whileTap={{ scale: 0.97 }} onClick={handleSave}
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-5 rounded-3xl shadow-button">
              {t('profileEditSave')}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileEditDialog;
