migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8nslan3k5xupyql")

  // remove
  collection.schema.removeField("va3ijocy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsjsfe6w",
    "name": "ressources",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obf6gpk8",
    "name": "uID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "klv0v78so2yvjwo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8nslan3k5xupyql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "va3ijocy",
    "name": "field",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("tsjsfe6w")

  // remove
  collection.schema.removeField("obf6gpk8")

  return dao.saveCollection(collection)
})
