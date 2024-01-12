migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id\nFROM forum_messages\n\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\n\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("wpeoitgt")

  // remove
  collection.schema.removeField("toudzc5y")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT COUNT(answer_to) as messageCount, isQuestion, answer_to as id FROM forum_messages WHERE isQuestion = false GROUP BY answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wpeoitgt",
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
    "id": "toudzc5y",
    "name": "isQuestion",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
