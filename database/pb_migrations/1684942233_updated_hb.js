migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("igiwgwmzkuw9wxe")

  collection.name = "hijab"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("igiwgwmzkuw9wxe")

  collection.name = "hb"

  return dao.saveCollection(collection)
})
