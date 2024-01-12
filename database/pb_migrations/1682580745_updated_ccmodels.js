migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ourdgown",
    "name": "isSolded",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // remove
  collection.schema.removeField("ourdgown")

  return dao.saveCollection(collection)
})
