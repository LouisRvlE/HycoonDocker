migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3d1kxfhx",
    "name": "data",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "voxmz9qn",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x078zumvcj0whr4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8")

  // remove
  collection.schema.removeField("3d1kxfhx")

  // remove
  collection.schema.removeField("voxmz9qn")

  return dao.saveCollection(collection)
})
