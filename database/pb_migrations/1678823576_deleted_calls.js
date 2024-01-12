migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9vxshinnrowkuam");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9vxshinnrowkuam",
    "created": "2023-01-27 13:17:28.078Z",
    "updated": "2023-01-28 18:05:05.306Z",
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
      },
      {
        "system": false,
        "id": "uqvoyqhi",
        "name": "author",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
