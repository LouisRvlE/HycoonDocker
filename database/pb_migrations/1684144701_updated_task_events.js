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
      "pattern": "[0-1][0-9]h[0-3]0"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c9qj0pue",
    "name": "endTime",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "[0-1][0-9]h[0-3]0"
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
      "pattern": "[0-1][0-8]h[0-3]0"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c9qj0pue",
    "name": "endTime",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "[0-1][0-8]h[0-3]0"
    }
  }))

  return dao.saveCollection(collection)
})
