migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.createRule = "@collection.files.user.email = @request.auth.email"
  collection.updateRule = "@collection.files.user.email = @request.auth.email"
  collection.deleteRule = "@collection.files.user.email = @request.auth.email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
