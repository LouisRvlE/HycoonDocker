migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xztw9xjq",
    "name": "unlockedQuests",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "177p9oumuaut7fl",
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
  collection.schema.removeField("xztw9xjq")

  return dao.saveCollection(collection)
})
