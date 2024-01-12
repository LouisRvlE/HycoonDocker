migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc")

  collection.name = "listinghab"

  // remove
  collection.schema.removeField("sjtarca7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w4afv1ik",
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

  collection.name = "hbtest"

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

  // remove
  collection.schema.removeField("w4afv1ik")

  return dao.saveCollection(collection)
})
