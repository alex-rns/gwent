import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Join game': 'Join game',
      'Reset game': 'Reset game',
      'End the match': 'End the match',
      Settings: 'Settings',
      resetGameConfirm: 'Reset the game?',
      endTheMatch: 'End the match?',
      You: 'You',
      Opponent: 'Opponent',

      // Card Modal
      Cancel: 'Cancel',
      'Edit Card': 'Edit Card',
      'Create a New Card': 'Create a New Card',
      'Delete Card': 'Delete',
      'Update Card': 'Update',
      'Create Card': 'Create',
      'Hero Card': 'Hero',
      Horn: 'Horn',
      Mardroeme: 'Mardroeme',
      'Morale Boost': 'Morale Boost',
      'Tight Bond': 'Tight Bond',
      Decoy: 'Decoy',
      'Young Berserker': 'Young Berserker',
      Berserker: 'Berserker',

      // Factions & Leaders
      'Northern Realms': 'Northern Realms',
      Nilfgaard: 'Nilfgaard',
      Scoiatael: "Scoia'tael",
      Skellige: 'Skellige',
      Monsters: 'Monsters',
      'Select Faction': 'Select Faction',
      'Select Leader': 'Select Leader',

      'Foltest: King of Temeria': 'Foltest: King of Temeria',
      'Foltest: The Siegemaster': 'Foltest: The Siegemaster',
      'Foltest: The Steel-Forged': 'Foltest: The Steel-Forged',
      'Foltest: Son of Medell': 'Foltest: Son of Medell',
      'Foltest: Lord Commander of the North':
        'Foltest: Lord Commander of the North',

      'Emperor Of Nilfgaard': 'Emhyr var Emreis: Emperor of Nilfgaard',
      'Emhyr var Emreis: His Imperial Majesty':
        'Emhyr var Emreis: His Imperial Majesty',
      'Emhyr var Emreis: Invader of the North':
        'Emhyr var Emreis: Invader of the North',
      'Emhyr var Emreis: The Relentless': 'Emhyr var Emreis: The Relentless',
      'Emhyr var Emreis: The White Flame': 'Emhyr var Emreis: The White Flame',
    },
  },
  ua: {
    translation: {
      'Join game': 'Зайти в гру',
      'Reset game': 'Скинути гру',
      'End the match': 'Завершити матч',
      Settings: 'Налаштування',
      resetGameConfirm: 'Cкинути гру?',
      endTheMatch: 'Завершити матч?',
      You: 'Ви',
      Opponent: 'Суперник',

      // Card Modal
      Cancel: 'Скасувати',
      'Edit Card': 'Редагувати карту',
      'Create a New Card': 'Створити нову карту',
      'Delete Card': 'Видалити',
      'Update Card': 'Оновити',
      'Create Card': 'Створити',
      'Hero Card': 'Герой',
      Horn: 'Горн',
      Mardroeme: 'Мардрьом',
      'Morale Boost': 'Підвищення бойового духу',
      'Tight Bond': "Тісний зв'язок",
      Decoy: 'Приманка',
      'Young Berserker': 'Молодий берсерк',
      Berserker: 'Берсерк',

      // Factions
      'Northern Realms': 'Північні Королівства',
      Nilfgaard: 'Нільфгаард',
      Scoiatael: "Скоя'таель",
      Skellige: 'Скелліге',
      Monsters: 'Монстри',
      'Select Faction': 'Виберіть фракцію',
      'Select Leader': 'Виберіть лідера',

      'Foltest: King of Temeria': 'Фольтест: Король Темерії',
      'King Of Temeria': 'Фольтест: Король Темерії',
      'Foltest: The Siegemaster': 'Фольтест: Майстер Облоги',
      'The Siegemaster': 'Фольтест: Майстер Облоги',
      'Foltest: The Steel-Forged': 'Фольтест: Кована Сталь',
      'The Steel Forged': 'Фольтест: Кована Сталь',
      'Foltest: Son of Medell': 'Фольтест: Син Меделлі',
      'Son Of Medell': 'Фольтест: Син Меделлі',
      'Foltest: Lord Commander of the North':
        'Фольтест: Головнокомандувач Півночі',
      'Lord Commander Of The North': 'Фольтест: Головнокомандувач Півночі',

      'Emhyr var Emreis: Emperor of Nilfgaard':
        'Емір вар Емрейс: Імператор Нільфгаарду',
      'Emperor Of Nilfgaard': 'Емір вар Емрейс: Імператор Нільфгаарду',
      'Emhyr var Emreis: His Imperial Majesty':
        'Емір вар Емрейс: Його Імператорська Величність',
      'His Imperial Majesty': 'Емір вар Емрейс: Його Імператорська Величність',
      'Emhyr var Emreis: Invader of the North':
        'Емір вар Емрейс: Завоювач Півночі',
      'Invader Of The North': 'Емір вар Емрейс: Завоювач Півночі',
      'Emhyr var Emreis: The Relentless': 'Емір вар Емрейс: Невпинний',
      'The Relentless': 'Емір вар Емрейс: Невпинний',
      'Emhyr var Emreis: The White Flame': "Емір вар Емрейс: Біле Полум'я",
      'The White Flame': "Емір вар Емрейс: Біле Полум'я",
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
