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
  loginBiometricTitle: string;
  loginBiometricAllow: string;
  loginBiometricSkip: string;
  loginBiometricFaceId: string;
  loginBiometricFingerprint: string;
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
  homeChangeAvatar: string;
  // Transfer
  transferTitle: string;
  transferFrom: string;
  transferToSelf: string;
  transferToOther: string;
  transferChooseGoal: string;
  transferPhoneOrCard: string;
  transferAmount: string;
  transferSend: string;
  transferSuccess: string;
  transferSuccessDesc: string;
  transferDone: string;
  // Card Settings
  cardSettingsTitle: string;
  cardDetails: string;
  cardBlock: string;
  cardReissue: string;
  cardFraud: string;
  cardNumber: string;
  cardExpiry: string;
  cardBlockConfirm: string;
  cardBlocked: string;
  cardReissueConfirm: string;
  cardReissued: string;
  cardFraudConfirm: string;
  cardFraudSent: string;
  cardCancel: string;
  // Request money
  requestMoneyTitle: string;
  requestMoneyDesc: string;
  requestMoneySend: string;
  requestMoneySent: string;
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
  historyFilterType: string;
  historyFilterPeriod: string;
  historyFilterAmount: string;
  historyMinAmount: string;
  historyMaxAmount: string;
  historyTxDetail: string;
  historyTxDate: string;
  historyTxType: string;
  historyTxSource: string;
  historyTxAmount: string;
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
  goalsDeadline: string;
  goalsDaysLeft: string;
  goalsFieldProgress: string;
  goalsWithdraw: string;
  goalsWithdrawSuccess: string;
  goalsTopUp: string;
  goalsAskParentsWho: string;
  goalsAskParentsDad: string;
  goalsAskParentsMom: string;
  goalsAskParentsGrandma: string;
  goalsAskParentsAmount: string;
  goalsAskParentsMessage: string;
  goalsAskParentsMessagePlaceholder: string;
  goalsAskParentsSend: string;
  goalsCloseGoal: string;
  goalsCloseConfirmTitle: string;
  goalsCloseConfirmDesc: string;
  goalsCloseConfirmYes: string;
  goalsCloseConfirmNo: string;
  goalsClosedSuccess: string;
  notifTitle: string;
  notifDetails: string;
  notifOk: string;
  notifOperationAmount: string;
  notifOperationType: string;
  notifOperationDate: string;
  quizRewardCredited: string;
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
  settingsTheme: string;
  settingsThemeDesc: string;
  settingsAchievements: string;
  settingsAchievementsDesc: string;
  settingsAchievementLocked: string;
  settingsAchievementProgress: string;
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
  orderCardStep1: string;
  orderCardStep2: string;
  orderCardStep3: string;
  orderCardGotIt: string;
  orderCardShare: string;
  // Quiz
  quizTitle: string;
  quizIntro: string;
  quizReward: string;
  quizStart: string;
  quizCorrect: string;
  quizWrong: string;
  quizNext: string;
  quizFinishTitle: string;
  quizFinishDesc: string;
  quizLastTime: string;
  quizComeBack: string;
  quizDone: string;
  profileEditNamePlaceholder: string;
  profileEditSave: string;
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
    loginByPhone: 'По телефону',
    loginByCard: 'По карте',
    loginBiometricTitle: 'Быстрый вход',
    loginBiometricAllow: 'Разрешить',
    loginBiometricSkip: 'Пропустить',
    loginBiometricFaceId: 'Входи по лицу — быстро и безопасно',
    loginBiometricFingerprint: 'Или используй отпечаток пальца',
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
    homeChangeAvatar: 'Сменить аватарку',
    transferTitle: 'Перевод',
    transferFrom: 'Списать с карты',
    transferToSelf: 'Себе',
    transferToOther: 'Другому',
    transferChooseGoal: 'Выбери копилку',
    transferPhoneOrCard: 'Номер телефона или карты',
    transferAmount: 'Сумма перевода',
    transferSend: 'Перевести',
    transferSuccess: 'Перевод выполнен! ✅',
    transferSuccessDesc: 'Деньги отправлены',
    transferDone: 'Готово',
    cardSettingsTitle: 'Настройки карты',
    cardDetails: 'Реквизиты карты',
    cardBlock: 'Заблокировать карту',
    cardReissue: 'Перевыпустить карту',
    cardFraud: 'Сообщить о мошенничестве',
    cardNumber: 'Номер карты',
    cardExpiry: 'Срок действия',
    cardBlockConfirm: 'Ты уверен? Карта будет заблокирована',
    cardBlocked: 'Карта заблокирована. Обратись к родителям для разблокировки.',
    cardReissueConfirm: 'Запросить перевыпуск карты?',
    cardReissued: 'Заявка на перевыпуск отправлена! Новая карта будет готова через 5-7 дней.',
    cardFraudConfirm: 'Сообщить о подозрительной операции?',
    cardFraudSent: 'Спасибо! Мы проверим и свяжемся с тобой.',
    cardCancel: 'Отмена',
    requestMoneyTitle: 'Попросить пополнить',
    requestMoneyDesc: 'Отправь запрос родителям на пополнение карты',
    requestMoneySend: 'Отправить запрос',
    requestMoneySent: 'Запрос отправлен родителям! 💌',
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
    historyFilterType: 'Тип операции',
    historyFilterPeriod: 'Период',
    historyFilterAmount: 'Сумма',
    historyMinAmount: 'От',
    historyMaxAmount: 'До',
    historyTxDetail: 'Детали операции',
    historyTxDate: 'Дата',
    historyTxType: 'Тип',
    historyTxSource: 'Источник',
    historyTxAmount: 'Сумма',
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
    goalsDeadline: 'Когда хочешь достигнуть?',
    goalsDaysLeft: 'дней осталось',
    goalsFieldProgress: 'Прогресс',
    goalsWithdraw: 'Вывести',
    goalsWithdrawSuccess: 'Деньги выведены на карту ✅',
    goalsTopUp: 'Пополнить',
    goalsAskParentsWho: 'У кого попросить?',
    goalsAskParentsDad: 'Папа',
    goalsAskParentsMom: 'Мама',
    goalsAskParentsGrandma: 'Бабушка',
    goalsAskParentsAmount: 'Сумма запроса',
    goalsAskParentsMessage: 'Сообщение',
    goalsAskParentsMessagePlaceholder: 'Помоги мне накопить на мечту! 🙏',
    goalsAskParentsSend: 'Отправить запрос',
    goalsCloseGoal: 'Закрыть копилку',
    goalsCloseConfirmTitle: 'Закрыть копилку?',
    goalsCloseConfirmDesc: 'Деньги будут перечислены на карту, а прогресс и цель исчезнут. Придётся начать заново.',
    goalsCloseConfirmYes: 'Да, закрыть',
    goalsCloseConfirmNo: 'Отмена',
    goalsClosedSuccess: 'Деньги перечислены на карту',
    notifTitle: 'Операция выполнена',
    notifDetails: 'Подробности',
    notifOk: 'Хорошо',
    notifOperationAmount: 'Сумма',
    notifOperationType: 'Тип',
    notifOperationDate: 'Дата',
    quizRewardCredited: 'Награда зачислена на карту! 💰',
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
    settingsTitle: 'Ещё',
    settingsLanguage: 'Язык',
    settingsLogout: 'Выйти',
    settingsTutorial: 'Как пользоваться?',
    settingsTutorialDesc: 'Напоминание о возможностях приложения',
    settingsFeatureBalance: '💳 Баланс — смотри сколько денег на карте',
    settingsFeatureGoals: '🎯 Копилки — откладывай на мечту',
    settingsFeatureHistory: '📊 История — куда уходят деньги',
    settingsFeatureFeedback: '💬 Обратная связь — напиши нам',
    settingsTheme: 'Тема оформления',
    settingsThemeDesc: 'Выбери стиль, который тебе нравится',
    settingsAchievements: 'Мои достижения',
    settingsAchievementsDesc: 'Собирай награды за активность!',
    settingsAchievementLocked: 'Выполни задание, чтобы открыть',
    settingsAchievementProgress: 'получено',
    navHome: 'Главная',
    navHistory: 'История',
    navGoals: 'Копилки',
    navSettings: 'Ещё',
    currencySuffix: 'сум',
    storyFinTip: 'Знаешь ли ты? Если откладывать по 1000 сум каждый день, через год у тебя будет 365 000 сум! 🤯',
    orderCardTitle: 'Платёжный стикер HUMO Pay Kids',
    orderCardDesc: 'Наклей HUMO Pay на заднюю панель телефона и оплачивай покупки одним касанием!',
    orderCardStep1: 'Попроси маму или папу заказать',
    orderCardStep2: 'Когда будет готов, приди с ними для получения',
    orderCardStep3: 'Наклей на телефон — плати, копи и пользуйся другими функциями приложения! 🎉',
    orderCardGotIt: 'Понятно!',
    orderCardShare: 'Поделиться ссылкой с родителями 📤',
    quizTitle: 'Финансовый квест 🧠',
    quizIntro: 'Ответь на 5 вопросов по финансовой грамотности и заработай бонусы!',
    quizReward: 'За каждый верный ответ — 10 сум',
    quizStart: 'Начать квест',
    quizCorrect: 'Правильно! 🎉',
    quizWrong: 'Не совсем...',
    quizNext: 'Дальше',
    quizFinishTitle: 'Квест пройден!',
    quizFinishDesc: 'Ты отлично справился! Продолжай учиться финансовой грамотности.',
    quizLastTime: 'В прошлый раз',
    quizComeBack: 'Возвращайся через неделю за новыми вопросами! 📅',
    quizDone: 'Вернуться',
    profileEditNamePlaceholder: 'Как тебя зовут?',
    profileEditSave: 'Сохранить',
  },
  uz: {
    welcomeTitle: 'Salom! 👋',
    welcomeSubtitle: 'Bu sening shaxsiy hamyoning',
    welcomeDescription: 'Pulingni kuzat, orzuying uchun yig\' va moliyani boshqarishni o\'rgan!',
    welcomeStart: 'Boshlash',
    welcomeOrderCard: 'Karta buyurtma qilish',
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
    loginByPhone: 'Telefon bilan',
    loginByCard: 'Karta bilan',
    loginBiometricTitle: 'Tez kirish',
    loginBiometricAllow: 'Ruxsat berish',
    loginBiometricSkip: 'O\'tkazib yuborish',
    loginBiometricFaceId: 'Yuz bilan kir — tez va xavfsiz',
    loginBiometricFingerprint: 'Yoki barmoq izingdan foydalaning',
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
    homeChangeAvatar: 'Avatarni o\'zgartirish',
    transferTitle: 'O\'tkazma',
    transferFrom: 'Kartadan yechish',
    transferToSelf: 'O\'zimga',
    transferToOther: 'Boshqaga',
    transferChooseGoal: 'To\'plagichni tanlang',
    transferPhoneOrCard: 'Telefon yoki karta raqami',
    transferAmount: 'O\'tkazma summasi',
    transferSend: 'O\'tkazish',
    transferSuccess: 'O\'tkazma bajarildi! ✅',
    transferSuccessDesc: 'Pul yuborildi',
    transferDone: 'Tayyor',
    cardSettingsTitle: 'Karta sozlamalari',
    cardDetails: 'Karta rekvizitlari',
    cardBlock: 'Kartani bloklash',
    cardReissue: 'Kartani qayta chiqarish',
    cardFraud: 'Firibgarlik haqida xabar berish',
    cardNumber: 'Karta raqami',
    cardExpiry: 'Amal qilish muddati',
    cardBlockConfirm: 'Ishonchingiz komilmi? Karta bloklanadi',
    cardBlocked: 'Karta bloklandi. Ochish uchun ota-onangga murojaat qiling.',
    cardReissueConfirm: 'Kartani qayta chiqarishni so\'raysizmi?',
    cardReissued: 'Qayta chiqarish arizasi yuborildi! Yangi karta 5-7 kunda tayyor bo\'ladi.',
    cardFraudConfirm: 'Shubhali operatsiya haqida xabar berasizmi?',
    cardFraudSent: 'Rahmat! Tekshirib, siz bilan bog\'lanamiz.',
    cardCancel: 'Bekor qilish',
    requestMoneyTitle: 'To\'ldirishni so\'rash',
    requestMoneyDesc: 'Ota-onangga kartani to\'ldirish so\'rovini yuboring',
    requestMoneySend: 'So\'rov yuborish',
    requestMoneySent: 'So\'rov ota-onaga yuborildi! 💌',
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
    historyFilterType: 'Amaliyot turi',
    historyFilterPeriod: 'Davr',
    historyFilterAmount: 'Summa',
    historyMinAmount: 'Dan',
    historyMaxAmount: 'Gacha',
    historyTxDetail: 'Amaliyot tafsilotlari',
    historyTxDate: 'Sana',
    historyTxType: 'Tur',
    historyTxSource: 'Manba',
    historyTxAmount: 'Summa',
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
    goalsDeadline: 'Qachon erishmoqchisan?',
    goalsDaysLeft: 'kun qoldi',
    goalsFieldProgress: 'Taraqqiyot',
    goalsWithdraw: 'Chiqarish',
    goalsWithdrawSuccess: 'Pul kartaga chiqarildi ✅',
    goalsTopUp: 'To\'ldirish',
    goalsAskParentsWho: 'Kimdan so\'rash?',
    goalsAskParentsDad: 'Ota',
    goalsAskParentsMom: 'Ona',
    goalsAskParentsGrandma: 'Buvi',
    goalsAskParentsAmount: 'So\'rov summasi',
    goalsAskParentsMessage: 'Xabar',
    goalsAskParentsMessagePlaceholder: 'Orzuyimga yetishishga yordam bering! 🙏',
    goalsAskParentsSend: 'So\'rov yuborish',
    goalsCloseGoal: 'To\'plagichni yopish',
    goalsCloseConfirmTitle: 'To\'plagichni yopishni xohlaysizmi?',
    goalsCloseConfirmDesc: 'Pullar kartaga o\'tkaziladi, jarayon va maqsad yo\'qoladi. Qaytadan boshlashga to\'g\'ri keladi.',
    goalsCloseConfirmYes: 'Ha, yopish',
    goalsCloseConfirmNo: 'Bekor qilish',
    goalsClosedSuccess: 'Pullar kartaga o\'tkazildi',
    notifTitle: 'Operatsiya bajarildi',
    notifDetails: 'Batafsil',
    notifOk: 'Yaxshi',
    notifOperationAmount: 'Summa',
    notifOperationType: 'Turi',
    notifOperationDate: 'Sana',
    quizRewardCredited: 'Mukofot kartaga o\'tkazildi! 💰',
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
    settingsTitle: 'Yana',
    settingsLanguage: 'Til',
    settingsLogout: 'Chiqish',
    settingsTutorial: 'Qanday foydalanish?',
    settingsTutorialDesc: 'Ilova imkoniyatlarini eslatish',
    settingsFeatureBalance: '💳 Balans — kartadagi pulingni ko\'r',
    settingsFeatureGoals: '🎯 To\'plagich — orzuga ajrat',
    settingsFeatureHistory: '📊 Tarix — pul qayerga ketdi',
    settingsFeatureFeedback: '💬 Fikr — bizga yoz',
    settingsTheme: 'Dizayn mavzusi',
    settingsThemeDesc: 'O\'zingga yoqqan uslubni tanla',
    settingsAchievements: 'Mening yutuqlarim',
    settingsAchievementsDesc: 'Faollik uchun mukofotlar yig\'!',
    settingsAchievementLocked: 'Ochish uchun vazifani bajaring',
    settingsAchievementProgress: 'olingan',
    navHome: 'Bosh sahifa',
    navHistory: 'Tarix',
    navGoals: 'To\'plagich',
    navSettings: 'Yana',
    currencySuffix: 'so\'m',
    storyFinTip: 'Bilasanmi? Har kuni 1000 so\'m yig\'sang, bir yilda 365 000 so\'m bo\'ladi! 🤯',
    orderCardTitle: 'HUMO Pay Kids to\'lov stikeri',
    orderCardDesc: 'HUMO Pay stikerini telefoningiz orqa paneliga yopishtiring va bir tegish bilan to\'lang!',
    orderCardStep1: 'Ota-onangdan buyurtma berishni so\'ra',
    orderCardStep2: 'Tayyor bo\'lganda, ular bilan birga olib kelish uchun boring',
    orderCardStep3: 'Telefonga yopishtirib — to\'la, yig\' va ilovaning boshqa funksiyalaridan foydalaning! 🎉',
    orderCardGotIt: 'Tushundim!',
    orderCardShare: 'Ota-onaga havola yuborish 📤',
    quizTitle: 'Moliyaviy kvest 🧠',
    quizIntro: 'Moliyaviy savodxonlik bo\'yicha 5 ta savolga javob bering va bonuslar ishlang!',
    quizReward: 'Har bir to\'g\'ri javob uchun — 10 so\'m',
    quizStart: 'Kvestni boshlash',
    quizCorrect: 'To\'g\'ri! 🎉',
    quizWrong: 'Unchalik emas...',
    quizNext: 'Keyingi',
    quizFinishTitle: 'Kvest yakunlandi!',
    quizFinishDesc: 'Ajoyib natija! Moliyaviy savodxonlikni o\'rganishni davom ettiring.',
    quizLastTime: 'O\'tgan safar',
    quizComeBack: 'Yangi savollar uchun bir haftadan keyin qaytib keling! 📅',
    quizDone: 'Qaytish',
    profileEditNamePlaceholder: 'Ismingni yoz',
    profileEditSave: 'Saqlash',
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
    loginByPhone: 'By phone',
    loginByCard: 'By card',
    loginBiometricTitle: 'Quick Login',
    loginBiometricAllow: 'Allow',
    loginBiometricSkip: 'Skip',
    loginBiometricFaceId: 'Sign in with your face — fast and secure',
    loginBiometricFingerprint: 'Or use your fingerprint',
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
    homeTotalSavings: 'Total in savings',
    homeClosestGoal: 'Closest goal',
    homeCardDetails: 'Card details',
    homeTransferMoney: 'Transfer money',
    homeAskParentTopUp: 'Ask to top up',
    homeCardSettings: 'Card settings',
    homeStories: 'For you',
    homeChangeAvatar: 'Change avatar',
    transferTitle: 'Transfer',
    transferFrom: 'From card',
    transferToSelf: 'To myself',
    transferToOther: 'To someone',
    transferChooseGoal: 'Choose savings goal',
    transferPhoneOrCard: 'Phone or card number',
    transferAmount: 'Transfer amount',
    transferSend: 'Transfer',
    transferSuccess: 'Transfer complete! ✅',
    transferSuccessDesc: 'Money has been sent',
    transferDone: 'Done',
    cardSettingsTitle: 'Card Settings',
    cardDetails: 'Card details',
    cardBlock: 'Block card',
    cardReissue: 'Reissue card',
    cardFraud: 'Report fraud',
    cardNumber: 'Card number',
    cardExpiry: 'Expiry date',
    cardBlockConfirm: 'Are you sure? The card will be blocked',
    cardBlocked: 'Card blocked. Contact your parents to unblock.',
    cardReissueConfirm: 'Request card reissue?',
    cardReissued: 'Reissue request sent! New card will be ready in 5-7 days.',
    cardFraudConfirm: 'Report a suspicious transaction?',
    cardFraudSent: 'Thank you! We\'ll check and contact you.',
    cardCancel: 'Cancel',
    requestMoneyTitle: 'Request top-up',
    requestMoneyDesc: 'Send a request to your parents to top up your card',
    requestMoneySend: 'Send request',
    requestMoneySent: 'Request sent to parents! 💌',
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
    historyFilterType: 'Transaction type',
    historyFilterPeriod: 'Period',
    historyFilterAmount: 'Amount',
    historyMinAmount: 'From',
    historyMaxAmount: 'To',
    historyTxDetail: 'Transaction details',
    historyTxDate: 'Date',
    historyTxType: 'Type',
    historyTxSource: 'Source',
    historyTxAmount: 'Amount',
    goalsTitle: 'My Savings',
    goalsCreate: 'New Savings Goal',
    goalsName: 'What are you saving for?',
    goalsNamePlaceholder: 'Bicycle, phone...',
    goalsAmount: 'How much do you need?',
    goalsAmountPlaceholder: '500,000',
    goalsReason: 'Why do you want this?',
    goalsReasonPlaceholder: 'To ride with friends!',
    goalsSave: 'Create Savings Goal',
    goalsSetAside: 'Set aside',
    goalsSetAsideAmount: 'Set aside: {amount} sum',
    goalsConfirm: 'Confirm',
    goalsCompleted: 'Goal reached! 🎉',
    goalsAskParents: 'Ask parents to add',
    goalsEdit: 'Edit',
    goalsUpdate: 'Save changes',
    goalsTotalBalance: 'Total in savings',
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
    goalsCalcOpenPiggy: 'Open Savings Goal',
    goalsAskParentsAdd: 'Ask parents to help reach your dream',
    goalsDeadline: 'When do you want to reach it?',
    goalsDaysLeft: 'days left',
    goalsFieldProgress: 'Progress',
    goalsWithdraw: 'Withdraw',
    goalsWithdrawSuccess: 'Money withdrawn to card ✅',
    goalsTopUp: 'Top up',
    goalsAskParentsWho: 'Who to ask?',
    goalsAskParentsDad: 'Dad',
    goalsAskParentsMom: 'Mom',
    goalsAskParentsGrandma: 'Grandma',
    goalsAskParentsAmount: 'Request amount',
    goalsAskParentsMessage: 'Message',
    goalsAskParentsMessagePlaceholder: 'Help me save for my dream! 🙏',
    goalsAskParentsSend: 'Send request',
    goalsCloseGoal: 'Close savings goal',
    goalsCloseConfirmTitle: 'Close this savings goal?',
    goalsCloseConfirmDesc: 'Money will be transferred to your card. Progress and goal will be lost. You\'ll have to start over.',
    goalsCloseConfirmYes: 'Yes, close',
    goalsCloseConfirmNo: 'Cancel',
    goalsClosedSuccess: 'Money transferred to card',
    notifTitle: 'Operation completed',
    notifDetails: 'Details',
    notifOk: 'OK',
    notifOperationAmount: 'Amount',
    notifOperationType: 'Type',
    notifOperationDate: 'Date',
    quizRewardCredited: 'Reward credited to your card! 💰',
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
    settingsTitle: 'More',
    settingsLanguage: 'Language',
    settingsLogout: 'Log out',
    settingsTutorial: 'How to use?',
    settingsTutorialDesc: 'Reminder about app features',
    settingsFeatureBalance: '💳 Balance — see your card money',
    settingsFeatureGoals: '🎯 Savings — save for dreams',
    settingsFeatureHistory: '📊 History — where money goes',
    settingsFeatureFeedback: '💬 Feedback — write to us',
    settingsTheme: 'App Theme',
    settingsThemeDesc: 'Choose a style you like',
    settingsAchievements: 'My Achievements',
    settingsAchievementsDesc: 'Collect rewards for activity!',
    settingsAchievementLocked: 'Complete the task to unlock',
    settingsAchievementProgress: 'earned',
    navHome: 'Home',
    navHistory: 'History',
    navGoals: 'Savings',
    navSettings: 'More',
    currencySuffix: 'sum',
    storyFinTip: 'Did you know? If you save 1,000 sum every day, in a year you\'ll have 365,000 sum! 🤯',
    orderCardTitle: 'HUMO Pay Kids Payment Sticker',
    orderCardDesc: 'Stick HUMO Pay on the back of your phone and pay with a single tap!',
    orderCardStep1: 'Ask mom or dad to order it',
    orderCardStep2: 'When it\'s ready, come with them to pick it up',
    orderCardStep3: 'Stick it on your phone — pay, save and use other app features! 🎉',
    orderCardGotIt: 'Got it!',
    orderCardShare: 'Share link with parents 📤',
    quizTitle: 'Financial Quest 🧠',
    quizIntro: 'Answer 5 financial literacy questions and earn bonuses!',
    quizReward: 'For each correct answer — 10 sum',
    quizStart: 'Start quest',
    quizCorrect: 'Correct! 🎉',
    quizWrong: 'Not quite...',
    quizNext: 'Next',
    quizFinishTitle: 'Quest complete!',
    quizFinishDesc: 'Great job! Keep learning about financial literacy.',
    quizLastTime: 'Last time',
    quizComeBack: 'Come back in a week for new questions! 📅',
    quizDone: 'Go back',
    profileEditNamePlaceholder: 'What\'s your name?',
    profileEditSave: 'Save',
  },
};
