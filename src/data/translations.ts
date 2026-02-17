export type Language = 'ru' | 'uz' | 'en';

type TranslationKeys = {
  // Welcome
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeDescription: string;
  welcomeStart: string;
  welcomeOrderCard: string;
  welcomeHaveCard: string;
  // Login
  loginTitle: string;
  loginPhone: string;
  loginPhonePlaceholder: string;
  loginCard: string;
  loginCardPlaceholder: string;
  loginCardHint: string;
  loginScanCard: string;
  loginSendCode: string;
  loginEnterCode: string;
  loginCodePlaceholder: string;
  loginVerify: string;
  loginEnterPin: string;
  loginPinSubtitle: string;
  loginBiometric: string;
  loginBiometricDesc: string;
  loginByPhone: string;
  loginByCard: string;
  // Onboarding
  onboardChooseAvatar: string;
  onboardAvatarSubtitle: string;
  onboardUploadPhoto: string;
  onboardNext: string;
  onboardFeature1Title: string;
  onboardFeature1Desc: string;
  onboardFeature2Title: string;
  onboardFeature2Desc: string;
  onboardFeature3Title: string;
  onboardFeature3Desc: string;
  onboardFinish: string;
  onboardSwipeHint: string;
  // Home
  homeGreeting: string;
  homeBalance: string;
  homeCardBalance: string;
  homeLastTransaction: string;
  homeLastTransactions: string;
  homeGoalProgress: string;
  homeGoToDream: string;
  homeRemaining: string;
  homeTotalSavings: string;
  homeClosestGoal: string;
  homeCardDetails: string;
  homeTransferMoney: string;
  homeAskParentTopUp: string;
  homeCardSettings: string;
  homeStories: string;
  // History
  historyTitle: string;
  historyEmpty: string;
  historyFrom: string;
  historyAll: string;
  historyIncome: string;
  historyExpense: string;
  historySavings: string;
  historyCash: string;
  historyFilterByDate: string;
  historyFilterByAmount: string;
  historyDonutTitle: string;
  historyFinAdvice: string;
  historyPeriod: string;
  historyLastMonth: string;
  historyLast3Months: string;
  historyLastYear: string;
  historyCustom: string;
  historyCategories: string;
  historyTotalOps: string;
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
  goalsEdit: string;
  goalsUpdate: string;
  goalsTotalBalance: string;
  goalsInterestEarned: string;
  goalsFinAdvice: string;
  goalsManualAmount: string;
  goalsCalculator: string;
  goalsCalcHowMuch: string;
  goalsCalcFrequency: string;
  goalsCalcDaily: string;
  goalsCalcWeekly: string;
  goalsCalcBiweekly: string;
  goalsCalcMonthly: string;
  goalsCalcRate: string;
  goalsCalcResult1m: string;
  goalsCalcResult3m: string;
  goalsCalcResult1y: string;
  goalsCalcOpenPiggy: string;
  goalsAskParentsAdd: string;
  // Feedback
  feedbackTitle: string;
  feedbackLike: string;
  feedbackSuggest: string;
  feedbackBroken: string;
  feedbackMessage: string;
  feedbackMessagePlaceholder: string;
  feedbackSend: string;
  feedbackThanks: string;
  feedbackCallSupport: string;
  feedbackSupportNumber: string;
  // Settings
  settingsTitle: string;
  settingsLanguage: string;
  settingsLogout: string;
  settingsTutorial: string;
  settingsTutorialDesc: string;
  settingsFeatureBalance: string;
  settingsFeatureGoals: string;
  settingsFeatureHistory: string;
  settingsFeatureFeedback: string;
  // Nav
  navHome: string;
  navHistory: string;
  navGoals: string;
  navSettings: string;
  // Currency
  currencySuffix: string;
  // Stories
  storyFinTip: string;
  // Order card
  orderCardTitle: string;
  orderCardDesc: string;
};

export const translations: Record<Language, TranslationKeys> = {
  ru: {
    welcomeTitle: 'Привет! 👋',
    welcomeSubtitle: 'Это твой личный кошелёк',
    welcomeDescription: 'Следи за деньгами, копи на мечту и учись управлять финансами!',
    welcomeStart: 'Начать',
    welcomeOrderCard: 'Заказать карту',
    welcomeHaveCard: 'У меня уже есть карта',
    loginTitle: 'Вход',
    loginPhone: 'Номер телефона',
    loginPhonePlaceholder: '+998 XX XXX XX XX',
    loginCard: 'Номер карты',
    loginCardPlaceholder: 'XXXX XXXX XXXX XXXX',
    loginCardHint: 'Введи 16-значный номер с лицевой стороны карты',
    loginScanCard: 'Сканировать карту 📷',
    loginSendCode: 'Получить код',
    loginEnterCode: 'Введи код из СМС',
    loginCodePlaceholder: '• • • •',
    loginVerify: 'Подтвердить',
    loginEnterPin: 'Введи PIN-код',
    loginPinSubtitle: 'Для быстрого входа',
    loginBiometric: 'Быстрый вход',
    loginBiometricDesc: 'Использовать Face ID / отпечаток пальца при следующем входе',
    loginByPhone: 'По номеру телефона',
    loginByCard: 'По номеру карты',
    onboardChooseAvatar: 'Выбери персонажа!',
    onboardAvatarSubtitle: 'Он будет с тобой в приложении',
    onboardUploadPhoto: 'Загрузить фото',
    onboardNext: 'Далее',
    onboardFeature1Title: 'Следи за балансом',
    onboardFeature1Desc: 'Всегда знай, сколько у тебя денег на карте',
    onboardFeature2Title: 'Копи на мечту',
    onboardFeature2Desc: 'Откладывай понемногу и следи за прогрессом',
    onboardFeature3Title: 'Учись и расти!',
    onboardFeature3Desc: 'Полезные подсказки помогут тебе стать финансовым героем',
    onboardFinish: 'Поехали! 🚀',
    onboardSwipeHint: 'Свайпни для продолжения →',
    homeGreeting: 'Привет',
    homeBalance: 'Твой баланс',
    homeCardBalance: 'У тебя на карте',
    homeLastTransaction: 'Последняя операция',
    homeLastTransactions: 'Последние операции',
    homeGoalProgress: 'Прогресс цели',
    homeGoToDream: 'Идти к мечте ✨',
    homeRemaining: 'Осталось',
    homeTotalSavings: 'Всего в копилках',
    homeClosestGoal: 'Ближайшая цель',
    homeCardDetails: 'Детали карты',
    homeTransferMoney: 'Перевести деньги',
    homeAskParentTopUp: 'Попросить пополнить',
    homeCardSettings: 'Настройки карты',
    homeStories: 'Для тебя',
    historyTitle: 'История',
    historyEmpty: 'Пока нет операций',
    historyFrom: 'От',
    historyAll: 'Все',
    historyIncome: 'Поступления',
    historyExpense: 'Траты',
    historySavings: 'Копилки',
    historyCash: 'Наличные',
    historyFilterByDate: 'По дате',
    historyFilterByAmount: 'По сумме',
    historyDonutTitle: 'Траты по категориям',
    historyFinAdvice: '💡 За последний месяц потрачено на фаст-фуд больше обычного. Попробуй готовить перекусы дома!',
    historyPeriod: 'Период',
    historyLastMonth: 'Месяц',
    historyLast3Months: '3 месяца',
    historyLastYear: 'Год',
    historyCustom: 'Свой',
    historyCategories: 'Категории',
    historyTotalOps: 'Всего операций',
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
    goalsEdit: 'Изменить',
    goalsUpdate: 'Сохранить изменения',
    goalsTotalBalance: 'Всего в копилках',
    goalsInterestEarned: 'Банк начислил процентов',
    goalsFinAdvice: '💡 Совет: откладывай регулярно, даже маленькие суммы растут! Главное — привычка.',
    goalsManualAmount: 'Или введи сумму:',
    goalsCalculator: 'Калькулятор накоплений',
    goalsCalcHowMuch: 'Сколько готов вносить?',
    goalsCalcFrequency: 'Как часто?',
    goalsCalcDaily: 'Каждый день',
    goalsCalcWeekly: 'Раз в неделю',
    goalsCalcBiweekly: 'Раз в 2 недели',
    goalsCalcMonthly: 'Раз в месяц',
    goalsCalcRate: 'Ставка: 15% годовых',
    goalsCalcResult1m: 'Через месяц',
    goalsCalcResult3m: 'Через 3 месяца',
    goalsCalcResult1y: 'Через год',
    goalsCalcOpenPiggy: 'Открыть копилку',
    goalsAskParentsAdd: 'Попросить родителей добавить на мечту',
    feedbackTitle: 'Обратная связь',
    feedbackLike: 'Мне нравится 😊',
    feedbackSuggest: 'Хочу предложить 💡',
    feedbackBroken: 'Не работает 😢',
    feedbackMessage: 'Расскажи подробнее',
    feedbackMessagePlaceholder: 'Напиши здесь...',
    feedbackSend: 'Отправить',
    feedbackThanks: 'Спасибо! За отзывы — бонусы! 🎁',
    feedbackCallSupport: 'Позвонить в поддержку',
    feedbackSupportNumber: '+998 71 200 00 00',
    settingsTitle: 'Настройки',
    settingsLanguage: 'Язык',
    settingsLogout: 'Выйти',
    settingsTutorial: 'Как пользоваться?',
    settingsTutorialDesc: 'Напоминание о возможностях приложения',
    settingsFeatureBalance: '💳 Баланс — смотри сколько денег на карте',
    settingsFeatureGoals: '🎯 Копилки — откладывай на мечту',
    settingsFeatureHistory: '📊 История — куда уходят деньги',
    settingsFeatureFeedback: '💬 Обратная связь — напиши нам',
    navHome: 'Главная',
    navHistory: 'История',
    navGoals: 'Копилки',
    navSettings: 'Ещё',
    currencySuffix: 'сум',
    storyFinTip: 'Знаешь ли ты? Если откладывать по 1000 сум каждый день, через год у тебя будет 365 000 сум! 🤯',
    orderCardTitle: 'Заказать карту',
    orderCardDesc: 'Попроси родителей оформить тебе детскую карту в ближайшем отделении банка',
  },
  uz: {
    welcomeTitle: 'Salom! 👋',
    welcomeSubtitle: 'Bu sening shaxsiy hamyoning',
    welcomeDescription: 'Pulingni kuzat, orzuying uchun yig\' va moliyani boshqarishni o\'rgan!',
    welcomeStart: 'Boshlash',
    welcomeOrderCard: 'Karta buyurtma berish',
    welcomeHaveCard: 'Menda karta bor',
    loginTitle: 'Kirish',
    loginPhone: 'Telefon raqami',
    loginPhonePlaceholder: '+998 XX XXX XX XX',
    loginCard: 'Karta raqami',
    loginCardPlaceholder: 'XXXX XXXX XXXX XXXX',
    loginCardHint: 'Kartaning old tomonidagi 16 xonali raqamni kiriting',
    loginScanCard: 'Kartani skanerlash 📷',
    loginSendCode: 'Kodni olish',
    loginEnterCode: 'SMS kodini kiriting',
    loginCodePlaceholder: '• • • •',
    loginVerify: 'Tasdiqlash',
    loginEnterPin: 'PIN-kodni kiriting',
    loginPinSubtitle: 'Tez kirish uchun',
    loginBiometric: 'Tez kirish',
    loginBiometricDesc: 'Keyingi safar Face ID / barmoq izi bilan kirish',
    loginByPhone: 'Telefon raqami bilan',
    loginByCard: 'Karta raqami bilan',
    onboardChooseAvatar: 'O\'z qahramoningni tanla!',
    onboardAvatarSubtitle: 'U senga ilovada hamroh bo\'ladi',
    onboardUploadPhoto: 'Rasm yuklash',
    onboardNext: 'Keyingi',
    onboardFeature1Title: 'Balansni kuzat',
    onboardFeature1Desc: 'Kartangda qancha pul borligini doim bil',
    onboardFeature2Title: 'Orzuying uchun yig\'',
    onboardFeature2Desc: 'Oz-ozdan yig\' va natijani kuzat',
    onboardFeature3Title: 'O\'rgan va o\'s!',
    onboardFeature3Desc: 'Foydali maslahatlar seni moliyaviy qahramon qiladi',
    onboardFinish: 'Ketdik! 🚀',
    onboardSwipeHint: 'Davom etish uchun suring →',
    homeGreeting: 'Salom',
    homeBalance: 'Sening balansing',
    homeCardBalance: 'Kartangda',
    homeLastTransaction: 'Oxirgi amaliyot',
    homeLastTransactions: 'Oxirgi amaliyotlar',
    homeGoalProgress: 'Maqsad taraqiyoti',
    homeGoToDream: 'Orzuga qadam ✨',
    homeRemaining: 'Qoldi',
    homeTotalSavings: 'Jami to\'plagichlarda',
    homeClosestGoal: 'Eng yaqin maqsad',
    homeCardDetails: 'Karta tafsilotlari',
    homeTransferMoney: 'Pul o\'tkazish',
    homeAskParentTopUp: 'To\'ldirishni so\'rash',
    homeCardSettings: 'Karta sozlamalari',
    homeStories: 'Sen uchun',
    historyTitle: 'Tarix',
    historyEmpty: 'Hali amaliyotlar yo\'q',
    historyFrom: 'dan',
    historyAll: 'Hammasi',
    historyIncome: 'Tushumlar',
    historyExpense: 'Xarajatlar',
    historySavings: 'To\'plagichlar',
    historyCash: 'Naqd pul',
    historyFilterByDate: 'Sana bo\'yicha',
    historyFilterByAmount: 'Summa bo\'yicha',
    historyDonutTitle: 'Kategoriya bo\'yicha xarajatlar',
    historyFinAdvice: '💡 O\'tgan oyda fast-food uchun ko\'p pul sarflandi. Uyda tayyorlashga harakat qil!',
    historyPeriod: 'Davr',
    historyLastMonth: 'Oy',
    historyLast3Months: '3 oy',
    historyLastYear: 'Yil',
    historyCustom: 'Boshqa',
    historyCategories: 'Kategoriyalar',
    historyTotalOps: 'Jami amaliyotlar',
    goalsTitle: 'Mening to\'plagichlarim',
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
    goalsEdit: 'O\'zgartirish',
    goalsUpdate: 'O\'zgarishlarni saqlash',
    goalsTotalBalance: 'Jami to\'plagichlarda',
    goalsInterestEarned: 'Bank hisoblagan foizlar',
    goalsFinAdvice: '💡 Maslahat: muntazam ajrat, kichik summalar ham o\'sadi! Asosiysi — odat.',
    goalsManualAmount: 'Yoki summani kiriting:',
    goalsCalculator: 'Jamg\'arma kalkulyatori',
    goalsCalcHowMuch: 'Qancha kiritishga tayyorsan?',
    goalsCalcFrequency: 'Qanchalik tez-tez?',
    goalsCalcDaily: 'Har kuni',
    goalsCalcWeekly: 'Haftada bir',
    goalsCalcBiweekly: '2 haftada bir',
    goalsCalcMonthly: 'Oyda bir',
    goalsCalcRate: 'Stavka: yiliga 15%',
    goalsCalcResult1m: '1 oydan keyin',
    goalsCalcResult3m: '3 oydan keyin',
    goalsCalcResult1y: '1 yildan keyin',
    goalsCalcOpenPiggy: 'To\'plagich ochish',
    goalsAskParentsAdd: 'Ota-onadan orzuga qo\'shishni so\'rash',
    feedbackTitle: 'Fikr-mulohaza',
    feedbackLike: 'Menga yoqadi 😊',
    feedbackSuggest: 'Taklif qilmoqchiman 💡',
    feedbackBroken: 'Ishlamayapti 😢',
    feedbackMessage: 'Batafsil aytib ber',
    feedbackMessagePlaceholder: 'Bu yerga yoz...',
    feedbackSend: 'Yuborish',
    feedbackThanks: 'Rahmat! Fikrlar uchun bonuslar! 🎁',
    feedbackCallSupport: 'Qo\'llab-quvvatlashga qo\'ng\'iroq',
    feedbackSupportNumber: '+998 71 200 00 00',
    settingsTitle: 'Sozlamalar',
    settingsLanguage: 'Til',
    settingsLogout: 'Chiqish',
    settingsTutorial: 'Qanday foydalanish?',
    settingsTutorialDesc: 'Ilova imkoniyatlarini eslatish',
    settingsFeatureBalance: '💳 Balans — kartadagi pulingni ko\'r',
    settingsFeatureGoals: '🎯 To\'plagich — orzuga ajrat',
    settingsFeatureHistory: '📊 Tarix — pul qayerga ketdi',
    settingsFeatureFeedback: '💬 Fikr — bizga yoz',
    navHome: 'Bosh sahifa',
    navHistory: 'Tarix',
    navGoals: 'To\'plagich',
    navSettings: 'Yana',
    currencySuffix: 'so\'m',
    storyFinTip: 'Bilasanmi? Har kuni 1000 so\'m yig\'sang, bir yilda 365 000 so\'m bo\'ladi! 🤯',
    orderCardTitle: 'Karta buyurtma berish',
    orderCardDesc: 'Ota-onangdan eng yaqin bank bo\'limida bolalar kartasini rasmiylashtirshni so\'ra',
  },
  en: {
    welcomeTitle: 'Hello! 👋',
    welcomeSubtitle: 'This is your personal wallet',
    welcomeDescription: 'Track your money, save for dreams, and learn to manage finances!',
    welcomeStart: 'Get Started',
    welcomeOrderCard: 'Order a card',
    welcomeHaveCard: 'I already have a card',
    loginTitle: 'Sign In',
    loginPhone: 'Phone Number',
    loginPhonePlaceholder: '+998 XX XXX XX XX',
    loginCard: 'Card Number',
    loginCardPlaceholder: 'XXXX XXXX XXXX XXXX',
    loginCardHint: 'Enter the 16-digit number on the front of your card',
    loginScanCard: 'Scan card 📷',
    loginSendCode: 'Get Code',
    loginEnterCode: 'Enter SMS code',
    loginCodePlaceholder: '• • • •',
    loginVerify: 'Verify',
    loginEnterPin: 'Enter PIN',
    loginPinSubtitle: 'For quick access',
    loginBiometric: 'Quick Login',
    loginBiometricDesc: 'Use Face ID / fingerprint next time',
    loginByPhone: 'By phone number',
    loginByCard: 'By card number',
    onboardChooseAvatar: 'Choose your character!',
    onboardAvatarSubtitle: 'They\'ll be with you in the app',
    onboardUploadPhoto: 'Upload photo',
    onboardNext: 'Next',
    onboardFeature1Title: 'Track your balance',
    onboardFeature1Desc: 'Always know how much money you have',
    onboardFeature2Title: 'Save for dreams',
    onboardFeature2Desc: 'Save bit by bit and watch your progress',
    onboardFeature3Title: 'Learn & Grow!',
    onboardFeature3Desc: 'Helpful tips will make you a financial hero',
    onboardFinish: 'Let\'s go! 🚀',
    onboardSwipeHint: 'Swipe to continue →',
    homeGreeting: 'Hi',
    homeBalance: 'Your balance',
    homeCardBalance: 'On your card',
    homeLastTransaction: 'Last transaction',
    homeLastTransactions: 'Recent transactions',
    homeGoalProgress: 'Goal progress',
    homeGoToDream: 'Chase the dream ✨',
    homeRemaining: 'Remaining',
    homeTotalSavings: 'Total in piggy banks',
    homeClosestGoal: 'Closest goal',
    homeCardDetails: 'Card details',
    homeTransferMoney: 'Transfer money',
    homeAskParentTopUp: 'Ask to top up',
    homeCardSettings: 'Card settings',
    homeStories: 'For you',
    historyTitle: 'History',
    historyEmpty: 'No transactions yet',
    historyFrom: 'From',
    historyAll: 'All',
    historyIncome: 'Income',
    historyExpense: 'Expenses',
    historySavings: 'Savings',
    historyCash: 'Cash',
    historyFilterByDate: 'By date',
    historyFilterByAmount: 'By amount',
    historyDonutTitle: 'Spending by category',
    historyFinAdvice: '💡 You spent more than usual on fast food last month. Try making snacks at home!',
    historyPeriod: 'Period',
    historyLastMonth: 'Month',
    historyLast3Months: '3 months',
    historyLastYear: 'Year',
    historyCustom: 'Custom',
    historyCategories: 'Categories',
    historyTotalOps: 'Total operations',
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
    goalsEdit: 'Edit',
    goalsUpdate: 'Save changes',
    goalsTotalBalance: 'Total in piggy banks',
    goalsInterestEarned: 'Interest from bank',
    goalsFinAdvice: '💡 Tip: save regularly, even small amounts grow! The key is the habit.',
    goalsManualAmount: 'Or enter amount:',
    goalsCalculator: 'Savings Calculator',
    goalsCalcHowMuch: 'How much can you contribute?',
    goalsCalcFrequency: 'How often?',
    goalsCalcDaily: 'Every day',
    goalsCalcWeekly: 'Once a week',
    goalsCalcBiweekly: 'Every 2 weeks',
    goalsCalcMonthly: 'Once a month',
    goalsCalcRate: 'Rate: 15% per year',
    goalsCalcResult1m: 'In 1 month',
    goalsCalcResult3m: 'In 3 months',
    goalsCalcResult1y: 'In 1 year',
    goalsCalcOpenPiggy: 'Open Piggy Bank',
    goalsAskParentsAdd: 'Ask parents to help reach your dream',
    feedbackTitle: 'Feedback',
    feedbackLike: 'I like it 😊',
    feedbackSuggest: 'I want to suggest 💡',
    feedbackBroken: 'Something\'s broken 😢',
    feedbackMessage: 'Tell us more',
    feedbackMessagePlaceholder: 'Write here...',
    feedbackSend: 'Send',
    feedbackThanks: 'Thanks! You get bonuses for feedback! 🎁',
    feedbackCallSupport: 'Call support',
    feedbackSupportNumber: '+998 71 200 00 00',
    settingsTitle: 'Settings',
    settingsLanguage: 'Language',
    settingsLogout: 'Log out',
    settingsTutorial: 'How to use?',
    settingsTutorialDesc: 'Reminder about app features',
    settingsFeatureBalance: '💳 Balance — see your card money',
    settingsFeatureGoals: '🎯 Piggy Banks — save for dreams',
    settingsFeatureHistory: '📊 History — where money goes',
    settingsFeatureFeedback: '💬 Feedback — write to us',
    navHome: 'Home',
    navHistory: 'History',
    navGoals: 'Savings',
    navSettings: 'More',
    currencySuffix: 'sum',
    storyFinTip: 'Did you know? If you save 1,000 sum every day, in a year you\'ll have 365,000 sum! 🤯',
    orderCardTitle: 'Order a card',
    orderCardDesc: 'Ask your parents to get you a kids card at the nearest bank branch',
  },
};
