migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("177p9oumuaut7fl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "resryc7t",
    "name": "questsOnSuccess",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdeab6gr",
    "name": "ressourcesNeeded",
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
  const collection = dao.findCollectionByNameOrId("177p9oumuaut7fl")

  // remove
  collection.schema.removeField("resryc7t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdeab6gr",
    "name": "ressourcesNeeded",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "eik1f73j9xih6fu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
