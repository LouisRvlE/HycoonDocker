migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT question.id\n\nFROM forum_messages as responses\n\nLEFT JOIN forum_messages as question"
  }

  // remove
  collection.schema.removeField("sa3hrk79")

  // remove
  collection.schema.removeField("g6m65sqb")

  // remove
  collection.schema.removeField("toudzc5y")

  // remove
  collection.schema.removeField("l6dskrdl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  -- COUNT(response.id) as c,\n  question.title,\n  question.isQuestion,\n  question.message,\n  response.answer_to as id\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n-- WHERE response.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sa3hrk79",
    "name": "responseId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8pdcb2vbzxjd1ld",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6dskrdl",
    "name": "message",
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
