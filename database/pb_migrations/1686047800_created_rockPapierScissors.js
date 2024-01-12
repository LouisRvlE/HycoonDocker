migrate((db) => {
  const collection = new Collection({
    "id": "oyhejhomroi4pev",
    "created": "2023-06-06 10:36:40.530Z",
    "updated": "2023-06-06 10:36:40.530Z",
    "name": "rockPapierScissors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4w7pgo1c",
        "name": "paper",
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
        "id": "fvbopkt8",
        "name": "field1",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("oyhejhomroi4pev");

  return dao.deleteCollection(collection);
})
