migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  forum_messages.id,\n  forum_messages.isQuestion,\n  forum_messages.title,\n  COUNT(fm.id) as countR\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.answer_to = forum_messages.id\nWHERE forum_messages.isQuestion = true\n"
  }

  // remove
  collection.schema.removeField("dhswcizq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "swpjmxfu",
    "name": "countR",
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
    "query": "SELECT\n  forum_messages.id,\n  forum_messages.isQuestion,\n  forum_messages.title,\n  fm.title as fTitle\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nWHERE forum_messages.isQuestion = true\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dhswcizq",
    "name": "fTitle",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("swpjmxfu")

  return dao.saveCollection(collection)
})
