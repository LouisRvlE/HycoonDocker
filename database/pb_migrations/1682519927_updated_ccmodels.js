migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n7gakbu0i2ym4u")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mit8ehsp",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [
        "480x720"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n7gakbu0i2ym4u")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mit8ehsp",
    "name": "preview",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [
        "480x720"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
