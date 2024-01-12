migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7hdfzfddz0s1eg4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzob6a8t",
    "name": "deadline",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7hdfzfddz0s1eg4")

  // remove
  collection.schema.removeField("dzob6a8t")

  return dao.saveCollection(collection)
})
