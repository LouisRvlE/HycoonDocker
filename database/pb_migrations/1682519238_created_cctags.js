migrate((db) => {
  const collection = new Collection({
    "id": "t2px0oskzh8scel",
    "created": "2023-04-26 14:27:18.191Z",
    "updated": "2023-04-26 14:27:18.191Z",
    "name": "cctags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jdqeliuv",
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
        "id": "5qiezlot",
        "name": "color",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("t2px0oskzh8scel");

  return dao.deleteCollection(collection);
})
