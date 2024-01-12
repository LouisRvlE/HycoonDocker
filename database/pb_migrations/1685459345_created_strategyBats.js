migrate((db) => {
  const collection = new Collection({
    "id": "w5b5gd5t2jd3o62",
    "created": "2023-05-30 15:09:05.234Z",
    "updated": "2023-05-30 15:09:05.234Z",
    "name": "strategyBats",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id from strategyMines"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w5b5gd5t2jd3o62");

  return dao.deleteCollection(collection);
})
