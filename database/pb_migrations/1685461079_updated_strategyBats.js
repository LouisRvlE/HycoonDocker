migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w5b5gd5t2jd3o62")

  collection.options = {
    "query": "SELECT strategyMines.id as id, strategyMines.type from strategyMines LEFT JOIN strategyFactories"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w5b5gd5t2jd3o62")

  collection.options = {
    "query": "SELECT strategyMines.id as id, strategyMines.type from strategyMines JOIN strategyFactories"
  }

  return dao.saveCollection(collection)
})
