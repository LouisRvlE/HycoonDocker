migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title as fptitle, forum_messages.title \nFROM forum_messages\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\nWHERE fparent.isQuestion = true\nGROUP BY forum_messages.answer_to"
  }

  // remove
  collection.schema.removeField("mdfuhz9t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgnfgilt",
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
    "query": "SELECT forum_messages.id, COUNT(forum_messages.id) as messageCount, fparent.title\nFROM forum_messages\n\nLEFT JOIN forum_messages as fparent on forum_messages.answer_to = fparent.id\nWHERE fparent.isQuestion = true\nGROUP BY forum_messages.answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdfuhz9t",
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
  collection.schema.removeField("jgnfgilt")

  return dao.saveCollection(collection)
})
