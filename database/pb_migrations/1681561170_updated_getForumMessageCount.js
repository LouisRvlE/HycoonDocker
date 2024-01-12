migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT \n  -- COUNT(responses.id) as s,\n  question.id,\n  question.title\n\nFROM forum_messages as responses\n\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to"
  }

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
    "query": "SELECT \n  -- COUNT(responses.id) as s,\n  question.id\n\nFROM forum_messages as responses\n\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to"
  }

  // remove
  collection.schema.removeField("g6m65sqb")

  return dao.saveCollection(collection)
})
