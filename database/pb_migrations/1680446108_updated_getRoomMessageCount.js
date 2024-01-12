migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(room) as messageCount, room as id FROM chat_messages GROUP BY room"
  }

  // remove
  collection.schema.removeField("9yfm69ke")

  // remove
  collection.schema.removeField("s0wjecjg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdb51icq",
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
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(room) as messageCount, room, (ROW_NUMBER() OVER()) as id FROM chat_messages GROUP BY room"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9yfm69ke",
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
    "id": "s0wjecjg",
    "name": "room",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "37dyw1jgazl4gzr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("pdb51icq")

  return dao.saveCollection(collection)
})
