migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT COUNT(DISTINCT strategyBuildings.type) as id, strategyBuildings.uID FROM strategyBuildings"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT COUNT(DISTINCT strategyBuildings.uID) as id, strategyBuildings.uID FROM strategyBuildings"
  }

  return dao.saveCollection(collection)
})
