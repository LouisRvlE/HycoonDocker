migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ckefkskul0j4p84")

  collection.listRule = "@request.auth.collectionId != \"_pb_users_auth_\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ckefkskul0j4p84")

  collection.listRule = null

  return dao.saveCollection(collection)
})
