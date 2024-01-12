migrate((db) => {
  const collection = new Collection({
    "id": "brnt4lfpv0ld9bh",
    "created": "2023-01-27 13:18:18.796Z",
    "updated": "2023-01-27 13:18:18.796Z",
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("brnt4lfpv0ld9bh");

  return dao.deleteCollection(collection);
})
