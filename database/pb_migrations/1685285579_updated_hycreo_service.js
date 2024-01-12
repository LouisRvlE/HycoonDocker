migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzyzqc53zm5dtnw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtxslntk",
    "name": "title",
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
  const collection = dao.findCollectionByNameOrId("kzyzqc53zm5dtnw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtxslntk",
    "name": "titre",
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
