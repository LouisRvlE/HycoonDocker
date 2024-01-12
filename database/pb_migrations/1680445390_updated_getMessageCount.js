migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp")

  collection.options = {
    "query": "SELECT COUNT(noteRelation) as messageCount, noteRelation, (ROW_NUMBER() OVER()) as id FROM note_message GROUP BY noteRelation"
  }

  // remove
  collection.schema.removeField("su1wvakj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w9y9xgfc",
    "name": "messageCount",
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
    "query": "SELECT COUNT(noteRelation) as messageCount, (ROW_NUMBER() OVER()) as id FROM note_message GROUP BY noteRelation"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "su1wvakj",
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
  collection.schema.removeField("w9y9xgfc")

  // remove
  collection.schema.removeField("nukpkwbc")

  return dao.saveCollection(collection)
})
