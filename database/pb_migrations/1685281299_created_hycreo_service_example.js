migrate((db) => {
  const collection = new Collection({
    "id": "27jyexxbouongju",
    "created": "2023-05-28 13:41:39.398Z",
    "updated": "2023-05-28 13:41:39.398Z",
    "name": "hycreo_service_example",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "71yi6q33",
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
        "id": "pgcztjyf",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "xvsu88fv",
        "name": "imgs",
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
  const collection = dao.findCollectionByNameOrId("27jyexxbouongju");

  return dao.deleteCollection(collection);
})
