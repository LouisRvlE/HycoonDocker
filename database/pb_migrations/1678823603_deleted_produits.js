migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qtzu4l0hwc9s867");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "qtzu4l0hwc9s867",
    "created": "2022-12-05 16:25:51.748Z",
    "updated": "2023-01-22 10:26:18.916Z",
    "name": "produits",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ewpiafyd",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wi8pikzb",
        "name": "size",
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
        "id": "o1fxcp21",
        "name": "categories",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
})
