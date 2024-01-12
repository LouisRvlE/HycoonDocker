migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xir3847jozruffc");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "xir3847jozruffc",
    "created": "2023-05-24 15:20:56.035Z",
    "updated": "2023-05-24 15:45:12.177Z",
    "name": "listinghab",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0q6uqbjm",
        "name": "number",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  COALESCE(SUM(nb),0) as number, u as id from hijab GROUP BY u"
    }
  });

  return Dao(db).saveCollection(collection);
})
