migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kse4ph2a",
    "name": "isPublic",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px")

  // remove
  collection.schema.removeField("kse4ph2a")

  return dao.saveCollection(collection)
})
