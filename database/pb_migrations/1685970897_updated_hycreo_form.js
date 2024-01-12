migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6vqyd048edmp71")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "57car5wy",
    "name": "preferedContact",
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
    "id": "ui6gzf3u",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqndsxo1",
    "name": "phone",
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
    "id": "tqgnbuj6",
    "name": "demandType",
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
    "id": "ybtmghno",
    "name": "text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6vqyd048edmp71")

  // remove
  collection.schema.removeField("57car5wy")

  // remove
  collection.schema.removeField("ui6gzf3u")

  // remove
  collection.schema.removeField("mqndsxo1")

  // remove
  collection.schema.removeField("tqgnbuj6")

  // remove
  collection.schema.removeField("ybtmghno")

  return dao.saveCollection(collection)
})
