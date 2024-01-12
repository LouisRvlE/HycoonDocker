migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title,\n  COUNT(responses.id) as sss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\nWHERE responses.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("p7quwu9n")

  // remove
  collection.schema.removeField("d15rgmku")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title,\n  COUNT(question.id) as sss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\nWHERE responses.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p7quwu9n",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d15rgmku",
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
  collection.schema.removeField("q2hbr2ab")

  // remove
  collection.schema.removeField("vjfbw9z2")

  return dao.saveCollection(collection)
})
