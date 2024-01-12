migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title as fptitle \nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n-- WHERE forum_messages.isQuestion = true\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("haeo4bi1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9aeiryew",
    "name": "messageCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
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
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title as fptitle, forum_messages.title \nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n-- WHERE forum_messages.isQuestion = true\nGROUP BY forum_messages.answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "haeo4bi1",
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
  collection.schema.removeField("9aeiryew")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6m65sqb",
    "name": "title",
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
