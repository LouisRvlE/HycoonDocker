migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title\nFROM forum_messages\n\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("rnzakcsm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dbvduq8",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as responsesCount\nFROM forum_messages\n\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n\nGROUP BY forum_messages.answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rnzakcsm",
    "name": "responsesCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("9dbvduq8")

  // remove
  collection.schema.removeField("g6m65sqb")

  return dao.saveCollection(collection)
})
