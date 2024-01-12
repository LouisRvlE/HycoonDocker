migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = "user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = null

  return dao.saveCollection(collection)
})
