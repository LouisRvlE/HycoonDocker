migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sebvkxfx",
    "name": "niveau",
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
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sebvkxfx",
    "name": "field",
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
