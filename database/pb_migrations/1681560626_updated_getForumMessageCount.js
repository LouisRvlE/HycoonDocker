migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  question.title,\n  question.isQuestion,\n  question.message,\n  question.answer_to as id,\n  COUNT(DISTINCT response.answer_to) as q\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n"
  }

  // remove
  collection.schema.removeField("3my2aohf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1avjknjx",
    "name": "responseId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8pdcb2vbzxjd1ld",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfvhqcxa",
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
    "query": "SELECT\n  response.id as responseId,\n  question.title,\n  question.isQuestion,\n  question.message,\n  question.answer_to as id\n  -- COUNT(DISTINCT question.answer_to) as q\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3my2aohf",
    "name": "responseId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8pdcb2vbzxjd1ld",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("1avjknjx")

  // remove
  collection.schema.removeField("bfvhqcxa")

  return dao.saveCollection(collection)
})
