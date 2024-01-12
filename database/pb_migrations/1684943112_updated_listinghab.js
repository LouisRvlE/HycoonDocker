migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT\n  COALESCE(SUM(nb),0) as number, u as id from hijab GROUP BY u"
  }

  // remove
  collection.schema.removeField("7kzc1exc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0q6uqbjm",
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
    "query": "SELECT\n  SUM(nb) as number, u as id from hijab GROUP BY u"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7kzc1exc",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("0q6uqbjm")

  return dao.saveCollection(collection)
})
