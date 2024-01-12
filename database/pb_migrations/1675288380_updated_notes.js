migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aspsb6rd",
    "name": "field",
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
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  // remove
  collection.schema.removeField("aspsb6rd")

  return dao.saveCollection(collection)
})
