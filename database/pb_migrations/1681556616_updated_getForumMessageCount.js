migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title as fptitle, forum_messages.message\nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n-- WHERE forum_messages.isQuestion = true\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("vtwu8bdl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w1vxyfbz",
    "name": "messageCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6dskrdl",
    "name": "message",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6m65sqb",
    "name": "fptitle",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title as fptitle, forum_messages.title as fmTitle\nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n-- WHERE forum_messages.isQuestion = true\nGROUP BY forum_messages.answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vtwu8bdl",
    "name": "messageCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("w1vxyfbz")

  // remove
  collection.schema.removeField("l6dskrdl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6m65sqb",
    "name": "fmTitle",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
