migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b1606xaznngb3ui");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "b1606xaznngb3ui",
    "created": "2023-04-26 15:30:10.962Z",
    "updated": "2023-04-27 15:54:15.054Z",
    "name": "ccmodels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "flvjxral",
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
        "id": "azwoefoq",
        "name": "subName",
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
        "id": "qse9oprh",
        "name": "description",
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
        "id": "ysjklhop",
        "name": "tags",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "t2px0oskzh8scel",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "rfmyz1kq",
        "name": "price",
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
        "id": "90hkeeve",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "ourdgown",
        "name": "isSolded",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tp3nfcl5",
        "name": "soldPercent",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1
        }
      },
      {
        "system": false,
        "id": "dxj3fo9d",
        "name": "stock",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
