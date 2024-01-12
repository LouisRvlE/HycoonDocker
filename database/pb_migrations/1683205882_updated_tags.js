migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l27st39b9gko0a")

  collection.indexes = [
    "CREATE INDEX `_5l27st39b9gko0a_created_idx` ON `tags` (`created`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9zvovaj",
    "name": "color",
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
  const collection = dao.findCollectionByNameOrId("5l27st39b9gko0a")

  collection.indexes = [
    "CREATE INDEX `_5l27st39b9gko0a_created_idx` ON \"tags\" (`created`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9zvovaj",
    "name": "color",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
    }
  }))

  return dao.saveCollection(collection)
})
