migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.options = {
    "query": "SELECT noteRelation, (ROW_NUMBER() OVER()) as id FROM note_message"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nukpkwbc",
    "name": "noteRelation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2l65sbh29cp49px",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.options = {
    "query": "SELECT id FROM note_message"
  }

  // remove
  collection.schema.removeField("nukpkwbc")

  return dao.saveCollection(collection)
})
