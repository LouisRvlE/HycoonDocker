migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // remove
  collection.schema.removeField("rledaisv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzw0qges",
    "name": "input",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8qm7c0ie",
    "name": "output",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eiye6ndp",
    "name": "titouan",
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
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rledaisv",
    "name": "consommation",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("hzw0qges")

  // remove
  collection.schema.removeField("8qm7c0ie")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eiye6ndp",
    "name": "workers",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
