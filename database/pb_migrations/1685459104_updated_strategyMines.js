migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxentxfg",
    "name": "outputs",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxentxfg",
    "name": "output",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
