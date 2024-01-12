migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT COUNT(users.id) as coucou, nb, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // remove
  collection.schema.removeField("qbkozjwz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xvo1jcuv",
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
    "query": "SELECT COUNT(u) as coucou, nb, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbkozjwz",
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
  collection.schema.removeField("xvo1jcuv")

  return dao.saveCollection(collection)
})
