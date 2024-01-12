migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT COUNT(strategyBuildings.uID) as id, strategyBuildings.uID FROM strategyBuildings"
  }

  // remove
  collection.schema.removeField("yctpzuvd")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb")

  collection.options = {
    "query": "SELECT id as id, type FROM strategyBuildings"
  }

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

  // remove
  collection.schema.removeField("cgktth0i")

  return dao.saveCollection(collection)
})
