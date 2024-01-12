migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyhejhomroi4pev")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4w7pgo1c",
    "name": "weapon",
    "type": "text",
    "required": false,
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
    "id": "fvbopkt8",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyhejhomroi4pev")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4w7pgo1c",
    "name": "paper",
    "type": "text",
    "required": false,
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
    "id": "fvbopkt8",
    "name": "field1",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
