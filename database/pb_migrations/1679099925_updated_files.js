migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = "owner.email = @request.auth.email"
  collection.viewRule = "owner.email = @request.auth.email || sharedWith.email ~ @request.auth.email"
  collection.updateRule = "owner.email = @request.auth.email"
  collection.deleteRule = "owner.email = @request.auth.email"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8fafzab",
    "name": "owner",
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
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8fafzab",
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
