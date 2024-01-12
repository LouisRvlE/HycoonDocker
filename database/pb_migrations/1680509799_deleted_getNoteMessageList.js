migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("50hvlqp0ytk5o3k");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "50hvlqp0ytk5o3k",
    "created": "2023-04-03 07:48:59.082Z",
    "updated": "2023-04-03 07:51:02.023Z",
    "name": "getNoteMessageList",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rcrprr09",
        "name": "textObject",
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
      "query": "SELECT noteRelation as id, textObject FROM note_message GROUP BY noteRelation"
    }
  });

  return Dao(db).saveCollection(collection);
})
