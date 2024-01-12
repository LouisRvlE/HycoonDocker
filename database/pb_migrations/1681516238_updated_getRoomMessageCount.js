migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(room) as messageCount, room as id, chat_rooms.updated FROM chat_messages LEFT JOIN chat_rooms on chat_messages.room = chat_rooms.id GROUP BY room"
  }

  // remove
  collection.schema.removeField("rwbtvsak")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnp80g2s",
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
    "query": "SELECT COUNT(room) as messageCount, room as id FROM chat_messages GROUP BY room"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rwbtvsak",
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
  collection.schema.removeField("hnp80g2s")

  return dao.saveCollection(collection)
})
