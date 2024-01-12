migrate((db) => {
  const collection = new Collection({
    "id": "mr57e9k73r47687",
    "created": "2023-05-01 20:51:02.523Z",
    "updated": "2023-05-01 20:51:02.523Z",
    "name": "controle_form_seb",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "utp1sprh",
        "name": "first_Name",
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
        "id": "ixwvg7ug",
        "name": "last_Name",
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
        "id": "ui9muvzc",
        "name": "socialreason",
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
        "id": "gimskw3j",
        "name": "projet",
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
  const collection = dao.findCollectionByNameOrId("mr57e9k73r47687");

  return dao.deleteCollection(collection);
})
