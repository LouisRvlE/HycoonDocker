migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.listRule = null

  return dao.saveCollection(collection)
})
