// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes( event => {

event.remove({  id: 'dndesires:seething/diamond_shard_from_deepslate_coal_ore' })
event.remove({  output: 'tempad:time_steel'  })
event.remove({  id: 'minecraft:lodestone' })
event.remove({  id: 'sgjourney:crystal_base'  })
event.remove({  id: 'sgjourney:advanced_crystal_base'})

event.shaped(
  Item.of('sgjourney:advanced_crystal_base', 1), // arg 1: output
  [
    ' GC',
    'NBG', // arg 2: the shape (array of strings)
    ' GC'
  ],
  {
    G: 'minecraft:glowstone_dust',
    C: 'ae2:certus_quartz_crystal',
    B: 'sgjourney:crystal_base',
    N: 'sgjourney:pure_naquadah'
  }
)

event.shaped(
  Item.of('sgjourney:crystal_base', 1), // arg 1: output
  [
    ' G ',
    ' C ', // arg 2: the shape (array of strings)
    ' G '
  ],
  {
    G: 'minecraft:glowstone_dust',
    C: 'ae2:certus_quartz_crystal'
  }
)

event.shaped(
  Item.of('minecraft:lodestone', 1), // arg 1: output
  [
    'SSS',
    'SIS', // arg 2: the shape (array of strings)
    'SSS'
  ],
  {
    S: 'minecraft:chiseled_stone_bricks',
    I: 'minecraft:iron_ingot'
  }
)

event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "create:scorchia"
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "chance": 0.5,
      "id": "dndesires:coal_piece"
    },
    {
      "chance": 0.15,
      "id": "minecraft:coal"
    }
  ]
})

event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "item": "minecraft:amethyst_shard"
    },
    {
      "item": "minecraft:amethyst_shard"
    },
    {
      "item": "minecraft:amethyst_shard"
    },
    {
      "item": "minecraft:amethyst_shard"
    },
    {
      "item": "minecraft:amethyst_shard"
    },
    {
      "type": "neoforge:single",
      "amount": 250,
      "fluid": "create_enchantment_industry:experience"
    }
  ],
  "results": [
    {
      "amount": 250,
      "id": "create_dragons_plus:dragon_breath"
    }
  ]
})

event.custom({
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "item": "create:brass_ingot"
    }
  ],
  "results": [
    {
      "count": 2,
      "id": "tempad:time_steel"
    }
  ]
})







})