migrate((db) => {
  const collection = new Collection({
    "id": "xir3847jozruffc",
    "created": "2023-05-24 15:20:56.035Z",
    "updated": "2023-05-24 15:20:56.035Z",
    "name": "hbtest",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wqz83z5f",
        "name": "coucou",
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
    "options": {
      "query": "SELECT COUNT(u) as coucou, u as id from hb"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc");

  return dao.deleteCollection(collection);
})
