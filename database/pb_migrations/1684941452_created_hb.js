migrate((db) => {
  const collection = new Collection({
    "id": "igiwgwmzkuw9wxe",
    "created": "2023-05-24 15:17:32.587Z",
    "updated": "2023-05-24 15:17:32.587Z",
    "name": "hb",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "diy0mcmd",
        "name": "nb",
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
        "id": "g8c9bmyu",
        "name": "t",
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
  const collection = dao.findCollectionByNameOrId("igiwgwmzkuw9wxe");

  return dao.deleteCollection(collection);
})
