migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dxzorpt",
    "name": "anwsers",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "collectionId": "8pdcb2vbzxjd1ld",
      "cascadeDelete": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6dskrdl",
    "name": "message",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // remove
  collection.schema.removeField("9dxzorpt")

  // remove
  collection.schema.removeField("l6dskrdl")

  // remove
  collection.schema.removeField("ipah6sna")

  return dao.saveCollection(collection)
})
