migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mr57e9k73r47687")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mr57e9k73r47687")

  collection.createRule = null

  return dao.saveCollection(collection)
})
