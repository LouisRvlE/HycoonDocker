migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2u9f0kxh3r21ezs");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2u9f0kxh3r21ezs",
    "created": "2023-05-15 11:08:27.889Z",
    "updated": "2023-05-15 11:32:54.245Z",
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
      },
      {
        "system": false,
        "id": "agye4edw",
        "name": "tags",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "x078zumvcj0whr4",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "cfc8tli2",
        "name": "rarity",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "iz4sdton3fjwu9g",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
})
