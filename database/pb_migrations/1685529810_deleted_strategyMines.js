migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("96r2q5bn15z6tm7");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "96r2q5bn15z6tm7",
    "created": "2023-05-25 14:02:22.731Z",
    "updated": "2023-05-30 15:06:19.042Z",
    "name": "strategyMines",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hecxeo2p",
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
        "id": "ooh4mroq",
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
        "id": "qws0vbfo",
        "name": "workers",
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
        "id": "71ezzjeg",
        "name": "inputs",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "zxentxfg",
        "name": "outputs",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
})
