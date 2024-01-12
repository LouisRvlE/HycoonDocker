migrate((db) => {
  const collection = new Collection({
    "id": "eik1f73j9xih6fu",
    "created": "2023-05-31 15:00:25.518Z",
    "updated": "2023-05-31 15:00:25.518Z",
    "name": "strategyInfos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5munfhat",
        "name": "info",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("eik1f73j9xih6fu");

  return dao.deleteCollection(collection);
})
