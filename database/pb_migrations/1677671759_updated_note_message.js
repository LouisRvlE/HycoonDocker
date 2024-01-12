migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
