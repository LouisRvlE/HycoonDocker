migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("37dyw1jgazl4gzr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxxvqtot",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("37dyw1jgazl4gzr")

  // remove
  collection.schema.removeField("sxxvqtot")

  return dao.saveCollection(collection)
})
