migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("pdb51icq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rwbtvsak",
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

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdb51icq",
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
  collection.schema.removeField("rwbtvsak")

  return dao.saveCollection(collection)
})
