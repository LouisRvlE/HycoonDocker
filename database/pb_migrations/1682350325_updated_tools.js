migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oklvtbxp",
    "name": "importance",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  // remove
  collection.schema.removeField("oklvtbxp")

  return dao.saveCollection(collection)
})
