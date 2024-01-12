migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ckefkskul0j4p84")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6mrqqq5",
    "name": "text",
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
  const collection = dao.findCollectionByNameOrId("ckefkskul0j4p84")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6mrqqq5",
    "name": "texte",
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
})
