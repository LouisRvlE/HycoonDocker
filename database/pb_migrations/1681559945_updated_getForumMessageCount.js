migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title,\n  COUNT(responses.id) as responsessss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\n-- WHERE responses.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("i7abdtmc")

  // remove
  collection.schema.removeField("33e3wcpt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xpapq1ka",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x3f31qlz",
    "name": "responsessss",
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
    "query": "SELECT\n  responses.id,\n  responses.isQuestion,\n  responses.message,\n  question.title,\n  COUNT(responses.id) as responsessss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\n-- WHERE responses.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i7abdtmc",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "33e3wcpt",
    "name": "responsessss",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("xpapq1ka")

  // remove
  collection.schema.removeField("x3f31qlz")

  return dao.saveCollection(collection)
})
