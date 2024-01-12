migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ars4kv1s",
    "name": "buildingScore",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nlxjjptt",
    "name": "ressourcesScore",
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
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // remove
  collection.schema.removeField("ars4kv1s")

  // remove
  collection.schema.removeField("nlxjjptt")

  return dao.saveCollection(collection)
})
