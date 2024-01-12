migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp0nufnbdmh91u9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypxcn8ov",
    "name": "startTime",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "[0-9][0-9]h[0-9][0-9]"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp0nufnbdmh91u9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypxcn8ov",
    "name": "startTime",
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
})
