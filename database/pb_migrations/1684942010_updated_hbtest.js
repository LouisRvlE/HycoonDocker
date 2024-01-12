migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT COUNT(DISTINCT u) as coucou, nb, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // remove
  collection.schema.removeField("pe5ikeba")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlpq4ime",
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
    "query": "SELECT COUNT(DISTINCT  users.id) as coucou, nb, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pe5ikeba",
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
  collection.schema.removeField("mlpq4ime")

  return dao.saveCollection(collection)
})
