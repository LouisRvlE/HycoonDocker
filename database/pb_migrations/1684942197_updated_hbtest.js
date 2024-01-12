migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.options = {
    "query": "SELECT\n  SUM(nb) as number, nb, users.id as id from hb LEFT JOIN users WHERE hb.u = users.id GROUP BY u"
  }

  // remove
  collection.schema.removeField("s32l5dky")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sjtarca7",
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
    "query": "SELECT\n  SUM(nb) as number, nb, users.username as id from hb LEFT JOIN users WHERE hb.u = users.id GROUP BY u"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s32l5dky",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("sjtarca7")

  return dao.saveCollection(collection)
})
