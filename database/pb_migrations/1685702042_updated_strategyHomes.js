migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eiye6ndp",
    "name": "inhabitants",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eiye6ndp",
    "name": "habitants",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
