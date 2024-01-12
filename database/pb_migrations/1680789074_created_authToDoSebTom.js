migrate((db) => {
  const collection = new Collection({
    "id": "2so36ow5g7yu4xu",
    "created": "2023-04-06 13:51:14.276Z",
    "updated": "2023-04-06 13:51:14.276Z",
    "name": "authToDoSebTom",
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
  const collection = dao.findCollectionByNameOrId("2so36ow5g7yu4xu");

  return dao.deleteCollection(collection);
})
