migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, type, COUNT(type) AS ligne_count\nFROM strategyBuildings\nGROUP BY uID, type;"
  }

  // remove
  collection.schema.removeField("cgktth0i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yctpzuvd",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT COUNT(DISTINCT strategyBuildings.type) as id, strategyBuildings.uID FROM strategyBuildings"
  }

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

  // remove
  collection.schema.removeField("yctpzuvd")

  // remove
  collection.schema.removeField("znik2il6")

  return dao.saveCollection(collection)
})
