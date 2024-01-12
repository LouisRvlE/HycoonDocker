migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id,\n  question.isQuestion,\n  question.message,\n  response.title,\n  \n  COUNT(question.id) as sss\nFROM forum_messages as question\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n-- WHERE question.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("qjrb6yii")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d20ngbqt",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aimmd3ha",
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
    "query": "SELECT\n  response.id,\n  question.isQuestion,\n  question.message,\n  response.title\n  \n  -- COUNT(question.id) as sss\nFROM forum_messages as question\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n-- WHERE question.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qjrb6yii",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("d20ngbqt")

  // remove
  collection.schema.removeField("aimmd3ha")

  return dao.saveCollection(collection)
})
