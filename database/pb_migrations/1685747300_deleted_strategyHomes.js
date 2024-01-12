migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3h8xv8tqkzkr9o4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "3h8xv8tqkzkr9o4",
    "created": "2023-05-25 14:05:18.175Z",
    "updated": "2023-06-02 14:48:57.633Z",
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
        "id": "eiye6ndp",
        "name": "inhabitants",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hzw0qges",
        "name": "input",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "8qm7c0ie",
        "name": "output",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "gspy93xr",
        "name": "level",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
