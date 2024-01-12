migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8")

  collection.options = {
    "query": "SELECT COUNT(answer_to) as messageCount, isQuestion, answer_to as id FROM forum_messages WHERE isQuestion = true GROUP BY answer_to"
  }

  // remove
  collection.schema.removeField("p3mvpqtx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tahhpy0j",
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
    "query": "SELECT COUNT(answer_to) as messageCount, isQuestion, answer_to as id FROM forum_messages WHERE message = \"<p>Coucou copains</p>\" GROUP BY answer_to"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p3mvpqtx",
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
  collection.schema.removeField("tahhpy0j")

  return dao.saveCollection(collection)
})
