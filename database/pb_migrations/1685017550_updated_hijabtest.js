migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rx1spbo6r3t56z")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rx1spbo6r3t56z")

  collection.indexes = [
    "CREATE UNIQUE INDEX `id` ON `hijabtest` (`hi`)"
  ]

  return dao.saveCollection(collection)
})
