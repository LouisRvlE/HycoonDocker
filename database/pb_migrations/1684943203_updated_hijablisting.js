migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3hzjpdttjzixbjo")

  collection.options = {
    "query": "SELECT\n  SUM(nb) as number,\n  users.id as id from users\n  LEFT JOIN hijab WHERE users.id = hijab.u\n  GROUP BY users.id"
  }

  // remove
  collection.schema.removeField("ox1umuzk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3pht27cx",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3hzjpdttjzixbjo")

  collection.options = {
    "query": "SELECT\n  COALESCE(SUM(nb),0) as number,\n  users.id as id from users\n  LEFT JOIN hijab WHERE users.id = hijab.u\n  GROUP BY users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ox1umuzk",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("3pht27cx")

  return dao.saveCollection(collection)
})
