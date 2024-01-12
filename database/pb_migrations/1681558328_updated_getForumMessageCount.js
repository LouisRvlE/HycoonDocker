migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, isQuestion, message\nFROM forum_messages\nLEFT JOIN users on users.id = forum_messages.author\n"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, isQuestion, message\nFROM forum_messages\nRIGHT JOIN users on users.id = forum_messages.author\n"
  }

  return dao.saveCollection(collection)
})
