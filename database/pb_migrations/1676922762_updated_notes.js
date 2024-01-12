migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
