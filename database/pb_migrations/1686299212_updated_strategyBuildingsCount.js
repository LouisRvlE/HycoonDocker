migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, type, uID, COUNT(type) AS ligne_count\nFROM strategyBuildings\nGROUP BY uID, type;"
  }

  // remove
  collection.schema.removeField("znik2il6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgktth0i",
    "name": "uID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "klv0v78so2yvjwo",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ijcecbk",
    "name": "ligne_count",
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
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, type, COUNT(type) AS ligne_count\nFROM strategyBuildings\nGROUP BY uID, type;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "znik2il6",
    "name": "ligne_count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("cgktth0i")

  // remove
  collection.schema.removeField("3ijcecbk")

  return dao.saveCollection(collection)
})
