migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iddrp0pj6306rpv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6l0ljvqn",
    "name": "model",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iddrp0pj6306rpv")

  // remove
  collection.schema.removeField("6l0ljvqn")

  return dao.saveCollection(collection)
})
