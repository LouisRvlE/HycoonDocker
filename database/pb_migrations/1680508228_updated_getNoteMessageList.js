migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50hvlqp0ytk5o3k")

  collection.options = {
    "query": "SELECT noteRelation, textObject as id FROM note_message"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50hvlqp0ytk5o3k")

  collection.options = {
    "query": "SELECT noteRelation, noteRelation as id FROM note_message GROUP BY noteRelation"
  }

  return dao.saveCollection(collection)
})
