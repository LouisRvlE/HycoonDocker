migrate((db) => {
  const collection = new Collection({
    "id": "ghll2ifpi8wyrb7",
    "created": "2023-02-07 13:32:20.599Z",
    "updated": "2023-02-07 13:32:20.599Z",
    "name": "test",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ghll2ifpi8wyrb7");

  return dao.deleteCollection(collection);
})
