migrate((db) => {
  const collection = new Collection({
    "id": "8pdcb2vbzxjd1ld",
    "created": "2023-01-23 12:32:49.670Z",
    "updated": "2023-01-23 12:32:49.670Z",
    "name": "forum_messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "toudzc5y",
        "name": "isQuestion",
        "type": "bool",
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
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld");

  return dao.deleteCollection(collection);
})
