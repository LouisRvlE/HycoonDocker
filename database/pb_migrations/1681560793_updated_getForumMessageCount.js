migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT\n  response.id as responseId,\n  question.title,\n  question.isQuestion,\n  question.message,\n  response.answer_to as id,\n  COUNT(question.title) as c\n  -- COUNT(response.answer_to) as q\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\nWHERE response.isQuestion = false\n"
  }

  // remove
  collection.schema.removeField("gosoqyrp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "voip3nik",
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
    "id": "xuk7rxib",
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
    "query": "SELECT\n  response.id as responseId,\n  question.title,\n  question.isQuestion,\n  question.message,\n  response.answer_to as id\n  -- COUNT(response.answer_to) as q\nFROM forum_messages as question\nLEFT JOIN forum_messages as response ON response.answer_to = question.id\nWHERE response.isQuestion = false\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gosoqyrp",
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
  collection.schema.removeField("voip3nik")

  // remove
  collection.schema.removeField("xuk7rxib")

  return dao.saveCollection(collection)
})
