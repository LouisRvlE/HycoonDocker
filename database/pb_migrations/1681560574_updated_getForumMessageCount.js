migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  question.isQuestion,\n  question.message,\n  response.title,\n  question.answer_to as id,\n  COUNT(DISTINCT question.answer_to) as q\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n"
  }

  // remove
  collection.schema.removeField("5gvgq1om")

  // remove
  collection.schema.removeField("uul5rcg2")

  // remove
  collection.schema.removeField("sa1cjvts")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  question.isQuestion,\n  question.message,\n  response.title,\n  question.answer_to as id,\n  -- COUNT(DISTINCT question.answer_to) as q\n  COUNT(question.answer_to) as q\nFROM forum_messages as question\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n-- WHERE question.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5gvgq1om",
    "name": "responseId",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uul5rcg2",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sa1cjvts",
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
  collection.schema.removeField("aalevrpc")

  // remove
  collection.schema.removeField("g6m65sqb")

  // remove
  collection.schema.removeField("tmhqzovc")

  return dao.saveCollection(collection)
})
