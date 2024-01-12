migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id\nFROM forum_messages\n\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("rnzakcsm")

  return dao.saveCollection(collection)
})
