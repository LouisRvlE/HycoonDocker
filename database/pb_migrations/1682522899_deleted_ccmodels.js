migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0n7gakbu0i2ym4u");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0n7gakbu0i2ym4u",
    "created": "2023-04-26 14:26:38.697Z",
    "updated": "2023-04-26 14:38:47.932Z",
    "name": "ccmodels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kl10cm26",
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
        "id": "ccbdgusn",
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
        "id": "lohdvxj1",
        "name": "tags",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "2so36ow5g7yu4xu",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "h17x7gum",
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
        "id": "mit8ehsp",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [
            "480x720"
          ]
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
