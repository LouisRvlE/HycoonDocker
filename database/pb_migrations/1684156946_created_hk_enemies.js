migrate((db) => {
  const collection = new Collection({
    "id": "hq1crzo22y0bxz8",
    "created": "2023-05-15 13:22:26.885Z",
    "updated": "2023-05-15 13:22:26.885Z",
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
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8");

  return dao.deleteCollection(collection);
})
