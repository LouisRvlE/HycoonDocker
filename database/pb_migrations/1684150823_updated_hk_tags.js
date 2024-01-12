migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x078zumvcj0whr4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mfygqfit",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x078zumvcj0whr4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mfygqfit",
    "name": "type",
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
