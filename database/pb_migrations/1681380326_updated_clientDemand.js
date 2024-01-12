migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ckefkskul0j4p84")

  collection.listRule = "@request.auth.collectionId != \"_pb_users_auth_\" || @request.auth.isAdmin = true"
  collection.viewRule = "@request.auth.collectionId != \"_pb_users_auth_\" || @request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ckefkskul0j4p84")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
