migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nwgwf26",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tg14mugd",
    "name": "data",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fp0trlbt",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x078zumvcj0whr4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q3eqxtoq",
    "name": "rarity",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "iz4sdton3fjwu9g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vuk7efxivqxg1fb")

  // remove
  collection.schema.removeField("7nwgwf26")

  // remove
  collection.schema.removeField("tg14mugd")

  // remove
  collection.schema.removeField("fp0trlbt")

  // remove
  collection.schema.removeField("q3eqxtoq")

  return dao.saveCollection(collection)
})
