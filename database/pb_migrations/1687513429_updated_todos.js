migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cncrz2zv6z3vpl1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsxvjkwe",
    "name": "todos",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cncrz2zv6z3vpl1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsxvjkwe",
    "name": "todos",
    "type": "json",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
