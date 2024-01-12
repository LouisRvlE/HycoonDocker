migrate((db) => {
  const collection = new Collection({
    "id": "klv0v78so2yvjwo",
    "created": "2023-05-25 13:51:41.017Z",
    "updated": "2023-05-25 13:51:41.017Z",
    "name": "strategyUsers",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("klv0v78so2yvjwo");

  return dao.deleteCollection(collection);
})
