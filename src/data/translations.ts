export type Language = 'ru' | 'uz' | 'en';

type TranslationKeys = {
  // Welcome
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeDescription: string;
  welcomeStart: string;
  // Login
  loginTitle: string;
  loginPhone: string;
  loginPhonePlaceholder: string;
  loginSendCode: string;
  loginEnterCode: string;
  loginCodePlaceholder: string;
  loginVerify: string;
  loginEnterPin: string;
  loginPinSubtitle: string;
  // Onboarding
  onboardChooseAvatar: string;
  onboardAvatarSubtitle: string;
  onboardNext: string;
  onboardFeature1Title: string;
  onboardFeature1Desc: string;
  onboardFeature2Title: string;
  onboardFeature2Desc: string;
  onboardFeature3Title: string;
  onboardFeature3Desc: string;
  onboardFinish: string;
  // Home
  homeGreeting: string;
  homeBalance: string;
  homeLastTransaction: string;
  homeGoalProgress: string;
  homeGoToDream: string;
  homeRemaining: string;
  // History
  historyTitle: string;
  historyEmpty: string;
  historyFrom: string;
  // Goals
  goalsTitle: string;
  goalsCreate: string;
  goalsName: string;
  goalsNamePlaceholder: string;
  goalsAmount: string;
  goalsAmountPlaceholder: string;
  goalsReason: string;
  goalsReasonPlaceholder: string;
  goalsSave: string;
  goalsSetAside: string;
  goalsSetAsideAmount: string;
  goalsConfirm: string;
  goalsCompleted: string;
  goalsAskParents: string;
  // Feedback
  feedbackTitle: string;
  feedbackLike: string;
  feedbackSuggest: string;
  feedbackBroken: string;
  feedbackMessage: string;
  feedbackMessagePlaceholder: string;
  feedbackSend: string;
  feedbackThanks: string;
  // Settings
  settingsTitle: string;
  settingsLanguage: string;
  settingsLogout: string;
  // Nav
  navHome: string;
  navHistory: string;
  navGoals: string;
  navSettings: string;
  // Currency
  currencySuffix: string;
  // Stories
  storyFinTip: string;
};

export const translations: Record<Language, TranslationKeys> = {
  ru: {
    welcomeTitle: 'Привет! 👋',
    welcomeSubtitle: 'Это твой личный кошелёк',
    welcomeDescription: 'Следи за деньгами, копи на мечту и учись управлять финансами!',
    welcomeStart: 'Начать',
    loginTitle: 'Вход',
    loginPhone: 'Номер телефона',
    loginPhonePlaceholder: '+998 XX XXX XX XX',
    loginSendCode: 'Получить код',
    loginEnterCode: 'Введи код из СМС',
    loginCodePlaceholder: '• • • •',
    loginVerify: 'Подтвердить',
    loginEnterPin: 'Введи PIN-код',
    loginPinSubtitle: 'Для быстрого входа',
    onboardChooseAvatar: 'Выбери персонажа!',
    onboardAvatarSubtitle: 'Он будет с тобой в приложении',
    onboardNext: 'Далее',
    onboardFeature1Title: 'Следи за балансом',
    onboardFeature1Desc: 'Всегда знай, сколько у тебя денег на карте',
    onboardFeature2Title: 'Копи на мечту',
    onboardFeature2Desc: 'Откладывай понемногу и следи за прогрессом',
    onboardFeature3Title: 'Учись и расти!',
    onboardFeature3Desc: 'Полезные подсказки помогут тебе стать финансовым героем',
    onboardFinish: 'Поехали! 🚀',
    homeGreeting: 'Привет',
    homeBalance: 'Твой баланс',
    homeLastTransaction: 'Последняя операция',
    homeGoalProgress: 'Прогресс цели',
    homeGoToDream: 'Идти к мечте ✨',
    homeRemaining: 'Осталось',
    historyTitle: 'История',
    historyEmpty: 'Пока нет операций',
    historyFrom: 'От',
    goalsTitle: 'Мои копилки',
    goalsCreate: 'Новая копилка',
    goalsName: 'На что копишь?',
    goalsNamePlaceholder: 'Велосипед, телефон...',
    goalsAmount: 'Сколько нужно?',
    goalsAmountPlaceholder: '500 000',
    goalsReason: 'Почему хочешь это?',
    goalsReasonPlaceholder: 'Чтобы кататься с друзьями!',
    goalsSave: 'Создать копилку',
    goalsSetAside: 'Отложить',
    goalsSetAsideAmount: 'Отложить: {amount} сум',
    goalsConfirm: 'Подтвердить',
    goalsCompleted: 'Цель достигнута! 🎉',
    goalsAskParents: 'Попросить родителей добавить',
    feedbackTitle: 'Обратная связь',
    feedbackLike: 'Мне нравится 😊',
    feedbackSuggest: 'Хочу предложить 💡',
    feedbackBroken: 'Не работает 😢',
    feedbackMessage: 'Расскажи подробнее',
    feedbackMessagePlaceholder: 'Напиши здесь...',
    feedbackSend: 'Отправить',
    feedbackThanks: 'Спасибо! За отзывы — бонусы! 🎁',
    settingsTitle: 'Настройки',
    settingsLanguage: 'Язык',
    settingsLogout: 'Выйти',
    navHome: 'Главная',
    navHistory: 'История',
    navGoals: 'Копилки',
    navSettings: 'Ещё',
    currencySuffix: 'сум',
    storyFinTip: 'Знаешь ли ты? Если откладывать по 1000 сум каждый день, через год у тебя будет 365 000 сум! 🤯',
  },
  uz: {
    welcomeTitle: 'Salom! 👋',
    welcomeSubtitle: 'Bu sening shaxsiy hamyoning',
    welcomeDescription: 'Pulingni kuzat, orzuying uchun yig\' va moliyani boshqarishni o\'rgan!',
    welcomeStart: 'Boshlash',
    loginTitle: 'Kirish',
    loginPhone: 'Telefon raqami',
    loginPhonePlaceholder: '+998 XX XXX XX XX',
    loginSendCode: 'Kodni olish',
    loginEnterCode: 'SMS kodini kiriting',
    loginCodePlaceholder: '• • • •',
    loginVerify: 'Tasdiqlash',
    loginEnterPin: 'PIN-kodni kiriting',
    loginPinSubtitle: 'Tez kirish uchun',
    onboardChooseAvatar: 'O\'z qahramoningni tanlа!',
    onboardAvatarSubtitle: 'U senga ilovada hamroh bo\'ladi',
    onboardNext: 'Keyingi',
    onboardFeature1Title: 'Balansni kuzat',
    onboardFeature1Desc: 'Kartangda qancha pul borligini doim bil',
    onboardFeature2Title: 'Orzuying uchun yig\'',
    onboardFeature2Desc: 'Oz-ozdan yig\' va natijani kuzat',
    onboardFeature3Title: 'O\'rgan va o\'s!',
    onboardFeature3Desc: 'Foydali maslahatlar seni moliyaviy qahramon qiladi',
    onboardFinish: 'Ketdik! 🚀',
    homeGreeting: 'Salom',
    homeBalance: 'Sening balansing',
    homeLastTransaction: 'Oxirgi amaliyot',
    homeGoalProgress: 'Maqsad taraqiyoti',
    homeGoToDream: 'Orzuga qadam ✨',
    homeRemaining: 'Qoldi',
    historyTitle: 'Tarix',
    historyEmpty: 'Hali amaliyotlar yo\'q',
    historyFrom: 'dan',
    goalsTitle: 'Mening to\'plаgichlarim',
    goalsCreate: 'Yangi to\'plagich',
    goalsName: 'Nima uchun yig\'asan?',
    goalsNamePlaceholder: 'Velosiped, telefon...',
    goalsAmount: 'Qancha kerak?',
    goalsAmountPlaceholder: '500 000',
    goalsReason: 'Nega buni xohlaysan?',
    goalsReasonPlaceholder: 'Do\'stlarim bilan sayr qilish uchun!',
    goalsSave: 'To\'plagich yaratish',
    goalsSetAside: 'Ajratish',
    goalsSetAsideAmount: 'Ajratish: {amount} so\'m',
    goalsConfirm: 'Tasdiqlash',
    goalsCompleted: 'Maqsadga erishildi! 🎉',
    goalsAskParents: 'Ota-onadan qo\'shishni so\'rash',
    feedbackTitle: 'Fikr-mulohaza',
    feedbackLike: 'Menga yoqadi 😊',
    feedbackSuggest: 'Taklif qilmoqchiman 💡',
    feedbackBroken: 'Ishlamayapti 😢',
    feedbackMessage: 'Batafsil aytib ber',
    feedbackMessagePlaceholder: 'Bu yerga yoz...',
    feedbackSend: 'Yuborish',
    feedbackThanks: 'Rahmat! Fikrlar uchun bonuslar! 🎁',
    settingsTitle: 'Sozlamalar',
    settingsLanguage: 'Til',
    settingsLogout: 'Chiqish',
    navHome: 'Bosh sahifa',
    navHistory: 'Tarix',
    navGoals: 'To\'plagich',
    navSettings: 'Yana',
    currencySuffix: 'so\'m',
    storyFinTip: 'Bilasanmi? Har kuni 1000 so\'m yig\'sang, bir yilda 365 000 so\'m bo\'ladi! 🤯',
  },
  en: {
    welcomeTitle: 'Hello! 👋',
    welcomeSubtitle: 'This is your personal wallet',
    welcomeDescription: 'Track your money, save for dreams, and learn to manage finances!',
    welcomeStart: 'Get Started',
    loginTitle: 'Sign In',
    loginPhone: 'Phone Number',
    loginPhonePlaceholder: '+998 XX XXX XX XX',
    loginSendCode: 'Get Code',
    loginEnterCode: 'Enter SMS code',
    loginCodePlaceholder: '• • • •',
    loginVerify: 'Verify',
    loginEnterPin: 'Enter PIN',
    loginPinSubtitle: 'For quick access',
    onboardChooseAvatar: 'Choose your character!',
    onboardAvatarSubtitle: 'They\'ll be with you in the app',
    onboardNext: 'Next',
    onboardFeature1Title: 'Track your balance',
    onboardFeature1Desc: 'Always know how much money you have',
    onboardFeature2Title: 'Save for dreams',
    onboardFeature2Desc: 'Save bit by bit and watch your progress',
    onboardFeature3Title: 'Learn & Grow!',
    onboardFeature3Desc: 'Helpful tips will make you a financial hero',
    onboardFinish: 'Let\'s go! 🚀',
    homeGreeting: 'Hi',
    homeBalance: 'Your balance',
    homeLastTransaction: 'Last transaction',
    homeGoalProgress: 'Goal progress',
    homeGoToDream: 'Chase the dream ✨',
    homeRemaining: 'Remaining',
    historyTitle: 'History',
    historyEmpty: 'No transactions yet',
    historyFrom: 'From',
    goalsTitle: 'My Piggy Banks',
    goalsCreate: 'New Piggy Bank',
    goalsName: 'What are you saving for?',
    goalsNamePlaceholder: 'Bicycle, phone...',
    goalsAmount: 'How much do you need?',
    goalsAmountPlaceholder: '500,000',
    goalsReason: 'Why do you want this?',
    goalsReasonPlaceholder: 'To ride with friends!',
    goalsSave: 'Create Piggy Bank',
    goalsSetAside: 'Set aside',
    goalsSetAsideAmount: 'Set aside: {amount} sum',
    goalsConfirm: 'Confirm',
    goalsCompleted: 'Goal reached! 🎉',
    goalsAskParents: 'Ask parents to add',
    feedbackTitle: 'Feedback',
    feedbackLike: 'I like it 😊',
    feedbackSuggest: 'I want to suggest 💡',
    feedbackBroken: 'Something\'s broken 😢',
    feedbackMessage: 'Tell us more',
    feedbackMessagePlaceholder: 'Write here...',
    feedbackSend: 'Send',
    feedbackThanks: 'Thanks! You get bonuses for feedback! 🎁',
    settingsTitle: 'Settings',
    settingsLanguage: 'Language',
    settingsLogout: 'Log out',
    navHome: 'Home',
    navHistory: 'History',
    navGoals: 'Savings',
    navSettings: 'More',
    currencySuffix: 'sum',
    storyFinTip: 'Did you know? If you save 1,000 sum every day, in a year you\'ll have 365,000 sum! 🤯',
  },
};
