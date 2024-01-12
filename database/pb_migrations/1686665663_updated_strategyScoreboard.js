migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lfcq7peirj3nmu2")

  collection.options = {
    "query": "SELECT id, username, (ressourcesScore + buildingScore) as score from strategyUsers"
  }

  // remove
  collection.schema.removeField("izuxivbj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j1lhywhq",
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
    "id": "mbduziv9",
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
    "query": "SELECT id, username from strategyUsers"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izuxivbj",
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

  // remove
  collection.schema.removeField("j1lhywhq")

  // remove
  collection.schema.removeField("mbduziv9")

  return dao.saveCollection(collection)
})
