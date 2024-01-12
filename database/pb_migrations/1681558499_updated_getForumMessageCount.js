migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, forum_messages.isQuestion, forum_messages.message\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nWHERE forum_messages.isQuestion = true\n"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, forum_messages.isQuestion, forum_messages.message\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nWHERE forum_messages.isQuestion = false\n"
  }

  return dao.saveCollection(collection)
})
