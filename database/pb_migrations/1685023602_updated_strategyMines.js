migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  // remove
  collection.schema.removeField("trh9jrhv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxentxfg",
    "name": "production",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trh9jrhv",
    "name": "production",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zxentxfg")

  return dao.saveCollection(collection)
})
