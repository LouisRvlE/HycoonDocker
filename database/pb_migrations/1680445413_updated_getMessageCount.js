migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.name = "getNoteMessageCount"

  // remove
  collection.schema.removeField("w9y9xgfc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ainar07u",
    "name": "messageCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.name = "getMessageCount"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w9y9xgfc",
    "name": "messageCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("ainar07u")

  return dao.saveCollection(collection)
})
