migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yt5mztrh",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "collectionId": "5l27st39b9gko0a",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // remove
  collection.schema.removeField("yt5mztrh")

  return dao.saveCollection(collection)
})
