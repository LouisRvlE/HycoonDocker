migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eeqcb1jy",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 25,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eeqcb1jy",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 25,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
