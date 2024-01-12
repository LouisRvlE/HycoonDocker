migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a4yeufct",
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
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a4yeufct",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
