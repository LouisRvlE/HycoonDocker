migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eik1f73j9xih6fu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyasedvx",
    "name": "defaultPosition",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eik1f73j9xih6fu")

  // remove
  collection.schema.removeField("pyasedvx")

  return dao.saveCollection(collection)
})
