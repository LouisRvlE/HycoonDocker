migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(chat_messages.room) as messageCount, chat_rooms.id, chat_rooms.updated, chat_rooms.created, chat_rooms.author, chat_rooms.name FROM chat_rooms LEFT JOIN chat_messages on chat_messages.room = chat_rooms.id GROUP BY room"
  }

  // remove
  collection.schema.removeField("vffvjepj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nfgkxokq",
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
    "id": "okupvo4r",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(chat_messages.room) as messageCount, chat_rooms.id, chat_rooms.updated, chat_rooms.created, chat_rooms.author FROM chat_rooms LEFT JOIN chat_messages on chat_messages.room = chat_rooms.id GROUP BY room"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vffvjepj",
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
  collection.schema.removeField("nfgkxokq")

  // remove
  collection.schema.removeField("okupvo4r")

  return dao.saveCollection(collection)
})
