migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2u9f0kxh3r21ezs")

  // remove
  collection.schema.removeField("0vrncw9k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "agye4edw",
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
  const collection = dao.findCollectionByNameOrId("2u9f0kxh3r21ezs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0vrncw9k",
    "name": "isBonus",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("agye4edw")

  return dao.saveCollection(collection)
})
