migrate((db) => {
  const collection = new Collection({
    "id": "2u9f0kxh3r21ezs",
    "created": "2023-05-15 11:08:27.889Z",
    "updated": "2023-05-15 11:08:27.889Z",
    "name": "hk_buffs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "twakzlcv",
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
        "id": "0vrncw9k",
        "name": "isBonus",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "bwtgkspv",
        "name": "value",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "o309ghub",
        "name": "affectedProperty",
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
  const collection = dao.findCollectionByNameOrId("2u9f0kxh3r21ezs");

  return dao.deleteCollection(collection);
})
