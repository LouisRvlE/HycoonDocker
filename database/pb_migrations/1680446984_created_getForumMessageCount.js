migrate((db) => {
  const collection = new Collection({
    "id": "ynwldttq8yhd7p8",
    "created": "2023-04-02 14:49:44.758Z",
    "updated": "2023-04-02 14:49:44.758Z",
    "name": "getForumMessageCount",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lb4k7cpz",
        "name": "messageCount",
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
        "id": "toudzc5y",
        "name": "isQuestion",
        "type": "bool",
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
      "query": "SELECT COUNT(answer_to) as messageCount, isQuestion, answer_to as id FROM forum_messages GROUP BY answer_to"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ynwldttq8yhd7p8");

  return dao.deleteCollection(collection);
})
