migrate((db) => {
  const collection = new Collection({
    "id": "mp0nufnbdmh91u9",
    "created": "2023-05-12 14:39:26.936Z",
    "updated": "2023-05-12 14:39:26.936Z",
    "name": "task_events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "85zvhwze",
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
        "id": "ypxcn8ov",
        "name": "startTime",
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
        "id": "c9qj0pue",
        "name": "endTime",
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
        "id": "95hps1bt",
        "name": "tasks",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "7hdfzfddz0s1eg4",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "cz7fcwqi",
        "name": "participants",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "bxxcsfpv",
        "name": "author",
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
      },
      {
        "system": false,
        "id": "magiewvy",
        "name": "standalone",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "peifwb0o",
        "name": "day",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("mp0nufnbdmh91u9");

  return dao.deleteCollection(collection);
})
