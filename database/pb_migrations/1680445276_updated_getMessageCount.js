migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.options = {
    "query": "SELECT COUNT(noteRelation) as messageCount, (ROW_NUMBER() OVER()) as id FROM note_message"
  }

  // remove
  collection.schema.removeField("nukpkwbc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbu1jlkn",
    "name": "messageCount",
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

  // remove
  collection.schema.removeField("sbu1jlkn")

  return dao.saveCollection(collection)
})
