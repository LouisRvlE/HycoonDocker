migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkb7kmn6",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 10,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkb7kmn6",
    "name": "name",
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
})
