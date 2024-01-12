migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fw0fj29u1lh6f1o")

  collection.createRule = "@request.auth.isAdmin = true"
  collection.updateRule = "@request.auth.isAdmin = true"
  collection.deleteRule = "@request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fw0fj29u1lh6f1o")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
