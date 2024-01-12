migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb")

  // remove
  collection.schema.removeField("tg14mugd")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tg14mugd",
    "name": "data",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
