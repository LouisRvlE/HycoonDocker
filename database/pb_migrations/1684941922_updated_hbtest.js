migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT COUNT(u) as coucou, users.username, nb as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // remove
  collection.schema.removeField("agggdn25")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nodv7qxz",
    "name": "coucou",
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
    "id": "2dvxwted",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT COUNT(u) as coucou, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "agggdn25",
    "name": "coucou",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("nodv7qxz")

  // remove
  collection.schema.removeField("2dvxwted")

  return dao.saveCollection(collection)
})
