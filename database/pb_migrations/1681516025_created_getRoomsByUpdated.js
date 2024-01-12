migrate((db) => {
  const collection = new Collection({
    "id": "lsu8h2bddipk2mz",
    "created": "2023-04-14 23:47:05.385Z",
    "updated": "2023-04-14 23:47:05.385Z",
    "name": "getRoomsByUpdated",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "okupvo4r",
        "name": "name",
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
      "query": "SELECT id, updated, name FROM chat_rooms"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lsu8h2bddipk2mz");

  return dao.deleteCollection(collection);
})
