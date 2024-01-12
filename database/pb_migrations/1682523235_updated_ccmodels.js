migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysjklhop",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "t2px0oskzh8scel",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysjklhop",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "t2px0oskzh8scel",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
