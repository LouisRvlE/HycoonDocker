migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.createRule = "@request.auth.isSuperAdmin = true || @request.auth.email = \"louis.reville@gmail.com\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.createRule = null

  return dao.saveCollection(collection)
})
