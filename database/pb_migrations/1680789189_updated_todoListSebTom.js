migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  collection.name = "sebTomToDoList"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  collection.name = "todoListSebTom"

  return dao.saveCollection(collection)
})
