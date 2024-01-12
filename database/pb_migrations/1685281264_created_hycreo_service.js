migrate((db) => {
  const collection = new Collection({
    "id": "kzyzqc53zm5dtnw",
    "created": "2023-05-28 13:41:04.143Z",
    "updated": "2023-05-28 13:41:04.143Z",
    "name": "hycreo_service",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dtxslntk",
        "name": "titre",
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
        "id": "3j6rkyjf",
        "name": "shortText",
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
        "id": "vncdjweb",
        "name": "text",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "syvlihz1",
        "name": "logo",
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
  const collection = dao.findCollectionByNameOrId("kzyzqc53zm5dtnw");

  return dao.deleteCollection(collection);
})
