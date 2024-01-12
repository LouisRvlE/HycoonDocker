migrate((db) => {
  const collection = new Collection({
    "id": "j9h0bttbjregwh5",
    "created": "2023-02-01 21:49:47.599Z",
    "updated": "2023-02-01 21:49:47.599Z",
    "name": "note_message",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "icfiopxb",
        "name": "isScript",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "1hb5m4j9",
        "name": "text",
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
  const collection = dao.findCollectionByNameOrId("j9h0bttbjregwh5");

  return dao.deleteCollection(collection);
})
