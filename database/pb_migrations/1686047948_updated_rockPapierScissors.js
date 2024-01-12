migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyhejhomroi4pev")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h5igbdwo",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "oyhejhomroi4pev",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyhejhomroi4pev")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h5igbdwo",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "oyhejhomroi4pev",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
