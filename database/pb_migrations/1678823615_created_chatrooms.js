migrate((db) => {
  const collection = new Collection({
    "id": "37dyw1jgazl4gzr",
    "created": "2023-03-14 19:53:35.885Z",
    "updated": "2023-03-14 19:53:35.885Z",
    "name": "chatrooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "okupvo4r",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("37dyw1jgazl4gzr");

  return dao.deleteCollection(collection);
})
