migrate((db) => {
  const collection = new Collection({
    "id": "50hvlqp0ytk5o3k",
    "created": "2023-04-03 07:48:59.082Z",
    "updated": "2023-04-03 07:48:59.082Z",
    "name": "getNoteMessageList",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nukpkwbc",
        "name": "noteRelation",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "2l65sbh29cp49px",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
      "query": "SELECT noteRelation, noteRelation as id FROM note_message GROUP BY noteRelation"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("50hvlqp0ytk5o3k");

  return dao.deleteCollection(collection);
})
