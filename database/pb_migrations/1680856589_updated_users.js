migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.updateRule = "email = @request.auth.email || @request.auth.isAdmin = true"
  collection.deleteRule = "email = @request.auth.email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
