migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmkvmasc",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8")

  // remove
  collection.schema.removeField("nmkvmasc")

  return dao.saveCollection(collection)
})
