migrate((db) => {
  const collection = new Collection({
    "id": "19zdbcfuqx8qpnq",
    "created": "2023-05-03 15:27:41.888Z",
    "updated": "2023-05-03 15:27:41.888Z",
    "name": "insultTinder",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ovdwtga",
        "name": "insult",
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
        "id": "mfd7pujq",
        "name": "who",
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
        "id": "tyqrfhm6",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("19zdbcfuqx8qpnq");

  return dao.deleteCollection(collection);
})
