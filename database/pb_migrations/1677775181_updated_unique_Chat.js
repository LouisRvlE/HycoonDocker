migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vedtywqv9lmzt2m")

  // remove
  collection.schema.removeField("drnclw1m")

  // remove
  collection.schema.removeField("hq4adrb5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfq9ytqk",
    "name": "author",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brhaqomf",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9alhext8",
    "name": "timestamp",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vedtywqv9lmzt2m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drnclw1m",
    "name": "chatName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hq4adrb5",
    "name": "history",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yfq9ytqk")

  // remove
  collection.schema.removeField("brhaqomf")

  // remove
  collection.schema.removeField("9alhext8")

  return dao.saveCollection(collection)
})
