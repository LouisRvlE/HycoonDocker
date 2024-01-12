migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(chat_messages.room) as messageCount, chat_rooms.id, chat_rooms.updated, chat_rooms.author FROM chat_rooms LEFT JOIN chat_messages on chat_messages.room = chat_rooms.id GROUP BY room"
  }

  // remove
  collection.schema.removeField("t23lgku1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxfagsfh",
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
    "id": "sxxvqtot",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v")

  collection.options = {
    "query": "SELECT COUNT(chat_messages.room) as messageCount, chat_rooms.id, chat_rooms.updated FROM chat_rooms LEFT JOIN chat_messages on chat_messages.room = chat_rooms.id GROUP BY room"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t23lgku1",
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
  collection.schema.removeField("rxfagsfh")

  // remove
  collection.schema.removeField("sxxvqtot")

  return dao.saveCollection(collection)
})
