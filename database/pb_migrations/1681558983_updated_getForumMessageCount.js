migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  forum_messages.id,\n  forum_messages.isQuestion,\n  forum_messages.title,\n  -- COUNT(fm.id) as countR\n  COUNT(fm.message) as c\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.answer_to = forum_messages.id\nWHERE forum_messages.isQuestion = true\n"
  }

  // remove
  collection.schema.removeField("eeuyg9aw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctpp1o4w",
    "name": "c",
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
    "query": "SELECT\n  forum_messages.id,\n  forum_messages.isQuestion,\n  forum_messages.title,\n  -- COUNT(fm.id) as countR\n  fm.message\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.answer_to = forum_messages.id\nWHERE forum_messages.isQuestion = true\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eeuyg9aw",
    "name": "message",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ctpp1o4w")

  return dao.saveCollection(collection)
})
