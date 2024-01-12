migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxrhat0x",
    "name": "pinned",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo")

  // remove
  collection.schema.removeField("rxrhat0x")

  return dao.saveCollection(collection)
})
