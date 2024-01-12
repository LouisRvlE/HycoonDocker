migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // remove
  collection.schema.removeField("1hb5m4j9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcrprr09",
    "name": "textObject",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hb5m4j9",
    "name": "text",
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
  collection.schema.removeField("rcrprr09")

  return dao.saveCollection(collection)
})
