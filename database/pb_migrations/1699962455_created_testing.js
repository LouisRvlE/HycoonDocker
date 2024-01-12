/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sht801p940mlpsb",
    "created": "2023-11-14 11:47:35.433Z",
    "updated": "2023-11-14 11:47:35.433Z",
    "name": "testing",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4shulbyf",
        "name": "qqsd",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("sht801p940mlpsb");

  return dao.deleteCollection(collection);
})
