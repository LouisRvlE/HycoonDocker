migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // remove
  collection.schema.removeField("yd3obkzq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7916ywyg",
    "name": "consommation",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yd3obkzq",
    "name": "consommation",
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
  collection.schema.removeField("7916ywyg")

  return dao.saveCollection(collection)
})
