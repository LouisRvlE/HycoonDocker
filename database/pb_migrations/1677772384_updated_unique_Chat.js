migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vedtywqv9lmzt2m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drnclw1m",
    "name": "chatName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vedtywqv9lmzt2m")

  // remove
  collection.schema.removeField("drnclw1m")

  return dao.saveCollection(collection)
})
