migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\n-- WHERE responses.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("xpapq1ka")

  // remove
  collection.schema.removeField("x3f31qlz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gkou0f7c",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title,\n  COUNT(responses.id) as responsessss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\n-- WHERE responses.isQuestion = false\n"
  }

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

  // remove
  collection.schema.removeField("gkou0f7c")

  return dao.saveCollection(collection)
})
