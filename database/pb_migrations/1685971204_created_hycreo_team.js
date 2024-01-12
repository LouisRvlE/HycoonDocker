migrate((db) => {
  const collection = new Collection({
    "id": "a5iuwxbo0aej95s",
    "created": "2023-06-05 13:20:04.152Z",
    "updated": "2023-06-05 13:20:04.152Z",
    "name": "hycreo_team",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "94fjlxpp",
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
        "id": "ham699je",
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
        "id": "4te5qxes",
        "name": "desc",
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
  const collection = dao.findCollectionByNameOrId("a5iuwxbo0aej95s");

  return dao.deleteCollection(collection);
})
