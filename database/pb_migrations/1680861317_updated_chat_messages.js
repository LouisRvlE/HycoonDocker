migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9lmy74625kovve")

  collection.indexes = [
    "CREATE INDEX `_v9lmy74625kovve_created_idx` ON `chat_messages` (`created`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0kupgpz",
    "name": "author",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9lmy74625kovve")

  collection.indexes = [
    "CREATE INDEX `_v9lmy74625kovve_created_idx` ON \"chat_messages\" (`created`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0kupgpz",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
