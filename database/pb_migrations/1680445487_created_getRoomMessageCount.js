migrate((db) => {
  const collection = new Collection({
    "id": "zw11uqpi0woh14v",
    "created": "2023-04-02 14:24:47.561Z",
    "updated": "2023-04-02 14:24:47.561Z",
    "name": "getRoomMessageCount",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9yfm69ke",
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
        "id": "s0wjecjg",
        "name": "room",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "37dyw1jgazl4gzr",
          "cascadeDelete": false,
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
      "query": "SELECT COUNT(room) as messageCount, room, (ROW_NUMBER() OVER()) as id FROM chat_messages GROUP BY room"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zw11uqpi0woh14v");

  return dao.deleteCollection(collection);
})
