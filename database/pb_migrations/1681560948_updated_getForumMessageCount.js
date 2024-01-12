migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  -- COUNT(response.id) as c,\n  question.title,\n  question.isQuestion,\n  question.message,\n  response.answer_to as id\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n-- WHERE response.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("qljwwmxy")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  -- COUNT(response.id) as c,\n  question.title,\n  question.isQuestion,\n  question.message,\n  response.answer_to as id\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\nWHERE response.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qljwwmxy",
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

  // remove
  collection.schema.removeField("sa3hrk79")

  return dao.saveCollection(collection)
})
