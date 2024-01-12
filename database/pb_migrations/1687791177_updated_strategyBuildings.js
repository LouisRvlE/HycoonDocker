migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ytgmiikx",
    "name": "navlink",
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
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // remove
  collection.schema.removeField("ytgmiikx")

  return dao.saveCollection(collection)
})
