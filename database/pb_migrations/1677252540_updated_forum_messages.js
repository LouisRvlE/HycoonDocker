migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  collection.deleteRule = "@request.auth.email = author.email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
