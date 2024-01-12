migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfxphqyu",
    "name": "health",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxiok4ds",
    "name": "attack",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0jgckwlj",
    "name": "defense",
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
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb")

  // remove
  collection.schema.removeField("xfxphqyu")

  // remove
  collection.schema.removeField("cxiok4ds")

  // remove
  collection.schema.removeField("0jgckwlj")

  return dao.saveCollection(collection)
})
