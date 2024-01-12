migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dwrd863ju7e13il")

  // remove
  collection.schema.removeField("dopzjr9q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgtty5hf",
    "name": "email",
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
  const collection = dao.findCollectionByNameOrId("dwrd863ju7e13il")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dopzjr9q",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("cgtty5hf")

  return dao.saveCollection(collection)
})
