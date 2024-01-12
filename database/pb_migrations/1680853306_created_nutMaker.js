migrate((db) => {
  const collection = new Collection({
    "id": "g1j6mai7z2vczby",
    "created": "2023-04-07 07:41:46.100Z",
    "updated": "2023-04-07 07:41:46.100Z",
    "name": "nutMaker",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iqmxnnqx",
        "name": "first_name",
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
        "id": "iqkmlc9i",
        "name": "last_name",
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
        "id": "dhqyjiau",
        "name": "social_reason",
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
        "id": "byvijb9a",
        "name": "description",
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
  const collection = dao.findCollectionByNameOrId("g1j6mai7z2vczby");

  return dao.deleteCollection(collection);
})
