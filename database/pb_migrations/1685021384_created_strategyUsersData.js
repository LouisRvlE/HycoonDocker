migrate((db) => {
  const collection = new Collection({
    "id": "8nslan3k5xupyql",
    "created": "2023-05-25 13:29:44.802Z",
    "updated": "2023-05-25 13:29:44.802Z",
    "name": "strategyUsersData",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ba4xgi1o",
        "name": "incomes",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "va3ijocy",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("8nslan3k5xupyql");

  return dao.deleteCollection(collection);
})
