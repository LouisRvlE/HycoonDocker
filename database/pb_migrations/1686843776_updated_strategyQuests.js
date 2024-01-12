migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("177p9oumuaut7fl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezvwm3m4",
    "name": "buildingOnSuccess",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("177p9oumuaut7fl")

  // remove
  collection.schema.removeField("ezvwm3m4")

  return dao.saveCollection(collection)
})
