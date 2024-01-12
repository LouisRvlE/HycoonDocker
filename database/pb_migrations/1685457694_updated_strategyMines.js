migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "71ezzjeg",
    "name": "inputs",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  // remove
  collection.schema.removeField("71ezzjeg")

  return dao.saveCollection(collection)
})
