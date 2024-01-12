migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzw0qges",
    "name": "input",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8qm7c0ie",
    "name": "output",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzw0qges",
    "name": "inputs",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8qm7c0ie",
    "name": "outputs",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
