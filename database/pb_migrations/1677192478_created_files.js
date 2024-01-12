migrate((db) => {
  const collection = new Collection({
    "id": "nl82r3vv7m2h6mp",
    "created": "2023-02-23 22:47:58.503Z",
    "updated": "2023-02-23 22:47:58.503Z",
    "name": "files",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ihndipqz",
        "name": "isRoot",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "7zgute7w",
        "name": "isFile",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "dkb7kmn6",
        "name": "name",
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
        "id": "x8fafzab",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "efatzusj",
        "name": "file",
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
  const collection = dao.findCollectionByNameOrId("nl82r3vv7m2h6mp");

  return dao.deleteCollection(collection);
})
