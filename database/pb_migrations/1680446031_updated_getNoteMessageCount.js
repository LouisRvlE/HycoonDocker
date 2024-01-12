migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("ainar07u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5jtth6j",
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

  collection.listRule = null
  collection.viewRule = null

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

  // remove
  collection.schema.removeField("j5jtth6j")

  return dao.saveCollection(collection)
})
