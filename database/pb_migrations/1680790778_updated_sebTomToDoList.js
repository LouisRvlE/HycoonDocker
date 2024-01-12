migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wf1dco8f",
    "name": "banner",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "application/pdf"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr")

  // remove
  collection.schema.removeField("wf1dco8f")

  return dao.saveCollection(collection)
})
