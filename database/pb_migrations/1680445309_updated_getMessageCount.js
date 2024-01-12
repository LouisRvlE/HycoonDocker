migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.options = {
    "query": "SELECT COUNT(id) as messageCount, (ROW_NUMBER() OVER()) as id FROM note_message"
  }

  // remove
  collection.schema.removeField("sbu1jlkn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yw1avjgy",
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
    "query": "SELECT COUNT(noteRelation) as messageCount, (ROW_NUMBER() OVER()) as id FROM note_message"
  }

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

  // remove
  collection.schema.removeField("yw1avjgy")

  return dao.saveCollection(collection)
})
