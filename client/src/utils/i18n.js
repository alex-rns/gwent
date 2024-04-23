import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Join game': 'Join game',
      'Reset game': 'Reset game',
      Settings: 'Settings',
      resetGameConfirm: 'Are you sure you want to reset the game?',
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

      // Factions
      'Northern Realms': 'Northern Realms',
      Nilfgaard: 'Nilfgaard',
      Scoiatael: "Scoia'tael",
      Skellige: 'Skellige',
      Monsters: 'Monsters',
      'Select Faction': 'Select Faction',
      'Select Leader': 'Select Leader',
      'Foltest: King of Temeria': 'Foltest: King of Temeria',
      'Foltest: The Siegemaster': 'Foltest: The Siegemaster',
    },
  },
  ua: {
    translation: {
      'Join game': 'Зайти в гру',
      'Reset game': 'Скинути гру',
      Settings: 'Налаштування',
      resetGameConfirm: 'Ви впевнені, що хочете скинути гру?',
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
      'Foltest: The Siegemaster': 'Фольтест: Майстер Облоги',
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
