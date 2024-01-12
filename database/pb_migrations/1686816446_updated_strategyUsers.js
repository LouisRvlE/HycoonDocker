migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9ilbve5",
    "name": "isAdmin",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // remove
  collection.schema.removeField("e9ilbve5")

  return dao.saveCollection(collection)
})
