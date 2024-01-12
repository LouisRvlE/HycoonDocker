migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("brnt4lfpv0ld9bh");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "brnt4lfpv0ld9bh",
    "created": "2023-01-27 13:18:18.796Z",
    "updated": "2023-01-27 16:53:28.910Z",
    "name": "answerCandidates",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "57ee6tb3",
        "name": "data",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ypb9jnxe",
        "name": "call",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "9vxshinnrowkuam",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
