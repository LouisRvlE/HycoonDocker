migrate((db) => {
  const collection = new Collection({
    "id": "bwifgza9g13csfp",
    "created": "2023-04-02 14:18:31.045Z",
    "updated": "2023-04-02 14:18:31.045Z",
    "name": "getMessageCount",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM note_message"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bwifgza9g13csfp");

  return dao.deleteCollection(collection);
})
