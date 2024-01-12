migrate((db) => {
  const collection = new Collection({
    "id": "hvf9teuec43p5oh",
    "created": "2023-01-21 17:30:46.813Z",
    "updated": "2023-01-21 17:30:46.813Z",
    "name": "admins",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ow2vtxnj",
        "name": "admin_id",
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
        "id": "7civwlrj",
        "name": "avatar",
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
  const collection = dao.findCollectionByNameOrId("hvf9teuec43p5oh");

  return dao.deleteCollection(collection);
})
