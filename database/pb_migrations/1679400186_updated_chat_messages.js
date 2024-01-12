migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9lmy74625kovve")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0kupgpz",
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
  const collection = dao.findCollectionByNameOrId("v9lmy74625kovve")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0kupgpz",
    "name": "user",
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
})
