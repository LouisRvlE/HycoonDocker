migrate((db) => {
  const collection = new Collection({
    "id": "ilbr0u3gg4ag994",
    "created": "2023-01-27 13:18:02.982Z",
    "updated": "2023-01-27 13:18:02.982Z",
    "name": "offerCandidates",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwdldekb",
        "name": "data",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("ilbr0u3gg4ag994");

  return dao.deleteCollection(collection);
})
