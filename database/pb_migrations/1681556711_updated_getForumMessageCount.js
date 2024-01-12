migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, forum_messages.message\nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("w1vxyfbz")

  // remove
  collection.schema.removeField("g6m65sqb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k0zgmprr",
    "name": "messageCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title as fptitle, forum_messages.message\nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n-- WHERE forum_messages.isQuestion = true\nGROUP BY forum_messages.answer_to"
  }

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

  // remove
  collection.schema.removeField("k0zgmprr")

  return dao.saveCollection(collection)
})
