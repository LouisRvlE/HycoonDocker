migrate((db) => {
  const collection = new Collection({
    "id": "n56si3nvixqfjgb",
    "created": "2023-06-09 08:22:19.829Z",
    "updated": "2023-06-09 08:22:19.829Z",
    "name": "strategyBuildingsCount",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yctpzuvd",
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
      "query": "SELECT id as id, type FROM strategyBuildings"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n56si3nvixqfjgb");

  return dao.deleteCollection(collection);
})
