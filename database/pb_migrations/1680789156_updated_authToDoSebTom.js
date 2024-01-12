migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2so36ow5g7yu4xu")

  collection.name = "sebTomAuthToDo"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2so36ow5g7yu4xu")

  collection.name = "authToDoSebTom"

  return dao.saveCollection(collection)
})
