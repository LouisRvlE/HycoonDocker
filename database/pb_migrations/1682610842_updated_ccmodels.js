migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azwoefoq",
    "name": "subName",
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
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui")

  // remove
  collection.schema.removeField("azwoefoq")

  return dao.saveCollection(collection)
})
