migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // remove
  collection.schema.removeField("g6kvgxrf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6kvgxrf",
    "name": "theme",
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
