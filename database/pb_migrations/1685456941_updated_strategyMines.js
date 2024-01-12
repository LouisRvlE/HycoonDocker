migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hdx03gz",
    "name": "outputs",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxentxfg",
    "name": "inputs",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  // remove
  collection.schema.removeField("1hdx03gz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxentxfg",
    "name": "production",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
