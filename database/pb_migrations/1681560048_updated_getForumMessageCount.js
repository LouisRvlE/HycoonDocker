migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  response.isQuestion,\n  response.message,\n  question.title,\n  COUNT(response.id) as sss\nFROM forum_messages as response\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = response.answer_to\nWHERE response.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("q2hbr2ab")

  // remove
  collection.schema.removeField("vjfbw9z2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "opixrlev",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdyv7hsd",
    "name": "sss",
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
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title,\n  COUNT(responses.id) as sss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\nWHERE responses.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q2hbr2ab",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjfbw9z2",
    "name": "sss",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("opixrlev")

  // remove
  collection.schema.removeField("mdyv7hsd")

  return dao.saveCollection(collection)
})
