migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3hzjpdttjzixbjo");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "3hzjpdttjzixbjo",
    "created": "2023-05-24 15:38:20.248Z",
    "updated": "2023-05-24 15:47:07.332Z",
    "name": "hijablisting",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "emw01ky2",
        "name": "number",
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
      "query": "SELECT\n  COUNT(nb) as number,\n  users.id\n  from users\n  LEFT JOIN hijab WHERE users.id = hijab.u\n  GROUP BY users.id"
    }
  });

  return Dao(db).saveCollection(collection);
})
