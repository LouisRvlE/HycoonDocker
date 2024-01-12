migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgktth0i",
    "name": "uID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "klv0v78so2yvjwo",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgktth0i",
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
})
