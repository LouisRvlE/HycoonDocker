migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xa8s96e223c3no5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "xa8s96e223c3no5",
    "created": "2022-12-05 17:07:13.528Z",
    "updated": "2023-01-22 10:26:18.917Z",
    "name": "allTheProducts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lhzuthev",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6tprjojn",
        "name": "size",
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
        "id": "trr05ufu",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": [
            "250x250"
          ]
        }
      },
      {
        "system": false,
        "id": "tc5begle",
        "name": "categorie",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
