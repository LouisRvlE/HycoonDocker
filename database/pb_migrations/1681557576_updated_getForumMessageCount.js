migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT id, isQuestion, message\nFROM forum_messages\n\nWHERE isQuestion = true\n"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT id, message, isQuestion\nFROM forum_messages\n\nWHERE isQuestion = true\n"
  }

  return dao.saveCollection(collection)
})
