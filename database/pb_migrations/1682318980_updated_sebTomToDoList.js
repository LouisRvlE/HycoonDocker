migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  // remove
  collection.schema.removeField("sebvkxfx")

  return dao.saveCollection(collection)
})
