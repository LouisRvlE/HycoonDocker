migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fw0fj29u1lh6f1o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vap2cocx",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fw0fj29u1lh6f1o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vap2cocx",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/svg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
