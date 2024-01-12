migrate((db) => {
  const collection = new Collection({
    "id": "3hzjpdttjzixbjo",
    "created": "2023-05-24 15:38:20.248Z",
    "updated": "2023-05-24 15:38:20.248Z",
    "name": "hijablisting",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "obmukffq",
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
      "query": "SELECT\n  SUM(nb) as number, users.id as id from users\n  LEFT JOIN hijab WHERE hijab.u = users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3hzjpdttjzixbjo");

  return dao.deleteCollection(collection);
})
