migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vedtywqv9lmzt2m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t6lvvzsq",
    "name": "authorID",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfq9ytqk",
    "name": "authorName",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("vedtywqv9lmzt2m")

  // remove
  collection.schema.removeField("t6lvvzsq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfq9ytqk",
    "name": "author",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
