migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  collection.createRule = "@request.auth.isSuperAdmin = true"
  collection.updateRule = "@request.auth.isSuperAdmin = true"
  collection.deleteRule = "@request.auth.isSuperAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
