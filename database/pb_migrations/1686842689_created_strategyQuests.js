migrate((db) => {
  const collection = new Collection({
    "id": "177p9oumuaut7fl",
    "created": "2023-06-15 15:24:49.727Z",
    "updated": "2023-06-15 15:24:49.727Z",
    "name": "strategyQuests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6pi8wcuc",
        "name": "buildingsOnSuccess",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "eik1f73j9xih6fu",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "sdeab6gr",
        "name": "ressourcesNeeded",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "eik1f73j9xih6fu",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
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
  const collection = dao.findCollectionByNameOrId("177p9oumuaut7fl");

  return dao.deleteCollection(collection);
})
