migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0p8t3d5s",
    "name": "clock",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // remove
  collection.schema.removeField("0p8t3d5s")

  return dao.saveCollection(collection)
})
