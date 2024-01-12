migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l27st39b9gko0a")

  collection.name = "tags"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l27st39b9gko0a")

  collection.name = "project_tags"

  return dao.saveCollection(collection)
})
