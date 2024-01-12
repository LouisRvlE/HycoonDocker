migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w5b5gd5t2jd3o62")

  collection.options = {
    "query": "SELECT strategyMines.id as id, strategyMines.type from strategyMines JOIN strategyFactories"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ooh4mroq",
    "name": "type",
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
  const collection = dao.findCollectionByNameOrId("w5b5gd5t2jd3o62")

  collection.options = {
    "query": "SELECT id from strategyMines"
  }

  // remove
  collection.schema.removeField("ooh4mroq")

  return dao.saveCollection(collection)
})
