migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w5b5gd5t2jd3o62");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "w5b5gd5t2jd3o62",
    "created": "2023-05-30 15:09:05.234Z",
    "updated": "2023-05-30 15:37:59.147Z",
    "name": "strategyBats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ooh4mroq",
        "name": "type",
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
      "query": "SELECT strategyMines.id as id, strategyMines.type from strategyMines LEFT JOIN strategyFactories"
    }
  });

  return Dao(db).saveCollection(collection);
})
