migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  collection.createRule = "@request.auth.isAdmin = True"
  collection.updateRule = "@request.auth.isAdmin = True"
  collection.deleteRule = "@request.auth.isAdmin = True"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
