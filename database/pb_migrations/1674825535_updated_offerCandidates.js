migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ilbr0u3gg4ag994")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dizh21yr",
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
  const collection = dao.findCollectionByNameOrId("ilbr0u3gg4ag994")

  // remove
  collection.schema.removeField("dizh21yr")

  return dao.saveCollection(collection)
})
