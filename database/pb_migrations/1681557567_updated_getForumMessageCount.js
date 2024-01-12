migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT id, message, isQuestion\nFROM forum_messages\n\nWHERE isQuestion = true\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "toudzc5y",
    "name": "isQuestion",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT id, message\nFROM forum_messages\n\nWHERE isQuestion = true\n"
  }

  // remove
  collection.schema.removeField("toudzc5y")

  return dao.saveCollection(collection)
})
