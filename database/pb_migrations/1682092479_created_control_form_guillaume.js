migrate((db) => {
  const collection = new Collection({
    "id": "pk2p8avnxd2q2un",
    "created": "2023-04-21 15:54:39.705Z",
    "updated": "2023-04-21 15:54:39.705Z",
    "name": "control_form_guillaume",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4beiolhc",
        "name": "qsd",
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
  const collection = dao.findCollectionByNameOrId("pk2p8avnxd2q2un");

  return dao.deleteCollection(collection);
})
