migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("177p9oumuaut7fl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "isdslxli",
    "name": "ressourcesNeeded",
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
  collection.schema.removeField("isdslxli")

  return dao.saveCollection(collection)
})
