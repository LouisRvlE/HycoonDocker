migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vuk7efxivqxg1fb",
    "created": "2023-05-15 11:06:00.040Z",
    "updated": "2023-05-15 13:29:34.281Z",
    "name": "hk_characters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ohtdy5yo",
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
        "id": "7nwgwf26",
        "name": "avatar",
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
        "id": "fp0trlbt",
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
        "id": "q3eqxtoq",
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
      },
      {
        "system": false,
        "id": "xfxphqyu",
        "name": "health",
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
        "id": "cxiok4ds",
        "name": "attack",
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
        "id": "0jgckwlj",
        "name": "defense",
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
