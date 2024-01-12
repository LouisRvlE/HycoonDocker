migrate((db) => {
  const collection = new Collection({
    "id": "to0dmx7rrxgz6oh",
    "created": "2023-04-23 01:04:39.317Z",
    "updated": "2023-04-23 01:04:39.317Z",
    "name": "tools",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eeqcb1jy",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 25,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "34tbiorq",
        "name": "tags",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "5l27st39b9gko0a",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "pzlbqhe3",
        "name": "description",
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
        "id": "8uz9wjx2",
        "name": "isLocal",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "x6wtato0",
        "name": "path",
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
  const collection = dao.findCollectionByNameOrId("to0dmx7rrxgz6oh");

  return dao.deleteCollection(collection);
})
