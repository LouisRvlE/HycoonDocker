migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("37dyw1jgazl4gzr")

  collection.name = "chat_rooms"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("37dyw1jgazl4gzr")

  collection.name = "chatrooms"

  return dao.saveCollection(collection)
})
