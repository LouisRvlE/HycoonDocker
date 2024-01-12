migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT SUM(nb) as number, nb, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id GROUP BY u"
  }

  // remove
  collection.schema.removeField("ryac8jtl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kdssaiw2",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT SUM(nb) as number, nb, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryac8jtl",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("kdssaiw2")

  return dao.saveCollection(collection)
})
