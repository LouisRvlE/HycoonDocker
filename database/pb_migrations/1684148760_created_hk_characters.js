migrate((db) => {
  const collection = new Collection({
    "id": "vuk7efxivqxg1fb",
    "created": "2023-05-15 11:06:00.040Z",
    "updated": "2023-05-15 11:06:00.040Z",
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
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb");

  return dao.deleteCollection(collection);
})
