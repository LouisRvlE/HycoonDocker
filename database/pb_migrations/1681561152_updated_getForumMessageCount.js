migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT \n  COUNT(responses.id) as s,\n  question.id\n\nFROM forum_messages as responses\n\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2upwv3zo",
    "name": "s",
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
    "query": "SELECT question.id\n\nFROM forum_messages as responses\n\nLEFT JOIN forum_messages as question"
  }

  // remove
  collection.schema.removeField("2upwv3zo")

  return dao.saveCollection(collection)
})
