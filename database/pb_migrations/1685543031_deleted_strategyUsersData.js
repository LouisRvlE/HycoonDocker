migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8nslan3k5xupyql");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "8nslan3k5xupyql",
    "created": "2023-05-25 13:29:44.802Z",
    "updated": "2023-05-31 09:24:45.980Z",
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
        "id": "bboq4zqq",
        "name": "mutate",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tsjsfe6w",
        "name": "ressources",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "obf6gpk8",
        "name": "uID",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "klv0v78so2yvjwo",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
