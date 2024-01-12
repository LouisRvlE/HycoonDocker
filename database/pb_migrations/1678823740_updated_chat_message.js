migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9lmy74625kovve")

  collection.name = "chat_messages"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9lmy74625kovve")

  collection.name = "chat_message"

  return dao.saveCollection(collection)
})
