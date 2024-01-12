migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("3ijcecbk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vtag7cz5",
    "name": "ligne_count",
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
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ijcecbk",
    "name": "ligne_count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("vtag7cz5")

  return dao.saveCollection(collection)
})
