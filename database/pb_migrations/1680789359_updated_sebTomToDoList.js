migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  collection.listRule = null

  return dao.saveCollection(collection)
})
