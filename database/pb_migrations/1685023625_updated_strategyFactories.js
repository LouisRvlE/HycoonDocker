migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // remove
  collection.schema.removeField("kjnnpmmn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xav3sibp",
    "name": "production",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjnnpmmn",
    "name": "production",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("xav3sibp")

  return dao.saveCollection(collection)
})
