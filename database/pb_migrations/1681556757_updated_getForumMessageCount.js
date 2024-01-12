migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id,\n  COUNT(forum_messages.id) as messageCount,\n  forum_messages.message\nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("k0zgmprr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxdzoitk",
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
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, forum_messages.message\nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\nGROUP BY forum_messages.answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k0zgmprr",
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
  collection.schema.removeField("dxdzoitk")

  return dao.saveCollection(collection)
})
