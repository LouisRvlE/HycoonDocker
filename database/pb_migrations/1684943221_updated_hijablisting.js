migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3hzjpdttjzixbjo")

  collection.options = {
    "query": "SELECT\n  COUNT(nb) as number,\n  users.id from users\n  LEFT JOIN hijab WHERE users.id = hijab.u\n  GROUP BY users.id"
  }

  // remove
  collection.schema.removeField("qktauwrj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c6bgb1d3",
    "name": "number",
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
  const collection = dao.findCollectionByNameOrId("3hzjpdttjzixbjo")

  collection.options = {
    "query": "SELECT\n  COUNT(nb) as number,\n  users.id as id from users\n  LEFT JOIN hijab WHERE users.id = hijab.u\n  GROUP BY users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qktauwrj",
    "name": "number",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("c6bgb1d3")

  return dao.saveCollection(collection)
})
