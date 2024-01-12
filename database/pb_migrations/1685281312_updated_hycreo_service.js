migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzyzqc53zm5dtnw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tn9yektr",
    "name": "examples",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "27jyexxbouongju",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzyzqc53zm5dtnw")

  // remove
  collection.schema.removeField("tn9yektr")

  return dao.saveCollection(collection)
})
