migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT\n  SUM(nb) as number, nb, u as id from hijab GROUP BY u"
  }

  // remove
  collection.schema.removeField("b75ah5ic")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT\n  SUM(nb) as number, nb, users.id as id from hijab LEFT JOIN users WHERE hijab.u = users.id GROUP BY u"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b75ah5ic",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("cwt6sh0s")

  return dao.saveCollection(collection)
})
