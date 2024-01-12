migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT COUNT(u) as coucou, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // remove
  collection.schema.removeField("wqz83z5f")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT COUNT(u) as coucou, u as id from hb"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqz83z5f",
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
  collection.schema.removeField("agggdn25")

  return dao.saveCollection(collection)
})
