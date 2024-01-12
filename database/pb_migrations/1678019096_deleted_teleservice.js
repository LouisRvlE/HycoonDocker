migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fje5v997nwli0vg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "fje5v997nwli0vg",
    "created": "2023-02-10 18:16:38.252Z",
    "updated": "2023-02-10 18:16:38.252Z",
    "name": "teleservice",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y8ntp7ya",
        "name": "field",
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
})
