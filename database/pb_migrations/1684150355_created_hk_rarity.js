migrate((db) => {
  const collection = new Collection({
    "id": "iz4sdton3fjwu9g",
    "created": "2023-05-15 11:32:35.414Z",
    "updated": "2023-05-15 11:32:35.414Z",
    "name": "hk_rarity",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qpbdvzku",
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
        "id": "krpybmpk",
        "name": "color",
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
  const collection = dao.findCollectionByNameOrId("iz4sdton3fjwu9g");

  return dao.deleteCollection(collection);
})
