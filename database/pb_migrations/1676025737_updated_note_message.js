migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
