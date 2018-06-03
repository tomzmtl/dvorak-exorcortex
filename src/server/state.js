const LVL = 4;
const BAB = 3;
const CLASS = {
  HP: 6,
  SP: 6,
};
const CON_MOD = 1;
const INT_MOD = 3;

const HP = 8 + (LVL * CLASS.HP);
const SP = LVL * (CLASS.SP + CON_MOD);
const RP = Math.ceil(LVL / 2) + INT_MOD;

module.exports = {
  app: {
    stamina: {
      total: SP,
      current: SP,
    },
    hit: {
      total: HP,
      current: HP,
    },
    resolve: {
      total: RP,
      current: RP,
    },
    eac: {
      base: 10,
      armorBonus: 3,
      dexMod: 2,
      miscMod: 0,
    },
    kac: {
      base: 10,
      armorBonus: 6,
      dexMod: 2,
      miscMod: 0,
    },
    acVsComMan: {
      base: 8,
      upgrades: 1,
    },
    savingThrows: {
      fortitude: {
        base: 4,
        abilityMod: 1,
        miscMod: 2,
      },
      reflex: {
        base: 4,
        abilityMod: 3,
        miscMod: 2 - 2,
      },
      will: {
        base: 1,
        abilityMod: 0,
        miscMod: 0,
      },
    },
    attackBonuses: {
      melee: {
        bab: BAB,
        strMod: 0,
        miscMod: 0,
      },
      ranged: {
        bab: BAB,
        strMod: 3,
        miscMod: 0,
      },
      thrown: {
        bab: BAB,
        strMod: 0,
        miscMod: 0,
      },
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
        modifier: CON_MOD,
        name: 'Constitution',
        score: 12,
      },
      {
        key: 'int',
        modifier: INT_MOD,
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
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'athletics',
        name: 'Athletics',
        stats: {
          ranks: 2,
          classBonus: 3,
          abilityMod: 0,
          miscMod: 0,
        },
      },
      {
        key: 'bluff',
        name: 'Bluff',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: -1,
          miscMod: 0,
        },
      },
      {
        key: 'computers',
        name: 'Computers',
        stats: {
          ranks: 4,
          classBonus: 3,
          abilityMod: 3,
          miscMod: 1,
        },
      },
      {
        key: 'culture',
        name: 'Culture',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'diplomacy',
        name: 'Diplomacy',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: -1,
          miscMod: 0,
        },
      },
      {
        key: 'disguise',
        name: 'Disguise',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: -1,
          miscMod: 0,
        },
      },
      {
        key: 'engineering',
        name: 'Engineering',
        stats: {
          ranks: 4,
          classBonus: 3,
          abilityMod: 3,
          miscMod: 1,
        },
      },
      {
        key: 'intimidate',
        name: 'Intimidate',
        stats: {
          ranks: 3,
          classBonus: 0,
          abilityMod: -1,
          miscMod: 0,
        },
      },
      {
        key: 'lifeScience',
        name: 'Life Science',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'medicine',
        name: 'Medicine',
        stats: {
          ranks: 1,
          classBonus: 3,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'mysticism',
        name: 'Mysticism',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'perception',
        name: 'Perception',
        stats: {
          ranks: 1,
          classBonus: 3,
          abilityMod: 0,
          miscMod: 0,
        },
      },
      {
        key: 'physicalScience',
        name: 'Physical Science',
        stats: {
          ranks: 2,
          classBonus: 3,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'piloting',
        name: 'Piloting',
        stats: {
          ranks: 4,
          classBonus: 3,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'profession',
        name: 'Profession',
        stats: {
          ranks: 4,
          classBonus: 3,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'senseMotive',
        name: 'Sense Motive',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: 0,
          miscMod: 0,
        },
      },
      {
        key: 'sleightOfHands',
        name: 'Sleight Of Hands',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'stealth',
        name: 'Stealth',
        stats: {
          ranks: 3,
          classBonus: 0,
          abilityMod: 3,
          miscMod: 0,
        },
      },
      {
        key: 'survival',
        name: 'Survival',
        stats: {
          ranks: 0,
          classBonus: 0,
          abilityMod: 0,
          miscMod: 0,
        },
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
          id: 1,
        },
        {
          name: 'Frag Grenade mk.2',
          type: 'grenade',
          stats: {
            range: 20,
            radius: 15,
            explode: [2, 6],
          },
          id: 2,
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
          id: 3,
        },

        {
          name: 'Pulsecaster Pistol',
          type: 'weapon',
          equipped: false,
          stats: {
            level: 1,
            attackBonus: 0,
            damage: [1, 4],
            critical: null,
            range: 30,
            type: 'E',
            ammo: [20, 1],
            special: [
              'nonlethal',
            ],
          },
          id: 4,
        },

        {
          name: 'KT-53 Quick-Draw Firedrake',
          type: 'weapon',
          equipped: false,
          stats: {
            level: 2,
            attackBonus: 0,
            damage: [1, 6],
            critical: {
              damage: [1, 6],
              type: 'B',
            },
            range: 120,
            type: 'F',
            ammo: [8, 1],
            special: [
              'analog',
              'quick-reload',
            ],
          },
          id: 5,
        },

        {
          name: 'ZTN-197 Mithril Storm',
          type: 'weapon',
          equipped: false,
          stats: {
            level: 2,
            attackBonus: 0,
            damage: [1, 8],
            critical: null,
            range: 40,
            type: 'E',
            ammo: [80, 4],
            special: [
              'analog',
              {
                damage: [1, 6],
                type: 'B',
              },
            ],
          },
          id: 6,
        },

        {
          name: 'Unerring Ass Hammer',
          type: 'weapon',
          equipped: false,
          stats: {
            level: 1,
            attackBonus: 4,
            damage: [1, 6],
            critical: null,
            range: 0,
            type: 'B',
            ammo: null,
            special: [],
          },
          id: 7,
        },
      ],
    },
    feats: [
      { name: 'Constructed' },
      { name: 'Exceptional Vision' },
      { name: 'Flat Affect' },
      { name: 'Upgrade Slot' },
      { name: 'AI (Exocortex)' },
      { name: 'Bypass' },
      { name: 'Custom Rig' },
      { name: 'Armor: Light/Heavy' },
      { name: 'Weapons: Small/Long/Melee' },
      { name: 'Grenades' },
      { name: 'Overload' },
      { name: 'Weapon Secialty (class)' },
      { name: 'Amplified Glitch' },
      { name: 'Jet Dash' },
      { name: 'Hack directory' },
    ],
  },
  ui: {
    sidePanelOpen: false,
    inspect: {
      type: 'inventory',
      id: null,
    },
  },
};
