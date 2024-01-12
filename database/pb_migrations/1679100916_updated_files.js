migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = "owner.email = @request.auth.email || sharedWith.email ~ @request.auth.email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = null

  return dao.saveCollection(collection)
})
