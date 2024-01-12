migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x078zumvcj0whr4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "x078zumvcj0whr4",
    "created": "2023-05-15 11:07:35.054Z",
    "updated": "2023-05-15 13:19:10.845Z",
    "name": "hk_tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mfygqfit",
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
        "id": "t5adse3k",
        "name": "theme",
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
        "id": "wleqjw6c",
        "name": "image",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
