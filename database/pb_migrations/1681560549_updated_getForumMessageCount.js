migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  question.isQuestion,\n  question.message,\n  response.title,\n  question.answer_to as id,\n  COUNT(DISTINCT question.answer_to) as q\n  -- COUNT(question.id) as sss\nFROM forum_messages as question\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n-- WHERE question.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("xhlmuirj")

  // remove
  collection.schema.removeField("omzsa3qb")

  // remove
  collection.schema.removeField("igvfnvf8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sufmcjy7",
    "name": "responseId",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psprui2r",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "811bi375",
    "name": "q",
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
    "query": "SELECT\n  response.id as responseId,\n  question.isQuestion,\n  question.message,\n  response.title,\n  question.answer_to as id,\n  COUNT(question.answer_to) as q\n  -- COUNT(question.id) as sss\nFROM forum_messages as question\n-- LEFT JOIN forum_messages as fm ON fm.id = forum_messages.answer_to\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n-- WHERE question.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xhlmuirj",
    "name": "responseId",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omzsa3qb",
    "name": "title",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igvfnvf8",
    "name": "q",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("sufmcjy7")

  // remove
  collection.schema.removeField("psprui2r")

  // remove
  collection.schema.removeField("811bi375")

  return dao.saveCollection(collection)
})