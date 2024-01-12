migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xet5iie1",
    "name": "subtitle",
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
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  // remove
  collection.schema.removeField("xet5iie1")

  return dao.saveCollection(collection)
})
