migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lfcq7peirj3nmu2")

  collection.options = {
    "query": "SELECT id, username, (ressourcesScore + buildingScore) as score from strategyUsers ORDER BY score DESC"
  }

  // remove
  collection.schema.removeField("sy5em2ug")

  // remove
  collection.schema.removeField("xewptrpy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hvef5x5x",
    "name": "username",
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
    "id": "lqbkxnk4",
    "name": "score",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lfcq7peirj3nmu2")

  collection.options = {
    "query": "SELECT id, username, (ressourcesScore + buildingScore) as score from strategyUsers ORDER BY score"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sy5em2ug",
    "name": "username",
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
    "id": "xewptrpy",
    "name": "score",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("hvef5x5x")

  // remove
  collection.schema.removeField("lqbkxnk4")

  return dao.saveCollection(collection)
})
