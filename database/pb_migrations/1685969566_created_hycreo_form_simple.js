migrate((db) => {
  const collection = new Collection({
    "id": "29yvfwd1negrq9n",
    "created": "2023-06-05 12:52:46.159Z",
    "updated": "2023-06-05 12:52:46.159Z",
    "name": "hycreo_form_simple",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5pgpikgu",
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
        "id": "mlwvea6g",
        "name": "phone",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("29yvfwd1negrq9n");

  return dao.deleteCollection(collection);
})
