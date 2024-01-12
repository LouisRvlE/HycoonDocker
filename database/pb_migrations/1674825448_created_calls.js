migrate((db) => {
  const collection = new Collection({
    "id": "9vxshinnrowkuam",
    "created": "2023-01-27 13:17:28.078Z",
    "updated": "2023-01-27 13:17:28.078Z",
    "name": "calls",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6alrcsey",
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
  const collection = dao.findCollectionByNameOrId("9vxshinnrowkuam");

  return dao.deleteCollection(collection);
})
