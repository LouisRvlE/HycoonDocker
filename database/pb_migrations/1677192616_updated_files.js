migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = "@collection.files.user.email = @request.auth.email"
  collection.viewRule = "@collection.files.user.email = @request.auth.email"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hq1xbpvs",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "nl82r3vv7m2h6mp",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp")

  collection.listRule = null
  collection.viewRule = null

  // remove
  collection.schema.removeField("hq1xbpvs")

  return dao.saveCollection(collection)
})
