migrate((db) => {
  const collection = new Collection({
    "id": "3h8xv8tqkzkr9o4",
    "created": "2023-05-25 14:05:18.175Z",
    "updated": "2023-05-25 14:05:18.175Z",
    "name": "strategyHomes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hvu3jkwp",
        "name": "uID",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "klv0v78so2yvjwo",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "yd3obkzq",
        "name": "consommation",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eiye6ndp",
        "name": "numberOfWorkers",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4");

  return dao.deleteCollection(collection);
})
