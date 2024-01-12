migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hq1crzo22y0bxz8",
    "created": "2023-05-15 13:22:26.885Z",
    "updated": "2023-05-15 14:21:04.420Z",
    "name": "hk_enemies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gakvvioy",
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
        "id": "nmkvmasc",
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
        "id": "voxmz9qn",
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
        "id": "zrfalsmw",
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
        "id": "nmujl9ik",
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
        "id": "smj7vfjr",
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
        "id": "slao2vst",
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
