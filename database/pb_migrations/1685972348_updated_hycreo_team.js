migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a5iuwxbo0aej95s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n2k2upvr",
    "name": "img",
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
  const collection = dao.findCollectionByNameOrId("a5iuwxbo0aej95s")

  // remove
  collection.schema.removeField("n2k2upvr")

  return dao.saveCollection(collection)
})
