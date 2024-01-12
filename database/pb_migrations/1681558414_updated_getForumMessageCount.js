migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, isQuestion, message, users.username\nFROM forum_messages\nLEFT JOIN users on users.id = forum_messages.author\nWHERE forum_messages.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("gmc47dbo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjcavjjn",
    "name": "username",
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
    "query": "SELECT forum_messages.id, isQuestion, message, users.username\nFROM forum_messages\nLEFT JOIN users on users.id = forum_messages.author\nWHERE forum_messages.isQuestion = true\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gmc47dbo",
    "name": "username",
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
  collection.schema.removeField("hjcavjjn")

  return dao.saveCollection(collection)
})
