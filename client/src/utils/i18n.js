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
      'Ability Blocked': 'Ability Blocked',
      'Ability Applied': 'Ability Applied',
      'Apply Leader Ability': 'Apply Leader Ability',
      You: 'You',
      Opponent: 'Opponent',
      'You joined the game.': 'You joined the game.',
      'Opponent joined the game.': 'Opponent joined the game.',
      'Game has been reset.': 'Game has been reset.',
      'You won the game!': 'You won the game!',
      'You won the match!': 'You won the match!',
      'Draw!': 'Draw!',
      'Opponent won the game!': 'Opponent won the game!',
      'Opponent won the match!': 'Opponent won the match!',
      'End of match': 'End of match',
      'Game Over': 'Game Over',
      'Game in progress...': 'Game in progress...',

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

      'Francesca Findabair: Daisy of the Valley':
        'Francesca Findabair: Daisy of the Valley',
      'Francesca Findabair: Hope of the Aen Seidhe':
        'Francesca Findabair: Hope of the Aen Seidhe',
      'Francesca Findabair: Pureblood Elf':
        'Francesca Findabair: Pureblood Elf',
      'Francesca Findabair: Queen of Dol Blathanna':
        'Francesca Findabair: Queen of Dol Blathanna',
      'Francesca Findabair: The Beautiful':
        'Francesca Findabair: The Beautiful',

      'Crach an Craite': 'Crach an Craite',
      'Bran King': 'Bran King',

      'Eredin Bréacc Glas: The Treacherous':
        'Eredin Bréacc Glas: The Treacherous',
      'Eredin: Bringer of Death': 'Eredin: Bringer of Death',
      'Eredin: King of the Wild Hunt': 'Eredin: King of the Wild Hunt',
      'Eredin: Commander of the Red Riders':
        'Eredin: Commander of the Red Riders',
      'Eredin: Destroyer of Worlds': 'Eredin: Destroyer of Worlds',

      factionNoticesMonsters: 'Keeps random Unit Card out after each round.',
      factionNoticesNilfgaard: 'Wins any round that ends in a draw.',
      factionNoticesNorthernRealms:
        'Grants an extra card upon winning a round.',
      factionNoticesScoiatael: 'Decides who takes first turn.',
      factionNoticesSkellige:
        '2 random cards from the graveyard are placed on the battlefield at the start of the third round.',
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
      'Ability Blocked': 'Здатність заблокована',
      'Ability Applied': 'Здатність застосована',
      'Apply Leader Ability': 'Застосувати здатність лідера',
      You: 'Ви',
      Opponent: 'Суперник',
      'You joined the game.': 'Ви приєдналися до гри.',
      'Opponent joined the game.': 'Суперник приєднався до гри.',
      'Game has been reset.': 'Гра була скинута.',
      'You won the game!': 'Ви виграли гру!',
      'You won the match!': 'Ви виграли матч!',
      'Draw!': 'Нічия!',
      'Opponent won the game!': 'Суперник виграв гру!',
      'Opponent won the match!': 'Суперник виграв матч!',
      'End of Match': 'Кінець матчу',
      'Game Over': 'Гра закінчена',
      'Game in progress...': 'Гра триває...',

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

      'Francesca Findabair: Daisy of the Valley':
        'Франческа Фіндабаїр: Маргаритка Долини',
      'Daisy Of The Valley': 'Франческа Фіндабаїр: Маргаритка Долини',
      'Francesca Findabair: Hope of the Aen Seidhe':
        'Франческа Фіндабаїр: Надія Ен Шейд',
      'Hope Of The Aen Seidhe': 'Франческа Фіндабаїр: Надія Ен Шейд',
      'Francesca Findabair: Pureblood Elf':
        'Франческа Фіндабаїр: Чистокровний Ельф',
      'Pureblood Elf': 'Франческа Фіндабаїр: Чистокровний Ельф',
      'Francesca Findabair: Queen of Dol Blathanna':
        'Франческа Фіндабаїр: Королева Доль Блатанна',
      'Queen Of Dol Blathanna': 'Франческа Фіндабаїр: Королева Доль Блатанна',
      'Francesca Findabair: The Beautiful': 'Франческа Фіндабаїр: Прекрасна',
      'The Beautiful': 'Франческа Фіндабаїр: Прекрасна',

      'Crach an Craite': 'Крах ан Крайт',
      'Crach An Craite': 'Крах ан Крайт',
      'Bran King': 'Бран Король',

      'Eredin Bréacc Glas: The Treacherous': 'Ередін Бреак Глас: Зрадник',
      'The Treacherous': 'Ередін Бреак Глас: Зрадник',
      'Eredin: Bringer of Death': 'Ередін: Приноситель Смерті',
      'Bringer Of Death': 'Ередін: Приноситель Смерті',
      'Eredin: King of the Wild Hunt': 'Ередін: Король Дикого Полювання',
      'King Of The Wild Hunt': 'Ередін: Король Дикого Полювання',
      'Eredin: Commander of the Red Riders':
        'Ередін: Командир Червоних Вершників',
      'Commander Of The Red Riders': 'Ередін: Командир Червоних Вершників',
      'Eredin: Destroyer of Worlds': 'Ередін: Руйнівник Світів',
      'Destroyer Of Worlds': 'Ередін: Руйнівник Світів',

      factionNoticesMonsters:
        'Залишає випадкову карту юніта після кожного раунду.',
      factionNoticesNilfgaard:
        'Виграє будь-який раунд, що закінчується нічиєю.',
      factionNoticesNorthernRealms:
        'Отримує додаткову карту при виграші раунду.',
      factionNoticesScoiatael: 'Вирішує, хто робить перший хід.',
      factionNoticesSkellige:
        '2 випадкові карти з кладовища поміщаються на поле битви на початку третього раунду.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
