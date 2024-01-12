migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nywxmuys",
    "name": "sharedWith",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  // remove
  collection.schema.removeField("nywxmuys")

  return dao.saveCollection(collection)
})
