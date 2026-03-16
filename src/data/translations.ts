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
  transferContactBook: string;
  transferContactHint: string;
  transferSelectContact: string;
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
  goalsCalcButton: string;
  goalsNewButton: string;
  goalsAboutAccount: string;
  goalsActions: string;
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
  orderBenefit1Title: string;
  orderBenefit1Desc: string;
  orderBenefit2Title: string;
  orderBenefit2Desc: string;
  orderBenefit3Title: string;
  orderBenefit3Desc: string;
  orderBenefit4Title: string;
  orderBenefit4Desc: string;
  orderBenefitsHeading: string;
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
  // Dynamic UI text
  defaultUserName: string;
  onboardNamePlaceholder: string;
  goalsMilestoneStart: string;
  goalsMilestoneGoal: string;
  goalsAmountOf: string;
  goalsFromCard: string;
  goalsToCard: string;
  donutTotal: string;
  donutOperations: string;
  notifDescription: string;
  contactDad: string;
  contactMom: string;
  contactGrandma: string;
  contactGrandpa: string;
  contactBrother: string;
  contactSister: string;
  // Avatars
  avatarFox: string; avatarPanda: string; avatarLion: string; avatarCat: string; avatarBunny: string;
  avatarBear: string; avatarUnicorn: string; avatarFrog: string; avatarButterfly: string; avatarKoala: string;
  avatarOwl: string; avatarPenguin: string; avatarShark: string; avatarTiger: string; avatarParrot: string;
  // Themes
  themeCalmName: string; themePlayfulName: string; themeAnimeName: string; themeNationalName: string;
  // Expense categories
  catFood: string; catEducation: string; catEntertainment: string; catTransport: string;
  catCash: string; catSavings: string; catTransfer: string; catOther: string;
  // Achievements
  achNoCashName: string; achNoCashDesc: string; achNoCashMsg: string;
  achSaverName: string; achSaverDesc: string; achSaverMsg: string;
  achDailyName: string; achDailyDesc: string; achDailyMsg: string;
  achCustomizerName: string; achCustomizerDesc: string; achCustomizerMsg: string;
  achDreamerName: string; achDreamerDesc: string; achDreamerMsg: string;
  achQuizName: string; achQuizDesc: string; achQuizMsg: string;
  // Stories
  storyTipTitle: string; storyTipContent: string;
  storyQuizTitle: string; storyQuizContent: string;
  storyHumoTitle: string; storyHumoContent: string;
  storyBankTitle: string; storyBankContent: string;
  storyMoneyWorldTitle: string; storyMoneyWorldContent: string;
  storyRuleTitle: string; storyRuleContent: string;
  storyGoalTitle: string; storyGoalContent: string;
  storyCoinsTitle: string; storyCoinsContent: string;
  storyPizzaTitle: string; storyPizzaContent: string;
  storyHeroTitle: string; storyHeroContent: string;
  storyFunFactTitle: string; storyFunFactContent: string;
  storyGreatTitle: string; storyGreatContent: string;
  storyDrawTitle: string; storyDrawContent: string;
  storyShareTitle: string; storyShareContent: string;
  storyDigitalTitle: string; storyDigitalContent: string;
  storyChallengeTitle: string; storyChallengeContent: string;
  // Transaction templates
  txFromMom: string; txFromDad: string; txFromGrandma: string; txFromGrandpa: string; txGoodGrades: string;
  txIceCream: string; txSchoolShop: string; txJuiceBun: string; txFastFood: string; txGames: string;
  txStationery: string; txTransport: string; txSnacks: string; txDrinks: string; txGiftFriend: string;
  txToBike: string; txPiggyBank: string; txCashWithdraw: string; txATM: string;
  txSourceShop: string; txSourceSchool: string; txSourceBazaar: string; txSourceCafe: string;
  txSourceMetro: string;
  // Quiz
  quizQ1: string; quizQ1a: string; quizQ1b: string; quizQ1c: string; quizQ1d: string; quizQ1exp: string;
  quizQ2: string; quizQ2a: string; quizQ2b: string; quizQ2c: string; quizQ2d: string; quizQ2exp: string;
  quizQ3: string; quizQ3a: string; quizQ3b: string; quizQ3c: string; quizQ3d: string; quizQ3exp: string;
  quizQ4: string; quizQ4a: string; quizQ4b: string; quizQ4c: string; quizQ4d: string; quizQ4exp: string;
  quizQ5: string; quizQ5a: string; quizQ5b: string; quizQ5c: string; quizQ5d: string; quizQ5exp: string;
  // Goal defaults
  goalBike: string; goalBikeReason: string; goalHeadphones: string; goalHeadphonesReason: string;
  // Dynamic transaction descriptions
  txClosePiggy: string; txToPiggy: string; txFromPiggy: string; txQuizReward: string; txQuest: string;
  //
  testsTitle: string;
  testsSettingsDesc: string;
  testsDesc: string;
  testsQuestions: string;
  testsQuestion: string;
  testsCorrect: string;
  testsWrong: string;
  testsNext: string;
  testsFinish: string;
  testsResultTitle: string;
  testsResultGreat: string;
  testsResultGood: string;
  testsResultTryAgain: string;
  testsRetry: string;
  testsBackToList: string;
  testTopicBudget: string;
  testTopicSecurity: string;
  testTopicSavings: string;
  testTopicSpending: string;
  testTopicDigital: string;
  testAuthorCB: string;
  testAuthorMVD: string;
  testAuthorMinEdu: string;
  testAuthorMinICT: string;
  testBudgetQ1: string; testBudgetQ1a: string; testBudgetQ1b: string; testBudgetQ1c: string; testBudgetQ1d: string; testBudgetQ1exp: string;
  testBudgetQ2: string; testBudgetQ2a: string; testBudgetQ2b: string; testBudgetQ2c: string; testBudgetQ2d: string; testBudgetQ2exp: string;
  testBudgetQ3: string; testBudgetQ3a: string; testBudgetQ3b: string; testBudgetQ3c: string; testBudgetQ3d: string; testBudgetQ3exp: string;
  testBudgetQ4: string; testBudgetQ4a: string; testBudgetQ4b: string; testBudgetQ4c: string; testBudgetQ4d: string; testBudgetQ4exp: string;
  testBudgetQ5: string; testBudgetQ5a: string; testBudgetQ5b: string; testBudgetQ5c: string; testBudgetQ5d: string; testBudgetQ5exp: string;
  testSecurityQ1: string; testSecurityQ1a: string; testSecurityQ1b: string; testSecurityQ1c: string; testSecurityQ1d: string; testSecurityQ1exp: string;
  testSecurityQ2: string; testSecurityQ2a: string; testSecurityQ2b: string; testSecurityQ2c: string; testSecurityQ2d: string; testSecurityQ2exp: string;
  testSecurityQ3: string; testSecurityQ3a: string; testSecurityQ3b: string; testSecurityQ3c: string; testSecurityQ3d: string; testSecurityQ3exp: string;
  testSecurityQ4: string; testSecurityQ4a: string; testSecurityQ4b: string; testSecurityQ4c: string; testSecurityQ4d: string; testSecurityQ4exp: string;
  testSecurityQ5: string; testSecurityQ5a: string; testSecurityQ5b: string; testSecurityQ5c: string; testSecurityQ5d: string; testSecurityQ5exp: string;
  testSavingsQ1: string; testSavingsQ1a: string; testSavingsQ1b: string; testSavingsQ1c: string; testSavingsQ1d: string; testSavingsQ1exp: string;
  testSavingsQ2: string; testSavingsQ2a: string; testSavingsQ2b: string; testSavingsQ2c: string; testSavingsQ2d: string; testSavingsQ2exp: string;
  testSavingsQ3: string; testSavingsQ3a: string; testSavingsQ3b: string; testSavingsQ3c: string; testSavingsQ3d: string; testSavingsQ3exp: string;
  testSavingsQ4: string; testSavingsQ4a: string; testSavingsQ4b: string; testSavingsQ4c: string; testSavingsQ4d: string; testSavingsQ4exp: string;
  testSavingsQ5: string; testSavingsQ5a: string; testSavingsQ5b: string; testSavingsQ5c: string; testSavingsQ5d: string; testSavingsQ5exp: string;
  testSpendingQ1: string; testSpendingQ1a: string; testSpendingQ1b: string; testSpendingQ1c: string; testSpendingQ1d: string; testSpendingQ1exp: string;
  testSpendingQ2: string; testSpendingQ2a: string; testSpendingQ2b: string; testSpendingQ2c: string; testSpendingQ2d: string; testSpendingQ2exp: string;
  testSpendingQ3: string; testSpendingQ3a: string; testSpendingQ3b: string; testSpendingQ3c: string; testSpendingQ3d: string; testSpendingQ3exp: string;
  testSpendingQ4: string; testSpendingQ4a: string; testSpendingQ4b: string; testSpendingQ4c: string; testSpendingQ4d: string; testSpendingQ4exp: string;
  testSpendingQ5: string; testSpendingQ5a: string; testSpendingQ5b: string; testSpendingQ5c: string; testSpendingQ5d: string; testSpendingQ5exp: string;
  testDigitalQ1: string; testDigitalQ1a: string; testDigitalQ1b: string; testDigitalQ1c: string; testDigitalQ1d: string; testDigitalQ1exp: string;
  testDigitalQ2: string; testDigitalQ2a: string; testDigitalQ2b: string; testDigitalQ2c: string; testDigitalQ2d: string; testDigitalQ2exp: string;
  testDigitalQ3: string; testDigitalQ3a: string; testDigitalQ3b: string; testDigitalQ3c: string; testDigitalQ3d: string; testDigitalQ3exp: string;
  testDigitalQ4: string; testDigitalQ4a: string; testDigitalQ4b: string; testDigitalQ4c: string; testDigitalQ4d: string; testDigitalQ4exp: string;
  testDigitalQ5: string; testDigitalQ5a: string; testDigitalQ5b: string; testDigitalQ5c: string; testDigitalQ5d: string; testDigitalQ5exp: string;
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
    transferContactBook: 'Адресная книга',
    transferContactHint: 'Переводы доступны только контактам из адресной книги — для твоей безопасности 🔒',
    transferSelectContact: 'Выбери получателя',
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
    goalsCalcButton: 'Сколько заработаю',
    goalsNewButton: 'Открыть ещё одну копилку',
    goalsAboutAccount: 'О счёте',
    goalsActions: 'Действия',
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
    orderBenefitsHeading: 'Что даёт стикер ребёнку',
    orderBenefit1Title: 'Кэшбэк за покупки',
    orderBenefit1Desc: 'Получай возврат денег за каждую покупку — копи бонусы и трать с умом!',
    orderBenefit2Title: 'Удобно копить',
    orderBenefit2Desc: 'Ставь цели и копи на мечту — приложение подскажет, сколько осталось!',
    orderBenefit3Title: 'Свои деньги',
    orderBenefit3Desc: 'Учись распоряжаться деньгами как взрослый — под присмотром родителей',
    orderBenefit4Title: 'Безопасные платежи',
    orderBenefit4Desc: 'Оплачивай покупки одним касанием телефона — быстро и безопасно!',
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
    defaultUserName: 'Друг',
    onboardNamePlaceholder: 'Как тебя зовут?',
    goalsMilestoneStart: 'Старт',
    goalsMilestoneGoal: 'Цель!',
    goalsAmountOf: 'из',
    goalsFromCard: 'с карты',
    goalsToCard: 'на карту',
    donutTotal: 'Всего',
    donutOperations: 'операций',
    notifDescription: 'Описание',
    contactDad: 'Папа',
    contactMom: 'Мама',
    contactGrandma: 'Бабушка',
    contactGrandpa: 'Дедушка',
    contactBrother: 'Брат',
    contactSister: 'Сестра',
    avatarFox: 'Лисёнок', avatarPanda: 'Панда', avatarLion: 'Львёнок', avatarCat: 'Котик', avatarBunny: 'Зайка',
    avatarBear: 'Мишка', avatarUnicorn: 'Единорог', avatarFrog: 'Лягушонок', avatarButterfly: 'Бабочка', avatarKoala: 'Коала',
    avatarOwl: 'Совёнок', avatarPenguin: 'Пингвин', avatarShark: 'Акула', avatarTiger: 'Тигрёнок', avatarParrot: 'Попугай',
    themeCalmName: 'Спокойная', themePlayfulName: 'Игривая', themeAnimeName: 'Аниме', themeNationalName: 'Национальная',
    catFood: 'Еда', catEducation: 'Учёба', catEntertainment: 'Развлечения', catTransport: 'Транспорт',
    catCash: 'Наличные', catSavings: 'Копилки', catTransfer: 'Переводы', catOther: 'Другое',
    achNoCashName: 'Безналичный герой', achNoCashDesc: 'Не снимай наличные 30 дней', achNoCashMsg: 'Ты целый месяц обходился без наличных! Круто!',
    achSaverName: 'Мастер накоплений', achSaverDesc: 'Накопи 100 000 сум в копилках', achSaverMsg: 'Ты накопил больше 100 000 сум! Отличная работа!',
    achDailyName: 'Верный друг', achDailyDesc: 'Заходи в приложение 7 дней подряд', achDailyMsg: 'Целая неделя с нами! Ты настоящий финансовый герой!',
    achCustomizerName: 'Дизайнер', achCustomizerDesc: 'Настрой приложение под себя', achCustomizerMsg: 'Ты сделал приложение своим! Красота!',
    achDreamerName: 'Мечтатель', achDreamerDesc: 'Создай свою первую копилку', achDreamerMsg: 'Первый шаг к мечте сделан! Продолжай!',
    achQuizName: 'Умник', achQuizDesc: 'Ответь правильно на все вопросы квиза', achQuizMsg: 'Все ответы верные! Ты настоящий финансовый гений!',
    storyTipTitle: 'Совет дня', storyTipContent: 'Перед покупкой подожди 24 часа — может, передумаешь!',
    storyQuizTitle: 'Решай — зарабатывай!', storyQuizContent: 'Ответь на вопросы и заработай сумы!',
    storyHumoTitle: 'Что такое HUMO?', storyHumoContent: 'HUMO — это национальная платёжная система Узбекистана. С её помощью можно оплачивать покупки картой или стикером, переводить деньги и копить. HUMO работает по всей стране — в магазинах, кафе и онлайн!',
    storyBankTitle: 'Что такое банк?', storyBankContent: 'Банк — это место, где хранят деньги и дают их в долг другим людям. За хранение банк платит тебе проценты!',
    storyMoneyWorldTitle: 'Деньги мира', storyMoneyWorldContent: 'В Японии на монетах изображены цветы, а в Австралии — животные! Узбекский сум назван в честь золота.',
    storyRuleTitle: 'Правило 50/30/20', storyRuleContent: '50% на нужное, 30% на желания, 20% — в копилку! Это правило помогает управлять деньгами.',
    storyGoalTitle: 'Цель = мотивация', storyGoalContent: 'Люди, которые ставят цели, копят в 3 раза быстрее! Поставь свою цель прямо сейчас.',
    storyCoinsTitle: 'Игра на монетки', storyCoinsContent: 'Знаешь ли ты, что первые деньги были из ракушек? А монеты придумали 2700 лет назад в Лидии!',
    storyPizzaTitle: 'Пицца или копилка?', storyPizzaContent: 'Если вместо одной пиццы в неделю откладывать деньги, через год у тебя будет целый велосипед!',
    storyHeroTitle: 'Финансовый герой', storyHeroContent: 'Настоящий герой умеет не только зарабатывать, но и разумно тратить. Ты уже на пути!',
    storyFunFactTitle: 'Весёлый факт', storyFunFactContent: 'Самая дорогая монета в мире стоит 18,9 миллионов долларов! Это серебряный доллар 1794 года.',
    storyGreatTitle: 'Ты молодец!', storyGreatContent: 'Каждый раз, когда ты открываешь приложение, ты учишься управлять деньгами. Так держать!',
    storyDrawTitle: 'Нарисуй мечту', storyDrawContent: 'Нарисуй то, на что копишь, и повесь рисунок на стену. Визуализация помогает достигать целей!',
    storyShareTitle: 'Делись добром', storyShareContent: 'Когда копишь деньги, можно часть отложить на подарки друзьям. Щедрость делает счастливее!',
    storyDigitalTitle: 'Цифровые деньги', storyDigitalContent: 'Сегодня большинство денег существуют только в компьютерах. Наличные — лишь малая часть!',
    storyChallengeTitle: 'Челлендж недели', storyChallengeContent: 'Попробуй целую неделю записывать все свои траты. Ты удивишься, куда уходят деньги!',
    txFromMom: 'От мамы', txFromDad: 'От папы', txFromGrandma: 'Подарок от бабушки', txFromGrandpa: 'Подарок от дедушки', txGoodGrades: 'За хорошие оценки',
    txIceCream: 'Мороженое', txSchoolShop: 'Школьный магазин', txJuiceBun: 'Сок и булочка', txFastFood: 'Фаст-фуд', txGames: 'Игры',
    txStationery: 'Канцтовары', txTransport: 'Транспорт', txSnacks: 'Снеки', txDrinks: 'Напитки', txGiftFriend: 'Подарок другу',
    txToBike: 'На велосипед', txPiggyBank: 'Копилка', txCashWithdraw: 'Снятие наличных', txATM: 'Банкомат',
    txSourceShop: 'Магазин', txSourceSchool: 'Школа', txSourceBazaar: 'Базар', txSourceCafe: 'Кафе', txSourceMetro: 'Метро',
    quizQ1: 'Что лучше делать с карманными деньгами?', quizQ1a: 'Потратить всё сразу', quizQ1b: 'Часть потратить, часть отложить', quizQ1c: 'Спрятать под подушку', quizQ1d: 'Отдать другу', quizQ1exp: 'Правильно! Лучше часть потратить на нужное, а часть отложить в копилку для большой мечты.',
    quizQ2: 'Что такое "копилка" в банке?', quizQ2a: 'Стеклянная банка', quizQ2b: 'Специальный счёт для накоплений', quizQ2c: 'Место где печатают деньги', quizQ2d: 'Игрушка', quizQ2exp: 'Верно! Копилка в банке — это специальный счёт, где деньги не только хранятся, но и растут благодаря процентам.',
    quizQ3: 'Зачем ставить финансовую цель?', quizQ3a: 'Это не нужно', quizQ3b: 'Чтобы родители были довольны', quizQ3c: 'Чтобы знать сколько и зачем копить', quizQ3d: 'Чтобы похвастаться', quizQ3exp: 'Точно! Цель помогает понять, сколько нужно откладывать и мотивирует копить.',
    quizQ4: 'Что значит "жить по средствам"?', quizQ4a: 'Не тратить вообще', quizQ4b: 'Тратить не больше, чем получаешь', quizQ4c: 'Тратить всё сразу', quizQ4d: 'Брать в долг', quizQ4exp: 'Правильно! Это значит тратить не больше, чем у тебя есть. Важное правило для всех!',
    quizQ5: 'Что такое проценты по вкладу?', quizQ5a: 'Штраф банка', quizQ5b: 'Деньги, которые банк платит тебе за хранение', quizQ5c: 'Комиссия за перевод', quizQ5d: 'Цена карты', quizQ5exp: 'Верно! Банк платит тебе проценты за то, что ты хранишь деньги у него. Твои деньги растут!',
    goalBike: 'Велосипед', goalBikeReason: 'Кататься с друзьями по парку!', goalHeadphones: 'Наушники', goalHeadphonesReason: 'Слушать музыку на прогулке',
    txClosePiggy: 'Закрытие копилки', txToPiggy: 'В копилку', txFromPiggy: 'Из копилки', txQuizReward: 'Награда за квест 🧠', txQuest: 'Квест',
    testsTitle: 'Тесты',
    testsSettingsDesc: 'Проверь свои знания по финансовой грамотности',
    testsDesc: 'Тесты разработаны Центральным банком, Министерством образования и другими институтами Узбекистана для повышения финансовой грамотности молодёжи.',
    testsQuestions: 'вопросов',
    testsQuestion: 'Вопрос',
    testsCorrect: 'Правильно!',
    testsWrong: 'Неверно',
    testsNext: 'Следующий',
    testsFinish: 'Завершить',
    testsResultTitle: 'Результат',
    testsResultGreat: 'Отлично! Ты настоящий финансовый эксперт! 🌟',
    testsResultGood: 'Хорошо! Но есть куда расти 💪',
    testsResultTryAgain: 'Попробуй ещё раз, ты справишься! 📖',
    testsRetry: 'Пройти снова',
    testsBackToList: 'К списку',
    testTopicBudget: 'Планирование бюджета',
    testTopicSecurity: 'Безопасность',
    testTopicSavings: 'Сбережения и цели',
    testTopicSpending: 'Разумные расходы',
    testTopicDigital: 'Цифровая гигиена',
    testAuthorCB: 'Центральный банк РУз',
    testAuthorMVD: 'МВД Узбекистана',
    testAuthorMinEdu: 'Министерство образования',
    testAuthorMinICT: 'Министерство цифровых технологий',
    testBudgetQ1: 'Что такое бюджет?',
    testBudgetQ1a: 'Только список расходов',
    testBudgetQ1b: 'План доходов и расходов',
    testBudgetQ1c: 'Сумма на банковском счёте',
    testBudgetQ1d: 'Деньги от родителей',
    testBudgetQ1exp: 'Бюджет — это план, который помогает распределить доходы и расходы.',
    testBudgetQ2: 'Тебе дали 50 000 сум на неделю. Что лучше сделать?',
    testBudgetQ2a: 'Потратить всё сразу',
    testBudgetQ2b: 'Отложить всё в копилку',
    testBudgetQ2c: 'Разделить на части: на каждый день + отложить',
    testBudgetQ2d: 'Отдать другу',
    testBudgetQ2exp: 'Лучше всего разделить деньги: часть на ежедневные нужды, часть — в копилку.',
    testBudgetQ3: 'Что такое «карманные деньги»?',
    testBudgetQ3a: 'Деньги, которые дают родители на личные расходы',
    testBudgetQ3b: 'Деньги в кармане штанов',
    testBudgetQ3c: 'Зарплата',
    testBudgetQ3d: 'Кредит',
    testBudgetQ3exp: 'Карманные деньги — это сумма, которую родители дают детям, чтобы они учились управлять финансами.',
    testBudgetQ4: 'Зачем записывать расходы?',
    testBudgetQ4a: 'Чтобы похвастаться',
    testBudgetQ4b: 'Незачем, это скучно',
    testBudgetQ4c: 'Чтобы понимать, куда уходят деньги',
    testBudgetQ4d: 'Чтобы родители не ругали',
    testBudgetQ4exp: 'Записывая расходы, ты видишь, на что тратишь, и можешь планировать лучше.',
    testBudgetQ5: 'Как лучше всего копить на мечту?',
    testBudgetQ5a: 'Ждать, пока деньги появятся сами',
    testBudgetQ5b: 'Откладывать понемногу каждую неделю',
    testBudgetQ5c: 'Попросить всё сразу у родителей',
    testBudgetQ5d: 'Занять у друзей',
    testBudgetQ5exp: 'Регулярные небольшие накопления — самый надёжный путь к цели!',
    testSecurityQ1: 'Тебе пришло SMS: «Вы выиграли приз! Отправьте код». Что делать?',
    testSecurityQ1a: 'Быстрее отправить код',
    testSecurityQ1b: 'Позвонить по номеру из SMS',
    testSecurityQ1c: 'Не отвечать и сообщить родителям',
    testSecurityQ1d: 'Переслать друзьям',
    testSecurityQ1exp: 'Это мошенничество! Никогда не отправляй коды незнакомым. Расскажи родителям.',
    testSecurityQ2: 'Можно ли сообщать PIN-код карты другим людям?',
    testSecurityQ2a: 'Нет, никогда и никому',
    testSecurityQ2b: 'Да, лучшему другу можно',
    testSecurityQ2c: 'Да, если просят по телефону',
    testSecurityQ2d: 'Только учителю',
    testSecurityQ2exp: 'PIN-код — секретный! Его нельзя говорить никому, даже друзьям.',
    testSecurityQ3: 'Что такое фишинг?',
    testSecurityQ3a: 'Вид рыбалки',
    testSecurityQ3b: 'Новая игра',
    testSecurityQ3c: 'Тип карты',
    testSecurityQ3d: 'Обман для кражи данных через поддельные сайты',
    testSecurityQ3exp: 'Фишинг — это обман, когда мошенники создают поддельные сайты или письма для кражи данных.',
    testSecurityQ4: 'Как создать безопасный пароль?',
    testSecurityQ4a: '123456',
    testSecurityQ4b: 'Сочетание букв, цифр и символов',
    testSecurityQ4c: 'Дата рождения',
    testSecurityQ4d: 'Имя питомца',
    testSecurityQ4exp: 'Надёжный пароль содержит разные символы и не связан с личной информацией.',
    testSecurityQ5: 'Что делать, если потерял карту?',
    testSecurityQ5a: 'Сразу заблокировать через приложение или позвонить в банк',
    testSecurityQ5b: 'Подождать, может найдётся',
    testSecurityQ5c: 'Ничего не делать',
    testSecurityQ5d: 'Написать об этом в соцсетях',
    testSecurityQ5exp: 'При потере карты нужно немедленно её заблокировать, чтобы никто не воспользовался.',
    testSavingsQ1: 'Что такое сбережения?',
    testSavingsQ1a: 'Деньги, которые ты тратишь каждый день',
    testSavingsQ1b: 'Деньги, которые ты откладываешь на будущее',
    testSavingsQ1c: 'Деньги, которые ты даришь',
    testSavingsQ1d: 'Деньги на обед',
    testSavingsQ1exp: 'Сбережения — это деньги, отложенные для будущих целей и мечт.',
    testSavingsQ2: 'Куда лучше всего класть сбережения?',
    testSavingsQ2a: 'Под подушку',
    testSavingsQ2b: 'В карман',
    testSavingsQ2c: 'На сберегательный счёт в банке',
    testSavingsQ2d: 'Отдать другу',
    testSavingsQ2exp: 'Сберегательный счёт защищает деньги и начисляет проценты.',
    testSavingsQ3: 'Как поставить финансовую цель?',
    testSavingsQ3a: 'Определить, что хочешь, посчитать сумму и срок',
    testSavingsQ3b: 'Просто мечтать',
    testSavingsQ3c: 'Попросить у родителей',
    testSavingsQ3d: 'Не ставить целей',
    testSavingsQ3exp: 'Чёткая цель помогает спланировать накопления: что, сколько и когда.',
    testSavingsQ4: 'Ты копишь на наушники за 200 000 сум. У тебя есть 150 000. Что делать?',
    testSavingsQ4a: 'Купить что-то другое',
    testSavingsQ4b: 'Забыть о цели',
    testSavingsQ4c: 'Взять в долг',
    testSavingsQ4d: 'Продолжить копить — осталось немного!',
    testSavingsQ4exp: 'Ты уже близко к цели! Продолжай — терпение вознаграждается.',
    testSavingsQ5: 'Что такое процент по вкладу?',
    testSavingsQ5a: 'Штраф банка',
    testSavingsQ5b: 'Дополнительные деньги, которые банк начисляет на твои сбережения',
    testSavingsQ5c: 'Плата за обслуживание',
    testSavingsQ5d: 'Налог',
    testSavingsQ5exp: 'Банк начисляет проценты — это вознаграждение за то, что ты хранишь деньги на счёте.',
    testSpendingQ1: 'Что такое «нужды» и «желания»?',
    testSpendingQ1a: 'Одно и то же',
    testSpendingQ1b: 'Желания важнее нужд',
    testSpendingQ1c: 'Нужды — необходимое, желания — приятное, но не обязательное',
    testSpendingQ1d: 'Нужды — только еда',
    testSpendingQ1exp: 'Нужды — то, без чего не обойтись (еда, школа). Желания — приятные, но не обязательные вещи.',
    testSpendingQ2: 'Ты хочешь купить новую игру и новый пенал. Денег хватает только на одно. Что важнее?',
    testSpendingQ2a: 'Пенал — он нужен для учёбы',
    testSpendingQ2b: 'Игра — она веселее',
    testSpendingQ2c: 'Купить оба в кредит',
    testSpendingQ2d: 'Ничего не покупать',
    testSpendingQ2exp: 'Сначала — необходимое (пенал для учёбы), потом — развлечения.',
    testSpendingQ3: 'Что такое импульсивная покупка?',
    testSpendingQ3a: 'Покупка по плану',
    testSpendingQ3b: 'Покупка без обдумывания, по эмоциям',
    testSpendingQ3c: 'Покупка в кредит',
    testSpendingQ3d: 'Покупка со скидкой',
    testSpendingQ3exp: 'Импульсивная покупка — это когда покупаешь что-то спонтанно, без обдумывания.',
    testSpendingQ4: 'Как можно сэкономить в магазине?',
    testSpendingQ4a: 'Покупать всё подряд',
    testSpendingQ4b: 'Не ходить в магазин',
    testSpendingQ4c: 'Покупать самое дорогое',
    testSpendingQ4d: 'Сравнивать цены и покупать по списку',
    testSpendingQ4exp: 'Список покупок и сравнение цен помогают тратить разумно.',
    testSpendingQ5: 'Что такое скидка?',
    testSpendingQ5a: 'Снижение цены товара на определённый процент',
    testSpendingQ5b: 'Увеличение цены',
    testSpendingQ5c: 'Бесплатный товар',
    testSpendingQ5d: 'Обман продавца',
    testSpendingQ5exp: 'Скидка — снижение цены. Но важно покупать только то, что действительно нужно!',
    testDigitalQ1: 'Что нужно делать с паролем от приложения?',
    testDigitalQ1a: 'Написать на бумажке и приклеить к телефону',
    testDigitalQ1b: 'Рассказать другу',
    testDigitalQ1c: 'Держать в секрете и не делиться',
    testDigitalQ1d: 'Использовать «123456»',
    testDigitalQ1exp: 'Пароль должен быть секретным. Не делись им и не записывай на видном месте.',
    testDigitalQ2: 'Стоит ли скачивать приложения из неизвестных источников?',
    testDigitalQ2a: 'Да, если друг посоветовал',
    testDigitalQ2b: 'Да, если бесплатно',
    testDigitalQ2c: 'Да, если красивое',
    testDigitalQ2d: 'Нет, только из официальных магазинов',
    testDigitalQ2exp: 'Приложения из неизвестных источников могут содержать вирусы. Скачивай только из App Store или Google Play.',
    testDigitalQ3: 'Что делать, если незнакомец просит личные данные в интернете?',
    testDigitalQ3a: 'Отказать и сообщить родителям',
    testDigitalQ3b: 'Дать данные, если он вежливый',
    testDigitalQ3c: 'Дать ненастоящие данные',
    testDigitalQ3d: 'Спросить у друзей',
    testDigitalQ3exp: 'Никогда не давай личные данные незнакомцам в интернете. Расскажи родителям.',
    testDigitalQ4: 'Как часто нужно менять пароли?',
    testDigitalQ4a: 'Никогда',
    testDigitalQ4b: 'Регулярно, раз в несколько месяцев',
    testDigitalQ4c: 'Каждый день',
    testDigitalQ4d: 'Только если забыл',
    testDigitalQ4exp: 'Пароли нужно менять регулярно для безопасности.',
    testDigitalQ5: 'Можно ли подключаться к бесплатному Wi-Fi в кафе для банковских операций?',
    testDigitalQ5a: 'Да, это удобно',
    testDigitalQ5b: 'Да, если быстро',
    testDigitalQ5c: 'Лучше не стоит — данные могут перехватить',
    testDigitalQ5d: 'Только если есть пароль у Wi-Fi',
    testDigitalQ5exp: 'Открытый Wi-Fi опасен для финансовых операций — злоумышленники могут перехватить данные.',
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
    transferContactBook: 'Kontaktlar kitobi',
    transferContactHint: 'O\'tkazmalar faqat kontaktlar kitobidagi kontaktlarga — xavfsizligingiz uchun 🔒',
    transferSelectContact: 'Qabul qiluvchini tanlang',
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
    goalsCalcButton: 'Qancha ishlayman',
    goalsNewButton: 'Yana bir to\'plagich ochish',
    goalsAboutAccount: 'Hisob haqida',
    goalsActions: 'Amallar',
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
    orderBenefitsHeading: 'Stiker bolaga nima beradi',
    orderBenefit1Title: 'Xaridlar uchun keshbek',
    orderBenefit1Desc: 'Har bir xarid uchun pul qaytariladi — bonuslarni yig\' va oqilona sarfla!',
    orderBenefit2Title: 'Qulay jamg\'arish',
    orderBenefit2Desc: 'Maqsad qo\'y va orzuying uchun yig\' — ilova qancha qolganini ko\'rsatadi!',
    orderBenefit3Title: 'O\'z puling',
    orderBenefit3Desc: 'Kattalar kabi pulni boshqarishni o\'rgan — ota-onalar nazorati ostida',
    orderBenefit4Title: 'Xavfsiz to\'lovlar',
    orderBenefit4Desc: 'Telefonni tegizib to\'la — tez va xavfsiz!',
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
    defaultUserName: 'Do\'st',
    onboardNamePlaceholder: 'Ismingni yoz',
    goalsMilestoneStart: 'Boshlash',
    goalsMilestoneGoal: 'Maqsad!',
    goalsAmountOf: 'dan',
    goalsFromCard: 'kartadan',
    goalsToCard: 'kartaga',
    donutTotal: 'Jami',
    donutOperations: 'operatsiya',
    notifDescription: 'Tavsif',
    contactDad: 'Dada',
    contactMom: 'Ona',
    contactGrandma: 'Buvi',
    contactGrandpa: 'Bobo',
    contactBrother: 'Aka',
    contactSister: 'Opa',
    avatarFox: 'Tulki', avatarPanda: 'Panda', avatarLion: 'Arslon', avatarCat: 'Mushuk', avatarBunny: 'Quyon',
    avatarBear: 'Ayiq', avatarUnicorn: 'Yagona shox', avatarFrog: 'Baqa', avatarButterfly: 'Kapalak', avatarKoala: 'Koala',
    avatarOwl: 'Boyqush', avatarPenguin: 'Pingvin', avatarShark: 'Akula', avatarTiger: 'Yo\'lbars', avatarParrot: 'To\'tiqush',
    themeCalmName: 'Tinch', themePlayfulName: 'O\'ynoqi', themeAnimeName: 'Anime', themeNationalName: 'Milliy',
    catFood: 'Ovqat', catEducation: 'O\'qish', catEntertainment: 'Ko\'ngilochar', catTransport: 'Transport',
    catCash: 'Naqd pul', catSavings: 'To\'plagich', catTransfer: 'O\'tkazmalar', catOther: 'Boshqa',
    achNoCashName: 'Naqdsiz qahramon', achNoCashDesc: '30 kun naqd pul yechma', achNoCashMsg: 'Bir oy naqd pulsiz yashading! Ajoyib!',
    achSaverName: 'Jamg\'arma ustasi', achSaverDesc: 'To\'plagichlarda 100 000 so\'m jamg\'ar', achSaverMsg: '100 000 so\'mdan ko\'p jamg\'arding! Zo\'r ish!',
    achDailyName: 'Sodiq do\'st', achDailyDesc: 'Ilovaga 7 kun ketma-ket kir', achDailyMsg: 'Bir hafta biz bilan! Sen haqiqiy moliyaviy qahramonsan!',
    achCustomizerName: 'Dizayner', achCustomizerDesc: 'Ilovani o\'zingga moslash', achCustomizerMsg: 'Ilovani o\'zingniki qilding! Chiroyli!',
    achDreamerName: 'Orzumand', achDreamerDesc: 'Birinchi to\'plagichni yarat', achDreamerMsg: 'Orzuga birinchi qadam qo\'yildi! Davom et!',
    achQuizName: 'Bilimdon', achQuizDesc: 'Viktorinaning barcha savollariga to\'g\'ri javob ber', achQuizMsg: 'Barcha javoblar to\'g\'ri! Sen haqiqiy moliyaviy dahosan!',
    storyTipTitle: 'Kun maslahati', storyTipContent: 'Xarid qilishdan oldin 24 soat kut — balki fikringa o\'zgarar!',
    storyQuizTitle: 'Hal qil — ishla!', storyQuizContent: 'Savollarga javob ber va so\'m ishla!',
    storyHumoTitle: 'HUMO nima?', storyHumoContent: 'HUMO — bu O\'zbekistonning milliy to\'lov tizimi. Uning yordamida karta yoki stiker bilan xarid qilish, pul o\'tkazish va jamg\'arish mumkin. HUMO butun mamlakatda ishlaydi!',
    storyBankTitle: 'Bank nima?', storyBankContent: 'Bank — bu pul saqlanadigan va boshqalarga qarzga beriladigan joy. Saqlash uchun bank senga foiz to\'laydi!',
    storyMoneyWorldTitle: 'Dunyo pullari', storyMoneyWorldContent: 'Yaponiyada tangalarda gullar, Avstraliyada esa hayvonlar tasvirlangan! O\'zbek so\'mi oltin sharafiga nomlangan.',
    storyRuleTitle: '50/30/20 qoidasi', storyRuleContent: '50% zaruriy narsalarga, 30% istaklarga, 20% — to\'plagichga! Bu qoida pulni boshqarishga yordam beradi.',
    storyGoalTitle: 'Maqsad = motivatsiya', storyGoalContent: 'Maqsad qo\'ygan odamlar 3 baravar tezroq jamg\'aradi! O\'z maqsadingni hoziroq qo\'y.',
    storyCoinsTitle: 'Tanga o\'yini', storyCoinsContent: 'Bilasanmi, birinchi pullar chig\'anoqlardan bo\'lgan? Tangalarni 2700 yil oldin Lidiyada o\'ylab topishgan!',
    storyPizzaTitle: 'Pitsa yoki to\'plagich?', storyPizzaContent: 'Agar haftada bitta pitsa o\'rniga pul yig\'sang, bir yilda butun velosiped bo\'ladi!',
    storyHeroTitle: 'Moliyaviy qahramon', storyHeroContent: 'Haqiqiy qahramon nafaqat pul ishlashni, balki oqilona sarflashni ham biladi. Sen allaqachon yo\'ldassan!',
    storyFunFactTitle: 'Qiziq fakt', storyFunFactContent: 'Dunyodagi eng qimmat tanga 18,9 million dollar turadi! Bu 1794-yilgi kumush dollar.',
    storyGreatTitle: 'Sen zo\'rsan!', storyGreatContent: 'Har safar ilovani ochganingda, pulni boshqarishni o\'rganasan. Shu tartibda davom et!',
    storyDrawTitle: 'Orzuni chiz', storyDrawContent: 'Nimaga pul yig\'ayotganingni chiz va devorga os. Vizualizatsiya maqsadga erishishga yordam beradi!',
    storyShareTitle: 'Yaxshilik qil', storyShareContent: 'Pul yig\'ayotganda, do\'stlarga sovg\'a uchun ham ajratish mumkin. Saxiylik baxtliroq qiladi!',
    storyDigitalTitle: 'Raqamli pullar', storyDigitalContent: 'Bugungi kunda ko\'pchilik pullar faqat kompyuterlarda mavjud. Naqd pul — bu kichik qism!',
    storyChallengeTitle: 'Hafta chellendji', storyChallengeContent: 'Bir hafta davomida barcha xarajatlaringni yozib bor. Pullar qayerga ketayotganiga hayron qolasan!',
    txFromMom: 'Onadan', txFromDad: 'Dadadan', txFromGrandma: 'Buvidan sovg\'a', txFromGrandpa: 'Bobodan sovg\'a', txGoodGrades: 'Yaxshi baholar uchun',
    txIceCream: 'Muzqaymoq', txSchoolShop: 'Maktab do\'koni', txJuiceBun: 'Sharbat va non', txFastFood: 'Fast-fud', txGames: 'O\'yinlar',
    txStationery: 'Ish qurollari', txTransport: 'Transport', txSnacks: 'Gazaklar', txDrinks: 'Ichimliklar', txGiftFriend: 'Do\'stga sovg\'a',
    txToBike: 'Velosipedga', txPiggyBank: 'To\'plagich', txCashWithdraw: 'Naqd pul yechish', txATM: 'Bankomat',
    txSourceShop: 'Do\'kon', txSourceSchool: 'Maktab', txSourceBazaar: 'Bozor', txSourceCafe: 'Kafe', txSourceMetro: 'Metro',
    quizQ1: 'Cho\'ntak puli bilan nima qilish yaxshi?', quizQ1a: 'Hammasini sarflash', quizQ1b: 'Bir qismini sarflab, bir qismini yig\'ish', quizQ1c: 'Yostiq ostiga yashirish', quizQ1d: 'Do\'stga berish', quizQ1exp: 'To\'g\'ri! Bir qismini zaruriy narsalarga sarflab, bir qismini to\'plagichga qo\'yish yaxshi.',
    quizQ2: 'Bankdagi "to\'plagich" nima?', quizQ2a: 'Shisha banka', quizQ2b: 'Jamg\'arish uchun maxsus hisob', quizQ2c: 'Pul bosiladigan joy', quizQ2d: 'O\'yinchoq', quizQ2exp: 'To\'g\'ri! Bankdagi to\'plagich — bu pul nafaqat saqlanadigan, balki foizlar tufayli o\'sadigan maxsus hisob.',
    quizQ3: 'Nima uchun moliyaviy maqsad qo\'yish kerak?', quizQ3a: 'Kerak emas', quizQ3b: 'Ota-ona rozi bo\'lishi uchun', quizQ3c: 'Qancha va nima uchun yig\'ishni bilish uchun', quizQ3d: 'Maqtanish uchun', quizQ3exp: 'To\'g\'ri! Maqsad qancha yig\'ish kerakligini tushunishga yordam beradi.',
    quizQ4: '"Imkoniyatiga qarab yashash" nima degani?', quizQ4a: 'Umuman sarflamaslik', quizQ4b: 'Oladigan puldan ko\'p sarflamaslik', quizQ4c: 'Hammasini sarflash', quizQ4d: 'Qarz olish', quizQ4exp: 'To\'g\'ri! Bu o\'zingda boridan ko\'p sarflamaslik degani. Hamma uchun muhim qoida!',
    quizQ5: 'Omonat foizi nima?', quizQ5a: 'Bank jarima', quizQ5b: 'Bank senga saqlash uchun to\'laydigan pul', quizQ5c: 'O\'tkazma komissiyasi', quizQ5d: 'Karta narxi', quizQ5exp: 'To\'g\'ri! Bank senga pul saqlash uchun foiz to\'laydi. Puling o\'sadi!',
    goalBike: 'Velosiped', goalBikeReason: 'Do\'stlar bilan parkda uchish!', goalHeadphones: 'Quloqchin', goalHeadphonesReason: 'Sayr paytida musiqa tinglash',
    txClosePiggy: 'To\'plagichni yopish', txToPiggy: 'To\'plagichga', txFromPiggy: 'To\'plagichdan', txQuizReward: 'Viktorina mukofoti 🧠', txQuest: 'Viktorina',
    testsTitle: 'Testlar',
    testsSettingsDesc: 'Moliyaviy savodxonligingizni tekshiring',
    testsDesc: "Testlar O'zbekiston Markaziy banki, Ta'lim vazirligi va boshqa tashkilotlar tomonidan yoshlar moliyaviy savodxonligini oshirish uchun ishlab chiqilgan.",
    testsQuestions: 'savol',
    testsQuestion: 'Savol',
    testsCorrect: "To'g'ri!",
    testsWrong: "Noto'g'ri",
    testsNext: 'Keyingi',
    testsFinish: 'Yakunlash',
    testsResultTitle: 'Natija',
    testsResultGreat: "Ajoyib! Sen haqiqiy moliyaviy ekspertsan! 🌟",
    testsResultGood: "Yaxshi! Lekin o'sishga joy bor 💪",
    testsResultTryAgain: "Yana urinib ko'r, uddalaysan! 📖",
    testsRetry: "Qayta o'tish",
    testsBackToList: "Ro'yxatga",
    testTopicBudget: 'Byudjet rejalashtirish',
    testTopicSecurity: 'Xavfsizlik',
    testTopicSavings: "Jamg'arma va maqsadlar",
    testTopicSpending: "Oqilona xarajatlar",
    testTopicDigital: 'Raqamli gigiena',
    testAuthorCB: "O'zbekiston Markaziy banki",
    testAuthorMVD: "O'zbekiston IIV",
    testAuthorMinEdu: "Ta'lim vazirligi",
    testAuthorMinICT: 'Raqamli texnologiyalar vazirligi',
    testBudgetQ1: 'Byudjet nima?', testBudgetQ1a: 'Faqat xarajatlar ro\'yxati', testBudgetQ1b: 'Daromad va xarajatlar rejasi', testBudgetQ1c: 'Bank hisobidagi summa', testBudgetQ1d: 'Ota-onadan olingan pul', testBudgetQ1exp: 'Byudjet — daromad va xarajatlarni taqsimlashga yordam beruvchi reja.',
    testBudgetQ2: 'Senga bir haftalik 50 000 so\'m berildi. Nima qilish yaxshi?', testBudgetQ2a: 'Hammasini sarflash', testBudgetQ2b: 'Hammasini tejash', testBudgetQ2c: 'Qismlarga bo\'lish: har kunga + tejash', testBudgetQ2d: 'Do\'stga berish', testBudgetQ2exp: 'Eng yaxshisi pulni bo\'lish: bir qismi kundalik ehtiyojlarga, bir qismi jamg\'armaga.',
    testBudgetQ3: '«Cho\'ntak puli» nima?', testBudgetQ3a: 'Ota-ona shaxsiy xarajatlarga beradigan pul', testBudgetQ3b: 'Shimning cho\'ntagidagi pul', testBudgetQ3c: 'Ish haqi', testBudgetQ3d: 'Kredit', testBudgetQ3exp: 'Cho\'ntak puli — ota-ona bolalarga moliyani boshqarishni o\'rgatish uchun beradigan summa.',
    testBudgetQ4: 'Nima uchun xarajatlarni yozib borish kerak?', testBudgetQ4a: 'Maqtanish uchun', testBudgetQ4b: 'Kerak emas', testBudgetQ4c: 'Pulning qayerga ketayotganini tushunish uchun', testBudgetQ4d: 'Ota-ona urushmasligi uchun', testBudgetQ4exp: 'Xarajatlarni yozib borish orqali pulni qaerga sarflayotganingni ko\'rasan.',
    testBudgetQ5: 'Orzuga eng yaxshi qanday pul yig\'ish mumkin?', testBudgetQ5a: 'Pul o\'zi paydo bo\'lishini kutish', testBudgetQ5b: 'Har hafta ozroq tejab borish', testBudgetQ5c: 'Ota-onadan hammasini so\'rash', testBudgetQ5d: 'Do\'stlardan qarz olish', testBudgetQ5exp: 'Muntazam kichik tejamkorlik — maqsadga eng ishonchli yo\'l!',
    testSecurityQ1: 'SMS keldi: «Siz sovrin yutdingiz! Kodni yuboring». Nima qilish kerak?', testSecurityQ1a: 'Tezroq kodni yuborish', testSecurityQ1b: 'SMS dagi raqamga qo\'ng\'iroq qilish', testSecurityQ1c: 'Javob bermaslik va ota-onaga aytish', testSecurityQ1d: 'Do\'stlarga jo\'natish', testSecurityQ1exp: 'Bu firibgarlik! Hech qachon notanishlarga kod yubormang.',
    testSecurityQ2: 'Karta PIN-kodini boshqalarga aytish mumkinmi?', testSecurityQ2a: 'Yo\'q, hech qachon', testSecurityQ2b: 'Ha, yaqin do\'stga', testSecurityQ2c: 'Ha, telefonda so\'rashsa', testSecurityQ2d: 'Faqat o\'qituvchiga', testSecurityQ2exp: 'PIN-kod maxfiy! Uni hech kimga aytib bo\'lmaydi.',
    testSecurityQ3: 'Fishing nima?', testSecurityQ3a: 'Baliq ovlash turi', testSecurityQ3b: 'Yangi o\'yin', testSecurityQ3c: 'Karta turi', testSecurityQ3d: 'Soxta saytlar orqali ma\'lumot o\'g\'irlash', testSecurityQ3exp: 'Fishing — firibgarlar soxta saytlar yaratib ma\'lumot o\'g\'irlaydi.',
    testSecurityQ4: 'Xavfsiz parol qanday yaratiladi?', testSecurityQ4a: '123456', testSecurityQ4b: 'Harflar, raqamlar va belgilar kombinatsiyasi', testSecurityQ4c: 'Tug\'ilgan kun', testSecurityQ4d: 'Hayvon ismi', testSecurityQ4exp: 'Ishonchli parol turli belgilardan iborat bo\'ladi.',
    testSecurityQ5: 'Karta yo\'qolsa nima qilish kerak?', testSecurityQ5a: 'Darhol ilova orqali bloklash', testSecurityQ5b: 'Kutish', testSecurityQ5c: 'Hech nima qilmaslik', testSecurityQ5d: 'Ijtimoiy tarmoqlarda yozish', testSecurityQ5exp: 'Kartani yo\'qotganda darhol bloklash kerak.',
    testSavingsQ1: 'Jamg\'arma nima?', testSavingsQ1a: 'Har kuni sarflaydigan pul', testSavingsQ1b: 'Kelajak uchun tejaydigan pul', testSavingsQ1c: 'Hadya qiladigan pul', testSavingsQ1d: 'Tushlik uchun pul', testSavingsQ1exp: 'Jamg\'arma — kelajakdagi maqsadlar uchun tejalgan pul.',
    testSavingsQ2: 'Jamg\'armani qaerga qo\'yish yaxshi?', testSavingsQ2a: 'Yostiq ostiga', testSavingsQ2b: 'Cho\'ntakka', testSavingsQ2c: 'Bankdagi jamg\'arma hisobiga', testSavingsQ2d: 'Do\'stga berish', testSavingsQ2exp: 'Jamg\'arma hisobi pulni himoya qiladi va foiz hisoblaydi.',
    testSavingsQ3: 'Moliyaviy maqsadni qanday qo\'yish kerak?', testSavingsQ3a: 'Nimani xohlashingni aniqlash, summa va muddatni hisoblash', testSavingsQ3b: 'Shunchaki orzu qilish', testSavingsQ3c: 'Ota-onadan so\'rash', testSavingsQ3d: 'Maqsad qo\'ymaslik', testSavingsQ3exp: 'Aniq maqsad tejashni rejalashtirishga yordam beradi.',
    testSavingsQ4: 'Quloqchin uchun 200 000 so\'m kerak. Senda 150 000 bor. Nima qilish kerak?', testSavingsQ4a: 'Boshqa narsa sotib olish', testSavingsQ4b: 'Maqsadni unutish', testSavingsQ4c: 'Qarz olish', testSavingsQ4d: 'Tejashni davom ettirish — oz qoldi!', testSavingsQ4exp: 'Maqsadga yaqinsan! Davom et — sabr mukofotlanadi.',
    testSavingsQ5: 'Omonat foizi nima?', testSavingsQ5a: 'Bank jarima', testSavingsQ5b: 'Bank jamg\'armangga qo\'shimcha hisoblaydigan pul', testSavingsQ5c: 'Xizmat haqi', testSavingsQ5d: 'Soliq', testSavingsQ5exp: 'Bank foiz hisoblaydi — bu pulni hisobda saqlash uchun mukofot.',
    testSpendingQ1: '«Ehtiyojlar» va «xohishlar» nima?', testSpendingQ1a: 'Bir xil narsa', testSpendingQ1b: 'Xohishlar muhimroq', testSpendingQ1c: 'Ehtiyojlar — zarur, xohishlar — yoqimli lekin shart emas', testSpendingQ1d: 'Ehtiyojlar — faqat ovqat', testSpendingQ1exp: 'Ehtiyojlar — zarur narsalar. Xohishlar — yoqimli, lekin shart emas.',
    testSpendingQ2: 'Yangi o\'yin va penal olmoqchisan. Faqat bittasiga pul yetadi. Qaysi biri muhim?', testSpendingQ2a: 'Penal — o\'qish uchun kerak', testSpendingQ2b: 'O\'yin — qiziqroq', testSpendingQ2c: 'Ikkisini ham kreditga', testSpendingQ2d: 'Hech narsani olmaslik', testSpendingQ2exp: 'Avval zaruriy narsa (penal), keyin ko\'ngilochar.',
    testSpendingQ3: 'Impulsiv xarid nima?', testSpendingQ3a: 'Rejali xarid', testSpendingQ3b: 'O\'ylamasdan, hissiyot bilan sotib olish', testSpendingQ3c: 'Kreditga xarid', testSpendingQ3d: 'Chegirmali xarid', testSpendingQ3exp: 'Impulsiv xarid — o\'ylamasdan, stixiyali ravishda sotib olish.',
    testSpendingQ4: 'Do\'konda qanday tejash mumkin?', testSpendingQ4a: 'Hammasini sotib olish', testSpendingQ4b: 'Do\'konga bormaslik', testSpendingQ4c: 'Eng qimmatini olish', testSpendingQ4d: 'Narxlarni solishtirish va ro\'yxat bo\'yicha olish', testSpendingQ4exp: 'Xarid ro\'yxati va narx taqqoslash — oqilona sarflash usuli.',
    testSpendingQ5: 'Chegirma nima?', testSpendingQ5a: 'Tovar narxini ma\'lum foizga kamaytirish', testSpendingQ5b: 'Narxni oshirish', testSpendingQ5c: 'Bepul tovar', testSpendingQ5d: 'Sotuvchi aldovi', testSpendingQ5exp: 'Chegirma — narx pasayishi. Lekin faqat kerakli narsani olish muhim!',
    testDigitalQ1: 'Ilova parolini nima qilish kerak?', testDigitalQ1a: 'Qog\'ozga yozib telefonga yopishtirish', testDigitalQ1b: 'Do\'stga aytish', testDigitalQ1c: 'Maxfiy saqlash va hech kimga aytmaslik', testDigitalQ1d: '«123456» ishlatish', testDigitalQ1exp: 'Parol maxfiy bo\'lishi kerak.',
    testDigitalQ2: 'Noma\'lum manbalardan ilova yuklab olish kerakmi?', testDigitalQ2a: 'Ha, do\'st maslahat bersa', testDigitalQ2b: 'Ha, bepul bo\'lsa', testDigitalQ2c: 'Ha, chiroyli bo\'lsa', testDigitalQ2d: 'Yo\'q, faqat rasmiy do\'konlardan', testDigitalQ2exp: 'Noma\'lum manbalar virusli bo\'lishi mumkin.',
    testDigitalQ3: 'Internetda notanish odam shaxsiy ma\'lumot so\'rasa nima qilish kerak?', testDigitalQ3a: 'Rad etish va ota-onaga aytish', testDigitalQ3b: 'Ma\'lumot berish', testDigitalQ3c: 'Yolg\'on ma\'lumot berish', testDigitalQ3d: 'Do\'stlardan so\'rash', testDigitalQ3exp: 'Hech qachon notanishlarga shaxsiy ma\'lumot bermang.',
    testDigitalQ4: 'Parollarni qanchalik tez-tez almashtirish kerak?', testDigitalQ4a: 'Hech qachon', testDigitalQ4b: 'Muntazam, bir necha oyda bir', testDigitalQ4c: 'Har kuni', testDigitalQ4d: 'Faqat unutganda', testDigitalQ4exp: 'Parollarni xavfsizlik uchun muntazam almashtirib turish kerak.',
    testDigitalQ5: 'Kafedalgi bepul Wi-Fi orqali bank operatsiyalari qilish mumkinmi?', testDigitalQ5a: 'Ha, qulay', testDigitalQ5b: 'Ha, tez bo\'lsa', testDigitalQ5c: 'Yo\'q — ma\'lumotlarni ushlash mumkin', testDigitalQ5d: 'Wi-Fi paroli bo\'lsa mumkin', testDigitalQ5exp: 'Ochiq Wi-Fi moliyaviy operatsiyalar uchun xavfli.',
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
    transferContactBook: 'Contact book',
    transferContactHint: 'Transfers are only available to contacts in your address book — for your safety 🔒',
    transferSelectContact: 'Select recipient',
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
    goalsCalcButton: 'How much will I earn',
    goalsNewButton: 'Open another savings',
    goalsAboutAccount: 'About account',
    goalsActions: 'Actions',
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
    orderBenefitsHeading: 'What the sticker gives your kid',
    orderBenefit1Title: 'Cashback on purchases',
    orderBenefit1Desc: 'Get money back on every purchase — save bonuses and spend wisely!',
    orderBenefit2Title: 'Easy saving',
    orderBenefit2Desc: 'Set goals and save for your dream — the app shows how much is left!',
    orderBenefit3Title: 'Your own money',
    orderBenefit3Desc: 'Learn to manage money like a grown-up — with parental supervision',
    orderBenefit4Title: 'Safe payments',
    orderBenefit4Desc: 'Pay with a tap of your phone — fast and secure!',
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
    defaultUserName: 'Friend',
    onboardNamePlaceholder: 'What\'s your name?',
    goalsMilestoneStart: 'Start',
    goalsMilestoneGoal: 'Goal!',
    goalsAmountOf: 'of',
    goalsFromCard: 'from card',
    goalsToCard: 'to card',
    donutTotal: 'Total',
    donutOperations: 'operations',
    notifDescription: 'Description',
    contactDad: 'Dad',
    contactMom: 'Mom',
    contactGrandma: 'Grandma',
    contactGrandpa: 'Grandpa',
    contactBrother: 'Brother',
    contactSister: 'Sister',
    avatarFox: 'Fox', avatarPanda: 'Panda', avatarLion: 'Lion Cub', avatarCat: 'Kitty', avatarBunny: 'Bunny',
    avatarBear: 'Bear', avatarUnicorn: 'Unicorn', avatarFrog: 'Frog', avatarButterfly: 'Butterfly', avatarKoala: 'Koala',
    avatarOwl: 'Owl', avatarPenguin: 'Penguin', avatarShark: 'Shark', avatarTiger: 'Tiger Cub', avatarParrot: 'Parrot',
    themeCalmName: 'Calm', themePlayfulName: 'Playful', themeAnimeName: 'Anime', themeNationalName: 'National',
    catFood: 'Food', catEducation: 'Education', catEntertainment: 'Entertainment', catTransport: 'Transport',
    catCash: 'Cash', catSavings: 'Savings', catTransfer: 'Transfers', catOther: 'Other',
    achNoCashName: 'Cashless Hero', achNoCashDesc: 'Don\'t withdraw cash for 30 days', achNoCashMsg: 'A whole month without cash! Awesome!',
    achSaverName: 'Savings Master', achSaverDesc: 'Save 100,000 sum in piggy banks', achSaverMsg: 'You saved over 100,000 sum! Great work!',
    achDailyName: 'Loyal Friend', achDailyDesc: 'Open the app 7 days in a row', achDailyMsg: 'A whole week with us! You\'re a real financial hero!',
    achCustomizerName: 'Designer', achCustomizerDesc: 'Customize the app', achCustomizerMsg: 'You made the app your own! Beautiful!',
    achDreamerName: 'Dreamer', achDreamerDesc: 'Create your first piggy bank', achDreamerMsg: 'First step towards your dream! Keep going!',
    achQuizName: 'Smarty', achQuizDesc: 'Answer all quiz questions correctly', achQuizMsg: 'All answers correct! You\'re a financial genius!',
    storyTipTitle: 'Tip of the Day', storyTipContent: 'Before buying, wait 24 hours — you might change your mind!',
    storyQuizTitle: 'Solve & Earn!', storyQuizContent: 'Answer questions and earn sums!',
    storyHumoTitle: 'What is HUMO?', storyHumoContent: 'HUMO is the national payment system of Uzbekistan. With it you can pay by card or sticker, transfer money, and save. HUMO works all over the country — in shops, cafes, and online!',
    storyBankTitle: 'What is a bank?', storyBankContent: 'A bank is a place that stores money and lends it to others. The bank pays you interest for storing!',
    storyMoneyWorldTitle: 'World Money', storyMoneyWorldContent: 'In Japan, coins feature flowers, and in Australia — animals! The Uzbek sum is named after gold.',
    storyRuleTitle: '50/30/20 Rule', storyRuleContent: '50% for needs, 30% for wants, 20% for savings! This rule helps manage money.',
    storyGoalTitle: 'Goal = Motivation', storyGoalContent: 'People who set goals save 3 times faster! Set your goal right now.',
    storyCoinsTitle: 'Coin Game', storyCoinsContent: 'Did you know the first money was made of shells? Coins were invented 2,700 years ago in Lydia!',
    storyPizzaTitle: 'Pizza or Savings?', storyPizzaContent: 'If instead of one pizza a week you save money, in a year you\'ll have a whole bicycle!',
    storyHeroTitle: 'Financial Hero', storyHeroContent: 'A real hero knows not only how to earn but also how to spend wisely. You\'re already on your way!',
    storyFunFactTitle: 'Fun Fact', storyFunFactContent: 'The most expensive coin in the world costs $18.9 million! It\'s a 1794 silver dollar.',
    storyGreatTitle: 'You\'re great!', storyGreatContent: 'Every time you open the app, you learn to manage money. Keep it up!',
    storyDrawTitle: 'Draw Your Dream', storyDrawContent: 'Draw what you\'re saving for and put it on the wall. Visualization helps achieve goals!',
    storyShareTitle: 'Share Kindness', storyShareContent: 'When saving, you can set aside some for gifts to friends. Generosity makes you happier!',
    storyDigitalTitle: 'Digital Money', storyDigitalContent: 'Today most money exists only in computers. Cash is just a small part!',
    storyChallengeTitle: 'Weekly Challenge', storyChallengeContent: 'Try writing down all your expenses for a week. You\'ll be surprised where the money goes!',
    txFromMom: 'From Mom', txFromDad: 'From Dad', txFromGrandma: 'Gift from Grandma', txFromGrandpa: 'Gift from Grandpa', txGoodGrades: 'For good grades',
    txIceCream: 'Ice cream', txSchoolShop: 'School shop', txJuiceBun: 'Juice and bun', txFastFood: 'Fast food', txGames: 'Games',
    txStationery: 'Stationery', txTransport: 'Transport', txSnacks: 'Snacks', txDrinks: 'Drinks', txGiftFriend: 'Gift for friend',
    txToBike: 'For bicycle', txPiggyBank: 'Piggy bank', txCashWithdraw: 'Cash withdrawal', txATM: 'ATM',
    txSourceShop: 'Shop', txSourceSchool: 'School', txSourceBazaar: 'Bazaar', txSourceCafe: 'Cafe', txSourceMetro: 'Metro',
    quizQ1: 'What\'s the best thing to do with pocket money?', quizQ1a: 'Spend it all at once', quizQ1b: 'Spend some, save some', quizQ1c: 'Hide it under the pillow', quizQ1d: 'Give it to a friend', quizQ1exp: 'Correct! It\'s best to spend some on needs and save some for a big dream.',
    quizQ2: 'What is a "piggy bank" at the bank?', quizQ2a: 'A glass jar', quizQ2b: 'A special savings account', quizQ2c: 'Where money is printed', quizQ2d: 'A toy', quizQ2exp: 'Right! A piggy bank at the bank is a special account where money is stored and grows with interest.',
    quizQ3: 'Why set a financial goal?', quizQ3a: 'It\'s not needed', quizQ3b: 'To make parents happy', quizQ3c: 'To know how much and why to save', quizQ3d: 'To show off', quizQ3exp: 'Exactly! A goal helps understand how much to save and motivates you.',
    quizQ4: 'What does "live within your means" mean?', quizQ4a: 'Don\'t spend at all', quizQ4b: 'Don\'t spend more than you earn', quizQ4c: 'Spend everything at once', quizQ4d: 'Borrow money', quizQ4exp: 'Correct! It means spending no more than you have. An important rule for everyone!',
    quizQ5: 'What is deposit interest?', quizQ5a: 'A bank fine', quizQ5b: 'Money the bank pays you for storing', quizQ5c: 'Transfer fee', quizQ5d: 'Card price', quizQ5exp: 'Right! The bank pays you interest for storing your money. Your money grows!',
    goalBike: 'Bicycle', goalBikeReason: 'Ride with friends in the park!', goalHeadphones: 'Headphones', goalHeadphonesReason: 'Listen to music while walking',
    testsTitle: 'Tests',
    testsSettingsDesc: 'Test your financial literacy knowledge',
    testsDesc: 'Tests developed by the Central Bank, Ministry of Education, and other institutions of Uzbekistan to improve financial literacy among youth.',
    testsQuestions: 'questions',
    testsQuestion: 'Question',
    testsCorrect: 'Correct!',
    testsWrong: 'Wrong',
    testsNext: 'Next',
    testsFinish: 'Finish',
    testsResultTitle: 'Result',
    testsResultGreat: 'Excellent! You are a true financial expert! 🌟',
    testsResultGood: 'Good! But there is room to grow 💪',
    testsResultTryAgain: 'Try again, you can do it! 📖',
    testsRetry: 'Try again',
    testsBackToList: 'Back to list',
    testTopicBudget: 'Budget Planning',
    testTopicSecurity: 'Security',
    testTopicSavings: 'Savings & Goals',
    testTopicSpending: 'Smart Spending',
    testTopicDigital: 'Digital Hygiene',
    testAuthorCB: 'Central Bank of Uzbekistan',
    testAuthorMVD: 'Ministry of Internal Affairs',
    testAuthorMinEdu: 'Ministry of Education',
    testAuthorMinICT: 'Ministry of Digital Technologies',
    testBudgetQ1: 'What is a budget?', testBudgetQ1a: 'Just a list of expenses', testBudgetQ1b: 'A plan of income and expenses', testBudgetQ1c: 'Amount in a bank account', testBudgetQ1d: 'Money from parents', testBudgetQ1exp: 'A budget is a plan that helps distribute income and expenses.',
    testBudgetQ2: 'You got 50,000 sum for the week. What should you do?', testBudgetQ2a: 'Spend it all at once', testBudgetQ2b: 'Save everything', testBudgetQ2c: 'Split it: daily needs + savings', testBudgetQ2d: 'Give to a friend', testBudgetQ2exp: 'Best to split: some for daily needs, some for savings.',
    testBudgetQ3: 'What is "pocket money"?', testBudgetQ3a: 'Money parents give for personal expenses', testBudgetQ3b: 'Money in your pocket', testBudgetQ3c: 'Salary', testBudgetQ3d: 'A loan', testBudgetQ3exp: 'Pocket money is an amount parents give kids to learn money management.',
    testBudgetQ4: 'Why track expenses?', testBudgetQ4a: 'To show off', testBudgetQ4b: 'No need, it is boring', testBudgetQ4c: 'To understand where money goes', testBudgetQ4d: 'So parents don\'t scold', testBudgetQ4exp: 'Tracking expenses helps you see where your money goes and plan better.',
    testBudgetQ5: 'Best way to save for a dream?', testBudgetQ5a: 'Wait for money to appear', testBudgetQ5b: 'Save a little each week', testBudgetQ5c: 'Ask parents for everything', testBudgetQ5d: 'Borrow from friends', testBudgetQ5exp: 'Regular small savings are the most reliable path to your goal!',
    testSecurityQ1: 'You got an SMS: "You won a prize! Send the code." What to do?', testSecurityQ1a: 'Quickly send the code', testSecurityQ1b: 'Call the number from SMS', testSecurityQ1c: 'Don\'t reply and tell parents', testSecurityQ1d: 'Forward to friends', testSecurityQ1exp: 'This is a scam! Never send codes to strangers. Tell your parents.',
    testSecurityQ2: 'Can you share your card PIN with others?', testSecurityQ2a: 'No, never with anyone', testSecurityQ2b: 'Yes, with best friend', testSecurityQ2c: 'Yes, if asked by phone', testSecurityQ2d: 'Only with teacher', testSecurityQ2exp: 'PIN is secret! Never share it with anyone, not even friends.',
    testSecurityQ3: 'What is phishing?', testSecurityQ3a: 'A type of fishing', testSecurityQ3b: 'A new game', testSecurityQ3c: 'A card type', testSecurityQ3d: 'Scam to steal data via fake websites', testSecurityQ3exp: 'Phishing is when scammers create fake websites or emails to steal data.',
    testSecurityQ4: 'How to create a secure password?', testSecurityQ4a: '123456', testSecurityQ4b: 'Mix of letters, numbers, and symbols', testSecurityQ4c: 'Date of birth', testSecurityQ4d: 'Pet\'s name', testSecurityQ4exp: 'A strong password uses different characters and isn\'t linked to personal info.',
    testSecurityQ5: 'What to do if you lose your card?', testSecurityQ5a: 'Block it immediately via app or bank', testSecurityQ5b: 'Wait, maybe it will turn up', testSecurityQ5c: 'Do nothing', testSecurityQ5d: 'Post about it on social media', testSecurityQ5exp: 'If you lose your card, block it immediately so no one can use it.',
    testSavingsQ1: 'What are savings?', testSavingsQ1a: 'Money you spend daily', testSavingsQ1b: 'Money you set aside for the future', testSavingsQ1c: 'Money you give away', testSavingsQ1d: 'Lunch money', testSavingsQ1exp: 'Savings are money set aside for future goals and dreams.',
    testSavingsQ2: 'Best place for savings?', testSavingsQ2a: 'Under the pillow', testSavingsQ2b: 'In your pocket', testSavingsQ2c: 'A savings account at a bank', testSavingsQ2d: 'Give to a friend', testSavingsQ2exp: 'A savings account protects money and earns interest.',
    testSavingsQ3: 'How to set a financial goal?', testSavingsQ3a: 'Decide what you want, calculate amount and timeline', testSavingsQ3b: 'Just dream', testSavingsQ3c: 'Ask parents', testSavingsQ3d: 'Don\'t set goals', testSavingsQ3exp: 'A clear goal helps plan savings: what, how much, and when.',
    testSavingsQ4: 'Headphones cost 200,000 sum. You have 150,000. What to do?', testSavingsQ4a: 'Buy something else', testSavingsQ4b: 'Forget the goal', testSavingsQ4c: 'Borrow money', testSavingsQ4d: 'Keep saving — almost there!', testSavingsQ4exp: 'You are close to your goal! Keep going — patience pays off.',
    testSavingsQ5: 'What is deposit interest?', testSavingsQ5a: 'Bank penalty', testSavingsQ5b: 'Extra money the bank adds to your savings', testSavingsQ5c: 'Service fee', testSavingsQ5d: 'Tax', testSavingsQ5exp: 'The bank adds interest as a reward for keeping money in your account.',
    testSpendingQ1: 'What are "needs" and "wants"?', testSpendingQ1a: 'Same thing', testSpendingQ1b: 'Wants are more important', testSpendingQ1c: 'Needs are essential, wants are nice but optional', testSpendingQ1d: 'Needs are only food', testSpendingQ1exp: 'Needs are essentials (food, school). Wants are nice but not necessary.',
    testSpendingQ2: 'You want a new game and a pencil case. Money for only one. Which is more important?', testSpendingQ2a: 'Pencil case — needed for school', testSpendingQ2b: 'Game — more fun', testSpendingQ2c: 'Buy both on credit', testSpendingQ2d: 'Buy neither', testSpendingQ2exp: 'First essentials (pencil case for school), then entertainment.',
    testSpendingQ3: 'What is an impulse purchase?', testSpendingQ3a: 'A planned purchase', testSpendingQ3b: 'Buying without thinking, on emotion', testSpendingQ3c: 'Buying on credit', testSpendingQ3d: 'Buying on sale', testSpendingQ3exp: 'An impulse purchase is buying something spontaneously without thinking.',
    testSpendingQ4: 'How to save money at the store?', testSpendingQ4a: 'Buy everything', testSpendingQ4b: 'Don\'t go to the store', testSpendingQ4c: 'Buy the most expensive', testSpendingQ4d: 'Compare prices and use a list', testSpendingQ4exp: 'A shopping list and price comparison help spend wisely.',
    testSpendingQ5: 'What is a discount?', testSpendingQ5a: 'A price reduction by a certain percentage', testSpendingQ5b: 'A price increase', testSpendingQ5c: 'A free item', testSpendingQ5d: 'Seller fraud', testSpendingQ5exp: 'A discount is a price reduction. But only buy what you actually need!',
    testDigitalQ1: 'What should you do with your app password?', testDigitalQ1a: 'Write it on paper and stick to phone', testDigitalQ1b: 'Tell a friend', testDigitalQ1c: 'Keep it secret and don\'t share', testDigitalQ1d: 'Use "123456"', testDigitalQ1exp: 'Password must be secret. Don\'t share it or write it in visible places.',
    testDigitalQ2: 'Should you download apps from unknown sources?', testDigitalQ2a: 'Yes, if a friend suggested', testDigitalQ2b: 'Yes, if free', testDigitalQ2c: 'Yes, if it looks nice', testDigitalQ2d: 'No, only from official stores', testDigitalQ2exp: 'Unknown sources may contain viruses. Only download from App Store or Google Play.',
    testDigitalQ3: 'What if a stranger asks for personal info online?', testDigitalQ3a: 'Refuse and tell parents', testDigitalQ3b: 'Share if they are polite', testDigitalQ3c: 'Give fake info', testDigitalQ3d: 'Ask friends', testDigitalQ3exp: 'Never share personal data with strangers online. Tell your parents.',
    testDigitalQ4: 'How often should you change passwords?', testDigitalQ4a: 'Never', testDigitalQ4b: 'Regularly, every few months', testDigitalQ4c: 'Every day', testDigitalQ4d: 'Only if forgotten', testDigitalQ4exp: 'Passwords should be changed regularly for security.',
    testDigitalQ5: 'Can you use free cafe Wi-Fi for banking?', testDigitalQ5a: 'Yes, it is convenient', testDigitalQ5b: 'Yes, if quick', testDigitalQ5c: 'Better not — data can be intercepted', testDigitalQ5d: 'Only if Wi-Fi has a password', testDigitalQ5exp: 'Open Wi-Fi is dangerous for financial operations — attackers can intercept data.',
  },
};
