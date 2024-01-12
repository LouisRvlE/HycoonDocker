migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT\n  SUM(nb) as number, u as id from hijab GROUP BY u"
  }

  // remove
  collection.schema.removeField("cwt6sh0s")

  // remove
  collection.schema.removeField("diy0mcmd")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT\n  SUM(nb) as number, nb, u as id from hijab GROUP BY u"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwt6sh0s",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diy0mcmd",
    "name": "nb",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("7kzc1exc")

  return dao.saveCollection(collection)
})
