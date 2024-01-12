migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ib3c115b",
    "name": "order",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 99
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // remove
  collection.schema.removeField("ib3c115b")

  return dao.saveCollection(collection)
})
