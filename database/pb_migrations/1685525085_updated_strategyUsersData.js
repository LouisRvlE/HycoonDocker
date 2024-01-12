migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8nslan3k5xupyql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bboq4zqq",
    "name": "mutate",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8nslan3k5xupyql")

  // remove
  collection.schema.removeField("bboq4zqq")

  return dao.saveCollection(collection)
})
