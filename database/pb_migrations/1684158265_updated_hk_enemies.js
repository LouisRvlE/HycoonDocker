migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8")

  // remove
  collection.schema.removeField("3d1kxfhx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmujl9ik",
    "name": "health",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smj7vfjr",
    "name": "attack",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slao2vst",
    "name": "defense",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrfalsmw",
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
  const collection = dao.findCollectionByNameOrId("hq1crzo22y0bxz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3d1kxfhx",
    "name": "data",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("nmujl9ik")

  // remove
  collection.schema.removeField("smj7vfjr")

  // remove
  collection.schema.removeField("slao2vst")

  // remove
  collection.schema.removeField("zrfalsmw")

  return dao.saveCollection(collection)
})
