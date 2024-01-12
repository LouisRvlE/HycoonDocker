/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.updateRule = "id = @request.auth.id\n\t&& @request.data.role:isset != true\n|| @request.auth.isAdmin = true\n\n|| @request.data.role = \"USER\"\n\t&& @request.auth.verified = true\n"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.updateRule = "id = @request.auth.id\n\n|| @request.auth.isAdmin = true\n\n|| @request.data.role = \"USER\"\n\t&& @request.auth.verified = true\n"

  return dao.saveCollection(collection)
})
