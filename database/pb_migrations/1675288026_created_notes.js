migrate((db) => {
  const collection = new Collection({
    "id": "2l65sbh29cp49px",
    "created": "2023-02-01 21:47:06.440Z",
    "updated": "2023-02-01 21:47:06.440Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tdnngsvf",
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
        "id": "eeisefnk",
        "name": "note",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2l65sbh29cp49px");

  return dao.deleteCollection(collection);
})
