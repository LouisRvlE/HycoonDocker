migrate((db) => {
  const collection = new Collection({
    "id": "ckefkskul0j4p84",
    "created": "2023-03-06 12:27:00.210Z",
    "updated": "2023-03-06 12:27:00.210Z",
    "name": "clientDemand",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oayhqhwa",
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
        "id": "o6mrqqq5",
        "name": "texte",
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
        "id": "rryjy7je",
        "name": "email",
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
  const collection = dao.findCollectionByNameOrId("ckefkskul0j4p84");

  return dao.deleteCollection(collection);
})
