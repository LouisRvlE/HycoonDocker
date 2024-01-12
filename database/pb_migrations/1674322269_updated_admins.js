migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvf9teuec43p5oh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skvpic0q",
    "name": "username",
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
  const collection = dao.findCollectionByNameOrId("hvf9teuec43p5oh")

  // remove
  collection.schema.removeField("skvpic0q")

  return dao.saveCollection(collection)
})
