migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("01kodgaaa0dt5k5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "01kodgaaa0dt5k5",
    "created": "2022-12-26 17:56:46.194Z",
    "updated": "2023-01-22 10:26:18.917Z",
    "name": "obsidian_vault",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j1jtm3wu",
        "name": "markdown",
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
        "id": "cg2vncrt",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tvuqkijh",
        "name": "path",
        "type": "text",
        "required": true,
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
})
