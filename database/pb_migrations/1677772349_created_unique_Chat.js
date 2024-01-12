migrate((db) => {
  const collection = new Collection({
    "id": "vedtywqv9lmzt2m",
    "created": "2023-03-02 15:52:29.943Z",
    "updated": "2023-03-02 15:52:29.943Z",
    "name": "unique_Chat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hq4adrb5",
        "name": "history",
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
  const collection = dao.findCollectionByNameOrId("vedtywqv9lmzt2m");

  return dao.deleteCollection(collection);
})
