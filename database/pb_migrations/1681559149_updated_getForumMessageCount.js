migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  forum_messages.id,\n  forum_messages.isQuestion,\n  fm.message,\n  fm.title\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nWHERE forum_messages.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("bfeugklh")

  // remove
  collection.schema.removeField("r2cz3ntw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jm12xbis",
    "name": "message",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxfkuslj",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  forum_messages.id,\n  forum_messages.isQuestion,\n  fm.message,\n  -- COUNT(forum_messages.answer_to) as countR,\n  fm.title\n  -- COUNT(fm.message) as c\nFROM forum_messages\n-- LEFT JOIN users on users.id = forum_messages.author\nLEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nWHERE forum_messages.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfeugklh",
    "name": "message",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r2cz3ntw",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jm12xbis")

  // remove
  collection.schema.removeField("oxfkuslj")

  return dao.saveCollection(collection)
})
