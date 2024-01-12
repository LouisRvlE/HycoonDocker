migrate((db) => {
  const collection = new Collection({
    "id": "lfcq7peirj3nmu2",
    "created": "2023-06-13 14:13:36.105Z",
    "updated": "2023-06-13 14:13:36.105Z",
    "name": "strategyScoreboard",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "izuxivbj",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, username from strategyUsers"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lfcq7peirj3nmu2");

  return dao.deleteCollection(collection);
})
