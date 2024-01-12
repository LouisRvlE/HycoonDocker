migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  question.isQuestion,\n  question.message,\n  question.title,\n  question.answer_to as id,\n  COUNT(DISTINCT question.answer_to) as q\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n"
  }

  // remove
  collection.schema.removeField("aalevrpc")

  // remove
  collection.schema.removeField("tmhqzovc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqbkhcd0",
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
    "id": "nhn5ohj1",
    "name": "q",
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
    "query": "SELECT\n  response.id as responseId,\n  question.isQuestion,\n  question.message,\n  response.title,\n  question.answer_to as id,\n  COUNT(DISTINCT question.answer_to) as q\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aalevrpc",
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
    "id": "tmhqzovc",
    "name": "q",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("qqbkhcd0")

  // remove
  collection.schema.removeField("nhn5ohj1")

  return dao.saveCollection(collection)
})
