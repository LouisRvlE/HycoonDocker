migrate((db) => {
  const collection = new Collection({
    "id": "cncrz2zv6z3vpl1",
    "created": "2023-06-23 09:16:29.776Z",
    "updated": "2023-06-23 09:16:29.776Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gtd54inq",
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
        "id": "rsxvjkwe",
        "name": "todos",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("cncrz2zv6z3vpl1");

  return dao.deleteCollection(collection);
})
