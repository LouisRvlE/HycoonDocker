migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  COUNT(question.title) as c,\n  question.title,\n  question.isQuestion,\n  question.message,\n  response.answer_to as id\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\nWHERE response.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("nemur9n6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hncc2hms",
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
    "id": "2u4anlj7",
    "name": "c",
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
    "query": "SELECT\n  response.id as responseId,\n  -- COUNT(question.title) as c,\n  question.title,\n  question.isQuestion,\n  question.message,\n  response.answer_to as id\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\nWHERE response.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nemur9n6",
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
  collection.schema.removeField("hncc2hms")

  // remove
  collection.schema.removeField("2u4anlj7")

  return dao.saveCollection(collection)
})
