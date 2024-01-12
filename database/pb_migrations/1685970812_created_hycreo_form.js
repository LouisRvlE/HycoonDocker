migrate((db) => {
  const collection = new Collection({
    "id": "q6vqyd048edmp71",
    "created": "2023-06-05 13:13:32.094Z",
    "updated": "2023-06-05 13:13:32.094Z",
    "name": "hycreo_form",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tsdjek9h",
        "name": "nom",
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
        "id": "a19undmh",
        "name": "prenom",
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
        "id": "hpqikpjg",
        "name": "raisonSocial",
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
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q6vqyd048edmp71");

  return dao.deleteCollection(collection);
})
