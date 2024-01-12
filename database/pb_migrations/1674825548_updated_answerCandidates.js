migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("brnt4lfpv0ld9bh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypb9jnxe",
    "name": "call",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "9vxshinnrowkuam",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("brnt4lfpv0ld9bh")

  // remove
  collection.schema.removeField("ypb9jnxe")

  return dao.saveCollection(collection)
})
