migrate((db) => {
  const collection = new Collection({
    "id": "ytb6gq6ttia5bve",
    "created": "2023-05-02 09:35:26.494Z",
    "updated": "2023-05-02 09:35:26.494Z",
    "name": "javaRestAPIOne",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2p8xesft",
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
        "id": "bs7cyr0d",
        "name": "content",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ytb6gq6ttia5bve");

  return dao.deleteCollection(collection);
})
