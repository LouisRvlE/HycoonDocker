migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dxzorpt",
    "name": "answer_to",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "8pdcb2vbzxjd1ld",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dxzorpt",
    "name": "anwser_to",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "8pdcb2vbzxjd1ld",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
