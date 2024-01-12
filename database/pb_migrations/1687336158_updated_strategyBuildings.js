migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "elyyjoci",
    "name": "position",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // remove
  collection.schema.removeField("elyyjoci")

  return dao.saveCollection(collection)
})
