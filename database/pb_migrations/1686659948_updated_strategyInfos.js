migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eik1f73j9xih6fu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyr4mdsr",
    "name": "score",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d6zc6fxx",
    "name": "multiplier",
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
  const collection = dao.findCollectionByNameOrId("eik1f73j9xih6fu")

  // remove
  collection.schema.removeField("eyr4mdsr")

  // remove
  collection.schema.removeField("d6zc6fxx")

  return dao.saveCollection(collection)
})
