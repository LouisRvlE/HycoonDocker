migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3hzjpdttjzixbjo")

  collection.options = {
    "query": "SELECT\n  SUM(nb) as number, users.id as id from users\n  LEFT JOIN hijab WHERE hijab.u = users.id\n  GROUP BY users.id"
  }

  // remove
  collection.schema.removeField("obmukffq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hoy1bf20",
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
    "query": "SELECT\n  SUM(nb) as number, users.id as id from users\n  LEFT JOIN hijab WHERE hijab.u = users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obmukffq",
    "name": "number",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("hoy1bf20")

  return dao.saveCollection(collection)
})
