migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgo9ido9",
    "name": "unlockedBuildings",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "eik1f73j9xih6fu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // remove
  collection.schema.removeField("rgo9ido9")

  return dao.saveCollection(collection)
})
