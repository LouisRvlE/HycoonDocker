migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6rx1spbo6r3t56z");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6rx1spbo6r3t56z",
    "created": "2023-05-25 12:23:05.407Z",
    "updated": "2023-05-25 12:28:22.570Z",
    "name": "hijabtest",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wmgj82mw",
        "name": "hi",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "igiwgwmzkuw9wxe",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_ZYiwzbc` ON `hijabtest` (`hi`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
