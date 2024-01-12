migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  collection.updateRule = "@request.auth.isAdmin = True"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
