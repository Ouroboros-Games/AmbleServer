// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes( event => {

event.remove({  id: 'dndesires:seething/diamond_shard_from_deepslate_coal_ore' })
event.remove({  output: 'tempad:time_steel'  })
event.remove({  id: 'minecraft:lodestone' })
event.remove({  id: 'sgjourney:crystal_base'  })
event.remove({  id: 'sgjourney:advanced_crystal_base'})

event.shapeless(
  Item.of('sgjourney:sulfur_sand', 1), // arg 1: output
  [
    'tfmg:sulfur_dust',
    'tfmg:sulfur_dust',
    'tfmg:sulfur_dust',
    'tfmg:sulfur_dust'
  ]
)

event.shapeless(
  Item.of('tfmg:sulfur_dust', 4), // arg 1: output
  [
    'sgjourney:sulfur_sand'
  ]
)

event.shaped(
  Item.of('sgjourney:advanced_crystal_base', 3), // arg 1: output
  [
    ' GC',
    'NBG', // arg 2: the shape (array of strings)
    ' GC'
  ],
  {
    G: 'minecraft:glowstone_dust',
    C: '#forge:crystal_base_materials',
    B: 'sgjourney:crystal_base',
    N: 'sgjourney:pure_naquadah'
  }
)

event.shaped(
  Item.of('sgjourney:crystal_base', 3), // arg 1: output
  [
    ' G ',
    ' C ', // arg 2: the shape (array of strings)
    ' G '
  ],
  {
    G: 'minecraft:glowstone_dust',
    C: '#forge:crystal_base_materials'
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

event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "c:gems/amethyst"
  },
  "loops": 5,
  "results": [
    {
      "chance": 120.0,
      "id": "tempad:chronon_cell"
    },
    {
      "chance": 8.0,
      "id": "create:golden_sheet"
    },
    {
      "chance": 8.0,
      "id": "create:andesite_alloy"
    },
    {
      "chance": 5.0,
      "id": "create:cogwheel"
    },
    {
      "chance": 3.0,
      "id": "minecraft:gold_nugget"
    },
    {
      "chance": 2.0,
      "id": "create:shaft"
    },
    {
      "chance": 2.0,
      "id": "create:crushed_raw_gold"
    },
    {
      "id": "minecraft:iron_ingot"
    },
    {
      "id": "minecraft:clock"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:iron_nugget"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "id": "minecraft:iron_nugget"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:iron_nugget"
        },
        {
          "item": "create:large_cogwheel"
        }
      ],
      "results": [
        {
          "id": "minecraft:iron_nugget"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:iron_nugget"
        },
        {
          "tag": "c:nuggets/iron"
        }
      ],
      "results": [
        {
          "id": "minecraft:iron_nugget"
        }
      ]
    }
  ],
  "transitional_item": {
    "id": "minecraft:iron_nugget"
  }
})





})

ServerEvents.tags('item', event => {

event.add('forge:crystal_base_materials', 'sgjourney:unity_shard')
event.add('forge:crystal_base_materials', 'ae2:certus_quartz_crystal')
event.add('forge:crystal_base_materials', 'ae2:fluix_crystal')
event.add('forge:crystal_base_materials', 'minecraft:quartz')

})