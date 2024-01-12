migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yiqfmq1l",
    "name": "category",
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
  collection.schema.removeField("yiqfmq1l")

  return dao.saveCollection(collection)
})
