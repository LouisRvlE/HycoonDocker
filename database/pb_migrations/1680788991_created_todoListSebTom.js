migrate((db) => {
  const collection = new Collection({
    "id": "kt4jjrn6pg4c2qr",
    "created": "2023-04-06 13:49:51.799Z",
    "updated": "2023-04-06 13:49:51.799Z",
    "name": "todoListSebTom",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nz6ggna3",
        "name": "title",
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
        "id": "66jebc7g",
        "name": "description",
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
        "id": "6i6vtsuj",
        "name": "file",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
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
  const collection = dao.findCollectionByNameOrId("kt4jjrn6pg4c2qr");

  return dao.deleteCollection(collection);
})
