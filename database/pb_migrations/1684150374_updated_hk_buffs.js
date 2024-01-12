migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2u9f0kxh3r21ezs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cfc8tli2",
    "name": "rarity",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "iz4sdton3fjwu9g",
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

  // remove
  collection.schema.removeField("cfc8tli2")

  return dao.saveCollection(collection)
})
