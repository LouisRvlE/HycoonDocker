migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tp3nfcl5",
    "name": "soldPercent",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxj3fo9d",
    "name": "stock",
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
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // remove
  collection.schema.removeField("tp3nfcl5")

  // remove
  collection.schema.removeField("dxj3fo9d")

  return dao.saveCollection(collection)
})
