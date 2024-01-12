migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nukpkwbc",
    "name": "noteRelation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "2l65sbh29cp49px",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5")

  // remove
  collection.schema.removeField("nukpkwbc")

  return dao.saveCollection(collection)
})
