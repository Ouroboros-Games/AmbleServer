// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes( event => {

event.remove({  id: 'dndesires:seething/diamond_shard_from_deepslate_coal_ore' })
event.remove({  output: 'tempad:time_steel'  })

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