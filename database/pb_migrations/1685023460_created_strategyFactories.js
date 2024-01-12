migrate((db) => {
  const collection = new Collection({
    "id": "kc6ufpwwdrs7v37",
    "created": "2023-05-25 14:04:20.370Z",
    "updated": "2023-05-25 14:04:20.370Z",
    "name": "strategyFactories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cgktth0i",
        "name": "uID",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "klv0v78so2yvjwo",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "yctpzuvd",
        "name": "type",
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
        "id": "kjnnpmmn",
        "name": "production",
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
        "id": "x2gvs2ki",
        "name": "workers",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("kc6ufpwwdrs7v37");

  return dao.deleteCollection(collection);
})
