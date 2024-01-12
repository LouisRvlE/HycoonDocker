migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp0nufnbdmh91u9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zegfrdwx",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp0nufnbdmh91u9")

  // remove
  collection.schema.removeField("zegfrdwx")

  return dao.saveCollection(collection)
})
