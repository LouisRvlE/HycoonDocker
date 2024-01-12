migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f2ttuyvm3xgj8c4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "f2ttuyvm3xgj8c4",
    "created": "2023-06-27 00:57:04.906Z",
    "updated": "2023-06-27 00:57:04.906Z",
    "name": "trackmania_sign",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nlgux7sq",
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
        "id": "yge6lkwq",
        "name": "sign",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpeg",
            "image/vnd.mozilla.apng"
          ],
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
})
