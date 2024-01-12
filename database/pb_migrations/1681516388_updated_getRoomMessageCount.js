migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.name = "getRooms"

  // remove
  collection.schema.removeField("m0hbkij8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t23lgku1",
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
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.name = "getRoomMessageCount"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m0hbkij8",
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
  collection.schema.removeField("t23lgku1")

  return dao.saveCollection(collection)
})
