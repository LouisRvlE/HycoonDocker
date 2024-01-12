migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50hvlqp0ytk5o3k")

  collection.options = {
    "query": "SELECT noteRelation as id, textObject FROM note_message"
  }

  // remove
  collection.schema.removeField("nukpkwbc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcrprr09",
    "name": "textObject",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50hvlqp0ytk5o3k")

  collection.options = {
    "query": "SELECT noteRelation, textObject as id FROM note_message"
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
  collection.schema.removeField("rcrprr09")

  return dao.saveCollection(collection)
})
