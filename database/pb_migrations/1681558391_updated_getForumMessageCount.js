migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, isQuestion, message, users.username\nFROM forum_messages\nLEFT JOIN users on users.id = forum_messages.author\nWHERE forum_messages.isQuestion = true\n"
  }

  // remove
  collection.schema.removeField("6jyyo0gj")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, isQuestion, message, users.username\nFROM forum_messages\nLEFT JOIN users on users.id = forum_messages.author\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6jyyo0gj",
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
  collection.schema.removeField("gmc47dbo")

  return dao.saveCollection(collection)
})
