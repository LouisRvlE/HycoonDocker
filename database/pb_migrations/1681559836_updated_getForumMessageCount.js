migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  -- fm.title,\n  responses.id,\n  responses.isQuestion,\n  responses.message\n  -- fm.message\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question \n-- WHERE responses.isQuestion = false\n"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  -- fm.title,\n  responses.id,\n  responses.isQuestion,\n  responses.message\n  -- fm.message\nFROM forum_messages as responses\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as question \nWHERE responses.isQuestion = false\n"
  }

  return dao.saveCollection(collection)
})
