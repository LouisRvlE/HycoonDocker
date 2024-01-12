migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(chat_messages.room) as messageCount, chat_rooms.id, chat_rooms.updated FROM chat_rooms LEFT JOIN chat_messages on chat_messages.room = chat_rooms.id GROUP BY room"
  }

  // remove
  collection.schema.removeField("hnp80g2s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m0hbkij8",
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
    "query": "SELECT COUNT(room) as messageCount, room as id, chat_rooms.updated FROM chat_messages LEFT JOIN chat_rooms on chat_messages.room = chat_rooms.id GROUP BY room"
  }

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

  // remove
  collection.schema.removeField("m0hbkij8")

  return dao.saveCollection(collection)
})
