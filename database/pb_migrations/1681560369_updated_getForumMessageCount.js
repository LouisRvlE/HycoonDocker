migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  question.id,\n  response.isQuestion,\n  response.message,\n  question.title\n  -- COUNT(response.id) as sss\nFROM forum_messages as response\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = response.answer_to\n-- WHERE response.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("fzfemrlb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mrhhujca",
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
    "query": "SELECT\n  question.id,\n  response.isQuestion,\n  response.message,\n  question.title\n  -- COUNT(response.id) as sss\nFROM forum_messages as response\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question ON question.id = response.answer_to\nWHERE response.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzfemrlb",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("mrhhujca")

  return dao.saveCollection(collection)
})
