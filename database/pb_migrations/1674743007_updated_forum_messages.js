migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipah6sna",
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
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipah6sna",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
