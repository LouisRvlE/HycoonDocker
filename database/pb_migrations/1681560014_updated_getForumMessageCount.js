migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title\n  -- COUNT(question.id) as sss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\nWHERE responses.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("cwlvpo3o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfuguvkz",
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
    "query": "SELECT\n  question.id,\n  responses.isQuestion,\n  responses.message,\n  question.title\n  -- COUNT(question.id) as sss\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to\n-- WHERE responses.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwlvpo3o",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yfuguvkz")

  return dao.saveCollection(collection)
})
