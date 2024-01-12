migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9vxshinnrowkuam")

  // remove
  collection.schema.removeField("exthrokp")

  // remove
  collection.schema.removeField("dolrvapq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqvoyqhi",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9vxshinnrowkuam")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "exthrokp",
    "name": "offer",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dolrvapq",
    "name": "answer",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("uqvoyqhi")

  return dao.saveCollection(collection)
})
