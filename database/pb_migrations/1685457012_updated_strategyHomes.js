migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // remove
  collection.schema.removeField("7916ywyg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rledaisv",
    "name": "consommation",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

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

  // remove
  collection.schema.removeField("rledaisv")

  return dao.saveCollection(collection)
})
