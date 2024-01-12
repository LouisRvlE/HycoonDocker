migrate((db) => {
  const collection = new Collection({
    "id": "v9lmy74625kovve",
    "created": "2023-03-14 19:54:33.134Z",
    "updated": "2023-03-14 19:54:33.134Z",
    "name": "chat_message",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "giatjflj",
        "name": "content",
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
        "id": "g0kupgpz",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "s0wjecjg",
        "name": "room",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "37dyw1jgazl4gzr",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("v9lmy74625kovve");

  return dao.deleteCollection(collection);
})
