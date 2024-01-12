migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ilbr0u3gg4ag994");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ilbr0u3gg4ag994",
    "created": "2023-01-27 13:18:02.982Z",
    "updated": "2023-01-27 16:53:22.484Z",
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
      },
      {
        "system": false,
        "id": "dizh21yr",
        "name": "call",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "9vxshinnrowkuam",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
