migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n7gakbu0i2ym4u")

  // remove
  collection.schema.removeField("lohdvxj1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9fbe8du",
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
  const collection = dao.findCollectionByNameOrId("0n7gakbu0i2ym4u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lohdvxj1",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2so36ow5g7yu4xu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("e9fbe8du")

  return dao.saveCollection(collection)
})
