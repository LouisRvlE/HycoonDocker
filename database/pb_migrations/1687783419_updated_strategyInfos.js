migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eik1f73j9xih6fu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rrexxosu",
    "name": "navlink",
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
  const collection = dao.findCollectionByNameOrId("eik1f73j9xih6fu")

  // remove
  collection.schema.removeField("rrexxosu")

  return dao.saveCollection(collection)
})
