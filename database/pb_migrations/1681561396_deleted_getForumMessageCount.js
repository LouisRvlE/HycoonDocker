migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ynwldttq8yhd7p8",
    "created": "2023-04-02 14:49:44.758Z",
    "updated": "2023-04-15 12:19:30.401Z",
    "name": "getForumMessageCount",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g6m65sqb",
        "name": "title",
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
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  -- COUNT(responses.id) as s,\n  question.id,\n  question.title\n\nFROM forum_messages as responses\n\nLEFT JOIN forum_messages as question ON question.id = responses.answer_to"
    }
  });

  return Dao(db).saveCollection(collection);
})
