migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9vxshinnrowkuam")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dolrvapq",
    "name": "answer",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9vxshinnrowkuam")

  // remove
  collection.schema.removeField("dolrvapq")

  return dao.saveCollection(collection)
})
