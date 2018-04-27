module.exports = {
  ui: {
    selectedTab: 0,
  },
  stamina: {
    total: 21,
    current: 21,
  },
  hit: {
    total: 26,
    current: 26,
  },
  resolve: {
    total: 4,
    current: 4,
  },
  eac: {
    base: 10,
    armorBonus: 2,
    dexMod: 2,
    miscMod: 0,
  },
  kac: {
    base: 10,
    armorBonus: 4,
    dexMod: 2,
    miscMod: 0,
  },
  acVsComMan: {
    base: 8,
    upgrades: 1,
  },
  abilities: [
    {
      key: 'str',
      modifier: 0,
      name: 'Strength',
      score: 10,
    },
    {
      key: 'dex',
      modifier: 3,
      name: 'Dexterity',
      score: 17,
    },
    {
      key: 'con',
      modifier: 1,
      name: 'Constitution',
      score: 12,
    },
    {
      key: 'int',
      modifier: 3,
      name: 'Intelligence',
      score: 16,
    },
    {
      key: 'wis',
      modifier: 0,
      name: 'Wisdom',
      score: 10,
    },
    {
      key: 'cha',
      modifier: -1,
      name: 'Charisma',
      score: 8,
    },
  ],
  skills: [
    {
      key: 'acrobatics',
      name: 'Acrobatics',
      total: 3,
    },
    {
      key: 'athletics',
      name: 'Athletics',
      total: 5,
    },
    {
      key: 'bluff',
      name: 'Bluff',
      total: -1,
    },
    {
      key: 'computers',
      name: 'Computers',
      total: 10,
    },
    {
      key: 'culture',
      name: 'Culture',
      total: 3,
    },
    {
      key: 'diplomacy',
      name: 'Diplomacy',
      total: -1,
    },
    {
      key: 'disguise',
      name: 'Disguise',
      total: -1,
    },
    {
      key: 'engineering',
      name: 'Engineering',
      total: 10,
    },
    {
      key: 'intimidate',
      name: 'Intimidate',
      total: 2,
    },
    {
      key: 'lifeScience',
      name: 'Life Science',
      total: 3,
    },
    {
      key: 'medicine',
      name: 'Medicine',
      total: 7,
    },
    {
      key: 'mysticism',
      name: 'Mysticism',
      total: 3,
    },
    {
      key: 'perception',
      name: 'Perception',
      total: 4,
    },
    {
      key: 'physicalScience',
      name: 'Physical Science',
      total: 8,
    },
    {
      key: 'piloting',
      name: 'Piloting',
      total: 9,
    },
    {
      key: 'profession',
      name: 'Profession',
      total: 9,
    },
    {
      key: 'senseMotive',
      name: 'Sense Motive',
      total: 0,
    },
    {
      key: 'sleightOfHands',
      name: 'Sleight Of Hands',
      total: 3,
    },
    {
      key: 'stealth',
      name: 'Stealth',
      total: 3,
    },
    {
      key: 'survival',
      name: 'Survival',
      total: 0,
    },
  ],
  inventory: {
    items: [
      {
        name: 'Frag Grenade mk.1',
        type: 'grenade',
        stats: {
          range: 20,
          radius: 15,
          explode: [1, 6],
        },
      },
      {
        name: 'Frag Grenade mk.2',
        type: 'grenade',
        stats: {
          range: 20,
          radius: 15,
          explode: [2, 6],
        },
      },
      {
        name: 'Iridishell Basic',
        type: 'armor',
        equipped: true,
        stats: {
          level: 2,
          price: 755,
          eacBonus: 3,
          kacBonus: 6,
          maxDexBonus: 2,
          armorCheckPenalty: -2,
          speedAdjustment: -5,
          upgradeSlots: 0,
          bulk: 2,
        },
      },
    ],
  },
};
